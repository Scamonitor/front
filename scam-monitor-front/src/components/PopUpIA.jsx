import React, { useState } from 'react';

function Fraud() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="fraud-container">
      <button onClick={handlePopup} className="popup-button">
        What is Artificial Intelligence?
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Artificial Intelligence (AI)</h2>
            <p>
              Artificial Intelligence, or AI, is a technology that allows computers to "think" and
              "learn" a bit like humans do. It helps machines understand information, solve problems,
              and make decisions. AI is used in things like phone assistants, smart homes, and even
              cars that can drive themselves!
            </p>
            <button onClick={handlePopup} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fraud;
