import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home"; // Import Home component
import Courses from "./components/courses/Courses";
import Tutorials from "./components/tutorials/Tutorials";
import Quizzes from "./components/quizzes/Quizzes";
import Exercises from "./components/exercices/Exercises";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home component for the root path */}
                <Route path="/courses" element={<Courses />} />
                <Route path="/tutorials" element={<Tutorials />} />
                <Route path="/quizzes" element={<Quizzes />} />
                <Route path="/exercises" element={<Exercises />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Home />} /> {/* Default page for unmatched routes */}
            </Routes>
            <Footer />
        </>
    );
}

export default App;
