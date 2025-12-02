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

const LegalScreen: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections: Section[] = [
    {
      id: "who-we-are",
      title: "Who We Are",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail Ltd (“FunNTail”, “we”, “us”, “our”) is the operator of the
            FunNTail mobile application, website, and related pet-care booking
            platform. We act as the Data Controller for all personal data
            processed through our Services.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            <strong>Company Name:</strong> FunNTail Ltd
            <br />
            <strong>Company Number:</strong> 16741102
            <br />
            <strong>Company Type:</strong> Private Limited by Shares
            <br />
            <strong>Registered Address:</strong>
            <br />
            Heantun Point
            <br />
            1 Culwell Street
            <br />
            Wolverhampton
            <br />
            West Midlands
            <br />
            WV10 0JT
            <br />
            United Kingdom
          </p>

          <p className="text-gray_text2 leading-relaxed">
            We are committed to protecting your privacy and handling your data
            in accordance with the UK General Data Protection Regulation (UK
            GDPR) and the Data Protection Act 2018.
          </p>
        </div>
      ),
    },
    {
      id: "scope",
      title: "Scope of This Policy",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            This Privacy Policy describes how FunNTail Ltd collects, uses,
            stores, and protects personal data when you use:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>the FunNTail website (funntail.co.uk)</li>
            <li>the FunNTail mobile application</li>
            <li>our booking, messaging, and payment systems</li>
            <li>our sitter–owner matching services</li>
            <li>Stripe Identity verification</li>
            <li>customer support channels</li>
            <li>promotions, surveys, or feedback forms</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            This policy does <strong>not</strong> cover data handling by
            third-party websites, services, or providers linked from the
            FunNTail platform.
          </p>
        </div>
      ),
    },

    {
      id: "information-we-collect",
      title: "Information We Collect",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            We collect different types of information to operate the FunNTail
            platform, provide safe pet care services, process payments, and
            improve user experience.
          </p>

          <p className="text-gray_text2 leading-relaxed font-semibold">
            A. Information You Provide Directly
          </p>
          <ul className="list-disc pl-6 text-gray_text2 space-y-1">
            <li>Name, email address, phone number, postcode</li>
            <li>Profile photos</li>
            <li>Password (securely hashed)</li>
            <li>Pet information, including behavioural & health details</li>
            <li>Sitter skills, pricing, availability</li>
            <li>In-app messages, reviews, and customer support interactions</li>
            <li>
              Payment details (processed by Stripe; full card numbers not
              stored)
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed font-semibold">
            B. Information Collected Automatically
          </p>
          <ul className="list-disc pl-6 text-gray_text2 space-y-1">
            <li>Device identifiers and IP address</li>
            <li>Cookie and tracking data</li>
            <li>Browsing behaviour and usage activity</li>
            <li>App performance metrics and crash logs</li>
            <li>Approximate location</li>
            <li>Precise GPS data (with consent)</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed font-semibold">
            C. Identity Verification Data (via Stripe Identity)
          </p>
          <ul className="list-disc pl-6 text-gray_text2 space-y-1">
            <li>
              Government-issued ID (passport, driving licence, national ID)
            </li>
            <li>Selfie photo for facial match verification</li>
            <li>Address and DOB (from ID)</li>
            <li>Verification metadata and fraud indicators</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed font-semibold">
            D. Information From Third Parties
          </p>
          <ul className="list-disc pl-6 text-gray_text2 space-y-1">
            <li>Stripe (payment processing & ID verification)</li>
            <li>Analytics services (Google Analytics, Firebase)</li>
            <li>Advertising partners (with consent)</li>
          </ul>
        </div>
      ),
    },
    {
      id: "how-we-collect-information",
      title: "How We Collect Information",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail collects personal data in several ways to deliver and
            improve our services.
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              <strong>Directly from you</strong> — when you create an account,
              fill out your profile, add pet information, or communicate with
              other users.
            </li>
            <li>
              <strong>Automatically</strong> — through cookies, app analytics,
              device data, and usage tracking.
            </li>
            <li>
              <strong>From your device</strong> — including GPS data (with
              explicit consent), operating system, and hardware details.
            </li>
            <li>
              <strong>From our mobile app</strong> — when you perform actions
              such as messaging, making bookings, checking-in for walks, or
              uploading photos.
            </li>
            <li>
              <strong>From third parties</strong> — including Stripe for
              payments and identity verification, analytics platforms, and
              advertising partners.
            </li>
            <li>
              <strong>From user interactions</strong> — such as reviews, chat
              logs, safety reports, or customer support cases.
            </li>
            <li>
              <strong>Through location services</strong> — for GPS walk
              tracking, reliability monitoring, and safety features.
            </li>
          </ul>
        </div>
      ),
    },

    {
      id: "data-categories",
      title: "Categories of Data We Collect",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail collects several categories of data. The tables below
            summarise what we collect and where it comes from.
          </p>

          <div>
            <ul className="list-disc pl-6 text-gray_text2 space-y-2">
              <li>
                <strong>Account Information:</strong> name, email, phone,
                address
                <br /> <span className="text-sm">Source: You</span>
              </li>
              <li>
                <strong>Login Credentials:</strong> hashed passwords
                <br /> <span className="text-sm">Source: You</span>
              </li>
              <li>
                <strong>Identity Documents:</strong> passport, driving licence,
                national ID
                <br /> <span className="text-sm">Source: Stripe Identity</span>
              </li>
              <li>
                <strong>Biometric Comparison Data:</strong> facial match
                verification
                <br /> <span className="text-sm">Source: Stripe Identity</span>
              </li>
              <li>
                <strong>Payment Data:</strong> card type, transaction details
                <br /> <span className="text-sm">Source: Stripe</span>
              </li>
              <li>
                <strong>Pet Data:</strong> name, breed, age, characteristics
                <br /> <span className="text-sm">Source: You</span>
              </li>
              <li>
                <strong>Pet Health Data:</strong> medications, vet info,
                behavioural notes
                <br /> <span className="text-sm">Source: You</span>
              </li>
              <li>
                <strong>Location Data:</strong> GPS data during walks
                <br /> <span className="text-sm">Source: Device</span>
              </li>
              <li>
                <strong>Usage Data:</strong> app actions, interactions,
                analytics
                <br />{" "}
                <span className="text-sm">Source: App analytics tools</span>
              </li>
              <li>
                <strong>Communications:</strong> messages, support requests
                <br /> <span className="text-sm">Source: You</span>
              </li>
              <li>
                <strong>Photos/Videos:</strong> pet photos, profile images
                <br /> <span className="text-sm">Source: You</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "how-we-use-your-information",
      title: "How We Use Your Information",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail uses the information we collect to deliver safe, reliable,
            personalised pet care services. We only use your data where
            permitted under UK GDPR.
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              <strong>Providing our services:</strong> creating accounts,
              managing profiles, enabling bookings, and supporting communication
              between pet owners and sitters.
            </li>

            <li>
              <strong>Matching sitters and pet owners:</strong> using profile
              information, location data, and pet requirements to suggest
              compatible service providers.
            </li>

            <li>
              <strong>Processing payments:</strong> handling transactions
              securely through Stripe, generating receipts, and preventing
              payment fraud.
            </li>

            <li>
              <strong>Identity verification:</strong> using Stripe Identity to
              confirm user authenticity and reduce fraud.
            </li>

            <li>
              <strong>Safety & security:</strong> monitoring activity, detecting
              suspicious behaviour, and preventing platform misuse.
            </li>

            <li>
              <strong>GPS tracking:</strong> enabling walk tracking, safety
              alerts, and time/location verification for pet owners.
            </li>

            <li>
              <strong>Communication:</strong> sending notifications, reminders,
              updates, service alerts, and responding to support requests.
            </li>

            <li>
              <strong>Platform improvement:</strong> analysing app performance,
              fixing bugs, testing new features, and improving user experience.
            </li>

            <li>
              <strong>Marketing (with consent):</strong> sending promotions,
              tailored recommendations, and advertising through approved
              partners.
            </li>

            <li>
              <strong>Legal compliance:</strong> fraud prevention, dispute
              resolution, accounting, and fulfilling UK legal obligations.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "legal-bases-for-processing",
      title: "Legal Bases for Processing",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            Under UK GDPR, we must have a valid legal basis to process your
            personal data. FunNTail uses the following lawful bases:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              <strong>Contract:</strong> We process data necessary to deliver
              our services, including account creation, bookings, payments,
              messaging, and sitter-owner interactions.
            </li>

            <li>
              <strong>Legitimate Interests:</strong> improving the platform,
              ensuring user safety, preventing fraud, monitoring usage, and
              keeping our systems secure. We balance these interests with your
              rights.
            </li>

            <li>
              <strong>Consent:</strong> required for marketing emails,
              advertising, cookie tracking, and precise GPS location data. You
              may withdraw consent at any time.
            </li>

            <li>
              <strong>Legal Obligation:</strong> retaining transaction history
              for HMRC, identity verification requirements, responding to lawful
              requests, and handling safety reports.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "how-we-share-information",
      title: "How We Share Your Information",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            We only share your information when necessary to provide our
            services, ensure safety, or comply with UK legal obligations. We do
            not sell your personal data.
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              <strong>Pet Owners & Sitters:</strong> Certain profile
              information, pet details, booking data, and messages are shared
              between users as needed for safe service delivery.
            </li>

            <li>
              <strong>Stripe (Payments & Identity Verification):</strong> Stripe
              processes payments and verifies identity documents. We never store
              full card details or ID images.
            </li>

            <li>
              <strong>Analytics Providers:</strong> such as Google Analytics and
              Firebase to track usage trends and improve the app.
            </li>

            <li>
              <strong>Hosting & Infrastructure:</strong> AWS, Hostinger, Render,
              and other trusted service providers that securely power our
              systems.
            </li>

            <li>
              <strong>Marketing Partners (with consent):</strong> such as Google
              Ads or Meta Ads for personalised promotions.
            </li>

            <li>
              <strong>Legal authorities:</strong> only when required by UK law,
              court orders, or to enforce safety policies.
            </li>

            <li>
              <strong>Business transfers:</strong> if FunNTail is acquired,
              merged, or undergoes restructuring, your data may be transferred
              securely as part of that process.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "cookies-tracking",
      title: "Cookies & Tracking Technologies",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail uses cookies and similar technologies to improve platform
            performance, analyse usage, personalise content, and support
            marketing (with consent). You can manage your preferences via our
            Cookie Banner and your browser settings.
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for login, security,
              session management, and core app functionality. These cannot be
              disabled.
            </li>

            <li>
              <strong>Analytics Cookies:</strong> Used to understand app usage,
              diagnose issues, measure performance, and improve features.
            </li>

            <li>
              <strong>Preference Cookies:</strong> Remember your settings,
              filters, and user choices for a better experience.
            </li>

            <li>
              <strong>Marketing Cookies (with consent):</strong> Enable
              personalised advertising on Google, Meta, and partner platforms.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            A full Cookie Policy will be made available separately on our
            website.
          </p>
        </div>
      ),
    },
    {
      id: "location-gps-data",
      title: "Location & GPS Data",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail may collect both approximate and precise location data,
            depending on your device permissions. GPS tracking is used to
            support pet walking features and ensure safety.
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              <strong>Approximate location:</strong> Used for sitter–owner
              matching and regional availability.
            </li>

            <li>
              <strong>Precise GPS tracking (with consent):</strong> Used for:
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Walk tracking</li>
                <li>Live location updates</li>
                <li>Safety checks and incident verification</li>
                <li>Sitter reliability monitoring</li>
              </ul>
            </li>

            <li>
              <strong>You can disable GPS at any time,</strong> however certain
              features — such as dog walking tracking — will not function.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Location data is never sold and is only shared when required to
            provide booked services or ensure safety.
          </p>
        </div>
      ),
    },
    {
      id: "pet-data-health",
      title: "Pet Data & Pet Health Information",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            To ensure the safety and wellbeing of pets during bookings, FunNTail
            collects certain information about your pet. Although this is not
            classified as personal data under UK GDPR, we treat it with the same
            level of protection.
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              <strong>General pet details:</strong> name, breed, age, size, and
              characteristics.
            </li>

            <li>
              <strong>Behavioural information:</strong> temperament, reactivity,
              training level, social behaviours, history of aggression.
            </li>

            <li>
              <strong>Pet health data:</strong> medications, allergies, vet
              details, vaccinations, chronic conditions.
            </li>

            <li>
              <strong>Care instructions:</strong> feeding schedules, routines,
              preferences, walking patterns.
            </li>

            <li>
              <strong>Sharing:</strong> Pet data is shared only with your booked
              sitter to ensure safe care.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            You can update your pet’s information at any time through your user
            dashboard.
          </p>
        </div>
      ),
    },
    {
      id: "identity-verification",
      title: "Identity Verification via Stripe Identity",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            If you sign up as a sitter or service provider, FunNTail uses Stripe
            Identity to complete identity verification. This helps protect the
            community and reduce fraud.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            Stripe Identity may collect and process:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              Government-issued ID (passport, driving licence, national ID)
            </li>
            <li>Selfie photo for facial comparison</li>
            <li>Address and identity metadata</li>
            <li>Fraud indicators and verification signals</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            FunNTail does <strong>not</strong> receive copies of your ID
            documents. We only receive:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>Verification result (verified / failed)</li>
            <li>Identity confirmation status</li>
            <li>Fraud score indicators</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Stripe Identity processes this information under its own Privacy
            Policy.
          </p>
        </div>
      ),
    },
    {
      id: "analytics-advertising",
      title: "Analytics & Advertising",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail uses analytics and advertising tools to understand how
            users interact with the platform, improve performance, and (with
            consent) deliver relevant marketing.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            We use services such as:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>Google Analytics</li>
            <li>Firebase Analytics</li>
            <li>Meta Ads (Facebook & Instagram)</li>
            <li>Google Ads</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            These tools may collect information such as device details, app
            usage, page views, session activity, and performance metrics.
            Marketing tools operate only with your consent via the Cookie
            Banner.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            You can withdraw consent at any time and opt out of targeted
            advertising through your browser or device settings.
          </p>
        </div>
      ),
    },
    {
      id: "international-transfers",
      title: "International Transfers",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            Some of our service providers may store or process personal data
            outside the United Kingdom. When this occurs, FunNTail ensures that
            all international transfers comply with UK GDPR requirements.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            We use safeguards such as:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>UK International Data Transfer Agreements (IDTA)</li>
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>Countries covered by an official UK adequacy decision</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            These measures ensure your information remains protected, regardless
            of where it is processed.
          </p>
        </div>
      ),
    },
    {
      id: "data-retention",
      title: "Data Retention",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail retains personal data only for as long as necessary to
            provide the Services, comply with legal obligations, resolve
            disputes, and maintain platform security.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            Typical retention periods:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>User Account: retained until you delete your account</li>
            <li>Transaction & payment records: 6 years (UK tax law)</li>
            <li>Analytics data: up to 26 months</li>
            <li>Identity verification results: per Stripe Identity’s rules</li>
            <li>Customer support messages: up to 24 months</li>
            <li>Pet profiles: retained while your account is active</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            When data is no longer needed, it is securely deleted or anonymised.
          </p>
        </div>
      ),
    },
    {
      id: "childrens-data",
      title: "Children’s Data (Under 16)",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail is not intended for use by individuals under the age of 16.
            We do not knowingly collect or process personal data belonging to
            children.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            If we learn that a user under 16 has created an account or provided
            personal data, we will:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>Delete the account</li>
            <li>Remove any associated data</li>
            <li>Notify the account holder (if appropriate)</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            If you believe a child has provided information on our platform,
            please contact us at <strong>privacy@funntail.co.uk</strong>.
          </p>
        </div>
      ),
    },
    {
      id: "security",
      title: "Security",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail uses industry-standard security measures to protect
            personal data from unauthorised access, loss, misuse, and
            disclosure.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            Our security measures include:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>Encryption of data in transit</li>
            <li>Secure cloud hosting and firewalls</li>
            <li>Strict access control and authentication</li>
            <li>Regular monitoring and system audits</li>
            <li>Hashed passwords (never stored in plain text)</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            While no system can be fully secure, we work continuously to enhance
            our protections and safeguard your data.
          </p>
        </div>
      ),
    },
    {
      id: "your-rights",
      title: "Your Rights Under UK GDPR",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            Under the UK GDPR, you have several rights regarding your personal
            data. You may exercise these rights at any time by contacting us at
            <strong> privacy@funntail.co.uk</strong>.
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              <strong>Right to Access</strong> — request a copy of the data we
              hold about you.
            </li>
            <li>
              <strong>Right to Rectification</strong> — correct inaccurate or
              incomplete data.
            </li>
            <li>
              <strong>Right to Erasure</strong> — request deletion of your
              personal data.
            </li>
            <li>
              <strong>Right to Restrict Processing</strong> — limit how we use
              your data.
            </li>
            <li>
              <strong>Right to Object</strong> — object to processing based on
              legitimate interests.
            </li>
            <li>
              <strong>Right to Withdraw Consent</strong> — withdraw consent at
              any time (e.g., marketing).
            </li>
            <li>
              <strong>Right to Data Portability</strong> — request a copy of
              your data in a portable format.
            </li>
            <li>
              <strong>Right to Complain</strong> — lodge a complaint with the UK
              ICO.
            </li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            We may need to verify your identity before fulfilling your request.
          </p>
        </div>
      ),
    },
    {
      id: "account-deletion",
      title: "Account Deletion",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            You may delete your FunNTail account at any time through the mobile
            app or by contacting us at <strong>privacy@funntail.co.uk</strong>.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            When you request deletion, we will:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>
              Remove or anonymise personal data not required for legal
              compliance
            </li>
            <li>Retain transaction records for 6 years (UK law requirement)</li>
            <li>
              Delete pet data, profile information, and communications where
              possible
            </li>
            <li>Deactivate and permanently remove your account</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Some data may be retained where required for fraud prevention,
            dispute resolution, or regulatory obligations.
          </p>
        </div>
      ),
    },
    {
      id: "policy-changes",
      title: "Changes to This Privacy Policy",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail may update this Privacy Policy from time to time to reflect
            changes in our practices, legal requirements, or service features.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            When updates occur, we will:
          </p>

          <ul className="list-disc pl-6 text-gray_text2 space-y-2">
            <li>Post the new version on our website and app</li>
            <li>Update the “Last Updated” date at the top of the policy</li>
            <li>Provide notice for material changes when legally required</li>
          </ul>

          <p className="text-gray_text2 leading-relaxed">
            Continued use of the Service after an update means you accept the
            new terms.
          </p>
        </div>
      ),
    },
    {
      id: "contact-us",
      title: "Contact Us",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            If you have questions, concerns, or requests relating to this
            Privacy Policy or your personal data, you may contact us at:
          </p>

          <div className="text-gray_text2 leading-relaxed space-y-2">
            <p>
              <strong>FunNTail Ltd</strong>
            </p>
            <p>Heantun Point</p>
            <p>1 Culwell Street</p>
            <p>Wolverhampton</p>
            <p>West Midlands</p>
            <p>WV10 0JT</p>
            <p>United Kingdom</p>
            <p>
              📧 <strong>privacy@funntail.co.uk</strong>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "automated-ai",
      title: "Automated Decision-Making & AI Technology",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray_text2 leading-relaxed">
            FunNTail uses automated tools and artificial intelligence (“AI”) to
            support certain features of the Service, including sitter–owner
            matching, fraud detection, chat moderation, safety monitoring, and
            personalised recommendations.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            These tools may analyse data such as booking history, profile
            details, behavioural patterns, and app usage. However, they do not
            make final decisions without human involvement.
          </p>

          <p className="text-gray_text2 leading-relaxed">
            You may request human review of any decision made using automated
            processes by contacting us at{" "}
            <strong>privacy@funntail.co.uk</strong>.
          </p>
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
