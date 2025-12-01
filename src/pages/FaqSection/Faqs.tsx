import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const petOwnersFAQ: FAQItem[] = [
  {
    id: 1,
    question: "How does the FunNTail booking system work?",
    answer:
      "FunNTail is a pet-care matchmaking platform. Instead of searching endlessly, you post your job and qualified, verified sitters apply. You can review profiles, chat instantly, and pick the perfect match.",
  },
  {
    id: 2,
    question: "Are pet sitters and walkers verified?",
    answer:
      "Yes. Every sitter completes ID verification, uploads pet-related photos, provides references, and details their pet-care experience. Only approved applicants appear on the platform.",
  },
  {
    id: 3,
    question: "What services does FunNTail offer?",
    answer:
      "We offer pet sitting, grooming, and walking nationwide across the UK. Many sitters also provide extras like feeding, administering medication, and overnight stays.",
  },
  {
    id: 4,
    question: "What protection does the FunNTail Guarantee include?",
    answer:
      "Every booking includes FunNTail Protection: up to £20,000 in eligible vet care coverage for accidents during the booking. You also get secure payments, verified sitters, and 24/7 support.",
  },
  {
    id: 5,
    question: "How secure is communication and tracking?",
    answer:
      "You stay connected through built-in messaging, photo updates, booking notes, and live GPS tracking for walks. All communication stays safely in the app.",
  },
  {
    id: 6,
    question: "How do payments and fees work?",
    answer:
      "Pet Owners pay the sitter’s rate plus a 5% FunNTail service fee. Payments are processed securely through Stripe and only charged once you confirm the booking.",
  },
  {
    id: 7,
    question: "How does the cancellation and refund policy work?",
    answer:
      "Refunds depend on how early you cancel. Cancellations over 48 hours in advance receive a full refund. Less than 48 hours follows a tiered policy, and within 1 hour is non-refundable.",
  },
  {
    id: 8,
    question: "Can I meet the sitter before confirming?",
    answer:
      "Yes! FunNTail encourages meet-and-greets. You can message your sitter to arrange a meet-up or chat before the booking.",
  },
  {
    id: 9,
    question: "Does FunNTail work across the UK?",
    answer:
      "Yes — FunNTail is available nationwide. Whether you’re in a major city or a smaller town, sitters can apply to your posted job.",
  },
  {
    id: 10,
    question: "What if I’m not satisfied with the service?",
    answer:
      "Your peace of mind matters. If something goes wrong, contact our 24/7 support team immediately. We’ll investigate, assist with refunds, or help you rebook with a different sitter.",
  },

  {
    id: 11,
    question: "How does FunNTail match me with the right sitter?",
    answer:
      "Our algorithm alerts sitters whose experience, location, and availability match your job. Only suitable, vetted professionals apply.",
  },
  {
    id: 12,
    question: "Can I book recurring services like daily walks?",
    answer:
      "Yes. You can post recurring schedules, and sitters who can commit long-term will apply.",
  },
  {
    id: 13,
    question: "Can sitters care for pets with medical needs?",
    answer:
      "Many sitters are experienced with senior pets, anxiety management, and medication routines. Just include details in your job post.",
  },
  {
    id: 14,
    question: "What happens if my sitter doesn’t show up?",
    answer:
      "Contact FunNTail Support immediately. We will help you find a replacement and may offer refunds depending on the situation.",
  },
  {
    id: 15,
    question: "Are exotic or unusual pets supported?",
    answer:
      "Yes! FunNTail includes sitters experienced with reptiles, birds, rabbits, hamsters, and more. Just specify the species in your post.",
  },
  {
    id: 16,
    question: "Do sitters bring their own supplies?",
    answer:
      "Most sitters rely on your pet’s own food, lead, medication, crates, or grooming tools. Details can be discussed in chat.",
  },
  {
    id: 17,
    question: "Can I make changes to my booking after confirming?",
    answer:
      "Yes, you can adjust times, instructions, or add-on services. The sitter must accept the changes before they apply.",
  },
  {
    id: 18,
    question: "How do I know the sitter actually arrived?",
    answer:
      "Sitters check in through the app, and you’ll receive a notification along with live tracking and time-stamped activity updates.",
  },
  {
    id: 19,
    question: "Does FunNTail allow last-minute bookings?",
    answer:
      "Yes. Many sitters accept same-day or even same-hour bookings depending on availability.",
  },
  {
    id: 20,
    question: "Can I request multiple sitters at once?",
    answer:
      "Yes. You can post a job publicly and multiple sitters may apply. You choose your preferred match.",
  },
];

