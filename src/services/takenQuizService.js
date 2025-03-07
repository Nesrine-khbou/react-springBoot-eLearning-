// services/takenQuizService.js

const API_URL = "http://localhost:8080/api/taken-quizzes";

// Add a taken quiz
export const addTakenQuiz = async (studentId, quizId) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ studentId, quizId }),
        });
        if (!response.ok) {
            throw new Error("Failed to add taken quiz");
        }
        return await response.json();
    } catch (error) {
        console.error("Error adding taken quiz:", error);
        throw error;
    }
};

// Get quizzes taken by a specific student
export const getQuizzesByStudent = async (studentId) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage

        const response = await fetch(`${API_URL}/student/${studentId}`,{
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch quizzes by student");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching quizzes by student:", error);
        throw error;
    }
};

// Get students who took a specific quiz
export const getStudentsByQuiz = async (quizId) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage

        const response = await fetch(`${API_URL}/quiz/${quizId}`,{
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch students by quiz");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching students by quiz:", error);
        throw error;
    }
};
