import React from 'react';
import '../style/TC.css';

const TermsAndConditions = () => {
  return (
    <div id="terms" className="poseidon-legal-full-bg">
      <section className="legal-container-professional">
        <div className="legal-header">
          <h2 className="legal-main-topic">Terms & Conditions</h2>
          <div className="legal-accent-line"></div>
        </div>

        <div className="legal-content-grid">
          {/* SECTION 1: GENERAL DISCLOSURE */}
          <div className="legal-block">
            <div className="block-number">01</div>
            <div className="block-content">
              <h3>Market Risk & Performance</h3>
              <p>Investments in securities markets are subject to market risks. Past performance is not indicative of future returns. Returns mentioned are indicative and not assured. This document is for informational purposes only and should not be construed as an offer or guarantee of returns. Clients are advised to independently evaluate risks before investing.</p>
            </div>
          </div>

          {/* SECTION 2: ADVISORY FEES */}
          <div className="legal-block">
            <div className="block-number">02</div>
            <div className="block-content">
              <h3>Advisory Fee Structure</h3>
              <p>The fee is not linked to investment execution, investment amount, or investment performance. The Client shall pay an advisory fee calculated at 1.5% per annum of Assets Under Advice (AUA), subject to a maximum of 2.5% per annum, in accordance with SEBI (Investment Advisers) Regulations. The fee shall be charged quarterly/annually.</p>
            </div>
          </div>

          {/* SECTION 3: TRANSACTION ADVISORY */}
          <div className="legal-block">
            <div className="block-number">03</div>
            <div className="block-content">
              <h3>Transaction Advisory</h3>
              <p>For specific investment opportunities requiring detailed evaluation, due diligence, structuring, and documentation support, the Advisor may charge a one-time fixed transaction advisory fee which will be deal dependent.</p>
            </div>
          </div>

          {/* SECTION 4: COMPENSATION */}
          <div className="legal-block">
            <div className="block-number">04</div>
            <div className="block-content">
              <h3>Compensation Limitations</h3>
              <p>The Advisor shall not receive any compensation linked to investment performance, returns, profits, or upside of any investment made pursuant to this agreement.</p>
            </div>
          </div>

          {/* SECTION 5: STARTUP CONSULTING */}
          <div className="startup-notice">
            <h3 className="startup-title">Startup Consulting Services Disclosure</h3>
            <div className="startup-grid">
              <div className="startup-point">
                <p>The Advisor may hold equity in the Company while separately providing investment advisory services to clients. Such interest is disclosed to all relevant parties, and the Advisor shall act in the best interest of advisory clients at all times.</p>
              </div>
              <div className="startup-point">
                <p>The Poseidon Wealth Planners as the advisory partner shall be entitled to 5% of the Company’s net profits as consideration for ongoing strategic and operational involvement. Such entitlement arises from the Partner’s role within the Company and is independent of any investment advisory services provided to third parties.</p>
              </div>
              <div className="startup-point">
                <p>Startup assistance services are independent of investment advisory services. Advisory equity is granted solely for consulting services rendered and is not contingent upon fundraising, capital introduction, investment execution, or investor returns. Any potential conflict of interest is disclosed to clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;