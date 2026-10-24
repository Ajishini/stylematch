import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, ArrowRight } from "lucide-react";
import "./Section2.css";

const Section2 = () => {
    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();

    const mergeDuplicateItems = (items) => {
        const mergedItems = new Map();

        items.forEach((item) => {
            const key = String(item.id);

            if (mergedItems.has(key)) {
                const existingItem = mergedItems.get(key);

                mergedItems.set(key, {
                    ...existingItem,
                    quantity:
                        Number(existingItem.quantity || 1) +
                        Number(item.quantity || 1)
                });
            } else {
                mergedItems.set(key, {
                    ...item,
                    quantity: Number(item.quantity || 1)
                });
            }
        });

        return Array.from(mergedItems.values());
    };

    useEffect(() => {
        try {
            const savedCart =
                JSON.parse(
                    localStorage.getItem("stylematch-cart")
                ) || [];

            const cleanedCart = mergeDuplicateItems(
                Array.isArray(savedCart) ? savedCart : []
            );

            setCartItems(cleanedCart);

            localStorage.setItem(
                "stylematch-cart",
                JSON.stringify(cleanedCart)
            );
        } catch (error) {
            console.error("Unable to load cart:", error);
            setCartItems([]);
        }
    }, []);

    const updateCart = (items) => {
        const cleanedItems = mergeDuplicateItems(items);

        setCartItems(cleanedItems);

        localStorage.setItem(
            "stylematch-cart",
            JSON.stringify(cleanedItems)
        );
    };

    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map((item) => {
            if (String(item.id) === String(id)) {
                return {
                    ...item,
                    quantity: Number(item.quantity || 0) + 1
                };
            }

            return item;
        });

        updateCart(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems
            .map((item) => {
                if (String(item.id) === String(id)) {
                    return {
                        ...item,
                        quantity:
                            Number(item.quantity || 1) - 1
                    };
                }

                return item;
            })
            .filter(
                (item) => Number(item.quantity) > 0
            );

        updateCart(updatedCart);
    };

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(
            (item) =>
                String(item.id) !== String(id)
        );

        updateCart(updatedCart);
    };

    const subtotal = cartItems.reduce(
        (total, item) =>
            total +
            Number(item.price || 0) *
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
                                <article className="cart-item" key={String(item.id)} >
                                    <div className="cart-item-image">
                                        <Link to={`/product/${item.id}`} >
                                            <img src={item.image} alt={item.name} />
                                        </Link>

                                        {item.discount && (
                                            <span>
                                                {item.discount}
                                            </span>
                                        )}
                                    </div>

                                    <div className="cart-item-details">
                                        <span className="cart-item-category">
                                            {item.category}
                                        </span>

                                        <Link to={`/product/${item.id}`} className="cart-item-name" >
                                            {item.name}
                                        </Link>

                                        <div className="cart-item-price">
                                            <strong>
                                                ₹ {Number( item.price || 0 ).toLocaleString( "en-IN" )}
                                            </strong>

                                            {item.oldPrice && (
                                                <del>
                                                    ₹ {Number( item.oldPrice ).toLocaleString( "en-IN" )}
                                                </del>
                                            )}
                                        </div>

                                        <div className="cart-item-bottom">
                                            <div className="cart-quantity">
                                                <button type="button" onClick={() => decreaseQuantity( item.id ) } aria-label="Decrease quantity" >
                                                    <Minus size={14} />
                                                </button>

                                                <span>
                                                    {item.quantity}
                                                </span>

                                                <button type="button" onClick={() => increaseQuantity( item.id ) } aria-label="Increase quantity" >
                                                    <Plus size={14} />
                                                </button>
                                            </div>

                                            <button type="button" className="remove-item" onClick={() => removeItem( item.id ) } >
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
                                    ₹ {subtotal.toLocaleString( "en-IN" )}
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
                                ₹ {total.toLocaleString( "en-IN" )}
                            </strong>
                        </div>

                        <button type="button" className="proceed-checkout-button" onClick={ handleProceedToCheckout } >
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