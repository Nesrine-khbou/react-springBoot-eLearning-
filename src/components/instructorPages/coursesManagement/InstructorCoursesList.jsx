import React, { useEffect, useState, useMemo } from "react";
import InstructorCourse from "./InstructorCourse";
import {fetchInstructorCourses, deleteInstructorCourse} from "../../../services/courseManagementService";

const InstructorCoursesList = ({ onUpdate }) => {
    const [courses, setCourses] = useState([]); // State for instructor's courses
    const [loading, setLoading] = useState(true); // Loading state

    // Memoize user data
    const userData = useMemo(() => {
        try {
            return JSON.parse(localStorage.getItem("userData"));
        } catch (error) {
            console.error("Error parsing userData from localStorage:", error);
            return null;
        }
    }, []);

    useEffect(() => {
        fetchInstructorCourses(userData, setCourses, setLoading); // Call the service function
    }, [userData]); // Re-run the effect if `userData` changes

    const handleDeleteCourse = async (courseId) => {
        try {
            // Call the backend to delete the course
            await deleteInstructorCourse(courseId);
            // Remove the course from the state after successful deletion
            setCourses(courses.filter(course => course.id !== courseId));
            alert("Course deleted successfully!");
        } catch (error) {
            alert("Error deleting the course.");
        }
    };


    if (loading) {
        return <p>Loading instructor courses...</p>; // Loading state
    }

    return (
        <div id="list-of-courses">
            <ul>
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <InstructorCourse
                            key={course.id} // Unique key
                            image={course.imageUrl} // Course image URL
                            title={course.title}
                            detailsLink={`/course/${course.id}`} // Details link
                            onDelete={() => handleDeleteCourse(course.id)} // Pass the delete function here
                            onUpdate={() => onUpdate(course.id)}
                        />
                    ))
                ) : (
                    <p>No courses found for this instructor.</p> // No courses message
                )}
            </ul>
        </div>
    );
};

export default InstructorCoursesList;
