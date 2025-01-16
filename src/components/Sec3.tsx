import React from 'react';
import Image from 'next/image';
import Link from 'next/link';  // Import Link from next/link

const ProductPage = () => {
  return (
    <div>
      {/* Third Section: Product Grid */}
      <section className="bg-white text-black py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl mb-6">Top Picks For You</h2>
          <p className="text-gray-500 text-lg mb-8">
            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Product 1 */}
            <div className="text-center">
              <Image
                src="/image/product1.webp"
                alt="Product 1"
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Trenton modular sofa_3</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>

            {/* Product 2 */}
            <div className="text-center">
              <Image
                src="/image/product2.webp"
                alt="Product 2"
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Granite dining table with dining chair</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>

            {/* Product 3 */}
            <div className="text-center">
              <Image
                src="/image/product3.webp"
                alt="Product 3"
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Outdoor bar table and stool</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>

            {/* Product 4 */}
            <div className="text-center">
              <Image
                src="/image/product4.webp"
                alt="Product 4"
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Plain console with teak mirror</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>

            {/* "View More" Link using Next.js Link */}
            <div className="col-span-2 md:col-span-4 text-center mt-6">
              <Link href="/shop" className="text-center underline text-lg">
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
