import { motion } from "framer-motion";
import heroImage from "../../assets/heroDogBg.png";

const HeroSection = () => {
  // const buttonVariants: Variants = {
  //   hidden: { opacity: 0, scale: 0.8 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: { duration: 0.5, ease: "easeOut" },
  //   },
  //   hover: {
  //     scale: 1.05,
  //     transition: { duration: 0.2 },
  //   },
  //   tap: { scale: 0.95 },
  // };

  return (
    <motion.div
      className="relative mt-12 overflow-hidden"
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto w-full max-w-7xl px-6 py-20">
        <div className="justify-between gap-12 items-center flex flex-col-reverse lg:flex-row">
          {/* Left content */}
          <motion.div className="text-left space-y-3 ">
            <motion.h1 className="text-[28px] lg:text-[56px] max-w-[580px] w-full font-semibold leading-[140%]">
              <span className="text-gray_text3">Find Trusted </span>
              <motion.span
                className="text-primary_color relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                Pet
              </motion.span>

              <motion.span className="text-primary_color">Sitters</motion.span>
              <span className="text-gray_text3"> Near You</span>
            </motion.h1>
            <motion.p className="text-base lg:text-lg text-gray_text3 font-[400] leading-relaxed max-w-[580px] w-full ">
              Join thousands of pet owners using FunNTail to find reliable
              sitters. We love em just as much!
            </motion.p>
            {/* add buttons and trustpilot back later */}
            {/* <motion.button
              className="mt-6 bg-primary_color mx-auto lg:mx-0 text-white font-semibold w-[174px] h-[48px] rounded-xl flex justify-center items-center gap-3  transition-shadow"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Learn More
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight />
              </motion.div>
            </motion.button>

            <div className="flex items-center justify-center lg:justify-start text-sm space-x-3">
              <div>24,000+ reviews on</div>
              <TrustPilot />
              </div> */}
          </motion.div>

          {/* Right content - Main pet image */}
          <motion.div
            className="relative flex justify-center items-center"
            // variants={floatingVariants}
            animate="float"
          >
            <motion.div className="relative" transition={{ duration: 0.3 }}>
              {/* Main dog image */}
              <motion.div
                className=" flex items-center justify-center"
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={heroImage}
                    // width={800}
                    // height={800}
                    alt="logo"
                    className="size-full max-w-[550px] max-h-[500px] h-full object-cover"
                    initial={{ rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-[150px] h-[250px] bg-primary_color/10 rounded-full blur-xl"   
         
        ></motion.div>
        <motion.div
          className="absolute bottom-1/3 right-20 w-[200px] h-[200px] bg-primary_color/30 rounded-full blur-xl"
                
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
