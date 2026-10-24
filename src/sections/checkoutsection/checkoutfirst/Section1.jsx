import React from "react";
import { LockKeyhole, ChevronRight } from "lucide-react";
import "./Section1.css";

const Section1 = () => {
  return (
    <section className="checkout-section-one">
      <div className="checkout-section-one-overlay"></div>

      <div className="checkout-section-one-container">
        <div className="checkout-breadcrumb">
          <span>STYLEMATCH</span>
          <ChevronRight size={14} />
          <span>CART</span>
          <ChevronRight size={14} />
          <strong>CHECKOUT</strong>
        </div>

        <div className="checkout-hero-content">

          <h1>
            Complete your
            <br />
            <em>order.</em>
          </h1>

          <p>
            You're one step away from making these pieces part of your
            wardrobe.
          </p>

          <div className="checkout-secure-badge">
            <LockKeyhole size={15} />
            <span>SECURE &amp; PROTECTED CHECKOUT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;