import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const router = useNavigate();

  const navItems: NavItem[] = [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    router(href);
    setActiveItem(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed lg:top-6 left-0 right-0 max-w-[1000px] rounded-[24px] mx-auto w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg " : "bg-white"
      }`}
      style={{
        transform: isScrolled ? "translateY(0)" : "translateY(0)",
      }}
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex justify-start items-center ">
            {/* Logo */}
            <motion.div
              onClick={() => router("/")}
              className="flex-shrink-0 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={logo} alt="Logo" />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-[38px] flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 rounded-lg  font-medium transition-all duration-300 ${
                      activeItem === item.href
                        ? "text-primary_color bg-indigo-50"
                        : isScrolled
                        ? "text-gray_text3 hover:text-primary_color hover:bg-gray-50"
                        : "text-gray_text3 hover:text-primary_color hover:bg-white/10"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {activeItem === item.href && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary_color rounded-full"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Download App Button */}
          <motion.button
            className="hidden sm:inline-flex justify-center items-center w-[179px] h-[46px] bg-primary_color text-white font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              onClick={() => router("/download")}
              className="flex items-center space-x-2"
            >
              <span>Download App</span>
            </div>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray_text3 hover:text-primary_color hover:bg-gray-100 focus:outline-none transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1"
                    : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1"
                    : "translate-y-1"
                }`}
              ></span>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 border-t border-gray-100">
          {navItems.map((item, index) => (
            <motion.button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                activeItem === item.href
                  ? "text-primary_color bg-indigo-50 border-l-4 border-primary_color"
                  : "text-gray_text3 hover:text-primary_color hover:bg-gray-50"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20,
              }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
            </motion.button>
          ))}

          <motion.button
            className="w-full mt-4 px-6 py-3 bg-primary_color text-white font-medium rounded-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 20,
            }}
            transition={{ delay: 0.3 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              onClick={() => router("/download")}
              className="flex items-center justify-center space-x-2"
            >
              <span>Download App</span>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
