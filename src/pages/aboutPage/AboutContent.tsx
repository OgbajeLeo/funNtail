import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.h1 className="text-gray_text3 text-2xl lg:text-[32px] font-bold leading-tight text-center my-6">
        About FunNTail
      </motion.h1>
      <motion.p
       
        className="text-gray_text2 text-sm lg:text-base leading-relaxed text-justify"
      >
        FunNTail, founded by Efe Apoki, is a pet matchmaking platform built to
        transform how pet owners and pet workers connect. Designed for trust,
        fairness, and ease, FunNTail makes pet care simpler, faster, and more
        reliable—whether you’re an owner looking for the perfect sitter or a
        worker finding meaningful opportunities. Unlike outdated, clunky
        platforms, FunNTail flips the process: owners simply post a job, and
        qualified, vetted sitters apply. With verified profiles, smart job
        matching, built-in chat, secure payments, and real-time GPS tracking,
        every step is designed for peace of mind.
        <p className="mt-1">
          {" "}
          But FunNTail is more than an app—it’s a movement for better pet care
          and fair work. We’re building a trusted, inclusive community where pet
          owners feel confident their animals are safe, and pet workers are
          supported with transparency, respect, and opportunity. From dogs and
          cats to small pets and exotics, we celebrate the full spectrum of
          companionship. Because at FunNTail, we love ’em just as much.
        </p>
      </motion.p>
    </div>
  );
};

export default AboutContent;
