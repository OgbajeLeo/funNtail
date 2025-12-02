import { motion } from "framer-motion";
import ArrowRight from "../../components/iconComponent/ArrowRight";
import sittingcat from "../../assets/sittingCat.png";
import sittingdog from "../../assets/sittingDog.png";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <section className="relative  overflow-hidden flex items-center pt-12 lg:pt-0">
      <div className="hidden lg:block absolute inset-0 max-w-4xl w-full mx-auto pointer-events-none">
        <div className="absolute bottom-10 left-40 md:bottom-20 md:left-20">
          <PawPrint size={80} className="" />
        </div>

        <div className="absolute right-12 rotate-[60deg] top-[66%] md:right-40">
          <PawPrint size={80} className="" />
        </div>
        <div className="absolute left-12 top-[55%] md:left-[100px]">
          <PawPrint size={50} className="" />
        </div>
        <div className="absolute bottom-10 right-40 md:bottom-24 md:right-24">
          <PawPrint size={30} className="" />
        </div>
      </div>
      {/* Mobile Paw SVG – Exact Figma Layout */}
      <div className="lg:hidden absolute inset-0 pointer-events-none z-0">
        <svg
          width="140"
          height="267"
          viewBox="0 0 140 267"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-1/2 -translate-x-1/2 bottom-0"
        >
          <svg
            width="140"
            height="267"
            viewBox="0 0 140 267"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.134 22.793c2.982 1.904 2.154 4.996 3.52 9.132 1.927 6.025-.609 8.79-3.448 7.98s-3.385-4.747-6.193-6.216c-2.671-1.619-6.317-.143-8.362-2.289-2.113-2.07-1.03-5.753 5.047-7.067 4.054-.827 6.325-3.148 9.436-1.54m9.266 2.082c-3.002 1.49-4.817 4.213-4.064 6.07.827 1.926 3.92 2.272 6.923.782s4.817-4.212 4.064-6.07c-.827-1.925-3.92-2.271-6.923-.782m-15.185-8.76c.412 3.287-.97 6.04-3.015 6.247s-4.099-2.226-4.512-5.513.97-6.04 3.015-6.247c2.123-.135 4.176 2.297 4.512 5.513m11.298-.727c-2.312 2.676-2.73 6.07-1.04 7.471 1.692 1.402 4.952.32 7.265-2.357s2.73-6.07 1.04-7.472c-1.692-1.402-4.952-.319-7.265 2.358m-1.572-1.039c-1.076 3.13-3.578 4.955-5.532 4.229-2.03-.796-2.79-3.88-1.779-6.937 1.076-3.13 3.578-4.955 5.533-4.229 2.02.654 2.855 3.807 1.778 6.937m90.72 229.428c3.157 1.598 2.64 4.756 4.41 8.737 2.517 5.803.268 8.807-2.637 8.283s-3.841-4.387-6.781-5.57c-2.819-1.345-6.3.486-8.548-1.446-2.308-1.851-1.596-5.623 4.32-7.534 3.951-1.226 5.981-3.762 9.236-2.47m9.427 1.15c-2.84 1.781-4.375 4.671-3.441 6.444 1.014 1.834 4.127 1.871 6.967.091s4.374-4.671 3.44-6.444c-1.014-1.834-4.126-1.871-6.966-.091m-15.981-7.207c.738 3.229-.363 6.106-2.378 6.515s-4.3-1.807-5.037-5.037.363-6.107 2.378-6.516c2.099-.345 4.384 1.871 5.037 5.038m11.165-1.846c-2.034 2.893-2.113 6.311-.291 7.538s4.959-.175 6.993-3.068 2.114-6.311.292-7.538-4.959.175-6.994 3.068m-1.665-.878c-.76 3.221-3.068 5.287-5.085 4.758-2.098-.59-3.16-3.582-2.459-6.725.76-3.222 3.068-5.287 5.085-4.758 2.076.45 3.219 3.504 2.459 6.725M67.588 158.29c1.512-1.274 3.023-.317 5.458-.357 3.535-.025 4.588 1.788 3.683 3.168s-3.096 1.016-4.348 2.269c-1.308 1.156-1.128 3.346-2.613 4.08-1.457.783-3.241-.409-2.93-3.869.234-2.301-.626-3.899.75-5.291m2.655-4.6c.295 1.85 1.446 3.271 2.562 3.179 1.165-.121 1.865-1.713 1.57-3.563s-1.445-3.272-2.562-3.18c-1.165.121-1.864 1.714-1.57 3.564m-7.198 6.643c1.823.327 3.061 1.522 2.831 2.648s-1.87 1.816-3.693 1.489-3.06-1.523-2.83-2.648c.281-1.156 1.92-1.846 3.692-1.489m1.491-6.146c1.042 1.679 2.783 2.467 3.813 1.799 1.029-.669.994-2.589-.049-4.268s-2.783-2.468-3.813-1.799-.994 2.589.049 4.268m-.814.664c1.49 1.095 2.048 2.734 1.335 3.656-.762.95-2.534.842-3.997-.207-1.49-1.095-2.048-2.734-1.335-3.655.686-.97 2.507-.89 3.997.206m62.666-85.406c-1.274-1.512-.318-3.023-.358-5.457-.025-3.535 1.788-4.588 3.168-3.683 1.379.905 1.015 3.096 2.269 4.347 1.155 1.308 3.345 1.128 4.079 2.613.782 1.457-.409 3.24-3.869 2.93-2.3-.234-3.898.626-5.289-.75m-4.597-2.654c1.85-.294 3.271-1.445 3.179-2.56-.121-1.166-1.713-1.865-3.563-1.57-1.849.294-3.27 1.444-3.178 2.56.121 1.165 1.713 1.865 3.562 1.57m6.643 7.201c.327-1.822 1.523-3.06 2.648-2.83s1.816 1.87 1.489 3.691c-.327 1.822-1.523 3.06-2.648 2.83-1.155-.28-1.845-1.92-1.489-3.691m-6.148-1.492c1.679-1.043 2.467-2.783 1.799-3.812-.669-1.03-2.588-.995-4.267.048s-2.467 2.783-1.799 3.813c.669 1.029 2.588.994 4.267-.049m.666.816c1.096-1.49 2.734-2.048 3.656-1.335.95.762.841 2.533-.206 3.996-1.096 1.49-2.734 2.047-3.656 1.334-.969-.685-.889-2.505.206-3.996"
              fill="#1abc9c"
            />
          </svg>{" "}
        </svg>
      </div>

      <div className="max-w-[1544px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3  items-center">
          {/* Left Side - Cat with Teal Shape */}
          <motion.div className="relative hidden lg:block">
            <div className="relative">
              <img
                src={sittingcat}
                alt="Cat"
                className="w-full min-h-[447px] max-w-[447px] h-auto -ml-10 rounded-2xl object-cover"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div className="text-center max-w-[800px] w-full z-20">
            <h1 className="text-[24px] md:text-[48px] lg:text-[48px] xl:text-[48px] px-6 lg:px-0 font-semibold text-gray_text3 mb-3">
              Confidence and protection for every pet parent.{" "}
            </h1>
            <p className="text-gray_text2 text-base md:text-lg  mb-4 max-w-2xl mx-auto leading-relaxed">
              Each FunNTail booking is fully covered under our Guarantee,
              providing up to £20,000 in eligible veterinary support.
            </p>
            <motion.button
              onClick={() => navigate("/contact")}
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
                  className="w-full min-h-[447px] -mr-10 max-w-[447px] h-auto rounded-2xl object-cover"
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
              className="w-full h-auto -ml-14 min-h-[212px] rounded-2xl object-cover relative z-10"
            />
          </motion.div>
          <motion.div className="relative">
            <img
              src={sittingdog}
              alt="Dog"
              className="w-full h-auto ml-10 min-h-[212px] rounded-2xl object-cover relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
