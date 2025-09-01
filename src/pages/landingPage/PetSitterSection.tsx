import React from "react";
import { motion } from "framer-motion";
import CreditCard from "../../components/iconComponent/CreditCard";
import Search from "../../components/iconComponent/Search";
import Chat from "../../components/iconComponent/Chat";
import Refresh from "../../components/iconComponent/Refresh";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      }}
      className="bg-white rounded-xl px-6 py-8 shadow-2xl hover:shadow-xl transition-all duration-300 max-h-[390px] group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="mb-6"
      >
        <div className=" flex items-center justify-center text-white">
          {icon}
        </div>
      </motion.div>

      <motion.h3
        className="text-2xl text-center font-semibold text-gray_text3 mb-3 group-hover:text-primary_color transition-colors"
        whileHover={{ x: 5 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-[#032921] text-sm text-center leading-relaxed"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const PetSittersSection: React.FC = () => {
  const features = [
    {
      icon: <Search />,
      title: "Search",
      description:
        "Read verified reviews by pet owners like you and choose a screened sitter who's a great match for you and your pets.",
      delay: 0.1,
    },
    {
      icon: <CreditCard />,
      title: "Book & Pay",
      description:
        "No cash or cheques needed - we make it simple to book and make secured payments through our website or app.",
      delay: 0.2,
    },
    {
      icon: <Chat />,
      title: "Relax",
      description:
        "Stay in touch with photos and messaging. Plus, your bookings is backed by FunTail Protect, including 24/7 support and reimbursement for eligible vet care.",
      delay: 0.3,
    },
    {
      icon: <Refresh />,
      title: "Repeat Anytime",
      description:
        "Loved the experience? Re-book your favourite sitter easily for future trips, keeping your pet happy with a familiar face.",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20 bg-[#1ABC9C1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-xl md:text-[28px] font-semibold text-gray_text3 leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Find trusted local pet sitters who care for your pets like their
            own!
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetSittersSection;
