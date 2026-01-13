import React from 'react';
import '../style/ContactUs.css';

const ContactFooter = () => {
  return (
    <footer id="contact" className="poseidon-footer-wrap">
      <div className="contact-card-container">

        {/* EXECUTIVE HEADER */}
        <div className="card-identity">
          <h2 className="advisor-name-primary">Atharva Abhijeet Chitale</h2>
          <p className="advisor-credential">NISM Certified Research Analyst</p>
          <div className="divider-gold"></div>
        </div>

        {/* INTERACTIVE CONTACT CHANNELS */}
        <div className="contact-channels">

          <a href="mailto:planpotentia@gmail.com" className="channel-link">
            <span className="channel-icon">✉</span>
            <div className="channel-info">
              <small>Inquiries</small>
              <span>planpotentia@gmail.com</span>
            </div>
          </a>

          <a href="https://wa.me/918855047265" className="channel-link">
            <span className="channel-icon">✆</span>
            <div className="channel-info">
              <small>Phone / WhatsApp</small>
              <span>+91 88550 47265</span>
            </div>
          </a>

          <div className="channel-link static">
            <span className="channel-icon">📍</span>
            <div className="channel-info">
              <small>Presence</small>
              <span>India | Serving Global Clients</span>
            </div>
          </div>

        </div>

        {/* BRAND FOOTER */}
        <div className="footer-signature">
          <p>POSEIDON STRATEGIC WEALTH MANAGEMENT</p>
          <small>© {new Date().getFullYear()} All Rights Reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;