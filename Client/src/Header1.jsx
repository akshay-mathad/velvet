import React from "react";
import "./stylesheets/Header.css";
import ValvetTitle from "./images/ValvetTitle.svg";
import { CgProfile } from "react-icons/cg";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = 'http://localhost:5000'; // Adjust the URL as needed

function Header({ setPage }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/users/logout", {}, {
        withCredentials: true, // Important for cookie-based sessions
      });
      // Clear any local storage or application state related to the user
      localStorage.removeItem("token"); // If you are storing the token in local storage
      navigate("/login"); // Redirect to the login page or wherever you prefer
    } catch (error) {
      console.error("Logout error:", error);
      // Handle the error (show a message, etc.)
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="main-header">
      <img
        id="ValvetTitle"
        src={ValvetTitle}
        alt="Valvet Title"
        onClick={() => handleNavigate('/main')}
      />
      <section className="page">
        <a className="profile" onClick={() => handleNavigate('/profile')}>
          <CgProfile />
        </a>
        <a className="LogOut" onClick={handleLogout}>Log Out</a>
      </section>
    </div>
  );
}

export default Header;
