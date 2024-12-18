// services/takenQuizService.js

const API_URL = "http://localhost:8080/api/taken-quizzes";

// Add a taken quiz
export const addTakenQuiz = async (studentId, quizId) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
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
        const response = await fetch(`${API_URL}/student/${studentId}`);
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
        const response = await fetch(`${API_URL}/quiz/${quizId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch students by quiz");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching students by quiz:", error);
        throw error;
    }
};
