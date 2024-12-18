import React from "react";
import { addTakenQuiz } from "../../services/takenQuizService"; // Import the service

const QuizItem = ({  id, type, title, details, link }) => {
    const handleStartQuiz = async () => {
        const userData = JSON.parse(localStorage.getItem("userData")); // Get logged-in user data

        if (!userData) {
            alert("You need to log in to start the quiz.");
            return;
        }
        console.log(type, title, details, link, id)
        const studentId = userData.id;
        console.log(studentId, id);

        try {
            // Call the service to add a taken quiz
            await addTakenQuiz(studentId, id);
            alert(`Quiz "${title}" has been recorded as taken.`);
        } catch (error) {
            alert("Failed to record the quiz. Please try again.");
        }
    };

    return (
        <li className="quiz-option">
            <p className={`type-btn`}>{type}</p>
            <h2>{title}</h2>
            <p className="quiz-details">{details}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleStartQuiz} // Trigger API call on click
            >
                Start Quiz
            </a>
        </li>
    );
};

export default QuizItem;
