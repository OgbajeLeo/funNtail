import { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const guaranteeFAQ: FAQItem[] = [
  {
    id: 1,
    question: "What does the FunNTail Guarantee cover?",
    answer:
      "The FunNTail Guarantee provides up to £20,000 in eligible veterinary reimbursement for injuries that occur during a fully booked and paid service. It also covers certain types of property damage and limited third-party medical costs when the responsible party cannot or will not pay.",
  },
  {
    id: 2,
    question: "What types of incidents are not covered?",
    answer:
      "The Guarantee does not cover pre-existing conditions, injuries to sitters or family members, damage to a sitter’s property, preventable issues (such as fleas or ticks), or costs occurring more than 30 days after the incident.",
  },
  {
    id: 3,
    question: "Do I need to report incidents within a specific time frame?",
    answer:
      "Yes. Any injury or damage must be reported to FunNTail Support as soon as possible — and no later than 48 hours after the booking ends. Delayed reporting may affect eligibility.",
  },
  {
    id: 4,
    question: "When should I file a claim with my insurance provider?",
    answer:
      "If you have an insurance policy that may cover the incident (such as pet, renters, or homeowners insurance), you should file with them first. The FunNTail Guarantee may cover eligible costs not handled by your provider, such as deductibles or remaining balances.",
  },
  {
    id: 5,
    question: "What documentation is required to submit a claim?",
    answer:
      "Depending on the incident, you may need vet invoices, treatment notes, photos, receipts, proof of ownership for damaged items, or other relevant evidence. All documentation must be provided within seven days to ensure a smooth review process.",
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    if (openItem === id) {
      setOpenItem(null);
    } else {
      setOpenItem(id);
    }
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div className="mb-8 md:mb-12 lg:mb-16 text-center">
          <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-bold text-gray_text3 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray_text2 text-base md:text-base lg:text-[18px] leading-relaxed max-w-[1352px] mx-auto">
            Find answers to the most common questions about the FunNTail
            Guarantee and how it protects you.{" "}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {guaranteeFAQ.map((item) => {
            const isOpen = openItem === item.id;

            return (
              <motion.div
                key={item.id}
                className={`rounded-sm lg:rounded-md transition-all duration-300 ${
                  isOpen
                    ? "bg-[#1ABC9C1A] border border-primary_color/20"
                    : "bg-white text-gray_text3 border border-transparent"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full lg:px-6 px-4 py-4 text-left flex items-center justify-between focus:outline-none rounded-md"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <span className="text-primary_color font-semibold text-lg min-w-[2rem]">
                      {item.id.toString().padStart(2, "0")}
                    </span>
                    <span
                      className={`${
                        isOpen
                          ? "text-primary_color font-semibold"
                          : "text-gray_text3"
                      } font-medium text-sm lg:text-lg text-left`}
                    >
                      {item.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <svg
                      className={`w-6 h-6 text-gray_text2 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      fill="none"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4">
                    <div className="lg:pl-12 pl-6 text-gray_text2 text-sm lg:text-base leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
