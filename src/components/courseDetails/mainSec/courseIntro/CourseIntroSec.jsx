import React from "react";
import stars from "../../../../assets/photos/images/stars-orange.PNG";


function CourseIntroSec({ course }) {
    console.log("course  " + course );
    return (
        <div id="course-intro">
            <h2><strong>{course.title}</strong></h2>
            <p>{course.description}</p>
            <div id="rating">
                <img src={stars} alt="stars" />
                <p> { course.enrolledStudents} students</p>
            </div>
            <p>Created by <strong>{course.instructor.username}</strong></p>
        </div>
    );
}

export default CourseIntroSec;
