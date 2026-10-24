import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, } from "lucide-react";
import "./Section2.css";

const Section2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-section-two" id="contact-form">
      <div className="contact-section-two-container">
        <div className="contact-information">

          <h2>
            We'd love to
            <br />
            <em>hear from you.</em>
          </h2>

          <p className="contact-information-intro">
            Whether you have a question about an order,
            need help finding the perfect piece, or simply
            want to connect with us, our team is here to help.
          </p>

          <div className="contact-detail">
            <div className="contact-detail-icon">
              <Mail size={17} />
            </div>

            <div>
              <span>EMAIL</span>
              <a href="mailto:hello@stylematch.com">
                hello@stylematch.com
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon">
              <Phone size={17} />
            </div>

            <div>
              <span>PHONE</span>
              <a href="tel:+919876543210">
                +91 98765 43210
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon">
              <MapPin size={17} />
            </div>

            <div>
              <span>STUDIO</span>
              <p>
                Nagercoil, Tamil Nadu
                <br />
                India
              </p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon">
              <Clock size={17} />
            </div>

            <div>
              <span>WORKING HOURS</span>
              <p>
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit} >
              <div className="contact-form-heading">
                <span>SEND A MESSAGE</span>
                <h3>
                  How can we
                  <em> help?</em>
                </h3>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">
                    YOUR NAME
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">
                  SUBJECT
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What can we help with?"
                  value={formData.subject}
                  onChange={handleChange}
                  required />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  YOUR MESSAGE
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Tell us a little more..."
                  value={formData.message}
                  onChange={handleChange}
                  required/>
              </div>

              <button type="submit" className="contact-submit-button" >
                SEND MESSAGE
                <Send size={15} />
              </button>
            </form>
          ) : (
            <div className="contact-success">
              <div className="contact-success-icon">
                <CheckCircle size={30} />
              </div>

              <span>MESSAGE RECEIVED</span>

              <h3>
                Thank you for
                <em> reaching out.</em>
              </h3>

              <p>
                We've received your message and will get
                back to you as soon as possible.
              </p>

              <button type="button" onClick={() => setSubmitted(false)} className="contact-again-button" >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section2;