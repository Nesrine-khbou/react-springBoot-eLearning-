// src/hooks/useRegisterForm.js
import { useState } from "react";
import { registerUser } from "../services/registerService";

const useRegisterForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        role: "STUDENT", // Default role
        image: "default-pic.PNG", // Default image
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        // Validation
        if (formData.password !== formData.passwordConfirmation) {
            setError("Passwords do not match.");
            return;
        }

        try {
            await registerUser(formData); // Send formData with default "image" field
            setSuccess("Account created successfully!");
        } catch (err) {
            setError(err.message);
        }
    };

    return { formData, error, success, handleChange, handleSubmit };
};

export default useRegisterForm;
