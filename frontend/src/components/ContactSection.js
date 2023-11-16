// src/components/ContactSection.js
import React from 'react';
import '../styles/ContactSection.css';

function ContactSection() {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        
        <button type="submit">Submit</button>
      </form>
      {/* Additional content goes here */}
    </div>
  );
}

export default ContactSection;
