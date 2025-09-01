import React, { useState } from "react";
import { motion,type Variants } from "framer-motion";
import {
  Youtube,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Check,
} from "lucide-react";
import google from "../../assets/andriod.svg";
import apple from "../../assets/apple.svg";
const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && isChecked) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
        setIsChecked(false);
      }, 3000);
    }
  };

  const socialLinks = [
    { icon: <Youtube size={24} />, href: "#", name: "YouTube" },
    { icon: <Facebook size={24} />, href: "#", name: "Facebook" },
    { icon: <Twitter size={24} />, href: "#", name: "Twitter" },
    { icon: <Instagram size={24} />, href: "#", name: "Instagram" },
    { icon: <Linkedin size={24} />, href: "#", name: "LinkedIn" },
  ];

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-[#032921] text-white">
      {/* Main Footer Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Learn More Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3
              className="text-base font-semibold text-white mb-6"
              whileHover={{ color: "#10B981" }}
              transition={{ duration: 0.3 }}
            >
              Learn More
            </motion.h3>
            <div className="space-y-4 text-sm">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ color: "#10B981" }}
                >
                  Blog
                </motion.a>
                <motion.span
                  className="bg-white text-gray_text3 text-[10px] px-2 py-1 rounded-sm font-semibold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  BETA
                </motion.span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ color: "#10B981" }}
                >
                  FunNTail Community
                </motion.a>
                <motion.span
                  className="bg-white text-gray_text3 text-[10px] px-2 py-1 rounded-sm font-semibold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  BETA
                </motion.span>
              </motion.div>

              <motion.a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5, color: "#10B981" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Safety
              </motion.a>

              <motion.a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5, color: "#10B981" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                FunNTail Protect
              </motion.a>
            </div>
          </motion.div>

          {/* FunNTail Section */}
          <motion.div variants={itemVariants} className="lg:ml-12 space-y-6">
            <motion.h3
              className="text-base font-semibold text-white mb-6"
              whileHover={{ color: "#10B981" }}
              transition={{ duration: 0.3 }}
            >
              FunNTail
            </motion.h3>
            <div className="space-y-4 text-sm">
              <motion.a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5, color: "#10B981" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                About Us
              </motion.a>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ color: "#10B981" }}
                >
                  Careers
                </motion.a>
                <motion.span
                  className="bg-white text-gray_text3 text-[10px] px-2 py-1 rounded-sm font-semibold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  BETA
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* Need Help Section */}
          <motion.div variants={itemVariants} className="lg:ml-12 space-y-6">
            <motion.h3
              className="text-base font-semibold text-white mb-6"
              whileHover={{ color: "#10B981" }}
              transition={{ duration: 0.3 }}
            >
              Need Help?
            </motion.h3>
            <div className="space-y-4 text-sm">
              <motion.a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5, color: "#10B981" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Contact Us
              </motion.a>

              <motion.a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5, color: "#10B981" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                FAQs
              </motion.a>
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            variants={itemVariants}
            className=" space-y-6 lg:w-[387px]"
          >
            <motion.h3
              className="text-base font-semibold text-white leading-tight"
              whileHover={{ color: "#10B981" }}
              transition={{ duration: 0.3 }}
            >
              All the pet care tips you need - straight to your inbox
            </motion.h3>

            <motion.p
              className="text-gray-300 text-sm leading-relaxed"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              Receive the latest adorable pet photos, care tips, training
              advice, product recommendations and more.
            </motion.p>

            {/* Email Form */}
            <motion.form
              onSubmit={handleSubscribe}
              className="space-y-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary_color focus:border-transparent transition-all"
                  required
                />
                {isSubscribed && (
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
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="relative mt-1"
                  whileHover={{ scale: 1.1 }}
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
                    transition={{ duration: 0.2 }}
                  >
                    {isChecked && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
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
                disabled={!email || !isChecked}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  email && isChecked
                    ? "bg-primary_color hover:bg-emerald-700 text-white"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }`}
                whileHover={email && isChecked ? { scale: 1.05, y: -2 } : {}}
                whileTap={email && isChecked ? { scale: 0.98 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {isSubscribed ? "Subscribed!" : "Subscribe"}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        className="border-t border-slate-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright and Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <motion.p
                className="text-gray-400 text-sm"
                whileHover={{ color: "#10B981" }}
              >
                © {new Date().getFullYear()}, FunNTail
              </motion.p>

              <div className="flex flex-wrap items-center justify-center space-x-6">
                {["Terms of Service", "Privacy Policy", "Manage Cookies"].map(
                  (link) => (
                    <motion.a
                      key={link}
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                      whileHover={{ color: "#10B981", y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {link}
                    </motion.a>
                  )
                )}
              </div>
            </div>

            {/* Social Links and App Store Buttons */}
            <div className="flex items-center space-x-6">
              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      color: "#10B981",
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* App Store Buttons */}
              <div className="flex items-center space-x-3">
                <motion.button
                  className="flex items-center font-medium"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={apple} alt="" className="h-10" />
                </motion.button>

                <motion.button
                  className="flex items-center  font-medium"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={google} alt="" className="h-10" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Background Decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary_color to-teal-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </footer>
  );
};

export default Footer;
