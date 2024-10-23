import React from 'react';

import stars from "../../../../assets/photos/images/stars-orange.PNG"

function CourseIntroSec() {
    return (
        <div id="course-intro">
            <h2><strong>HTML</strong></h2>
            <p>General and basic rules of HTML and how to add various elements of web pages such as headings,
                paragraphs, images and lists</p>
            <div id="rating">
                <img src={stars} alt="stars"/>
                <p>( 1 rating ) 193 students</p>
            </div>
            <p>Created by <strong>Hamdaoui Wassim</strong></p>
        </div>

    )
}

export default CourseIntroSec;