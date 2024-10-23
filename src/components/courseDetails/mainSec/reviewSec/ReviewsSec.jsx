import React from 'react';

import ReviewItem from "./ReviewItem";

import reviewPic from "../../../../assets/photos/images/review-pic.PNG"
import stars from "../../../../assets/photos/images/stars-orange.PNG"

const ReviewsSec = () => {
    return (
        <>
            <div id="reviews">
                <h3><strong>Reviews</strong></h3>
            </div>
                {/* Reusing the ReviewItem component */}
                <ReviewItem
                    imgSrc={reviewPic}
                    name="MOKHLES Mbarek"
                    ratingSrc={stars}
                    timeAgo="2 weeks ago"
                    reviewText="simple et efficace"
                />

                {/* You can add more reviews by reusing the component */}
        </>
    );
};

export default ReviewsSec;
