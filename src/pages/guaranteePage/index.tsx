import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import HeroSection from "./HeroSection";
import CoveredSection from "./CoveredSection";
import ClaimSection from "./ClaimSection";
import FileClaim from "./FileClaim";
import YourClaim from "./YourClaim";
import FAQ from "./FAQ";

const GuaranteePage = () => {
  return (
    <div>
      <div>
        <div className="relative pt-[40px] lg:pt-[140px] w-full">
          <Navbar />
        </div>
      </div>
      <HeroSection />
      <CoveredSection />
      <ClaimSection />
      <FileClaim />
      <YourClaim />
      <FAQ />
      <Footer />
    </div>
  );
};

export default GuaranteePage;
