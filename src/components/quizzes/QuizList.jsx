import React from 'react';
import QuizItem from './QuizItem';

const QuizList = () => {
    const quizzes = [
        {
            type: 'HTML',
            title: 'HTML beginner level',
            details: '11 Questions about HTML language basics.',
            link: '',
        },
        {
            type: 'CSS',
            title: 'CSS beginner level',
            details: '10 Questions about CSS language basics.',
            link: '',
        },
        {
            type: 'JavaScript',
            title: 'JavaScript beginner level',
            details: '11 questions about JavaScript basics.',
            link: '',
            id: 'js',
        },
    ];

    return (
        <div id="list-of-quizzes">
            <ul>
                {quizzes.map((quiz, index) => (
                    <QuizItem
                        key={index}
                        type={quiz.type}
                        title={quiz.title}
                        details={quiz.details}
                        link={quiz.link}
                        id={quiz.id}
                    />
                ))}
            </ul>
        </div>
    );
};

export default QuizList;
