import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import SectionTitle from '../../../pages/shared/sectionTittle/SectionTittle';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Heading */}
        <SectionTitle
          heading="Secure Payment"
          subHeading="Enter your personal & card details to proceed"
        />

        {/* Payment Card */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment Information</h2>

          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
