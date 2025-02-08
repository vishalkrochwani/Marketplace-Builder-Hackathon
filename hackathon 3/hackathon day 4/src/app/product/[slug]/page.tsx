"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { addToCart, getCartItems} from "@/app/actions/actions";
import Swal from "sweetalert2";
import Sec7 from "@/components/Sec7";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        description,
        _type,
        image,
        price,
        discountPercentage,
    }`,
    { slug }
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const { slug } = await params;
      try {
        const productData = await getProduct(slug);
        setProduct(productData);
      } catch (err) {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart({ ...product, quantity });
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>No product found</div>;

  return (
    <div className="font-sans">
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0.5">
          <div className="flex items-center justify-center mb-8 lg:mb-0">
            <div className="overflow-hidden">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={300}
                  height={500}
                  className="w-full h-full object-cover object-top shadow-md hover:scale-[1.05] transition-all duration-300"
                />
              )}
            </div>
          </div>

          <div className="py-6 px-4 lg:px-8 max-w-full lg:max-w-2xl">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
              {product.name}
            </h2>

            <div className="flex items-center space-x-1 mt-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${index < 4 ? "fill-gray-800" : "fill-[#CED5D8]"}`}
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
              <button
                type="button"
                className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center !ml-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 mr-1" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M14.236 21.954h-3.6c-.91 0-1.65-.74-1.65-1.65v-7.201c0-.91.74-1.65 1.65-1.65h3.6a.75.75 0 0 1 .75.75v9.001a.75.75 0 0 1-.75.75zm-3.6-9.001a.15.15 0 0 0-.15.15v7.2a.15.15 0 0 0 .15.151h2.85v-7.501z" />
                  <path d="M20.52 21.954h-6.284a.75.75 0 0 1-.75-.75v-9.001c0-.257.132-.495.348-.633.017-.011 1.717-1.118 2.037-3.25.18-1.184 1.118-2.089 2.28-2.201a2.557 2.557 0 0 1 2.17.868c.489.56.71 1.305.609 2.042a9.468 9.468 0 0 1-.678 2.424h.943a2.56 2.56 0 0 1 1.918.862c.483.547.708 1.279.617 2.006l-.675 5.401a2.565 2.565 0 0 1-2.535 2.232zm-5.534-1.5h5.533a1.06 1.06 0 0 0 1.048-.922l.675-5.397a1.046 1.046 0 0 0-1.047-1.182h-2.16a.751.751 0 0 1-.648-1.13 8.147 8.147 0 0 0-1.057-3 1.059 1.059 0 0 0-.254-.852 1.057 1.057 0 0 0-.795-.365c-.577.052-.964.435-1.04.938-.326 2.163-1.71 3.507-2.369 4.036v7.874z" />
                </svg>
                87 Reviews
              </button>
            </div>

            <div className="mt-6">
              <div className="flex items-center flex-wrap gap-4">
                <p className="text-gray-800 text-2xl lg:text-4xl font-bold">
                  {product.price}$
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={handleDecrement}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-200 rounded-l-md"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    className="w-16 text-center border-0 focus:ring-0"
                    readOnly
                  />
                  <span className="mx-2">{product.stockLevel}</span>
                  <button
                    onClick={handleIncrement}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-200 rounded-r-md"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="w-full px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-md"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2.5 border border-gray-800 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded-md"
                >
                  Buy now
                </button>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Product Description
                </h3>
                <p className="text-sm text-gray-500 mt-4">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sec7 />
    </div>
  );
}
