import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sec7 from '../../components/Sec7';

const Cart = () => {
  return (
    <div>
      {/* First Section with Tailwind Background */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/image/bg.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }}
      >
        <div>
          {/* Small Image in Center */}
          <div className="mb-4">
            <Image
              src="/image/shop.webp"
              alt="Shop Icon"
              width={100}
              height={100}
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-5xl text-black">Cart</h1>
          <p className="text-xl mt-4 text-black">
            <Link href="/">
              Home
            </Link>{' '}
            &gt; Cart
          </p>
        </div>
      </section>

      {/* 2nd Section: Cart Items and Product Details */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column (5 columns layout) */}
            <div className="space-y-6 md:w-[60%]">
              <div className="flex gap-4">
                {/* Buttons: Product, Price, Quantity, Subtotal */}
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">
                  Product
                </button>
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">
                  Price
                </button>
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">
                  Quantity
                </button>
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">
                  Subtotal
                </button>
              </div>

              {/* Product Details (5 columns grid) */}
              <div className="grid grid-cols-5 gap-4 mt-6 items-center">
                {/* First Row */}
                <div className="flex justify-center">
                  <Image
                    src="/image/asgaardsofa.webp"
                    alt="Asgaard Sofa"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <div className="text-gray-700">
                  <h2 className="text-lg font-semibold">Asgaard Sofa</h2>
                </div>
                <div className="text-gray-500">
                  <p>Rs. 250,000.00</p>
                </div>
                <div>
                  <input
                    type="number"
                    value="1"
                    className="w-full p-2 border border-gray-300 rounded-md text-center"
                  />
                </div>
                <div>
                  <p className="font-semibold">Rs. 250,000.00</p>
                </div>
              </div>
            </div>

            {/* Second Column for Cart Totals */}
            <div className="space-y-6">
              <h1 className="text-2xl font-bold mb-4 text-center">Cart Totals</h1>

              {/* Subtotal */}
              <div className="flex justify-between py-2 border-b">
                <span className="text-lg font-medium">Subtotal</span>
                <span className="text-lg font-medium">Rs. 250,000.00</span>
              </div>

              {/* Total with Golden Color */}
              <div className="flex justify-between py-2 border-b">
                <span className="text-xl font-semibold">Total</span>
                <span className="text-xl font-semibold text-yellow-500">
                  Rs. 250,000.00
                </span>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout">
  <button className="w-full py-2 bg-black text-white rounded-md text-lg hover:bg-gray-800 transition mt-4">
    Checkout
  </button>
</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Section */}
      <Sec7 />
    </div>
  );
};

export default Cart;
