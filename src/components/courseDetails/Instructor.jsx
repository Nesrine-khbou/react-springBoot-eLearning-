import React from 'react';

import InstructorInfo from "./InstructorInfo";

const Instructor = () => {
    return (
        <div id="instructor">
            <h3><strong>Instructor</strong></h3>
            <div id="instructor-name">
                <h3><strong>Hamdaoui Wassim</strong></h3>
                <p>FullStack Web Developer</p>
            </div>
            <InstructorInfo />
        </div>
    );
};

export default Instructor;