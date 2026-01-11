import React from 'react';
import '../style/homepage.css';
import homeimage from '../assets/homepage.jpeg';

const FeatureImage = () => {
  return (
    <div id="home" className="homepage-hero-fullpage">
      <div className="fullpage-image-wrapper">
        <img 
          src={homeimage} 
          alt="Poseidon Strategic Workspace" 
          className="hero-image-full"
        />
        {/* Subtle Gradient Overlay to make the image blend with the site */}
        <div className="image-overlay-gradient"></div>
      </div>
    </div>
  );
};

export default FeatureImage;