import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainFlow from "./MainFlow";
import SessionSummary from "./components/SessionSummary";
import ThankYou from "./components/ThankYou";
import ChargingPreferences from "./components/ChargingPreferences";
import ConnectionStatus from "./components/ConnectionStatus";
import ChargerStartandStop from "./components/ChargerStartandStop";
import { ChargerProvider } from "./ChargerContext";
import ChargingCompleted from "./components/ChargingCompleted";
import ErrorPageFist from "./components/ErrorPageFist";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsCondition from "./components/TermsCondition";
import ContactUs from "./components/ContactUs";
import RefundCancellation from "./components/RefundCancellation";
import WalletTest from "./components/WalletTest";

export default function App() {
  return (
    <ChargerProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/:chargerId/:connectorId" element={<MainFlow />} />

          <Route path="/:chargerId/:connectorId/preparing" element={<ConnectionStatus />} />

          <Route path="/:chargerId/:connectorId/preferences" element={<ChargingPreferences />} />

        {/* ✅ ADD sessionId */}
  <Route path="/:chargerId/:connectorId/charging/:sessionId" element={<ChargerStartandStop />} />
  
  {/* ✅ ADD sessionId */}
  <Route path="/:chargerId/:connectorId/completed/:sessionId" element={<ChargingCompleted />} />

  {/* ✅ ADD sessionId */}
  <Route path="/:chargerId/:connectorId/summary/:sessionId" element={<SessionSummary />} />

          <Route path="/:chargerId/:connectorId/thank-you" element={<ThankYou />} />

          <Route path="/:chargerId/:connectorId/error" element={<ErrorPageFist />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/terms-condition" element={<TermsCondition />} />

          <Route path="/refund-policy" element={<RefundCancellation />} />

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/wallet-test" element={<WalletTest />}/>
          

        </Routes>
      </BrowserRouter>
    </ChargerProvider>
  );
}