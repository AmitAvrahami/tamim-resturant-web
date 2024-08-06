import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUtensils,
  faAddressCard,
  faCamera,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./NavMenu.css";

function NavMenu() {
  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    navItems.forEach((item) => {
      observer.observe(item);
    });
  }, []);

  return (
    <Navbar
      data-bs-theme="dark"
      className="custom-navbar"
      variant="dark"
      style={{ backgroundColor: "black", width: "100%" }}
    >
      <Container>
        <Nav className="me-auto custom-nav-orders">
          <Nav.Link href="tel:+972-52-345-6789" className="nav-item">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ marginRight: "10px" }}
              className="icon"
            />
            :להזמנות
          </Nav.Link>
        </Nav>
        <Nav className="me-auto custom-nav">
          <Nav.Link href="/gallery" className="nav-item">
            גלריה
            <FontAwesomeIcon icon={faCamera} style={{ marginLeft: "10px" }} />
          </Nav.Link>
          <Nav.Link href="/about" className="nav-item">
            אודות
            <FontAwesomeIcon
              icon={faAddressCard}
              style={{ marginLeft: "10px" }}
            />
          </Nav.Link>
          <Nav.Link href="/menu" className="nav-item">
            תפריט
            <FontAwesomeIcon icon={faUtensils} style={{ marginLeft: "10px" }} />
          </Nav.Link>
          <Nav.Link href="/" className="nav-item">
            בית
            <FontAwesomeIcon icon={faHouse} style={{ marginLeft: "10px" }} />
          </Nav.Link>
        </Nav>
        <Navbar.Brand className="brand">
          <img
            src={"/images/logos/last_logo.png"}
            height="auto"
            width="auto"
            alt="מסעדת טעמים"
            className="main-image"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
