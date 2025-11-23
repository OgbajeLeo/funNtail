import { motion } from "framer-motion"
import dog4 from "../../assets/dog4.jpg"

const BookingProtection = () => {
  return (
    <section className="bg-[#1ABC9C0D] py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div className="mb-8 md:mb-12 lg:mb-16 text-center">
          <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-bold text-gray_text3 mb-3">
            Booking Protection
          </h2>
          <p className="text-gray_text2 text-base md:text-base lg:text-[18px] leading-relaxed max-w-[1352px] mx-auto text-left md:text-center">
            In the rare instance a sitter or dog walker needs to cancel at the
            last minute, we've got your back. Every booking made through Rover
            includes reservation protection. Here's what that means:
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div className="bg-white p-10 rounded-2xl md:rounded-[40px] shadow overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Side - Image */}
            <div className="w-full h-[300px] rounded-2xl md:rounded-[40px] md:h-[400px]">
              <img
                src={dog4}
                alt="Woman hugging a happy dog"
                className="w-full h-full rounded-2xl md:rounded-[40px] object-cover"
              />
            </div>

            {/* Right Side - Text Content */}
            <div className=" flex flex-col justify-between">
              {/* First Section */}
              <div className="mb-8 md:mb-10">
                <h3 className="text-lg lg:text-[20px] font-semibold text-gray_text3 mb-3">
                  We'll help make up the difference
                </h3>
                <div className="space-y-4">
                  <p className="text-gray_text2 text-sm md:text-base lg:text-lg leading-relaxed">
                    You'll receive a full refund if your booking is cancelled by
                    your sitter or dog walker within seven days of the service
                    start date (or within 14 days of the service start date for
                    recognised holidays).
                  </p>
                  <p className="text-gray_text2 text-sm md:text-base lg:text-lg leading-relaxed">
                    We'll also give you Rover credit to put towards the cost of
                    a replacement booking.
                  </p>
                </div>
              </div>

              {/* Second Section */}
              <div>
                <h3 className="text-lg md:text-lg lg:text-[20px] font-semibold text-gray_text3 mb-3">
                  Has your sitter cancelled? Contact us
                </h3>
                <p className="text-gray_text2 text-sm md:text-base lg:text-lg leading-relaxed">
                  We would love to help you find a great replacement. Send Rover
                  Support a{" "}
                  <a
                    href="#"
                    className="text-gray_text2 hover:underline"
                  >
                    message here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingProtection;
