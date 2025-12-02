import { motion } from "framer-motion";
import ArrowRight from "../../components/iconComponent/ArrowRight";
import sittingcat from "../../assets/catRaiseHand.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full flex items-center py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="flex max-w-[1172px] mx-auto w-full py-1 lg:py-20 gap-[62px] justify-between flex-col-reverse lg:flex-row items-center">
          {/* Left Side - Text Content */}
          <motion.div className="space-y-6 lg:space-y-8 ">
            {/* Headline */}
            <h1 className="text-[28px] lg:text-[48px] max-w-[650px] w-full font-semibold leading-tight text-gray_text3">
              Each booking gives you everything you need to keep your pet safe,
              supported, and cared for
            </h1>

            {/* Body Text */}
            <p className="text-gray_text2 text-base md:text-lg lg:text-lg leading-relaxed max-w-[600px]">
              Every step you take on FunNTail is supported by trusted safety
              features, verified sitter information, and tools designed to keep
              you and your pet protected
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/waitlist")}
              className="bg-primary_color hover:bg-primary_color/90 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-3 transition-colors w-fit mx-auto lg:mx-0"
            >
              <span>Find a Sitter</span>
              <ArrowRight />
            </motion.button>
          </motion.div>

          {/* Right Side - Cat Image with Dashed Border */}
          <motion.div className="relative flex justify-center lg:justify-end  ">
            <div className="relative w-full  overflow-hidden">
              <img
                src={sittingcat}
                alt="Cat"
                className="w-full h-full max-w-[400px] max-h-[600px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
