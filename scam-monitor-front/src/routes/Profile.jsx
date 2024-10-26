import React from 'react';
import '../styles/profile.css';
import profileImage from '../images/profile.png'; 
import NavBar from "../components/Navbar";

function Profile() {
  return (
    <div className="profile-full-container">
      <div className='mini-profile-container'>
      <div className="imagen-card">
     <p className="test-title">Profile</p>
        <img className="profile-icon" src={profileImage} alt="Profile icon" /> 
      </div>
      <form className="profile-form">
        <label className='request-title'>Name:</label>
        <input type="text" className="input-field" placeholder="Enter your name" />
        <label className='request-title'>Email:</label>
        <input type="email" className="input-field" placeholder="Enter your email" />

        <label className='request-title'>Email of a trusted relative:</label>
        <input type="email" className="input-field" placeholder="Enter a relative's email" />

        <button type="submit" className="save-button">Save changes</button>
      </form>
      </div>
     
      <NavBar />
    </div>
  );
}

export default Profile;
