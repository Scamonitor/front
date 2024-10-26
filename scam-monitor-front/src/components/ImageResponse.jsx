import React from 'react';
import '../styles/imageResponse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function ImageResponse() {
  const recommendations = [
    "Ensure software is up-to-date.",
    "Use secure, unique passwords.",
    "Avoid clicking on unknown links.",
    "Monitor account activity."
  ];

  return (
    <div className="response-container">
      <div className="header-response">
        <p className="header-title">Analysis is complete</p>
      </div>
      <p className="response-title">Verdict</p>
      <div className="verdict-container">
      <FontAwesomeIcon icon={faCheck} className="check-icon" />
        <p>This is not likely to be a threat</p>
      </div>
      <p className="response-title">Recommendations</p>
      <div className='recommendations'>
      {recommendations.map((rec, index) => (
        <div key={index} className="recommendation-container">
          <p>{rec}</p>
        </div>
      ))}
      </div>

    </div>
  );
}

export default ImageResponse;
