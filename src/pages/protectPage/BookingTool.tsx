import CallIcon from "../../components/iconComponent/CallIcon";
import CheckIcon from "../../components/iconComponent/CheckIcon";
import HelpIcon from "../../components/iconComponent/HelpIcon";
import ChatIcon from "../../components/iconComponent/Chat2Icon";

const BookingTool = () => {
  const features = [
    {
      icon: <CallIcon />,
      label: "Screened & Verified Sitters",
      description:
        "Every sitter completes identity checks and profile verification. Browse trusted reviews and repeat clients to find the perfect match for your pet.",
    },
    {
      icon: <CheckIcon />,
      label: "FunNTail Guarantee",
      description:
        "If something unexpected happens during a booking, you’re protected with fast support and coverage through the FunNTail Guarantee.",
    },
    {
      icon: <HelpIcon />,
      label: "24/7 Trust & Safety Support",
      description:
        "Our team is available around the clock to help with questions, concerns, and urgent issues—keeping every booking safe and supported.",
    },
    {
      icon: <ChatIcon />, // or replace with a combined/chat-tracking icon if you have one
      label: "Messaging, Photos & Real-Time Tracking",
      description:
        "Stay connected throughout every booking with instant messaging, adorable photo updates, and live GPS tracking for walks and outdoor time.",
    },
  ];

  return (
    <section className="w-full  py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-gray_text3 text-[20px] md:text-[32px] font-bold leading-tight mb-4 md:mb-6">
            Because your pet deserves care that feels safe, connected, and
            trustworthy.
          </h2>

          {/* Subtitle */}
          <p className="text-gray_text2 text-base md:text-lg lg:text-xl leading-relaxed max-w-[900px] mx-auto mb-12 md:mb-16 lg:mb-20">
            With live updates, reliable sitters, and round-the-clock support,
            FunNTail gives you confidence from the moment you book.
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
