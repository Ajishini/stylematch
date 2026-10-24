import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, } from "lucide-react";
import "./Section5.css";

const Section5 = () => {
  const styleOptions = [
    {
      number: "01",
      title: "Minimal",
    },
    {
      number: "02",
      title: "Casual",
    },
    {
      number: "03",
      title: "Elegant",
    },
    {
      number: "04",
      title: "Street",
    },
  ];

  return (
    <section className="style-discovery-section">
      <div className="style-discovery-container">

        <h2>
          Your style.
          <br />
          <em>Your way.</em>
        </h2>

        <p className="style-discovery-description">
          Fashion should feel personal.
          Discover pieces that match your taste,
          mood, and everyday life.
        </p>

        <div className="style-discovery-options">
          {styleOptions.map((style) => (
            <Link to="/style-finder" className="style-discovery-option" key={style.number} >
              <span>{style.number}</span>
              <h3>{style.title}</h3>
              <ArrowRight size={18} />
            </Link>
          ))}
        </div>

        {/* <Link to="/style-finder" className="style-discovery-button" >
          <Sparkles size={16} />
          Find My Style
          <ArrowRight size={17} />
        </Link> */}

        <div className="style-discovery-background">
          STYLE
        </div>
      </div>
    </section>
  );
};

export default Section5;