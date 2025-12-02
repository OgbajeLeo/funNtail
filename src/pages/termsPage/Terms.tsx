import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
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

const TermsScreen: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections: Section[] = [
    {
      id: "acceptance-of-terms",
      title: "Acceptance of Terms",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            These Terms & Conditions (“Terms”) form a legally binding agreement
            between FUNNTAIL LTD (“FunNTail”, “we”, “us”, “our”) and any
            individual who uses the FunNTail mobile application, website, or
            related services (“you”, “User”).
          </p>
          <p className="text-gray_text2 leading-relaxed">
            By creating an account or using FunNTail, you confirm that you are
            at least 18 years old, legally able to enter contracts, and agree to
            these Terms. If you do not agree, you must not use the platform.
          </p>
          <p className="text-gray_text2 leading-relaxed">
            We may update these Terms from time to time. Continued use of
            FunNTail means you accept the updated version.
          </p>
        </div>
      ),
    },
    {
      id: "about-funntail",
      title: "About FunNTail",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail connects Pet Owners with Sitters, Walkers, and Groomers
            (“Service Providers”) to make finding reliable pet care simple and
            secure. FunNTail does not employ Service Providers and does not
            directly offer pet care services. All Service Providers operate as
            independent contractors.
          </p>
        </div>
      ),
    },
    {
      id: "business-role",
      title: "Our Business Role",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail is a platform that connects Pet Owners with Sitters, Dog
            Walkers, and Groomers (“Service Providers”). We provide tools to
            help users find, communicate, and book pet care services.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            FunNTail provides the following services:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>A listing and matching platform</li>
            <li>Secure in-app payments</li>
            <li>Identity verification through Stripe Identity</li>
            <li>Messaging and booking tools</li>
            <li>Optional support through the FunNTail Guarantee program</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            FunNTail does <strong>not</strong> employ Sitters. All Service
            Providers act as independent contractors, not employees, partners,
            or agents of FunNTail.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            We are not responsible for:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>The quality, safety, or outcome of Pet Care Services</li>
            <li>Actions, behaviour, or conduct of Sitters</li>
            <li>
              Pet behaviour, injuries, or property damage during a booking
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            All Pet Care Services are private agreements between the Pet Owner
            and the Sitter. FunNTail simply facilitates the connection and
            payment.
          </p>
        </div>
      ),
    },

    {
      id: "user-accounts",
      title: "User Accounts",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            To use FunNTail, you must create an account and provide accurate,
            complete, and up-to-date information at all times. Failure to do so
            may result in suspension or termination of your account.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            By creating an account, you agree to:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>Maintain only one account</li>
            <li>Keep your personal and pet information updated</li>
            <li>Protect your password and login credentials</li>
            <li>Not share your account with others</li>
            <li>
              Immediately report any unauthorized access or security breach
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            FunNTail encrypts passwords and never stores them in plain text. We
            may suspend or permanently terminate any account that violates these
            Terms, engages in fraud, or poses safety risks.
          </p>
        </div>
      ),
    },
    {
      id: "eligibility",
      title: "Eligibility & Pets Allowed",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail currently supports bookings only for certain types of pets.
            To ensure safety and compliance with UK law, only specific animals
            are permitted on the platform.
          </p>

          <div>
            <p className="text-gray_text3 font-semibold mb-2">
              ✔ Allowed pets:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
              <li>Domestic dogs</li>
              <li>Domestic cats</li>
            </ul>
          </div>

          <div>
            <p className="text-gray_text3 font-semibold mb-2">
              ❌ Not allowed:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
              <li>Dangerous dogs prohibited under UK law</li>
              <li>Exotic animals</li>
              <li>Livestock</li>
              <li>Animals requiring special licensing</li>
              <li>Aggressive pets with a history of biting</li>
            </ul>
          </div>

          <p className="text-gray_text2 leading-relaxed">
            FunNTail may also request documentation such as vaccination records,
            microchipping details, or behavioural history to confirm
            eligibility.
          </p>
        </div>
      ),
    },
    {
      id: "ai-use",
      title: "Use of AI",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail uses artificial intelligence to enhance safety, improve
            matchmaking, and support platform operations. AI tools help us
            detect potential risks, verify user information, and match Pet
            Owners with suitable Sitters.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>Intelligent Sitter–Pet matching</li>
            <li>Fraud detection and safety monitoring</li>
            <li>Profile and behavioural pattern analysis</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            AI does <span className="font-semibold text-gray_text3">not</span>{" "}
            make final decisions about user safety, suitability, or account
            status. All AI outputs are reviewed by human team members before any
            action is taken.
          </p>
        </div>
      ),
    },
    {
      id: "identity-verification",
      title: "Identity Verification",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail uses Stripe Identity to verify user identities and support
            platform safety. Verification helps reduce fraud and confirm that
            users are who they claim to be.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>Government-issued ID checks</li>
            <li>Facial match verification</li>
            <li>Fraud detection indicators and risk scoring</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Identity verification improves trust but does{" "}
            <span className="font-semibold text-gray_text3">not</span> guarantee
            a user’s behaviour, safety, suitability, or performance on the
            platform. Users should always communicate and evaluate carefully
            before booking.
          </p>
        </div>
      ),
    },
    {
      id: "bookings",
      title: "Bookings",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            A booking is confirmed when a Pet Owner submits a request, the
            Sitter accepts it, and payment is successfully processed through the
            FunNTail platform.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            All communication, payments, scheduling, and updates must occur
            strictly within the FunNTail app. Booking or arranging services
            outside the platform is not permitted and may lead to immediate
            account suspension or removal.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            FunNTail is not responsible for any agreements or arrangements made
            outside of the official booking process.
          </p>
        </div>
      ),
    },
    {
      id: "fees-payments",
      title: "Fees & Payments",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-gray_text3 font-semibold text-lg">
            For Pet Owners
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>Pet Owners pay the Sitter’s rate plus a 5% service fee.</li>
            <li>
              The 5% service fee is non-refundable for late cancellations.
            </li>
            <li>All payments are processed securely through Stripe.</li>
          </ul>

          <h3 className="text-gray_text3 font-semibold text-lg">For Sitters</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>Sitters receive 85% of the total booking amount.</li>
            <li>FunNTail retains 15% as a platform fee.</li>
            <li>Payouts are issued 48 hours after the booking ends.</li>
          </ul>

          <h3 className="text-gray_text3 font-semibold text-lg">Taxes</h3>
          <p className="text-gray_text2 leading-relaxed">
            Users are responsible for accurately reporting and paying any taxes
            required by law. FunNTail does not withhold or file taxes for
            Sitters.
          </p>
        </div>
      ),
    },
    {
      id: "cancellations-refunds",
      title: "Cancellations & Refunds",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail uses a time-based cancellation policy based on the number
            of hours remaining before the booking start time. The following
            rules apply:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>
              <span className="font-semibold">&lt; 1 hour:</span> 100% charged
              (no refund)
            </li>
            <li>
              <span className="font-semibold">1–6 hours:</span> 90% fee retained
            </li>
            <li>
              <span className="font-semibold">6–12 hours:</span> 75% fee
              retained
            </li>
            <li>
              <span className="font-semibold">12–24 hours:</span> 50% fee
              retained
            </li>
            <li>
              <span className="font-semibold">24–48 hours:</span> 25% fee
              retained
            </li>
            <li>
              <span className="font-semibold">&gt; 48 hours:</span> Full refund
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            The FunNTail 5% service fee is refundable only if the cancellation
            occurs more than 48 hours before the booking. Within the
            late-cancellation window, the service fee is non-refundable.
          </p>
        </div>
      ),
    },
    {
      id: "sitter-cancellation-penalties",
      title: "Sitter Cancellation Penalties",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            To protect Pet Owners from unexpected cancellations, FunNTail
            applies a strike-based penalty system for Sitters.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>
              Each cancellation results in <strong>1 strike</strong>.
            </li>
            <li>
              After <strong>3 strikes</strong>, the Sitter is permanently
              removed from the platform.
            </li>
            <li>
              Fraudulent, malicious, or repeated last-minute cancellations may
              result in immediate account termination.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Sitters are expected to cancel only when absolutely necessary and
            always communicate with the Pet Owner through the app.
          </p>
        </div>
      ),
    },
    {
      id: "funntail-guarantee",
      title: "FunNTail Guarantee",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            The FunNTail Guarantee is a voluntary support program (not
            insurance) that provides limited reimbursement for eligible
            incidents that occur during fully booked and paid services on the
            FunNTail platform.
          </p>

          <h3 className="text-gray_text3 font-semibold text-lg">
            What Is Covered
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>
              Up to <strong>£20,000</strong> in vet care for sudden accidental
              injuries.
            </li>
            <li>
              Injuries to the Pet Owner’s or Sitter’s pet during an active
              booking.
            </li>
            <li>
              Property damage to the Pet Owner’s home caused by a Sitter or pet.
            </li>
            <li>
              Basic out-of-pocket medical costs for eligible third-party
              injuries.
            </li>
            <li>24/7 incident response and support.</li>
          </ul>

          <h3 className="text-gray_text3 font-semibold text-lg">
            What Is Not Covered
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>Damage to a Sitter’s home or personal property.</li>
            <li>
              Pre-existing or preventable conditions (fleas, ticks, worms,
              etc.).
            </li>
            <li>Routine or elective veterinary care.</li>
            <li>Injuries to Sitters, Pet Owners, or household members.</li>
            <li>Incidents reported after 72 hours.</li>
            <li>Incidents outside an active FunNTail booking.</li>
            <li>Vet care beyond 30 days of the incident.</li>
            <li>Animals not permitted on the FunNTail platform.</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            FunNTail retains sole discretion to approve, deny, or adjust any
            claim.
          </p>
        </div>
      ),
    },
    {
      id: "behaviour-conduct",
      title: "Behaviour & Conduct Rules",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            All users must behave respectfully and responsibly when interacting
            on or through the FunNTail platform.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>Do not break UK law or encourage others to do so.</li>
            <li>Do not post false or misleading information.</li>
            <li>Do not arrange pet care outside the FunNTail platform.</li>
            <li>Do not harm pets, behave negligently, or endanger others.</li>
            <li>Do not use abusive, threatening, or hateful language.</li>
            <li>Do not harass, bully, or intimidate other users.</li>
            <li>Do not attempt to defraud FunNTail or other users.</li>
            <li>Do not create multiple or duplicate accounts.</li>
            <li>
              Do not use the platform for advertising or competitive
              solicitation.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Violations may lead to account suspension, removal, or permanent
            banning from FunNTail.
          </p>
        </div>
      ),
    },
    {
      id: "safety-responsibilities",
      title: "Safety Responsibilities",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-gray_text3 font-semibold text-lg">
            Pet Owners Agree To:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>Provide accurate and complete pet information.</li>
            <li>Maintain vaccinations where applicable.</li>
            <li>Disclose behavioural issues, risks, or concerns.</li>
            <li>
              Ensure the pet is healthy, safe, and fit for booked services.
            </li>
          </ul>

          <h3 className="text-gray_text3 font-semibold text-lg">
            Sitters Agree To:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>Provide safe, responsible care at all times.</li>
            <li>Follow all UK pet welfare standards.</li>
            <li>
              Comply with local licensing rules (especially for home boarding).
            </li>
            <li>Report emergencies or safety concerns immediately.</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Both Pet Owners and Sitters must take reasonable steps to ensure the
            safety and wellbeing of all pets, people, and property involved in a
            booking.
          </p>
        </div>
      ),
    },
    {
      id: "emergencies",
      title: "Emergencies",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            If an emergency occurs during a booking, Sitters must first attempt
            to contact the Pet Owner. If the Pet Owner cannot be reached,
            Sitters may take appropriate action in the interest of the pet’s
            safety.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>Seek necessary veterinary care if the pet is in distress.</li>
            <li>Contact FunNTail Support for guidance or escalation.</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Pet Owners agree that FunNTail may charge the payment method on file
            for emergency vet care when needed to protect the pet’s wellbeing.
          </p>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            All content provided on the FunNTail platform — including branding,
            logos, designs, software, text, images, and other materials — is the
            exclusive property of FUNNTAIL LTD.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            Users may not copy, modify, distribute, reverse-engineer, or use any
            FunNTail intellectual property without explicit written permission.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            Unauthorized use of FunNTail branding or content may result in legal
            action or account termination.
          </p>
        </div>
      ),
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            To the fullest extent permitted under UK law, FunNTail is not liable
            for:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>Actions, behaviour, or negligence of users or pets.</li>
            <li>Injuries, damages, or losses that occur during bookings.</li>
            <li>Outcomes or performance of Pet Care Services.</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            FunNTail’s total liability is limited to £100 or the total amount of
            service fees paid by the user in the last 12 months — whichever is
            lower.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            The FunNTail Guarantee is the only form of reimbursement FunNTail
            may provide.
          </p>
        </div>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            These Terms are governed by the laws of England and Wales. All legal
            disputes or claims must be resolved in the courts of England and
            Wales.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            UK consumers maintain the right to raise qualifying disputes with
            their local small claims court.
          </p>
        </div>
      ),
    },
    {
      id: "account-termination",
      title: "Account Termination",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail may suspend or permanently terminate accounts that:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>Violate these Terms & Conditions.</li>
            <li>Pose safety, fraud, or security risks.</li>
            <li>Receive multiple verified complaints.</li>
            <li>Attempt to conduct bookings outside the platform.</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Users may request account deletion at any time. Once an account is
            terminated, all access to the FunNTail platform immediately stops.
          </p>
        </div>
      ),
    },
    {
      id: "contact-information",
      title: "Contact Information",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            For support, safety concerns, legal matters, or general enquiries,
            you can reach the FunNTail team using the details below.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2 leading-relaxed">
            <li>
              Email (Support): <strong>support@funntail.co.uk</strong>
            </li>
            <li>
              Email (Privacy): <strong>privacy@funntail.co.uk</strong>
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">Registered Address:</p>

          <div className="pl-6 text-gray_text2 leading-relaxed">
            <p>FunNTail Ltd</p>
            <p>Heantun Point</p>
            <p>1 Culwell Street</p>
            <p>Wolverhampton</p>
            <p>West Midlands</p>
            <p>WV10 0JT</p>
            <p>United Kingdom</p>
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
                These Terms & Conditions (“Terms”) govern your access to and use
                of the FunNTail mobile application, website, and related
                services. By creating an account or using FunNTail, you agree to
                be bound by these Terms.
              </p>

              <p className="text-gray_text2 leading-relaxed mb-4">
                Please read these Terms carefully, as they outline your rights,
                responsibilities, and the rules that apply when using our
                platform. If you do not agree with any part of these Terms, you
                must not use FunNTail.
              </p>

              <p className="text-gray_text2 leading-relaxed">
                FunNTail may update these Terms from time to time. Continued use
                of the platform after changes are posted constitutes acceptance
                of the updated version.
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

export default TermsScreen;
