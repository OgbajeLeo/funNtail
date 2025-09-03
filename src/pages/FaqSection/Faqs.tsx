import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const petOwnersFAQ: FAQItem[] = [
  {
    id: 1,
    question: "How do I book a pet sitter or walker on FunNTail?",
    answer:
      "To book a pet sitter or walker, simply browse through our verified pet care professionals, check their profiles and reviews, select your preferred dates and services, and confirm your booking with secure payment.",
  },
  {
    id: 2,
    question: "Are the pet sitters and walkers verified or background checked?",
    answer:
      "Absolutely! Every worker goes through an ID check, shares photos with pets, and fills out an experience form before they're approved. We take your pet's safety seriously.",
  },
  {
    id: 3,
    question: "What if I need to cancel a booking?",
    answer:
      "You can cancel your booking through your account dashboard. Cancellation policies vary depending on how far in advance you cancel. Full details are available in your booking confirmation.",
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
  {
    id: 6,
    question: "Can I meet a pet worker before confirming a booking?",
    answer:
      "Absolutely! We encourage meet-and-greets before your first booking. You can arrange this through our messaging system to ensure you and your pet feel comfortable.",
  },
  {
    id: 7,
    question: "What if my pet has special needs or health conditions?",
    answer:
      "When booking, you can specify any special needs, medications, or health conditions. Many of our pet workers have experience with special needs pets and can provide the extra care your pet requires.",
  },
  {
    id: 8,
    question: "Is FunNTail available outside major UK cities?",
    answer:
      "We're rapidly expanding across the UK! While we started in major cities, we now serve many smaller towns and rural areas. Check our coverage map or enter your postcode to see available services in your area.",
  },
  {
    id: 9,
    question: "Will I get reminders before my booking?",
    answer:
      "Yes! We'll send you email and SMS reminders 24 hours before your booking, plus any specific instructions or updates from your pet worker.",
  },
  {
    id: 10,
    question: "What if I'm not happy with the service?",
    answer:
      "Your satisfaction is important to us. If you're not happy with the service, contact our customer support team immediately. We'll work to resolve the issue and may offer a refund or rebooking with a different pet worker.",
  },
];

const petWorkersFAQ: FAQItem[] = [
  {
    id: 1,
    question: "How do I become a pet worker on FunNTail?",
    answer:
      "Sign up on our platform, complete your profile with photos and experience details, pass our verification process including ID checks, and you'll be ready to start accepting bookings from pet owners in your area.",
  },
  {
    id: 2,
    question: "What verification process do I need to complete?",
    answer:
      "You'll need to provide valid ID, share photos with pets (if you have them), complete an experience questionnaire, and undergo a background check. This ensures pet owners can trust you with their beloved pets.",
  },
  {
    id: 3,
    question: "How much can I earn as a pet worker?",
    answer:
      "Earnings vary based on services offered, location, and demand. Dog walking typically ranges from £10-20 per walk, while overnight stays can earn £25-50 per night. You set your own rates within market guidelines.",
  },
  {
    id: 4,
    question: "How do I get paid for my services?",
    answer:
      "Payments are processed securely through our platform. You'll receive payment within 24-48 hours after completing a service. We offer direct bank transfer to your registered account.",
  },
  {
    id: 5,
    question: "Can I choose which pets I work with?",
    answer:
      "Yes! You can specify which types of pets you're comfortable with, size preferences, and any animals you'd prefer not to work with. You have full control over accepting or declining booking requests.",
  },
  {
    id: 6,
    question: "What if a pet gets injured while in my care?",
    answer:
      "All verified pet workers are covered by our insurance policy for accidents that occur during bookings. Report any incidents immediately through our emergency support line, and we'll guide you through the process.",
  },
  {
    id: 7,
    question: "How do I handle difficult or anxious pets?",
    answer:
      "We provide training resources and tips for handling various pet behaviors. For anxious pets, take things slow, use calm voices, and follow the owner's specific instructions. You can always contact our support team for guidance.",
  },
  {
    id: 8,
    question:
      "Can I work in multiple areas or do I need to stick to one location?",
    answer:
      "You can work across multiple postcodes and areas. Simply update your service areas in your profile settings. This flexibility allows you to maximize your earning potential.",
  },
  {
    id: 9,
    question: "What happens if I need to cancel a confirmed booking?",
    answer:
      "While we encourage reliability, emergencies happen. Cancel as early as possible through the app and provide a reason. Frequent cancellations may affect your profile rating, so only cancel when absolutely necessary.",
  },
  {
    id: 10,
    question: "How do I build a good reputation and get more bookings?",
    answer:
      "Provide excellent service, be reliable, communicate well with pet owners, arrive on time, and follow all instructions carefully. Positive reviews and ratings will help you attract more bookings and potentially charge higher rates.",
  },
];

const PetCareFAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"owners" | "workers">("owners");
  const [openItem, setOpenItem] = useState<number | null>(2);
  const currentFAQ = activeTab === "owners" ? petOwnersFAQ : petWorkersFAQ;

  const toggleItem = (id: number) => {
    if (openItem === id) {
      setOpenItem(null);
    } else {
      setOpenItem(id);
    }
  };

  const handleTabChange = (tab: "owners" | "workers") => {
    setActiveTab(tab);
    if (tab === "workers") {
      setOpenItem(1);
    } else {
      setOpenItem(2);
    }
  };

  return (
    <div className="max-w-7xl w-full mx-auto lg:p-6 p-2 ">
      {/* Tab Navigation */}
      <div className="flex mb-8">
        <button
          onClick={() => handleTabChange("owners")}
          className={` py-4 text-sm lg:text-lg font-medium w-full rounded-l-md transition-all duration-300 ${
            activeTab === "owners"
              ? "bg-[#1ABC9C1A] text-primary_color font-semibold"
              : "bg-[#E5E4E426] text-gray_text2 "
          }`}
        >
          Help for Pet Owners
        </button>
        <button
          onClick={() => handleTabChange("workers")}
          className={` py-4 text-sm lg:text-lg w-full font-medium rounded-r-md transition-all duration-300  ${
            activeTab === "workers"
              ? "bg-[#1ABC9C1A] text-primary_color font-semibold"
              : "bg-[#E5E4E426] text-gray_text2 "
          }`}
        >
          Help for Pet Workers
        </button>
      </div>

      {/* FAQ Items */}
      <div className="space-y-3">
        {currentFAQ.map((item) => {
          const isOpen = openItem === item.id;

          return (
            <div
              key={`${activeTab}-${item.id}`}
              className={`px-2 rounded-sm lg:rounded-md transition-all duration-300 ${
                isOpen
                  ? "bg-[#1ABC9C1A] border-teal-200"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full lg:px-6 py-4 text-left flex items-center justify-between focus:outline-none rounded-md"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-primary_color font-semibold text-lg min-w-[2rem]">
                    {item.id.toString().padStart(2, "0")}
                  </span>
                  <span
                    className={`${
                      isOpen
                        ? "text-[#1ABC9C] font-semibold"
                        : "text-gray_text3"
                    } font-medium text-sm lg:text-lg`}
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
                  <div className="lg:pl-10 pl-6 text-gray-600 text-sm lg:text-base leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PetCareFAQ;
