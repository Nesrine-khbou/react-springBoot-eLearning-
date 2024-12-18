export const logoutUser = async (token) => {
    const response = await fetch("http://localhost:8080/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Send the token for logout
        },
    });

    if (!response.ok) {
        throw new Error("Logout failed");
    }
};
