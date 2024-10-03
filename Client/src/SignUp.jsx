import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import './stylesheets/Signup[1].css'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Use the hook here

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        {
          email,
          password,
          username,
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(response.data);
      if (response.data.message === "User created successfully, redirecting to login page") {
        setSuccess(response.data.message);
         handleLoginRedirect();// Use navigate here
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  const handleLoginRedirect=(e)=>{
    e.preventDefault();
    navigate("/");
  }

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
        <label>Already have an account?</label>
        <button onClick={handleLoginRedirect}>LogIn</button>
      {success && (
        <div>
          <p>{success}</p>
          <p>Please <a href="#" onClick={() => navigate("/login")}>click here</a> to login.</p>
        </div>
      )}
    </div>
  );
};

export default SignUp;
