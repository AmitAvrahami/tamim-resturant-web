import React, { useEffect, useRef } from "react";
import "./ImageAndSloganCenter.css";

function ImageAndSloganCenter({ imageSrc, slogan }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="image-and-slogan-container" ref={containerRef}>
      <div className="video-container">
        <video className="slogan-video" autoPlay loop muted playsInline>
          <source src="/images/food/animate_food.mp4" type="video/mp4" />
          הדפדפן שלך אינו תומך בווידאו.
        </video>
      </div>
      <div className="overlay"></div>
      <div className="slogan-text">{slogan}</div>
    </div>
  );
}

export default ImageAndSloganCenter;
