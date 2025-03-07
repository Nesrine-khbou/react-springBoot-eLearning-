import axios from "axios";

// Base URL for your Spring Boot backend
const API_URL = "http://localhost:8080/courses";

// Get all courses
export const getCourses = async () => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching courses:", error);
        throw error;
    }
};

// Get a course by ID
export const getCourseById = async (id) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        const response = await axios.get(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching course with id ${id}:`, error);
        throw error;
    }
};

// Create a new course
export const createCourse = async (course) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        const response = await axios.post(API_URL, course, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating course:", error);
        throw error;
    }
};

// Update an existing course
export const updateCourse = async (id, course) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        const response = await axios.put(`${API_URL}/${id}`, course, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating course with id ${id}:`, error);
        throw error;
    }
};

// Delete a course
export const deleteCourse = async (id) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        await axios.delete(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
        });
    } catch (error) {
        console.error(`Error deleting course with id ${id}:`, error);
        throw error;
    }
};