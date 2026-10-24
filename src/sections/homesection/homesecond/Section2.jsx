import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./Section2.css";
import tops from "../../../assets/images/category-tops.png";
import bottoms from "../../../assets/images/category-bottoms.png";
import dresses from "../../../assets/images/image12.webp";
import footwear from "../../../assets/images/footwear.png";
import accessories from "../../../assets/images/image8.png";
import bag from "../../../assets/images/category-accessories.png";

const categories = [
  {
    number: "01",
    name: "Tops",
    category: "tops",
    image: tops,
  },
  {
    number: "02",
    name: "Bottoms",
    category: "bottoms",
    image: bottoms,
  },
  {
    number: "03",
    name: "Dresses",
    category: "dresses",
    image: dresses,
  },
  {
    number: "04",
    name: "Footwear",
    category: "footwear",
    image: footwear,
  },
  {
    number: "05",
    name: "Accessories",
    category: "accessories",
    image: accessories,
  },
  {
    number: "06",
    name: "Bags",
    category: "bags",
    image: bag,
  },
];

const Section2 = () => {
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
          <Link key={item.category} to={`/shop?category=${item.category}`} className="home-category-card" >
            <div className="home-category-image">
              <img src={item.image} alt={item.name} />

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

export default Section2;