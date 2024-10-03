import React, { useState } from "react";
import axios from "axios";
import './stylesheets/Profile.css';

function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    comment: "",
    username: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/profile",
        formData,  // Send the formData directly
        {
          headers: {
            "Content-Type": "application/json",  // Sending JSON instead of FormData
          },
        }
      );

      setSuccess(response.data.message);
    } catch (error) {
      setError(error.response ? error.response.data.message : "An error occurred");
    }
  };

  return (
    <div className="main-profile">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required  // Optional: Make this field required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required  // Optional: Make this field required
          />
        </div>
        <div>
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Comment:</label>
          <input
            type="text"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </div>

        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Profile;
