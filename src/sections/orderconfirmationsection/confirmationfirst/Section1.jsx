import React from "react";
import { Check, ShoppingBag } from "lucide-react";
import "./Section1.css";

const Section1 = () => {
    return (
        <section className="confirmation-section-one">
            <div className="confirmation-section-one-overlay"></div>

            <div className="confirmation-section-one-container">
                <div className="confirmation-success-icon">
                    <Check size={30} strokeWidth={1.8} />
                </div>

                <h1>
                    Thank you for
                    <br />
                    <em>shopping with us.</em>
                </h1>

                <p>
                    Your order has been placed successfully.
                    <br />
                    We're getting your pieces ready.
                </p>

                <div className="confirmation-order-status">
                    <ShoppingBag size={16} />
                    <span>ORDER CONFIRMED</span>
                </div>
            </div>
        </section>
    );
};

export default Section1;