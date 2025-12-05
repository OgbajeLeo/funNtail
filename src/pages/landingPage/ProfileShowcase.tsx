import React from "react";
import { motion } from "framer-motion";
import avatar from "../../assets/ProfileImage.svg";
import phone from "../../assets/right4.png";
import { StarIcon } from "./Testimonials";


const ProfileShowcaseSection: React.FC = () => {
   const renderStars = (rating: number) => {
     return Array.from({ length: 5 }, (_, i) => (
       <StarIcon key={i} size={24} fill={i < rating ? "#FBBF24" : "#E5E4E4"} />
     ));
   };

  return (
    <section className="py-20 bg-[#90919C0F] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Profile Information */}
          <motion.div className="space-y-8">
            {/* Profile Header */}
            <motion.div className="flex items-start space-x-4">
              <motion.div className="relative">
                <img
                  src={avatar}
                  alt="Chizoba Odita"
                  className="w-20 h-20 rounded-full object-cover "
                />
              </motion.div>

              <div className="flex-1">
                <motion.h3 className="text-[27px] font-semibold text-gray_text3">
                  Maya Thompson{" "}
                </motion.h3>

                <motion.p className="text-gray_text3 font-normal text-lg mb-2">
                  Pet Sitter
                </motion.p>

                <motion.div className="flex items-center space-x-2">
                  <div className="flex space-x-1">{renderStars(4)}</div>
                  <motion.span
                    className="text-gray_text3 font-semibold text-lg ml-2"
                    whileHover={{ color: "#059669" }}
                  >
                    (4.8)
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div className="">
              <motion.p
                className="text-gray_text2 font-normal leading-relaxed text-base lg:text-lg"
                whileHover={{ color: "#374151" }}
              >
                "Hi, I'm Maya — a caring and dependable pet sitter with over 7
                years of experience looking after dogs and cats of all
                personalities. I specialize in creating a safe, comfortable, and
                fun environment, offering gentle care for anxious pets and
                plenty of love, playtime, and companionship."
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Content - Mobile App Mockup */}
          <motion.div className="relative flex justify-center lg:justify-end">
            {/* Phone Container */}
            <motion.div className="relative" style={{ perspective: "1000px" }}>
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
