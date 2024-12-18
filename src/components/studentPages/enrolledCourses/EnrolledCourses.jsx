import React from "react";

import "../../../styles/shared.css";
import "../../../styles/enrolled-courses-style.css";
import "../../../styles/ProfileDashboard.css";
import Sidebar from "../../dashboard/SideBar";
import EnrolledCourseList from "./EnrolledCoursesList";

function ProfilePage() {

    return (
        <div>

            {/* Adding spacing to push content below fixed header */}
            <div id="space"></div>

            {/* Profile Dashboard */}
            <div className="dashboard-container">
                <Sidebar/>

                {/* Main content */}
                <EnrolledCourseList/>
            </div>
        </div>
    );
}



export default ProfilePage;
