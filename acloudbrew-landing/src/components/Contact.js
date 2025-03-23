import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>📬 Let's Brew Something Brilliant Together</h2>
      <p>Whether you're launching a product, scaling infrastructure, or exploring AI-powered solutions, we're here to bring your ideas to life—with clarity, craftsmanship, and care.</p>
      <p>Reach out. Let's build the future, one brew at a time.</p>
      <hr />
      <h3>🏢 Organization Name</h3>
      <p><strong>A Cloud Brew Studios</strong></p>
      <p><strong>Legal Entity Name:</strong> ACLOUDBREW STUDIOS LLC</p>
      <p><strong>Business Name in New Mexico:</strong> No — we operate under our registered LLC name.</p>
      <hr />
      <h3>📍 Principal Place of Business</h3>
      <address>
        1209 Mountain Road Pl NE<br />
        Ste N<br />
        Albuquerque, NM 87110<br />
        United States
      </address>
      <hr />
      <h3>📫 Contact Us</h3>
      <p>📧 Email: acloudbrew@proton.me</p>
      <p>📞 Phone: +1 (707) 369-1900</p>
      <hr />
      <h3>💬 Ready to get started?</h3>
      <div className="cta-buttons">
        <button>📅 Book a Free Discovery Call</button>
        <button>📄 Request a Custom Proposal</button>
        <button>📥 Send Us a Message</button>
      </div>
    </div>
  );
};

export default Contact; 