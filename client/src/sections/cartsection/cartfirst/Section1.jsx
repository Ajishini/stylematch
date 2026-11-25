import React from "react";
import "./Section1.css";
import cartBanner from "../../../assets/images/cart.png";

const Section1 = () => {
  return (
    <section className="cart-section-one">
      <div className="cart-section-one-image">
        <img src={cartBanner} alt="StyleMatch shopping collection" />
      </div>

      <div className="cart-section-one-overlay"></div>

      <div className="cart-section-one-content">

        <h1>
          Your <em>Cart.</em>
        </h1>

        <p>
          Everything you love, ready when you are.
        </p>
      </div>
    </section>
  );
};

export default Section1;