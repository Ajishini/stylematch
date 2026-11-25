import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Truck, CreditCard, MapPin, CalendarDays, Check, ShoppingBag } from "lucide-react";
import "./Section2.css";

const Section2 = () => {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        try {
            const savedOrder =
                JSON.parse(
                    localStorage.getItem("stylematch-order")
                ) || null;

            setOrder(savedOrder);
            window.scrollTo(0, 0);
        } catch (error) {
            console.error(
                "Unable to load order details:",
                error
            );

            setOrder(null);
        }
    }, []);

    if (!order) {
        return (
            <section className="confirmation-section-two">
                <div className="confirmation-empty-state">
                    <div className="confirmation-empty-icon">
                        <ShoppingBag size={28} />
                    </div>

                    <h2>No recent order found</h2>

                    <p>
                        Your order details are not available.
                        Please continue shopping to place an order.
                    </p>

                    <Link to="/shop" className="confirmation-shop-button" >
                        <span>CONTINUE SHOPPING</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        );
    }

    const orderDate = new Date(order.orderDate);

    const formattedDate =
        orderDate.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

    const formattedTime =
        orderDate.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit"
        });

    const paymentLabel = {
        upi: "UPI",
        card: "Credit / Debit Card",
        netbanking: "Net Banking",
        cod: "Cash on Delivery"
    };

    return (
        <section className="confirmation-section-two">
            <div className="confirmation-section-two-container">
                <div className="confirmation-order-number-card">
                    <div className="confirmation-order-number-icon">
                        <Check size={22} />
                    </div>

                    <div>
                        <span>ORDER NUMBER</span>
                        <strong>
                            #{order.orderId}
                        </strong>
                    </div>

                    <div className="confirmation-order-placed">
                        <span>PLACED ON</span>

                        <strong>{formattedDate}</strong>
                    </div>
                </div>

                <div className="confirmation-main-layout">
                    <div className="confirmation-left-column">
                        <div className="confirmation-info-card">
                            <div className="confirmation-card-heading">
                                <div>
                                    <span>
                                        DELIVERY INFORMATION
                                    </span>

                                    <h2>
                                        Your order details
                                    </h2>
                                </div>

                                <Package size={22} />
                            </div>

                            <div className="confirmation-info-grid">
                                <div className="confirmation-info-item">
                                    <div className="confirmation-info-icon">
                                        <MapPin size={18} />
                                    </div>

                                    <div>
                                        <span>DELIVERING TO</span>

                                        <strong>
                                            {order.customer?.fullName}
                                        </strong>

                                        <p>
                                            {order.customer?.address}
                                            <br />
                                            {order.customer?.city},{" "} {order.customer?.state}
                                            <br />
                                            PIN -{" "} {order.customer?.pincode}
                                        </p>
                                    </div>
                                </div>

                                <div className="confirmation-info-item">
                                    <div className="confirmation-info-icon">
                                        <Truck size={18} />
                                    </div>

                                    <div>
                                        <span>
                                            DELIVERY METHOD
                                        </span>

                                        <strong>
                                            {order.deliveryMethod ===
                                            "express"
                                                ? "Express Delivery"
                                                : "Standard Delivery"}
                                        </strong>

                                        <p>
                                            {order.deliveryMethod ===
                                            "express"
                                                ? "Delivery within 1–2 business days"
                                                : "Delivery within 3–5 business days"}
                                        </p>
                                    </div>
                                </div>

                                <div className="confirmation-info-item">
                                    <div className="confirmation-info-icon">
                                        <CreditCard size={18} />
                                    </div>

                                    <div>
                                        <span>
                                            PAYMENT METHOD
                                        </span>

                                        <strong>
                                            {paymentLabel[ order.paymentMethod ] || "Payment"}
                                        </strong>

                                        <p>
                                            {order.paymentStatus}
                                        </p>
                                    </div>
                                </div>

                                <div className="confirmation-info-item">
                                    <div className="confirmation-info-icon">
                                        <CalendarDays size={18} />
                                    </div>

                                    <div>
                                        <span>ORDER PLACED</span>

                                        <strong>
                                            {formattedDate}
                                        </strong>

                                        <p>{formattedTime}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="confirmation-info-card">
                            <div className="confirmation-card-heading">
                                <div>
                                    <span>
                                        YOUR PURCHASE
                                    </span>

                                    <h2>
                                        Ordered pieces
                                    </h2>
                                </div>

                                <span className="confirmation-items-count">
                                    {order.items?.length || 0} ITEMS
                                </span>
                            </div>

                            <div className="confirmation-items-list">
                                {order.items?.map((item) => (
                                    <div className="confirmation-product" key={`${item.id}-${item.selectedSize || ""}`} >
                                        <div className="confirmation-product-image">
                                            <img src={item.image} alt={item.name} />
                                            <span>
                                                {item.quantity || 1}
                                            </span>
                                        </div>

                                        <div className="confirmation-product-details">
                                            <strong>
                                                {item.name}
                                            </strong>

                                            <span>
                                                {item.category} {item.selectedSize ? ` · Size ${item.selectedSize}` : ""}
                                            </span>
                                        </div>

                                        <div className="confirmation-product-price">
                                            ₹ {( Number( item.price || 0 ) * Number( item.quantity || 1 ) ).toLocaleString( "en-IN" )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="confirmation-summary-card">
                        <span className="confirmation-summary-label">
                            ORDER SUMMARY
                        </span>

                        <h2>A little closer</h2>

                        <div className="confirmation-summary-lines">
                            <div>
                                <span>Subtotal</span>
                                <strong>
                                    ₹ {Number( order.subtotal || 0 ).toLocaleString("en-IN")}
                                </strong>
                            </div>

                            <div>
                                <span>Delivery</span>

                                <strong>
                                    {Number( order.deliveryCharge || 0 ) === 0 ? "FREE" : `₹${Number( order.deliveryCharge ).toLocaleString( "en-IN" )}`}
                                </strong>
                            </div>
                        </div>

                        <div className="confirmation-summary-divider"></div>

                        <div className="confirmation-total">
                            <span>Total paid</span>
                            <strong>
                                ₹ {Number( order.total || 0 ).toLocaleString("en-IN")}
                            </strong>
                        </div>

                        <div className="confirmation-delivery-note">
                            <Check size={15} />
                            <span>
                                Your order is confirmed and being
                                prepared.
                            </span>
                        </div>

                        <div className="confirmation-summary-actions">
                            <Link to="/shop" className="confirmation-continue-button" >
                                <span>
                                    CONTINUE SHOPPING
                                </span>
                                <ArrowRight size={16} />
                            </Link>

                            <Link to="/profile" className="confirmation-orders-button" >
                                VIEW MY ORDERS
                            </Link>
                        </div>
                    </aside>
                </div>

                <div className="confirmation-footer-note">
                    <span>STYLEMATCH</span>
                    <p>
                        Thank you for choosing pieces that feel
                        like you.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Section2;