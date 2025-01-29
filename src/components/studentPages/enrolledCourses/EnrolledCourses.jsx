import React from "react";

import "../../../styles/shared.css";
import "../../../styles/enrolled-courses-style.css";
import "../../../styles/ProfileDashboard.css";
import StudentSideBar from "../../SideBar/StudentSideBar";
import EnrolledCourseList from "./EnrolledCoursesList";

function ProfilePage() {

    return (
        <div>

            {/* Adding spacing to push content below fixed header */}
            <div id="space"></div>

            {/* InstructorProfile Dashboard */}
            <div className="dashboard-container">
                <StudentSideBar/>

                {/* Main content */}
                <EnrolledCourseList/>
            </div>
        </div>
    );
}



export default ProfilePage;
