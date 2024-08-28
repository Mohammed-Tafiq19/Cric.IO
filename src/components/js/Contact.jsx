// Contact.js

import React from 'react';
import '../css/Contact.css'; // Import your CSS file for styling

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            {/* <p>123 Cricket Street, Cityville, Country</p> */}
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>+91 8917371253</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>mohammadtafiq3@gmail.com</p>
          </div>
        </div>
        <form action="https://formspree.io/f/xgejdjlj"
            method="POST"className="contact-form">
          <input type="text" name="username" placeholder="Your Name" required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea  name="message" placeholder="Your Message" required></textarea>
          <button type="submit" value="Submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
