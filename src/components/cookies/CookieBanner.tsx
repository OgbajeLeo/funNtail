import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BannerProps {
  onManage: () => void;
}

const CookieBanner: React.FC<BannerProps> = ({ onManage }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");
    if (!saved) setVisible(true);
  }, []);

  const saveConsent = (consent: any) => {
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setVisible(false);

    if (consent.analytics) enableAnalytics();
    if (consent.marketing) enableMarketing();
  };

  const enableAnalytics = () => {
    // Load GTM script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-WVJQDLPQ";
    script.async = true;
    document.head.appendChild(script);

    // Consent Mode
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_update",
      analytics_storage: "granted",
    });
  };

  const enableMarketing = () => {
    // Meta Pixel (optional)
    const pixel = document.createElement("script");
    pixel.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID'); 
      fbq('track', 'PageView');
    `;
    document.head.appendChild(pixel);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 w-full bg-white shadow-xl border-t border-gray-200 z-50 p-6"
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            We use cookies
          </h3>
          <p className="text-gray-600 text-sm">
            We use cookies to improve your experience, analyse traffic, and
            personalise ads. You can accept all cookies, reject non-essential
            ones, or manage your preferences.
          </p>

          <div className="flex flex-wrap gap-3 justify-end">
            <button
              onClick={() =>
                saveConsent({
                  necessary: true,
                  analytics: false,
                  marketing: false,
                })
              }
              className="px-4 py-2 text-sm font-medium border rounded-lg hover:bg-gray-100"
            >
              Reject All
            </button>

            <button
              onClick={onManage}
              className="px-4 py-2 text-sm font-medium border rounded-lg hover:bg-gray-100"
            >
              Manage Preferences
            </button>

            <button
              onClick={() =>
                saveConsent({
                  necessary: true,
                  analytics: true,
                  marketing: true,
                })
              }
              className="px-4 py-2 text-sm font-medium bg-primary_color text-white rounded-lg hover:bg-emerald-700"
            >
              Accept All
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
