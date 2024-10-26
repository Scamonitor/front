import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faStop } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/Navbar";
import "../styles/audio.css"; // Make sure to create and style this CSS file


import { MediaRecorder, register } from "extendable-media-recorder";
import { connect } from "extendable-media-recorder-wav-encoder";
import { useNavigate } from "react-router-dom";

function Audio() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);

  const [record, setRecord] = useState(false);

  async function enableStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      await register(await connect());
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "audio/wav",
      });

      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      audioContextRef.current = audioContext;
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;
      source.connect(analyser);
      analyserRef.current = analyser;

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const blob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        setAudioBlob(blob);
        uploadRecording(blob);
        const bf = await blob.arrayBuffer();
        console.log(bf);
        audioChunksRef.current = [];
      };
    } catch (err) {
      console.error("Error accessing the microphone", err);
    }
  }

  useEffect(() => {
    enableStream();
    return () => {
      if (mediaRecorderRef.current) {
        if (mediaRecorderRef.current.stream) {
          mediaRecorderRef.current.stream
            .getTracks()
            .forEach((track) => track.stop());
        }
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      cancelAnimationFrame(animationIdRef.current);
    };
  }, []);

  function startRecording() {
    if (!mediaRecorderRef.current) return;
    audioChunksRef.current = [];
    mediaRecorderRef.current.start();
    setRecording(true);
    drawWaveform();
  }

  function stopRecording() {
    if (!mediaRecorderRef.current) return;
    mediaRecorderRef.current.stop();
    setRecording(false);
    cancelAnimationFrame(animationIdRef.current);
  }

  function drawWaveform() {
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");
    const analyser = analyserRef.current;
    const bufferLength = analyser.fftSize;
    const dataArray = new Uint8Array(bufferLength);

    function draw() {
      analyser.getByteTimeDomainData(dataArray);
      canvasCtx.fillStyle = "#EFEFEF";
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "#007bff";
      canvasCtx.beginPath();

      const sliceWidth = (canvas.width * 1.0) / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height / 2);
      canvasCtx.stroke();

      animationIdRef.current = requestAnimationFrame(draw);
    }

    draw();
  }

  const uploadRecording = (blob) => {
    const formData = new FormData();
    console.log("BLOB", blob);
    formData.append("audio_file", blob, "record-audio.wav");
    formData.append("type", "AUDIO");
    setLoading(true);
    fetch("http://127.0.0.1:5000/reports", {
      method: "POST",
      body: formData,
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        navigate("/fraud/image/response", { state: { report: data } });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong");
        setLoading(false);
      });
  };

  return (
    <div className="audio-container">
      <div className="audio-card">
        <p className="title-audio">Analyze Audio</p>
        <FontAwesomeIcon icon={faMicrophone} size="2x" color="#ffffff" />
      </div>
      <p className="audio-description">
        Click the button below to start recording your audio. Once finished,
        click stop to analyze.
      </p>
      <div className="sound-wave-container">
        <canvas ref={canvasRef} className="sound-wave"></canvas>
      </div>
      <div className="audio-controls">
        <button
          onClick={recording ? stopRecording : startRecording}
          type="button"
          className="icon-button"
          disabled={loading}
        >
          {loading ? (
            "Loading..."
          ) : (
            <FontAwesomeIcon icon={recording ? faStop : faMicrophone} />
          )}
        </button>
      </div>
      <NavBar />
    </div>
  );
}

export default Audio;
