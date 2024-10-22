import React from 'react';
import LearningStep from "./LearningStep";

const WhatWillLearn = () => {
    const steps = [
        "What is web page content?",
        "The general structure of HTML web page",
        "The different HTML elements",
        "Create your first HTML page",
    ];

    return (
        <div id="to_learn">
            <h3><strong>What Will Learn</strong></h3>
            {steps.map((step, index) => (
                <LearningStep key={index} description={step} />
            ))}
        </div>
    );
};
export default WhatWillLearn;