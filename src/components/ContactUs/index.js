import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

import "./index.css";

export default function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="contact-page">

      {/* HEADER */}
      <div className="contact-header">
        <button
          className="contact-back-btn"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft size={22} />
        </button>

        <h1 className="contact-title">
          Contact Us
        </h1>
      </div>

      {/* CARD */}
      <div className="contact-card">

        <div className="brand-section">
          <div className="brand-glow"></div>
          <h2>flashCharger</h2>
          <p>Premium EV Charging Experience</p>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <FiMapPin />
          </div>

          <div>
            <h4>Address</h4>
            <p>
              1st Cross, 1st Main, <br />
              Sadashiv Nagar, Belagavi, India
            </p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <FiMail />
          </div>

          <div>
            <h4>Email</h4>
            <p>support@flashcharge.com</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <FiPhone />
          </div>

          <div>
            <h4>Phone</h4>
            <p>+91 8988984646</p>
          </div>
        </div>

      </div>

    </div>
  );
}