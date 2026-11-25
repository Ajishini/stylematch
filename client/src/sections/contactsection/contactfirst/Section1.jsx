import React from "react";
import { ArrowDown } from "lucide-react";
import "./Section1.css";
import contactBanner from "../../../assets/images/image4.png";

const Section1 = () => {
  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="contact-section-one">
      <div className="contact-section-one-image">
        <img src={contactBanner} alt="StyleMatch fashion collection" />
      </div>

      <div className="contact-section-one-overlay"></div>

      <div className="contact-section-one-content">

        <h1>
          Let's talk
          <br />
          <em>style.</em>
        </h1>

        <p>
          Have a question, need some help, or simply
          want to say hello? We'd love to hear from you.
        </p>

        <button type="button" className="contact-section-one-button" onClick={scrollToContact} >
          GET IN TOUCH
          <ArrowDown size={15} />
        </button>
      </div>

      <div className="contact-section-one-side">
        <div className="contact-vertical-line"></div>
      </div>
      
    </section>
  );
};

export default Section1;