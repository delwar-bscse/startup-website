// pages/terms.tsx
import React from 'react'
import ContactUsImg from "@/assets/contact/contact-us.png";

const TermsPage: React.FC = () => {
  return (
    <div className="">
      <div style={{ backgroundImage: `url(${ContactUsImg.src})` }} className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Terms & Conditions</h2>
      </div>
      <div className="maxWidth py-20 space-y-6">
        <p>Welcome to GiftMeIn! By using our platform, you agree to these Terms and Conditions. Please read them carefully before accessing or using our services.</p>
        <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
        <p>
          Welcome to our platform! These Terms and Conditions (&quot;Terms&quot;) govern your use of the
          services provided by our website. By accessing or using the website, you agree to comply
          with these Terms. If you do not agree to these Terms, you should not use the website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">2. Definitions</h2>
        <p>
          In these Terms, the following terms have the following meanings:
        </p>
        <ul className="list-disc pl-6">
          <li><strong>Investor</strong>: Any individual or entity who invests in projects through our platform.</li>
          <li><strong>Entrepreneur</strong>: Any individual or entity who presents projects for investment on our platform.</li>
          <li><strong>Platform</strong>: The website and all related services we provide.</li>
          <li><strong>Services</strong>: All features and tools available on the Platform to Investors and Entrepreneurs.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800">3. Account Registration</h2>
        <p>
          To use our Platform, you must create an account. You must provide accurate and up-to-date information
          during registration. You are responsible for maintaining the confidentiality of your account credentials.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">4. Use of Services</h2>
        <p>
          Investors may browse, review, and invest in projects listed on the Platform. Entrepreneurs may post
          projects and seek investments. Both Investors and Entrepreneurs must comply with all applicable laws,
          regulations, and guidelines.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">5. Fees and Payments</h2>
        <p>
          Any fees for services provided through the Platform will be outlined separately. By using our Platform,
          you agree to pay any applicable fees.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">6. Responsibilities</h2>
        <p>
          - Investors: Investors are responsible for conducting their own due diligence on any projects before investing.
          - Entrepreneurs: Entrepreneurs are responsible for providing accurate and complete information about their projects.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">7. Limitations of Liability</h2>
        <p>
          Our liability is limited to the fullest extent permitted by law. We are not responsible for any direct, indirect,
          or consequential damages arising out of your use of the Platform.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">8. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your account if we believe you have violated these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the jurisdiction in which we operate. Any disputes will be resolved
          in the appropriate courts of that jurisdiction.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">10. Changes to Terms</h2>
        <p>
          We reserve the right to modify or update these Terms at any time. Any changes will be effective as soon as they
          are posted on the website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">11. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding these Terms, please contact us at support@yourwebsite.com.
        </p>
      </div>
    </div>
  )
}

export default TermsPage
