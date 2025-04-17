import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/contact", formData);
      setStatusMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.error(error);
      setStatusMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 id="contactMe">Contact Me</h2>

      {/* Contact Container with Form and Details */}
      <div className="contact-container">
        {/* Contact Details Section */}
        <div className="contact-details">
          <p className="intro-text">
            <h3 id="getInTouch">GET IN TOUCH!</h3>
            <span id="getInTouchText">Feel free to get in touch with me.</span>
          </p>
          <p>
            Mail me:{" "}
            <a href="mailto:adeniyi.idowu500@gmail.com">
              <FaEnvelope /> adeniyi.idowu500@gmail.com
            </a>
          </p>
          <p>
            Call me:{" "}
            <a href="tel:4164020633">
              <FaPhone /> (416)402-0633
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/idowu-a-60a317222"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn Profile
            </a>
          </p>
          <p>
            <a
              href="IdowuWebdevResume.pdf"
              download="IdowuWebdevResume.pdf"
              className="download-btn"
            >
              Download CV
            </a>
          </p>
        </div>

        {/* Contact Form Section */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
          ></textarea>

          <button type="submit">Send</button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
