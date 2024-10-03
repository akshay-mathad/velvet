import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./stylesheets/Signup1.css";
import Eclipse8 from "./images/Ellipse-8-logo.png";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        {
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (
        response.data.message ===
        "User created successfully, redirecting to login page"
      ) {
        setSuccess(response.data.message);
        handleLoginRedirect();
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img id="eclipse-8-signup" src={Eclipse8} alt="Eclipse 8 logo" />

        <h2 className="signup-h2">Sign Up</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <input
            className="signup-input"
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="signup-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <label className="signup-label">Already have an account?</label>
        <button onClick={handleLoginRedirect} className="signup-login-button">
          Login
        </button>
        {success && (
          <div>
            <p>{success}</p>
            <p>
              Please{" "}
              <a
                href="#"
                className="signup-a"
                onClick={() => navigate("/login")}
              >
                click here
              </a>{" "}
              to login.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
