import { useState } from "react";
import { loginUser, fetchUserData } from "../services/loginService";
import { useNavigate } from "react-router-dom";

const useLoginForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // Step 1: Login and get token, role, and userId
            const { token, role, userId } = await loginUser(formData);
            console.log(" user token: ", token);
            // Step 2: Fetch user data based on role and userId
            const userData = await fetchUserData(token, role, userId);

            // Step 3: Store token and user data
            localStorage.setItem("token", token);
            localStorage.setItem("userRole", role);
            localStorage.setItem("userData", JSON.stringify(userData));

            // Step 4: Redirect based on role
            if (role === "STUDENT") {
                navigate("/student-interface", { state: { user: userData } });
            } else if (role === "INSTRUCTOR") {
                navigate("/instructor-interface", { state: { user: userData } });
            }
        } catch (err) {
            setError(err.message || "Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return { formData, error, loading, handleChange, handleSubmit };
};

export default useLoginForm;
