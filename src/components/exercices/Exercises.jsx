import React from 'react';
import Banner from "../shared/Banner";

import courseLogo from "../../assets/photos/icons/courses-white.PNG";
import ExerciseList from "./ExerciseList";

import "../../styles/shared.css"
import "../../styles/exercices-style.css"

function Exercises() {
    return (
        <>
            <div id="space"></div>
            <Banner
                src={courseLogo}
                altText="Exercises"
                text="Exercises List"
            />
            <ExerciseList/>

        </>
    )
}

export default Exercises;