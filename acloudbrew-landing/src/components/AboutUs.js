import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>☕ About Us</h2>
      <p>Fuelled by caffeine. Driven by code.</p>
      <p>At A Cloud Brew Studios, we believe great software is like a great cup of coffee: ☕ crafted with care, ☁️ steeped in depth, and ⚙️ designed to energize.</p>
      <p>We're a collective of engineers, architects, and dreamers who came together to create something better than the average dev shop. We wanted to brew meaningful software—not just pour out lines of code. So we started this studio with one mission:</p>
      <blockquote>To blend tech excellence with warmth, clarity, and purpose.</blockquote>
      <hr />
      <section>
        <h3>🤎 Small Studio, Big Impact</h3>
        <p>We're proudly independent, boutique, and intentionally small. That means we focus deeply on a few projects at a time, bringing senior-level attention and strategic insight to every sprint, every architecture decision, every pull request.</p>
        <p>No burnt coffee. No burnt-out developers. Just intentional, high-quality builds.</p>
      </section>
      <hr />
      <section>
        <h3>🌍 Globally Brewed</h3>
        <p>Our team spans Latin America and Europe, operating across time zones to deliver faster and work smarter. This global blend brings you the best of both worlds:</p>
        <ul>
          <li>✨ The agility of a startup,</li>
          <li>🧠 The expertise of a seasoned dev team, and</li>
          <li>💬 The warmth of people who really give a damn.</li>
        </ul>
      </section>
      <hr />
      <section>
        <h3>💡 What We Believe</h3>
        <ul>
          <li>Innovation should be accessible.</li>
          <li>Automation should be human-centered.</li>
          <li>Tech should feel like magic—but work like clockwork.</li>
          <li>You deserve a dev team that cares as much as you do.</li>
        </ul>
      </section>
      <hr />
      <p>Whether you're building your first MVP, scaling your cloud architecture, or integrating AI into your workflows—we're here to make it smooth, efficient, and maybe even a little fun.</p>
      <p>Brewed with passion. Served with purpose. That's A Cloud Brew Studios.</p>
      <div className="cta-buttons">
        <button>👉 Work With Us</button>
        <button>👉 Follow Our Journey</button>
      </div>
    </div>
  );
};

export default AboutUs; 