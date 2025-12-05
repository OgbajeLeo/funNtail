// src/components/shared/Footer.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import google from "../../assets/andriod.svg";
import apple from "../../assets/apple.svg";
import FacebookIcon from "../iconComponent/FacebookIcon";
import XIcon from "../iconComponent/XIcon";
import InstagramIcon from "../iconComponent/InstagramIcon";
import LinkedinIcon from "../iconComponent/LinkedinIcon";
import YoutubeIcon from "../iconComponent/YoutubeIcon";
import { Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "../cookies/CookieProvider";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const router = useNavigate();
  const { openPreferences } = useCookies();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (!isChecked) {
      setStatus("error");
      setErrorMsg("Please confirm you consent to receive communications.");
      return;
    }

    setIsSubscribed(false);
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.funntail.co.uk/api/v1/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubscribed(true);
        setStatus("success");
        setEmail("");
        setIsChecked(false);

        // GTM analytics event
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "newsletter_subscribe",
        });
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Failed to subscribe. Please try again.");
      }
    } catch (err) {
      console.error("Newsletter error:", err);
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: <YoutubeIcon />,
      href: "https://www.youtube.com/@FunNTail",
      name: "FunNTail YouTube",
    },
    {
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/FunNTail",
      name: "FunNTail Facebook",
    },
    {
      icon: <XIcon />,
      href: "https://x.com/FunNTail",
      name: "FunNTail X",
    },
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/funntail?igsh=OGNwaTZpMWozd2hr&utm_source=qr",
      name: "FunNTail Instagram",
    },
    {
      icon: <LinkedinIcon />,
      href: "https://www.linkedin.com/company/funntail/",
      name: "FunNTail LinkedIn",
    },
  ];

  return (
    <footer className="bg-[#032921] text-white w-full ">
      {/* Main Footer Content */}
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between flex-row gap-2 lg:gap-10 w-full max-w-7xl mx-auto flex-wrap">
          <div className="flex flex-row justify-between gap-8 lg:gap-40 mb-6 lg:mb-0">
            {/* Learn More Section */}
            <motion.div className="space-y-6 w-full">
              <motion.h3
                className="text-base font-semibold text-white mb-6"
                whileHover={{ color: "#10B981" }}
              >
                Learn More
              </motion.h3>
              <div className="space-y-4 text-[13px] lg:text-sm">
                <motion.div className="flex items-center space-x-3">
                  <motion.button
                    onClick={() => router("/blog")}
                    className="text-gray-300 hover:text-white transition-colors"
                    whileHover={{ color: "#10B981" }}
                  >
                    Blog
                  </motion.button>
                  <motion.span className="bg-[#F3E8FF] text-gray_text3 text-[10px] px-2 py-1 rounded-sm font-semibold">
                    BETA
                  </motion.span>
                </motion.div>
                <motion.button
                  onClick={() => router("/agreement")}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  FunNTail Agreement
                </motion.button>
                <motion.div className="flex items-center space-x-3">
                  <motion.button
                    onClick={() => router("/community")}
                    className="text-gray-300 hover:text-white transition-colors"
                    whileHover={{ color: "#10B981" }}
                  >
                    FunNTail Community
                  </motion.button>
                  <motion.span className="bg-[#F3E8FF] text-gray_text3 text-[10px] px-2 py-1 rounded-sm font-semibold">
                    BETA
                  </motion.span>
                </motion.div>

                <motion.button
                  onClick={() => router("/protect")}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  FunNTail Protect
                </motion.button>
                <motion.button
                  onClick={() => router("/guarantee")}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  FunNTail Guarantee
                </motion.button>
              </div>
            </motion.div>

            {/* FunNTail Section */}
            <motion.div className="space-y-6 flex-1">
              <motion.h3
                className="text-base font-semibold text-white mb-6"
                whileHover={{ color: "#10B981" }}
              >
                FunNTail
              </motion.h3>
              <div className="space-y-4 text-[13px] lg:text-sm">
                <motion.button
                  onClick={() => router("/about")}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </motion.button>
                <motion.button
                  onClick={() => router("/safety")}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Safety
                </motion.button>

                <motion.div className="flex items-center space-x-3">
                  <motion.button
                    onClick={() => router("/careers")}
                    className="text-gray-300 hover:text-white transition-colors"
                    whileHover={{ color: "#10B981" }}
                  >
                    Careers
                  </motion.button>
                  <motion.span className="bg-[#F3E8FF] text-gray_text3 text-[10px] px-2 py-1 rounded-sm font-semibold">
                    BETA
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row fle-wrap gap-8 lg:gap-40">
            {/* Need Help Section */}
            <motion.div className="space-y-6 w-fit">
              <motion.h3
                className="text-base font-semibold text-white mb-6"
                whileHover={{ color: "#10B981" }}
              >
                Need Help?
              </motion.h3>
              <div className="space-y-4 text-[13px] lg:text-sm w-full">
                <motion.button
                  onClick={() => router("/contact")}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </motion.button>

                <motion.button
                  onClick={() => router("/faqs")}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  FAQs
                </motion.button>
              </div>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div className="space-y-6 sm:w-[387px] w-full lg:flex-1">
              <motion.h3
                className="text-base font-semibold text-white leading-tight"
                whileHover={{ color: "#10B981" }}
              >
                Get all the pet-care tips you need delivered straight to your
                inbox.
              </motion.h3>

              <motion.p className="text-gray-300 text-sm leading-relaxed">
                Enjoy adorable pet photos, expert advice, training tips, product
                picks, and more.
              </motion.p>

              {/* Email Form */}
              <motion.form onSubmit={handleSubscribe} className="space-y-4">
                <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status !== "idle") {
                        setStatus("idle");
                        setErrorMsg("");
                      }
                    }}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary_color focus:border-transparent transition-all"
                    required
                  />
                  {isSubscribed && status === "success" && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <div className="w-6 h-6 bg-primary_color rounded-full flex items-center justify-center">
                        <Check size={14} className="text-white" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Checkbox */}
                <motion.div className="flex items-start space-x-3">
                  <motion.div
                    className="relative mt-1"
                    whileTap={{ scale: 0.95 }}
                  >
                    <input
                      type="checkbox"
                      id="consent"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      className="sr-only"
                    />
                    <motion.div
                      className={`w-5 h-5 border-2 rounded cursor-pointer flex items-center justify-center ${
                        isChecked
                          ? "bg-primary_color border-primary_color"
                          : "border-gray-400 bg-transparent"
                      }`}
                      onClick={() => setIsChecked(!isChecked)}
                      whileHover={{ borderColor: "#10B981" }}
                    >
                      {isChecked && (
                        <motion.div>
                          <Check size={12} className="text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>

                  <label
                    htmlFor="consent"
                    className="text-sm text-gray-300 leading-relaxed cursor-pointer"
                  >
                    I consent to receive marketing communications from
                    FunNTail.com and it's affiliates and confirm that I am 18
                    years of age or older. I can unsubscribe at any time.
                  </label>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || !email || !isChecked}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    isSubmitting || !email || !isChecked
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                      : "bg-primary_color hover:bg-emerald-700 text-white"
                  }`}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ) : (
                    <span>
                      {isSubscribed && status === "success"
                        ? "Subscribed!"
                        : "Subscribe"}
                    </span>
                  )}
                </motion.button>
              </motion.form>

              {/* Success / Error messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-2 p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center space-x-2"
                  >
                    <Check className="w-5 h-5 text-primary_color flex-shrink-0" />
                    <span className="text-primary_color text-sm">
                      You’re subscribed! Thank you.
                    </span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2"
                  >
                    <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-red-700 text-sm">
                      {errorMsg || "Something went wrong. Please try again."}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright and Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <motion.p
                className="text-[#E2E8F0] text-sm"
                whileHover={{ color: "#10B981" }}
              >
                © {new Date().getFullYear()}, FunNTail
              </motion.p>

              <div className="flex flex-wrap items-center justify-center space-x-6">
                {[
                  { text: "Terms of Service", path: "/terms" },
                  { text: "Privacy Policy", path: "/privacy" },
                  { text: "Refund Policy", path: "/refund" },
                  { text: "Cookies Policy", path: "/managecookies" },
                ].map((link) => (
                  <motion.button
                    key={link.text}
                    onClick={() => router(link.path)}
                    className="text-[#E2E8F0] hover:text-white text-sm transition-colors"
                  >
                    {link.text}
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.button
              onClick={openPreferences}
              className="text-[#E2E8F0] hover:text-white text-sm transition-colors"
            >
              Manage Cookies
            </motion.button>

            {/* Social Links and App Store Buttons */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-white transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <div className="items-center hidden sm:flex space-x-3">
                <motion.button
                  onClick={() => router("/waitlist")}
                  className="flex items-center font-medium"
                >
                  <img src={apple} alt="" className="h-10" />
                </motion.button>

                <motion.button
                  onClick={() => router("/waitlist")}
                  className="flex items-center font-medium"
                >
                  <img src={google} alt="" className="h-10" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
