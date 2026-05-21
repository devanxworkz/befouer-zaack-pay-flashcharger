import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiRefreshCw } from "react-icons/fi";
import "./index.css";

export default function RefundCancellationPolicy() {
  const navigate = useNavigate();

  return (
    <div className="refund-page">

      {/* HEADER */}
      <div className="refund-header">

        <button
          className="refund-back-btn"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft size={22} />
        </button>

        <div>
          <h1 className="refund-title">
            Refund & Cancellation Policy
          </h1>

          <p className="refund-subtitle">
            Last updated: May 19, 2026
          </p>
        </div>

      </div>

      {/* HERO */}
      {/* <div className="refund-hero">

        <div className="refund-icon">
          <FiRefreshCw />
        </div>

        <h2>Refund & Cancellation</h2>

        <p>
          This policy explains how cancellations and refunds
          are handled for EV charging sessions on Drivault /
          Rivot Motors.
        </p>

      </div> */}

      {/* CONTENT */}
      <div className="refund-card">

        <section className="refund-section">
          <h3>1. Charging Session Payments</h3>

          <p>
            Users are charged based on the selected charging
            preference before the charging session begins.
          </p>

          <p>
            Payments are securely processed through Razorpay.
          </p>
        </section>

        <section className="refund-section">
          <h3>2. Cancellation Before Charging Starts</h3>

          <p>
            If a charging session fails to start due to:
          </p>

          <ul>
            <li>Charging station issues</li>
            <li>Network or backend failures</li>
            <li>Payment verification problems</li>
            <li>User cancellation before charging begins</li>
          </ul>

          <p>
            Eligible refunds may be processed automatically
            or manually after verification.
          </p>
        </section>

        <section className="refund-section">
          <h3>3. Partial Charging Sessions</h3>

          <p>
            In some situations, charging may stop before
            completion due to:
          </p>

          <ul>
            <li>Power interruptions</li>
            <li>Vehicle-side charging limitations</li>
            <li>Connector removal</li>
            <li>Technical faults</li>
          </ul>

          <p>
            Refunds for unused charging amounts may be provided
            after reviewing charging session records.
          </p>
        </section>

        <section className="refund-section">
          <h3>4. Non-Refundable Situations</h3>

          <p>
            Refunds may not be provided in cases involving:
          </p>

          <ul>
            <li>Improper connector usage</li>
            <li>User negligence</li>
            <li>Vehicle incompatibility</li>
            <li>Manual interruption by the user after charging starts</li>
            <li>Violations of platform terms</li>
          </ul>
        </section>

        <section className="refund-section">
          <h3>5. Refund Processing Time</h3>

          <p>
            Approved refunds are generally processed within
            5 to 10 business days depending on the payment
            provider and banking network.
          </p>
        </section>

        <section className="refund-section">
          <h3>6. Contact for Refund Support</h3>

          <div className="refund-contact-box">

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