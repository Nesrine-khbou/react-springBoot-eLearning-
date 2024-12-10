import React from "react";
import CourseIntroSec from "./courseIntro/CourseIntroSec";
import ToLearnSec from "./toLearnSec/ToLearnSec";
import CourseContent from "./courseContentSec/CourseContent";
import Requirements from "./requirements/Requirements";
import Instructor from "./instructor/Instructor";
import FeedbackSec from "./feedback/FeedbackSec";
import ReviewsSec from "./reviewSec/ReviewsSec";

function MainContent({ course }) {
    return (
        <section id="main-content">
            <CourseIntroSec course={course} />
            <ToLearnSec whatWillLearn={course.whatWillLearn} />
            <CourseContent course={course} />
            <Instructor instructor={course.instructor} />
            <FeedbackSec course={course} />
            <ReviewsSec course={course} />
        </section>
    );
}

export default MainContent;
