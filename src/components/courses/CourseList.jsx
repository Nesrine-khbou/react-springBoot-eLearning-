import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseItem from './CourseItem';

const CourseList = () => {
    const [courses, setCourses] = useState([]); // State to hold the courses data
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        // Fetch courses from the backend
        axios.get('http://localhost:8080/api/courses')
            .then((response) => {
                setCourses(response.data); // Update courses state
                setLoading(false); // Set loading to false
            })
            .catch((error) => {
                console.error("Error fetching courses:", error);
                setError('Failed to load courses'); // Set error message
                setLoading(false); // Set loading to false
            });
    }, []);

    // Handle loading state
    if (loading) {
        return <p>Loading courses...</p>;
    }

    // Handle error state
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div id="list-of-courses">
            <ul>
                {courses.map((course) => (
                    <CourseItem
                        key={course.id} // Use a unique key from the backend
                        image={`${course.image}`} // Construct the full image path
                        title={course.title}
                        detailsLink={course.detailsLink}
                    />

                ))}
            </ul>
        </div>
    );
};

export default CourseList;
