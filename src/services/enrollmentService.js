import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/enrollments"; // Update with your backend URL

export const enrollStudentInCourse = async (studentId, courseId) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage

        const response = await axios.post(
            `${API_BASE_URL}?studentId=${studentId}&courseId=${courseId}`,
            {}, // Empty body
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Include token if needed
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error enrolling student in course:", error);
        throw error;
    }
};


const API_BASE_URL2 = "http://localhost:8080/api";

export const getEnrolledCourses = async (studentId) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`${API_BASE_URL2}/enrollments/student/${studentId}/courses`, {
            headers: {
                Authorization: `Bearer ${token}`, // Pass token for authentication
            },
        });
        return response.data; // Return the enrolled courses
    } catch (error) {
        console.error("Error fetching enrolled courses:", error);
        throw error;
    }
}

