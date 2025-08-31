import React, { useState, useEffect } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import heroImage from "../../assets/heroImage.svg";

interface LoaderProps {
  isLoading?: boolean;
  loadingText?: string;
  onComplete?: () => void;
  variant?: "default" | "minimal" | "playful";
}

const GlobalLoader: React.FC<LoaderProps> = ({
  isLoading = true,
  onComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const loadingMessages = [
    "Sniffing out the best sitters...",
    "Fetching trusted pet lovers...",
    "Wagging tails with excitement...",
    "Almost ready to play!",
  ];

  useEffect(() => {
    if (!isLoading) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete?.(), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 300);

    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [isLoading, onComplete, loadingMessages.length]);

  const dogVariants: Variants = {
    run: {
      x: [0, 20, 0, -20, 0],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  if (!isLoading) return null;

  // Default variant
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center max-w-md mx-auto px-6">
          {/* Main pet characters */}
          <div className="relative mb-8">
            {/* Background circle */}
            <motion.div
              className="size-24 mx-auto relative"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Main dog */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-6xl"
                variants={dogVariants}
                animate="run"
              >
                <motion.img
                  src={heroImage}
                  // width={800}
                  // height={800}
                  alt="logo"
                  className="size-full"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: window.innerWidth >= 640 ? 0 : 0 }}
                  // transition={{ duration: 0.5 }}
                  whileHover={{ rotateX: 10, rotateY: -10 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Loading text */}
          <motion.h2
            className="text-2xl font-semibold text-gray-900 mb-4"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            FunNTail
          </motion.h2>

          {/* Dynamic loading message */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentMessage}
              className=" text-gray_text3 mb-6 h-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {loadingMessages[currentMessage]}
            </motion.p>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
            <motion.div
              className="h-full bgprimary_color rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          {/* Progress percentage */}
          <motion.p
            className="text-xs font-medium text-primary_color"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {Math.round(progress)}% Complete
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default GlobalLoader;
