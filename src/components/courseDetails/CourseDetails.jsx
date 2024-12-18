import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContent from "./mainSec/MainContent";
import AsideSec from "./asideSec/AsideSec";
import { getCourseById } from "../../services/courseService";
import "../../styles/course-HTML-style.css";

function CourseDetails() {
    const { id } = useParams(); // Get the course ID from the URL
    const [course, setCourse] = useState(null); // State to store the course
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const courseData = await getCourseById(id); // Call the service
                setCourse(courseData); // Set the course data
            } catch (error) {
                console.error("Error fetching course:", error);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchCourse();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>; // Display loading state
    }

    if (!course) {
        return <div>Course not found.</div>; // Handle if course is not found
    }

    return (
        <>
            <div id="spacing"></div>
            <section id="main-section">
                <MainContent course={course} /> {/* Pass the course as a prop */}
                <AsideSec course={course} /> {/* Pass the course as a prop */}
            </section>
        </>
    );
}

export default CourseDetails;
