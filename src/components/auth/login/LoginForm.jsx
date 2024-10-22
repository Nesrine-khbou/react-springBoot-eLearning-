import React from 'react';
import FormInput from "../FormInput";

import whiteLogo from "../../../assets/photos/icons/logo-white.PNG"

const LoginForm = () => {
    return (
        <form action="">
            <img src={whiteLogo} alt="logo" />
            <h2>WELCOME AGAIN</h2>

            <FormInput
                type="email"
                id="email"
                label="Login"
                placeholder="exemple@email.com ..."
                required
            />

            <FormInput
                type="password"
                id="password"
                label="Password"
                placeholder="password ..."
                required
            />

            {/* Checkbox for Remember Me */}
            <div id="remember-me-checkbox">
                <input type="checkbox" id="Remember-Me" />
                <label htmlFor="Remember-Me">Remember Me</label>
            </div>

            {/* Submit button */}
            <button type="submit">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                </svg>
                <p>Login</p>
            </button>

            {/* Forgot password link */}
            <a href="#" id="forgot_password">Forgot Your Password?</a>
        </form>
    );
};

export default LoginForm;
