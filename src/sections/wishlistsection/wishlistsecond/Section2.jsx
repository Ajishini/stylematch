import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Trash2, ShoppingBag, ArrowRight, } from "lucide-react";
import "./Section2.css";

const Section2 = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedWishlist =
      JSON.parse(localStorage.getItem("stylematch-wishlist")) || [];

    setWishlistItems(savedWishlist);
  }, []);

  const updateWishlist = (items) => {
    setWishlistItems(items);

    localStorage.setItem(
      "stylematch-wishlist",
      JSON.stringify(items)
    );
  };

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item.id !== id
    );

    updateWishlist(updatedWishlist);
  };

  const moveToCart = (product) => {
    const existingCart =
      JSON.parse(localStorage.getItem("stylematch-cart")) || [];

    const existingProduct = existingCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity: 1,
          selectedSize: "M",
        },
      ];
    }

    localStorage.setItem(
      "stylematch-cart",
      JSON.stringify(updatedCart)
    );

    const updatedWishlist = wishlistItems.filter(
      (item) => item.id !== product.id
    );

    updateWishlist(updatedWishlist);
    navigate("/cart");
  };

  if (wishlistItems.length === 0) {
    return (
      <section className="wishlist-section-two">
        <div className="wishlist-section-two-container">
          <div className="empty-wishlist">
            <div className="empty-wishlist-icon">
              <Heart size={34} />
            </div>

            <span>YOUR WISHLIST IS EMPTY</span>

            <h2>
              Save what you <em>love.</em>
            </h2>

            <p>
              Tap the heart on products you love
              and create your own personal collection.
            </p>

            <Link to="/shop" className="wishlist-shop-button" >
              DISCOVER PRODUCTS
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="wishlist-section-two">
      <div className="wishlist-section-two-container">
        <div className="wishlist-heading">
          <div>
            <span>YOUR COLLECTION</span>
            <h2>
              Saved <em>Pieces</em>
            </h2>
          </div>

          <p>
            {wishlistItems.length}{" "}
            {wishlistItems.length === 1 ? "item" : "items"}
          </p>
        </div>

        <div className="wishlist-grid">
          {wishlistItems.map((product) => (
            <article className="wishlist-card" key={product.id} >
              <div className="wishlist-image">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                </Link>

                <span className="wishlist-discount">
                  {product.discount}
                </span>

                <button type="button" className="wishlist-remove"
                  onClick={() => removeFromWishlist(product.id) } aria-label={`Remove ${product.name} from wishlist`} >
                  <Heart size={18} fill="currentColor" />
                </button>
              </div>

              <div className="wishlist-info">
                <span className="wishlist-category">
                  {product.category}
                </span>

                <Link to={`/product/${product.id}`} className="wishlist-name" >
                  {product.name}
                </Link>

                <div className="wishlist-price">
                  <strong>
                    ₹{product.price.toLocaleString("en-IN")}
                  </strong>

                  {product.oldPrice && (
                    <del>
                      ₹
                      {product.oldPrice.toLocaleString(
                        "en-IN"
                      )}
                    </del>
                  )}
                </div>

                <div className="wishlist-actions">
                  <button type="button" className="wishlist-cart-button"
                    onClick={() => moveToCart(product) } >
                    <ShoppingBag size={15} />
                    ADD TO CART
                  </button>

                  <button type="button" className="wishlist-delete-button"
                    onClick={() => removeFromWishlist(product.id) } aria-label={`Delete ${product.name}`} >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="wishlist-bottom">
          <div>
            <span>KEEP EXPLORING</span>
            <h3>
              More pieces are waiting
              <em> for you.</em>
            </h3>
          </div>

          <Link to="/shop" className="wishlist-explore-button" >
            EXPLORE SHOP
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section2;