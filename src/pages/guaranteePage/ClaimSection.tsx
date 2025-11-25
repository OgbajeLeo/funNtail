import { motion } from "framer-motion";
import claim1 from "../../assets/claim1.png";
import claim2 from "../../assets/claim2.png";
import claim3 from "../../assets/claim3.png";

const ClaimSection = () => {
  const steps = [
    {
      id: 1,
      title: "Notify FunNTail",
      image: claim1,
      content: [
        "Call 888-727-1140 or email trust@rover.com and notify our 24/7 Trust & Safety team of the incident if you have not already. We can't help if we don't know what has happened!",
        "In many cases, we can help you take immediate steps to mitigate the injury or damage caused by an incident, such as connecting you with a board-certified veterinarian by phone or providing resources to help locate a lost pet. For this reason, we ask both pet sitters and pet owners to notify us as soon as possible after an incident occurs - and in any event no later than 48 hours after the booking has ended.",
      ],
    },
    {
      id: 2,
      title: "Contact the other party",
      image: claim2,
      content: [
        "Contact the other party through your Rover inbox to see if you can find a resolution together. We know from experience that issues are often best resolved by simply talking to the other person. It's important to communicate through your Rover inbox so there is a record of the conversation. If you're unable to come to an agreement, absolutely let us know.",
      ],
    },
    {
      id: 3,
      title: "Work with your insurance provider",
      image: claim3,
      content: [
        "If you have insurance that may cover some or all costs arising from an injury or damage otherwise falling under the Rover Guarantee, such as pet or homeowner's insurance, you should file a claim under that policy before seeking reimbursement from Rover. In such a case the Rover Guarantee may be leveraged to meet deductibles or cover costs that fall outside your policy.",
      ],
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div className="mb-8 md:mb-10 lg:mb-12 mx-auto text-center">
          <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-bold text-gray_text3 mb-6 md:mb-8">
            Take these steps before filing a claim
          </h2>
          <p className="text-gray_text2 text-base md:text-base lg:text-lg leading-relaxed max-w-[1352px] mx-auto">
            As pet owners ourselves, we know how emotional and challenging these
            situations can be, which is why we offer the protection of the Rover
            Guarantee. Rover Support and our Trust & Safety team are also
            available 24/7 to help you through this process, answer questions
            and simply be there for you and your pets.
          </p>
        </motion.div>

        {/* Steps Sections */}
        <div className="space-y-8 md:space-y-6 lg:space-y-10">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="flex flex-col rounded-[99px] lg:rounded-[999px] p-6 pr-12 border border-primary_color md:flex-row gap-6 md:gap-8 lg:gap-12 items-start md:items-center bg-[#1ABC9C1A]"
            >
              {/* Circular Image */}
              <div className="flex-shrink-0 gap-20 w-full md:w-auto">
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
