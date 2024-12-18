import React, { useEffect, useState } from "react";

import { getEnrolledCourses } from "../../../services/enrollmentService";
import EnrolledCourseItem from "./EnrolledCourseItem";

const EnrolledCourseList = () => {
    const [courses, setCourses] = useState([]); // State for enrolled courses
    const [loading, setLoading] = useState(true); // Loading state
    const userData = JSON.parse(localStorage.getItem("userData")); // Get logged-in user data

    useEffect(() => {
        const fetchEnrolledCourses = async () => {
            if (!userData || !userData.id) return; // Ensure user data exists

            try {
                const data = await getEnrolledCourses(userData.id); // Fetch enrolled courses
                setCourses(data); // Set courses state
            } catch (error) {
                console.error("Failed to fetch enrolled courses:", error);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchEnrolledCourses();
    }, [userData]);

    if (loading) {
        return <p>Loading enrolled courses...</p>; // Loading state
    }

    return (
        <div id="list-of-courses">
            <ul>
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <EnrolledCourseItem
                            key={course.id} // Unique key
                            image={course.imageUrl} // Course image URL
                            title={course.title}
                            detailsLink={`/course/${course.id}`} // Details link
                        />
                    ))
                ) : (
                    <p>No enrolled courses found.</p> // No courses message
                )}
            </ul>
        </div>
    );
};

export default EnrolledCourseList;
