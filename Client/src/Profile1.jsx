import React, { useState } from "react";
import "./stylesheets/Profile1.css"; // Import the CSS file

function Profile() {
    const [formData, setFormData] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        mobile: "123-456-7890",
        profilePhoto: "",
        comment: "This is a sample comment.",
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        // Logic to save the data
    };

    const handleResetPassword = () => {
        // Logic to reset password
    };

    return (
        <div className="main-profile">
            <div className="profile-form">
                {isEditing ? (
                    <>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="profile-input"
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="profile-input"
                            />
                        </div>
                        <div>
                            <label>Mobile:</label>
                            <input
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="profile-input"
                            />
                        </div>
                        <div>
                            <label>Profile Photo:</label>
                            <input
                                type="file"
                                name="profilePhoto"
                                onChange={handleChange}
                                className="profile-input"
                            />
                        </div>
                        <div>
                            <label>Comment:</label>
                            <textarea
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                className="profile-input"
                            />
                        </div>
                        <button onClick={handleSave} className="profile-button edit-button">
                            Save
                        </button>
                    </>
                ) : (
                    <>
                        <div>
                            <label>Name:</label>
                            <span>{formData.name}</span>
                        </div>
                        <div>
                            <label>Email:</label>
                            <span>{formData.email}</span>
                        </div>
                        <div>
                            <label>Mobile:</label>
                            <span>{formData.mobile}</span>
                        </div>
                        <div>
                            <label>Profile Photo:</label>
                            <span>{formData.profilePhoto}</span>
                        </div>
                        <div>
                            <label>Comment:</label>
                            <span>{formData.comment}</span>
                        </div>
                        <button onClick={handleEdit} className="profile-button edit-button">
                            Edit Profile
                        </button>
                    </>
                )}
                <button
                    onClick={handleResetPassword}
                    className="profile-button reset-button"
                >
                    Reset Password
                </button>
            </div>
        </div>
    );
}

export default Profile;
