import React, { useState, useEffect } from "react";
import ReviewItem from "./ReviewItem";
import { fetchReviews } from "../../../../services/reviewService"; // Import the service
import stars from "../../../../assets/photos/images/stars-orange.PNG";

const ReviewsSec = () => {
    const [reviews, setReviews] = useState([]); // State to store reviews
    const [loading, setLoading] = useState(true); // State to manage loading
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const getReviews = async () => {
            try {
                const data = await fetchReviews(); // Use the service
                setReviews(data); // Update state with fetched reviews
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getReviews();
    }, []);

    if (loading) {
        return <p>Loading reviews...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
        <div id="reviews">
            <h3><strong>Reviews</strong></h3>

        </div>
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <ReviewItem
                        key={review.id}
                        imgSrc={`/${review.student.image}`} // Use student's profile picture or default
                        name={review.student.username} // Display the student's name
                        ratingSrc={stars} // Static star image; you can update dynamically if needed
                        timeAgo="2 weeks ago" // You can add dynamic time calculation logic here
                        reviewText={review.reviewText} // Display review text
                    />
                ))
            ) : (
                <p>No reviews available</p>
            )}
            </>
    );
};

export default ReviewsSec;
