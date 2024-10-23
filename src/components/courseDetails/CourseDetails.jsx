import React from 'react';

import MainContent from "./mainSec/MainContent"
import AsideSec from "./asideSec/AsideSec";

import "../../styles/course-HTML-style.css"


function CourseDetails(props) {
    return (
        <>
            <div id="spacing"></div>
            <section id="main-section">
                <MainContent/>
                <AsideSec/>
            </section>

            </>
            )
    }
export default CourseDetails;