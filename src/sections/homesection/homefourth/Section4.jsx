import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./Section4.css";
import lookImage from "../../../assets/images/image1.png";
import topImage from "../../../assets/images/image9.jpg";
import bagImage from "../../../assets/images/image2.png";
import shoeImage from "../../../assets/images/image3.png";

const Section4 = () => {
  return (
    <section className="shop-look-section">
      <div className="shop-look-container">
        <div className="shop-look-content">

          <h2>
            The
            <br />
            <em>everyday edit.</em>
          </h2>

          <p>
            Effortless pieces, thoughtfully matched
            to create a look that feels complete.
          </p>

          <Link to="/shop" className="shop-look-button" >
            Shop The Collection
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="shop-look-visual">
          <Link to="/shop" className="shop-look-main-image" >
            <img src={lookImage} alt="StyleMatch everyday fashion collection" />

            <div className="shop-look-image-text">
              <span>STYLE 01</span>
              <strong>
                Effortless
                <br />
                Everyday
              </strong>
            </div>
          </Link>

          <div className="shop-look-products">
            <Link to="/shop" className="shop-look-product" >
              <div className="shop-look-product-image">
                <img src={topImage} alt="Top collection" />
              </div>

              <div>
                <span>01</span>
                <strong>Essential Top</strong>
              </div>
            </Link>

            <Link to="/shop" className="shop-look-product" >
              <div className="shop-look-product-image">
                <img src={bagImage} alt="Bag collection" />
              </div>

              <div>
                <span>02</span>
                <strong>Everyday Bag</strong>
              </div>
            </Link>

            <Link to="/shop" className="shop-look-product" >
              <div className="shop-look-product-image">
                <img src={shoeImage} alt="Footwear collection" />
              </div>

              <div>
                <span>03</span>
                <strong>Statement Shoes</strong>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;