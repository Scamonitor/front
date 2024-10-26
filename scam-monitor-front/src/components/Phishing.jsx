import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/phishing.css'; // Create a CSS file for styling

function Phishing() {
  const navigate = useNavigate();

  return (
    <div className="phishing-container">
      <h1 className="phishing-title">Phishing</h1>
      <p className="phishing-description">
        Phishing is a type of cyber attack where attackers impersonate legitimate organizations to steal sensitive information.
      </p>
      <div className="phishing-links">
        <button onClick={() => navigate('/phishing/ejemplos')} className="phishing-button">
          Ejemplos
        </button>
        <button onClick={() => navigate('/phishing/evaluacion')} className="phishing-button">
          Evaluación
        </button>
      </div>
    </div>
  );
}

export default Phishing;

