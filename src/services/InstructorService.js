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
