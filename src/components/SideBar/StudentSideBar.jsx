import React from "react";
import "../../styles/ProfileDashboard.css";
import { Link } from "react-router-dom";

function StudentSideBar() {
    return (
        <div className="sidebar">
            <h2 className="logo">Dashboard</h2>
            <ul>
                <li>
                    <Link to="/enrolled-courses" className="sidebar-link">
                        My courses
                    </Link>
                </li>
                <li>
                    <Link to="/my-quizzes" className="sidebar-link">
                        My quizzes
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="sidebar-link">
                        Profile
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default StudentSideBar;
