import { motion } from "framer-motion";
import dog4 from "../../assets/dog4.jpg";

const BookingProtection = () => {
  return (
    <section className="bg-[#1ABC9C0D] py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div className="mb-8 md:mb-12 lg:mb-16 text-center">
          <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-bold text-gray_text3 mb-3">
            Booking Protection You Can Rely On{" "}
          </h2>
          <p className="text-gray_text2 text-base md:text-base lg:text-[18px] leading-relaxed max-w-[1352px] mx-auto text-left md:text-center">
            If a sitter ever needs to cancel unexpectedly, FunNTail makes sure
            you’re never left without options. Every booking includes built-in
            protection to keep your plans secure and your pet cared for.
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div className="bg-[#f5f5f5] p-10 rounded-2xl md:rounded-[40px] shadow overflow-hidden">
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
                  We’ll make sure you’re covered
                </h3>
                <div className="space-y-4">
                  <p className="text-gray_text2 text-sm md:text-base lg:text-lg leading-relaxed">
                    If your sitter cancels close to the start of your booking,
                    you’ll receive a full refund—simple and stress-free.
                  </p>
                  <p className="text-gray_text2 text-sm md:text-base lg:text-lg leading-relaxed">
                    To help you find care quickly, we’ll also provide FunNTail
                    credit you can use toward your next booking with a new
                    sitter.
                  </p>
                </div>
              </div>

              {/* Second Section */}
              <div>
                <h3 className="text-lg md:text-lg lg:text-[20px] font-semibold text-gray_text3 mb-3">
                  Sitter cancelled? We’re here to help.{" "}
                </h3>
                <p className="text-gray_text2 text-sm md:text-base lg:text-lg leading-relaxed">
                  Our team is ready to guide you through finding a trusted
                  replacement. Reach out to{" "}
                  <a
                    href="/contact"
                    className="text-primary_color font-semibold hover:underline"
                  >
                    FunNTail Support
                  </a>{" "}
                  anytime and we’ll help you get a new sitter booked as quickly
                  as possible.
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
