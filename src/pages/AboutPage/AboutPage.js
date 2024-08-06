import React, { useState, useEffect } from "react";
import "./AboutPage.css";
import NavMenu from "../../components/NavMenu/NavMenu";
import NavMenuMini from "../../components/NavMenuMini/NavMenuMini";
import SocialMediaSection from "../../components/SocialMediaSection/SocialMediaSection";

const AboutPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

      <div className="about-page">
        <div className="video-container">
          <video autoPlay muted loop playsInline className="video-background">
            <source src="/images/food/animate_food.mp4" type="video/mp4" />
          </video>
          <div className="header-overlay-menu">
            <h1 className="header-title">אודות המסעדה</h1>
          </div>
        </div>

        {/* Restaurant Description */}
        <div className="description-section">
          <div className="description-image">
            <img src="/images/Custumers/yariv.jpg" alt="Restaurant" />
          </div>
          <div className="description-text">
            <h2>אודות המסעדה</h2>
            <p>
              במסעדת טעמים של השף יריב עוז תמצאו את השילוב המושלם של אוכל ביתי
              איכותי ואווירה חמה ומזמינה. התפריט שלנו מציע מגוון מנות עיקריות
              מדהימות, שכל אחת מהן מוגשת עם תוספת חמה, מבחר סלטים טריים ופיתות
              תימניות עבודת יד, שהופכות כל ארוחה לחוויה בלתי נשכחת. את הנאות החך
              של מסעדת טעמים משלימים סלטים טריים תוצרת בית, שמכינות מידי יום שתי
              טבחיות מסורות. השף יריב עוז הקים את המסעדה בשנת 2005, ומאז היא
              משרתת בנאמנות סועדים שנפשם חשקה במנעד רחב של מנות יצירתיות הכל כאן
              כדי לשמח את החיך שלך. עם מבחר רחב של תוספות חמות כמו אורז, פירה
              ופתיתים, כל ארוחה מוגשת בשלמותה. המנות שלנו לא רק משביעות אלא גם
              מחממות את הלב, כשהן מוגשות עם חיוך ומסירות. בואו ליהנות מהטעמים
              הביתיים שלנו ולהרגיש חלק מהמשפחה. המסעדה שלנו היא המקום שבו כל מנה
              מספרת סיפור וכל ביס הוא חוויית חיים.
              <br />
              <br />
              אנו מקווים שתבקרו אותנו בקרוב ותחוו את קסם המסעדה בעצמכם.
            </p>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="hours-section">
          <h2>שעות פעילות</h2>
          <p>
            ימים: ראשון - חמישי
            <br />
            שעות: 12:00 - 17:00
            <br />
            שישי ושבת : סגור
          </p>
        </div>

        {/* Google Map */}
        <div className="address-container">
          כתובת : השרון 21, תל אביב-יפו, 6618511
          <br />
          טלפון: 03-537-0171
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28708.62536467863!2d34.78900484407993!3d32.062671769232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b7b4013a6a3%3A0x919658d6d7a195ba!2z15jXotee15nXnQ!5e0!3m2!1siw!2sil!4v1722822738210!5m2!1siw!2sil"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      <SocialMediaSection />
    </>
  );
};

export default AboutPage;
