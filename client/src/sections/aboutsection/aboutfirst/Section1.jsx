import React from "react";
import { ArrowDown } from "lucide-react";
import "./Section1.css";
import aboutBanner from "../../../assets/images/about.png";

const Section1 = () => {
  const scrollToStory = () => {
    document.getElementById("about-story")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="about-section-one">
      <div className="about-section-one-image">
        <img src={aboutBanner} alt="StyleMatch fashion collection" />
      </div>

      <div className="about-section-one-overlay"></div>

      <div className="about-section-one-content">

        <h1>
          Fashion
          <br />
          <em>with intention.</em>
        </h1>

        <p>
          StyleMatch brings fashion, individuality,
          and thoughtful styling together in one place.
        </p>

        <button type="button" className="about-section-one-button" onClick={scrollToStory} >
          OUR STORY
          <ArrowDown size={15} />
        </button>
      </div>

      <div className="about-section-one-side">
        <div className="about-vertical-line"></div>

        <span>
          STYLE IS
          <br />
          PERSONAL
        </span>
      </div>
    </section>
  );
};

export default Section1;