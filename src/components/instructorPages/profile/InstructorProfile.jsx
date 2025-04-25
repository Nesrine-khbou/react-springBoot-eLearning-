import React, { useState, useEffect } from "react";
import "../../../styles/ProfileDashboard.css";
import {json} from "react-router-dom";

function InstructorProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        id: null,
        name: "",
        email: "",
        address: "",
        headline: "",
        description: "",
        image: "default-pic.PNG",
    });
    const [newImage, setNewImage] = useState(null);

    // Fetch user data when the component mounts
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                // Retrieve token, role, and userData from localStorage
                const token = localStorage.getItem("token");
                const role = localStorage.getItem("userRole");
                const userData = JSON.parse(localStorage.getItem("userData"));

                if (!token || !role || !userData?.id) {
                    throw new Error("User authentication data is missing.");
                }
                console.log("user daata : ", JSON.parse(localStorage.getItem("userData")))
                console.log("token : ", token)

                // Fetch user profile data

                const response = await fetch(
                    `http://localhost:8080/api/${role.toLowerCase()}s/${userData.id}`,
                    {
                        method: "GET",
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch profile data.");
                }

                // Parse the JSON response
                const data = await response.json();
                console.log("Fetched data: ", data);

                // Update the profile state
                setProfile({
                    id: data.id,
                    name: data.username || "",
                    email: data.email || "",
                    address: data.address || "Not specified",
                    headline: data.headline||"Write something about you ...",
                    description: data.description||"Not yet specified",
                    image: data.image || "default-pic.PNG",
                });

                console.log("InstructorProfile updated successfully.");
            } catch (error) {
                console.error("Error fetching user profile:", error.message);
            }
        };

        fetchUserProfile();
    }, []);

    // Log the profile whenever it changes
    useEffect(() => {
        if (profile) {
            console.log("Updated profile: ", profile);
        }
    }, [profile]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleImageChange = (e) => {
        setNewImage(e.target.files[0]);
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("userRole");
            const userData = JSON.parse(localStorage.getItem("userData"));

            if (!token || !role || !userData?.id) {
                throw new Error("User authentication data is missing.");
            }

            // Prepare the data
            const updatedProfile = {
                id: profile.id,
                username: profile.name,
                email: profile.email,
                headline: profile.headline ,
                description: profile.description,
                image: newImage ? newImage.name : profile.image,
            };
            console.log("hedhaaaaa:",JSON.stringify(updatedProfile) )

            const response = await fetch(
                `http://localhost:8080/api/${role.toLowerCase()}s/${userData.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedProfile),
                }
            );
            if (!response.ok) {
                throw new Error("Failed to update profile.");
            }

            const updatedData = await response.json();
            console.log("response : ")
            console.log(response);
            console.log("updated data")
            console.log(updatedData);
            // Update profile state with updated data
            setProfile({
                id : updatedData.id || profile.id,
                name: updatedData.username || profile.name,
                email: updatedData.email || profile.email,
                address: updatedData.address || "Not specified",
                headline: updatedData.headline || profile.headline,
                description: updatedData.description || profile.description,
                image: updatedData.image || profile.image,
            });

            // Update localStorage with updated user data
            localStorage.setItem("userData", JSON.stringify(updatedData));

            setIsEditing(false);
        } catch (error) {
            console.error("Error updating profile:", error.message);
        }
    };

    return (
        <div className="main-content">
            <div id="main-title">
                <p>Instructor Dashboard &gt; My Profile</p>
            </div>
            <div className="profile-container">
                <div className="info-card">
                    <h4>📄 My Information</h4>
                    <div className="profile-info">
                        <div className="avatar">
                            <img
                                src={profile.image.startsWith("http") ? profile.image : `/${profile.image}`}
                                alt="Avatar"
                                onError={(e) => (e.target.src = "default-pic.PNG")}
                            />
                            {isEditing && <input type="file" accept="image/*" onChange={handleImageChange} />}
                        </div>
                        <div className="details">
                            {isEditing ? (
                                <>
                                    <input
                                        type="text"
                                        name="name"
                                        value={profile.name}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={profile.email}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="address"
                                        value={profile.address}
                                        onChange={handleChange}
                                    />
                                </>
                            ) : (
                                <>
                                    <p><strong>{profile.name}</strong></p>
                                    <p>📧 {profile.email}</p>
                                    <p>🏠 {profile.address}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="additional-info">
                    <div className="bio-card">
                        <h4>📄 Headline</h4>
                        {isEditing ? (
                            <textarea name="headline" value={profile.headline} onChange={handleChange} />
                        ) : (
                            <p>{profile.headline}</p>
                        )}
                    </div>
                    <div className="interests-card">
                        <h4>🎯 Description</h4>
                        {isEditing ? (
                            <textarea name="description" value={profile.description} onChange={handleChange} />
                        ) : (
                            <p>{profile.description}</p>
                        )}
                    </div>
                    <div className="edit-buttons">
                        {isEditing ? (
                            <button className="update" onClick={handleSave}>💾 Save</button>
                        ) : (
                            <button  className="update" onClick={toggleEdit}>✏️ Edit</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstructorProfile;
