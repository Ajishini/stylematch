import React, { useState } from "react";
import { Shirt, Palette, Sparkles, Bell, ShieldCheck, UserRound, ChevronRight, LogOut, } from "lucide-react";
import "./Section3.css";

const Section3 = () => {
  const [selectedStyle, setSelectedStyle] = useState("Elegant");

  const styles = [
    "Minimal",
    "Elegant",
    "Streetwear",
    "Traditional",
  ];

  const preferences = [
    {
      icon: Shirt,
      title: "Preferred Categories",
      value: "Dresses · Tops · Footwear",
    },
    {
      icon: Palette,
      title: "Favorite Colors",
      value: "Black · White · Beige",
    },
    {
      icon: Sparkles,
      title: "Style Preference",
      value: selectedStyle,
    },
  ];

  const accountOptions = [
    {
      icon: UserRound,
      title: "Personal Information",
      text: "Manage your account details",
    },
    {
      icon: Bell,
      title: "Notifications",
      text: "Manage updates and alerts",
    },
    {
      icon: ShieldCheck,
      title: "Privacy & Security",
      text: "Manage your account security",
    },
  ];

  return (
    <section className="profile-section-three">
      <div className="profile-three-container">
        <div className="profile-preferences">
          <div className="profile-three-heading">
            <span>STYLE PREFERENCES</span>

            <h2>
              Your
              <br />
              <em>taste.</em>
            </h2>
          </div>

          <div className="profile-preference-content">
            <div className="profile-style-selector">
              <label>SELECT YOUR STYLE</label>

              <div className="profile-style-options">
                {styles.map((style) => (
                  <button
                    type="button"
                    key={style}
                    className={
                      selectedStyle === style
                        ? "profile-style-option active"
                        : "profile-style-option"
                    }
                    onClick={() => setSelectedStyle(style)} >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            <div className="profile-preference-list">
              {preferences.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div className="profile-preference-item" key={index} >
                    <div className="profile-preference-icon">
                      <Icon size={17} strokeWidth={1.4} />
                    </div>

                    <div>
                      <span>{item.title}</span>
                      <strong>{item.value}</strong>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="profile-account-section">
          <div className="profile-three-heading account-heading">
            <span>ACCOUNT SETTINGS</span>

            <h2>
              Manage
              <br />
              <em>account.</em>
            </h2>
          </div>

          <div className="profile-account-list">
            {accountOptions.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  type="button"
                  className="profile-account-item"
                  key={index} >
                  <div className="profile-account-icon">
                    <Icon size={17} strokeWidth={1.4} />
                  </div>

                  <div className="profile-account-text">
                    <strong>{item.title}</strong>

                    <span>{item.text}</span>
                  </div>

                  <ChevronRight size={17} className="profile-account-arrow" />
                </button>
              );
            })}
          </div>

          <div className="profile-logout-wrapper">
            <button
              type="button"
              className="profile-logout" >
              <LogOut size={14} />
              LOG OUT
            </button>
          </div>
        </div>

        <div className="profile-three-footer">
          <span>STYLEMATCH</span>
          <div></div>
          <span>YOUR STYLE. YOUR SPACE.</span>
        </div>
      </div>
    </section>
  );
};

export default Section3;