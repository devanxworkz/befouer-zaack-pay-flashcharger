import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiFileText } from "react-icons/fi";
import "./index.css";

export default function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <div className="terms-page">

      {/* HEADER */}
      <div className="terms-header">

        <button
          className="terms-back-btn"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft size={22} />
        </button>

        <div>
          <h1 className="terms-title">Terms & Conditions</h1>
          <p className="terms-subtitle">
            Last updated: May 19, 2026
          </p>
        </div>

      </div>

      {/* HERO */}
      {/* <div className="terms-hero">

        <div className="terms-icon">
          <FiFileText />
        </div>

        <h2>Usage Terms</h2>

        <p>
          By using the Drivault / Rivot Motors EV charging platform,
          you agree to the following terms and conditions.
        </p>

      </div> */}

      {/* CONTENT */}
      <div className="terms-card">

        <section className="terms-section">
          <h3>1. Acceptance of Terms</h3>

          <p>
            By accessing or using our EV charging platform,
            you agree to comply with these Terms & Conditions.
            If you do not agree, please do not use the service.
          </p>
        </section>

        <section className="terms-section">
          <h3>2. EV Charging Service</h3>

          <p>
            Our platform enables users to:
          </p>

          <ul>
            <li>Connect compatible EV vehicles to charging stations</li>
            <li>Select charging preferences</li>
            <li>Make payments through Razorpay</li>
            <li>Start and complete charging sessions</li>
            <li>View charging summaries and invoices</li>
          </ul>
        </section>

        <section className="terms-section">
          <h3>3. User Responsibilities</h3>

          <ul>
            <li>Ensure the charging connector is properly plugged in</li>
            <li>Use compatible vehicles and charging equipment</li>
            <li>Monitor the charging session when necessary</li>
            <li>Disconnect the connector safely after charging</li>
            <li>Follow all local electrical and safety regulations</li>
          </ul>
        </section>

        <section className="terms-section">
          <h3>4. Payments</h3>

          <p>
            All payments are securely processed through Razorpay.
            Users must ensure sufficient balance or payment authorization
            before initiating charging sessions.
          </p>

          <p>
            Charging may not begin if payment verification fails.
          </p>
        </section>

        <section className="terms-section">
          <h3>5. Charging Estimates</h3>

          <p>
            Estimated charging time, range, and cost shown on the platform
            are approximate values and may vary depending on:
          </p>

          <ul>
            <li>Vehicle battery condition</li>
            <li>Battery temperature</li>
            <li>Charging station performance</li>
            <li>Power supply conditions</li>
            <li>Vehicle charging limitations</li>
          </ul>
        </section>

        <section className="terms-section">
          <h3>6. Service Availability</h3>

          <p>
            We strive to provide uninterrupted charging services.
            However, availability may be affected by maintenance,
            internet connectivity, power outages, or hardware issues.
          </p>
        </section>

        <section className="terms-section">
          <h3>7. Limitation of Liability</h3>

          <p>
            Drivault / Rivot Motors shall not be liable for:
          </p>

          <ul>
            <li>Vehicle damage caused by improper usage</li>
            <li>Charging interruptions or delays</li>
            <li>Power failures or network issues</li>
            <li>Indirect or consequential damages</li>
            <li>User negligence during charging sessions</li>
          </ul>
        </section>

        <section className="terms-section">
          <h3>8. Prohibited Activities</h3>

          <ul>
            <li>Attempting unauthorized access to the platform</li>
            <li>Misusing charging equipment</li>
            <li>Interfering with charging operations</li>
            <li>Using the platform for illegal activities</li>
          </ul>
        </section>

        <section className="terms-section">
          <h3>9. Modifications</h3>

          <p>
            We may update or modify these Terms & Conditions
            at any time without prior notice.
          </p>
        </section>

        <section className="terms-section">
          <h3>10. Contact Information</h3>

          <div className="terms-contact-box">

            <p><strong>Rivot Motors</strong></p>

            <p>
              1st Cross, 1st Main,<br />
              Sadashiv Nagar, Belagavi, India
            </p>

            <p>Email: support@flashcharge.com</p>

            <p>Phone: +91 8988984646</p>

          </div>
        </section>

      </div>

    </div>
  );
}