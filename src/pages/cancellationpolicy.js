import Layout from '@/layout/Layout';
import React from 'react';

const CancellationPolicy = () => {
  return (
    <Layout>
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="p-8 shadow-lg rounded-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Cancellation Policy</h1>

        {/* Section 1: Donation Cancellations */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">1. Donation Cancellations</h2>
          <p className="text-gray-600">
            All donations made to BVBS are final and non-refundable. However, if you believe there has been an error in the transaction or if a duplicate payment has been made, please reach out within 7 days for review.
          </p>
        </section>

        {/* Section 2: Admission Form Fee Cancellations and Refunds */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">2. Admission Form Fee Cancellations and Refunds</h2>
          <p className="text-gray-600 mb-2">
            <strong>Cancellation by Applicant:</strong> If you wish to cancel your admission form submission after payment, please notify BVBS within 7 days of payment. Refunds will be processed based on the following schedule:
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Within 7 Days:</strong> 100% refund minus a processing fee of [specify amount or percentage].
          </p>
          <p className="text-gray-600 mb-2">
            <strong>After 7 Days:</strong> No refunds will be issued.
          </p>
          <p className="text-gray-600">
            <strong>Cancellation by BVBS:</strong> In rare cases where BVBS must cancel the admission form processing (e.g., administrative errors), a full refund will be provided to the affected applicants.
          </p>
        </section>

        {/* Section 3: Admission Status */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">3. Admission Status</h2>
          <p className="text-gray-600">
            Submitting and paying for an admission form does not guarantee admission to BVBS. Admission is contingent upon a successful interview and entrance test. If your application is not successful, your admission form fee will not be refunded.
          </p>
        </section>

        {/* Section 4: Refund Process */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">4. Refund Process</h2>
          <p className="text-gray-600 mb-2">
            <strong>Donations:</strong> To request a refund due to an error or duplicate transaction, please email us at bvbpschool74@gmail.com with your payment details. Once verified, we will initiate the refund process.
          </p>
          <p className="text-gray-600">
            <strong>Admission Form Fees:</strong> To request a refund for admission form fees due to an error or duplicate transaction, please email us at bvbpschool74@gmail.com with your application and payment details. Refunds will be processed according to the schedule outlined above.
          </p>
        </section>

        {/* Section 5: Processing Time */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">5. Processing Time</h2>
          <p className="text-gray-600">
            Approved refunds will be processed within 10 business days. Refunds will be credited back to the original payment method used during the transaction.
          </p>
        </section>

        {/* Section 6: Refund Conditions */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">6. Refund Conditions</h2>
          <p className="text-gray-600 mb-2">
            <strong>Donations:</strong> Refunds are only applicable in cases of transaction errors or duplicate payments.
          </p>
          <p className="text-gray-600">
            <strong>Admission Form Fees:</strong> Refunds are only applicable in cases of transaction errors or duplicate payments.
          </p>
        </section>

        {/* Section 7: Changes to Policy */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">7. Changes to Policy</h2>
          <p className="text-gray-600">
            BVBS reserves the right to modify the cancellation and refund policy at any time. Changes will be updated on this page, and donors and applicants are advised to review the policy periodically.
          </p>
        </section>

        {/* Section 8: Contact Information */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">8. Contact Information</h2>
          <p className="text-gray-600">
            For any questions or to request a refund, please contact us at bvbpschool74@gmail.com.
          </p>
        </section>
      </div>
    </div>
    </Layout>
  );
};

export default CancellationPolicy;
