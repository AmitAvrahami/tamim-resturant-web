import React from "react";
import "./SocialMediaSection.css";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

function SocialMediaSection() {
  return (
    <div className="social-media-section">
      <div className="button-container">
        <a href="/menu">
          <button className="social-button">תפריט</button>
        </a>
        <a href="/gallery">
          <button className="social-button">גלריה</button>
        </a>
        <a href="/about">
          <button className="social-button">אודות</button>
        </a>
      </div>
      <div className="follow-us">
        <h2>עקבו אחרינו</h2>
        <div className="social-icons">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaSection;
