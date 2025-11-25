
import CallIcon from "../../components/iconComponent/CallIcon";
import CheckIcon from "../../components/iconComponent/CheckIcon";
import HelpIcon from "../../components/iconComponent/HelpIcon";
import ChatIcon from "../../components/iconComponent/Chat2Icon";

const BookingTool = () => {
  const features = [
    {
      icon: <CallIcon />,
      label: "Screened pet sitters",
      description:
        "Find sitters who’ve passed identity verification and have repeat clients. Read trusted reviews to choose someone who’s the perfect match.",
    },
    {
      icon: <CheckIcon />,
      label: "The Rover Guarantee",
      description:
        "If your pet needs vet care during a booking, fast support and up to $25,000 in eligible vet care reimbursement.",
    },
    {
      icon: <HelpIcon />,
      label: "24/7 Trust & Safety Support",
      description:
        "FunNTail’s here for you 24/7 with real support anytime. Your sitter also gets access to vet pros during every booking.",
    },
    {
      icon: <ChatIcon />,
      label: "Messaging and photos",
      description:
        "Stay in the loop with cute photo updates and messages from your sitter.",
    },
  ];

  return (
    <section className="w-full  py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-gray_text3 text-[20px] md:text-[32px] font-bold leading-tight mb-4 md:mb-6">
            Every booking has the tools to help keep you and your pet safe.
          </h2>

          {/* Subtitle */}
          <p className="text-gray_text2 text-base md:text-lg lg:text-xl leading-relaxed max-w-[900px] mx-auto mb-12 md:mb-16 lg:mb-20">
            From real-time updates to vetted sitters and built-in support, you
            get peace of mind from start to finish.
          </p>

          {/* Icons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12 max-w-[1352px] mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="size-[120px] rounded-full bg-primary_color flex items-center justify-center transition-transform duration-300 ">
                  {feature.icon}
                </div>
                <span className="text-black text-sm md:text-[20px] font-semibold">
                  {feature.label}
                </span>
                <p className="text-gray_text3 text-sm md:text-base leading-relaxed max-w-[600px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingTool;
