import React from 'react';

import CourseIntro from "./CourseIntro";

import "../../styles/shared.css"
import "../../styles/course-HTML-style.css"

function CourseDetails(props) {
    return (
        <>
            <div id="space"></div>
            <section id="main-section">
                <section id="main-content">
                    <CourseIntro/>
                </section>
            </section>
        </>
    )
}

export default CourseDetails;