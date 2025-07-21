"use client";

// pages/terms.tsx
import React from "react";
import TermsAndConditionsImg from "@/assets/contact/termsAndConditions.png";
import { useGetTermsAndConditionsQuery } from "@/Redux/apis/utilityApi";

const TermsPage: React.FC = () => {
  const { data: termsAndConditions } = useGetTermsAndConditionsQuery({});
  console.log("Terms and Conditions Data:", termsAndConditions);

  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${TermsAndConditionsImg.src})` }}
        className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Terms & Conditions
        </h2>
      </div>
      <div className="maxWidth py-20 space-y-4 md:space-y-6">
        <p className="text-gray-500 text-sm sm:text-base">
          Welcome to GiftMeIn! By using our platform, you agree to these Terms
          and Conditions. Please read them carefully before accessing or using
          our services.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          1. Introduction
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Welcome to our platform! These Terms and Conditions
          (&quot;Terms&quot;) govern your use of the services provided by our
          website. By accessing or using the website, you agree to comply with
          these Terms. If you do not agree to these Terms, you should not use
          the website.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          2. Definitions
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          In these Terms, the following terms have the following meanings:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-500 text-sm sm:text-base">
          <li>
            <strong>Investor</strong>: Any individual or entity who invests in
            projects through our platform.
          </li>
          <li>
            <strong>Entrepreneur</strong>: Any individual or entity who presents
            projects for investment on our platform.
          </li>
          <li>
            <strong>Platform</strong>: The website and all related services we
            provide.
          </li>
          <li>
            <strong>Services</strong>: All features and tools available on the
            Platform to Investors and Entrepreneurs.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          3. Account Registration
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          To use our Platform, you must create an account. You must provide
          accurate and up-to-date information during registration. You are
          responsible for maintaining the confidentiality of your account
          credentials.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          4. Use of Services
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Investors may browse, review, and invest in projects listed on the
          Platform. Entrepreneurs may post projects and seek investments. Both
          Investors and Entrepreneurs must comply with all applicable laws,
          regulations, and guidelines.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          5. Fees and Payments
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Any fees for services provided through the Platform will be outlined
          separately. By using our Platform, you agree to pay any applicable
          fees.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          6. Responsibilities
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          - Investors: Investors are responsible for conducting their own due
          diligence on any projects before investing. - Entrepreneurs:
          Entrepreneurs are responsible for providing accurate and complete
          information about their projects.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          7. Limitations of Liability
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Our liability is limited to the fullest extent permitted by law. We
          are not responsible for any direct, indirect, or consequential damages
          arising out of your use of the Platform.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          8. Termination
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          We reserve the right to suspend or terminate your account if we
          believe you have violated these Terms.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          9. Governing Law
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          These Terms are governed by the laws of the jurisdiction in which we
          operate. Any disputes will be resolved in the appropriate courts of
          that jurisdiction.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          10. Changes to Terms
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          We reserve the right to modify or update these Terms at any time. Any
          changes will be effective as soon as they are posted on the website.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          11. Contact Us
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          If you have any questions or concerns regarding these Terms, please
          contact us at support@yourwebsite.com.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
