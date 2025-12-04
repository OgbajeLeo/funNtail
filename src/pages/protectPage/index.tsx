import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import FAQ from "../protectPage/FAQ";
import BookingProtection from "./BookingProtection";
import BookingTool from "./BookingTool";
import HeroSection from "./HeroSection";
const ProtectPage = () => {
  return (
    <div>
      <div>
        <div className="relative pt-[90px] lg:pt-[60px] w-full mx-auto">
          <Navbar />
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
