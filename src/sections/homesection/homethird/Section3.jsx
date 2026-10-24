import React from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowUpRight, ShoppingBag } from "lucide-react";
import "./Section3.css";
import dresses from "../../../assets/images/dresses.png";
import jumpsuits from "../../../assets/images/jumpsuits.png";
import footwear from "../../../assets/images/image11.jpg";
import bag from "../../../assets/images/bags.jpg";

const products = [
  {
    id: 1,
    name: "Floral Midi Dress",
    category: "DRESSES",
    price: "₹2,499",
    oldPrice: "₹3,499",
    discount: "29% OFF",
    image: dresses,
  },
  {
    id: 2,
    name: "Tailored Jumpsuit",
    category: "JUMPSUITS",
    price: "₹3,299",
    oldPrice: "₹4,299",
    discount: "23% OFF",
    image: jumpsuits,
  },
  {
    id: 3,
    name: "Strappy Heels",
    category: "FOOTWEAR",
    price: "₹2,699",
    oldPrice: "₹3,499",
    discount: "23% OFF",
    image: footwear,
  },
  {
    id: 4,
    name: "Leather Shoulder Bag",
    category: "BAGS",
    price: "₹2,999",
    oldPrice: "₹4,199",
    discount: "29% OFF",
    image: bag,
  },
];

const Section3 = () => {
  return (
    <section className="home-trending">
      <div className="home-trending-heading">
        <div>
          <h2> Trending <em>now.</em> </h2>
          <p> Fresh pieces worth adding to your wardrobe. </p>
        </div>

        <Link to="/shop">
          Shop All
          <ArrowUpRight size={17} />
        </Link>
      </div>

      <div className="home-product-grid">
        {products.map((product) => (
          <div className="home-product-card" key={product.id} >
            <Link to={`/product/${product.id}`} className="home-product-image" >
              <img src={product.image} alt={product.name} />

              <span className="home-product-discount">
                {product.discount}
              </span>

              <button className="home-product-wishlist" aria-label={`Add ${product.name} to wishlist`} onClick={(event) => event.preventDefault()} >
                <Heart size={18} />
              </button>

              <div className="home-product-quick">
                <ShoppingBag size={15} />
                Quick Shop
              </div>
            </Link>

            <Link to={`/product/${product.id}`} className="home-product-info" >
              <span>
                {product.category}
              </span>

              <h3>
                {product.name}
              </h3>

              <div className="home-product-price">
                <strong>
                  {product.price}
                </strong>

                <del>
                  {product.oldPrice}
                </del>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;