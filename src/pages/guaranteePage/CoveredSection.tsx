import { motion } from "framer-motion";
import protectionImage from "../../assets/coveredImage.jpg";
const CoveredSection = () => {
  const coveredItems = [
    "Up to £20,000 in vet care reimbursement for eligible claims related to injury to either the pet owner's or sitter's pets.",
    "Property damage to the pet owner's home caused by a sitter, or dog walker.",
    "Certain out-of-pocket medical costs for 3rd party injuries (e.g. someone other than the pet owner, sitter, or dog walker).",
    "24/7 support.",
  ];

  const notCoveredItems = [
    "Damages to the sitter's property or home.",
    "Injury to sitters and dog walkers.",
    "Injuries to family members or roommates.",
    "Vet care costs beyond 30 days.",
    "Anything pre-existing or preventable — such as fleas and ticks.",
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Image Section */}
        <motion.div
          className="mb-6 md:mb-8 lg:mb-10"
        >
          <div className="w-full rounded-[40px] overflow-hidden">
 <img
              src={protectionImage}
              alt="Four dogs on leashes in a park setting"
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </motion.div>

        {/* Bottom Section - Two Columns */}
        <div className=" p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - What is covered */}
            <motion.div
             
            >
              <h2 className="text-2xl md:text-[28px] lg:text-[28px] font-bold text-primary_color mb-6">
                What is covered
              </h2>
              <ul className="space-y-4">
                {coveredItems.map((item, index) => (
                  <li key={index} className="flex items-start">
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
            <motion.div
              
            >
              <h2 className="text-2xl md:text-[28px] lg:text-[28px] font-bold text-primary_color mb-6">
                What is not covered
              </h2>
              <ul className="space-y-4">
                {notCoveredItems.map((item, index) => (
                  <li key={index} className="flex items-start">
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
