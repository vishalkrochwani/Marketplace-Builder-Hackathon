import React from 'react';
import Image from 'next/image';

const TopPick = () => {
  return (
    <section className="bg-gray-100 text-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between space-x-4">
          {/* First Item */}
          <div className="top-pick-item flex-1 p-4 flex flex-col items-center">
            <Image
              src="/image/side_table.png"
              alt="Side Table"
              width={1000}  // Doubled the width
              height={1000} // Doubled the height
              className="object-contain w-full h-96"  // Adjusted height for better fit
            />
            <h3 className="top-pick-title text-3xl font-semibold mb-2">Side Table</h3>
            <a href="/shop" className="top-pick-link underline text-sm mb-4">
              View More
            </a>
          </div>

          {/* Second Item */}
          <div className="top-pick-item flex-1 p-4 flex flex-col items-center">
            <Image
              src="/image/side_table_2.png"
              alt="Another Side Table"
              width={1000}  // Doubled the width
              height={1000} // Doubled the height
              className="object-contain w-full h-96"  // Adjusted height for better fit
            />
            <h3 className="top-pick-title text-3xl font-semibold mb-2">Side Table</h3>
            <a href="/shop" className="top-pick-link underline text-sm mb-4">
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPick;
