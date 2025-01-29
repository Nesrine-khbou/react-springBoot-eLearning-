// services/InstructorService.js

// Fetch the total number of reviews for an instructor
export const fetchInstructorReviews = async (instructorId) => {
    try {
        const response = await fetch(`http://localhost:8080/api/instructors/${instructorId}/reviews`);
        if (!response.ok) {
            throw new Error('Failed to fetch reviews');
        }
        const reviews = await response.json();
        return reviews; // Return the review count or data
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error; // Re-throw the error to handle it in the component
    }
};

// Fetch the total number of courses presented by an instructor
export const fetchInstructorCoursesCount = async (instructorId) => {
    try {
        const response = await fetch(`http://localhost:8080/api/instructors/${instructorId}/courses/count`);
        if (!response.ok) {
            throw new Error('Failed to fetch courses count');
        }
        const coursesCount = await response.json();
        return coursesCount; // Return the number of courses
    } catch (error) {
        console.error('Error fetching courses count:', error);
        throw error; // Re-throw the error to handle it in the component
    }
};

export const getInstructorCourses = async (instructorId) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    try {
        const response = await fetch(`http://localhost:8080/api/instructors/${instructorId}/courses`, {
            method: "GET", // HTTP method
            headers: {
                Authorization: `Bearer ${token}`, // Add token to Authorization header
                "Content-Type": "application/json", // Specify JSON content type
            },
        });

        if (!response.ok) {
            // Handle HTTP errors
            throw new Error(`Error fetching instructor courses: ${response.statusText}`);
        }

        const data = await response.json(); // Parse the response as JSON
        return data; // Return the instructor's courses
    } catch (error) {
        console.error("Error fetching instructor courses:", error);
        throw error; // Rethrow the error for further handling
    }
};
