import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Trash2, ShoppingBag, ArrowRight, } from "lucide-react";
import "./Section2.css";

import { getWishlist, removeFromWishlist } from "../../../api/apiService";

const Section2 = () => {

  const [wishlistItems, setWishlistItems] = useState([]);
  const navigate = useNavigate();

  const handleGetWishlist = async () => {
    try {
      const res = await getWishlist();

      if (res && res.items) {
        const products = res.items
          .filter(item => item.product)
          .map(item => item.product);

        setWishlistItems(products);
      }
      else {
        setWishlistItems([]);
      }
    }
    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetWishlist();
  }, []);

  const handleRemoveWishlist = async (productId) => {
    try {
      const res = await removeFromWishlist(productId);

      if (res && res.success) {
        setWishlistItems(prev =>
          prev.filter(item => item._id !== productId)
        );
      }
    }
    catch (err) {
      console.log(err);
    }
  };

  const moveToCart = async (product) => {
    const cartProduct = {
      ...product,
      id: product._id,
      price: product.actualprice,
      oldPrice: product.originalprice,
      category: product.category_id?.name || "Fashion"
    };

    const existingCart =
      JSON.parse(localStorage.getItem("stylematch-cart")) || [];

    const existingProduct = existingCart.find(
      (item) => item.id === cartProduct.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item) =>
        item.id === cartProduct.id
          ? {
            ...item,
            quantity: item.quantity + 1
          }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...cartProduct,
          quantity: 1,
          selectedSize: "M"
        }
      ];
    }

    localStorage.setItem(
      "stylematch-cart",
      JSON.stringify(updatedCart)
    );

    await handleRemoveWishlist(product._id);

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
            <article className="wishlist-card" key={product._id} >
              <div className="wishlist-image">
                <Link to={`/product/${product._id}`}>
                  <img src={product.image} alt={product.name} />
                </Link>

                <span className="wishlist-discount">
                  {product.discount}
                </span>

                <button type="button" className="wishlist-remove"
                  onClick={() => handleRemoveWishlist(product._id)} aria-label={`Remove ${product.name} from wishlist`} >
                  <Heart size={18} fill="currentColor" />
                </button>
              </div>

              <div className="wishlist-info">
                <span className="wishlist-category">
                  {product.category_id?.name || "Fashion"}
                </span>

                <Link to={`/product/${product._id}`} className="wishlist-name" >
                  {product.name}
                </Link>

                <div className="wishlist-price">
                  <strong>
                    ₹{Number(product.actualprice || 0).toLocaleString("en-IN")}
                  </strong>

                  {product.oldPrice && (
                    <del>
                      ₹{Number(product.originalprice || 0).toLocaleString("en-IN")}
                    </del>
                  )}
                </div>

                <div className="wishlist-actions">
                  <button type="button" className="wishlist-cart-button"
                    onClick={() => moveToCart(product)} >
                    <ShoppingBag size={15} />
                    ADD TO CART
                  </button>

                  <button type="button" className="wishlist-delete-button"
                    onClick={() => handleRemoveWishlist(product._id)} aria-label={`Delete ${product.name}`} >
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