import React, { useState } from "react";
import "../../../styles/shared.css";
import "../../../styles/enrolled-courses-style.css";
import "../../../styles/ProfileDashboard.css";
import "../../../styles/course-management-style.css";
import InstructorSideBar from "../../SideBar/InstructorSideBar";
import InstructorCoursesList from "./InstructorCoursesList";
import { addCourse, addContent } from "../../../services/courseManagementService";

function CourseManagementPage() {
    const [showAddCourseModal, setShowAddCourseModal] = useState(false);
    const [showAddContentModal, setShowAddContentModal] = useState(false);
    const [course, setCourse] = useState({
        title: "",
        description: "",
        duration: "",
        imageUrl: "",
        whatWillLearn: [],
        contents: [],
    });

    const [content, setContent] = useState({
        title: "",
        videoUrl: "",
        category: "",
        videoDuration: "",
    });

    const [savedCourseId, setSavedCourseId] = useState(null);

    const handleCourseChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    const handleContentChange = (e) => {
        const { name, value } = e.target;
        setContent({ ...content, [name]: value });
    };

    const handleWhatWillLearnChange = (e, index) => {
        const newWhatWillLearn = [...course.whatWillLearn];
        newWhatWillLearn[index] = e.target.value;
        setCourse({ ...course, whatWillLearn: newWhatWillLearn });
    };

    const addLearningPoint = () => {
        setCourse({
            ...course,
            whatWillLearn: [...course.whatWillLearn, ""],
        });
    };

    const removeLearningPoint = (index) => {
        const newWhatWillLearn = [...course.whatWillLearn];
        newWhatWillLearn.splice(index, 1);
        setCourse({ ...course, whatWillLearn: newWhatWillLearn });
    };

    const addContentToList = async () => {
        if (!savedCourseId) {
            alert("Please create the course first before adding content.");
            return;
        }

        try {
            const contentData = { ...content, course: { id: savedCourseId } };
            await addContent(contentData);
            alert("Content added successfully!");
            setCourse({
                ...course,
                contents: [...course.contents, content],
            });
            setContent({
                title: "",
                videoUrl: "",
                category: "",
                videoDuration: "",
            });
            setShowAddContentModal(true);
        } catch (error) {
            alert(error.message);
        }
    };

    const submitCourse = async () => {
        try {
            const userData = JSON.parse(localStorage.getItem("userData"));
            const courseData = { ...course, instructorId: userData?.id };
            const savedCourse = await addCourse(courseData);
            setSavedCourseId(savedCourse.id);
            alert("Course added successfully!");
            setShowAddCourseModal(false);
            setCourse({
                title: "",
                description: "",
                duration: "",
                imageUrl: "",
                whatWillLearn: [],
                contents: [],
            });
            setShowAddContentModal(true);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <div id="space"></div>
            <div className="dashboard-container">
                <InstructorSideBar />
                <div className="courses-section">
                    <button
                        className="add-course-btn"
                        onClick={() => setShowAddCourseModal(true)}
                    >
                        Add a Course
                    </button>
                    <InstructorCoursesList />
                </div>
            </div>

            {showAddCourseModal && (
                <>
                    <div className="modal-backdrop" onClick={() => setShowAddCourseModal(false)}></div>
                    <div className="modal">
                        <h2>Add Course</h2>
                        <label>
                            Title:
                            <input
                                type="text"
                                name="title"
                                value={course.title}
                                onChange={handleCourseChange}
                            />
                        </label>
                        <label>
                            Description:
                            <textarea
                                name="description"
                                value={course.description}
                                onChange={handleCourseChange}
                            />
                        </label>
                        <label>
                            Duration:
                            <input
                                type="text"
                                name="duration"
                                value={course.duration}
                                onChange={handleCourseChange}
                            />
                        </label>
                        <label>
                            Image URL:
                            <input
                                type="text"
                                name="imageUrl"
                                value={course.imageUrl}
                                onChange={handleCourseChange}
                            />
                        </label>

                        {/* Add What Will You Learn field */}
                        <div>
                            <h4>What Will You Learn?</h4>
                            {course.whatWillLearn.map((learningPoint, index) => (
                                <div key={index} className="learning-point">
                                    <input
                                        type="text"
                                        value={learningPoint}
                                        onChange={(e) => handleWhatWillLearnChange(e, index)}
                                        placeholder={`Learning point ${index + 1}`}
                                    />
                                    <button type="button" onClick={() => removeLearningPoint(index)}>Remove</button>
                                </div>
                            ))}
                            <button type="button" onClick={addLearningPoint}>Add Learning Point</button>
                        </div>                        <button onClick={submitCourse}>Add Course</button>
                        <button onClick={() => setShowAddCourseModal(false)}>Close</button>
                    </div>
                </>
            )}

            {showAddContentModal && (
                <>
                    <div className="modal-backdrop" onClick={() => setShowAddContentModal(false)}></div>
                    <div className="modal">
                        <h2>Add Course Content</h2>
                        <label>
                            Title:
                            <input
                                type="text"
                                name="title"
                                value={content.title}
                                onChange={handleContentChange}
                            />
                        </label>
                        <label>
                            Video URL:
                            <input
                                type="text"
                                name="videoUrl"
                                value={content.videoUrl}
                                onChange={handleContentChange}
                            />
                        </label>
                        <label>
                            Category:
                            <input
                                type="text"
                                name="category"
                                value={content.category}
                                onChange={handleContentChange}
                            />
                        </label>
                        <label>
                            Video Duration:
                            <input
                                type="text"
                                name="videoDuration"
                                value={content.videoDuration}
                                onChange={handleContentChange}
                            />
                        </label>
                        <button onClick={addContentToList}>Add Content</button>
                        <button onClick={() => setShowAddContentModal(false)}>Close</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CourseManagementPage;

