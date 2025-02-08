import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../../types/product";
import { client } from "@/sanity/lib/client";
import { one } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export const Sec1 = () => {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProduct: Product[] = await client.fetch(one);
      setProduct(fetchedProduct);
    }
    fetchProducts();
  }, []);

  return (
    <section className="bg-amber-100 flex flex-col md:flex-row items-center justify-center h-screen">
      <div className="flex flex-col items-start justify-center w-full md:w-1/2 p-4 md:pl-10">
        <h1 className="text-4xl md:text-6xl text-black mb-4 md:px-10">
          {/* Map through products to display names */}
          {products.map((product) => (
            <div key={product._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              {product.name}
            </div>
          ))}
        </h1>
        <a
          href="/shop"
          className="text-black underline underline-offset-8 text-sm hover:text-gray-700 transition md:px-10"
        >
          Shop Now
        </a>
      </div>

      <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4">
        {/* Map through products to display images */}
        {products.map((product) => (
          <div key={product._id}>
            <Link href={`/product/${product.slug.current}`}>
            {product.image ? (
              <Image
                src={urlFor(product.image).url() || "/default-image.png"} // Fallback image if none exists
                alt={product.name}
                width={600}
                height={600}
                className="w-full object-contain"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span>No Image Available</span> {/* Fallback text */}
              </div>
            )}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
