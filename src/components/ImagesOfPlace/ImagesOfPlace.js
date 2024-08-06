import React, { useState, useEffect, useRef } from "react";
import "./ImagesOfPlace.css";

function ImagesOfPlace({ title, images, buttonText }) {
  const [selectedImage, setSelectedImage] = useState(null);
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
    handleScroll(); // בדיקה אם הרכיב גלוי בעת טעינה

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (image) => {
    setSelectedImage(image);
    console.log(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div
      ref={containerRef}
      className={`images-of-place-container ${isVisible ? "animate" : ""}`}
    >
      <h2 className="images-of-place-title">{title}</h2>
      <div className="images-of-place-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="images-of-place-image"
            onClick={() => handleClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={handleClose}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Selected" />
        </div>
      )}
      <div className="btn-container-images-of-place">
        <a href="/gallery" className="button-link">
          <button>{buttonText}</button>
        </a>
      </div>
    </div>
  );
}

export default ImagesOfPlace;
