import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, ArrowRight } from "lucide-react";
import "./Section2.css";

import { getCart, updateCart, removeFromCart } from "../../../api/apiService";

const Section2 = () => {

    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const handleGetCart = async () => {
        try {
            const res = await getCart();
            console.log(res)

            if (res && res.items) {
                setCartItems(res.items);
            }
            else {
                setCartItems([]);
            }
        }
        catch (err) {
            console.log(err);
        }
    };

    const handleRemoveCart = async (productId) => {
        try {
            const res = await removeFromCart(productId);

            if (res && res.success) {
                await handleGetCart();
            }
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleGetCart();
    }, []);

    const increaseQuantity = async (productId, quantity) => {
        try {
            const res = await updateCart(productId, quantity + 1);
            console.log(res);
            if (res) {
                await handleGetCart();
            }
        }
        catch (err) {
            console.log(err);
        }
    };

    const decreaseQuantity = async (productId, quantity) => {
        try {
            if (quantity <= 1) {
                await handleRemoveCart(productId);
                return;
            }

            const res = await updateCart(productId, quantity - 1);

            if (res ) {
                await handleGetCart();
            }
        }
        catch (err) {
            console.log(err);
        }
    };


    const subtotal = cartItems.reduce(
        (total, item) =>
            total +
            Number(item.product?.actualprice || 0) *
            Number(item.quantity || 1),
        0
    );

    const delivery =
        subtotal >= 999 || subtotal === 0
            ? 0
            : 99;

    const total = subtotal + delivery;

    const handleProceedToCheckout = () => {
        navigate("/checkout");
    };

    if (cartItems.length === 0) {
        return (
            <section className="cart-section-two">
                <div className="cart-section-two-container">
                    <div className="empty-cart">
                        <div className="empty-cart-icon">
                            <ShoppingBag size={35} />
                        </div>

                        <span>YOUR BAG IS EMPTY</span>

                        <h2>
                            Nothing here <em>yet.</em>
                        </h2>

                        <p>
                            Discover pieces selected to match
                            your style and make your wardrobe
                            feel more you.
                        </p>

                        <Link to="/shop" className="continue-shopping-button" >
                            EXPLORE SHOP
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="cart-section-two">
            <div className="cart-section-two-container">
                <div className="cart-layout">
                    <div className="cart-products">
                        <div className="cart-products-heading">
                            <div>
                                <span>
                                    YOUR SELECTION
                                </span>

                                <h2>
                                    Shopping <em>Bag</em>
                                </h2>
                            </div>

                            <p>
                                {cartItems.length}{" "} {cartItems.length === 1 ? "item" : "items"}
                            </p>
                        </div>

                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <article className="cart-item" key={String(item._id)} >
                                    {console.log(cartItems)}
                                    <div className="cart-item-image">
                                        <Link to={`/product/${item.product._id}`} >
                                            <img src={item.product.image} alt={item.product.name} />
                                        </Link>

                                        {item.discount && (
                                            <span>
                                                {item.product.discount}
                                            </span>
                                        )}
                                    </div>

                                    <div className="cart-item-details">
                                        <span className="cart-item-category">
                                            {item.product.category}
                                        </span>

                                        <Link to={`/product/${item.product._id}`} className="cart-item-name" >
                                            {item.product.name}
                                        </Link>

                                        <div className="cart-item-price">
                                            <strong>
                                                ₹{Number(item.product.actualprice || 0).toLocaleString("en-IN")}
                                            </strong>

                                            <del>
                                                ₹{Number(item.product.originalprice || 0).toLocaleString("en-IN")}
                                            </del>
                                        </div>

                                        <div className="cart-item-bottom">
                                            <div className="cart-quantity">
                                                <button type="button" onClick={() => decreaseQuantity(item.product._id, item.quantity)} aria-label="Decrease quantity" >
                                                    <Minus size={14} />
                                                </button>

                                                <span>
                                                    {item.quantity}
                                                </span>

                                                <button type="button" onClick={() => increaseQuantity(item.product._id, item.quantity)} aria-label="Increase quantity" >
                                                    <Plus size={14} />
                                                </button>
                                            </div>

                                            <button type="button" className="remove-item" onClick={() => handleRemoveCart(item.product._id)} >
                                                <Trash2 size={15} />
                                                REMOVE
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <Link to="/shop" className="back-to-shop" >
                            <ArrowLeft size={16} />
                            CONTINUE SHOPPING
                        </Link>
                    </div>

                    <aside className="cart-summary">
                        <div className="summary-heading">
                            <span>ORDER SUMMARY</span>
                            <h2>
                                Your <em>Total</em>
                            </h2>
                        </div>

                        <div className="summary-details">
                            <div>
                                <span>Subtotal</span>
                                <strong>
                                    ₹ {subtotal.toLocaleString("en-IN")}
                                </strong>
                            </div>

                            <div>
                                <span>Delivery</span>
                                <strong>
                                    {delivery === 0 ? "FREE" : `₹${delivery}`}
                                </strong>
                            </div>
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-total">
                            <span>TOTAL</span>
                            <strong>
                                ₹ {total.toLocaleString("en-IN")}
                            </strong>
                        </div>

                        <button type="button" className="proceed-checkout-button" onClick={handleProceedToCheckout} >
                            <span>
                                PROCEED TO CHECKOUT
                            </span>
                            <ArrowRight size={17} />
                        </button>

                        <div className="secure-checkout">
                            <ShoppingBag size={17} />
                            <span>
                                Secure shopping experience
                            </span>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Section2;