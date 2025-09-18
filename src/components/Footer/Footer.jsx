import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-menu">
        <li>
          <a href="https://github.com/Mohammadkaif1721" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" /> GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mohammed-kaif-6594a635a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mohdkaif_59/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" /> Instagram
          </a>
        </li>
      </ul>

      <p className="footer-copy">
        © {new Date().getFullYear()} MOHAMMED KAIF|All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
