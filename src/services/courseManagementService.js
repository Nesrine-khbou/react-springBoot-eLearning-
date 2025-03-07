// services/courseManagementService.js
import { getInstructorCourses } from "./InstructorService";

const API_BASE_URL = "http://localhost:8080";

// Function to add a course
export const addCourse = async (courseData) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage

        const response = await fetch(`${API_BASE_URL}/courses`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header

            },
            body: JSON.stringify(courseData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to add course.");
        }

        return await response.json();
    } catch (error) {
        console.error("Error adding course:", error);
        throw error;
    }
};

// Function to add content to a course
export const addContent = async (contentData) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage

        const response = await fetch(`${API_BASE_URL}/content`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header

            },
            body: JSON.stringify(contentData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to add content.");
        }

        return await response.json();
    } catch (error) {
        console.error("Error adding content:", error);
        throw error;
    }
};

// Fetch courses for the instructor and handle the loading logic
export const fetchInstructorCourses = async (userData, setCourses, setLoading) => {
    if (!userData || !userData.id) {
        console.warn("User data or user ID is missing.");
        setLoading(false); // Stop loading if user data is invalid
        return;
    }

    try {
        const courses = await getInstructorCourses(userData.id); // Call the API
        setCourses(courses); // Update state with fetched courses
    } catch (error) {
        console.error("Failed to fetch instructor courses:", error);
    } finally {
        setLoading(false); // Ensure loading is stopped
    }
};

// Function to delete a course
export const deleteInstructorCourse = async (courseId) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage

        const response = await fetch(`${API_BASE_URL}/courses/${courseId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to delete course");
        }
    } catch (error) {
        console.error("Error deleting course:", error);
        throw new Error("Failed to delete course");
    }

    console.log(`Course with ID ${courseId} deleted successfully`);
};

// Function to update a course
export const updateCourse = async (courseId, courseData) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage

        console.log(courseData)
        const dataToUpdate={
            "title":courseData.title,
            "description":courseData.description,
            "duration": courseData.duration,
            "imageUrl":courseData.imageUrl,
            "whatWillLearn":courseData.whatWillLearn
        }
        const response = await fetch(`${API_BASE_URL}/courses/${courseId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header

            },
            body: JSON.stringify(dataToUpdate),
        });
        console.log("resposne")
        console.log(response)

        if (!response.ok) {
            throw new Error("Failed to update course");
        }

        return response.json();
    } catch (error) {
        console.error("Error updating course:", error);
        throw error;
    }
};

// Function to fetch a course by its ID
export const getCourseById = async (courseId) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage

        const response = await fetch(`${API_BASE_URL}/courses/${courseId}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to fetch course by ID.");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching course by ID:", error);
        throw error;
    }
};


// Function to update content
export const updateContent = async (contentId, contentData) => {
    const updatedContentData = {
        "title":contentData.title,
        "videoUrl": contentData.videoUrl,
        "category":contentData.category,
        "videoDuration": contentData.videoDuration
    }
    try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage

        const response = await fetch(`${API_BASE_URL}/content/${contentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header

            },
            body: JSON.stringify(updatedContentData),
        });

        if (!response.ok) {
            throw new Error("Failed to update content");
        }

        return response.json();
    } catch (error) {
        console.error("Error updating content:", error);
        throw error;
    }
};