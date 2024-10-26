import React from 'react';
import '../styles/exampleCalls.css';

function ExampleCalls() {
    const examples = [
      { 
        front: "Tech Support Scam: 'This is Microsoft. We've detected a virus on your computer. Please give us remote access to fix it.'", 
        back: "Legitimate companies like Microsoft will never call you unsolicited to fix your computer. Always verify the caller's identity and never give remote access to unknown callers." 
      },
      { 
        front: "Unpaid Bill Scam: 'This is your utility company. You have an unpaid bill. Pay now to avoid service interruption.'", 
        back: "Utility companies typically send written notices for unpaid bills. Verify the claim by contacting the company directly using official contact information." 
      },
      { 
        front: "Family Emergency Scam: 'Hi, it's your grandson. I'm in trouble and need money urgently. Please don't tell mom and dad.'", 
        back: "Scammers often impersonate family members in distress. Always verify the caller's identity by asking questions only the real person would know or by contacting them directly." 
      }
    ];
  
    return (
      <div className="example-calls-container">
        <button className="title-button">Examples of Fake Calls</button>  
        <div className='recommendations'>
          {examples.map((example, index) => (
            <div key={index} className="call-card">
              <div className="card-front">
                <p><span className='call-icon'>📞</span>{example.front}</p>
              </div>
              <div className="card-back">
                <p>{example.back}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ExampleCalls;

