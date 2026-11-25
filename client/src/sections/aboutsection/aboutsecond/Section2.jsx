import React from "react";
import "./Section2.css";

const Section2 = () => {
  return (
    <section id="about-story" className="about-section-two">

      <div className="about-section-two-content">
        <div className="about-section-two-heading">
          <h2>
            More than
            <br />
            <em>fashion.</em>
          </h2>

        </div>

        <div className="about-section-two-story">
          <p className="about-section-two-intro">
            StyleMatch was created around one simple idea:
            finding the right outfit should feel personal,
            effortless, and inspiring.
          </p>

          <p>
            Instead of endlessly searching through products,
            StyleMatch brings fashion pieces together in a
            thoughtful shopping experience. From everyday
            essentials to statement pieces, every collection
            is designed to help you discover something that
            feels like you.
          </p>

          <p>
            We believe great style isn't about following every
            trend. It's about understanding what you love,
            combining pieces with confidence, and creating a
            look that feels naturally yours.
          </p>

        </div>
      </div>

    </section>
  );
};

export default Section2;