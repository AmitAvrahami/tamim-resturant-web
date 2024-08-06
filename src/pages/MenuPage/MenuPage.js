import React, { useState, useEffect } from "react";
import { menuData } from "./menuData.js";
import "./MenuPage.css";
import NavMenu from "../../components/NavMenu/NavMenu.js";
import NavMenuMini from "../../components/NavMenuMini/NavMenuMini.js";
import SocialMediaSection from "../../components/SocialMediaSection/SocialMediaSection.js";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("mainDishes");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const renderCategoryContent = () => {
    const categoryItems = menuData[selectedCategory] || [];
    return (
      <div className="menu-grid">
        {categoryItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <span className="menu-item-name">{item.name}</span>
              {item.price && (
                <span className="menu-item-price">{item.price} ₪</span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

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
    <>
      {isMobile ? <NavMenuMini /> : <NavMenu />}
      <div className="menu-container">
        <div className="header">
          <video className="header-video" autoPlay loop muted playsInline>
            <source src="/images/food/animate_food.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="header-overlay-menu">
            <h1 className="header-title">התפריט שלנו</h1>
          </div>
        </div>
        <div className="menu-notes">
          <p>
            המנות העיקריות מוגשות בליווי 2 תוספת חמות, סלט 250 גר' לבחירה ופיתה
            תימנית (סלוף)/ פיתה רגילה
          </p>
        </div>
        <div className="categories">
          <button onClick={() => handleCategoryChange("mainDishes")}>
            מנות עיקריות
          </button>
          <button onClick={() => handleCategoryChange("hotSides")}>
            תוספות חמות
          </button>
          <button onClick={() => handleCategoryChange("salads")}>
            מבחר סלטים
          </button>
          <button onClick={() => handleCategoryChange("drinks")}>
            תפריט שתיה
          </button>
        </div>
        <div className="menu-content">{renderCategoryContent()}</div>
      </div>
      <SocialMediaSection />
    </>
  );
};

export default MenuPage;
