import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, ArrowRight, Sparkles, } from "lucide-react";
import "./Section3.css";

const Section3 = ({
  products = [],
  currentProductId,
}) => {
  const recommendedProducts = products
    .filter(
      (product) => product.id !== currentProductId
    )
    .slice(0, 4);

  return (
    <section className="product-section-three">
      <div className="product-section-three-container">
        <div className="recommendation-heading">
          <div className="recommendation-title">
            <span>STYLEMATCH CURATED</span>
            <h2>
              Complete Your
              <em>Look.</em>
            </h2>
          </div>

          <div className="recommendation-description">
            <div className="ai-badge">
              <Sparkles size={14} />
              <span>AI STYLIST</span>
            </div>

            <p>
              Pieces selected to complement
              your style and this product.
            </p>
          </div>
        </div>

        {recommendedProducts.length > 0 && (
          <div className="recommendation-grid">
            {recommendedProducts.map((product) => (
              <article className="recommendation-card" key={product.id} >
                <div className="recommendation-image">
                  <Link to={`/product/${product.id}`} >
                    <img src={product.image} alt={product.name} />
                  </Link>

                  <span className="recommendation-discount">
                    {product.discount}
                  </span>

                  <button type="button" className="recommendation-wishlist" aria-label={`Add ${product.name} to wishlist`} >
                    <Heart size={17} />
                  </button>

                  <Link to={`/product/${product.id}`} className="recommendation-view" >
                    <ShoppingBag size={14} />
                    View Product
                  </Link>
                </div>

                <div className="recommendation-info">
                  <span className="recommendation-category">
                    {product.category}
                  </span>

                  <Link to={`/product/${product.id}`} className="recommendation-name" >
                    {product.name}
                  </Link>

                  <div className="recommendation-price">
                    <strong>
                      ₹{product.price.toLocaleString("en-IN")}
                    </strong>

                    <del>
                      ₹{product.oldPrice.toLocaleString("en-IN")}
                    </del>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="recommendation-cta">
          <div>
            <span>WANT MORE?</span>
            <h3>
              Discover pieces that
              <em> match you.</em>
            </h3>
          </div>

          <Link to="/shop" className="recommendation-shop-button" >
            EXPLORE SHOP
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Section3;