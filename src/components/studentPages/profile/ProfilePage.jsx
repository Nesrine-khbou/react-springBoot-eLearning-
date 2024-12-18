import React from "react";
import "../../../styles/ProfileDashboard.css";
import Sidebar from "../../dashboard/SideBar";
import Profile from "./Profile";

function ProfilePage() {

        return (
            <div>

                {/* Adding spacing to push content below fixed header */}
                <div id="space"></div>

                {/* Profile Dashboard */}
                <div className="dashboard-container">
                    <Sidebar/>

                    {/* Main content */}
                    <Profile/>
                </div>
            </div>
        );
    }



export default ProfilePage;
