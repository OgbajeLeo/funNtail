import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const InviteContent = () => {
  const [referralCode, setReferralCode] = useState<string>("");
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Get referral code from URL
    const params = new URLSearchParams(window.location.search);
    const code = params.get("ref") || "UNKNOWN";
    setReferralCode(code);

    // Update document title
    document.title = `Join FunnTail - Use code: ${code}`;

    // Update meta tags for social sharing
    updateMetaTags(code);

    // Auto-attempt to open app after a short delay
    const timer = setTimeout(() => {
      openApp(code);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const updateMetaTags = (code: string) => {
    const pageUrl = `https://funntail.co.uk/invite?ref=${code}`;
    const title = `Join me on FunnTail! Use code: ${code}`;
    const description =
      "Sign up using my referral code and earn £10 when you complete your first pet sitting job!";

    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.querySelector(`meta[name="${property}"]`);
      }
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.setAttribute(
          property.includes(":") ? "property" : "name",
          property
        );
        newMeta.setAttribute("content", content);
        document.head.appendChild(newMeta);
      }
    };

    updateOrCreateMeta("og:title", title);
    updateOrCreateMeta("og:description", description);
    updateOrCreateMeta("og:url", pageUrl);
    updateOrCreateMeta("twitter:title", title);
    updateOrCreateMeta("twitter:description", description);
    updateOrCreateMeta("twitter:url", pageUrl);
  };

  const openApp = (code: string) => {
    const appScheme = `funntail://invite?ref=${code}`;
    const fallbackUrl = `https://funntail.co.uk/register?ref=${code}`;

    setIsOpening(true);

    // Try to open app
    window.location.href = appScheme;

    // Fallback after 2.5 seconds if app doesn't open
    const fallbackTimer = setTimeout(() => {
      setIsOpening(false);
      if (document.hasFocus()) {
        window.location.href = fallbackUrl;
      }
    }, 2500);

    return () => clearTimeout(fallbackTimer);
  };

  const benefits = [
    "Earn £10 reward after your first completed job",
    "Join thousands of trusted pet sitters",
    "Flexible schedules and safe payments",
    "24/7 support and protected bookings",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-primary_color to-[#16a085] rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-5xl">🐾</span>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl lg:text-4xl font-bold text-gray_text3 text-center mb-3"
          >
            Join me on FunnTail!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray_text2 text-center mb-8"
          >
            Get £10 reward when you complete your first job
          </motion.p>

          {/* Referral Code Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-primary_color to-[#16a085] rounded-2xl p-6 lg:p-8 mb-8 shadow-xl"
          >
            <div className="text-center">
              <p className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-2">
                Your Referral Code
              </p>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-white/20 backdrop-blur-sm rounded-xl py-4 px-6 inline-block"
              >
                <p className="text-white text-3xl lg:text-4xl font-bold tracking-[0.3em]">
                  {referralCode}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4 mb-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-7 h-7 bg-primary_color rounded-full flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray_text2 text-base leading-relaxed">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openApp(referralCode)}
            disabled={isOpening}
            className="w-full bg-gradient-to-r from-primary_color to-[#16a085] text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70"
          >
            {isOpening ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Opening App...
              </span>
            ) : (
              "Open FunnTail App"
            )}
          </motion.button>

          {/* Loading Text */}
          {isOpening && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-gray_text2 mt-4"
            >
              If the app doesn't open automatically, you'll be redirected...
            </motion.p>
          )}

          {/* Store Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a
              href="https://apps.apple.com/app/funntail/YOUR_APP_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray_text3 hover:bg-gray_text3/90 transition-colors rounded-xl p-4 flex items-center justify-center gap-3"
            >
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-white/70">Download on the</p>
                <p className="text-white font-semibold">App Store</p>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.funntail.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray_text3 hover:bg-gray_text3/90 transition-colors rounded-xl p-4 flex items-center justify-center gap-3"
            >
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-white/70">Get it on</p>
                <p className="text-white font-semibold">Google Play</p>
              </div>
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-6 text-center"
          >
            <p className="text-gray_text2 text-sm">
              Already have the app?{" "}
              <button
                onClick={() => openApp(referralCode)}
                className="text-primary_color font-semibold underline hover:text-primary_color/80 transition-colors"
              >
                Click here to open it
              </button>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InviteContent;
