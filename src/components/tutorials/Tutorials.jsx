import React from 'react';

import Banner from "../shared/Banner";
import TutorialsList from "./TutorialsList";

import "../../styles/tutorials-style.css"

import courseLogo from "../../assets/photos/icons/courses-white.PNG";


function Tutorials() {
    return (
        <div>
            <div id="space"></div>

            <Banner
                src={courseLogo}
                altText="tutorials"
                text="Tutorials List"
            />
            <TutorialsList/>

        </div>
    )
}

export default Tutorials;