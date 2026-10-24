import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import "./Section3.css";

const Section3 = ({
  productsToShow = [],
  sortBy = "Featured",
  setSortBy = () => {},
}) => {
  return (
    <section className="shop-section-three" id="shop-products" >
      <div className="shop-section-three-container">

        {productsToShow.length > 0 ? (
          <div className="shop-product-grid">
            {productsToShow.map((product) => (
              <article className="shop-product-card" key={product.id} >
                <div className="shop-product-image">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>

                  <span className="shop-discount">
                    {product.discount}
                  </span>

                  <button type="button" className="shop-wishlist" aria-label={`Add ${product.name} to wishlist`} >
                    <Heart size={18} />
                  </button>

                  <Link to={`/product/${product.id}`} className="shop-view-product" >
                    <ShoppingBag size={15} />
                    <span>View Product</span>
                  </Link>
                </div>

                <div className="shop-product-info">
                  <span className="shop-product-category">
                    {product.category}
                  </span>

                  <Link to={`/product/${product.id}`} className="shop-product-name" >
                    {product.name}
                  </Link>

                  <div className="shop-product-price">
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
        ) : (
          <div className="shop-empty">
            <h3>No products found</h3>
            <p>
              Try another search or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section3;