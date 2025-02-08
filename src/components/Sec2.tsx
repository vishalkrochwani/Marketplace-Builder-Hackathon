"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../../types/product";
import { client } from "@/sanity/lib/client";
import { two } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const TopPick = () => {
  const [products, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProduct: Product[] = await client.fetch(two);
        setProduct(fetchedProduct);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Show loading or error state
  if (loading) {
    return (
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 text-center text-xl text-gray-700">
          Loading products...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 text-center text-xl text-red-600">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-100 text-black py-10">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-evenly">
        {products.map((product) => (
          <div
            key={product._id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 overflow-hidden"
          >
            <Link href={`/product/${product.slug.current}`}>
              <div>
                {product.image ? (
                  <Image
                    src={urlFor(product.image).url() || "/default-image.png"} // Fallback image
                    alt={product.name}
                    width={700}
                    height={700}
                    className="w-full h-96 object-contain mb-3"
                  />
                ) : (
                  <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-gray-600">
                    No Image Available
                  </div>
                )}
              </div>
            </Link>
            <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
            <Link
              href={`/product/${product.slug.current}`}
              className="text-black font-medium underline hover:no-underline hover:text-gray-800 transition"
            >
              View More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPick;
