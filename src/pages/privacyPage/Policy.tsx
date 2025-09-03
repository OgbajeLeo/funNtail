import React, { useState, useEffect } from "react";
import { motion, AnimatePresence,type Variants } from "framer-motion";
import {
  ChevronRight,
  FileText,
  Shield,
  Users,
  Briefcase,
  AlertTriangle,
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const LegalScreen: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections: Section[] = [
    {
      id: "website-app-privacy",
      title: "Website and App Use, Privacy and Cookies Policy",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            When you create an account with us, you must provide us information
            that is accurate, complete, and current at all times. Failure to do
            so constitutes a breach of the Terms, which may result in immediate
            termination of your account on our Service.
          </p>
          <p className="text-gray_text2 leading-relaxed">
            You are responsible for safeguarding the password that you use to
            access the Service and for any activities or actions under your
            password, whether your password is with our Service or a third-party
            service.
          </p>
          <p className="text-gray_text2 leading-relaxed">
            You agree not to disclose your password to any third party. You must
            notify us immediately upon becoming aware of any breach of security
            or unauthorized use of your account.
          </p>
        </div>
      ),
    },
    {
      id: "worker-terms",
      title: "Worker terms & conditions and key information",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by Queryfier.
          </p>
          <p className="text-gray_text2 leading-relaxed">
            Queryfier has no control over, and assumes no responsibility for,
            the content, privacy policies, or practices of any third party web
            sites or services. You further acknowledge and agree that Queryfier
            shall not be responsible or liable, directly or indirectly, for any
            damage or loss caused or alleged to be caused by or in connection
            with use of or reliance on any such content, goods or services
            available on or through any such web sites or services.
          </p>
          <p className="text-gray_text2 leading-relaxed">
            We strongly advise you to read the terms and conditions and privacy
            policies of any third-party web sites or services that you visit.
          </p>
        </div>
      ),
    },
    {
      id: "worker-code",
      title: "Worker Code of Conduct",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            We may terminate or suspend access to our Service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms.
          </p>
          <p className="text-gray_text2 leading-relaxed">
            All provisions of the Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity
            and limitations of liability.
          </p>
          <p className="text-gray_text2 leading-relaxed">
            We may terminate or suspend your account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if you breach the Terms.
          </p>
          <p className="text-gray_text2 leading-relaxed">
            Upon termination, your right to use the Service will immediately
            cease. If you wish to terminate your account, you may simply
            discontinue using the Service.
          </p>
        </div>
      ),
    },
    {
      id: "hirer-terms",
      title: "Hirer terms and conditions",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            These Terms shall be governed and construed in accordance with the
            laws of Jersey, without regard to its conflict of law provisions.
          </p>
          <p className="text-gray_text2 leading-relaxed">
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect. These
            Terms constitute the entire agreement between us regarding our
            Service, and supersede and replace any prior agreements we might
            have between us regarding the Service.
          </p>
        </div>
      ),
    },
    {
      id: "anti-slavery",
      title: "Anti Slavery and Human Trafficking Statement",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will try to
            provide at least 30 days notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>
          <p className="text-gray_text2 leading-relaxed">
            By continuing to access or use our Service after those revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, please stop using the Service.
          </p>
        </div>
      ),
    },
  ];

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Desktop */}
          <motion.aside
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block lg:w-[350px] shrink-0"
          >
            <div className=" p-6 sticky top-28">
              <h2 className="text-lg font-semibold text-gray_text3 mb-6 flex items-center gap-2">
           
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((section,index) => (
                  <motion.button
                    key={section.id}
                    variants={itemVariants}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left p-3  transition-all duration-200 flex items-center gap-3 group ${
                      activeSection === section.id
                        ? "text-primary_color border-l-2 border-primary_color font-bold"
                        : " text-gray_text2 hover:text-gray_text3"
                    }`}
                  >
                   
                    <span className="text-base font-medium">
                      {index+1}.
                    </span>
                    <span className="text-base font-medium flex-1">
                      {section.title}
                    </span>
                   
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* Mobile Table of Contents */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden  lg:p-6 mb-6"
              >
                <h2 className="text-lg font-semibold text-gray_text3 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary_color" />
                  Table of Contents
                </h2>
                <nav className="space-y-2">
                  {sections.map((section,index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="w-full text-left p-3 rounded-xl hover:bg-gray-50 text-gray_text2 hover:text-gray_text3 transition-colors flex items-center gap-3"
                    >
                       <span className="text-sm font-medium">
                        {index+1}
                      </span>
                       <span className="text-sm font-medium">
                        {section.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <motion.main
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-none"
          >
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=" lg:p-8 mb-8"
            >
              <p className="text-gray_text2 leading-relaxed mb-4">
                Thanks for using our products and services ("Services"). The
                Services are provided by Queryfier LLC. ("Queryfier"), located
                at 1942 Broadway Street, Suite 314c Boulder, Colorado 80302,
                USA.
              </p>
              <p className="text-gray_text2 leading-relaxed mb-4">
                By using our Services, you are agreeing to these terms. Please
                read them carefully.
              </p>
              <p className="text-gray_text2 leading-relaxed">
                Our Services are very diverse, so sometimes additional terms or
                product requirements (including age requirements) may apply.
                Additional terms will be available with the relevant Services,
                and those additional terms become part of your agreement with us
                if you use those Services.
              </p>
            </motion.div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className=" lg:p-8 scroll-mt-28"
                >
                  <div className="flex items-center gap-3 mb-6">
                   
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray_text3">
                        {index + 1}. {section.title}
                      </h2>
                    </div>
                  </div>
                  <div className="prose prose-gray max-w-none text-gray_text2">
                    {section.content}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Footer */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50  lg:p-8 mt-12"
            >
              <div className="flex items-start gap-4">
               
                <div>
                  <h3 className="text-lg font-semibold primary_color mb-2">
                    Important Notice
                  </h3>
                  <p className="text-blue-800 leading-relaxed">
                    If you have any questions about these Terms & Conditions,
                    please contact our support team. These terms are effective
                    as of the date of your acceptance and will remain in effect
                    until modified or terminated.
                  </p>
                </div>
              </div>
            </motion.div> */}
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default LegalScreen;
