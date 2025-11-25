import { motion } from "framer-motion";
import ArrowRight from "../../components/iconComponent/ArrowRight";
import sittingcat from "../../assets/catRaiseHand.png";

const HeroSection = () => {
  return (
    <section className="relative w-full flex items-center py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="flex max-w-[1172px] mx-auto w-full py-1 lg:py-20 gap-[62px] justify-between flex-col-reverse lg:flex-row items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-6 lg:space-y-8 w-full"
          >
            {/* Headline */}
            <h1 className="text-[28px] lg:text-[48px] max-w-[650px] w-full font-bold leading-tight text-gray_text3">
              Every booking has the tools to help keep you and your pet safe.
            </h1>

            {/* Body Text */}
            <p className="text-gray_text2 text-base md:text-lg lg:text-xl leading-relaxed max-w-[600px]">
              Every action on Funntail is backed by smart security, verified
              data, and tools that help you invest with confidence.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
