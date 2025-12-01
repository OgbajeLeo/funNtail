import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import { motion } from "framer-motion";
import pageTitle from "../../assets/navBGG.png";
import AboutContent from "./AboutContent";
import ServicesSection from "../landingPage/Services";
import TestimonialSection from "../landingPage/Testimonials";
const AboutPage = () => {
  return (
    <div>
      <div className="bg-[#032921] w-full ">
        <div className="relative pt-[40px] lg:pt-[140px] w-full">
          <Navbar />
          <img
            src={pageTitle}
            className="absolute top-0 left-0 w-full opacity-12 h-full lg:object-cover "
            alt="bg"
          />

          {/* Header Section */}
          <motion.header className="relative py-8 z-20 overflow-hidden bg-cover bg-center bg-no-repeat">
            {/* Header content */}
            <div className="relative z-10  mx-auto text-center pt-8 lg:p-0">
              <motion.h1 className="text-[24px] md:text-3xl lg:text-[40px] font-bold text-primary_color mb-4">
                About Us
              </motion.h1>
            </div>
          </motion.header>
        </div>
      </div>
      <AboutContent />
      <ServicesSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
