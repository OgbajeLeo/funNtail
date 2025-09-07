import { useRef } from "react";
import { motion,  } from "framer-motion";
import right from "../../assets/desktopCalendar.png"
import right2 from "../../assets/mobileCalendar.png";
import google from "../../assets/andriod.svg";
import apple from "../../assets/apple.svg";
const AboutSection = () => {
  const ref = useRef(null);


  return (
    <div ref={ref} className="bg-gray-50 lg:py-20 py-16 overflow-hidden">
      <div className="container w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:justify-between  mb-20"
        >
          {/* Left Content */}
          <motion.div
            className="space-y-8 max-w-[498px] w-full"
          >
            <motion.h2
              className="text-2xl lg:text-[32px] font-bold text-gray_text3 leading-tight text-center lg:text-left"
             
            >
              Find Reliable & Loving Pet Sitters Near You!
            </motion.h2>

            <motion.p
              className=" text-gray-600 leading-relaxed"
             
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
              <motion.div>
                <h3 className="text-[20px] font-semibold text-gray_text3 mb-4">
                  Available for download on
                </h3>
                <div className="flex  gap-4">
                  <motion.button
                    className="flex items-center font-medium"
                   
                  >
                    <img src={apple} alt="" />
                  </motion.button>

                  <motion.button
                    className="flex items-center  font-medium"
                   
                  >
                    <img src={google} alt="" />
                  </motion.button>
                </div>
              </motion.div>

              <motion.h2
                className="lg:text-[20px] mt-4 font-bold text-gray_text3 leading-tight"
               
              >
                Fast & Easy Booking—Find a Sitter Today!
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
               
              >
                Find a Loving Pet Sitter to Care for Your Pet Like You Would! or
                Find Trusted Sitters for Your Pet’s Comfort and Care!
              </motion.p>
            </div>
          </motion.div>

          {/* Right Content - App Interface Mockup */}
          <motion.div className="">
            <img
              width={712}
              height={800}
              src={right}
              alt="image"
              className="lg:flex hidden"
            />
            <img
              width={712}
              height={600}
              src={right2}
              alt="image"
              className="lg:hidden block"
            />
            <div className="lg:hidden flex flex-col justify-center gap-6 items-center mt-10">
              <motion.div>
                <h3 className="text-[20px] text-center font-semibold text-gray_text3 mb-4">
                  Available for download on
                </h3>
                <div className="flex  gap-4">
                  <motion.button
                    className="flex items-center font-medium"
                   
                  >
                    <img src={apple} alt="" />
                  </motion.button>

                  <motion.button
                    className="flex items-center  font-medium"
                   
                  >
                    <img src={google} alt="" />
                  </motion.button>
                </div>
              </motion.div>

              <motion.h2
                className="lg:text-[20px] font-bold text-center my-4 text-gray_text3 leading-tight"
               
              >
                Fast & Easy Booking—Find a Sitter Today!
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 text-center  leading-relaxed"
               
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
