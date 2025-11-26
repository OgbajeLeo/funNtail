import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import FAQ from "../guaranteePage/FAQ";
import BookingProtection from "./BookingProtection";
import BookingTool from "./BookingTool";
import HeroSection from "./HeroSection";

const ProtectPage = () => {
  return (
    <div>
      <div className=" w-full ">
        <div className="relative pt-[150px] lg:pt-[40px] w-full max-w-7xl mx-auto">
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
