import React, { useState, useEffect } from "react";
import "../../../styles/shared.css";
import "../../../styles/enrolled-courses-style.css";
import "../../../styles/ProfileDashboard.css";
import "../../../styles/course-management-style.css";
import InstructorSideBar from "../../SideBar/InstructorSideBar";
import InstructorCoursesList from "./InstructorCoursesList";
import {
    addCourse,
    addContent,
    updateCourse,
    updateContent,
    getCourseById,
} from "../../../services/courseManagementService";

function CourseManagementPage() {
    // State for managing modals
    const [showAddCourseModal, setShowAddCourseModal] = useState(false);
    const [showContentModal, setShowContentModal] = useState(false);

    // State for managing course and content data
    const [course, setCourse] = useState({
        id: null,
        title: "",
        description: "",
        duration: "",
        imageUrl: "",
        whatWillLearn: [],
        contents: [],
    });

    const [content, setContent] = useState({
        id: null,
        title: "",
        videoUrl: "",
        category: "",
        videoDuration: "",
    });

    // State for managing editing modes
    const [savedCourseId, setSavedCourseId] = useState(null);
    const [isEditingCourse, setIsEditingCourse] = useState(false);
    const [isEditingContent, setIsEditingContent] = useState(false);
    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    // Fetch course data when editing
    useEffect(() => {
        if (isEditingCourse && savedCourseId) {
            fetchCourseData(savedCourseId);
        }
    }, [isEditingCourse, savedCourseId]);

    // Fetch course data by ID
    const fetchCourseData = async (courseId) => {
        try {
            const courseData = await getCourseById(courseId);
            setCourse(courseData);
        } catch (error) {
            alert(error.message);
        }
    };

    // Handle course input changes
    const handleCourseChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    // Handle content input changes
    const handleContentChange = (e) => {
        const { name, value } = e.target;
        setContent({ ...content, [name]: value });
    };

    // Handle "What Will You Learn" input changes
    const handleWhatWillLearnChange = (e, index) => {
        const newWhatWillLearn = [...course.whatWillLearn];
        newWhatWillLearn[index] = e.target.value;
        setCourse({ ...course, whatWillLearn: newWhatWillLearn });
    };

    // Add a new learning point
    const addLearningPoint = () => {
        setCourse({
            ...course,
            whatWillLearn: [...course.whatWillLearn, ""],
        });
    };

    // Remove a learning point
    const removeLearningPoint = (index) => {
        const newWhatWillLearn = [...course.whatWillLearn];
        newWhatWillLearn.splice(index, 1);
        setCourse({ ...course, whatWillLearn: newWhatWillLearn });
    };

    // Add content to the course
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
                id: null,
                title: "",
                videoUrl: "",
                category: "",
                videoDuration: "",
            });
            // Reopen the modal to add the next content
            setShowContentModal(true);
        } catch (error) {
            alert(error.message);
        }
    };

    // Submit a new course
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
            // Open the content modal for adding the first content
            setShowContentModal(true);
        } catch (error) {
            alert(error.message);
        }
    };

    // Update course and its contents
    const updateCourseAndContents = async () => {
        try {
            await updateCourse(course.id, course);
            alert("Course updated successfully!");
            setShowAddCourseModal(false); // Close the course modal

            // Update contents one by one
            if (course.contents.length > 0) {
                setCurrentContentIndex(0); // Start with the first content
                setContent(course.contents[0]); // Set the first content
                setIsEditingContent(true); // Set editing mode for content
                setShowContentModal(true); // Open the content modal for editing
            }
        } catch (error) {
            alert(error.message);
        }
    };

    // Update content
    const updateContentHandler = async () => {
        try {
            await updateContent(content.id, content);
            alert("Content updated successfully!");

            // If there are more contents to update, reopen the modal for the next content
            if (currentContentIndex < course.contents.length - 1) {
                setCurrentContentIndex(currentContentIndex + 1);
                setContent(course.contents[currentContentIndex + 1]);
                setShowContentModal(true);
            } else {
                setShowContentModal(false); // Close the modal after updating all contents
                alert("All contents updated successfully!");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    // Handle updating a course
    const handleUpdateCourse = async (courseId) => {
        try {
            const courseData = await getCourseById(courseId); // Fetch course data
            setCourse(courseData); // Set the course state with fetched data
            setSavedCourseId(courseId); // Set the saved course ID
            setIsEditingCourse(true); // Set editing mode to true
            setShowAddCourseModal(true); // Open the course modal for editing
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
                        onClick={() => {
                            setShowAddCourseModal(true);
                            setIsEditingCourse(false);
                        }}
                    >
                        Add a Course
                    </button>
                    <InstructorCoursesList onUpdate={handleUpdateCourse} />
                </div>
            </div>

            {/* Course Modal */}
            {showAddCourseModal && (
                <>
                    <div className="modal-backdrop" onClick={() => setShowAddCourseModal(false)}></div>
                    <div className="modal">
                        <h2>{isEditingCourse ? "Edit Course" : "Add Course"}</h2>
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
                        </div>
                        <button onClick={isEditingCourse ? updateCourseAndContents : submitCourse}>
                            {isEditingCourse ? "Update Course" : "Add Course"}
                        </button>
                        <button onClick={() => setShowAddCourseModal(false)}>Close</button>
                    </div>
                </>
            )}

            {/* Content Modal */}
            {showContentModal && (
                <>
                    <div className="modal-backdrop" onClick={() => setShowContentModal(false)}></div>
                    <div className="modal">
                        <h2>{isEditingContent ? "Edit Course Content" : "Add Course Content"}</h2>
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
                        <button onClick={isEditingContent ? updateContentHandler : addContentToList}>
                            {isEditingContent ? "Update Content" : "Add Content"}
                        </button>
                        <button onClick={() => setShowContentModal(false)}>Close</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CourseManagementPage;