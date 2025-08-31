import { motion, type Variants } from "framer-motion";
import heroImage from "../../assets/heroImage.svg";
import ArrowRight from "../../components/iconComponent/ArrowRight";

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="relative mt-12 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div className="text-left space-y-3" variants={textVariants}>
            <motion.h1
              className="text-4xl lg:text-[56px] font-semibold leading-[140%]"
              variants={textVariants}
            >
              <span className="text-gray_text3">Find Trusted </span>
              <motion.span
                className="text-primary_color relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                Pet
              </motion.span>
              <br />
              <motion.span
                className="text-primary_color"
                variants={textVariants}
              >
                Sitters
              </motion.span>
              <span className="text-gray_text3"> Near You</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray_text3 font-[400] leading-relaxed max-w-[580px] w-full "
              variants={textVariants}
            >
              Join thousands of pet owners using FunNTail to find reliable
              sitters. We love em just as much!
            </motion.p>

            <motion.button
              className="mt-6 bg-primary_color  text-white font-semibold w-[174px] h-[48px] rounded-xl flex justify-center items-center gap-3  transition-shadow"
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
          </motion.div>

          {/* Right content - Main pet image */}
          <motion.div
            className="relative flex justify-center items-center"
            // variants={floatingVariants}
            animate="float"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main dog image */}
              <motion.div
                className=" flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="overflow-hidden">
                  {/* <img
                    src={heroImage}
                    alt="Happy Dog"
                    className="w-full h-full object-cover"
                  /> */}
                  <motion.img
                    src={heroImage}
                    // width={800}
                    // height={800}
                    alt="logo"
                    className="size-full"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: window.innerWidth >= 640 ? 0 : 0 }}
                    // transition={{ duration: 0.5 }}
                    whileHover={{ rotateX: 10, rotateY: -10 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-2 h-2 bg-emerald-300 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/3 right-20 w-3 h-3 bg-pink-300 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
      </div> */}
    </motion.div>
  );
};

export default HeroSection;
