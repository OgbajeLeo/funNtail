import React from "react";
import { motion } from "framer-motion";
import dogandowner from "../../assets/DogandOwner.webp"
import service1 from "../../assets/service1.svg"
import service2 from "../../assets/service2.svg"
import service3 from "../../assets/service3.svg"

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <motion.div
      className="flex items-start space-x-4 group"
    >
      <motion.div
        className="flex-shrink-0 w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center"
      >
        <img src={icon} alt={title} className="w-full h-full object-cover" />
      </motion.div>

      <div className="flex-1">
        <motion.h3
          className="text-lg lg:text-[24px] font-semibold text-[#032921] mb-1 group-hover:text-teal-600 transition-colors"
        
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-gray_text2 text-sm lg:text-base leading-relaxed"
         
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

interface ProtectionFeatureProps {
  title: string;
  description: string;
  
}

const ProtectionFeature: React.FC<ProtectionFeatureProps> = ({
  title,
  description,

}) => {
  return (
    <motion.ul
      viewport={{ once: true }}
      className="flex items-start space-x-3 mb-6 list-disc"
    >
      <li>
        <motion.span
          className="font-semibold text-base lg:text-[18px] text-[#032921]"
          whileHover={{ color: "#0d9488" }}
        >
          {title}
        </motion.span>
        <span className="text-gray_text2"> {description}</span>{" "}
        {title.includes("Guarantee") ? (
          <>
            - <span className="text-primary_color font-semibold underline">learn more</span>
          </>
        ) : null}
      </li>
    </motion.ul>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: service1,
      title: "Pet Sitting",
      description:
        "Your pets stay overnight in your sitter's home. They'll be treated like part of the family in a comfortable environment.",
      delay: 0.1,
    },
    {
      icon: service3,
      title: "Pet Grooming",
      description:
        "Your pets stay overnight in your sitter's home. They'll be treated like part of the family in a comfortable environment.",
      delay: 0.2,
    },
    {
      icon: service2,
      title: "Pet Walking",
      description:
        "Your pets stay overnight in your sitter's home. They'll be treated like part of the family in a comfortable environment.",
      delay: 0.3,
    },
  ];

  const protectionFeatures = [
    {
     
      title: "Screened pet sitters",
      description:
        "have already passed a third-party identity verification and show verified reviews from other pet owners, like you.",
      delay: 0.1,
    },
    {
      
      title: "Messaging & photo updates",
      description: "from your sitter during each booking.",
      delay: 0.2,
    },
    {
      
      title: "The FunNTail Guarantee",
      description:
        "can protect you and your pet for up to £25,000 in eligible vet care.",
      delay: 0.3,
    },
    {
    
      title: "24/7 support",
      description:
        "from the FunNTail team - here to help if you ever need someone to talk to.",
      delay: 0.4,
    },
  ];

  return (
    <section id="services" className="lg:py-20 py-10 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <motion.div
          className="text-center mb-16"
        >
          <motion.h2
            className="text-2xl md:text-[36px] font-semibold text-[#032921] mb-4"
             transition={{ type: "spring", stiffness: 300 }}
          >
            Our Services
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Protection Section */}
        <motion.div
          className="bg-white border border-gray-200 rounded-xl max-w-[1352px] w-full mx-auto overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <motion.div
              className="relative h-96 lg:h-full"
            >
              <img
                src={dogandowner}
                alt="Happy woman with golden retriever"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"
              
              />
            </motion.div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <motion.h3
                className="text-2xl lg:text-[31px] font-bold text-[#032921] mb-3"
              >
                FunNTail Protection
              </motion.h3>

              <motion.p
                className="text-base lg:text-xl text-gray_text2 lg:mb-8 mb-4"
              >
                Find peace of mind with every booking.
              </motion.p>

              {/* Protection Features */}
              <div className="space-y-6 mb-8 p-3">
                {protectionFeatures.map((feature, index) => (
                  <ProtectionFeature
                    key={index}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>

              <motion.div
                viewport={{ once: true }}
              >
                <motion.a
                  href="#"
                  className="flex justify-center text-sm lg:text-base underline text-center items-center text-primary_color  font-semibold  group"
                 
                >
                  Learn more about FunNTail Protection
                 
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default ServicesSection;
