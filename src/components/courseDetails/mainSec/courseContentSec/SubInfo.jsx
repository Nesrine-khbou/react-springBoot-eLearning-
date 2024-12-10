import React from 'react';

const SubInfo = ({ infoTitle, duration, videoUrl }) => {
    // Handle the click event to open the video in a new tab
    const handleClick = () => {
        if (videoUrl) {
            window.open(videoUrl, "_blank"); // Opens the video URL in a new tab
        }
    };

    return (
        <div className="sub-info" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className="info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
                <p>{infoTitle}</p>
            </div>
            <div className="time">
                <p>{duration}</p>
            </div>
        </div>
    );
};

export default SubInfo;
