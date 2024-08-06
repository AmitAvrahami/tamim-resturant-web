// ImageAndTextRightSide.js
import React, { useEffect, useState, useRef } from "react";
import "./ImageAndTextRightSide.css";
import Lottie from "lottie-react";
import animationData from "../Animation - menu.json";

function ImageAndTextRightSide({ title, text, image, buttonText }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // כדי לבדוק אם הרכיב גלוי כבר בעת הטעינה

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`image-and-text-rightside-container ${
        isVisible ? "animate" : ""
      }`}
    >
      <div className="text-container">
        <h2 className={isVisible ? "animate" : ""}>{title}</h2>
        <p className={isVisible ? "animate" : ""}>{text}</p>
        <div className="btn-container-right-side">
          <a href="/menu">
            <button className="btn-right-side">{buttonText}</button>
          </a>
        </div>
      </div>
      <div className="image-container">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <Lottie animationData={animationData} loop={true} />
        )}
      </div>
    </div>
  );
}

export default ImageAndTextRightSide;
