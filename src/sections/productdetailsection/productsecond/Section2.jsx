import React, { useState } from "react";
import { ChevronDown, Package, Ruler, Sparkles, Shirt, ShieldCheck, } from "lucide-react";
import "./Section2.css";

const Section2 = ({ product }) => {
  const [openSection, setOpenSection] = useState("description");

  const toggleSection = (section) => {
    setOpenSection(
      openSection === section ? "" : section
    );
  };

  return (
    <section className="product-section-two">
      <div className="product-section-two-container">
        <div className="product-details-heading">
          <span>THE DETAILS</span>

          <h2>
            Made for your
            <em>style.</em>
          </h2>

          <p>
            Everything you need to know about this
            carefully selected StyleMatch piece.
          </p>
        </div>

        <div className="product-details-layout">
          <div className="product-features">
            <div className="product-feature-card">
              <div className="feature-icon">
                <Shirt size={21} />
              </div>

              <div>
                <span>STYLE</span>
                <strong>Contemporary</strong>
              </div>
            </div>

            <div className="product-feature-card">
              <div className="feature-icon">
                <Package size={21} />
              </div>

              <div>
                <span>MATERIAL</span>
                <strong>Premium Fabric</strong>
              </div>
            </div>

            <div className="product-feature-card">
              <div className="feature-icon">
                <Ruler size={21} />
              </div>

              <div>
                <span>FIT</span>
                <strong>Regular Fit</strong>
              </div>
            </div>

            <div className="product-feature-card">
              <div className="feature-icon">
                <Sparkles size={21} />
              </div>

              <div>
                <span>OCCASION</span>
                <strong>Everyday & Evening</strong>
              </div>
            </div>
          </div>

          <div className="product-information">
            <div className={`product-info-row ${ openSection === "description" ? "open" : "" }`} >
              <button type="button" className="product-info-title" onClick={() => toggleSection("description") } >
                <span>PRODUCT DESCRIPTION</span>
                <ChevronDown size={17} />
              </button>

              {openSection === "description" && (
                <div className="product-info-content">
                  <p>
                    Meet your new wardrobe favourite.
                    The {product.name} combines effortless
                    style with everyday comfort, making it
                    an easy choice for a variety of looks.
                  </p>

                  <p>
                    Designed with a clean silhouette and
                    versatile aesthetic, this piece can be
                    styled up or down depending on your
                    occasion.
                  </p>
                </div>
              )}
            </div>

            <div className={`product-info-row ${ openSection === "material" ? "open" : "" }`} >
              <button type="button" className="product-info-title" onClick={() => toggleSection("material") } >
                <span>MATERIAL & CARE</span>
                <ChevronDown size={17} />
              </button>

              {openSection === "material" && (
                <div className="product-info-content">
                  <p>
                    Crafted from a premium lightweight
                    fabric designed for comfort and
                    long-lasting wear.
                  </p>

                  <ul>
                    <li>
                      Machine wash on a gentle cycle
                    </li>
                    <li>Do not bleach</li>
                    <li>Iron on low heat</li>
                    <li>Store in a cool, dry place</li>
                  </ul>
                </div>
              )}
            </div>

            <div className={`product-info-row ${ openSection === "fit" ? "open" : "" }`} >
              <button type="button" className="product-info-title" onClick={() => toggleSection("fit")} >
                <span>FIT & SIZE</span>
                <ChevronDown size={17} />
              </button>

              {openSection === "fit" && (
                <div className="product-info-content">
                  <p>
                    This product follows a comfortable
                    regular fit. We recommend choosing
                    your usual size.
                  </p>

                  <div className="fit-guide">
                    <div>
                      <span>XS</span>
                      <small>32</small>
                    </div>

                    <div>
                      <span>S</span>
                      <small>34</small>
                    </div>

                    <div>
                      <span>M</span>
                      <small>36</small>
                    </div>

                    <div>
                      <span>L</span>
                      <small>38</small>
                    </div>

                    <div>
                      <span>XL</span>
                      <small>40</small>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={`product-info-row ${ openSection === "delivery" ? "open" : "" }`} >
              <button type="button" className="product-info-title" onClick={() => toggleSection("delivery") } >
                <span>DELIVERY & RETURNS</span>
                <ChevronDown size={17} />
              </button>

              {openSection === "delivery" && (
                <div className="product-info-content">
                  <div className="delivery-item">
                    <Package size={18} />

                    <div>
                      <strong>Free Delivery</strong>
                      <p>
                        Free delivery on orders
                        above ₹999.
                      </p>
                    </div>
                  </div>

                  <div className="delivery-item">
                    <ShieldCheck size={18} />

                    <div>
                      <strong>Easy Returns</strong>
                      <p>
                        Return eligible products
                        within 7 days.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;