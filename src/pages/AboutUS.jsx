import React from 'react';
import '../style/AboutUS.css';

const ProfessionalDetails = () => {
  const expertiseItems = [
    "Equity Investing (Short, Positional & Long-term)",
    "Metal Investments (Gold, Silver & related instruments)",
    "Small-Scale Business & Opportunity Analysis",
    "Capital Conversion & Money Optimization Strategies",
    "Business Metrics, Valuation & Financial Health Analysis",
    "Diversification through alternative investment ideas"
  ];

  return (
    <div className="poseidon-full-layout">
      
      {/* --- SECTION 1: FEES & CHARGES (Formal Table) --- */}
      <section className="detail-section">
        <h2 className="premium-topic">Fees & Charges</h2>
        <div className="table-boundary">
          <table className="formal-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Charges</th>
                <th>Inclusions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-gold">
                  Investment Planning
                  <div className="sub-detail">(Principal Amount &gt; 5 Lakh INR)</div>
                </td>
                <td className="text-center">
                  <div className="fee-primary">1.5% - 2.5% AUA</div>
                  <div className="fee-divider">OR</div>
                  <div className="fee-flat">Flat INR 75,000</div>
                  <div className="sub-detail">(Time Frame &lt; 1.5 Years)</div>
                </td>
                <td>
                  Investment consultancy across Financial & Non-Financial Asset Classes. 
                  Fees regulated under SEBI (Investment Advisers) Regulations.
                </td>
              </tr>
              <tr>
                <td className="font-bold text-gold">Startup Assistance</td>
                <td className="text-center">3–5% Advisory Equity</td>
                <td>
                  Strategic & Management Consulting under a separate dedicated agreement.
                  <div className="sub-detail">(Subject to Vesting & Company Policies)</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- SECTION 2: INVESTMENT PHILOSOPHY (Bespoke UI) --- */}
      <section className="detail-section">
        <h2 className="premium-topic">Investment Philosophy</h2>
        <div className="philosophy-bespoke-container">
          <div className="philosophy-quote">
            "My advisory approach is grounded in research-backed conviction, not speculation."
          </div>
          <div className="philosophy-pillars">
            <div className="pillar-item">
              <span className="pillar-bullet"></span>
              <p>Alignment with individual risk appetite and financial objectives.</p>
            </div>
            <div className="pillar-item">
              <span className="pillar-bullet"></span>
              <p>Capital preservation as a non-negotiable principle.</p>
            </div>
            <div className="pillar-item">
              <span className="pillar-bullet"></span>
              <p>Adaptive strategies responding to market conditions.</p>
            </div>
          </div>
          <p className="disclaimer-note">** Returns are market-driven and non-guaranteed; transparency remains central.</p>
        </div>
      </section>

      {/* --- SECTION 3: AREAS OF EXPERTISE (Professional Cards) --- */}
      <section className="detail-section">
        <h2 className="premium-topic">Areas of Expertise</h2>
        <div className="expertise-interactive-grid">
          {expertiseItems.map((item, index) => (
            <div key={index} className="expertise-card-pro">
              <div className="card-top-accent"></div>
              <span className="card-icon">◈</span>
              <p className="card-text">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfessionalDetails;