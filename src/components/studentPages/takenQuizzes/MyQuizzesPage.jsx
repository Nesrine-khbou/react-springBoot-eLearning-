import React from "react";
import "../../../styles/ProfileDashboard.css";
import "../../../styles/quizzes-style.css"
import Sidebar from "../../dashboard/SideBar";
import TakenQuizzesList from "./TakenQuizzesList";

function MyQuizzesPage() {

    return (
        <div>

            {/* Adding spacing to push content below fixed header */}
            <div id="space"></div>

            {/* Profile Dashboard */}
            <div className="dashboard-container">
                <Sidebar/>

                {/* Main content */}
                <TakenQuizzesList/>
            </div>
        </div>
    );
}



export default MyQuizzesPage;
