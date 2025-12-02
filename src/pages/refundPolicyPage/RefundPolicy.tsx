import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Shield,
  Users,
  AlertTriangle,
  Briefcase,
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const RefundPolicyScreen: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections: Section[] = [
    {
      id: "scope",
      title: "Scope of This Refund Policy",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            This Refund & Cancellation Policy explains when and how refunds,
            credits, and payout reversals may apply to bookings made through
            FunNTail Ltd (&quot;FunNTail&quot;, &quot;we&quot;, &quot;us&quot;,
            &quot;our&quot;). It forms part of your agreement with FunNTail and
            should be read alongside our Terms &amp; Conditions, Privacy Policy,
            Cookies Policy, Sitter Agreement, Pet Owner Agreement, and the
            FunNTail Guarantee.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            This policy applies to all bookings that:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              Are created and confirmed through the FunNTail platform; and
            </li>
            <li>Are paid for in full using FunNTail&apos;s payment system.</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Bookings or payments arranged off-platform are not covered by this
            policy, the FunNTail Guarantee, or any other support program.
          </p>
        </div>
      ),
    },
    {
      id: "definitions",
      title: "Key Definitions",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray_text2 leading-relaxed">
            For the purposes of this Refund Policy:
          </p>
          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              <strong>Booking:</strong> A confirmed service (such as pet
              sitting, walking, or grooming) requested by a Pet Owner and
              accepted by a Sitter, fully paid through FunNTail.
            </li>
            <li>
              <strong>Service Fee:</strong> The percentage fee (currently 5%)
              charged by FunNTail to Pet Owners on top of the Sitter&apos;s
              rate.
            </li>
            <li>
              <strong>Platform Fee:</strong> The portion of the booking amount
              retained by FunNTail from Sitter earnings (currently 15%).
            </li>
            <li>
              <strong>Payout:</strong> The net amount paid out to a Sitter for a
              completed booking after deducting the platform fee.
            </li>
            <li>
              <strong>Refund:</strong> A partial or full return of amounts paid
              by a Pet Owner to the original payment method or as platform
              credit, in accordance with this policy.
            </li>
            <li>
              <strong>Cooling-off period:</strong> The period after a booking
              ends during which payouts may be held for safety, dispute, or
              fraud checks.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "standard-cancellation-ladder",
      title: "Standard Cancellation & Refund Ladder",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail uses a time-based cancellation model. The amount eligible
            for refund depends on how many hours remain before the scheduled
            booking start time at the moment the Pet Owner cancels.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-gray_text3 font-semibold">
                    Time Before Booking Start
                  </th>
                  <th className="px-4 py-2 text-left text-gray_text3 font-semibold">
                    Amount Retained
                  </th>
                  <th className="px-4 py-2 text-left text-gray_text3 font-semibold">
                    Amount Refunded (Service Portion)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-2">&lt; 1 hour</td>
                  <td className="px-4 py-2">100% charged (no refund)</td>
                  <td className="px-4 py-2">0%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">1–6 hours</td>
                  <td className="px-4 py-2">90% fee retained</td>
                  <td className="px-4 py-2">10% refunded</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">6–12 hours</td>
                  <td className="px-4 py-2">75% fee retained</td>
                  <td className="px-4 py-2">25% refunded</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">12–24 hours</td>
                  <td className="px-4 py-2">50% fee retained</td>
                  <td className="px-4 py-2">50% refunded</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">24–48 hours</td>
                  <td className="px-4 py-2">25% fee retained</td>
                  <td className="px-4 py-2">75% refunded</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">&gt; 48 hours</td>
                  <td className="px-4 py-2">0% retained</td>
                  <td className="px-4 py-2">100% refunded</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray_text2 leading-relaxed">
            The above ladder applies to the <strong>service cost</strong> paid
            for the booking (i.e. the sitter&apos;s rate). The treatment of
            FunNTail&apos;s 5% service fee is described separately below.
          </p>
        </div>
      ),
    },
    {
      id: "service-fee-refunds",
      title: "Service Fee Refunds",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail charges Pet Owners a 5% service fee on each booking to help
            cover platform, safety, and support costs. This fee is generally{" "}
            <strong>non-refundable</strong> for late cancellations.
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              If a Pet Owner cancels <strong>more than 48 hours</strong> before
              the booking start time, the service fee may be refunded together
              with the booking amount.
            </li>
            <li>
              If a Pet Owner cancels <strong>within 48 hours</strong> of the
              booking start time, the service fee is usually{" "}
              <strong>non-refundable</strong>, even where part of the sitter fee
              is refunded.
            </li>
            <li>
              In rare cases (for example, a clear FunNTail technical error or a
              duplicate booking caused by the platform), we may, at our
              discretion, refund or credit the service fee.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Service fee refunds are exceptional and assessed case by case.
          </p>
        </div>
      ),
    },
    {
      id: "sitter-cancellations",
      title: "Sitter Cancellations & Owner Remedies",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            If a Sitter cancels a confirmed booking, Pet Owners should not be
            left out of pocket. In these situations:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              The Pet Owner will generally receive a{" "}
              <strong>full refund</strong> of the sitter fee and any service fee
              paid for that booking, or a full-value FunNTail credit, at our
              discretion.
            </li>
            <li>
              FunNTail may assist the Pet Owner in finding a replacement sitter
              where possible, but cannot guarantee availability.
            </li>
            <li>
              Sitters may receive a <strong>strike</strong> or penalty under the
              cancellation rules described in the Terms &amp; Conditions and
              Sitter Agreement, including potential account removal after
              repeated cancellations.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Refunds in these cases are not taken from the Pet Owner but may be
            recovered from the Sitter&apos;s future payouts where appropriate.
          </p>
        </div>
      ),
    },
    {
      id: "sitter-payout-reversals",
      title: "Sitter Payout Reversals & Negative Balances",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            In some cases a refund or chargeback may be processed{" "}
            <strong>after</strong> a payout has already been sent to the Sitter.
            To keep the marketplace fair and sustainable, Sitters agree that:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              If a booking is refunded to the Pet Owner (in whole or in part)
              after the Sitter has been paid out, FunNTail may{" "}
              <strong>reverse</strong> or <strong>adjust</strong> the relevant
              portion of that payout.
            </li>
            <li>
              FunNTail may deduct the reversed amount from the Sitter&apos;s
              future payouts until the balance is settled.
            </li>
            <li>
              If there are no future payouts, the Sitter may hold a{" "}
              <strong>negative balance</strong> and be required to repay the
              amount to FunNTail.
            </li>
            <li>
              In the event of a Stripe or card chargeback (for example, fraud or
              an unauthorised payment), the Sitter may be responsible for the
              disputed portion of the payout, in line with card network and
              Stripe rules.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            FunNTail will act reasonably when applying reversals and will
            consider available evidence from both the Pet Owner and Sitter
            before making a final decision.
          </p>
        </div>
      ),
    },
    {
      id: "refund-process",
      title: "How to Request a Refund",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray_text2 leading-relaxed">
            If you believe you are entitled to a refund under this policy,
            please follow these steps:
          </p>

          <ol className="list-decimal pl-6 text-gray_text2 space-y-2">
            <li>
              <strong>Contact the other party in-app:</strong> Message the
              Sitter or Pet Owner through the FunNTail inbox to explain the
              issue and see if it can be resolved directly.
            </li>
            <li>
              <strong>Contact FunNTail Support:</strong> If you cannot resolve
              the matter, contact FunNTail Support as soon as possible, ideally
              within <strong>48 hours</strong> of the scheduled booking end time
              (or sooner in the case of a no-show or serious issue).
            </li>
            <li>
              <strong>Provide documentation:</strong> You may be asked for
              screenshots of chat, photos, vet invoices, or other evidence to
              help us review your request.
            </li>
          </ol>

          <p className="text-gray_text2 leading-relaxed">
            Requests made <strong>significantly after</strong> the booking has
            ended may be more difficult to verify and may not qualify for a
            refund, unless there are exceptional circumstances.
          </p>
        </div>
      ),
    },
    {
      id: "processing-method-timing",
      title: "Refund Method & Processing Time",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray_text2 leading-relaxed">
            Approved refunds are usually processed either:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              Back to the <strong>original payment method</strong>; or
            </li>
            <li>
              As <strong>FunNTail credit</strong> for future bookings, where
              agreed with the Pet Owner.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Once a refund is issued, the time it takes to appear in your account
            depends on your bank or card provider. Some providers may take
            several working days to show the credit. FunNTail has no control
            over these timelines.
          </p>
        </div>
      ),
    },
    {
      id: "non-refundable-cases",
      title: "Non-Refundable Situations",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray_text2 leading-relaxed">
            While we aim to be fair and supportive, not every situation will
            qualify for a refund. Examples of non-refundable cases include (but
            are not limited to):
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              Pet Owner cancellations that fall within the late-cancellation
              ladder where most or all of the fee is retained.
            </li>
            <li>
              Dissatisfaction with a Sitter&apos;s style or personality, where
              the booked service was substantially performed.
            </li>
            <li>
              Issues arising from incomplete, inaccurate, or misleading pet or
              home information provided by the Pet Owner.
            </li>
            <li>
              Bookings that were arranged or paid for outside the FunNTail
              platform.
            </li>
            <li>
              Requests made a long time after the booking, where no timely
              report or evidence is available.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            FunNTail reserves the right to decline refund requests that fall
            outside this policy or where we reasonably believe there has been
            misuse, fraud, or bad faith.
          </p>
        </div>
      ),
    },
    {
      id: "funntail-errors-exceptions",
      title: "FunNTail Errors, Duplicate Bookings & Exceptions",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray_text2 leading-relaxed">
            In rare cases, a technical issue or platform error may result in:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>A duplicate booking or duplicate charge;</li>
            <li>An incorrect amount being charged; or</li>
            <li>A booking being confirmed despite a known system problem.</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Where FunNTail is clearly at fault, we will work with you to correct
            the error, which may include:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>Issuing a full or partial refund;</li>
            <li>Issuing a FunNTail credit; and/or</li>
            <li>Providing reasonable additional support where appropriate.</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            FunNTail&apos;s decision in such cases will take into account any
            impact on both the Pet Owner and Sitter, and any steps already taken
            by the parties to resolve the issue.
          </p>
        </div>
      ),
    },
    {
      id: "relationship-guarantee",
      title: "Relationship with the FunNTail Guarantee",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray_text2 leading-relaxed">
            This Refund Policy is separate from the{" "}
            <strong>FunNTail Guarantee</strong>, which is a voluntary support
            program providing limited reimbursement for certain eligible vet
            bills, property damage, and third-party injury costs during an
            active booking.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            A refund under this policy does <strong>not</strong> automatically
            mean that a claim is valid under the FunNTail Guarantee, and vice
            versa. Each program has its own eligibility criteria, documentation
            requirements, and maximum limits.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            For more details, please refer to the separate{" "}
            <strong>FunNTail Guarantee</strong> page.
          </p>
        </div>
      ),
    },
    {
      id: "disputes-and-final-decision",
      title: "Disputes, Evidence & Final Decision",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray_text2 leading-relaxed">
            When a refund request involves a dispute between a Pet Owner and a
            Sitter, FunNTail may review:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>In-app messages and booking details;</li>
            <li>Photos, videos, and other evidence;</li>
            <li>Vet records or invoices, where relevant;</li>
            <li>Past behaviour and reviews from both parties.</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            After reviewing the available information, FunNTail will make a{" "}
            <strong>good-faith, final decision</strong> on whether a refund,
            credit, or payout reversal is appropriate. Our determination under
            this policy is final and does not affect any legal rights you may
            have under UK law.
          </p>
        </div>
      ),
    },
    {
      id: "consumer-rights",
      title: "Your Statutory Consumer Rights",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray_text2 leading-relaxed">
            Nothing in this Refund Policy is intended to exclude or limit any
            rights you may have under UK consumer law. If there is any conflict
            between this policy and your statutory rights, your statutory rights
            will prevail.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            If you are unsure of your rights, you may wish to seek independent
            advice or consult official resources such as Citizens Advice.
          </p>
        </div>
      ),
    },
    {
      id: "changes",
      title: "Changes to This Refund Policy",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail may update this Refund &amp; Cancellation Policy from time
            to time to reflect changes in our services, legal obligations, or
            marketplace practices.
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>Updated versions will be posted on our website and app.</li>
            <li>
              The &quot;Last Updated&quot; date will be revised accordingly.
            </li>
            <li>
              In the case of material changes, we may provide additional notice
              through the platform.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Continued use of FunNTail after an update means you accept the
            revised policy.
          </p>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact Us About Refunds",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray_text2 leading-relaxed">
            If you have questions about this Refund Policy, wish to request a
            refund, or need support regarding a booking issue, you can contact
            us at:
          </p>

          <div className="text-gray_text2 leading-relaxed space-y-1">
            <p>
              <strong>Email (Support):</strong> support@funntail.co.uk
            </p>
            <p>
              <strong>Email (Privacy & Data):</strong> privacy@funntail.co.uk
            </p>
            <p className="mt-2">
              <strong>Postal Address:</strong>
            </p>
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

  // Scroll spy
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
          {/* TOC - Desktop */}
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

          {/* Mobile TOC */}
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
            {/* Intro */}
            <motion.div className="lg:p-8 mb-8">
              <p className="text-gray_text2 leading-relaxed mb-4">
                This Refund &amp; Cancellation Policy explains how refunds,
                credits, and payout adjustments work on FunNTail. It is designed
                to be transparent and fair to both Pet Owners and Sitters while
                keeping the platform safe, sustainable, and compliant with UK
                law.
              </p>
              <p className="text-gray_text2 leading-relaxed mb-4">
                By using FunNTail to book or provide pet care services, you
                agree to the rules set out in this policy, as well as our Terms
                &amp; Conditions, Privacy Policy, Cookies Policy, Sitter
                Agreement, Pet Owner Agreement, and FunNTail Guarantee.
              </p>
              <p className="text-gray_text2 leading-relaxed">
                Please read this page carefully before making or cancelling a
                booking. If you have any questions, our Support team is here to
                help.
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

export default RefundPolicyScreen;
