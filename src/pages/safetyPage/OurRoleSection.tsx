import React from "react";
import { motion } from "framer-motion";
import frame3 from "../../assets/frame3.webp";
import frame5 from "../../assets/frame5.webp";
import frame4 from "../../assets/frame4.jpg";
import frame2 from "../../assets/frame2.jpg";
import frame1 from "../../assets/frame1.jpg";

interface RoleCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const RoleCard: React.FC<RoleCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="   overflow-hidden  transition-shadow duration-300"
    >
      <div className="aspect-video w-full rounded-2xl overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover "
        />
      </div>
      <div className="py-3">
        <h3 className="text-xl md:text-[20px] font-semibold text-gray_text3 mb-1">
          {title}
        </h3>
        <p className="text-black font-normal">{description}</p>
      </div>
    </motion.div>
  );
};

const OurRoleSection: React.FC = () => {
  const roleData = [
    {
      title: "Reporting and blocking",
      description:
        "If someone behaves inappropriately, you can easily report or block them directly in the app. Every report is reviewed by our safety team, and action is taken when necessary to protect the community",
      imageSrc: frame1,
      imageAlt: "Person using tablet for reporting functionality",
    },
    {
      title: "24/7 support",
      description:
        "Whether it’s a quick question or an urgent concern, our support team is available 24/7. We’re here to help, resolve issues, and guide you whenever you need us.”",
      imageSrc: frame2,
      imageAlt: "Customer support representative at desk",
    },
    {
      title: "FunNTail Guarantee",
      description:
        "Your safety and trust come first. With the FunNTail Guarantee, every booking is backed by additional protection so you can rely on a secure and dependable experience.",
      imageSrc: frame3,
      imageAlt: "Woman holding cat showing trust and care",
    },
    {
      title: "Security and encryption",
      description:
        "Your privacy matters. All data, messages, and payments are secured with industry-leading encryption to ensure your information stays safe at all times.",
      imageSrc: frame4,
      imageAlt: "Security concept with wooden blocks spelling SECURITY",
    },
    {
      title: "Booking Protection",
      description:
        "If plans change or unexpected issues arise, FunNTail’s Booking Protection has you covered. We step in to support you and make sure your pets stay safe and cared for.",
      imageSrc: frame5,
      imageAlt: "Two women with white rabbit showing care and protection",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div>
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray_text3 mb-16">
            Our Role
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {roleData.slice(0, 3).map((role, index) => (
              <RoleCard
                key={index}
                title={role.title}
                description={role.description}
                imageSrc={role.imageSrc}
                imageAlt={role.imageAlt}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-8 lg:mt-10">
            {roleData.slice(3).map((role, index) => (
              <RoleCard
                key={index + 3}
                title={role.title}
                description={role.description}
                imageSrc={role.imageSrc}
                imageAlt={role.imageAlt}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurRoleSection;
