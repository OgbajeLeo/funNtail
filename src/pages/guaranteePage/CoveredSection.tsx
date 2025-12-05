import { motion } from "framer-motion";
import protectionImage from "../../assets/coveredImage.jpg";
const CoveredSection = () => {
  const coveredItems = [
    "Up to £20,000 in eligible veterinary reimbursement for injuries to the pet owner's or sitter's pets.",
    "Damage to the pet owner's home caused by a sitter or dog walker.",
    "Approved out-of-pocket medical expenses for injuries to third parties (not including the pet owner, sitter, or dog walker).",
    "24/7 support whenever you need help.",
  ];

  const notCoveredItems = [
    "Damage to the sitter’s own property or home.",
    "Injuries to sitters or dog walkers.",
    "Injuries to family members, roommates, or anyone living in the home.",
    "Veterinary expenses that occur more than 30 days after the incident.",
    "Pre-existing or preventable conditions such as fleas, ticks, or routine illness.",
  ];

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Image Section */}
        <motion.div className="mb-6 md:mb-8 lg:mb-10">
          <div className="w-full rounded-[40px] overflow-hidden">
            <img
              src={protectionImage}
              alt="Four dogs on leashes in a park setting"
              className="w-full h-[500px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </motion.div>

        {/* Bottom Section - Two Columns */}
        <div className=" p-3 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - What is covered */}
            <motion.div>
              <h2 className="text-[20px] md:text-[28px] lg:text-[28px] font-bold text-primary_color mb-6">
                What the Guarantee Covers
              </h2>
              <ul className="space-y-4">
                {coveredItems.map((item, index) => (
                  <li key={index} className="flex items-start pl-1 lg:pl-4">
                    <span className="text-gray_text3 mr-3 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-gray_text3 text-sm md:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column - What is not covered */}
            <motion.div>
              <h2 className="text-[20px] md:text-[28px] lg:text-[28px] font-bold text-primary_color mb-6">
                What the Guarantee Doesn’t Cover{" "}
              </h2>
              <ul className="space-y-4">
                {notCoveredItems.map((item, index) => (
                  <li key={index} className="flex items-start pl-1 lg:pl-4">
                    <span className="text-gray_text3 mr-3 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-gray_text3 text-sm md:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoveredSection;
