import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Mail, Phone, Check, X } from "lucide-react";
import dog1 from "../../assets/dog1.svg";
import dog2 from "../../assets/dog2.svg";
import pageTitle from "../../assets/navBGG.png";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FormData {
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"owners" | "workers">("owners");
  const [openFAQ, setOpenFAQ] = useState<number | null>(2);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "How do payments work on the platform?",
      answer:
        "We use secure payment processing through Stripe. Pet owners pay upfront when booking, and funds are released to sitters after successful completion of services. All transactions are protected and insured.",
    },
    {
      id: 2,
      question: "How do I know sitters on FunTail are trustworthy?",
      answer:
        "All sitters and workers on FunTail go through a verification and vetting process before being approved. This includes ID checks, profile reviews, and, in many cases, references. Plus, our in-app reviews and real-time GPS tracking give owners peace of mind.",
    },
    {
      id: 3,
      question: "What if I need last-minute pet care?",
      answer:
        "Our platform has many sitters available for emergency and last-minute bookings. Use our urgent booking feature to connect with available sitters in your area who can respond quickly to your pet care needs.",
    },
    {
      id: 4,
      question: "Can I meet a sitter before booking?",
      answer:
        "Absolutely! We encourage meet-and-greets before your first booking. You can message sitters directly through our platform to arrange a meeting, discuss your pet's needs, and ensure it's a good fit for both you and your furry friend.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (Math.random() > 0.3) {
        setSubmitStatus("success");
        setFormData({ email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-8 px-4">
      <motion.div className="max-w-7xl lg:p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* FAQ Section */}
        <motion.div className="bg-white rounded-[24px] overflow-hidden">
          <div className="bg-[#1ABC9C] px-6 pt-8 relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={pageTitle}
                className="absolute top-0 left-0 w-full opacity-20 h-full"
                alt="bg"
              />
            </div>

            <div className="relative z-10">
              <motion.h2 className="text-white text-xl lg:text-[28px] text-center font-semibold mb-6">
                Do you still have questions?
              </motion.h2>

              {/* Pet images */}
              <div className="flex justify-center z-30">
                <motion.div className="flex items-end ">
                  <motion.div className="relative">
                    <img src={dog1} alt="dog" className="" />
                  </motion.div>

                  <motion.div className="relative lg:-ml-12">
                    <img src={dog2} alt="dog" className="" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex space-x-1 bg-[#E5E4E426] mt-2 backdrop-blur-sm rounded-lg p-1">
            <motion.button
              className={`flex-1 py-3 rounded-md text-sm font-semibold transition-all duration-300 ${
                activeTab === "owners"
                  ? "bg-[#1ABC9C1A] text-primary_color font-semibold"
                  : "text-gray_text2 hover:bg-white/10"
              }`}
              onClick={() => setActiveTab("owners")}
            >
              Help for Pet Owners
            </motion.button>
            <motion.button
              className={`flex-1 py-3  rounded-md text-sm font-semibold  transition-all duration-300 ${
                activeTab === "workers"
                  ? "bg-[#1ABC9C1A] text-primary_color font-semibold"
                  : "text-gray_text2 hover:bg-white/10"
              }`}
              onClick={() => setActiveTab("workers")}
            >
              Help for Pet Workers
            </motion.button>
          </div>
          {/* FAQ Content */}
          <div className="p-6">
            <div className="space-y-3">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  className="border border-gray-100 rounded-lg overflow-hidden"
                  transition={{ delay: faq.id * 0.1 }}
                >
                  <motion.button
                    className={`w-full px-4 py-4 text-left flex items-center justify-between transition-colors group ${
                      openFAQ === faq.id ? "bg-[#1ABC9C1A]" : "bg-white"
                    }`}
                    onClick={() =>
                      setOpenFAQ(openFAQ === faq.id ? null : faq.id)
                    }
                    whileHover={{ backgroundColor: "#1ABC9C1A" }}
                  >
                    <div className="flex items-center space-x-4">
                      <span
                        className={`${
                          openFAQ === faq.id
                            ? "text-[#1ABC9C]"
                            : "text-gray_text3"
                        } font-bold text-lg min-w-8`}
                      >
                        0{faq.id}
                      </span>
                      <span
                        className={`${
                          openFAQ === faq.id
                            ? "text-[#1ABC9C] font-semibold"
                            : "text-gray_text3"
                        } font-medium text-sm`}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <motion.div className="text-gray-400 group-hover:text-emerald-500">
                      <Plus className="w-5 h-5" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div className="overflow-hidden">
                        <div
                          className={`px-4 pb-4 pl-16 text-gray-600 text-sm  ${
                            openFAQ === faq.id
                              ? "bg-[#1ABC9C1A]"
                              : "bg-emerald-50/30"
                          }`}
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div className="space-y-6">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8">
            <motion.h3 className="text-2xl font-bold text-gray_text3 mb-2">
              Get in Touch With Us
            </motion.h3>
            <motion.p className="text-gray_text2 mb-8 text-sm">
              Kindly fill in your details so we can reach you back!
            </motion.p>

            <div className="space-y-6">
              <motion.div>
                <label className="block text-sm font-semibold text-gray_text3 mb-3">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-4 bg-gray-50 outline-none border-0 rounded-lg focus:ring-2 focus:ring-primary_color focus:bg-white transition-all duration-200 text-sm placeholder-gray-400"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div>
                <label className="block text-sm font-semibold text-gray_text3 mb-3">
                  Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                  rows={5}
                  className="w-full px-4 py-4 bg-gray-50 outline-none border-0 rounded-lg focus:ring-2 focus:ring-primary_color focus:bg-white transition-all duration-200 resize-none text-sm placeholder-gray-400"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.button
                onClick={handleSubmit}
                className="w-full bg-primary_color text-white py-4 px-6 rounded-[99px] font-semibold transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={
                  isSubmitting ||
                  !formData.email.trim() ||
                  !formData.message.trim()
                }
              >
                {isSubmitting ? (
                  <motion.div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <span className="text-white text-lg">Submit</span>
                )}
              </motion.button>
            </div>

            {/* Success/Error Messages */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center space-x-2">
                  <Check className="w-5 h-5 text-primary_color" />
                  <span className="text-primary_color text-sm">
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                  <X className="w-5 h-5 text-red-600" />
                  <span className="text-red-700 text-sm">
                    Failed to send message. Please try again.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div className="bg-white rounded-2xl p-8">
            <h4 className="text-xl font-bold text-gray_text3 mb-6">
              Contact Information
            </h4>
            <div className="flex flex-col lg:flex-row gap-2 lg:items-center space-x-4 justify-between">
              <motion.div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#1ABC9C1A] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary_color" />
                </div>
                <span className="text-gray_text2 font-normal">
                  support@funtail.co.uk
                </span>
              </motion.div>

              <motion.div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#1ABC9C1A] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary_color" />
                </div>
                <span className="text-gray_text2 font-normal">
                  07464 368 373
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
