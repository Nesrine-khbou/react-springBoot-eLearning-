import React from 'react';

const CourseContentDetail = ({ title, lectures, time }) => {
    return (
        <div className="course-content-detail">
            <div className="title">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                </svg>
                <h3><strong>{title}</strong></h3>
            </div>
            <div>
                <p>{lectures} lectures. {time}</p>
            </div>
        </div>
    );
};

export default CourseContentDetail;