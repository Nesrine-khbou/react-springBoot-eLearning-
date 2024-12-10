import React, { useEffect, useState } from 'react';
import ListItem from "./ListItem";
import { fetchInstructorReviews, fetchInstructorCoursesCount } from '../../../../services/InstructorService';

const Instructor = ({ instructor }) => {
    const [totalReviews, setTotalReviews] = useState(0);
    const [totalCourses, setTotalCourses] = useState(0); // State for storing course count
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        // Fetch reviews and courses count
        const fetchData = async () => {
            try {
                const reviews = await fetchInstructorReviews(instructor.id);
                setTotalReviews(reviews); // Assuming reviews is a count or array length

                const courses = await fetchInstructorCoursesCount(instructor.id);
                setTotalCourses(courses); // Assuming API returns { courseCount: 5 }
            } catch (error) {
                setError('Failed to load data');
                console.error(error);
            }
        };

        fetchData();
    }, [instructor.id]);

    return (
        <div id="instructor">
            <h3><strong>Instructor</strong></h3>
            <div id="instructor-name">
                <h3><strong>{instructor.username}</strong></h3>
                <p>{instructor.headline}</p>
            </div>
            <div id="instructor-info">
                <img src={`/${instructor.image}`} alt="instructor-pic" />
                <div>
                    <ul>
                        <ListItem
                            icon={
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            }
                            text={`${instructor.instructorRating} Instructor Rating`}
                        />
                        <ListItem
                            icon={
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                            }
                            text={error ? 'Error loading reviews' : `${totalReviews} Reviews`} // Handle errors gracefully
                        />
                        <ListItem
                            icon={
                                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                            }
                            text={`${instructor.totalStudents} Students`}
                        />
                        <ListItem
                            icon={
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                            }
                            text={error ? 'Error loading courses' : `${totalCourses} Courses`} // Show course count
                        />
                    </ul>
                </div>
            </div>
            <p>{instructor.description}</p>
        </div>
    );
};

export default Instructor;
