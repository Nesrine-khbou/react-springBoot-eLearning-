export const loginUser = async (credentials) => {
    const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Login failed");
    }

    return await response.json(); // { token, role, userId }
};


export const fetchUserData = async (token, role, userId) => {
    console.log("Fetching user data:", token, role, userId);
    const endpoint =
        role === "STUDENT"
            ? `http://localhost:8080/api/students/${userId}`
            : `http://localhost:8080/api/instructors/${userId}`;

    console.log(token)
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user data");
    }

    const data = await response.json(); // Read once
    console.log(data); // Log the parsed data

    return data; // Return the parsed JSON
};
