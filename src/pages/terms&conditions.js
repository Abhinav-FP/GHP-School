import Layout from "@/layout/Layout";
import React from "react";

const TermsAndConditions = () => {
  return (
    <Layout>
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="p-8 shadow-lg rounded-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Terms and Conditions
        </h1>

        {/* Section 1: Introduction */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            1. Introduction
          </h2>
          <p className="text-gray-600">
            Welcome to the BVBS School website. BVBS is a non-governmental
            organization dedicated to promoting quality education and the
            holistic development of all children. By accessing and using our
            website, you agree to comply with and be bound by the following
            terms and conditions.
          </p>
        </section>

        {/* Section 2: Donations and Payments */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            2. Donations and Payments
          </h2>
          <p className="text-gray-600 mb-2">
            <strong>Donations:</strong> {`All payments made through this website
            under the "Donations" section are considered voluntary contributions
            to support BVBS’s educational programs.`}
          </p>
          <p className="text-gray-600">
            <strong>Admission Form Payments:</strong> Payments made for
            admission forms are fees associated with the processing of your
            child’s application to BVBS. These payments cover the costs of
            filling out and downloading the admission form. Please note that
            submitting an admission form does not guarantee admission to BVBS.
            Admission is subject to a successful interview and entrance test.
          </p>
        </section>

        {/* Section 3: Usage of Funds */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            3. Usage of Funds
          </h2>
          <p className="text-gray-600 mb-2">
            <strong>Donations:</strong> {`Funds received as donations are
            allocated towards BVBS's primary activities, including educational
            resources, student welfare programs, and facility maintenance.
            Detailed information on fund allocation can be made available upon
            request.`}
          </p>
          <p className="text-gray-600">
            <strong>Admission Form Fees:</strong> Admission form fees are used
            to cover administrative costs related to processing applications,
            including form preparation, data management, and other related
            expenses.
          </p>
        </section>

        {/* Section 4: User Conduct */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            4. User Conduct
          </h2>
          <p className="text-gray-600">
            Visitors are expected to use this website in a lawful and respectful
            manner. Any misuse, such as uploading inappropriate content,
            violating intellectual property rights, or attempting unauthorized
            access, will result in the suspension of access.
          </p>
        </section>

        {/* Section 5: Intellectual Property */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            5. Intellectual Property
          </h2>
          <p className="text-gray-600">
            All content, including text, images, logos, and other media found on
            this site, are the intellectual property of BVBS unless otherwise
            stated. Unauthorized use or distribution of this content is
            prohibited.
          </p>
        </section>

        {/* Section 6: Payment Processing */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            6. Payment Processing
          </h2>
          <p className="text-gray-600">
            All transactions are processed securely through Razorpay, ensuring
            the safety and confidentiality of your payment information. BVBS
            does not store your payment details on our servers.
          </p>
        </section>

        {/* Section 7: Disclaimer */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            7. Disclaimer
          </h2>
          <p className="text-gray-600">
            The information provided on this website is for educational and
            informational purposes. BVBS is not liable for any inaccuracies, and
            users should confirm any critical details directly with us.
          </p>
        </section>

        {/* Section 8: Changes to Terms */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            8. Changes to Terms
          </h2>
          <p className="text-gray-600">
            BVBS reserves the right to revise these terms at any time. Updates
            will be posted on the website, and continued use of the site will
            signify acceptance of any modified terms.
          </p>
        </section>
      </div>
    </div>
    </Layout>
  );
};

export default TermsAndConditions;
