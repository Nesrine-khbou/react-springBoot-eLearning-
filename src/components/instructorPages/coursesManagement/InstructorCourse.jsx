import React, { useState } from "react";
import { Link } from "react-router-dom";

const InstructorCourse = ({ image, title, detailsLink, onDelete ,onUpdate}) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDeleteClick = () => {
        setShowDeleteModal(true); // Show delete confirmation modal
    };

    const handleDeleteConfirm = () => {
        onDelete(); // Call the delete function passed as prop
        setShowDeleteModal(false); // Close the modal
    };

    const handleDeleteCancel = () => {
        setShowDeleteModal(false); // Close the modal if canceled
    };

    return (
        <li className="course-option">
            <img src={image} alt={`${title}-icon`} className="web-tools-icons"/>
            <h2>{title}</h2>
            <div className="buttons">
                <button className="update-btn" onClick={onUpdate}>Update</button>
                <button className="delete-btn" onClick={handleDeleteClick}>Delete</button>
                <Link to={detailsLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p>Details</p>
                </Link>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="modal-backdrop" onClick={handleDeleteCancel}>
                    <div className="modal">
                        <h2>Are you sure you want to delete this course?</h2>
                        <button onClick={handleDeleteConfirm}>Yes</button>
                        <button onClick={handleDeleteCancel}>No</button>
                    </div>
                </div>
            )}
        </li>
    );
};

export default InstructorCourse;
