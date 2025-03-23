import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Brewed for the Future of Tech</h1>
        <p>At A Cloud Brew Studios, we craft high-quality software solutions with the precision of seasoned engineers and the care of artisan brewers. From fullstack development to cloud-native architecture and AI-driven automations—every line of code is thoughtfully brewed to elevate your business.</p>
        <div className="hero-buttons">
          <button>☕ Get a Consultation</button>
          <button>📚 See Our Services</button>
        </div>
      </div>
      <div className="hero-visual">
        {/* Optional visual prompt can be added here */}
      </div>
    </div>
  );
};

export default HeroBanner; 