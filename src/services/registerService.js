// src/services/registerService.js

export const registerUser = async (formData) => {
    const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to register");
    }

    return response.json(); // Return the API response if needed
};
