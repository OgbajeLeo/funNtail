import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import FAQ from "../protectPage/FAQ";
import BookingProtection from "./BookingProtection";
import BookingTool from "./BookingTool";
import HeroSection from "./HeroSection";
import pageTitle from "../../assets/navBGG.png";
import pageTitleMobile from "../../assets/mobileBGG.png";
import { motion } from "framer-motion";
const ProtectPage = () => {
  return (
    <div>
      <div className="bg-[#032921] w-full ">
        <div className="relative pt-[40px] lg:pt-[140px] w-full mx-auto">
          <Navbar />
          <img
            src={pageTitle}
            className="absolute hidden lg:block top-0 left-0 w-full opacity-12 h-full lg:object-cover "
            alt="bg"
          />
          <img
            src={pageTitleMobile}
            className="absolute block lg:hidden top-0 left-0 w-full opacity-90 h-full object-cover "
            alt="bg"
          />
          <motion.header className="relative py-8 z-20 overflow-hidden ">
            {/* Header content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center pt-10 lg:p-0">
              <motion.h1 className="text-[24px] md:text-3xl lg:text-[40px] font-bold text-primary_color mb-4">
                Protect Your Booking
              </motion.h1>
            </div>
          </motion.header>
        </div>
      </div>

      <HeroSection />
      <BookingTool />
      <BookingProtection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default ProtectPage;
