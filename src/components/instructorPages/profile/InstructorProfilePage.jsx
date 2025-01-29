import React from "react";
import "../../../styles/ProfileDashboard.css";
import InstructorProfile from "./InstructorProfile";
import InstructorSideBar from "../../SideBar/InstructorSideBar";

function InstructorProfilePage() {

    return (
        <div>

            {/* Adding spacing to push content below fixed header */}
            <div id="space"></div>

            {/* InstructorProfile Dashboard */}
            <div className="dashboard-container">
                <InstructorSideBar/>
                {/* Main content */}
                <InstructorProfile/>
            </div>
        </div>
    );
}



export default InstructorProfilePage;
