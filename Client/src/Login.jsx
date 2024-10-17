import Eclipse8 from "./images/Ellipse-8-logo.png";
import { FaGoogle, FaApple } from "react-icons/fa";
import React, { useState } from "react";
import "./stylesheets/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignUpRedirect = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    localStorage.setItem("email", email);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/logIn",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // Include credentials
        }
      );
      console.log(response.data);
      if (response.data.message === "Login successful") {
        const { token } = response.data;
        localStorage.setItem("token", token); // Store the token in localStorage
        setSuccess("Login successful!");
        navigate("/main");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };
  
  

  return (
    <div className="main-login">
      <div className="login-v-container">
        <img id="eclipse-8" src={Eclipse8} alt="Eclipse 8 logo" />
        <h1>Log in or create an account</h1>
        <form className="email-form" onSubmit={handleLogin}>
          <input
            className="email-input"
            type="email"
            placeholder="your@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="email-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="tnc">
            By continuing, you agree to our <a href="#">terms</a> of use and have read our 
            <a href="#"> privacy policy.</a>
          </p>
          <input className="continue" type="submit" value="Continue" />
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <label className="l8">Don't have an account yet?</label>
        <button className="signUp-btn" onClick={handleSignUpRedirect}>Sign Up</button>
        <div className="h-container">
          <div className="line"></div>
          <span id="seperator"> OR CONTINUE WITH</span>
          <div className="line"></div>
        </div>
        <div className="other-login">
          <button className="direct-login" id="google-login">
            <FaGoogle id="googleLogo" /> Google
          </button>
          <button className="direct-login" id="apple-login">
            <FaApple id="appleLogo" /> Apple
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
