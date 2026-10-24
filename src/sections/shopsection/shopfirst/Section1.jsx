import React from "react";
import { ArrowDown } from "lucide-react";
import "./Section1.css";
import shopBanner from "../../../assets/images/stylematch.png";

const Section1 = () => {
    return (
        <section className="shop-section-one">
            <div className="shop-section-one-image">
                <img src={shopBanner} alt="StyleMatch fashion collection" />
            </div>

            <div className="shop-section-one-overlay"></div>

            <div className="shop-section-one-content">

                <h1>
                    Find your
                    <br />
                    <em>next favorite.</em>
                </h1>

                <p>
                    Explore carefully selected pieces designed
                    <br />
                    around your style and everyday life.
                </p>

                <a href="#shop-products" className="shop-section-one-button" >
                    <span>EXPLORE COLLECTION</span>
                    <ArrowDown size={15} />
                </a>
            </div>
        </section>
    );
};

export default Section1;