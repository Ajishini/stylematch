import React from "react";
import { ChevronRight, LockKeyhole } from "lucide-react";
import "./Section1.css";

const Section1 = () => {
    return (
        <section className="payment-section-one">
            <div className="payment-section-one-overlay"></div>

            <div className="payment-section-one-container">
                <div className="payment-breadcrumb">
                    <span>STYLEMATCH</span>
                    <ChevronRight size={14} />
                    <span>CHECKOUT</span>
                    <ChevronRight size={14} />
                    <strong>PAYMENT</strong>
                </div>

                <div className="payment-hero-content">

                    <h1>
                        Make it
                        <br />
                        <em>yours.</em>
                    </h1>

                    <p>
                        Choose your preferred payment method
                        <br />
                        and complete your StyleMatch order.
                    </p>

                    <div className="payment-secure-badge">
                        <LockKeyhole size={15} />
                        <span>SAFE &amp; SECURE PAYMENT</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;