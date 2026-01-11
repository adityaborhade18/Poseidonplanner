import React from 'react';
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className="poseidon-footer">
      <div className="footer-top-grid">
        
        {/* LEFT COLUMN: REGISTRATION & COMPLIANCE */}
        <div className="footer-column compliance">
          <h3 className="footer-label">Regulatory Disclosure</h3>
          <p>Registered Under Udyam And Shop Act</p>
          <p className="gst-no">GST No. 27CNTPC5892G1ZF</p>
          <div className="compliance-line"></div>
        </div>

        {/* MIDDLE COLUMN: QUICK LINKS */}
        <div className="footer-column links">
          <h3 className="footer-label">Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-advisor">About Advisor</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#terms">T&C</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* RIGHT COLUMN: CONTACT DETAILS */}
        <div className="footer-column contact">
          <h3 className="footer-label">Contact Us</h3>
          <p>Email: <a href="mailto:planpotentia@gmail.com">planpotentia@gmail.com</a></p>
          <p>Phone / WhatsApp: <a href="tel:+918855047265">+91 88550 47265</a></p>
          <p>Location: India | Serving Global Clients</p>
        </div>
      </div>

      {/* BOTTOM BAR: DEVELOPER CREDITS & COPYRIGHT */}
      <div className="footer-bottom-bar">
        <div className="developer-credit">
          Developed by <a href="https://www.linkedin.com/in/aayush-panchal-6731082a0/" target="_blank" rel="noreferrer">Aayush Panchal</a>
        </div>
        <div className="copyright-text">
          © {new Date().getFullYear()} POSEIDON Strategic Wealth Management. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;