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
}) => {
  return (
    <motion.div className="bg-white rounded-xl px-6 py-8 shadow-2xl hover:shadow-xl transition-all duration-300 max-h-[390px] group lg:mx-auto mx-8">
      <motion.div className="mb-6">
        <div className=" flex items-center justify-center text-white">
          {icon}
        </div>
      </motion.div>

      <motion.h3 className="text-lg lg:text-2xl text-center font-semibold text-gray_text3 mb-3 group-hover:text-primary_color transition-colors">
        {title}
      </motion.h3>

      <motion.p className="text-[#032921] lg:text-sm text-sm text-center leading-relaxed">
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
        "Read paws-itively awesome, verified reviews from pet parents just like you! Pick a fully screened FunNTail sitter who’s the perfect match for you and your furry superstar.",
      delay: 0.1,
    },
    {
      icon: <CreditCard />,
      title: "Book & Pay",
      description:
        "Booking and secure payments are a breeze with the FunNTail app — tail-waggingly simple!",
      delay: 0.2,
    },
    {
      icon: <Chat />,
      title: "Relax",
      description:
        "Stay connected with cute photo updates and messaging. Every booking is covered by FunNTail Protect with 24/7 support. Peace of mind, the FunNTail way!",
      delay: 0.3,
    },
    {
      icon: <Refresh />,
      title: "Repeat Anytime",
      description:
        "Loved your sitter? Re-book them in seconds and keep your pet happy with a familiar friend!.",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20 bg-[#1ABC9C1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16">
          <motion.h2
            className="text-xl md:text-[28px]  font-semibold text-gray_text3 leading-tight"
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
