'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';  // Import Link from next/link
import { Product } from '../../types/product';
import { client } from '@/sanity/lib/client';
import { four } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

const ProductPage = () => {
  const [products, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProduct: Product[] = await client.fetch(four);
        setProduct(fetchedProduct);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Helper function to format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  // Loading state
  if (loading) {
    return (
      <section className="bg-white text-black py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl mb-6">Loading Products...</h2>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="bg-white text-black py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl mb-6">Oops!</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

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
            {products.map((product) => (
              <div key={product._id} className='text-center'>
                <Link href={`/product/${product.slug.current}`}>
                  <div>
                    {product.image ? (
                      <Image
                        src={urlFor(product.image).url() || '/default-image.png'} // Fallback image
                        alt={product.name || 'Product image'}
                        width={300}
                        height={300}
                        className='mx-auto object-contain'
                      />
                    ) : (
                      <div className="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-600">
                        No Image Available
                      </div>
                    )}
                  </div>
                </Link>
                <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
                <p className="text-lg font-bold">{formatPrice(product.price)}</p>
                <p className="text-gray-800">{product.description}</p>
              </div>
            ))}

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
