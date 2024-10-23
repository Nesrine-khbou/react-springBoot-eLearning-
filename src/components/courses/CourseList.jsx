import React from 'react';
import CourseItem from './CourseItem';

import html_image from "../../assets/photos/images/html.png";
import css_image from "../../assets/photos/images/css.png";
import js_image from "../../assets/photos/images/javascript.png";
import angular_image from "../../assets/photos/images/angular10.png";
import php_image from "../../assets/photos/images/php.png";
import algo_image from "../../assets/photos/images/algorithms.png";
import mern_image from "../../assets/photos/images/mern-stack.png";
import mean_image from "../../assets/photos/images/mean-stack.png";
import laravel_image from "../../assets/photos/images/laravel7.png";


const CourseList = () => {
    const courses = [
        {
            image: html_image,
            title: 'HTML',
            detailsLink: '/course-HTML',
        },
        {
            image: css_image,
            title: 'CSS',
            detailsLink: '',
        },
        {
            image: js_image,
            title: 'JavaScript basics',
            detailsLink: '',
        },
        {
            image: angular_image,
            title: 'Angular 10 : Drinks Application',
            detailsLink: '',
        },
        {
            image: php_image,
            title: 'PHP 7 : E-commerce Application',
            detailsLink: '',
        },
        {
            image: algo_image,
            title: 'Algorithms for beginners',
            detailsLink: '',
        },
        {
            image: mern_image,
            title: 'MERN STACK for beginners',
            detailsLink: '',
        },
        {
            image: mean_image,
            title: 'MEAN STACK for beginners',
            detailsLink: '',
        },
        {
            image: laravel_image,
            title: 'Laravel 7 for beginners : E-commerce project',
            detailsLink: '',
        },
    ];

    return (
        <div id="list-of-courses">
            <ul>
                {courses.map((course, index) => (
                    <CourseItem
                        key={index} // Use a unique key for each item in a real application
                        image={course.image}
                        title={course.title}
                        detailsLink={course.detailsLink}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
