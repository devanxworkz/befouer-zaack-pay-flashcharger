import React from "react";
import "./error.css";
import {
  FiArrowLeft,
  FiRefreshCw,
  FiHeadphones,
  FiShield,
} from "react-icons/fi";
import { IoWifiOutline } from "react-icons/io5";

export default function ErrorPage() {
  return (
    <div className="error-page">

  {/* TOP BAR */}
 <div className="error-topbar">

  <button className="back-btn">
    <span className="material-symbols-outlined">
      arrow_back
    </span>
  </button>

  <h2 className="topbar-title">
    Charging Status
  </h2>

</div>

  {/* ERROR CARD */}
  <div className="error-card">

    <div className="error-icon-wrap">
      <div className="error-icon-circle">
        <span className="material-symbols-outlined">
          wifi_off
        </span>
      </div>
    </div>

    <h1 className="error-title">Connection Lost</h1>

    <p className="error-subtitle">
      We’ve encountered a technical glitch while connecting to the charger.
      This often happens due to a signal timeout.
    </p>

    <div className="fix-card">

      <h4>HOW TO FIX THIS</h4>

      <div className="fix-step">
        <div className="step-number">1</div>
        <p>
          Unplug the charging cable from your vehicle.
        </p>
      </div>

      <div className="fix-step">
        <div className="step-number">2</div>
        <p>
          Wait 10 seconds for the system to reset.
        </p>
      </div>

      <div className="fix-step">
        <div className="step-number">3</div>
        <p>
          Re-scan the QR code to start a new session.
        </p>
      </div>

      {/* <button className="retry-btn">
        <span className="material-symbols-outlined">
          refresh
        </span>
        Retry Connection
      </button> */}

    </div>
  </div>

  {/* WALLET CARD */}
  <div className="wallet-card">

    <div className="wallet-top">
      <span className="material-symbols-outlined shield-icon">
        verified_user
      </span>

      <h3>Financial Assurance</h3>
    </div>

    <p>
      Don’t worry, your wallet will be automatically credited
      for any unused balance. No extra fees will apply.
    </p>

    <button className="wallet-btn">
      View Wallet
      <span className="material-symbols-outlined">
        arrow_forward
      </span>
    </button>

  </div>

  {/* BOTTOM BUTTONS */}
  <div className="bottom-actions">

    <button className="support-btn">
      <span className="material-symbols-outlined">
        support_agent
      </span>
      Contact Support
    </button>

    <button className="home-btn">
      Go Back Home
    </button>

  </div>

</div>
  );
}