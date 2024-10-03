import React from "react";
import "./stylesheets/Footer.css";
import ValvetTitle from "./images/ValvetTitle.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Footer({ setPage }) {
  const navigate = useNavigate(); // Use the hook here

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="main-footer">
      <img
        id="ValvetTitle"
        src={ValvetTitle}
        alt="Valvet Title"
        onClick={() => handleNavigate('/main')}
      />
      <section className="links">
        <section className="page">
          <a className="support" onClick={() => handleNavigate('/support')}>
            Support
          </a>
          <a className="faq" onClick={() => handleNavigate('/faq')}>
            FAQ
          </a>
        </section>
        <div className="socials">
          <div id="instagram">
            <FaInstagram />
          </div>
          <div id="facebook">
            <FaFacebook />
          </div>
          <div id="xTwitter">
            <FaXTwitter />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
