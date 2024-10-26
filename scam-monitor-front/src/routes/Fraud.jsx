import '../styles/fraud.css';
import gallery from "../images/gallery.png";
import call from "../images/call.png";
import message from "../images/message.png";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/Navbar";

function Fraud() {
  const navigate = useNavigate();

  return (
    <div className="fraud-container">
      <div className='smaller-container'>
      <div
        className="fraud-card"
        onClick={() => navigate('/fraud/audio')} // Navigate to audio subroute
        style={{ cursor: 'pointer' }}
      >
        <p className="title-card">Analyze audio</p>
        <img className="icon-image" src={call} alt="Call icon" />
      </div>
      <div
        className="fraud-card"
        onClick={() => navigate('/fraud/image')} // Navigate to image subroute
        style={{ cursor: 'pointer' }}
      >
        <p className="title-card">Analyze message</p>
        <img className="icon-image" src={gallery} alt="Gallery icon" />
      </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Fraud;
