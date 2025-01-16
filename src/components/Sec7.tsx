import React from 'react';

const ConceptPostsSection = () => {
  return (
    <section className="bg-gray-100 text-black py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First Column */}
          <div className="text-center">
            <h2 className="text-black font-bold text-3xl mb-2">Free Delivery</h2>
            <p className="text-lg text-gray-700 align-left">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>

          {/* Second Column */}
          <div className="text-center">
            <h2 className="text-black font-bold text-3xl mb-2">90 Days Return</h2>
            <p className="text-lg text-gray-700 align-left">
              If the product has an issue, consectetur adipiscing elit.
            </p>
          </div>

          {/* Third Column */}
          <div className="text-center">
            <h2 className="text-black font-bold text-3xl mb-2">Secure Payments</h2>
            <p className="text-lg text-gray-700 align-left">
              100% secure payments, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptPostsSection;
