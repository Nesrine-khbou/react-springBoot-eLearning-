import React, { useEffect, useState } from "react";
import { getQuizzesByStudent } from "../../../services/takenQuizService";
import { fetchQuizDetailsById } from "../../../services/quizService"; // Import the fetchQuizDetailsById function
import TakenQuizItem from "./TakenQuizItem";

const TakenQuizzesList = () => {
    const [quizzes, setQuizzes] = useState([]); // State for taken quizzes
    const [loading, setLoading] = useState(true); // Loading state
    const [userData, setUserData] = useState(null); // State to store user data

    useEffect(() => {
        // Fetch user data only once on mount
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        setUserData(storedUserData);
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    useEffect(() => {
        if (!userData || !userData.id) return; // Ensure user data exists

        const fetchTakenQuizzes = async () => {
            try {
                // Step 1: Fetch taken quizzes by student
                const takenQuizzes = await getQuizzesByStudent(userData.id);

                // Step 2: For each taken quiz, fetch its details using the quizId
                const quizzesWithDetails = await Promise.all(
                    takenQuizzes.map(async (takenQuiz) => {
                        const quizDetails = await fetchQuizDetailsById(takenQuiz.quizId); // Fetch quiz details using quizId
                        return { ...takenQuiz, ...quizDetails }; // Merge takenQuiz data with quiz details
                    })
                );

                // Step 3: Set the quizzes with details
                setQuizzes(quizzesWithDetails);
            } catch (error) {
                console.error("Failed to fetch taken quizzes:", error);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchTakenQuizzes();
    }, [userData]); // This effect will only run when userData is available

    if (loading) {
        return <p>Loading taken quizzes...</p>; // Loading state
    }

    return (
        <div id="list-of-taken-quizzes">
            <ul>
                {quizzes.length > 0 ? (
                    quizzes.map((quiz) => (
                        <TakenQuizItem
                            key={quiz.id} // Unique key
                            title={quiz.title}
                            type={quiz.type}
                            details={quiz.details}
                            link={quiz.link}
                        />
                    ))
                ) : (
                    <p>No taken quizzes found.</p> // No quizzes message
                )}
            </ul>
        </div>
    );
};

export default TakenQuizzesList;
