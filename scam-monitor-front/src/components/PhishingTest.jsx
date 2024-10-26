import React, { useState } from 'react';
import '../styles/PhishingTest.css';
import NavBar from "../components/Navbar";

function PhishingTest() {
    const questions = [
        {
            question: "What is phishing?",
            options: [
                "A type of email scam",
                "A technique to catch fish",
                "A secure email",
                "A reliable link"
            ],
            answer: 0
        },
        {
            question: "What should you do if you receive an email asking for personal information?",
            options: [
                "Respond immediately",
                "Click all the links",
                "Ignore and report it",
                "Share it on social media"
            ],
            answer: 2
        },
        {
            question: "How can you verify a suspicious email?",
            options: [
                "Check the sender's address carefully",
                "Click on the link to investigate",
                "Ignore it",
                "Reply to the email"
            ],
            answer: 0
        },
        {
            question: "What should you do if an email claims to be from your bank?",
            options: [
                "Reply with your account information",
                "Call your bank using the contact information you have",
                "Send an email back to confirm",
                "Ignore the email"
            ],
            answer: 1
        },
        {
            question: "Which of these can be a sign of a phishing attempt?",
            options: [
                "A trusted friend sending a birthday email",
                "An email with typos and strange URLs",
                "A message from a service you use regularly",
                "An email from your workplace"
            ],
            answer: 1
        }
    ];

    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [score, setScore] = useState(null);

    const handleOptionChange = (questionIndex, optionIndex) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = optionIndex;
        setUserAnswers(updatedAnswers);
    };

    const calculateScore = () => {
        let newScore = 0;
        questions.forEach((question, index) => {
            if (userAnswers[index] === question.answer) newScore++;
        });
        setScore(newScore);
    };

    return (
        <div className="phishing-test-container">
        <div className="imagen-card">
            <p className="test-title">Phishing test</p>  
        </div>
            <p>Test your knowledge about phishing by answering the questions below.</p>
            <div className="questions">
                {questions.map((q, index) => (
                    <div key={index} className="question">
                        <p>{q.question}</p>
                        <div className="options">
                            {q.options.map((option, i) => (
                                <label key={i} className="option">
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={i}
                                        checked={userAnswers[index] === i}
                                        onChange={() => handleOptionChange(index, i)}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={calculateScore} className="submit-button">Submit</button>
            {score !== null && <p className="score">Your score: {score} out of {questions.length}</p>}
            <NavBar />
        </div>
    );
}

export default PhishingTest;
