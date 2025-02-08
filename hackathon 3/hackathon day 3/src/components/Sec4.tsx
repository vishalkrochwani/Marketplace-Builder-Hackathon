import React from 'react';
import Image from 'next/image';

const FourthSection = () => {
  return (
    <section className="bg-amber-50 py-10">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Image Section */}
        <div className="w-full md:w-1/2 pr-4 mb-6 md:mb-0">
          <Image
            src="/image/c2r4.png"
            alt="Asgaard Sofa"
            width={500}
            height={500}
            className="object-contain mx-auto max-w-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 pl-4 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-center">New Arrivals</h3>
          <h2 className="text-6xl md:text-5xl font-bold text-center text-black mb-6">
            Asgaard Sofa
          </h2>
          <h3 className="text-center">
            <a
              href="/shop/asgaardsofa"
              className="inline-block border-2 text-center border-black text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
            >
              Order Now
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
