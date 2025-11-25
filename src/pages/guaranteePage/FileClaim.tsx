import { motion } from "framer-motion";
import sleepingcat from "../../assets/sleepingCat.jpg";

const FileClaim = () => {
  const steps = [
    {
      id: 1,
      number: "1",
      title: "Report the incident quickly",
      description:
        "Let Funntail Support know as soon as something happens — and definitely within 48 hours after the service ends. Early reporting helps us step in fast and keep everything clear.",
    },
    {
      id: 2,
      number: "2",
      title: "Reach out to the other party",
      description:
        "Message the sitter or pet owner through your Funntail inbox to try resolving the issue together. Keeping the conversation on-platform makes sure there's a record if we need to review it.",
    },
    {
      id: 3,
      number: "3",
      title: "Submit your claim for review",
      description:
        "Let Funntail Support know as soon as something happens — and definitely within 48 hours after the service ends. Early reporting helps us step in fast and keep everything clear.",
    },
  ];

  return (
    <section className="bg-[#1ABC9C0D] py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="mb-8 md:mb-12 lg:mb-16 text-center"
        >
          <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-bold text-gray_text3 mb-3">
            How to File a Claim
          </h2>
          <p className="text-gray_text2 text-base md:text-base lg:text-[20px] leading-relaxed max-w-[1352px] mx-auto text-left md:text-center">
            To be covered, the injury or damage has to happen during a service
            that was fully booked and paid for on FunNTail. If something goes
            wrong and the person responsible can't (or won't) handle the cost,
            the Guarantee steps in to help with reimbursement.
          </p>
        </motion.div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start w-full">
          {/* Left Column - Image */}
          <motion.div
            className="w-full"
          >
            <div className="rounded-2xl md:rounded-[40px] overflow-hidden">
              <img
                src={sleepingcat}
                alt="sleeping cat"
                className="w-full h-[300px] md:h-[525px] lg:h-[540px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Steps */}
          <motion.div
           
            className="w-full space-y-8 md:space-y-10 lg:space-y-12"
          >
            {steps.map((step,) => (
              <motion.div
                key={step.id}
                className="flex gap-4 md:gap-6 items-start"
              >
                {/* Step Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-full bg-[#1ABC9C33] flex items-center justify-center">
                    <span className="text-primary_color text-xl lg:text-[37px] font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-1 md:pt-2">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray_text3 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray_text2 text-sm md:text-base lg:text-[18px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FileClaim;
