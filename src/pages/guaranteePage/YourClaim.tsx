import { motion } from "framer-motion";

const YourClaim = () => {
  const vetCareItems = [
    "Full veterinary records, including treatment notes and itemized invoices from a licensed veterinarian.",
    "Photos, receipts, and any additional documents that help explain the injury or support the claim.",
  ];

  const propertyDamageItems = [
    {
      sub: ["Clear photos of the damage from multiple angles."],
    },
    "Receipts, packaging, warranty details, or any proof of ownership that helps confirm the item’s value.",
  ];

  const vetCareNote =
    "Please submit all documentation within seven days of the incident. Once received, our FunNTail Claims Team will review everything to confirm eligibility. If more details are needed, we may reach out to either party for clarification.";

  const propertyDamageNote =
    "Only damage to the pet owner’s property or home may be eligible for coverage. Damage caused by a pet owner’s own dog to their own belongings is generally not covered. We may ask for proof of a homeowners insurance claim or a police report before moving forward.";

  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div className="mb-6 md:mb-8 lg:mb-10 text-center">
          <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-bold text-gray_text3 mb-3">
            What to include when you file a claim
          </h2>
          <p className="text-gray_text2 text-base md:text-base lg:text-[18px] leading-relaxed max-w-[1352px] mx-auto text-left md:text-center">
            As fellow pet owners, we understand how stressful it can be when
            something unexpected happens. To help our team review your claim
            quickly and support you with clarity, please gather as much detail
            as you can. The FunNTail Support and Trust & Safety teams are here
            24/7 to guide you, answer questions, and provide compassionate help
            throughout the entire process.
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
          <motion.div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow">
            <h3 className="text-lg lg:text-[22px] font-semibold text-gray_text3 mb-6">
              What to include for a property damage claim{" "}
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
                            Please provide all relevant documentation,
                            including:{" "}
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
