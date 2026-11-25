import React from "react";
import "./Section1.css";
import wishlistBanner from "../../../assets/images/wishlist.png";

const Section1 = () => {
  return (
    <section
      className="wishlist-section-one"
      style={{ backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.62), rgba(20, 20, 20, 0.62)), url(${wishlistBanner})`, }} >
      <div className="wishlist-section-one-content">

        <h1>
          Things You <em>Love.</em>
        </h1>

        <p>
          Your carefully selected fashion favorites, all in one place.
        </p>

      </div>
    </section>
  );
};

export default Section1;