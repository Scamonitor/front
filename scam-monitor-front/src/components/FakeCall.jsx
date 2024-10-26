import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/fakeCall.css';
import NavBar from "../components/Navbar";

function FakeCall() {
    const examples = [
        { front: "The caller might say they need you to share a special code to confirm a delivery or a service", back: "Never share personal codes over the phone!" },
        { front: "The caller may claim to be your relative, saying they’re in danger or facing a serious problem.", back: "Verify their identity before sending money." },
        { front: "Scammers may pretend to be from the bank, government, or charity, asking for information.", back: "Contact the institution directly to verify." }
    ];

    const navigate = useNavigate();

    return (
      <div className="response-container">
          <div className="imagen-card">
              <p className="title-fake">Fake calls</p>
          </div>
          <p className="fake-description">
              Sometimes, you might receive a phone call from someone pretending to be a friend, family member, or even a delivery company. Here are some common ways these fake calls try to trick you:
          </p>
          <div className='recommendations'>
              {examples.map((rec, index) => (
                  <div key={index} className="fake-example">
                      <div className="card-front">
                          <p>{rec.front}</p>
                      </div>
                      <div className="card-back">
                          <p>{rec.back}</p>
                      </div>
                  </div>
              ))}
          </div>
          <div className="fake-call-links"> {/* Add a container for buttons */}
              <button onClick={() => navigate('/tec_support_calls/ejemplos')} className="fake-call-button">
                  More Examples
              </button>
          </div>
          <NavBar />
      </div>
    );
}

export default FakeCall;

