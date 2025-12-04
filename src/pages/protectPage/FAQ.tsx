import { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const protectionFAQ: FAQItem[] = [
  {
    id: 1,
    question: "What is FunNTail Protection?",
    answer:
      "FunNTail Protection is our safety coverage included with every eligible booking. It provides support for accidents, injuries, or unexpected issues that occur during a confirmed and fully paid service.",
  },
  {
    id: 2,
    question: "What does FunNTail Protection cover?",
    answer:
      "It includes up to £20,000 in eligible vet care for accidents during a booking, coverage for certain damages caused by a sitter, and access to guidance from our support team if an incident occurs.",
  },
  {
    id: 3,
    question: "Does FunNTail Protection cover pre-existing health issues?",
    answer:
      "No. Protection only applies to new, unexpected injuries or incidents that occur during the booking. Any illness or condition that existed before the service begins is not eligible.",
  },
  {
    id: 4,
    question: "What should I do if an incident happens during a booking?",
    answer:
      "Contact FunNTail Support immediately. We’ll guide you through next steps, help document the situation, and advise on care or reimbursement eligibility.",
  },
  {
    id: 5,
    question: "Is the sitter also covered under FunNTail Protection?",
    answer:
      "Sitters receive liability protection for accidental pet injuries or certain property-related incidents that occur during a confirmed booking, as long as platform rules are followed.",
  },
  {
    id: 6,
    question: "Is FunNTail Protection the same as insurance?",
    answer:
      "No. It is not a traditional insurance policy. It’s a safety program designed to support owners and sitters in qualifying situations during bookings made on FunNTail.",
  },
  {
    id: 7,
    question: "Do I need to pay extra for FunNTail Protection?",
    answer:
      "No. It’s included automatically with every confirmed and fully paid booking — no subscriptions or additional fees required.",
  },
  {
    id: 8,
    question: "When is a claim not eligible for Protection?",
    answer:
      "Claims are not eligible if the booking wasn’t paid on FunNTail, if instructions were ignored, if the pet had a pre-existing condition, or if off-platform actions contributed to the incident.",
  },
  {
    id: 9,
    question: "Does FunNTail Protection cover property damage?",
    answer:
      "Certain accidental property damage caused by a sitter during a booking may be eligible. Requirements and limits apply and are reviewed case-by-case.",
  },
  {
    id: 10,
    question: "How do I submit a protection claim?",
    answer:
      "Start by contacting FunNTail Support within 48 hours of the incident. We’ll ask for documentation such as vet invoices, photos, or written statements, and then guide you through the full review process.",
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
            Find answers to the most common questions about FunNTail’s
            protection coverage and safety policies.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {protectionFAQ.map((item) => {
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
                  className="w-full lg:px-6 px-4 py-9 text-left flex items-center justify-between focus:outline-none rounded-md"
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
