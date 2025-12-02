import { motion } from "framer-motion";
import claim1 from "../../assets/claim1.png";
import claim2 from "../../assets/claim2.png";
import claim3 from "../../assets/claim3.png";

const ClaimSection = () => {
  const steps = [
    {
      id: 1,
      title: "Let FunNTail Know Right Away",
      image: claim1,
      content: [
        "Reach out to FunNTail Support as soon as an incident occurs. Our team is available 24/7 to guide you, answer questions, and help you take the right next steps.",
        "The sooner we know what happened, the faster we can support you — including helping you connect with a vet, providing resources, or advising on urgent situations. Please notify us as quickly as possible after an incident and no later than 48 hours after the booking ends.",
      ],
    },
    {
      id: 2,
      title: "Reach Out to the Other Party",
      image: claim2,
      content: [
        "Send a message through your FunNTail inbox to discuss the situation directly. Many issues are resolved quickly and smoothly through open communication.",
        "Keeping the conversation in your FunNTail inbox ensures everything is documented. If you can’t reach an agreement or need help at any point, just let us know — we’re here to assist.",
      ],
    },
    {
      id: 3,
      title: "Check With Your Insurance Provider",
      image: claim3,
      content: [
        "If you have personal insurance (such as pet, renters, or homeowners insurance) that may cover part of the costs, file a claim with them first.",
        "Once your provider has processed their portion, the FunNTail Guarantee may help cover eligible expenses that remain, such as deductibles or uncovered costs.",
      ],
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div className="mb-8 md:mb-10 lg:mb-12 mx-auto text-center">
          <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-bold text-gray_text3 mb-6 md:mb-8">
            Steps to Take Before Submitting a Claim{" "}
          </h2>
          <p className="text-gray_text2 text-base md:text-base lg:text-lg leading-relaxed max-w-[1352px] mx-auto">
            Before starting a claim, follow these important steps to help us
            understand what happened and support you quickly. Our team is here
            to guide you with care and clarity every step of the way.
          </p>
        </motion.div>

        {/* Steps Sections */}
        <div className="space-y-8 md:space-y-6 lg:space-y-10">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="flex flex-col rounded-[99px] lg:rounded-[999px] p-12 lg:p-6 pr-12 border border-primary_color md:flex-row gap-6 md:gap-8 lg:gap-12 items-start md:items-center bg-[#1ABC9C1A]"
            >
              {/* Circular Image */}
              <div className="flex-shrink-0 gap-20 w-full md:w-auto mx-auto">
                <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden mx-auto md:mx-0 border-2 border-primary_color">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 md:flex-[2] max-w-[868px] w-full">
                <h3 className="text-xl md:text-[24px] font-semibold text-black mb-4 md:mb-6">
                  {step.title}
                </h3>
                <div className="space-y-4 md:space-y-5  pb-20 lg:pb-0">
                  {step.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-black text-base lg:text-base leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClaimSection;
