import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faStop } from '@fortawesome/free-solid-svg-icons';
import '../styles/audio.css'; // Make sure to create and style this CSS file

function Audio() {
  const [record, setRecord] = useState(false);

  const toggleRecording = () => {
    setRecord(prevRecord => !prevRecord);
  };

  const onStop = (recordedBlob) => {
    console.log('Recorded Blob:', recordedBlob);
    // Here you can send the recordedBlob to your backend

    // Verify the MIME type of the recordedBlob
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
        <FontAwesomeIcon icon={faMicrophone} size="2x" color="#ffffff" />
      </div>
      <p className="audio-description">
        Click the button below to start recording your audio. Once finished, click stop to analyze.
      </p>
      <div className="sound-wave-container">
        <ReactMic
          record={record}
          className="sound-wave"
          onStop={onStop}
          mimeType="audio/wav"
          strokeColor="#000000"
          backgroundColor="#BAD3F8"
        />
      </div>
      <div className="audio-controls">
        <button onClick={toggleRecording} type="button" className="icon-button">
          <FontAwesomeIcon icon={record ? faStop : faMicrophone} />
        </button>
      </div>
    </div>
  );
}

export default Audio;