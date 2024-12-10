// reviewService.js

const BASE_URL = "http://localhost:8080";

export const fetchReviews = async () => {
    try {
        const response = await fetch(`${BASE_URL}/reviews`);
        if (!response.ok) {
            throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        return data; // Returns reviews with associated student data
    } catch (error) {
        throw error;
    }
};
