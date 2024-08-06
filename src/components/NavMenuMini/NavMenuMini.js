import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUtensils,
  faAddressCard,
  faCamera,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./NavMenuMini.css";

function NavMenuMini() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="nav-menu-mini" onClick={handleToggle}>
        <FontAwesomeIcon icon={faHouse} />
      </div>

      {isOpen && (
        <div className="fullscreen-overlay">
          <div className="close-button" onClick={handleClose}>
            &times;
          </div>
          <div className="button-container">
            <a href="tel:+972-52-345-6789">
              <FontAwesomeIcon icon={faPhone} /> :להזמנות
            </a>
            <a href="/gallery">
              <FontAwesomeIcon icon={faCamera} /> גלריה
            </a>
            <a href="/about">
              <FontAwesomeIcon icon={faAddressCard} /> אודות
            </a>
            <a href="/menu">
              <FontAwesomeIcon icon={faUtensils} /> תפריט
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faHouse} /> בית
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default NavMenuMini;
