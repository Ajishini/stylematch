import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import "./Section3.css";

const Section3 = ({
  productsToShow = [],
  sortBy = "Featured",
  setSortBy = () => { },
  wishlistIds = [],
  handleWishlist = () => { },
}) => {
  return (
    <section className="shop-section-three" id="shop-products">
      <div className="shop-section-three-container">

        {productsToShow.length > 0 ? (
          <div className="shop-product-grid">
            {productsToShow.map((product) => (
              <article className="shop-product-card" key={product._id}>
                <div className="shop-product-image">
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>

                  <span className="shop-discount">
                    {product.discount}
                  </span>

                  <button
                    type="button"
                    className={`shop-wishlist ${wishlistIds.includes(product._id) ? "active" : "" }`}
                    onClick={() => handleWishlist(product._id)}
                    aria-label={
                      wishlistIds.includes(product._id)
                        ? `Remove ${product.name} from wishlist`
                        : `Add ${product.name} to wishlist`
                    } >
                    <Heart
                      size={18}
                      fill={
                        wishlistIds.includes(product._id)
                          ? "currentColor"
                          : "none"
                      } />
                  </button>

                  <Link
                    to={`/product/${product._id}`}
                    className="shop-view-product"
                  >
                    <ShoppingBag size={15} />
                    <span>View Product</span>
                  </Link>
                </div>

                <div className="shop-product-info">
                  <span className="shop-product-category">
                    {product.category_id?.name || "Fashion"}
                  </span>

                  <Link
                    to={`/product/${product._id}`}
                    className="shop-product-name"
                  >
                    {product.name}
                  </Link>

                  <div className="shop-product-price">
                    <strong>
                      ₹{Number(product.actualprice || 0).toLocaleString("en-IN")}
                    </strong>

                    <del>
                      ₹{Number(product.originalprice || 0).toLocaleString("en-IN")}
                    </del>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="shop-empty">
            <h3>No products found</h3>
            <p>Try another search or category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section3;