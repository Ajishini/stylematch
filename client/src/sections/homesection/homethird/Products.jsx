import React from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowUpRight, ShoppingBag } from "lucide-react";
import "./Products.css";

const Section3 = ({
  products = [],
  wishlistIds = [],
  handleWishlist = () => { },
  carts = [],
  handleCart = () => { }
}) => {
  return (
    <section className="home-trending">
      <div className="home-trending-heading">
        <div>
          <h2> Trending <em>now.</em> </h2>
          <p> Fresh pieces worth adding to your wardrobe. </p>
        </div>

        <Link to="/shop">
          Shop All
          <ArrowUpRight size={17} />
        </Link>
      </div>

      <div className="home-product-grid">
        {products.slice(0, 4).map((product) => (
          <div className="home-product-card" key={product._id} >
            <Link to={`/product/${product._id}`} className="home-product-image" >
              <img src={product.image} alt={product.name} />

              <span className="home-product-discount">
                {product.discount}
              </span>

              <button
                type="button"
                className={`home-product-wishlist ${wishlistIds.includes(product._id) ? "active" : ""}`}
                aria-label={`${wishlistIds.includes(product._id) ? "Remove" : "Add"} ${product.name} ${wishlistIds.includes(product._id) ? "from" : "to"} wishlist`}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleWishlist(product._id);
                }} >
                <Heart
                  size={18}
                  fill={
                    wishlistIds.includes(product._id)
                      ? "currentColor"
                      : "none"
                  } />
              </button>

                <button
                  type="button"
                  className="home-product-quick"
                  onClick={() => handleCart(product._id) }>
                  <ShoppingBag size={15} />
                  {carts.includes(product._id) ? "Added to Cart" : "Quick Shop"}
                </button>

            </Link>

            <Link to={`/product/${product._id}`} className="home-product-info">
              <span>
                {product.category_id?.name || "Fashion"}
              </span>

              <h3>
                {product.name}
              </h3>

              <div className="home-product-price">
                <strong>
                  ₹{Number(product.actualprice || 0).toLocaleString("en-IN")}
                </strong>

                <del>
                  ₹{Number(product.originalprice || 0).toLocaleString("en-IN")}
                </del>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;