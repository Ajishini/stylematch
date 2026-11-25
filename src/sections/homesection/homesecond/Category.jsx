import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./Category.css";

const Category = ({ categories = [] }) => {

  return (
    <section className="home-categories">
      <div className="home-section-heading">
        <div>
          <h2>
            Find your <em>essentials.</em>
          </h2>
        </div>

        <Link to="/shop">
          View All
          <ArrowUpRight size={17} />
        </Link>
      </div>

      <div className="home-category-grid">
        {categories.map((item) => (
          <Link key={item._id} to={`/shop?category=${item._id}`} className="home-category-card" >
            <div className="home-category-image">
              <img src={item.image} alt={item.name} onError={() => {
    console.log("Category image failed:", item.name, item.image);
  }}
/>

              <div className="home-category-overlay"></div>

              <span className="home-category-number">
                {item.number}
              </span>
            </div>

            <div className="home-category-info">
              <h3>{item.name}</h3>
              <ArrowUpRight size={19} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;