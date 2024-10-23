import React from 'react';

const ListItem = ({ icon, text }) => {
    return (
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                {icon}
            </svg>
            <p>{text}</p>
        </li>
    );
};

export default ListItem;