import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 id="contactMe">Contact Me</h2>

      {/* Contact Container with Form and Details */}
      <div className="contact-container">
        {/* Contact Details Section */}
        <div className="contact-details">
          {/* Introductory Text */}
          <p className="intro-text">
            <h3 id="getInTouch">GET IN TOUCH!</h3>
            <span id="getInTouchText">Feel free to get in touch with me.</span>
          </p>
          <p>
            Mail me:{" "}
            <a href="mailto:adeniyi.idowu50@gmail.com">
              <FaEnvelope /> adeniyi.idowu50@gmail.com
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
              target="https://linkedin.com/in/idowu-a-60a317222"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn Profile
            </a>
            <p>
              {/* Download CV Button */}
              <a
                href="IdowuWebdevResume.pdf"
                download="IdowuWebdevResume.pdf"
                className="download-btn"
              >
                Download CV
              </a>
            </p>
          </p>
        </div>

        {/* Contact Form Section */}
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your message"></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
