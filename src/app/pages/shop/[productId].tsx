// pages/shop/[productId].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;  // Get productId from URL
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (productId) {
      // Fetch the product details from an API or static data
      fetch(`/api/products/${productId}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <section className="container mx-auto py-10">
      <div className="flex">
        <div className="w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="w-1/2 pl-10">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-700 my-4">{product.description}</p>
          <p className="text-lg font-bold text-black mb-4">Price: ${product.price}</p>

          <button className="bg-black text-white py-2 px-6 text-lg font-semibold rounded-md hover:bg-gray-700 transition">
            Add to Cart
          </button>

          <a
            href="/checkout"
            className="ml-4 bg-blue-500 text-white py-2 px-6 text-lg font-semibold rounded-md hover:bg-blue-600 transition"
          >
            Checkout
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
