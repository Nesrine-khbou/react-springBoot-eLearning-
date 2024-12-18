import React from "react";

const TakenQuizItem = ({ title, type, details, link }) => {
    return (
        <li className="quiz-option">
            <p className={`type-btn`}>{type}</p>
            <h2>{title}</h2>
            <p className="quiz-details">{details}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                View Quiz
            </a>
        </li>
    );
};

export default TakenQuizItem;
