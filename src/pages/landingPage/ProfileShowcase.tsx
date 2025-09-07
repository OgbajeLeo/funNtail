import React from "react";
import { motion } from "framer-motion";
import { Star,} from "lucide-react";
import avatar from "../../assets/ProfileImage.svg"
import phone from "../../assets/Right.webp"

const ProfileShowcaseSection: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.div
        key={index}
      
      >
        <Star
                size={20}
                
          className={`${
            index < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          } transition-colors`}
        />
      </motion.div>
    ));
  };

  return (
    <section className="py-20 bg-[#90919C0F] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Profile Information */}
          <motion.div
           
            className="space-y-8"
          >
            {/* Profile Header */}
            <motion.div
              className="flex items-start space-x-4"
             
            >
              <motion.div
                
                className="relative"
              >
                <img
                  src={avatar}
                  alt="Chizoba Odita"
                  className="w-20 h-20 rounded-full object-cover "
                />
              </motion.div>

              <div className="flex-1">
                <motion.h3
                 
                  className="text-[27px] font-semibold text-gray_text3"
                >
                  Chizoba Odita
                </motion.h3>

                <motion.p
                 
                  className="text-gray_text3 font-normal text-lg mb-2"
                >
                  Pet Groomer
                </motion.p>

                <motion.div
                  className="flex items-center space-x-2"
                  
                >
                  <div className="flex space-x-1">{renderStars(3.8)}</div>
                  <motion.span
                    className="text-gray_text3 font-semibold text-lg ml-2"
                    whileHover={{ color: "#059669" }}
                  >
                    (3.8)
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
             
              className=""
            >
              <motion.p
                className="text-gray_text2 font-normal leading-relaxed text-base lg:text-lg"
                whileHover={{ color: "#374151" }}
                
              >
                "Hi, I'm Chizoba, a passionate pet groomer dedicated to making
                every pet look and feel their best! With over 7 years of
                experience in grooming dogs and cats of all breeds, I specialize
                in breed- specific cuts, deshedding treatments, and gentle
                handling techniques for anxious pets."
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Content - Mobile App Mockup */}
          <motion.div
           
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone Container */}
            <motion.div
              
              className="relative"
              style={{ perspective: "1000px" }}
            >
              {/* Phone Frame */}
              <img
                src={phone}
                alt="Phone"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileShowcaseSection;
