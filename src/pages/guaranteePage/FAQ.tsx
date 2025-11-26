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
    question: "How do I book a pet sitter or walker on FunNTail?",
    answer:
      "The Rover Guarantee provides protection for eligible claims up to £25,000 in vet care reimbursement for injuries to pets, property damage to the pet owner's home caused by a sitter or dog walker, and certain out-of-pocket medical costs for third-party injuries. It covers incidents that occur during fully booked and paid services on FunNTail.",
  },
  {
    id: 2,
    question: "Are the pet sitters and walkers verified or background checked?",
    answer:
      "Absolutely! Every worker goes through an ID check, shares photos with pets, and fills out an experience form before they’re approved. We take your pet’s safety seriously",
  },
  {
    id: 3,
    question: "What if I need to cancel a booking?",
    answer:
      "To book a pet sitter or walker, simply browse through our verified pet care professionals, check their profiles and reviews, select your preferred dates and services, and confirm your booking with secure payment.",
  },
  {
    id: 4,
    question: "How do I pay, and is it secure?",
    answer:
      "We use industry-standard encryption and secure payment processing. You can pay with major credit cards, debit cards, or digital wallets. Payment is only processed after you confirm your booking.",
  },
  {
    id: 5,
    question: "Can I request things like overnight stays or pet grooming?",
    answer:
      "Yes! Many of our pet care professionals offer additional services like overnight stays, pet grooming, feeding, and medication administration. You can specify your needs when booking.",
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
            Find answers to common questions about our protection and guarantee
            policies.
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
