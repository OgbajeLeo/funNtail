import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  lazy } from "react";
import NotFound from "../pages/NotFound";
import AboutPage from "../pages/aboutPage";
import ContactPage from "../pages/contactPage";
import DownloadPage from "../pages/downloadPage";
import ScrollToTop from "../components/ScrollToTop";
import TermsPage from "../pages/termsPage";
import PrivacyPage from "../pages/privacyPage";
import SafetyPage from "../pages/safetyPage";
import FaqSection from "../pages/FaqSection";


const LandingPage = lazy(() => import("../pages/landingPage"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/faqs" element={<FaqSection />} />

          <Route path="/*" element={<NotFound />} />
          {/* Protected admin route */}
          {/* <Route element={<ProtectedRoute />}>
                  <Route path="/admin" element={<Dashboard />} />
                </Route> */}
        </Routes>
    </BrowserRouter>
  );
}
