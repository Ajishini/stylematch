import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserRound, MapPin, Phone, Mail, Truck, Package, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import "./Section2.css";

const Section2 = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
    });
    const [deliveryMethod, setDeliveryMethod] = useState("standard");

    useEffect(() => {
        try {
            const savedCart = JSON.parse(localStorage.getItem("stylematch-cart")) || [];
            setCartItems(Array.isArray(savedCart) ? savedCart : []);
        } catch (error) {
            console.error("Unable to load checkout cart:", error);
            setCartItems([]);
        }
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const subtotal = cartItems.reduce(
        (total, item) =>
            total + Number(item.price || 0) * Number(item.quantity || 1),
        0
    );

    const deliveryCharge =
        deliveryMethod === "express"
            ? 199
            : subtotal >= 999 || subtotal === 0
            ? 0
            : 99;

    const total = subtotal + deliveryCharge;

    const handleContinue = (event) => {
        event.preventDefault();

        const requiredFields = [
            "fullName",
            "email",
            "phone",
            "address",
            "city",
            "state",
            "pincode"
        ];

        const isComplete = requiredFields.every(
            (field) => formData[field].trim() !== ""
        );

        if (!isComplete) {
            alert("Please fill in all delivery details.");
            return;
        }

        localStorage.setItem(
            "stylematch-checkout",
            JSON.stringify({
                customer: formData,
                deliveryMethod,
                deliveryCharge,
                subtotal,
                total
            })
        );

        navigate("/payment");
    };

    return (
        <section className="checkout-section-two">
            <div className="checkout-section-two-container">
                <form className="checkout-layout" onSubmit={handleContinue}>
                    <div className="checkout-main">
                        <div className="checkout-card">
                            <div className="checkout-card-heading">
                                <div className="checkout-step-number">01</div>

                                <div>
                                    <span>CUSTOMER INFORMATION</span>
                                    <h2>
                                        Contact <em>Details</em>
                                    </h2>
                                </div>
                            </div>

                            <div className="checkout-form-grid">
                                <div className="checkout-field full-width">
                                    <label htmlFor="fullName">FULL NAME</label>

                                    <div className="checkout-input-wrapper">
                                        <UserRound size={16} />

                                        <input
                                            id="fullName"
                                            type="text"
                                            name="fullName"
                                            placeholder="Enter your full name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="checkout-field">
                                    <label htmlFor="email">EMAIL ADDRESS</label>

                                    <div className="checkout-input-wrapper">
                                        <Mail size={16} />

                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="checkout-field">
                                    <label htmlFor="phone">PHONE NUMBER</label>

                                    <div className="checkout-input-wrapper">
                                        <Phone size={16} />

                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            placeholder="Enter phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="checkout-card">
                            <div className="checkout-card-heading">
                                <div className="checkout-step-number">02</div>

                                <div>
                                    <span>DELIVERY INFORMATION</span>
                                    <h2>
                                        Shipping <em>Address</em>
                                    </h2>
                                </div>
                            </div>

                            <div className="checkout-form-grid">
                                <div className="checkout-field full-width">
                                    <label htmlFor="address">ADDRESS</label>

                                    <div className="checkout-input-wrapper checkout-textarea-wrapper">
                                        <MapPin size={16} />

                                        <textarea
                                            id="address"
                                            name="address"
                                            placeholder="House / Flat number, street, area"
                                            value={formData.address}
                                            onChange={handleChange}
                                            rows="3"
                                        />
                                    </div>
                                </div>

                                <div className="checkout-field">
                                    <label htmlFor="city">CITY</label>

                                    <input
                                        id="city"
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="checkout-field">
                                    <label htmlFor="state">STATE</label>

                                    <input
                                        id="state"
                                        type="text"
                                        name="state"
                                        placeholder="State"
                                        value={formData.state}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="checkout-field">
                                    <label htmlFor="pincode">PINCODE</label>

                                    <input
                                        id="pincode"
                                        type="text"
                                        name="pincode"
                                        maxLength="6"
                                        placeholder="6-digit pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="checkout-card">
                            <div className="checkout-card-heading">
                                <div className="checkout-step-number">03</div>

                                <div>
                                    <span>DELIVERY METHOD</span>
                                    <h2>
                                        Choose your <em>delivery.</em>
                                    </h2>
                                </div>
                            </div>

                            <div className="delivery-options">
                                <label className={`delivery-option ${deliveryMethod === "standard" ? "selected" : ""}`}>
                                    <input
                                        type="radio"
                                        name="deliveryMethod"
                                        value="standard"
                                        checked={deliveryMethod === "standard"}
                                        onChange={(event) => setDeliveryMethod(event.target.value)}
                                    />

                                    <div className="delivery-radio"></div>

                                    <div className="delivery-icon">
                                        <Truck size={20} />
                                    </div>

                                    <div className="delivery-info">
                                        <strong>Standard Delivery</strong>
                                        <span>3–5 business days</span>
                                    </div>

                                    <div className="delivery-price">
                                        {subtotal >= 999 ? "FREE" : "₹99"}
                                    </div>
                                </label>

                                <label className={`delivery-option ${deliveryMethod === "express" ? "selected" : ""}`}>
                                    <input
                                        type="radio"
                                        name="deliveryMethod"
                                        value="express"
                                        checked={deliveryMethod === "express"}
                                        onChange={(event) => setDeliveryMethod(event.target.value)}
                                    />

                                    <div className="delivery-radio"></div>

                                    <div className="delivery-icon">
                                        <Package size={20} />
                                    </div>

                                    <div className="delivery-info">
                                        <strong>Express Delivery</strong>
                                        <span>1–2 business days</span>
                                    </div>

                                    <div className="delivery-price">₹199</div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <aside className="checkout-summary">
                        <div className="checkout-summary-heading">
                            <span>YOUR ORDER</span>

                            <h2>
                                Order <em>Summary</em>
                            </h2>
                        </div>

                        <div className="checkout-summary-products">
                            {cartItems.map((item) => (
                                <div className="checkout-summary-product" key={String(item.id)}>
                                    <div className="checkout-summary-image">
                                        <img src={item.image} alt={item.name} />
                                        <span>{item.quantity || 1}</span>
                                    </div>

                                    <div className="checkout-summary-product-info">
                                        <span>{item.category}</span>
                                        <h3>{item.name}</h3>

                                        <strong>
                                            ₹{Number(item.price || 0).toLocaleString("en-IN")}
                                        </strong>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="checkout-price-details">
                            <div>
                                <span>Subtotal</span>
                                <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
                            </div>

                            <div>
                                <span>Delivery</span>
                                <strong>
                                    {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                                </strong>
                            </div>
                        </div>

                        <div className="checkout-summary-divider"></div>

                        <div className="checkout-grand-total">
                            <span>TOTAL</span>
                            <strong>₹{total.toLocaleString("en-IN")}</strong>
                        </div>

                        <button type="submit" className="continue-payment-button">
                            <span>CONTINUE TO PAYMENT</span>
                            <ArrowRight size={17} />
                        </button>

                        <button type="button" className="checkout-back-button" onClick={() => navigate("/cart")}>
                            <ArrowLeft size={15} />
                            <span>BACK TO CART</span>
                        </button>

                        <div className="checkout-security">
                            <ShieldCheck size={18} />

                            <div>
                                <strong>Secure Checkout</strong>
                                <span>
                                    Your information is protected with secure encryption.
                                </span>
                            </div>
                        </div>
                    </aside>
                </form>
            </div>
        </section>
    );
};

export default Section2;