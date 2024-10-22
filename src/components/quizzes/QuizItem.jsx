import React from 'react';

const QuizItem = ({ type, title, details, link, id }) => {
    return (
        <li className="quiz-option">
            <p className={`type-btn`}>{type}</p>
            <h2>{title}</h2>
            <p className="quiz-details">{details}</p>
            <a href={link}>Start Quiz</a>
        </li>
    );
};

export default QuizItem;