const petWorkersFAQ: FAQItem[] = [
  {
    id: 1,
    question: "How do I become a pet worker on FunNTail?",
    answer:
      "Sign up, complete your profile with photos and experience, verify your identity, provide references, and pass our approval process.",
  },
  {
    id: 2,
    question: "How does FunNTail’s matchmaking system help me get jobs?",
    answer:
      "Owners post jobs and qualified sitters apply. The more complete and trustworthy your profile, the more likely you are to be selected.",
  },
  {
    id: 3,
    question: "How much can I earn on FunNTail?",
    answer:
      "Walks average £10–£20, and overnight stays £25–£50. Your earnings vary based on location, services, experience, and demand.",
  },
  {
    id: 4,
    question: "How and when do I get paid?",
    answer:
      "Sitters earn 85% of the booking. Payouts are sent to your bank through Stripe 48 hours after the service ends.",
  },
  {
    id: 5,
    question: "What protection does FunNTail provide for sitters?",
    answer:
      "You are protected by liability coverage during bookings and have 24/7 access to support for emergencies.",
  },
  {
    id: 6,
    question: "Can I choose which pets and jobs to accept?",
    answer:
      "Yes. You are free to apply to jobs you want and decline any that don’t match your preferences.",
  },
  {
    id: 7,
    question: "What happens if I need to cancel a booking?",
    answer:
      "Each cancellation adds a strike. Three strikes result in removal, and fraudulent cancellations may cause instant suspension.",
  },
  {
    id: 8,
    question: "How do I build a strong reputation?",
    answer:
      "Respond quickly, show professionalism, follow owner instructions, and maintain a complete profile to increase positive reviews.",
  },
  {
    id: 9,
    question: "Can I work in multiple areas or postcodes?",
    answer:
      "Yes. You can expand your service areas anytime to increase visibility and bookings.",
  },
  {
    id: 10,
    question: "Are there subscriptions or extra fees?",
    answer:
      "No subscriptions. Owners pay a 5% service fee, and sitters keep 85% of every booking.",
  },

  {
    id: 11,
    question: "How do I stand out to pet owners?",
    answer:
      "Upload high-quality pet photos, write a warm bio, list your skills, and respond quickly to job posts.",
  },
  {
    id: 12,
    question: "Can I offer additional services like training or grooming?",
    answer:
      "Yes. Many sitters add grooming assistance, puppy training, or medication handling to increase earnings.",
  },
  {
    id: 13,
    question: "What if a pet behaves aggressively?",
    answer:
      "Stay calm, follow the owner’s notes, and contact support if needed. You may decline any booking if uncomfortable.",
  },
  {
    id: 14,
    question: "Can I bring my own pets to a booking?",
    answer:
      "This is allowed only with owner approval. Always discuss it beforehand via chat.",
  },
  {
    id: 15,
    question: "How quickly should I respond to job posts?",
    answer:
      "The first 10 minutes drastically increase your chances of being chosen. Fast responses build trust and visibility.",
  },
  {
    id: 16,
    question: "How do taxes work on FunNTail?",
    answer:
      "Sitters are independent workers and are responsible for reporting their own income to HMRC.",
  },
  {
    id: 17,
    question: "What if the owner provides incomplete instructions?",
    answer:
      "Message them to ask for clarity before the booking begins. Clear communication prevents issues.",
  },
  {
    id: 18,
    question: "Can I decline a job after applying?",
    answer:
      "Yes, as long as the booking hasn’t been confirmed. After confirmation, cancellation rules apply.",
  },
  {
    id: 19,
    question: "How does GPS tracking work for walkers?",
    answer:
      "Walkers start a GPS-tracked session. Owners see routes, duration, and time-stamped photo updates.",
  },
  {
    id: 20,
    question: "Do I need professional experience?",
    answer:
      "Not required, but helpful. Many sitters start with personal pet experience. Training resources are available in-app.",
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
