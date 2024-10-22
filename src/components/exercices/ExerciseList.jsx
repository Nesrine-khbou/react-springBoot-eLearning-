import React from 'react';
import ExerciseItem from './ExerciseItem';

const ExerciseList = () => {
    const exercises = [
        {
            type: 'JavaScript Beginner level',
            title: 'Exercice N 1',
            details: 'Declare 2 variables a, b and assign them with two different values, then write a script in JavaScript...',
            link: '',
        },
        {
            type: 'JavaScript Beginner level',
            title: 'Exercice N 2',
            details: 'Write a script that takes 2 objects (person1, person2) with attributes (name, weight, gender)...',
            link: '',
            linkId: 'ex2',
        },
        {
            type: 'CSS Beginner level',
            title: 'Exercice N 3',
            details: 'Try to make this web page in HTML and CSS with an H1 title and 2 paragraphs...',
            link: '',
        },
    ];

    return (
        <div id="list-of-exercises">
            <ul>
                {exercises.map((exercise, index) => (
                    <ExerciseItem
                        key={index} // unique key
                        type={exercise.type}
                        title={exercise.title}
                        details={exercise.details}
                        link={exercise.link}
                        linkId={exercise.linkId} // optional linkId
                    />
                ))}
            </ul>
        </div>
    );
};

export default ExerciseList;
