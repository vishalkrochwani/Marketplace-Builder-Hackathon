import Link from 'next/link';

const PaymentOptions = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">Payment Options</h1>
        <p className="text-xl text-gray-600 mb-12">
          Choose a payment method that is most convenient for you.
        </p>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Credit/Debit Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="/image/credit-card.jpeg" // Add your icon path
                alt="Credit Card payment"
                className="h-16"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Credit/Debit Card</h2>
            <p className="text-gray-600 mb-4">
              Pay securely using your Visa, MasterCard, or American Express cards.
            </p>
            <Link href="/checkout">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                Pay Now
              </button>
            </Link>
          </div>

          {/* PayPal */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="/image/paypal.png" // Add your PayPal icon path
                alt="PayPal payment"
                className="h-16"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">PayPal</h2>
            <p className="text-gray-600 mb-4">
              Pay securely through PayPal, the world's most trusted online payment platform.
            </p>
            <Link href="/checkout">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                Pay with PayPal
              </button>
            </Link>
          </div>

          {/* Bank Transfer */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="/image/bank-transfer.png" // Add your bank transfer icon path
                alt="Bank Transfer payment"
                className="h-16"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Bank Transfer</h2>
            <p className="text-gray-600 mb-4">
              Transfer directly from your bank account. Details will be provided at checkout.
            </p>
            <Link href="/checkout">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                Pay by Bank Transfer
              </button>
            </Link>
          </div>

        </div>

        {/* Additional Payment Methods */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Payment Methods</h2>
          <div className="flex justify-center gap-8">
            {/* Apple Pay */}
            <div className="flex items-center">
              <img
                src="/image/apple-pay.png" // Add your Apple Pay icon path
                alt="Apple Pay"
                className="h-12"
              />
            </div>
            {/* Google Pay */}
            <div className="flex items-center">
              <img
                src="/image/google-pay.png" // Add your Google Pay icon path
                alt="Google Pay"
                className="h-12"
              />
            </div>
          </div>
        </div>

        {/* Terms and Privacy Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            By selecting a payment method, you agree to our{' '}
            <Link href="/terms" className="text-blue-600">Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-blue-600">Privacy Policy
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
