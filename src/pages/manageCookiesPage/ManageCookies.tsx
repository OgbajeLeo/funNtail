import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Shield, Users, AlertTriangle } from "lucide-react";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const ManageCookies: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections: Section[] = [
    {
      id: "what-are-cookies",
      title: "What Are Cookies?",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            Cookies are small text files placed on your device when you visit
            our website or use our mobile app. They help FunNTail operate
            securely, remember your preferences, improve performance, and
            understand how you interact with our platform.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            Cookies cannot harm your device, and they do not give us direct
            access to personal files on your phone or computer.
          </p>
        </div>
      ),
    },
    {
      id: "cookie-categories",
      title: "Types of Cookies We Use",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail uses four main categories of cookies to operate our
            platform and enhance user experience:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray_text2">
            <li>
              <strong>Strictly Necessary Cookies:</strong> Required for secure
              login, payments, fraud prevention, and basic platform
              functionality. These cannot be disabled.
            </li>

            <li>
              <strong>Performance & Analytics Cookies:</strong> Used to
              understand how users interact with our site and app. Includes
              Google Analytics and Firebase Analytics.
            </li>

            <li>
              <strong>Functional Cookies:</strong> Help remember your
              preferences, such as language, cookie settings, and saved login
              choices.
            </li>

            <li>
              <strong>Advertising & Marketing Cookies:</strong> Used with your
              consent to deliver personalised ads via Google Ads and Meta
              (Facebook/Instagram).
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "record-of-versions",
      title: "Record of Versions",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            We maintain a version history for transparency and regulatory
            compliance.
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              <strong>Version 1.0</strong> — 1st December 2025 — Initial
              publication of the FunNTail Privacy Policy.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Future updates will be listed here, including dates and summaries of
            changes.
          </p>
        </div>
      ),
    },
    {
      id: "third-party-cookies",
      title: "Third-Party Cookies",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            Some cookies on FunNTail are placed by trusted third-party providers
            who help us deliver secure payments, analytics, and advertising
            services. These partners may collect data in accordance with their
            own privacy policies.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            Examples of third-party cookie providers include:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray_text2">
            <li>Stripe (payments and fraud detection)</li>
            <li>Google (analytics and advertising)</li>
            <li>Meta / Facebook (advertising)</li>
            <li>Cloud hosting and security platforms</li>
          </ul>
        </div>
      ),
    },
    {
      id: "cookie-consent",
      title: "Cookie Consent",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            When you first visit FunNTail, you are presented with a cookie
            consent banner that allows you to accept all cookies, reject
            non-essential cookies, or customise your preferences.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            You may change your cookie settings at any time using the “Manage
            Cookies” option available on our website.
          </p>
        </div>
      ),
    },
    {
      id: "manage-cookies",
      title: "How to Manage or Disable Cookies",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            You can manage, limit, or disable cookies through FunNTail’s cookie
            settings panel or through your browser settings. Disabling certain
            cookies may affect platform functionality.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            You can control cookies in popular browsers, including Chrome,
            Safari, Firefox, and Edge.
          </p>
        </div>
      ),
    },
    {
      id: "cookie-retention",
      title: "Data Retention for Cookies",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            Cookie and analytics data may be stored for varying periods
            depending on the cookie type and the provider. FunNTail follows
            industry standards and legal obligations regarding retention.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            As a general guideline, analytics data such as Google Analytics is
            retained for up to 26 months unless you withdraw consent earlier.
          </p>
        </div>
      ),
    },
    {
      id: "cookie-policy-updates",
      title: "Updates to This Cookies Policy",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            We may update this Cookies Policy periodically to reflect changes in
            law, technology, or how FunNTail operates. When updates occur, we
            will publish a new “Last Updated” date at the top of the policy.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            Continued use of FunNTail after updates are posted means you accept
            the revised version.
          </p>
        </div>
      ),
    },
    {
      id: "cookie-contact",
      title: "Contact Us",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            If you have questions about how FunNTail uses cookies or how your
            data is handled, please contact our Privacy Team.
          </p>

          <div className="space-y-2 text-gray_text2">
            <p>privacy@funntail.co.uk</p>
            <p>
              FunNTail Ltd, Heantun Point, 1 Culwell Street, Wolverhampton, West
              Midlands, WV10 0JT, United Kingdom
            </p>
          </div>
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

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Desktop */}
          <motion.aside className="hidden lg:block lg:w-[350px] shrink-0">
            <div className=" p-6 sticky top-28">
              <h2 className="text-lg font-semibold text-gray_text3 mb-6 flex items-center gap-2">
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left p-3  transition-all duration-200 flex items-center gap-3 group ${
                      activeSection === section.id
                        ? "text-primary_color border-l-2 border-primary_color font-bold"
                        : " text-gray_text2 hover:text-gray_text3"
                    }`}
                  >
                    <span className="text-base font-medium">{index + 1}.</span>
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
              <motion.div className="lg:hidden  lg:p-6 mb-6">
                <h2 className="text-lg font-semibold text-gray_text3 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary_color" />
                  Table of Contents
                </h2>
                <nav className="space-y-2">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="w-full text-left p-3 rounded-xl hover:bg-gray-50 text-gray_text2 hover:text-gray_text3 transition-colors flex items-center gap-3"
                    >
                      <span className="text-sm font-medium">{index + 1}</span>
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
          <motion.main className="flex-1 max-w-none">
            {/* Introduction */}
            <motion.div className=" lg:p-8 mb-8">
              <p className="text-gray_text2 leading-relaxed mb-4">
                This Cookies Policy explains how FunNTail Ltd (“FunNTail”, “we”,
                “us”, “our”) uses cookies and similar tracking technologies on
                our website and mobile application. These technologies help us
                provide essential functionality, improve performance,
                personalise your experience, and deliver relevant advertising.
              </p>

              <p className="text-gray_text2 leading-relaxed mb-4">
                By continuing to use FunNTail, you consent to the use of cookies
                in accordance with this policy. You may manage your cookie
                preferences at any time through our cookie settings or your
                browser controls.
              </p>

              <p className="text-gray_text2 leading-relaxed">
                FunNTail complies with all UK privacy regulations, including the
                UK GDPR and the Privacy and Electronic Communications
                Regulations (PECR). This policy explains the types of cookies we
                use, why we use them, and how you can manage or disable them.
              </p>
            </motion.div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
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

export default ManageCookies;
