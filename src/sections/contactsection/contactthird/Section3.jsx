import React from "react";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import "./Section3.css";

const Section3 = () => {
  return (
    <section className="contact-section-three">
      <div className="contact-section-three-container">
        <div className="contact-location-content">

          <h2>
            Come visit
            <br />
            <em>StyleMatch.</em>
          </h2>

          <p className="contact-location-description">
            Our studio is where fashion, creativity and
            thoughtful styling come together. We'd love
            to welcome you.
          </p>

          <div className="contact-location-detail">
            <div className="contact-location-icon">
              <MapPin size={18} />
            </div>

            <div>
              <span>OUR STUDIO</span>

              <p>
                Nagercoil, Tamil Nadu
                <br />
                India
              </p>
            </div>
          </div>

          <div className="contact-location-detail">
            <div className="contact-location-icon">
              <Clock size={18} />
            </div>

            <div>
              <span>VISITING HOURS</span>

              <p>
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Nagercoil%2C%20Tamil%20Nadu%2C%20India"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-directions-button"
          >
            GET DIRECTIONS
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="contact-map-wrapper">
          <div className="contact-map-header">
            <div>
              <span>LOCATION</span>

              <h3>
                Nagercoil,
                <em> India</em>
              </h3>
            </div>

            <div className="contact-map-pin">
              <MapPin size={16} />
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="StyleMatch location"
              src="https://www.google.com/maps?q=Nagercoil,Tamil%20Nadu,India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;