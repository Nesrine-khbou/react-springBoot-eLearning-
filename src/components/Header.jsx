import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/shared.css";
import "../styles/style.css";

import logo from "../assets/photos/icons/logo.PNG";
import home_logo from "../assets/photos/icons/home.PNG";
import courses_logo from "../assets/photos/icons/courses.PNG";
import tutos_logo from "../assets/photos/icons/tutos.PNG";
import quizzes_logo from "../assets/photos/icons/quizzes.PNG";
import exercices_logo from "../assets/photos/icons/exercices.PNG";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check login status on component mount
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token); // Set to true if token exists
    }, []);

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove the token
        setIsLoggedIn(false); // Update the state
        navigate("/"); // Redirect to the home page

    };

    return (
        <header>
            <div id="page-title">
                <img src={logo} alt="logo" />
                <Link to="/">Nesrine Academy</Link>
            </div>

            <div id="options">
                <ul>
                    <li>
                        <Link to="/">
                            <img src={home_logo} alt="home" />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses">
                            <img src={courses_logo} alt="courses" />
                            <p>Courses</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tutorials">
                            <img src={tutos_logo} alt="tutorials" />
                            <p>Tutorials</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/quizzes">
                            <img src={quizzes_logo} alt="quizzes" />
                            <p>Quizzes</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/exercises">
                            <img src={exercices_logo} alt="exercises" />
                            <p>Exercises</p>
                        </Link>
                    </li>
                </ul>
            </div>

            <div id="register-login">
                {isLoggedIn ? (
                    <>
                        <Link to="/student-interface" id="register">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                            <p>Home</p>
                        </Link>
                        <button onClick={handleLogout} id="logout">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p>Logout</p>
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/register" id="register">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.630l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                            </svg>
                            <p>Register</p>
                        </Link>
                        <Link to="/login" id="login">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p>Login</p>
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
