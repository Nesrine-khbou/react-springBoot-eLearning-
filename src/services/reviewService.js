// reviewService.js

const BASE_URL = "http://localhost:8080";

// Fetch reviews
export const fetchReviews = async () => {
    try {
        const response = await fetch("http://localhost:8080/reviews");
        if (!response.ok) {
            throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};


// Fetch full student data by ID
export const fetchStudentById = async (studentId) => {
    try {
        const response = await fetch(`${BASE_URL}/students/${studentId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch student data");
        }
        const studentData = await response.json();
        return studentData; // Returns the full student object
    } catch (error) {
        throw error;
    }
};
