// src/pages/waitlistPage.tsx
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import ios from "../../assets/apple.svg";
import google from "../../assets/andriod.svg";
import app from "../../assets/app.png";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Flip animation component
const FlipNumber = ({ value }: { value: number }) => {
  return (
    <div className="relative overflow-hidden h-[48px] lg:h-[56px] flex items-center justify-center">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="absolute text-[24px] lg:text-4xl font-bold text-[#1F2937]"
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const WaitList = () => {
  // Set specific launch date
  const [targetDate] = useState(new Date("2026-05-30T10:00:00Z"));
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // basic validation like contact form
    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const response = await fetch(
        "https://api.funntail.co.uk/api/v1/waitlist",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setEmail("");

        // GTM analytics event
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "waitlist_signup",
        });
      } else {
        setStatus("error");
        setErrorMsg(
          data.message || "Failed to join waitlist. Please try again."
        );
      }
    } catch (err) {
      console.error("Waitlist error:", err);
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = (platform: string) => {
    console.log(`${platform} clicked`);
  };

  return (
    <div>
      <div className="w-full pb-12">
        <div className="relative pt-[150px] lg:pt-[40px] w-full max-w-7xl mx-auto">
          <Navbar />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto text-[#032921] w-full min-h-screen flex items-center justify-center px-6 pb-20 lg:pb-8">
        <motion.div className="flex w-full flex-col lg:flex-row justify-between gap-20 items-center">
          {/* Phone Mockup Side */}
          <motion.div className="flex justify-center lg:justify-start">
            <motion.img
              src={app}
              alt="App Preview"
              className="w-full max-w-[550px] max-h-[677px] h-auto"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div className="flex justify-center lg:items-center flex-col max-w-[520px]">
            {/* Coming Soon Title */}
            <motion.h1
              className="text-[24px] text-center lg:text-[32px] font-bold text-primary_color mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Coming Soon
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-[#6B7280] text-base lg:text-lg mb-8 text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join the waitlist to get early access, updates, and app launch
              perks.
            </motion.p>

            {/* Countdown Timer */}
            <motion.div
              className="grid grid-cols-4 gap-3 lg:gap-6 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-[#1ABC9C1A] border border-[#14B8A6] rounded-xl p-4 text-center">
                <FlipNumber value={timeLeft.days} />
                <div className="text-xs lg:text-sm text-[#6B7280] -mt-1">
                  Days
                </div>
              </div>
              <div className="bg-[#1ABC9C1A] border border-[#14B8A6] rounded-xl p-4 text-center">
                <FlipNumber value={timeLeft.hours} />
                <div className="text-xs lg:text-sm text-[#6B7280] -mt-1">
                  Hours
                </div>
              </div>
              <div className="bg-[#1ABC9C1A] border border-[#14B8A6] rounded-xl p-4 text-center">
                <FlipNumber value={timeLeft.minutes} />
                <div className="text-xs lg:text-sm text-[#6B7280] -mt-1">
                  Minutes
                </div>
              </div>
              <div className="bg-[#1ABC9C1A] border border-[#14B8A6] rounded-xl p-4 text-center">
                <FlipNumber value={timeLeft.seconds} />
                <div className="text-xs lg:text-sm text-[#6B7280] -mt-1">
                  Seconds
                </div>
              </div>
            </motion.div>

            {/* Email Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="w-full mb-4 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-sm font-semibold text-[#1F2937] mb-2">
                Email Address
              </label>
              <div className="flex gap-3">
                <div className="relative flex-1">
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
                    placeholder="StrongestAvenger@example.com"
                    className="w-full px-4 py-3 pl-10 bg-[#1ABC9C0D] border border-primary_color rounded-[16px] focus:outline-none focus:ring focus:ring-primary_color text-[#6B7280] text-sm"
                    required
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B7280]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting || !email.trim()}
                  className={`px-4 py-2 rounded-[16px] flex items-center gap-2 font-semibold transition-colors ${
                    isSubmitting || !email.trim()
                      ? "bg-[#14B8A6]/60 cursor-not-allowed text-white"
                      : "bg-[#14B8A6] hover:bg-[#0D9488] text-white"
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
                    <>
                      <svg
                        className="w-5 h-5 rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      <span>Join Waitlist</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>

            {/* Success / Error messages */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="w-full mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center space-x-2"
                >
                  <Check className="w-5 h-5 text-primary_color flex-shrink-0" />
                  <span className="text-primary_color text-sm">
                    You’ve Joined The Waitlist! Thank you.
                  </span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="w-full mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2"
                >
                  <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700 text-sm">
                    {errorMsg || "Something went wrong. Please try again."}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* App Store Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-[#141F39] font-semibold mb-4 text-center lg:text-left mx-auto">
                Available for download on
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <motion.button
                  onClick={() => handleButtonClick("ios")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-primary_color1 font-semibold text-base lg:text-lg transition-colors group cursor-pointer"
                >
                  <img src={ios} alt="App Store" className="w-32 h-10" />
                </motion.button>
                <motion.button
                  onClick={() => handleButtonClick("android")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-primary_color1 font-semibold text-base lg:text-lg transition-colors group cursor-pointer"
                >
                  <img src={google} alt="Google Play" className="w-32 h-10" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default WaitList;
