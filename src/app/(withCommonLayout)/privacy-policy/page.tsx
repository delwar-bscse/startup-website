// pages/privacy-policy.tsx

"use client";
import React from "react";
import PrivacyPolicyImg from "@/assets/contact/PrivacyPolicy.png";
import { useGetPrivacyPolicyQuery } from "@/Redux/apis/utilityApi";

const PrivacyPolicyPage: React.FC = () => {
  const { data: termsAndConditions } = useGetPrivacyPolicyQuery({});
  const termsData = termsAndConditions?.data;
  console.log("Terms and Conditions Data:", termsData);

  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${PrivacyPolicyImg.src})` }}
        className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Privacy Policy
        </h2>
      </div>
      <div className="maxWidth py-12 space-y-4 md:space-y-6">
        <p className="text-gray-500 text-sm sm:text-base">
          This Privacy Policy explains how we collect, use, and protect your
          personal information when you visit or use our platform. By accessing
          our platform, you agree to the collection and use of information in
          accordance with this policy.
        </p>

        <h3 className="text-xl font-semibold text-gray-700">
          1. Information We Collect
        </h3>
        <p className="text-gray-500 text-sm sm:text-base">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Personal Information</strong>: This includes your name,
            email address, phone number, and other details provided during
            registration or interactions with the platform.
          </li>
          <li>
            <strong>Usage Data</strong>: Information on how you use the
            platform, including IP addresses, browser types, and interaction
            data.
          </li>
          <li>
            <strong>Cookies</strong>: We use cookies to enhance your experience.
            Cookies are small files stored on your device that help improve site
            performance and user experience.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700">
          2. How We Use Your Information
        </h3>
        <p className="text-gray-500 text-sm sm:text-base">
          The information we collect is used for various purposes:
        </p>
        <ul className="list-disc pl-6 text-gray-500">
          <li>To provide and maintain our services.</li>
          <li>
            To improve the user experience and functionality of our platform.
          </li>
          <li>
            To communicate with you, including sending updates, notifications,
            and support messages.
          </li>
          <li>
            To analyze usage patterns to improve the performance and content of
            the platform.
          </li>
          <li>
            To comply with legal obligations and ensure the security of our
            services.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700">
          3. Data Sharing and Disclosure
        </h3>
        <p className="text-gray-500 text-sm sm:text-base">
          We do not sell or rent your personal data to third parties. However,
          we may share your information in the following situations:
        </p>
        <ul className="list-disc pl-6 text-gray-500">
          <li>
            <strong>With service providers</strong>: We may share your
            information with trusted third-party companies who help us operate
            the platform and provide services (e.g., payment processors,
            analytics providers).
          </li>
          <li>
            <strong>For legal compliance</strong>: If required by law, we may
            share your information to comply with a legal obligation, court
            order, or government request.
          </li>
          <li>
            <strong>Business transfers</strong>: In the event of a merger,
            acquisition, or asset sale, your information may be transferred to
            the new owner.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700">
          4. Data Security
        </h3>
        <p className="text-gray-500 text-sm sm:text-base">
          We take the security of your personal data seriously. We implement a
          variety of security measures to protect your information from
          unauthorized access, alteration, disclosure, or destruction. However,
          please be aware that no method of electronic transmission or storage
          is 100% secure.
        </p>

        <h3 className="text-xl font-semibold text-gray-700">5. Your Rights</h3>
        <p className="text-gray-500 text-sm sm:text-base">
          You have certain rights regarding your personal data, including:
        </p>
        <ul className="list-disc pl-6 text-gray-500">
          <li>
            <strong>Access</strong>: You can request access to the personal data
            we hold about you.
          </li>
          <li>
            <strong>Correction</strong>: You can request that we correct any
            inaccurate information.
          </li>
          <li>
            <strong>Deletion</strong>: You can request the deletion of your
            personal data, subject to certain exceptions.
          </li>
          <li>
            <strong>Opt-out</strong>: You can opt out of receiving promotional
            communications from us by following the unsubscribe instructions in
            the email.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700">
          6. Cookies and Tracking Technologies
        </h3>
        <p className="text-gray-500 text-sm sm:text-base">
          We use cookies and similar tracking technologies to enhance your
          experience and gather information about how our platform is used. You
          can manage your cookie preferences through your browser settings.
        </p>

        <h3 className="text-xl font-semibold text-gray-700">
          7. Third-Party Links
        </h3>
        <p className="text-gray-500 text-sm sm:text-base">
          Our platform may contain links to third-party websites. We are not
          responsible for the privacy practices or the content of those
          websites. We encourage you to read their privacy policies before
          sharing any personal data.
        </p>

        <h3 className="text-xl font-semibold text-gray-700">
          8. Children&apos;s Privacy
        </h3>
        <p className="text-gray-500 text-sm sm:text-base">
          Our platform is not intended for use by individuals under the age of
          18. We do not knowingly collect personal information from children
          under the age of 18. If we become aware that we have collected
          personal data from a child, we will take steps to delete that
          information.
        </p>

        <h3 className="text-xl font-semibold text-gray-700">
          9. Changes to This Privacy Policy
        </h3>
        <p className="text-gray-500 text-sm sm:text-base">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the updated policy will be effective
          immediately upon posting. We encourage you to review this policy
          periodically to stay informed about how we are protecting your
          information.
        </p>

        <h3 className="text-xl font-semibold text-gray-700">10. Contact Us</h3>
        <p className="text-gray-500 text-sm sm:text-base">
          If you have any questions or concerns about this Privacy Policy or how
          we handle your personal information, please contact us at{" "}
          <a href="mailto:support@yourwebsite.com" className="text-blue-600">
            support@yourwebsite.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
