import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiShield } from "react-icons/fi";
import "./index.css";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="privacy-page">

      {/* HEADER */}
      <div className="privacy-header">

        <button
          className="privacy-back-btn"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft size={22} />
        </button>

        <div>
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">
            Last updated: May 19, 2026
          </p>
        </div>
      </div>

      {/* HERO */}
      {/* <div className="privacy-hero">

        <div className="privacy-icon">
          <FiShield />
        </div>

        <h2>Your Privacy Matters</h2>

        <p>
         flashCharge is committed to protecting your
          privacy while providing a seamless EV charging experience.
        </p>

      </div> */}

      {/* CONTENT */}
      <div className="privacy-card">

        <section className="privacy-section">
          <h3>1. About Our Service</h3>

          <p>
            Our EV charging platform allows users to plug in their vehicle,
            select a charging preference, make payments securely through
            Razorpay, and complete charging sessions without requiring
            account creation.
          </p>
        </section>

        <section className="privacy-section">
          <h3>2. Information We Collect</h3>

          <p>
            We collect limited technical and transaction-related information
            necessary to operate charging sessions, including:
          </p>

          <ul>
            <li>Charging station ID</li>
            <li>Connector ID</li>
            <li>Charging session details</li>
            <li>Charging duration</li>
            <li>Energy consumed</li>
            <li>Payment transaction status</li>
            <li>Basic device/browser information</li>
          </ul>

          <p>
            We do not store card details, banking passwords,
            CVV numbers, or UPI PINs.
          </p>
        </section>

        <section className="privacy-section">
          <h3>3. Payments</h3>

          <p>
            Payments are securely processed using Razorpay and related
            payment infrastructure providers. All sensitive payment
            information is handled directly by the payment gateway.
          </p>
        </section>

        <section className="privacy-section">
          <h3>4. How We Use Information</h3>

          <ul>
            <li>To process EV charging sessions</li>
            <li>To start and stop charging</li>
            <li>To generate invoices and summaries</li>
            <li>To improve charging reliability</li>
            <li>To monitor charger performance</li>
            <li>To prevent fraud or misuse</li>
            <li>To provide support services</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h3>5. Data Sharing</h3>

          <p>
            We do not sell personal information. Limited operational
            data may be shared with payment providers, cloud hosting
            providers, and charging infrastructure systems only when
            required for service delivery.
          </p>
        </section>

        <section className="privacy-section">
          <h3>6. Data Security</h3>

          <p>
            We use reasonable security measures to protect charging
            session and payment-related information. However,
            no internet-based service can guarantee complete security.
          </p>
        </section>

        <section className="privacy-section">
          <h3>7. Cookies & Technical Logs</h3>

          <p>
            Our website may use essential cookies and technical logs
            for performance, security monitoring, and session handling.
          </p>
        </section>

        <section className="privacy-section">
          <h3>8. Third-Party Services</h3>

          <p>
            Our platform may integrate with third-party services such as:
          </p>

          <ul>
            <li>Razorpay</li>
            <li>Cloud hosting providers</li>
            <li>EV charging backend systems</li>
          </ul>

          <p>
            These providers may process information according to
            their own privacy policies.
          </p>
        </section>

        <section className="privacy-section">
          <h3>9. Contact Us</h3>

          <div className="contact-box">
            <p><strong>flashCharger</strong></p>

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