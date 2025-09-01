import Navbar from "../../components/shared/Navbar";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import PetSitterSection from "./PetSitterSection";
import ServicesSection from "./Services";
import ProfileShowcaseSection from "./ProfileShowcase";
import Footer from "../../components/shared/Footer";
const landingPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />{" "}
      <AboutSection />
      <PetSitterSection />
      <ServicesSection />
      <ProfileShowcaseSection />
      <Footer />
    </div>
  );
};

export default landingPage;
