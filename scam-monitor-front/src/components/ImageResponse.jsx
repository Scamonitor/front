import React from "react";
import "../styles/imageResponse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faWarning } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

function ImageResponse() {
  const location = useLocation();
  const data = location.state;

  const recommendations = JSON.parse(data.report.recommendations);

  console.log(data);

  return (
    <div className="response-container">
      <div className="header-response">
        <p className="header-title">Analysis is complete</p>
      </div>
      <p className="response-title">Verdict</p>
      <div
        className={`verdict-container ${
          data.report.verdict == "no scam" ? "no-scam" : "scam"
        }`}
      >
        <FontAwesomeIcon
          icon={data.report.verdict == "no scam" ? faCheck : faWarning}
          className="check-icon"
        />
        {data.report.veredict == "no scam" ? (
          <p>This is not likely to be a threat</p>
        ) : (
          <p>This is likely to be a threat</p>
        )}
      </div>
      <p className="response-title">Recommendations</p>
      <div className="recommendations">
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
