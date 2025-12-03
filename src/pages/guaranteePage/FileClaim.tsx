import { motion } from "framer-motion";
import sleepingcat from "../../assets/sleepingCat.jpg";

const FileClaim = () => {
  const steps = [
    {
      id: 1,
      number: "1",
      title: "Gather all required details",
      description:
        "Collect any photos, vet invoices, receipts, or messages related to the incident. Having everything ready helps our team review your claim quickly and accurately.",
    },
    {
      id: 2,
      number: "2",
      title: "Submit your claim to FunNTail",
      description:
        "Complete the claim form and include the details of what happened. The more context you provide, the faster our Trust & Safety team can begin the review.",
    },
    {
      id: 3,
      number: "3",
      title: "Work with our review team",
      description:
        "Once submitted, a FunNTail specialist will reach out if any additional information is needed. We’ll guide you through the process and keep you updated until the claim is resolved.",
    },
  ];

  return (
    <section className="bg-[#1ABC9C0D] py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div className="mb-8 md:mb-12 lg:mb-16 text-center">
          <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-bold text-gray_text3 mb-3">
            Steps to Submit a Claim{" "}
          </h2>
          <p className="text-gray_text2 text-base md:text-base lg:text-[20px] leading-relaxed max-w-[1352px] mx-auto text-left md:text-center">
            For your claim to be eligible, the incident must happen during a
            FunNTail booking that was fully paid through the platform. If
            something goes wrong and the person responsible can’t cover the
            cost, the FunNTail Guarantee is here to help.
          </p>
        </motion.div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start w-full">
          {/* Left Column - Image */}
          <motion.div className="w-full">
            <div className="rounded-2xl md:rounded-[40px] overflow-hidden">
              <img
                src={sleepingcat}
                alt="sleeping cat"
                className="w-full h-[300px] md:h-[525px] lg:h-[540px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Steps */}
          <motion.div className="w-full space-y-8 md:space-y-10 lg:space-y-12">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className="flex gap-4 md:gap-6 items-start"
              >
                {/* Step Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-full bg-[#1ABC9C33] flex items-center justify-center">
                    <span className="text-primary_color text-xl lg:text-[37px] font-semibold">
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
