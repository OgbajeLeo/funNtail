import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import avatar from "../../assets/avatar.png";

export const StarIcon: React.FC<{ fill: string; size?: number }> = ({
  fill,
  size = 24,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.695 3.36862C12.3199 2.46681 11.0424 2.46681 10.6673 3.36862L8.5287 8.51045L2.97767 8.95547C2.00409 9.03352 1.60931 10.2485 2.35108 10.8839L6.58038 14.5068L5.28826 19.9236C5.06164 20.8737 6.09517 21.6246 6.92869 21.1155L11.6812 18.2127L16.4336 21.1155C17.2671 21.6246 18.3007 20.8737 18.074 19.9236L16.7819 14.5068L21.0112 10.8839C21.753 10.2485 21.3582 9.03352 20.3846 8.95547L14.8336 8.51045L12.695 3.36862Z"
        fill={fill}
      />
    </svg>
  );
};

interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ronald Richards",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat d...",
    rating: 3,
    avatar: avatar,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    content:
      "This product has completely transformed how we work. The intuitive design and powerful features have increased our team's productivity by 300%. I can't imagine going back to our old workflow. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
    rating: 5,
    avatar: avatar,
  },
  {
    id: 3,
    name: "Michael Chen",
    content:
      "Outstanding service and support! The team went above and beyond to ensure our implementation was seamless. The ROI has been incredible - we saw results within the first month. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia...",
    rating: 4,
    avatar: avatar,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    content:
      "The analytics and insights provided have been game-changing for our marketing campaigns. We've been able to optimize our strategies and achieve better results than ever before. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
    rating: 5,
    avatar: avatar,
  },
  {
    id: 5,
    name: "David Park",
    content:
      "Excellent technical implementation and robust architecture. The API is well-documented and the integration process was smooth. Our developers love working with this platform. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia...",
    rating: 4,
    avatar: avatar,
  },
];

const TestimonialSection: React.FC = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  //   const cardsPerView = {
  //     mobile: 1,
  //     tablet: 2,
  //     desktop: 3,
  //   };

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  const goToPrevious = () => {
    setCurrentStartIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentStartIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon key={i} size={24} fill={i < rating ? "#FBBF24" : "#E5E4E4"} />
    ));
  };

  const getVisibleTestimonials = (count: number) => {
    const result = [];
    for (let i = 0; i < count; i++) {
      const index = (currentStartIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  //   const totalSlides = testimonials.length;
  //   const currentSlide =Math.floor(currentStartIndex / 3) % Math.ceil(totalSlides / 3);

  return (
    <section className="py-12 lg:py-16 bg-[#1ABC9C1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation */}
        <div className="flex justify-between items-start mb-8 lg:mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-gray_text3 mb-2">
              Our Customer Feedback
            </h2>
            <p className="text-xl text-gray_text3 font-[400]">
              Don't take our word for it. Trust our customers
            </p>
          </div>

          {/* Navigation Buttons - Hidden on mobile */}
          <div className="hidden md:flex space-x-2">
            <button
              onClick={goToPrevious}
              className="flex items-center space-x-2 px-4 py-1.5 border border-gray_text3 rounded-sm hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>
            <button
              onClick={goToNext}
              className="flex items-center space-x-2 px-4 py-1.5 border border-gray_text3 rounded-sm hover:bg-gray-50 transition-colors duration-200"
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Testimonials Container */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Mobile View - Single Card */}
          <div className="block md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStartIndex}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-md bg-pink-200 flex-shrink-0 overflow-hidden">
                    <img
                      src={testimonials[currentStartIndex].avatar}
                      alt={testimonials[currentStartIndex].name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-xl mb-2">
                      {testimonials[currentStartIndex].name}
                    </h4>
                    <div className="flex items-center space-x-2 mb-3">
                      {renderStars(testimonials[currentStartIndex].rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray_text2 font-[400] leading-relaxed">
                  {testimonials[currentStartIndex].content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tablet View - Two Cards */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-6">
              {getVisibleTestimonials(2).map((testimonial, index) => (
                <motion.div
                  key={`${currentStartIndex}-${index}`}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-2 mb-4">
                    <div className="w-12 h-12 rounded-md bg-pink-200 flex-shrink-0 overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-xl mb-2">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center space-x-4 mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray_text2 font-[400] leading-relaxed">
                    {testimonial.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop View - Three Cards */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-6">
              {getVisibleTestimonials(3).map((testimonial, index) => (
                <motion.div
                  key={`${currentStartIndex}-${index}`}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-md bg-pink-200 flex-shrink-0 overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-xl mb-2">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center space-x-2 mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray_text2 font-[400] leading-relaxed">
                    {testimonial.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from(
            { length: Math.ceil(testimonials.length / 3) },
            (_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentStartIndex(i * 3);
                  setIsAutoPlay(false);
                }}
                className={`size-3 rounded-full transition-colors duration-200 ${
                  i ===
                  Math.floor(currentStartIndex / 3) %
                    Math.ceil(testimonials.length / 3)
                    ? "bg-[#1ABC9C]/50"
                    : "bg-primary_color"
                }`}
              />
            )
          )}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex md:hidden justify-between items-center mt-6 px-4">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full bg-white border border-gray_text3 shadow-sm hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-white border border-gray_text3 shadow-sm hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
