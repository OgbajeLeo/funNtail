// src/components/cookies/CookieProvider.tsx
import React, { useEffect, useState, createContext, useContext } from "react";
import CookieBanner from "./CookieBanner";
import CookiePreferencesModal from "./CookiePreferencesModal";

interface CookieContextType {
  openPreferences: () => void;
}

const CookieContext = createContext<CookieContextType>({
  openPreferences: () => {},
});

export const useCookies = () => useContext(CookieContext);

const CookieProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showPreferences, setShowPreferences] = useState(false);

  // Listen for the "enable analytics" event to load GTM dynamically
  useEffect(() => {
    const handleAnalyticsEnable = () => loadGTM();

    window.addEventListener("enable-analytics", handleAnalyticsEnable);
    return () =>
      window.removeEventListener("enable-analytics", handleAnalyticsEnable);
  }, []);

  const loadGTM = () => {
    const existing = document.querySelector("script[data-gtm]");
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-WVJQDLPQ";
    script.async = true;
    script.setAttribute("data-gtm", "true");
    document.head.appendChild(script);

    // Consent Mode Update
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_update",
      analytics_storage: "granted",
      ad_storage: "granted",
    });
  };

  const openPreferences = () => setShowPreferences(true);

  return (
    <CookieContext.Provider value={{ openPreferences }}>
      {children}

      <CookieBanner onManage={() => setShowPreferences(true)} />

      <CookiePreferencesModal
        open={showPreferences}
        onClose={() => setShowPreferences(false)}
      />
    </CookieContext.Provider>
  );
};

export default CookieProvider;
