import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import '../styles/audio.css'; // Make sure to create and style this CSS file

function Audio() {
  const [record, setRecord] = useState(false);

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onStop = (recordedBlob) => {
    console.log('Recorded Blob:', recordedBlob);
    // Here you can send the recordedBlob to your backend

    //Verify the MIME type of the recordedBlob
    if (recordedBlob.blob.type === 'audio/wav') {
      console.log('The MIME type of the recordedBlob is audio/wav');
    } else {
      console.log('The MIME type of the recordedBlob is not audio/wav');
    }
  };

  return (
    <div className="audio-container">
      <div className="audio-card">
        <p className="title-audio">Analyze Audio</p>
      </div>
      <p>Click the button below to start recording your audio. Once finished, click stop to analyze.</p>
      <div className="audio-controls">
        <ReactMic
          record={record}
          className="sound-wave"
          onStop={onStop}
          mimeType="audio/wav"
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <button onClick={startRecording} type="button">Start Recording</button>
        <button onClick={stopRecording} type="button">Stop Recording</button>
      </div>
    </div>
  );
}

export default Audio;

