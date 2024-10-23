import React from 'react';
import CourseIntroSec from "./courseIntro/CourseIntroSec";
import ToLearnSec from "./toLearnSec/ToLearnSec";
import CourseContent from "./courseContentSec/CourseContent";
import Requirements from "./requirements/Requirements";
import Instructor from "./instructor/Instructor";
import FeedbackSec from "./feedback/FeedbackSec";
import ReviewsSec from "./reviewSec/ReviewsSec";
function MainContent(props) {
    return (
            <section id="main-content">
                <CourseIntroSec/>
                <ToLearnSec/>
                <CourseContent/>
                <Requirements/>
                <Instructor/>
                <FeedbackSec/>
                <ReviewsSec/>
            </section>
    )
}

export default MainContent;