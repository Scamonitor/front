import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faStop } from "@fortawesome/free-solid-svg-icons";
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

  const [record, setRecord] = useState(false);

  async function enableStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      await register(await connect());
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "audio/wav",
      });

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
    };
  }, []);

  function startRecording() {
    if (!mediaRecorderRef.current) return;
    audioChunksRef.current = [];
    mediaRecorderRef.current.start();
    setRecording(true);
  }

  function stopRecording() {
    if (!mediaRecorderRef.current) return;
    mediaRecorderRef.current.stop();
    setRecording(false);
  }

  const uploadRecording = (blob) => {
    const formData = new FormData();
    console.log("BLOB", blob);
    formData.append("audio_file", blob, "record-audio.wav"); // The third argument is the file name
    formData.append("type", "AUDIO"); // The user ID
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
        return response.json(); // Assuming the backend responds with JSON
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
        <button onClick={recording ? stopRecording : startRecording}>
          hiii
        </button>
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
    </div>
  );
}

export default Audio;
