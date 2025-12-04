import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import HarmburgerIcon from "../iconComponent/HarmburgerIcon";

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isDownloadDropdownOpen, setIsDownloadDropdownOpen] =
    useState<boolean>(false);
  const router = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "#services" },
    { label: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        window.innerWidth >= 768 // md breakpoint
      ) {
        setIsDownloadDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActiveRoute = (href: string): boolean => {
    if (href.startsWith("#")) {
      // For hash links, check if we're on the home page
      return location.pathname === "/";
    }
    return location.pathname === href;
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        router("/");
        setTimeout(() => {
          const element = document.getElementById(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      } else {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      router(href);
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownloadClick = () => {
    // setIsDownloadDropdownOpen(!isDownloadDropdownOpen);
    setIsDownloadDropdownOpen(false);
    router("/waitlist");
  };

  const handleDropdownOptionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDownloadDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      router("/waitlist");
    }, 100);
  };

  const handleMobileDropdownOptionClick = () => {
    setTimeout(() => {
      router("/waitlist");
    }, 100);
    setIsDownloadDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="max-w-[1000px] mx-auto justify-center items-center flex">
      <motion.nav
        className={`fixed lg:top-6 ${
          isMobileMenuOpen
            ? "top-0 left-0 right-0"
            : "top-6 max-w-[408px] mx-auto rounded-[12px]"
        } sm:max-w-[1000px]  mx-auto w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-white"
        }`}
        style={{
          transform: isScrolled ? "translateY(0)" : "translateY(0)",
        }}
      >
        <div className="max-w-[1000px] mx-auto px-4 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-[72px] sm:h-20">
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
                  {navItems.map((item) => {
                    const isActive = isActiveRoute(item.href);
                    return (
                      <motion.button
                        key={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          isActive
                            ? "text-primary_color"
                            : isScrolled
                            ? "text-gray_text3 hover:text-primary_color hover:bg-gray-50"
                            : "text-gray_text3 hover:text-primary_color hover:bg-white/10"
                        }`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-2 right-0 h-[2px] bg-primary_color"
                            layoutId="activeIndicator"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Download App Button with Dropdown */}
            <div className="hidden md:block relative" ref={dropdownRef}>
              <motion.button
                onClick={handleDownloadClick}
                className="inline-flex justify-center items-center w-[179px] h-[46px] bg-primary_color text-white font-medium rounded-2xl shadow-lg hover:shadow-xl "
              >
                <span>Join the Waitlist</span>
              </motion.button>

              {/* Dropdown Menu */}
              {isDownloadDropdownOpen && (
                <motion.div className="absolute top-full right-0 text-sm py-4 mt-2 w-[200px] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                  <motion.button
                    onClick={handleDropdownOptionClick}
                    className="w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100"
                    whileHover={{ backgroundColor: "#f9fafb" }}
                  >
                    Become a Pet Worker
                  </motion.button>
                  <motion.button
                    onClick={handleDropdownOptionClick}
                    className="w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                    whileHover={{ backgroundColor: "#f9fafb" }}
                  >
                    I'm a Pet Owner
                  </motion.button>
                </motion.div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray_text3 hover:text-primary_color hover:bg-gray-100 "
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <HarmburgerIcon isOpen={isMobileMenuOpen} />
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
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href);
              return (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative block w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "text-primary_color"
                      : "text-gray_text3 hover:text-primary_color hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary_color"
                      layoutId="mobileActiveIndicator"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              );
            })}

            {/* Mobile Download Button with Dropdown */}
            <div className="w-full mt-4" ref={mobileDropdownRef}>
              <motion.button
                onClick={handleDownloadClick}
                className="w-full px-6 py-3 bg-primary_color text-white font-medium rounded-2xl transition-all duration-300"
              >
                <span>Join the Waitlist</span>
              </motion.button>

              {/* Mobile Dropdown Menu */}
              {isDownloadDropdownOpen && (
                <motion.div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <motion.button
                    onClick={handleMobileDropdownOptionClick}
                    className="w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100"
                    whileHover={{ backgroundColor: "#f9fafb" }}
                  >
                    Become a Pet Worker
                  </motion.button>
                  <motion.button
                    onClick={handleMobileDropdownOptionClick}
                    className="w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                    whileHover={{ backgroundColor: "#f9fafb" }}
                  >
                    I'm a Pet Owner
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
