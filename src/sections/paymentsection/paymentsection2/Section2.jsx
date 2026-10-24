import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, CreditCard, Landmark, Smartphone, Banknote, ShieldCheck, LockKeyhole } from "lucide-react";
import "./Section2.css";

const Section2 = () => {
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);
    const [checkoutData, setCheckoutData] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState("upi");

    const [paymentData, setPaymentData] = useState({
        upiId: "",
        cardNumber: "",
        cardName: "",
        expiry: "",
        cvv: "",
        bank: ""
    });

    useEffect(() => {
        try {
            const savedCart =
                JSON.parse(localStorage.getItem("stylematch-cart")) || [];

            const savedCheckout =
                JSON.parse(
                    localStorage.getItem("stylematch-checkout")
                ) || null;

            setCartItems(
                Array.isArray(savedCart) ? savedCart : []
            );

            setCheckoutData(savedCheckout);
        } catch (error) {
            console.error(
                "Unable to load payment details:",
                error
            );

            setCartItems([]);
            setCheckoutData(null);
        }
    }, []);

    const subtotal = cartItems.reduce(
        (total, item) =>
            total +
            Number(item.price || 0) *
                Number(item.quantity || 1),
        0
    );

    const deliveryCharge = checkoutData
        ? Number(checkoutData.deliveryCharge || 0)
        : subtotal >= 999 || subtotal === 0
        ? 0
        : 99;

    const total = checkoutData
        ? Number(
              checkoutData.total ||
                  subtotal + deliveryCharge
          )
        : subtotal + deliveryCharge;

    const handlePaymentChange = (event) => {
        const { name, value } = event.target;

        setPaymentData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const validatePayment = () => {
        if (paymentMethod === "upi") {
            if (!paymentData.upiId.trim()) {
                alert("Please enter your UPI ID.");
                return false;
            }
        }

        if (paymentMethod === "card") {
            if (
                !paymentData.cardNumber.trim() ||
                !paymentData.cardName.trim() ||
                !paymentData.expiry.trim() ||
                !paymentData.cvv.trim()
            ) {
                alert("Please fill in all card details.");
                return false;
            }

            if (
                paymentData.cardNumber
                    .replace(/\s/g, "")
                    .length < 12
            ) {
                alert("Please enter a valid card number.");
                return false;
            }

            if (paymentData.cvv.length < 3) {
                alert("Please enter a valid CVV.");
                return false;
            }
        }

        if (paymentMethod === "netbanking") {
            if (!paymentData.bank) {
                alert("Please select your bank.");
                return false;
            }
        }

        return true;
    };

    const handlePlaceOrder = (event) => {
        event.preventDefault();

        if (cartItems.length === 0) {
            alert("Your cart is empty.");
            navigate("/shop");
            return;
        }

        if (!checkoutData) {
            alert("Please complete checkout details first.");
            navigate("/checkout");
            return;
        }

        if (!validatePayment()) {
            return;
        }

        const orderId =
            "SM" +
            Date.now().toString().slice(-8);

        const order = {
            orderId,
            orderDate: new Date().toISOString(),
            customer: checkoutData.customer,
            deliveryMethod:
                checkoutData.deliveryMethod || "standard",
            deliveryCharge,
            paymentMethod,
            items: cartItems,
            subtotal,
            total,
            paymentStatus:
                paymentMethod === "cod"
                    ? "Cash on Delivery"
                    : "Payment Successful"
        };

        localStorage.setItem(
            "stylematch-order",
            JSON.stringify(order)
        );

        const existingOrders =
            JSON.parse(
                localStorage.getItem("stylematch-orders")
            ) || [];

        localStorage.setItem(
            "stylematch-orders",
            JSON.stringify([
                order,
                ...existingOrders
            ])
        );

        localStorage.removeItem("stylematch-cart");

        navigate("/order-confirmation");
    };

    const paymentMethods = [
        {
            id: "upi",
            title: "UPI",
            description: "Google Pay, PhonePe, Paytm & more",
            icon: Smartphone
        },
        {
            id: "card",
            title: "Credit / Debit Card",
            description: "Visa, Mastercard, RuPay & more",
            icon: CreditCard
        },
        {
            id: "netbanking",
            title: "Net Banking",
            description: "Pay securely through your bank",
            icon: Landmark
        },
        {
            id: "cod",
            title: "Cash on Delivery",
            description: "Pay when your order arrives",
            icon: Banknote
        }
    ];

    return (
        <section className="payment-section-two">
            <div className="payment-section-two-container">
                <form
                    className="payment-main-layout"
                    onSubmit={handlePlaceOrder}
                >
                    <div className="payment-left-column">
                        <div className="payment-card">
                            <div className="payment-card-header">
                                <div>
                                    <span className="payment-card-label">
                                        PAYMENT METHOD
                                    </span>

                                    <h2>
                                        Choose how you'd like to pay
                                    </h2>
                                </div>

                                <ShieldCheck size={23} />
                            </div>

                            <div className="payment-method-list">
                                {paymentMethods.map((method) => {
                                    const Icon = method.icon;

                                    return (
                                        <button key={method.id} type="button" className={`payment-method ${ paymentMethod === method.id ? "active" : "" }`}
                                            onClick={() => setPaymentMethod( method.id ) } >
                                            <div className="payment-method-icon">
                                                <Icon size={20} />
                                            </div>

                                            <div className="payment-method-content">
                                                <strong>
                                                    {method.title}
                                                </strong>

                                                <span>
                                                    {method.description}
                                                </span>
                                            </div>

                                            <div className="payment-method-check">
                                                {paymentMethod ===
                                                    method.id && (
                                                    <Check size={14} />
                                                )}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="payment-card payment-details-card">
                            <div className="payment-details-heading">
                                <span className="payment-card-label">
                                    PAYMENT DETAILS
                                </span>

                                <span className="payment-secured-small">
                                    <LockKeyhole size={13} />
                                    SECURE
                                </span>
                            </div>

                            {paymentMethod === "upi" && (
                                <div className="payment-fields">
                                    <div className="payment-field">
                                        <label htmlFor="upiId">
                                            UPI ID
                                        </label>

                                        <input id="upiId" name="upiId" type="text" value={paymentData.upiId} onChange={  handlePaymentChange } placeholder="example@upi" />

                                        <span className="field-hint">
                                            Enter your registered UPI ID
                                        </span>
                                    </div>
                                </div>
                            )}

                            {paymentMethod === "card" && (
                                <div className="payment-fields">
                                    <div className="payment-field full">
                                        <label htmlFor="cardNumber">
                                            CARD NUMBER
                                        </label>

                                        <input id="cardNumber" name="cardNumber" type="text" value={ paymentData.cardNumber } onChange={ handlePaymentChange } placeholder="1234 5678 9012 3456" maxLength={19} />
                                    </div>

                                    <div className="payment-field full">
                                        <label htmlFor="cardName">
                                            NAME ON CARD
                                        </label>

                                        <input id="cardName" name="cardName" type="text" value={ paymentData.cardName } onChange={ handlePaymentChange } placeholder="Enter name as on card" />
                                    </div>

                                    <div className="payment-field">
                                        <label htmlFor="expiry">
                                            EXPIRY DATE
                                        </label>

                                        <input id="expiry" name="expiry" type="text" value={paymentData.expiry} onChange={ handlePaymentChange } placeholder="MM / YY" maxLength={5} />
                                    </div>

                                    <div className="payment-field">
                                        <label htmlFor="cvv">
                                            CVV
                                        </label>

                                        <input id="cvv" name="cvv" type="password" value={paymentData.cvv}  onChange={ handlePaymentChange } placeholder="•••" maxLength={4} />
                                    </div>
                                </div>
                            )}

                            {paymentMethod === "netbanking" && (
                                <div className="payment-fields">
                                    <div className="payment-field full">
                                        <label htmlFor="bank">
                                            SELECT YOUR BANK
                                        </label>

                                        <select id="bank" name="bank" value={paymentData.bank} onChange={ handlePaymentChange } >
                                            <option value="">
                                                Select Bank
                                            </option>

                                            <option value="SBI">
                                                State Bank of India
                                            </option>

                                            <option value="HDFC">
                                                HDFC Bank
                                            </option>

                                            <option value="ICICI">
                                                ICICI Bank
                                            </option>

                                            <option value="AXIS">
                                                Axis Bank
                                            </option>

                                            <option value="KOTAK">
                                                Kotak Mahindra Bank
                                            </option>

                                            <option value="CANARA">
                                                Canara Bank
                                            </option>

                                            <option value="OTHER">
                                                Other Bank
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            {paymentMethod === "cod" && (
                                <div className="cod-message">
                                    <div className="cod-icon">
                                        <Banknote size={24} />
                                    </div>

                                    <div>
                                        <h3>
                                            Cash on Delivery
                                        </h3>

                                        <p>
                                            Pay in cash when your
                                            StyleMatch order is
                                            delivered to your address.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="payment-security-box">
                            <ShieldCheck size={21} />

                            <div>
                                <strong>
                                    Your payment is secure
                                </strong>

                                <p>
                                    StyleMatch uses secure payment
                                    processing to protect your
                                    information.
                                </p>
                            </div>
                        </div>

                        <div className="payment-bottom-actions">
                            <Link to="/checkout" className="back-checkout-button" >
                                <ArrowLeft size={16} />
                                <span>
                                    BACK TO CHECKOUT
                                </span>
                            </Link>

                            <button type="submit"  className="place-order-button" >
                                <span>PLACE ORDER</span>
                                <ArrowRight size={17} />
                            </button>
                        </div>
                    </div>

                    <aside className="payment-summary-card">
                        <div className="payment-summary-header">
                            <div>
                                <span className="payment-card-label">
                                    YOUR ORDER
                                </span>

                                <h2>
                                    Order summary
                                </h2>
                            </div>

                            <span className="payment-item-count">
                                {cartItems.length} ITEMS
                            </span>
                        </div>

                        <div className="payment-summary-products">
                            {cartItems.length === 0 ? (
                                <div className="payment-empty">
                                    <p>
                                        Your cart is empty.
                                    </p>

                                    <Link to="/shop">
                                        CONTINUE SHOPPING
                                    </Link>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div className="payment-summary-product" key={`${item.id}-${item.selectedSize || ""}`} >
                                        <div className="payment-product-image">
                                            <img src={item.image} alt={item.name} />

                                            <span>
                                                {item.quantity || 1}
                                            </span>
                                        </div>

                                        <div className="payment-product-info">
                                            <strong>
                                                {item.name}
                                            </strong>

                                            <span>
                                                {item.selectedSize ? `Size ${item.selectedSize}` : item.category}
                                            </span>
                                        </div>

                                        <strong className="payment-product-price">
                                            ₹
                                            {(
                                                Number(
                                                    item.price || 0
                                                ) *
                                                Number(
                                                    item.quantity || 1
                                                )
                                            ).toLocaleString(
                                                "en-IN"
                                            )}
                                        </strong>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="payment-summary-divider"></div>

                        <div className="payment-summary-row">
                            <span>Subtotal</span>

                            <strong>
                                ₹
                                {subtotal.toLocaleString(
                                    "en-IN"
                                )}
                            </strong>
                        </div>

                        <div className="payment-summary-row">
                            <span>Delivery</span>

                            <strong>
                                {deliveryCharge === 0
                                    ? "FREE" : `₹${deliveryCharge}`}
                            </strong>
                        </div>

                        <div className="payment-summary-divider"></div>

                        <div className="payment-total-row">
                            <span>Total</span>

                            <strong>
                                ₹ {total.toLocaleString( "en-IN" )}
                            </strong>
                        </div>

                        <div className="payment-summary-note">
                            <LockKeyhole size={14} />

                            <span>
                                Secure payment · All taxes included
                            </span>
                        </div>
                    </aside>
                </form>
            </div>
        </section>
    );
};

export default Section2;