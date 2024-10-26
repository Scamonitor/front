import React from 'react';
import '../styles/profile.css';
import profileImage from '../images/profile.png'; 
import NavBar from "../components/Navbar";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
        <img className="profile-icon" src={profileImage} alt="Profile icon" /> 
      </div>
      <form className="profile-form">
        <label>Name:</label>
        <input type="text" className="input-field" placeholder="Enter your name" />

        <label>Email:</label>
        <input type="email" className="input-field" placeholder="Enter your email" />

        <label>Email of a trusted relative:</label>
        <input type="email" className="input-field" placeholder="Enter a relative's email" />

        <button type="submit" className="save-button">Save changes</button>
      </form>
      <NavBar />
    </div>
  );
}

export default Profile;
