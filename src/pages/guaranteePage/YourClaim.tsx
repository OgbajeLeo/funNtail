import { motion } from "framer-motion";

const YourClaim = () => {
  const vetCareItems = [
    "All veterinary treatment notes and invoices from a board-certified practising veterinarian.",
    "Any photos, additional receipts and other relevant documents.",
  ];

  const propertyDamageItems = [
    {
      sub: ["Photos of the damage."],
    },
    "Receipts, original product packaging, warranty cards or other proof of ownership to help establish fair market value.",
  ];

  const vetCareNote =
    "All documentation must be submitted within seven days of the injury. Once we've received these documents, Rover's claims team will review to determine eligibility. Should we have additional questions, we may follow up with either party.";

  const propertyDamageNote =
    "Only damages to the pet owner's dwelling or property are eligible. Generally, damages caused by a pet owner's dog to their own property is not covered. We may require you to provide proof of claim submission with your homeowners insurance or a documented police report to move forward with a claim.";

  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div className="mb-6 md:mb-8 lg:mb-10 text-center">
          <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-bold text-gray_text3 mb-3">
            What to include with your claim
          </h2>
          <p className="text-gray_text2 text-base md:text-base lg:text-[18px] leading-relaxed max-w-[1352px] mx-auto text-left md:text-center">
            As pet owners ourselves, we know how emotional and challenging these
            situations can be, which is why we offer the protection of the Rover
            Guarantee. Rover Support and our Trust & Safety team are also
            available 24/7 to help you through this process, answer questions
            and simply be there for you and your pets.
          </p>
        </motion.div>

        {/* Content Cards - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Left Card - Vet Care Claims */}
          <motion.div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow">
            <h3 className="text-lg lg:text-[22px] font-semibold text-gray_text3 mb-6">
              For vet care-related claims, include the following:
            </h3>

            <ul className="space-y-4 mb-6 font-medium">
              {vetCareItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray_text3 mr-3 mt-1 flex-shrink-0 text-lg">
                    •
                  </span>
                  <span className="text-gray_text3 text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Note Section */}
            <div className="bg-[#1ABC9C33] border border-primary_color rounded-[12px] p-4 md:p-5">
              <h4 className="font-bold text-primary_color mb-2 text-base md:text-[22px]">
                Note
              </h4>
              <p className="text-gray_text3 text-sm md:text-base leading-relaxed">
                {vetCareNote}
              </p>
            </div>
          </motion.div>

          {/* Right Card - Property Damage Claims */}
          <motion.div
            
            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow"
          >
            <h3 className="text-lg lg:text-[22px] font-semibold text-gray_text3 mb-6">
              For property damage claims, include the following:
            </h3>

            <ul className="space-y-4 mb-6 font-medium">
              {propertyDamageItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray_text3 mr-3 mt-1 flex-shrink-0 text-lg">
                    •
                  </span>
                  <div className="flex-1">
                    {typeof item === "string" ? (
                      <span className="text-gray_text3 text-sm md:text-base leading-relaxed">
                        {item}
                      </span>
                    ) : (
                      <div>
                        <span className="text-gray_text3 text-sm md:text-base leading-relaxed">
                          <div>
                            All potentially relevant documentation, including
                          </div>
                        </span>
                        <ul className="mt-2 space-y-2 list-disc list-inside">
                          {item.sub.map((subItem, subIndex) => (
                            <li key={subIndex} className="flex  items-start">
                              
                              <span className="text-gray_text3 text-sm md:text-base leading-relaxed">
                                {subItem}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Note Section */}
            <div className="bg-[#1ABC9C33] border border-primary_color rounded-[12px] p-4 md:p-5">
              <h4 className="font-bold text-primary_color mb-2 text-base md:text-[22px]">
                Note
              </h4>
              <p className="text-gray_text3 text-sm md:text-base leading-relaxed">
                {propertyDamageNote}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YourClaim;
