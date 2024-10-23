import React from 'react';

import CourseContentDetail from "./CourseContentDetail";
import SubInfo from "./SubInfo";

const CourseContent = () => {
    return (
        <div id="course-content">
            <h3><strong>Course content</strong></h3>
            <p>2 sections • 8 lectures • 1h 25 min total length</p>

            <div id="course-content-details">
                <CourseContentDetail title="INTRODUCTION" lectures="1" time="14.13 min" />
                <SubInfo infoTitle="General structure" duration="14.13 min" />

                <CourseContentDetail title="HTML ELEMENTS" lectures="7" time="1h 11 min" />
                <SubInfo infoTitle="Headings" duration="12.52 min" />
                <SubInfo infoTitle="Paragraphs" duration="9.55 min" />
                <SubInfo infoTitle="Images" duration="9.21 min" />
                <SubInfo infoTitle="Lists" duration="10.52 min" />
                <SubInfo infoTitle="Tables" duration="11.43 min" />
                <SubInfo infoTitle="Links" duration="9.53 min" />
                <SubInfo infoTitle="Divs" duration="9 min" />
            </div>
        </div>
    );
};

export default CourseContent;