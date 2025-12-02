import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Shield, Users, AlertTriangle } from "lucide-react";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const AgreementsScreen: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections: Section[] = [
    // ===== SITTER AGREEMENT =====
    {
      id: "sitter-overview",
      title: "Sitter Agreement – Overview",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            This Sitter Agreement applies to all pet sitters, dog walkers, and
            groomers (&quot;Sitters&quot; or &quot;Service Providers&quot;)
            using the FunNTail platform. By creating a sitter profile, accepting
            a booking, or providing pet care services through FunNTail, you
            agree to be bound by this Agreement, alongside the FunNTail Terms
            &amp; Conditions, Privacy Policy, Cookies Policy, and FunNTail
            Guarantee (where applicable).
          </p>

          <p className="text-gray_text2 leading-relaxed">
            FunNTail is a platform that connects Sitters and Pet Owners. You
            acknowledge that you are engaged as an independent contractor, not
            an employee, worker, agent, or partner of FunNTail. You are solely
            responsible for the services you provide and for complying with any
            legal, tax, or licensing obligations that apply to you.
          </p>
        </div>
      ),
    },
    {
      id: "sitter-eligibility",
      title: "Sitter Eligibility & Registration",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            To use FunNTail as a Sitter, you must:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2">
            <li>Be at least 18 years old.</li>
            <li>
              Be legally able to enter into binding contracts in the United
              Kingdom.
            </li>
            <li>
              Create an account with accurate, complete, and up-to-date
              information.
            </li>
            <li>
              Complete any required onboarding steps, including ID verification
              via Stripe Identity (where requested).
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            You agree to maintain only one sitter account, keep your contact and
            profile details current, and promptly update your availability,
            pricing, and service offerings where they change. FunNTail reserves
            the right to approve, decline, or remove sitter accounts at its sole
            discretion for safety, quality, or compliance reasons.
          </p>
        </div>
      ),
    },
    {
      id: "sitter-responsibilities",
      title: "Sitter Responsibilities & Care Standards",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            As a Sitter, you agree to provide safe, responsible, and
            professional care for each pet entrusted to you. This includes:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2">
            <li>
              Following the Pet Owner&apos;s reasonable instructions relating to
              feeding, medication, exercise, and routines.
            </li>
            <li>
              Treating pets with kindness, respect, and care, and never engaging
              in neglectful, abusive, or harmful behaviour.
            </li>
            <li>
              Complying with all applicable UK animal welfare laws and any local
              licensing requirements (for example, for home boarding or day
              care).
            </li>
            <li>
              Supervising pets appropriately, using leads where required, and
              ensuring pets are kept secure and safe during walks and stays.
            </li>
            <li>
              Immediately informing the Pet Owner (and FunNTail where
              applicable) of any incident, illness, injury, loss, or concerning
              behaviour involving a pet during a booking.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            You must not provide services while under the influence of drugs or
            alcohol, leave pets in unsafe environments, or allow unauthorised
            individuals to participate in the booked service.
          </p>
        </div>
      ),
    },
    {
      id: "sitter-payments-cancellations",
      title: "Sitter Payments, Fees & Cancellations",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            All bookings must be created, accepted, and paid for through the
            FunNTail platform. You agree:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2">
            <li>
              To receive your earnings through FunNTail&apos;s payment partner,
              currently Stripe.
            </li>
            <li>
              That FunNTail retains a platform fee (for example, 15%) from each
              completed booking, as detailed in the Terms &amp; Conditions.
            </li>
            <li>
              That payouts are generally made after a cooling-off period
              following the end of the booking (for example, 48 hours).
            </li>
            <li>
              To comply with FunNTail&apos;s cancellation and refund rules,
              including sitter cancellation penalties where applicable.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            As a self-employed contractor, you are responsible for reporting and
            paying any taxes due on your earnings, including income tax and
            National Insurance contributions where applicable.
          </p>
        </div>
      ),
    },
    {
      id: "sitter-conduct-termination",
      title: "Sitter Conduct, Off-Platform Bookings & Termination",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            You agree not to use FunNTail to solicit or arrange bookings
            off-platform in order to avoid fees or platform rules. Repeated or
            serious attempts to move bookings off FunNTail may result in account
            suspension or permanent removal.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            You must not harass, abuse, or intimidate Pet Owners, FunNTail
            staff, or other users. You also agree not to provide false or
            misleading information about your experience, qualifications, or the
            services you can safely provide.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            FunNTail may, at its sole discretion, suspend or terminate your
            account where there are safety concerns, repeated complaints,
            suspected fraud, or breaches of this Agreement or the FunNTail Terms
            &amp; Conditions. You may stop using the platform at any time, but
            any ongoing bookings must be honoured or cancelled in line with the
            applicable policies.
          </p>
        </div>
      ),
    },

    // ===== PET OWNER AGREEMENT =====
    {
      id: "owner-overview",
      title: "Pet Owner Agreement – Overview",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            This Pet Owner Agreement applies to all individuals who create an
            account and book pet care services through FunNTail (&quot;Pet
            Owners&quot; or &quot;Owners&quot;). By requesting or confirming a
            booking on FunNTail, you agree to this Agreement, in addition to the
            FunNTail Terms &amp; Conditions, Privacy Policy, Cookies Policy, and
            FunNTail Guarantee.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            FunNTail provides tools within the app that help you find, review,
            and book independent Sitters. FunNTail does not directly provide pet
            care services and is not responsible for the acts or omissions of
            Sitters.
          </p>
        </div>
      ),
    },
    {
      id: "owner-eligibility-pets",
      title: "Owner Eligibility & Pet Requirements",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            To use FunNTail as a Pet Owner, you must:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2">
            <li>Be at least 18 years old.</li>
            <li>
              Ensure that any pet you register or book services for is permitted
              under FunNTail&apos;s eligibility rules (for example, domestic
              dogs and cats only).
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            You agree to provide accurate, complete, and honest information
            about each pet, including:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2">
            <li>Breed, age, size, and general temperament.</li>
            <li>
              Behavioural history, including any aggression, fear, or biting
              incidents.
            </li>
            <li>
              Health conditions, allergies, medications, and any current
              illnesses.
            </li>
            <li>
              Vaccination status and, where applicable, microchipping
              information.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            You must not book services for pets that are prohibited by law (for
            example, certain dangerous dog breeds) or that you know to have
            dangerously aggressive behaviour without full and clear disclosure.
          </p>
        </div>
      ),
    },
    {
      id: "owner-responsibilities",
      title: "Owner Responsibilities, Access & Instructions",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            As a Pet Owner, you are responsible for:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2">
            <li>
              Providing the Sitter with safe access to your home (if services
              occur at your property), including keys or entry instructions.
            </li>
            <li>
              Ensuring your home environment is reasonably safe and suitable for
              the pet and the Sitter.
            </li>
            <li>
              Leaving sufficient food, medication, equipment, and clear written
              instructions for the pet&apos;s care.
            </li>
            <li>
              Being reachable via phone or messaging during the booking, or
              providing an emergency contact if you will be unavailable.
            </li>
            <li>
              Complying with local licensing, leash, and identification
              requirements for your pet.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            You agree that all communication and arrangements relating to a
            booking should take place via the FunNTail platform wherever
            reasonably possible, so that there is a clear record of discussions
            for safety and support purposes.
          </p>
        </div>
      ),
    },
    {
      id: "owner-payments-cancellations",
      title: "Owner Payments, Fees & Cancellations",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            All bookings must be requested, accepted, and paid for in full
            through FunNTail. You agree:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray_text2">
            <li>
              To pay the Sitter&apos;s rate plus any applicable FunNTail service
              fees, as shown at checkout.
            </li>
            <li>
              That FunNTail&apos;s cancellation and refund policy applies to all
              bookings, including any tiered refunds based on the time remaining
              before the booking start.
            </li>
            <li>
              That FunNTail&apos;s service fee may be non-refundable for certain
              late cancellations, as described in the Terms &amp; Conditions.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            You must not attempt to bypass FunNTail by arranging payments
            directly with Sitters for bookings introduced through the platform.
            Doing so may result in suspension or termination of your account.
          </p>
        </div>
      ),
    },
    {
      id: "emergencies-disputes",
      title: "Emergencies, Disputes & General Provisions",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            In an emergency involving your pet, Sitters are encouraged to
            contact you first. If you cannot be reached and urgent action is
            required, the Sitter may seek veterinary care and/or contact
            FunNTail Support. By using the platform, you authorise Sitters to
            act reasonably in the best interests of your pet in urgent
            situations.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            If you believe a Sitter has acted inappropriately, breached this
            Agreement, or provided inadequate care, you agree to contact
            FunNTail Support as soon as possible so that we can review the
            situation and, where relevant, consider whether the FunNTail
            Guarantee or any form of reimbursement may apply.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            Both the Sitter Agreement and the Pet Owner Agreement form part of
            your overall legal relationship with FunNTail. In the event of any
            inconsistency, the FunNTail Terms &amp; Conditions and applicable UK
            law will prevail.
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
  }, [sections]);

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
            <div className="p-6 sticky top-28">
              <h2 className="text-lg font-semibold text-gray_text3 mb-6 flex items-center gap-2">
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left p-3 transition-all duration-200 flex items-center gap-3 group ${
                      activeSection === section.id
                        ? "text-primary_color border-l-2 border-primary_color font-bold"
                        : "text-gray_text2 hover:text-gray_text3"
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
              <motion.div className="lg:hidden lg:p-6 mb-6">
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
            <motion.div className="lg:p-8 mb-8">
              <p className="text-gray_text2 leading-relaxed mb-4">
                This page sets out both the Sitter Agreement and the Pet Owner
                Agreement that apply when you use FunNTail to provide or book
                pet care services. These agreements work alongside our Terms
                &amp; Conditions, Privacy Policy, Cookies Policy, and FunNTail
                Guarantee.
              </p>
              <p className="text-gray_text2 leading-relaxed mb-4">
                By creating an account, listing your services, or booking pet
                care through FunNTail, you confirm that you have read,
                understood, and agree to the relevant Agreement that applies to
                you, as well as our other legal policies.
              </p>
              <p className="text-gray_text2 leading-relaxed">
                Please read these sections carefully. They set out the
                expectations, responsibilities, and standards of conduct for
                both Sitters and Pet Owners using the FunNTail app.
              </p>
            </motion.div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  className="lg:p-8 scroll-mt-28"
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
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default AgreementsScreen;
