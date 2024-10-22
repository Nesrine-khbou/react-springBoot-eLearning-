import React from 'react';
import CourseContentDetail from "./CourseContentDetail";

const CourseContent = () => {
    const contentDetails = [
        { title: "INTRODUCTION", lectures: 1, time: "14.13 min" },
        { title: "HTML ELEMENTS", lectures: 7, time: "1h 11 min" },
    ];

    return (
        <div id="course-content">
            <h3><strong>Course content</strong></h3>
            <p>2 sections • 8 lectures • 1h 25 min total length</p>
            <div id="course-content-details">
                {contentDetails.map((content, index) => (
                    <CourseContentDetail
                        key={index}
                        title={content.title}
                        lectures={content.lectures}
                        time={content.time}
                    />
                ))}
            </div>
        </div>
    );
};

export default CourseContent;