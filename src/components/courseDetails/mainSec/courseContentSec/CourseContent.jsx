import React from "react";
import CourseContentDetail from "./CourseContentDetail";
import SubInfo from "./SubInfo";
import { getTotalDuration, filterContentsByCategory } from "../../../../services/contentService";

const CourseContent = ({ course }) => {
    const contents = course ? course.contents : []; // Fallback to empty array if course is null

    // Filter contents by category
    const introductionContents = filterContentsByCategory(contents, "INTRODUCTION");
    const courseElementsContents = filterContentsByCategory(contents, "COURSE ELEMENTS");

    return (
        <div id="course-content">
            <h3>
                <strong>Course content</strong>
            </h3>
            <p>
                2 sections • {contents.length} lectures • {getTotalDuration(contents)} total length
            </p>

            <div id="course-content-details">
                {/* Introduction Section */}
                <CourseContentDetail
                    title="INTRODUCTION"
                    lectures={introductionContents.length}
                    time={getTotalDuration(introductionContents)}
                />
                {introductionContents.map((content) => (
                    <SubInfo
                        key={content.id}
                        infoTitle={content.title}
                        duration={`${content.videoDuration} min`}
                        videoUrl={content.videoUrl}
                    />
                ))}

                {/* Course Elements Section */}
                <CourseContentDetail
                    title="COURSE ELEMENTS"
                    lectures={courseElementsContents.length}
                    time={getTotalDuration(courseElementsContents)}
                />
                {courseElementsContents.map((content) => (
                    <SubInfo
                        key={content.id}
                        infoTitle={content.title}
                        duration={`${content.videoDuration} min`}
                        videoUrl={content.videoUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default CourseContent;
