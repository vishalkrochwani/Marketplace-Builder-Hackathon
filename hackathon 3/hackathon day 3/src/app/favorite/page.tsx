'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: 'Rocket Single Seater',
      price: 50000,
      description: 'Experience comfort and style with the Rocket Single Seater. Perfect for any modern living room.',
      image: '/image/rocket_chair.png',
    },
    // Add more products to the wishlist as needed
  ]);

  const removeFromWishlist = (productId: number) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  return (
    <div>
      {/* Wishlist Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">My Wishlist</h2>
          {wishlist.length === 0 ? (
            <p>Your wishlist is empty. Add some products!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {wishlist.map((product) => (
                <div key={product.id} className="border p-6 rounded-md shadow-md">
                  <div className="flex justify-center items-center mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                  <p className="text-lg mb-4">{product.description}</p>
                  <p className="text-xl font-semibold mb-6">Price: Rs. {product.price.toLocaleString()}</p>
                  <div className="flex gap-4">
                    {/* Add to Cart Button */}
                    <Link href="/cart">
                      <button className="px-8 py-2 bg-black text-white text-lg rounded-md">
                        Add to Cart
                      </button>
                    </Link>

                    {/* Remove from Wishlist Button */}
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="px-8 py-2 bg-red-600 text-white text-lg rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default WishlistPage;
