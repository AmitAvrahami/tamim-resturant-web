// ImageAndTextLeftSide.js
import React, { useEffect, useState } from "react";
import "./ImageAndTextLeftSide.css";
import Lottie from "lottie-react";
import animationData from "../Animation - cook.json";

function ImageAndTextLeftSide() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(
        ".image-and-text-leftside-container"
      );
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
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
      className={`image-and-text-leftside-container ${
        isVisible ? "animate" : ""
      }`}
    >
      <div className="image-container">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="text-container">
        <h2 className={isVisible ? "animate" : ""}>...קצת עלינו</h2>
        <p className={isVisible ? "animate" : ""}>
          מסעדת טעמים מביאה לכם אוכל ביתי איכותי וטעים, עם מנות שמוכנות באהבה
          מחומרי גלם טריים ומרכיבים מסורתיים. התפריט שלנו מציע מגוון מנות
          עיקריות וקינוחים, הכל בעבודת יד ובהשקעה בכל פרט. הצטרפו אלינו לחוויית
          .סעודה חמימה ונינוחה, ממש כמו בבית
        </p>
        <div className="btn-container-left-side">
          <a href="/about">
            <button className="btn-left-side">אודות</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageAndTextLeftSide;
