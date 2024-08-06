import React, { useState, useEffect } from "react";
import NavMenu from "../../components/NavMenu/NavMenu";
import ImageAndSloganCenter from "../../components/ImageAndSloganCenter/ImageAndSloganCenter";
import ImageAndTextLeftSide from "../../components/ImageAndTextLeftSide/ImageAndTextLeftSide";
import ImageAndTextRightSide from "../../components/ImageAndTextRightSide/ImageAndTextRightSide";
import ImagesOfPlace from "../../components/ImagesOfPlace/ImagesOfPlace";
import ImageOfPlaceData from "../../components/ImagesOfPlace/data";
import SocialMediaSection from "../../components/SocialMediaSection/SocialMediaSection";
import NavMenuMini from "../../components/NavMenuMini/NavMenuMini";
import "./HomePage.css";

function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-page-container">
      {isMobile ? <NavMenuMini /> : <NavMenu />}
      <ImageAndSloganCenter
        imageSrc={"/images/food/tavshil.jpeg"}
        slogan="הבית של האוכל הבייתי"
      />
      <ImageAndTextLeftSide />
      <div className="spacer"></div>
      <ImageAndTextRightSide
        title="התפריט שלנו"
        text="מידי יום עומלים במסעדה על תבשילים ומאכלים אשר משתנים בהתאם לתוצרת הטרייה שמגיעה לפתח המסעדה: מדגים טריים ומגוון תוספות ועד גריל בשרים מעורר חושים. מאכלי המסעדה מוגשים בשעות הצהריים במסגרת מבחר עסקיות משתלמות."
        buttonText="לתפריט"
      />
      <div className="spacer"></div>
      <ImagesOfPlace
        title={ImageOfPlaceData.title}
        images={ImageOfPlaceData.images}
        buttonText={ImageOfPlaceData.buttonText}
      />
      <SocialMediaSection />
    </div>
  );
}

export default HomePage;
