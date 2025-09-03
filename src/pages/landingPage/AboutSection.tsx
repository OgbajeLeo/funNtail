import { useRef, useEffect } from "react";
import { motion, type Variants, useInView, useAnimation } from "framer-motion";
import right from "../../assets/right.svg";
import right2 from "../../assets/right2.svg";
import google from "../../assets/andriod.svg";
import apple from "../../assets/apple.svg";
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideFromLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideFromRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  //   const scaleUp: Variants = {
  //     hidden: { opacity: 0, scale: 0.8 },
  //     visible: {
  //       opacity: 1,
  //       scale: 1,
  //       transition: { duration: 0.6, ease: "easeOut" },
  //     },
  //   };

  //   const floatVariants: Variants = {
  //     animate: {
  //       y: [0, -10, 0],
  //       transition: {
  //         duration: 3,
  //         repeat: Infinity,
  //         ease: "easeInOut",
  //       },
  //     },
  //   };

  return (
    <div ref={ref} className="bg-gray-50 lg:py-20 py-16 overflow-hidden">
      <div className="container w-full max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:justify-between  mb-20"
        >
          {/* Left Content */}
          <motion.div
            variants={slideFromLeft}
            className="space-y-8 max-w-[498px] w-full"
          >
            <motion.h2
              className="text-2xl lg:text-[32px] font-bold text-gray_text3 leading-tight text-center lg:text-left"
              variants={textVariants}
            >
              Find Reliable & Loving Pet Sitters Near You!
            </motion.h2>

            <motion.p
              className=" text-gray-600 leading-relaxed"
              variants={textVariants}
            >
              Find trustworthy, caring sitters for your pets whenever you need
              them. Browse verified sitters, stay updated with secure chats, and
              relax knowing your furry friends are in safe hands.
            </motion.p>
            <p className=" text-gray-600 leading-relaxed">
              Whether it's a quick check-in or an extended stay, our app makes
              pet care simple and stress-free. Join a community of pet lovers
              today!
            </p>

            <div className="lg:block hidden mt-4">
              <motion.div variants={textVariants}>
                <h3 className="text-[20px] font-semibold text-gray_text3 mb-4">
                  Available for download on
                </h3>
                <div className="flex  gap-4">
                  <motion.button
                    className="flex items-center font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={apple} alt="" />
                  </motion.button>

                  <motion.button
                    className="flex items-center  font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={google} alt="" />
                  </motion.button>
                </div>
              </motion.div>

              <motion.h2
                className="lg:text-[20px] mt-4 font-bold text-gray_text3 leading-tight"
                variants={textVariants}
              >
                Fast & Easy Booking—Find a Sitter Today!
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                variants={textVariants}
              >
                Find a Loving Pet Sitter to Care for Your Pet Like You Would! or
                Find Trusted Sitters for Your Pet’s Comfort and Care!
              </motion.p>
            </div>
          </motion.div>

          {/* Right Content - App Interface Mockup */}
          <motion.div variants={slideFromRight} className="">
            <img
              width={712}
              height={800}
              src={right}
              alt="image"
              className="lg:flex hidden"
            />
            <img
              width={712}
              height={800}
              src={right2}
              alt="image"
              className="lg:hidden block"
            />
            <div className="lg:hidden flex flex-col justify-center gap-6 items-center mt-10">
              <motion.div variants={textVariants}>
                <h3 className="text-[20px] text-center font-semibold text-gray_text3 mb-4">
                  Available for download on
                </h3>
                <div className="flex  gap-4">
                  <motion.button
                    className="flex items-center font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={apple} alt="" />
                  </motion.button>

                  <motion.button
                    className="flex items-center  font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={google} alt="" />
                  </motion.button>
                </div>
              </motion.div>

              <motion.h2
                className="lg:text-[20px] font-bold text-center my-4 text-gray_text3 leading-tight"
                variants={textVariants}
              >
                Fast & Easy Booking—Find a Sitter Today!
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 text-center  leading-relaxed"
                variants={textVariants}
              >
                Find a Loving Pet Sitter to Care for Your Pet Like You Would! or
                Find Trusted Sitters for Your Pet’s Comfort and Care!
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
      </div>
    </div>
  );
};

export default AboutSection;
