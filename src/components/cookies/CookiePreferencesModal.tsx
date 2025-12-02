import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

const CookiePreferencesModal: React.FC<Props> = ({ open, onClose }) => {
  const [prefs, setPrefs] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");
    if (saved) setPrefs(JSON.parse(saved));
  }, []);

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));

    // Trigger GTM event in case Analytics is toggled ON later
    if (prefs.analytics) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "consent_update",
        analytics_storage: "granted",
      });
    }

    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-full space-y-4"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Cookie Preferences
            </h2>

            <p className="text-gray-600 text-sm">
              Choose which cookies you want to allow. You can change these
              anytime.
            </p>

            {[
              {
                key: "necessary",
                label: "Strictly Necessary Cookies",
                desc: "Required for security and essential functionality.",
                locked: true,
              },
              {
                key: "analytics",
                label: "Analytics Cookies",
                desc: "Help us understand how users use FunNTail.",
              },
              {
                key: "marketing",
                label: "Marketing Cookies",
                desc: "Used to personalise advertising on Google & Meta.",
              },
            ].map((item) => (
              <div
                key={item.key}
                className="flex justify-between items-center p-3 border rounded-lg"
              >
                <div>
                  <h4 className="font-medium">{item.label}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>

                <div
                  className={`w-5 h-5 border-2 rounded cursor-pointer flex items-center justify-center transition-all duration-200
    ${item.locked ? "opacity-50 cursor-not-allowed" : ""}
    ${
      prefs[item.key as keyof typeof prefs]
        ? "bg-[#1abc9c] border-[#1abc9c]"
        : "border-gray-400 bg-white hover:border-[#1abc9c]"
    }
  `}
                  onClick={() => {
                    if (!item.locked) {
                      setPrefs({
                        ...prefs,
                        [item.key]: !prefs[item.key as keyof typeof prefs],
                      });
                    }
                  }}
                >
                  {prefs[item.key as keyof typeof prefs] && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ))}

            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={savePreferences}
                className="px-4 py-2 bg-primary_color text-white rounded-lg hover:bg-emerald-700"
              >
                Save Preferences
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiePreferencesModal;
