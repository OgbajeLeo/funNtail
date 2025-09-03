import { motion, type Variants } from "framer-motion";
import image1 from "../../assets/Frame 2147223916.webp"
import image2 from "../../assets/Frame 2147223919.webp"
import image3 from "../../assets/Frame 2147223919-1.webp"

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



  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-br from-[#F5F5F5] to-[#E8F5F3] pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 mb-6 lg:mb-20">
        <motion.h1 className="text-gray_text3 text-2xl lg:text-[32px] font-bold leading-tight text-center my-6">
          FunNTail’s Saftey and Community Guidelines
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-black text-base leading-relaxed text-justify"
        >
          At FunNTail, we believe safety and trust are built when we work
          together as a community. These guidelines outline the role each of
          us—pet owners, pet workers, and the FunNTail team—plays in creating
          safe, respectful, and positive experiences.
          <p className="mt-1">
            {" "}
            We take action when behavior is unsafe, dishonest, or inappropriate,
            as explained in our Terms & Conditions.
          </p>
        </motion.p>
      </div>

      <div className="container mx-auto w-full max-w-7xl px-6 mb-6 lg:mb-20">
        <div className="justify-between items-center gap-6 lg:gap-10 flex flex-col-reverse lg:flex-row">
          {/* Left content */}
          <motion.div
            className="text-left space-y-6 max-w-[780px] w-full"
            variants={textVariants}
          >
            <motion.h1
              className="text-[20px] lg:text-[24px] max-w-[580px] w-full font-semibold leading-[140%]"
              variants={textVariants}
            >
              For Pet Owners
            </motion.h1>

            <motion.div
              className="text-base lg:text-lg text-gray_text3 font-[400] leading-relaxed max-w-[780px] w-full"
              variants={textVariants}
            >
              <ul className="list-disc list-inside space-y-3 text-lg w-full">
                <li className="leading-relaxed">
                  <span>Respect the community</span> → Treat sitters, walkers,
                  and staff with kindness and fairness.
                </li>
                <li className="leading-relaxed">
                  <span>Connect first</span> → Chat with sitters before booking
                  to make sure you're comfortable and your pet's needs are
                  understood.
                </li>
                <li className="leading-relaxed">
                  <span>Share details clearly</span> → Complete your pet's care
                  instructions and keep your contact info (including an
                  emergency contact) up to date.
                </li>
                <li className="leading-relaxed">
                  <span>Stay on FunNTail</span> → Keep all bookings, payments,
                  and messages within the app to ensure safety, prevent fraud,
                  and protect both you and the sitter.
                </li>
                <li className="leading-relaxed">
                  <span>Read all community guidelines</span> for pet owners
                </li>
              </ul>
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
          <motion.div
            className="text-left space-y-6 max-w-[782px] w-full"
            variants={textVariants}
          >
            <motion.h1
              className="text-[20px] lg:text-[24px] max-w-[580px] w-full font-semibold leading-[140%]"
              variants={textVariants}
            >
              For Pet Workers
            </motion.h1>

            <motion.div
              className="text-base lg:text-lg text-gray_text3 font-[400] leading-relaxed max-w-[782px] w-full"
              variants={textVariants}
            >
              <ul className="list-disc list-inside space-y-3 text-lg w-full">
                <li className="leading-relaxed">
                  Respect the community → Treat owners, pets, and staff with
                  professionalism and care.
                </li>
                <li className="leading-relaxed">
                  Accept responsibly → Only take on jobs if you have the skills,
                  time, and resources to meet the pet’s unique needs.
                </li>
                <li className="leading-relaxed">
                  Prioritize safety → Create a secure, loving environment for
                  every animal in your care.
                </li>
                <li className="leading-relaxed">
                  Stay on FunNTail → Keep communication, scheduling, and
                  payments on the app to maintain trust, security, and fair
                  support.
                </li>
                <div className="leading-relaxed">
                  Read all community guidelines for pet sitters
                </div>
              </ul>
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
          <motion.div
            className="text-left space-y-6 max-w-[780px] w-full"
            variants={textVariants}
          >
            <motion.h1
              className="text-[20px] lg:text-[24px] max-w-[580px] w-full font-semibold leading-[140%]"
              variants={textVariants}
            >
              Our Role
            </motion.h1>

            <motion.div
              className="text-base lg:text-lg text-gray_text3 font-[400] leading-relaxed max-w-[780px] w-full"
              variants={textVariants}
            >
              <ul className="list-disc list-inside space-y-3 text-lg w-full">
                <li className="leading-relaxed">
                  Build trust → We verify sitters, provide GPS tracking, secure
                  payments, and offer in-app support to protect our community.
                </li>
                <li className="leading-relaxed">
                  Promote fairness → We support pet workers with fair pay
                  practices and protect owners with transparent processes.
                </li>
                <li className="leading-relaxed">
                  Take action → If unsafe or dishonest behavior occurs, we
                  investigate and enforce our policies to keep everyone safe.
                </li>
                <li className="leading-relaxed">
                  Empower the community → We provide education, tools, and
                  resources to help both owners and workers succeed with
                  confidence.
                </li>
                <div className="leading-relaxed">
                  <span>Read all community guidelines</span> for pet owners
                </div>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right content - Pet safety images collage */}
          <motion.div
            className="relative flex justify-center items-center"
            animate="float"
          >
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
