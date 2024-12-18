import React, { useState, useEffect } from "react";
import htmlIcon from "../../../assets/photos/images/html.png";
import { enrollStudentInCourse, getEnrolledCourses } from "../../../services/enrollmentService"; // Import services

function AsideSec({ course }) {
    const [isEnrolled, setIsEnrolled] = useState(false); // Track enrollment status

    const handleEnroll = async () => {
        const token = localStorage.getItem("token");
        const userData = JSON.parse(localStorage.getItem("userData"));

        if (!userData || !token) {
            alert("You need to log in to enroll in a course.");
            return;
        }

        try {
            await enrollStudentInCourse(userData.id, course.id, token); // Call the enrollment service
            setIsEnrolled(true); // Update enrollment status
            alert("You have successfully enrolled in the course!");
        } catch (error) {
            alert("Failed to enroll in the course. Please try again later.");
        }
    };

    // Fetch enrolled courses when the component loads
    useEffect(() => {
        const fetchEnrolledCourses = async () => {
            const token = localStorage.getItem("token");
            const userData = JSON.parse(localStorage.getItem("userData"));

            if (!userData || !token) return;

            try {
                const enrolledCourses = await getEnrolledCourses(userData.id, token); // Fetch enrolled courses
                const isCourseEnrolled = enrolledCourses.some(
                    (enrolledCourse) => enrolledCourse.id === course.id
                ); // Check if current course is in the list
                setIsEnrolled(isCourseEnrolled); // Update enrollment status
            } catch (error) {
                console.error("Failed to fetch enrolled courses:", error);
            }
        };

        fetchEnrolledCourses();
    }, [course.id]);

    return (
        <aside>
            <img src={htmlIcon} alt="html" />
            <h2>Free</h2>
            {isEnrolled ? (
                <p className="enrolled-text">Enrolled</p>
            ) : (
                <button onClick={handleEnroll} className="enroll-button">
                    Enroll now
                </button>
            )}
        </aside>
    );
}

export default AsideSec;
