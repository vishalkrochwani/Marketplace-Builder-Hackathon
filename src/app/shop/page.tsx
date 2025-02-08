'use client';

import Link from 'next/link';
import Image from 'next/image';
import Sec7 from '../../components/Sec7';
import { FaFilter, FaList } from 'react-icons/fa'; // Import the icons
import { sixteen } from '@/sanity/lib/queries';
import { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { addToCart } from '../actions/actions';
import Swal from 'sweetalert2';

const Shop = () => {
  const [products, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProduct: Product[] = await client.fetch(sixteen);
        setProduct(fetchedProduct);
        setLoading(false);
      } catch (err) {
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* First Section with Tailwind Background */}
      <section className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/bg.jpeg')", // Path to shop.png
            opacity: 0.6,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div className="mb-4">
            <Image
              src="/image/shop.webp"
              alt="Shop Icon"
              width={100}
              height={100}
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-5xl font-bold text-black">Shop</h1>
          <p className="text-xl mt-4 text-black">
            <Link href="/">Home</Link> &gt; Shop
          </p>
        </div>
      </section>

      {/* New Section: Filters, Pagination, and Sort */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaFilter className="text-xl" />
              <span className="text-lg">Filter</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaList className="text-xl" />
              <span className="text-lg">Category</span>
            </div>
            <div className="text-lg">Showing 1-16 out of 32 items</div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg">Show</span>
              <div className="bg-white text-center w-12 py-1 text-sm text-gray-500">16</div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">Sort By</span>
              <select className="bg-white border rounded-md p-2 text-gray-600">
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section: Product Grid */}
      <section className="bg-white text-black py-10 ">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product._id} className="text-center border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                <Link href={`/product/${product.slug.current}`}>
                  {product.image && (
                    <div className="w-full h-64 flex items-center justify-center overflow-hidden">
                      <Image
                        src={urlFor(product.image).url()}
                        alt="image"
                        width={256}
                        height={256}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
                  <p className="text-lg font-bold">{product.price}$</p>
                  <button
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section className="py-10 text-center">
        <div className="flex justify-center gap-4 ">
          <Link href={`/shop?page=1`}>
            <div className="w-10 bg-amber-100 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              1
            </div>
          </Link>
          <Link href={`/shop?page=2`}>
            <div className="w-10 bg-amber-100 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              2
            </div>
          </Link>
          <Link href={`/shop?page=3`}>
            <div className="w-10 bg-amber-100 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              3
            </div>
          </Link>
          <Link href={`/shop?page=next`}>
            <div className="w-10 bg-amber-100 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              Next
            </div>
          </Link>
        </div>
      </section>

      <Sec7 />
    </div>
  );
};

export default Shop;
