import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ios from "../../assets/apple.svg";
import google from "../../assets/andriod.svg";
import app from "../../assets/app.png";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WaitList = () => {
  // Set launch date (78 days from now based on the design)
  const calculateTargetDate = () => {
    const now = new Date();
    const target = new Date(now.getTime() + 78 * 24 * 60 * 60 * 1000);
    return target;
  };

  const [targetDate] = useState(calculateTargetDate());
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add your email submission logic here
    alert(`Thank you! We'll notify you at ${email}`);
    setEmail("");
  };

  const handleButtonClick = (platform: string) => {
    console.log(`${platform} clicked`);
  };

  return (
    <div>
      <div className=" w-full pb-12">
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
                <div className="text-3xl lg:text-4xl font-bold text-[#1F2937]">
                  {timeLeft.days}
                </div>
                <div className="text-sm text-[#6B7280] mt-1">Days</div>
              </div>
              <div className="bg-[#1ABC9C1A] border border-[#14B8A6] rounded-xl p-4 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#1F2937]">
                  {timeLeft.hours}
                </div>
                <div className="text-sm text-[#6B7280] mt-1">Hours</div>
              </div>
              <div className="bg-[#1ABC9C1A] border border-[#14B8A6] rounded-xl p-4 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#1F2937]">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm text-[#6B7280] mt-1">Minutes</div>
              </div>
              <div className="bg-[#1ABC9C1A] border border-[#14B8A6] rounded-xl p-4 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#1F2937]">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm text-[#6B7280] mt-1">Seconds</div>
              </div>
            </motion.div>

            {/* Email Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="w-full mb-8 mt-12"
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
                    onChange={(e) => setEmail(e.target.value)}
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
                  className="px-4 py-2 bg-[#14B8A6] text-white font-semibold rounded-[16px] hover:bg-[#0D9488] transition-colors flex items-center gap-2"
                >
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
                  Send
                </motion.button>
              </div>
            </motion.form>

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
