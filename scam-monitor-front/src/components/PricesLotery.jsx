import React from 'react';
import '../styles/pricesLotery.css';
import won_iphone from "../images/won_iphone.png"
import fake_message from "../images/fake_message.png"
import NavBar from "../components/Navbar";

function PricesLotery() {

    return (
      <div className="response-container">
        <div className="imagen-card">
              <p className="title-fake">Fake gifts</p>
        </div>
        <p className="fake-description">Sometimes, scammers pretend to offer free gifts to trick people. They’ll send messages or calls saying you’ve 'won' something and ask for personal information or money. 
            Remember, if it sounds too good to be true, it probably is.
            Companies don’t give expensive gifts without reason, so be cautious and don’t share any details with them.</p>
            <div className='fake-container'>
                <div className='example-container'>
                <img className="fake-image" src={won_iphone} alt="Call icon" /> 
                </div>
                <div className='example-container'>
                <img className="fake-image" src={fake_message} alt="Call icon" /> 
                </div>
            </div>
            <NavBar />
      </div>
    );
}

export default PricesLotery;

