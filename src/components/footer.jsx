import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>📍 Address: 123 Dhaka Street, Dhaka, Bangladesh</p>
        <p>📧 Email: kickfighterdojo@gmail.com</p>
        <p>📞 Phone: +880 1234-567890</p>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bangladesh KickFighter Karate Schoole | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
