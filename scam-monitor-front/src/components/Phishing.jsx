import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/phishing.css';
import NavBar from "../components/Navbar";

function Phishing() {
  const examples = [
    { 
      front: "Emails claiming your account has been compromised and asking you to verify your information", 
      back: "Legitimate companies never ask for passwords via email!" 
    },
    { 
      front: "Messages about winning a prize or inheritance that require you to click a suspicious link", 
      back: "If it sounds too good to be true, it probably is." 
    },
    { 
      front: "Urgent requests from 'your bank' asking you to transfer money to a new account", 
      back: "Always contact your bank directly through official channels." 
    }
  ];

  const navigate = useNavigate();

  return (
    <div className="phishing-container">
      <div className="imagen-card">
        <p className="test-title">Phishing Attacks</p>
      </div>
      <p className="fake-description">
        Phishing attacks try to steal your sensitive information by pretending to be legitimate organizations. 
        Here are some common phishing tactics to watch out for:
      </p>
      <div className='recommendations'>
        {examples.map((example, index) => (
          <div key={index} className="fake-example">
            <div className="card-front">
              <p>{example.front}</p>
            </div>
            <div className="card-back">
              <p>{example.back}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="phishing-links">
        <button onClick={() => navigate('/phishing/ejemplos')} className="phishing-button">
          More Examples
        </button>
        <button onClick={() => navigate('/phishing/test')} className="phishing-button">
          Test Your Knowledge
        </button>
      </div>
      <NavBar />
    </div>
  );
}

export default Phishing;

