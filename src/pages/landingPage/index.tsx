import Navbar from "../../components/shared/Navbar";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import PetSitterSection from "./PetSitterSection";
import ServicesSection from "./Services";
import ProfileShowcaseSection from "./ProfileShowcase";
import Footer from "../../components/shared/Footer";
import TestimonialSection from "./Testimonials";
const landingPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />{" "}
      <AboutSection />
      <PetSitterSection />
      <ServicesSection />
      <ProfileShowcaseSection />
      {/* <TestimonialSection /> */}
      <Footer />
    </div>
  );
};

export default landingPage;
