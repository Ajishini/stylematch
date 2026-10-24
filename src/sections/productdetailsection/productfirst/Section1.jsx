import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Minus, Plus, ShoppingBag, Zap, Star, Truck, RotateCcw, } from "lucide-react";
import "./Section1.css";

const Section1 = ({ product }) => {
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const [isWishlisted, setIsWishlisted] = useState(() => {
    const wishlist =
      JSON.parse(localStorage.getItem("stylematch-wishlist")) || [];

    return wishlist.some((item) => item.id === product.id);
  });

  const sizes = ["XS", "S", "M", "L", "XL"];

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const addToCart = () => {
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
              quantity: item.quantity + quantity,
              selectedSize,
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity,
          selectedSize,
        },
      ];
    }

    localStorage.setItem(
      "stylematch-cart",
      JSON.stringify(updatedCart)
    );

    navigate("/cart");
  };

  const toggleWishlist = () => {
    const wishlist =
      JSON.parse(localStorage.getItem("stylematch-wishlist")) || [];

    const exists = wishlist.some(
      (item) => item.id === product.id
    );

    let updatedWishlist;

    if (exists) {
      updatedWishlist = wishlist.filter(
        (item) => item.id !== product.id
      );
    } else {
      updatedWishlist = [...wishlist, product];
    }

    localStorage.setItem(
      "stylematch-wishlist",
      JSON.stringify(updatedWishlist)
    );

    setIsWishlisted(!exists);
  };

  return (
    <section className="product-section-one">
      <div className="product-section-one-container">
        <div className="product-image-area">
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.name}/>
            <span className="product-sale-badge">
              {product.discount}
            </span>
          </div>
        </div>

        <div className="product-info-area">
          <span className="product-category">
            {product.category}
          </span>

          <h1 className="product-title">
            {product.name}
          </h1>

          <div className="product-rating">
            <div className="stars">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
            </div>

            <span>4.8</span>

            <span className="review-count">
              (126 Reviews)
            </span>
          </div>

          <div className="product-price-area">
            <span className="product-current-price">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            <del className="product-old-price">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </del>

            <span className="product-discount">
              {product.discount}
            </span>
          </div>

          <p className="product-tax">
            Inclusive of all taxes
          </p>

          <div className="product-divider"></div>

          <div className="product-size-section">
            <div className="size-heading">
              <span>SELECT SIZE</span>

              <button type="button"> Size Guide </button>
            </div>

            <div className="size-options">
              {sizes.map((size) => (
                <button key={size} type="button" className={ selectedSize === size ? "selected" : "" } onClick={() => setSelectedSize(size) }> \
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-quantity-section">
            <span>QUANTITY</span>

            <div className="quantity-control">
              <button type="button" onClick={decreaseQuantity} aria-label="Decrease quantity">
                <Minus size={15} />
              </button>

              <span>{quantity}</span>

              <button type="button" onClick={increaseQuantity} aria-label="Increase quantity">
                <Plus size={15} />
              </button>
            </div>
          </div>

          <div className="product-actions">
            <button type="button" className="add-cart-button" onClick={addToCart}>
              <ShoppingBag size={18} />
              <span>ADD TO CART</span>
            </button>

            <button type="button" className="buy-now-button">
              <Zap size={17} />
              <span>BUY NOW</span>
            </button>

            <button type="button" className={`product-wishlist-button ${ isWishlisted ? "active" : "" }`} onClick={toggleWishlist}>
              <Heart size={20} fill={ isWishlisted ? "currentColor" : "none" }/>
            </button>
          </div>

          <div className="product-service-info">
            <div className="service-item">
              <Truck size={19} />

              <div>
                <strong>Free Delivery</strong>
                <span>
                  On orders above ₹999
                </span>
              </div>
            </div>

            <div className="service-item">
              <RotateCcw size={19} />

              <div>
                <strong>Easy Returns</strong>
                <span>
                  7 days return available
                </span>
              </div>
            </div>
          </div>

          <div className="stylematch-note">
            <span>STYLEMATCH AI</span>
            <p>
              This piece is selected to complement
              your personal style profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;