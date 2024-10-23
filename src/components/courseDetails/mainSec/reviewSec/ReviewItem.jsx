import React from 'react';

// Reusable ReviewItem Component
const ReviewItem = ({ imgSrc, name, ratingSrc, timeAgo, reviewText }) => {
    return (
        <div className="review-sec">
            <div className="review">
                <img src={imgSrc} alt="review-pic" />
                <div>
                    <p><strong>{name}</strong></p>
                    <div className="rating-review">
                        <img src={ratingSrc} alt="stars" />
                        <p><span>{timeAgo}</span></p>
                    </div>
                </div>
            </div>
            <p className="rev-p">{reviewText}</p>
        </div>
    );
};

export default ReviewItem;