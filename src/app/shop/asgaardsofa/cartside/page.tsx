'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IoCloseCircleOutline } from 'react-icons/io5'; // For cross icon
import { useState } from 'react'; // For handling the state of the cart visibility

const CartPage = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <div className="relative">
      {/* Backdrop when cart is open */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm z-40"
          onClick={toggleCart}
        ></div>
      )}

      {/* Side Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cart Header */}
        <header className="bg-black text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-lg font-bold">Cart</p>
            <IoCloseCircleOutline
              onClick={toggleCart}
              className="text-3xl cursor-pointer"
            />
          </div>
        </header>

        {/* Cart Content */}
        <section className="py-10 px-4">
          <div className="flex items-center justify-between">
            <Image
              src="/image/asgaardsofa.jpeg"
              alt="Asgaard Sofa"
              width={80}
              height={80}
              className="object-cover rounded"
            />
            <div className="flex flex-col ml-4">
              <p className="text-lg font-bold">Asgaard Sofa</p>
              <p className="text-sm text-gray-500">1 x Asgaard Sofa</p>
              <p className="text-lg font-bold mt-2">Rs. 250,000.00</p>
            </div>
          </div>
        </section>

        {/* Subtotal Section */}
        <section className="py-10 px-4 border-t">
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">Subtotal</p>
            <p className="text-lg font-bold">Rs. 250,000.00</p>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="py-10 px-4 border-t">
          <div className="flex flex-col gap-4">
            <Link
              href="/shop/asgaardsofa/cart"
              className="py-3 border-2 border-black rounded text-center text-black hover:bg-gray-200"
            >
              View Cart
            </Link>
            <Link
              href="/shop/asgaardsofa/cart/checkout"
              className="py-3 border-2 border-black rounded text-center text-black hover:bg-gray-200"
            >
              Checkout
            </Link>
          </div>
        </section>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          cartOpen ? 'filter blur-sm' : 'filter-none'
        }`}
      >
        {/* Main Page Content */}
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center">
              <button
                className="py-2 px-4 bg-black text-white rounded"
                onClick={toggleCart}
              >
                Open Cart
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
