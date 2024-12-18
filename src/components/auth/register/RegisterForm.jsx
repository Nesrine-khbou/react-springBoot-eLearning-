import React from "react";
import FormInput from "../FormInput";
import useRegisterForm from "../../../hooks/useRegisterForm";
import whiteLogo from "../../../assets/photos/icons/logo-white.PNG";

function RegisterForm() {
    const { formData, error, success, handleChange, handleSubmit } = useRegisterForm();

    return (
        <form onSubmit={handleSubmit}>
            <img src={whiteLogo} alt="logo" />
            <h2>CREATE ACCOUNT</h2>

            <FormInput
                label="Username"
                type="text"
                id="username"
                placeholder="username ..."
                required={true}
                onChange={handleChange}
            />

            <FormInput
                label="Email"
                type="email"
                id="email"
                placeholder="exemple@email.com ..."
                required={true}
                onChange={handleChange}
            />

            <FormInput
                label="Password"
                type="password"
                id="password"
                placeholder="password ..."
                required={true}
                onChange={handleChange}
            />

            <FormInput
                label="Password Confirmation"
                type="password"
                id="passwordConfirmation"
                placeholder="confirm password ..."
                required={true}
                onChange={handleChange}
            />

            {/* Role Selection */}
            <div>
                <label htmlFor="role">Role</label>
                <select
                    id="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                >
                    <option value="STUDENT">STUDENT</option>
                    <option value="INSTRUCTOR">INSTRUCTOR</option>
                </select>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <button type="submit">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                </svg>
                <p>create</p>
            </button>
        </form>
    );
}

export default RegisterForm;
