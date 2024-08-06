import React, { useState, useEffect } from "react";
import "./GalleryPage.css";
import SocialMediaSection from "../../components/SocialMediaSection/SocialMediaSection";
import NavMenu from "../../components/NavMenu/NavMenu";
import NavMenuMini from "../../components/NavMenuMini/NavMenuMini";
import { galleryData } from "./GalleryPageData";

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <NavMenuMini /> : <NavMenu />}
      <div className="gallery-page">
        <div className="video-container">
          <video autoPlay muted loop playsInline className="video-background">
            <source src="/images/food/animate_food.mp4" type="video/mp4" />
          </video>
          <div className="header-overlay-menu">
            <h1 className="header-title">קצת תמונות </h1>
          </div>
        </div>
        <div className="image-grid">
          {galleryData.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index}`}
              className="grid-image"
              onClick={() => openImage(image)}
            />
          ))}
        </div>
        {selectedImage && (
          <div className="fullscreen-overlay" onClick={closeImage}>
            <img
              src={selectedImage}
              alt="Selected"
              className="fullscreen-image"
            />
            <span className="close-button" onClick={closeImage}>
              X
            </span>
          </div>
        )}
        <SocialMediaSection />
      </div>
    </>
  );
}

export default GalleryPage;
