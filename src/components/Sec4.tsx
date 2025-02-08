import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../../types/product";
import { client } from "@/sanity/lib/client";
import { one1 } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const FourthSection = () => {
  const [products, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProduct: Product[] = await client.fetch(one1);
        setProduct(fetchedProduct);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="bg-amber-50 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl mb-6">Loading New Arrivals...</h2>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="bg-amber-50 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl mb-6">Oops!</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-amber-50 py-10">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Image Section */}
        {products[0]?.image && (
          <div className="w-full md:w-1/2 pr-4 mb-6 md:mb-0">
            <Image
              src={urlFor(products[0].image).url() || "/default-image.png"}
              alt={products[0].name || "New Arrival"}
              width={700}
              height={700}
              className="w-full h-96 object-contain"
            />
          </div>
        )}

        {/* Text Section */}
        <div className="w-full md:w-1/2 pl-4 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-center">New Arrivals</h3>
          {products.map((product) => (
            <div key={product._id}>
              <h2 className="text-6xl md:text-5xl font-bold text-center text-black mb-6">
                {product.name}
              </h2>
              <div className="text-center">
                <Link
                  href={`/product/${product.slug.current}`}
                  className="inline-block border-2 text-center border-black text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
