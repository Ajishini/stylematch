import React from "react";
import { Sparkles, Layers3, Heart, ArrowUpRight, } from "lucide-react";
import "./Section3.css";

const Section3 = () => {
  const features = [
    {
      number: "01",
      icon: Sparkles,
      title: "Curated",
      text: "Thoughtfully selected pieces that make discovering your next favorite look easier.",
    },
    {
      number: "02",
      icon: Layers3,
      title: "Connected",
      text: "Build complete looks by bringing complementary fashion pieces together.",
    },
    {
      number: "03",
      icon: Heart,
      title: "Personal",
      text: "Fashion should reflect you, your mood, and the way you want to express yourself.",
    },
  ];

  return (
    <section className="about-section-three">
      <div className="about-section-three-header">
        <div>
          <h2>
            Designed for
            <br />
            <em>your style.</em>
          </h2>
        </div>

      </div>

      <div className="about-section-three-grid">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div className="about-feature-card" key={feature.number} >
              <div className="about-feature-top">
                <span className="about-feature-number">
                  {feature.number}
                </span>

                <div className="about-feature-icon">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
              </div>

              <div className="about-feature-content">
                <h3>{feature.title}</h3>

                <p>{feature.text}</p>
              </div>

              <div className="about-feature-bottom">
                <span>STYLEMATCH</span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="about-section-three-statement">
        <span>OUR APPROACH</span>

        <div className="about-section-three-statement-line"></div>

        <strong>
          FIND IT.
          <em> MATCH IT.</em>
          WEAR IT.
        </strong>
      </div>
    </section>
  );
};

export default Section3;