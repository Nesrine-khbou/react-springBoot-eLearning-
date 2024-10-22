import React from 'react';

import Banner from "../shared/Banner";
import QuizList from "./QuizList";

import "../../styles/shared.css"
import "../../styles/quizzes-style.css";

import courseLogo from "../../assets/photos/icons/courses-white.PNG";

function Quizzes() {
    return (
        <>
            <div id="space"></div>

            <Banner
                src={courseLogo}
                altText="quizzes"
                text="Quizzes List"
            />
            <QuizList/>
        </>
    )
}

export default Quizzes;