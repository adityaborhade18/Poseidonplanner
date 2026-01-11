import React from 'react';
import '../style/AboutAdvisor.css';
import myphoto from '../assets/myphoto.png'; // Make sure the path is correct

const AboutAdvisor = () => {
  return (
    <section className="advisor-section">
      <div className="advisor-container">
        
        {/* LEFT SIDE: PROFESSIONAL IMAGE */}
        <div className="advisor-image-wrapper">
          <div className="image-frame">
            <div className="gold-backing"></div>
            {/* FIX: Removed quotes and used curly braces for the imported variable */}
            <img 
              src={myphoto} 
              alt="NISM Certified Advisor" 
              className="advisor-portrait" 
            />
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="advisor-content">
          <h2 className="advisor-title">About Advisor</h2>
          <p className="advisor-desc">
            I am a <span className="gold-text">NISM Certified Research Analyst</span> with 
            over 5 years of active market experience, catering exclusively 
            to premium clientele seeking disciplined, research-driven, and 
            customized investment solutions.
          </p>

          <div className="highlight-box">
            <h4 className="highlight-label">Experience Highlights</h4>
            <ul className="highlight-list">
              <li>5+ years of real-market trading & investing experience</li>
              <li>Advised Indian & international clients (including Dubai)</li>
              <li>Performance averaging <span className="gold-text">20–40% p.a.</span></li>
              <li>Expertise across different asset classes</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutAdvisor;