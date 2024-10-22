import React from 'react';

const ServiceItem = ({ imgSrc, altText, title, description }) => {
    return (
        <li className="service">
            <div className="title">
                <img src={imgSrc} alt={altText} />
                <p>{title}</p>
            </div>
            <div className="details">
                <p>{description}</p>
            </div>
        </li>
    );
};

export default ServiceItem;
