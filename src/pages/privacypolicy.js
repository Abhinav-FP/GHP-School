import Layout from "@/layout/Layout";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Layout>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="p-8 shadow-lg rounded-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Privacy Policy
        </h1>

        {/* Section 1: Information Collection */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            1. Information Collection
          </h2>
          <p className="text-gray-600">
            BVBS values your privacy. We collect donor and applicant information
            such as name, contact details, payment information, and academic
            records solely for processing donations, managing admissions, and
            issuing receipts.
          </p>
        </section>

        {/* Section 2: Data Usage */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            2. Data Usage
          </h2>
          <p className="text-gray-600 mb-2">
            <strong>Donations:</strong> Collected information is used to record
            donations, generate receipts, and maintain donor communications.
          </p>
          <p className="text-gray-600">
            <strong>Admissions:</strong> Information provided during the
            admission process is used to evaluate applications, manage student
            records, and communicate admission statuses.
          </p>
        </section>

        {/* Section 3: Third-Party Sharing */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            3. Third-Party Sharing
          </h2>
          <p className="text-gray-600">
            To process payments, your information may be securely shared with
            our payment gateway provider, Razorpay. Additionally,
            admission-related information may be shared with educational
            partners and administrative services as necessary. BVBS ensures that
            all third parties uphold strict data protection standards.
          </p>
        </section>

        {/* Section 4: Data Security */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            4. Data Security
          </h2>
          <p className="text-gray-600">
            BVBS is committed to safeguarding your data. We use encrypted
            systems for all data storage and transmission to protect your
            information from unauthorized access. Regular security audits are
            conducted to ensure data integrity.
          </p>
        </section>

        {/* Section 5: User Rights */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            5. User Rights
          </h2>
          <p className="text-gray-600">
            Donors and applicants can request access to their information,
            corrections, or deletion of data from our records. Please contact us
            directly with any such requests, and we will respond promptly.
          </p>
        </section>

        {/* Section 6: Cookies and Tracking */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            6. Cookies and Tracking
          </h2>
          <p className="text-gray-600">
            Our website may use cookies and similar tracking technologies to
            enhance user experience, analyze website traffic, and improve our
            services. You can manage your cookie preferences through your
            browser settings.
          </p>
        </section>

        {/* Section 7: Policy Updates */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            7. Policy Updates
          </h2>
          <p className="text-gray-600">
            Our privacy policy may change periodically. Any updates will be
            posted on this page, and we encourage users to review the policy
            regularly.
          </p>
        </section>

        {/* Section 8: Contact Information */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            8. Contact Information
          </h2>
          <p className="text-gray-600">
            For any questions or concerns regarding this privacy policy, please
            contact us at [insert contact email].
          </p>
        </section>
      </div>
    </div>
    </Layout>
  );
};

export default PrivacyPolicy;
