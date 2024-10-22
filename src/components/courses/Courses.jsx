import React from 'react';
import Banner from "../shared/Banner";
import SearchBar from "./SearchBar";
import CourseList from "./CourseList";

import "../../styles/shared.css"
import "../../styles/courses-style.css"

import courseLogo from "../../assets/photos/icons/courses-white.PNG";


function Courses() {
    return (
        <>
            <div id="space"></div>

            <Banner
                src={courseLogo}
                altText="courses"
                text="Courses List"
            />
            <SearchBar/>
            <CourseList/>
        </>

    );
}

export default Courses;
