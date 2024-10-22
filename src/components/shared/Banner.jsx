import React from 'react';

function Banner({ src, altText, text }) {
    return (
        <>
            <div id="space"></div>
            <div id="main-title">
                <img src={src} alt={altText} />
                <p>{text}</p>
            </div>
        </>
    );
}

export default Banner;
