import Navbar from "../../components/shared/Navbar";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";

const landingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />{" "}
      <AboutSection />
    </div>
  );
};

export default landingPage;
