import React from "react";
import "../../../styles/ProfileDashboard.css";
import StudentSideBar from "../../SideBar/StudentSideBar";
import Profile from "./Profile";

function ProfilePage() {

        return (
            <div>

                {/* Adding spacing to push content below fixed header */}
                <div id="space"></div>

                {/* InstructorProfile Dashboard */}
                <div className="dashboard-container">
                    <StudentSideBar/>

                    {/* Main content */}
                    <Profile/>
                </div>
            </div>
        );
    }



export default ProfilePage;
