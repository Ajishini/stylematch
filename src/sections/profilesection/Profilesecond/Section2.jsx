import React from "react";
import { Link } from "react-router-dom";
import { Package, Heart, ShoppingBag, Eye, ArrowRight, } from "lucide-react";
import "./Section2.css";

const Section2 = () => {
  const stats = [
    {
      icon: Package,
      label: "ORDERS",
      value: "05",
      text: "Completed orders",
    },
    {
      icon: Heart,
      label: "WISHLIST",
      value: "08",
      text: "Saved products",
      link: "/wishlist",
    },
    {
      icon: ShoppingBag,
      label: "CART",
      value: "03",
      text: "Items in your cart",
      link: "/cart",
    },
    {
      icon: Eye,
      label: "RECENTLY VIEWED",
      value: "12",
      text: "Products explored",
      link: "/shop",
    },
  ];

  return (
    <section className="profile-section-two">
      <div className="profile-two-container">
        <div className="profile-two-header">
          <div>
            <span>SHOPPING OVERVIEW</span>

            <h2>
              Your
              <br />
              activity.
            </h2>
          </div>

          <p>
            A quick look at your
            <br />
            StyleMatch activity.
          </p>
        </div>

        <div className="profile-stats-grid">
          {stats.map((item, index) => {
            const Icon = item.icon;

            const cardContent = (
              <>
                <div className="profile-stat-top">
                  <div className="profile-stat-icon">
                    <Icon size={18} strokeWidth={1.4} />
                  </div>

                  {item.link && (
                    <ArrowRight size={15} className="profile-stat-arrow" />
                  )}
                </div>

                <div className="profile-stat-content">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <small>{item.text}</small>
                </div>
              </>
            );

            if (item.link) {
              return (
                <Link to={item.link} className="profile-stat-card" key={index} >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div className="profile-stat-card" key={index} >
                {cardContent}
              </div>
            );
          })}
        </div>

        <div className="profile-two-bottom">
          <span>STYLEMATCH</span>
          <div></div>
          <p>
            Your shopping activity, kept simple.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;