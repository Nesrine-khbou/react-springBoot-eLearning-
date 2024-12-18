import React, { useEffect, useState } from "react";
import QuizItem from "./QuizItem";
import { fetchQuizzes } from "../../services/quizService";

const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadQuizzes = async () => {
            try {
                const data = await fetchQuizzes(); // Use the service
                setQuizzes(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadQuizzes();
    }, []);

    if (loading) return <p>Loading quizzes...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div id="list-of-quizzes">
            <ul>
                {quizzes.map((quiz) => (
                    <QuizItem
                        key={quiz.id}
                        id={quiz.id}
                        type={quiz.type}
                        title={quiz.title}
                        details={quiz.details}
                        link={quiz.link}
                    />
                ))}
            </ul>
        </div>
    );
};

export default QuizList;
