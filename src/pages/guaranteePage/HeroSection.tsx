import { motion } from "framer-motion";
import ArrowRight from "../../components/iconComponent/ArrowRight";
import sittingcat from "../../assets/sittingCat.png";
import sittingdog from "../../assets/sittingDog.png";

const PawPrint = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.7017 20.0044C23.2222 17.881 25.7408 19.4751 29.7973 19.4085C35.6884 19.3669 37.4439 22.389 35.9355 24.6883C34.4272 26.9875 30.7759 26.3809 28.6903 28.4697C26.5098 30.3951 26.8103 34.0459 24.3352 35.2684C21.9076 36.5726 18.9344 34.5874 19.4523 28.8205C19.8418 24.9867 18.4085 22.3234 20.7017 20.0044Z"
        fill="#1ABC9C"
      />
      <path
        d="M25.1241 12.3377C25.6152 15.4206 27.5326 17.7893 29.3928 17.6355C31.334 17.4345 32.5002 14.7806 32.0092 11.6976C31.5181 8.61466 29.6007 6.24604 27.7404 6.39984C25.7993 6.60078 24.633 9.25469 25.1241 12.3377Z"
        fill="#1ABC9C"
      />
      <path
        d="M13.1241 23.4087C16.161 23.9537 18.2252 25.9462 17.8413 27.8221C17.4574 29.6979 14.7251 30.8482 11.6881 30.3033C8.65122 29.7583 6.58703 27.7658 6.97096 25.8899C7.43958 23.9648 10.1719 22.8145 13.1241 23.4087Z"
        fill="#1ABC9C"
      />
      <path
        d="M15.6096 13.1671C17.3477 15.9656 20.2483 17.2788 21.9638 16.1644C23.6793 15.0501 23.6213 11.8508 21.8832 9.05237C20.1452 6.25395 17.2446 4.94072 15.5291 6.05508C13.8135 7.16944 13.8716 10.3687 15.6096 13.1671Z"
        fill="#1ABC9C"
      />
      <path
        d="M14.2519 14.2747C16.7358 16.1 17.6649 18.8307 16.4766 20.3668C15.2065 21.9507 12.2544 21.7699 9.81636 20.0234C7.3325 18.198 6.4034 15.4674 7.59168 13.9312C8.73415 12.3162 11.7681 12.4493 14.2519 14.2747Z"
        fill="#1ABC9C"
      />
    </svg>
  );
};

const HeroSection = () => {
  return (
    <section className="relative  overflow-hidden flex items-center">
      <div className="absolute inset-0 max-w-4xl w-full mx-auto pointer-events-none">
        {/* Bottom Left - Large */}
        <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20">
          <PawPrint size={80} className="" />
        </div>

        <div className="absolute right-32 rotate-[60deg] top-[66%] md:right-40">
          <PawPrint size={80} className="" />
        </div>
        {/* Mid Right - Large */}
        <div className="absolute left-32 top-[55%] md:left-[100px]">
          <PawPrint size={50} className="" />
        </div>
        {/* Bottom Right - Small */}
        <div className="absolute bottom-16 right-16 md:bottom-24 md:right-24">
          <PawPrint size={30} className="" />
        </div>
      </div>

      <div className="max-w-[1544px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3  items-center">
          {/* Left Side - Cat with Teal Shape */}
          <motion.div className="relative hidden lg:block">
            <div className="relative">
              <img
                src={sittingcat}
                alt="Cat"
                className="w-full min-h-[449px] max-w-[450px] h-auto rounded-2xl object-cover"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div className="text-center max-w-[800px] w-full z-20">
            <h1 className="text-[24px] md:text-[48px] lg:text-[48px] xl:text-[48px] px-6 lg:px-0 font-semibold text-gray_text3 mb-3">
              Peace of Mind for Every Pet Parent
            </h1>
            <p className="text-gray_text2 text-base md:text-lg  mb-4 max-w-2xl mx-auto leading-relaxed">
              Every booking made on FunNTail is backed by the FunNTail
              Guarantee, which includes up to £25,000 in vet care for eligible
              claims.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary_color hover:bg-primary_color/90 text-white font-semibold px-8 py-3 rounded-[12px] flex items-center gap-3 mx-auto transition-colors"
            >
              <span>File a Claim</span>
              <ArrowRight />
            </motion.button>
          </motion.div>

          {/* Right Side - Dog with Teal Shape */}
          <motion.div className="relative hidden lg:block">
            <div className="relative">
              <div className="relative z-10 flex justify-end">
                <img
                  src={sittingdog}
                  alt="Dog"
                  className="w-full min-h-[449px] max-w-[450px] h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Images - Show below content on mobile */}
        <div className="lg:hidden mt-12 grid grid-cols-2 gap-6">
          <motion.div className="relative">
            <img
              src={sittingcat}
              alt="Cat"
              className="w-full h-auto min-h-[212px] rounded-2xl object-cover relative z-10"
            />
          </motion.div>
          <motion.div className="relative">
            <img
              src={sittingdog}
              alt="Dog"
              className="w-full h-auto min-h-[212px] rounded-2xl object-cover relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
