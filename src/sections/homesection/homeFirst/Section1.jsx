import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./Section1.css";
import heroVideo from "../../../assets/videos/hero.mp4";

const Section1 = () => {
  return (
    <section className="home-hero">
      <div className="home-hero-video">
        <video src={heroVideo} autoPlay muted loop playsInline />
      </div>

      <div className="home-hero-overlay"></div>

      <div className="home-hero-content">

        <h1>
          Style that
          <br />
          feels <em>like you.</em>
        </h1>

        <p>
          Discover fashion curated around your personality,
          <br />
          occasion, and everyday style.
        </p>

        <div className="home-hero-actions">
          <Link to="/shop" className="home-hero-primary" >
            Shop Collection
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default Section1;