import React, { useEffect, useState } from 'react';
import { getCourses } from '../../services/courseService'; // Import the service function
import CourseItem from './CourseItem';

const CourseList = () => {
    const [courses, setCourses] = useState([]); // State to hold the courses data
    const [loading, setLoading] = useState(true); // State to manage loading

    // Fetch courses when the component mounts
    useEffect(() => {
        const fetchCourses = async () => {
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("userRole");
            const userData = JSON.parse(localStorage.getItem("userData"));
            console.log("user data in courses : " ,userData)
            try {
                const data = await getCourses(); // Fetch courses from the API
                setCourses(data); // Set the fetched courses in the state
            } catch (error) {
                console.error("Failed to fetch courses:", error);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <p>Loading courses...</p>; // Show a loading message
    }

    return (
        <div id="list-of-courses">
            <ul>
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <CourseItem
                            key={course.id} // Unique key from the backend
                            image={course.imageUrl} // Use the course image URL
                            title={course.title}
                            detailsLink={`/course/${course.id}`} // Dynamically set the details link
                        />
                    ))
                ) : (
                    <p>No courses available.</p> // Handle empty course list
                )}
            </ul>
        </div>
    );
};

export default CourseList;
