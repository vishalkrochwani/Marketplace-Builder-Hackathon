import React from 'react';

const ConceptPostsSection = () => {
  return (
    <section className="bg-gray-100 text-black py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First Column */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-black font-bold text-3xl mb-2">Free Delivery</h2>
            <p className="text-lg text-gray-700">
              For all orders over $50, enjoy free delivery. No hidden charges, just easy shopping.
            </p>
          </div>

          {/* Second Column */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-black font-bold text-3xl mb-2">90 Days Return</h2>
            <p className="text-lg text-gray-700">
              If the product has an issue, we offer a 90-day return policy. Shop with confidence!
            </p>
          </div>

          {/* Third Column */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-black font-bold text-3xl mb-2">Secure Payments</h2>
            <p className="text-lg text-gray-700">
              100% secure payments, ensuring peace of mind with every transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptPostsSection;
