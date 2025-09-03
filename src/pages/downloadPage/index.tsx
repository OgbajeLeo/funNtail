import React from "react";
import { motion, type Variants } from "framer-motion";
import ios from "../../assets/apple.svg";
import google from "../../assets/andriod.svg";
import app from "../../assets/app.png";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";


const DownloadPage: React.FC = () => {
  const buttonVariants: Variants = {
    hover: {
      y: -1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const handleButtonClick = (store: string) => {
    console.log(store);
    
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const phoneVariants: Variants = {
    hidden: { opacity: 0, x: -100, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="pt-5 lg:pt-[160px] px-2 sm:px-6 lg:px-8">
        <Navbar />
        <div className="max-w-7xl mx-auto text-[#032921] mt-24 sm:mt-0">
          <motion.div
            className="flex flex-col lg:flex-row justify-between gap-20 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Phone Mockup Side */}
            <motion.div
              className="flex justify-center lg:justify-start"
              variants={phoneVariants}
            >
              <motion.img
                src={app}
                alt="App Preview"
                className="w-full max-w-[550px] max-h-[677px] h-auto"
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Content Side */}
            <motion.div className="flex  justify-center items-start flex-col  ">
              <motion.h1
                className="text-[24px] sm:text-3xl lg:text-[32px] font-bold text-primary_color1 mb-6 text-[#032921]"
                variants={itemVariants}
              >
                Download the FunNTail Client app
              </motion.h1>

              <motion.p
                className="text-lg text-grey_text2 max-w-md mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Download the app, set up your accont, and apply for jobs today.
              </motion.p>

              {/* App Store Badges */}
              <motion.div className="my-10" variants={itemVariants}>
                <p className="text-[#141F39] font-semibold mb-6">
                  Will be available for download on
                </p>
                <div className="flex items-center justify-stat gap-4">
                  <motion.button
                    variants={buttonVariants}
                    onClick={() => handleButtonClick("ios")}
                    whileHover="hover"
                    className="inline-flex items-center gap-2 text-primary_color1 font-semibold text-base lg:text-lg  transition-colors group cursor-pointer"
                  >
                    <img src={ios} alt="App Store" className="w-32 h-10" />
                  </motion.button>
                  <motion.button
                    onClick={() => handleButtonClick("android")}
                    variants={buttonVariants}
                    whileHover="hover"
                    className="inline-flex items-center gap-2 text-primary_color1 font-semibold text-base lg:text-lg  transition-colors group cursor-pointer"
                  >
                    <img src={google} alt="Google Play" className="w-32 h-10" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DownloadPage;
