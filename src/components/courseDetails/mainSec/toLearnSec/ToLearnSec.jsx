import React from "react";
import LearningStep from "./LearningStep";

const ToLearnSec = ({ whatWillLearn }) => {
    return (
        <div id="to_learn">
            <h3><strong>What Will You Learn</strong></h3>
            {whatWillLearn && whatWillLearn.length > 0 ? (
                whatWillLearn.map((step, index) => (
                    <LearningStep key={index} description={step} />
                ))
            ) : (
                <p>No content available to display.</p>
            )}
        </div>
    );
};

export default ToLearnSec;
