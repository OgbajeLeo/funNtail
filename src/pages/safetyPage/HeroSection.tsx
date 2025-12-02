import { motion } from "framer-motion";
import image1 from "../../assets/Frame 2147223916.webp";
import image2 from "../../assets/Frame 2147223919.webp";
import image3 from "../../assets/Frame 2147223919-1.webp";

const HeroSection = () => {
  return (
    <motion.div className="relative overflow-hidden bg-gradient-to-br from-[#F5F5F5] to-[#E8F5F3] pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 mb-6 lg:mb-20">
        <motion.h1 className="text-gray_text3 text-2xl lg:text-[32px] font-bold leading-tight text-center my-6">
          FunNTail Safety & Trust Standards{" "}
        </motion.h1>
        <motion.p
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-black text-base leading-relaxed text-start md:text-center"
        >
          At FunNTail, we believe happy pets begin with a community built on
          safety and trust. These guidelines share how owners, pet workers, and
          our team work together to create caring, safe, and positive moments
          for every pet.
        </motion.p>

        <motion.p
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-black text-base leading-relaxed text-start md:text-center mt-2"
        >
          We take steps to protect our community whenever behavior is unsafe,
          dishonest, or inappropriate, as described in our Terms & Conditions.
        </motion.p>
      </div>

      <div className="container mx-auto w-full max-w-7xl px-6 mb-6 lg:mb-20">
        <div className="justify-between items-center gap-6 lg:gap-10 flex flex-col-reverse lg:flex-row">
          {/* Left content */}
          <motion.div className="text-left space-y-6 max-w-[780px] w-full">
            <motion.h1 className="text-[20px] lg:text-[24px] max-w-[580px] w-full font-semibold leading-[140%]">
              For Pet Owners
            </motion.h1>

            <motion.div className="text-base lg:text-lg text-gray_text3 font-[400] leading-tight max-w-[780px] w-full">
              <ul className="list-disc list-outside pl-6 space-y-1 text-lg w-full">
                <li className="leading-tight">
                  <span>Respect the community</span> → Treat sitters, groomers,
                  walkers, and the FunNTail team with kindness and
                  professionalism.
                </li>

                <li className="leading-tight">
                  <span>Connect early</span> → Chat with your sitter before
                  booking to ensure they understand your pet’s needs.
                </li>

                <li className="leading-tight">
                  <span>Be clear and accurate</span> → Provide complete care
                  instructions and keep your contact and emergency details
                  updated.
                </li>

                <li className="leading-tight">
                  <span>Use FunNTail for all bookings</span> → Keep payments and
                  messages on the platform for safety, fraud prevention, and
                  full protection.
                </li>
              </ul>

              <p className="mt-3 leading-tight">
                Read all community guidelines for Pet Owners
              </p>
            </motion.div>
          </motion.div>

          {/* Right content - Pet safety images collage */}
          <motion.div
            className="relative flex justify-center items-center"
            animate="float"
          >
            <img
              src={image1}
              alt="hero"
              className="w-full max-w-[490px] max-h-[484px] h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto w-full max-w-7xl px-6 mb-6 lg:mb-20">
        <div className="justify-between items-center gap-6 lg:gap-10 flex flex-col-reverse lg:flex-row-reverse">
          {/* Left content */}
          <motion.div className="text-left space-y-6 max-w-[782px] w-full">
            <motion.h1 className="text-[20px] lg:text-[24px] max-w-[580px] w-full font-semibold leading-[140%]">
              For Pet Workers
            </motion.h1>

            <motion.div className="text-base lg:text-lg text-gray_text3 font-[400] leading-tight max-w-[782px] w-full">
              <ul className="list-disc list-outside pl-6 space-y-1 text-lg w-full">
                <li className="leading-tight">
                  Respect the community → Treat pet owners, pets, and the
                  FunNTail team with professionalism and care.
                </li>

                <li className="leading-tight">
                  Accept responsibly → Only take bookings you’re confident you
                  can handle based on your time, experience, and the pet’s
                  needs.
                </li>

                <li className="leading-tight">
                  Prioritize safety → Provide a secure, calm, and attentive
                  environment for every animal in your care.
                </li>

                <li className="leading-tight">
                  Stay on FunNTail → Keep all communication, scheduling, and
                  payments within the platform for safety, transparency, and
                  support.
                </li>
              </ul>

              <p className="mt-3 leading-tight">
                Read all community guidelines for Pet Workers
              </p>
            </motion.div>
          </motion.div>

          {/* Right content - Pet safety images collage */}
          <motion.div
            className="relative flex justify-center items-center"
            animate="float"
          >
            <img
              src={image2}
              alt="hero"
              className="w-full max-w-[490px] max-h-[484px] h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto w-full max-w-7xl px-6 mb-6 lg:mb-20">
        <div className="justify-between items-center gap-6 lg:gap-10 flex flex-col-reverse lg:flex-row">
          {/* Left content */}
          <motion.div className="text-left space-y-6 max-w-[780px] w-full">
            <motion.h1 className="text-[20px] lg:text-[24px] max-w-[580px] w-full font-semibold leading-[140%]">
              Our Role
            </motion.h1>

            <motion.div className="text-base lg:text-lg text-gray_text3 font-[400] leading-tight max-w-[780px] w-full">
              <ul className="list-disc list-outside pl-6 space-y-1 text-lg w-full">
                <li className="leading-tight">
                  Build trust → We verify sitters, use GPS tracking, secure
                  payments, and offer in-app support to protect our community.
                </li>

                <li className="leading-tight">
                  Promote fairness → We support pet workers with fair pay
                  practices and protect owners with transparent processes.
                </li>

                <li className="leading-tight">
                  Take action → If unsafe or dishonest behavior occurs, we
                  investigate and enforce our policies to keep everyone safe.
                </li>

                <li className="leading-tight">
                  Empower the community → We provide education, tools, and
                  resources to help both owners and workers succeed with
                  confidence.
                </li>
              </ul>

              <p className="mt-3 leading-tight">
                Read all community guidelines for FunNTail
              </p>
            </motion.div>
          </motion.div>

          {/* Right content - Pet safety images collage */}
          <motion.div className="relative flex justify-center items-center">
            <img
              src={image3}
              alt="hero"
              className="w-full max-w-[490px] max-h-[484px] h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
