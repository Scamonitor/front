import '../styles/fraud.css';
import gallery from "../images/gallery.png";
import call from "../images/call.png";
import message from "../images/message.png";
import Imagen from "../components/Imagen";
import React, { useState } from 'react';

function Fraud() {
  const [showImage, setShowImage] = useState(false);

  if (showImage) {
    return <Imagen />;
  }
  return (
    <div className="fraud-container">
      <div className="fraud-card">
        <p className="title-card">Analyze audio</p>
        <img className="icon-image" src={call} alt="Call icon" /> 
      </div>
      <div
        className="fraud-card"
        onClick={() => setShowImage(true)}
        style={{ cursor: 'pointer' }}
      >
        <p className="title-card">Analyze image</p>
        <img className="icon-image" src={gallery} alt="Gallery icon" />
      </div>
      <div className="fraud-card">
        <p className="title-card">Analyze text</p>
        <img className="icon-image" src={message} alt="Message icon" /> 
      </div>
    </div>
  );
}

export default Fraud;
