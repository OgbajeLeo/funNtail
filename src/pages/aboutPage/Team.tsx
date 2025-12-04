import { motion } from "framer-motion";
import efe from "../../assets/efe.jpg";
import tens from "../../assets/teni.jpg";
import ogbaje from "../../assets/leo.jpg";
import chizoba from "../../assets/cheezy.jpg";
import bg from "../../assets/navBGG.png";

interface TeamMember {
  name: string;
  title: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Efe Apoki Prayer",
    title: "CTO",
    image: efe,
  },
  {
    name: "Tens",
      title: "CSO",
    image: tens,
  },
  {
    name: "Ogbaje Leo Arome",
    title: "Front-end Engineer",
    image: ogbaje,
  },
  {
    name: "Chizoba Odita",
    title: "Product Designer",
    image: chizoba,
  },
];

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col bg-transparent rounded-xl overflow-hidden min-w-[320px] w-full mx-auto"
    >
      {/* Image Container */}
      <div className="relative w-full overflow-hidden border border-white rounded-xl">
        
          <img
            src={member.image}
            alt={member.name}
            className="min-w-[320px] lg:max-w-[320px] w-full h-[392px] object-cover"
          />
        
        {/* Info Overlay  */}
        <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
          <div className="relative bg-[#1ABC9C80] px-4 py-3 lg:px-5 lg:py-4 overflow-hidden rounded-lg">
            <img
              src={bg}
              alt="bg"
              className="absolute opacity-20 bg-transparent top-0 left-0 w-full h-full object-cover"
            />
            <div className="relative z-10">
              <h3 className="text-gray_text3 font-bold text-base lg:text-lg mb-0.5 lg:mb-1">
                {member.name}
              </h3>
              <p className="text-gray_text3 text-xs sm:text-sm  opacity-95">
                {member.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section className="w-full bg-[#1ABC9C1A]  py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gray_text3 text-2xl lg:text-4xl xl:text-4xl font-bold text-center mb-8 lg:mb-12"
        >
          Meet the Team
        </motion.h2>

        {/* Team Cards Grid */}
        <div className="flex justify-center items-center flex-col lg:flex-row w-full gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
