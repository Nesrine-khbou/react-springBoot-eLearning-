const API_URL = "http://localhost:8080/api/quizzes";

// Fetch all quizzes
export const fetchQuizzes = async () => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        const response = await fetch(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch quizzes");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching quizzes:", error);
        throw error;
    }
};

// Fetch quiz details by quizId
export const fetchQuizDetailsById = async (quizId) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        const response = await fetch(`${API_URL}/${quizId}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch quiz details");
        }
        return await response.json(); // Return detailed quiz data
    } catch (error) {
        console.error("Error fetching quiz details:", error);
        throw error;
    }
};

// Add a new quiz
export const addQuiz = async (quiz) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                "Content-Type": "application/json",
            },
            body: JSON.stringify(quiz),
        });
        if (!response.ok) {
            throw new Error("Failed to add quiz");
        }
        return await response.json();
    } catch (error) {
        console.error("Error adding quiz:", error);
        throw error;
    }
};

// Update a quiz
export const updateQuiz = async (id, quiz) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage

        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                "Content-Type": "application/json",
            },
            body: JSON.stringify(quiz),
        });
        if (!response.ok) {
            throw new Error("Failed to update quiz");
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating quiz:", error);
        throw error;
    }
};

// Delete a quiz
export const deleteQuiz = async (id) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage

        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
        });
        if (!response.ok) {
            throw new Error("Failed to delete quiz");
        }
        return "Quiz deleted successfully!";
    } catch (error) {
        console.error("Error deleting quiz:", error);
        throw error;
    }
};
