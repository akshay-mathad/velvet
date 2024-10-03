import React, { useState, useEffect } from "react";
import axios from "axios";
import './stylesheets/Profile.css';

function Profile() {
  const [profileData, setProfileData] = useState(null); // Store fetched profile data
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    mobile: "",
    comment: ""
  }); // Store form input data
  const [isEditMode, setIsEditMode] = useState(false); // Toggle between view and edit mode
  const [error, setError] = useState(""); // Display error messages
  const [success, setSuccess] = useState(""); // Display success messages

  // Fetch profile data on component load
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/profile/${formData.username}`);
        setProfileData(response.data);
        setFormData(response.data); // Set form data with fetched profile data
      } catch (error) {
        setError("Error fetching profile data.");
        console.error("Fetch Error:", error); // Log the actual error for debugging
      }
    };

    // Call fetch function only if username is present
    if (formData.username) {
      fetchProfileData();
    }
  }, [formData.username]); // Dependency on username to trigger fetch

  // When the "Edit" button is clicked, toggle the form into edit mode
  const handleEditClick = () => {
    setIsEditMode(true);
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit the updated profile data
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/profile",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSuccess(response.data.message || "Profile updated successfully."); // Show success message
      setProfileData(formData); // Update the displayed profile data with new values
      setIsEditMode(false); // Switch back to view mode
    } catch (error) {
      console.error("Submit Error:", error); // Log error for debugging
      setError(error.response ? error.response.data.message : "An error occurred while saving.");
    }
  };

  return (
    <div className="main-profile">
      <div className="profile-head">Your Profile</div>

      {profileData && !isEditMode ? (
        // Display profile data when not in edit mode
        <div id="profile-display">
          <p className="edit-sec"><strong>Username: </strong> {profileData.username}</p>
          <p className="edit-sec"> <strong>Name: </strong> {profileData.name}</p>
          <p className="edit-sec"><strong>Mobile: </strong> {profileData.mobile}</p>
          <p className="edit-sec"><strong>Comment: </strong> {profileData.comment}</p>
          <button className="profile-btn" onClick={handleEditClick}>Edit</button>
        </div>
      ) : (
        // Display the form when in edit mode
        <form className="profile-sec" onSubmit={handleSubmit}>
          <label className="edit-sec">
            <span className="input-name">Username:</span>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          <label className="edit-sec">
            <span className="input-name">Name:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="edit-sec">
            <span className="input-name">Mobile:</span>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </label>
          <label className="edit-sec">
            <span className="input-name">Comment:</span>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
          </label>

          {/* Display success or error messages */}
          {success && <p className="success-message">{success}</p>}
          {error && <p className="error-message">{error}</p>}

          <button className="profile-btn" type="submit">Save</button>
        </form>
      )}
    </div>
  );
}

export default Profile;
