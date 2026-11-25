import React, { useEffect, useState } from "react";
import { UserRound, ShoppingBag, Heart, Package, LogOut, ChevronRight, Edit3 } from "lucide-react";
import ProfileEdit from "../profileedit/ProfileEdit";
import "./ProfileDashboard.css";

const ProfileDashboard = ({ onLogout }) => {
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [activeSection, setActiveSection] = useState("overview");
    const [isEditingProfile, setIsEditingProfile] = useState(false);

    useEffect(() => {
        loadProfileData();
    }, []);

    const loadProfileData = () => {
        try {
            setUser(JSON.parse(localStorage.getItem("stylematch-user")) || null);
            setOrders(JSON.parse(localStorage.getItem("stylematch-orders")) || []);
            setWishlist(JSON.parse(localStorage.getItem("stylematch-wishlist")) || []);
            setCart(JSON.parse(localStorage.getItem("stylematch-cart")) || []);
        } catch (error) {
            console.error("Error loading profile data:", error);
            setUser(null);
            setOrders([]);
            setWishlist([]);
            setCart([]);
        }
    };

    const handleProfileSave = (updatedUser) => {
        localStorage.setItem("stylematch-user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setIsEditingProfile(false);
        setActiveSection("overview");
    };

    const handleLogout = () => {
        localStorage.removeItem("stylematchLoggedIn");
        onLogout?.();
    };

    const formatDate = (date) => {
        if (!date) return "Not added";

        try {
            return new Date(date).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric"
            });
        } catch {
            return date;
        }
    };

    const getOrderItemCount = (order) =>
        Array.isArray(order?.items)
            ? order.items.reduce(
                  (total, item) => total + (Number(item.quantity) || 1),
                  0
              )
            : 0;

    const changeSection = (section) => {
        setActiveSection(section);
        setIsEditingProfile(false);
    };

    const displayName = user?.fullName || "StyleMatch User";
    const firstName = displayName.split(" ")[0];

    if (isEditingProfile) {
        return (
            <main className="profile-dashboard-page">
                <ProfileEdit
                    user={user}
                    onSave={handleProfileSave}
                    onCancel={() => setIsEditingProfile(false)}
                />
            </main>
        );
    }

    const menuItems = [
        {
            id: "overview",
            icon: <UserRound size={17} />,
            label: "Overview"
        },
        {
            id: "orders",
            icon: <Package size={17} />,
            label: "My Orders",
            count: orders.length
        },
        {
            id: "wishlist",
            icon: <Heart size={17} />,
            label: "Wishlist",
            count: wishlist.length
        },
        {
            id: "cart",
            icon: <ShoppingBag size={17} />,
            label: "Shopping Bag",
            count: cart.length
        }
    ];

    return (
        <main className="profile-dashboard-page">
            <section className="profile-dashboard-hero">
                <div className="profile-dashboard-hero-inner">
                    <div className="profile-dashboard-user">
                        <div className="profile-dashboard-avatar">
                            {user?.profilePic ? (
                                <img src={user.profilePic} alt={displayName} />
                            ) : (
                                <UserRound size={42} />
                            )}
                        </div>

                        <div className="profile-dashboard-welcome">
                            <span className="profile-dashboard-label">
                                MY ACCOUNT
                            </span>

                            <h1>
                                Welcome back,
                                <br />
                                <em>{firstName}.</em>
                            </h1>

                            <p>
                                Manage your profile, orders and saved styles
                                from one place.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="profile-dashboard-content">
                <aside className="profile-dashboard-sidebar">
                    <div className="profile-sidebar-menu">
                        {menuItems.map((item) => (
                            <button key={item.id} className={activeSection === item.id ? "active" : ""} onClick={() => changeSection(item.id)}>
                                {item.icon}
                                <span>{item.label}</span>

                                {item.count > 0 && (
                                    <small>{item.count}</small>
                                )}

                                {item.id === "overview" && (
                                    <ChevronRight size={15} />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="profile-sidebar-bottom">
                        <button className="profile-logout-button" onClick={handleLogout}>
                            <LogOut size={17} />
                            Logout
                        </button>
                    </div>
                </aside>

                <div className="profile-dashboard-main">
                    {activeSection === "overview" && (
                        <>

                            <section className="profile-account-section">
                                <div className="profile-section-heading">
                                    <div>
                                        <h2>Personal Information</h2>
                                    </div>

                                    <button className="profile-edit-button" onClick={() => setIsEditingProfile(true)}>
                                        <Edit3 size={14} />
                                        EDIT PROFILE
                                    </button>
                                </div>

                                <div className="profile-account-card">
                                    <div className="profile-account-avatar">
                                        {user?.profilePic ? (
                                            <img src={user.profilePic} alt={displayName} />
                                        ) : (
                                            <UserRound size={40} />
                                        )}
                                    </div>

                                    <div className="profile-account-info">
                                        <div>
                                            <span>FULL NAME</span>
                                            <strong>{user?.fullName || "Not added"}</strong>
                                        </div>

                                        <div>
                                            <span>EMAIL ADDRESS</span>
                                            <strong>{user?.email || "Not added"}</strong>
                                        </div>

                                        <div>
                                            <span>PHONE NUMBER</span>
                                            <strong>{user?.phone || "Not added"}</strong>
                                        </div>

                                        <div>
                                            <span>DATE OF BIRTH</span>
                                            <strong>
                                                {user?.dob ? formatDate(user.dob) : "Not added"}
                                            </strong>
                                        </div>

                                        <div>
                                            <span>GENDER</span>
                                            <strong>{user?.gender || "Not added"}</strong>
                                        </div>

                                        <div>
                                            <span>ADDRESS</span>
                                            <strong>{user?.address || "Not added"}</strong>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="profile-recent-section">
                                <div className="profile-section-heading">
                                    <div>
                                        <h2>Recent Orders</h2>
                                    </div>

                                    {orders.length > 0 && (
                                        <button className="profile-view-all" onClick={() => changeSection("orders")}>
                                            VIEW ALL
                                            <ChevronRight size={14} />
                                        </button>
                                    )}
                                </div>

                                {orders.length === 0 ? (
                                    <div className="profile-empty-card">
                                        <Package size={32} />
                                        <h3>No orders yet</h3>
                                        <p>Your completed orders will appear here.</p>

                                        <button onClick={() => (window.location.href = "/shop")}>
                                            START SHOPPING
                                        </button>
                                    </div>
                                ) : (
                                    <div className="profile-orders-list">
                                        {orders.slice(0, 3).map((order) => (
                                            <div className="profile-order-card" key={order.orderId}>
                                                <div className="profile-order-info">
                                                    <span>ORDER #{order.orderId}</span>

                                                    <strong>
                                                        {formatDate(order.orderDate)}
                                                    </strong>

                                                    <small>
                                                        {getOrderItemCount(order)} item
                                                        {getOrderItemCount(order) !== 1 ? "s" : ""}
                                                    </small>
                                                </div>

                                                <div className="profile-order-price">
                                                    <span>TOTAL</span>

                                                    <strong>
                                                        ₹ {Number(order.total || 0).toLocaleString("en-IN")}
                                                    </strong>
                                                </div>

                                                <div className="profile-order-status">
                                                    {order.paymentStatus || "Order Confirmed"}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>

                        </>
                    )}

                    {activeSection === "orders" && (
                        <section className="profile-page-section">
                            <div className="profile-section-heading">
                                <div>
                                    <h2>My Orders</h2>
                                </div>
                            </div>

                            {orders.length === 0 ? (
                                <div className="profile-empty-card">
                                    <Package size={35} />
                                    <h3>No orders found</h3>
                                    <p>You haven't placed any orders yet.</p>

                                    <button onClick={() => (window.location.href = "/shop")}>
                                        EXPLORE SHOP
                                    </button>
                                </div>
                            ) : (
                                <div className="profile-orders-full-list">
                                    {orders.map((order) => (
                                        <div className="profile-full-order-card" key={order.orderId}>
                                            <div className="profile-full-order-header">
                                                <div>
                                                    <span>ORDER NUMBER</span>
                                                    <strong>#{order.orderId}</strong>
                                                </div>

                                                <div>
                                                    <span>ORDER DATE</span>
                                                    <strong>{formatDate(order.orderDate)}</strong>
                                                </div>

                                                <div>
                                                    <span>TOTAL</span>
                                                    <strong>
                                                        ₹
                                                        {Number(order.total || 0).toLocaleString("en-IN")}
                                                    </strong>
                                                </div>
                                            </div>

                                            <div className="profile-order-products">
                                                {Array.isArray(order.items) &&
                                                    order.items.slice(0, 4).map((item, index) => (
                                                        <div className="profile-order-product" key={item.id || index}>
                                                            {item.image ? (
                                                                <img src={item.image} alt={item.name || "Product"} />
                                                            ) : (
                                                                <div className="profile-product-placeholder">
                                                                    <ShoppingBag size={18} />
                                                                </div>
                                                            )}

                                                            <div>
                                                                <strong>{item.name || "Product"}</strong>

                                                                <span>
                                                                    Qty: {item.quantity || 1}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>

                                            <div className="profile-full-order-footer">
                                                <span className="profile-order-payment">
                                                    {order.paymentStatus || "Order Confirmed"}
                                                </span>

                                                <span>
                                                    {order.deliveryMethod === "express"
                                                        ? "Express Delivery"
                                                        : "Standard Delivery"}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    )}

                    {activeSection === "wishlist" && (
                        <section className="profile-page-section">
                            <div className="profile-section-heading">
                                <div>
                                    <h2>My Wishlist</h2>
                                </div>
                            </div>

                            {wishlist.length === 0 ? (
                                <div className="profile-empty-card">
                                    <Heart size={35} />
                                    <h3>Your wishlist is empty</h3>
                                    <p>Save pieces you love and find them here later.</p>

                                    <button onClick={() => (window.location.href = "/shop")}>
                                        DISCOVER STYLES
                                    </button>
                                </div>
                            ) : (
                                <div className="profile-wishlist-grid">
                                    {wishlist.map((item, index) => (
                                        <div className="profile-wishlist-card" key={item.id || index}>
                                            <div className="profile-wishlist-image">
                                                {item.image ? (
                                                    <img src={item.image} alt={item.name || "Wishlist product"} />
                                                ) : (
                                                    <Heart size={28} />
                                                )}
                                            </div>

                                            <div className="profile-wishlist-details">
                                                <h3>{item.name || "Saved Product"}</h3>

                                                <p>
                                                    ₹ {Number(item.price || 0).toLocaleString("en-IN")}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    )}

                    {activeSection === "cart" && (
                        <section className="profile-page-section">
                            <div className="profile-section-heading">
                                <div>
                                    <h2>Shopping Bag</h2>
                                </div>
                            </div>

                            {cart.length === 0 ? (
                                <div className="profile-empty-card">
                                    <ShoppingBag size={35} />
                                    <h3>Your shopping bag is empty</h3>
                                    <p>
                                        Add something beautiful to your StyleMatch collection.
                                    </p>

                                    <button onClick={() => (window.location.href = "/shop")}>
                                        CONTINUE SHOPPING
                                    </button>
                                </div>
                            ) : (
                                <div className="profile-cart-list">
                                    {cart.map((item, index) => (
                                        <div className="profile-cart-card" key={item.id || index}>
                                            <div className="profile-cart-image">
                                                {item.image ? (
                                                    <img src={item.image} alt={item.name || "Cart product"} />
                                                ) : (
                                                    <ShoppingBag size={25} />
                                                )}
                                            </div>

                                            <div className="profile-cart-details">
                                                <h3>{item.name || "Product"}</h3>

                                                <p>
                                                    ₹ {Number(item.price || 0).toLocaleString("en-IN")}
                                                </p>

                                                <span>
                                                    Quantity: {item.quantity || 1}
                                                </span>
                                            </div>
                                        </div>
                                    ))}

                                    <button className="profile-cart-button" onClick={() => (window.location.href = "/cart")}>
                                        VIEW SHOPPING BAG
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            )}
                        </section>
                    )}
                </div>
            </section>
        </main>
    );
};

export default ProfileDashboard;