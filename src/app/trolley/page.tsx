'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sec7 from "../../components/Sec7";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import { Product } from "../../../types/product";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  // Function to remove item from the cart
  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this item from cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Deleted!", "Your item has been removed", "success");
      }
    });
  };

  // Function to handle quantity changes
  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  // Handle increment and decrement of quantity
  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stockLevel + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) {
      handleQuantityChange(id, product.stockLevel - 1);
    }
  };

  // Calculate the total price of the cart
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.stockLevel,
      0
    );
  };

  // Proceed to checkout
  const handleProceed = async () => {
    Swal.fire({
      title: "Proceed to Checkout",
      text: "Do you want to proceed to checkout?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Proceeded!", "You have successfully proceeded to checkout", "success");
        router.push("/checkout");
        setCartItems([]);  // Clear cart items after proceeding
      }
    });
  };

  // Empty cart message handling
  const renderEmptyCart = () => {
    return (
      <div className="text-center text-xl text-gray-600">
        <p>Your cart is empty. Start shopping now!</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Go to Shop
        </Link>
      </div>
    );
  };

  return (
    <div>
      {/* First Section with Tailwind Background */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/image/bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      >
        <div>
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
            <Link href="/">Home</Link> &gt; Cart
          </p>
        </div>
      </section>

      {/* 2nd Section: Cart Items and Product Details */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          {cartItems.length === 0 ? (
            renderEmptyCart()  // Render empty cart message
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6 md:w-[60%]">
                <div className="flex gap-8 flex-wrap">
                  {/* Cart Item Headers */}
                  <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">
                    Product
                  </button>
                  <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">
                    Quantity
                  </button>
                  <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">
                    Price
                  </button>
                  <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">
                    Subtotal
                  </button>
                </div>

                {/* Cart Items List */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6 items-center">
                  {cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="col-span-1 md:col-span-5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
                    >
                      {item.image && (
                        <Image
                          src={urlFor(item.image).url() || ""}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="w-16 h-16 object-cover rounded-lg mr-2"
                        />
                      )}
                      <div className="flex-1 text-center md:text-left">{item.name}</div>
                      <div className="flex-1 flex items-center justify-center md:justify-start">
                        <button
                          onClick={() => handleDecrement(item._id)}
                          className="px-2"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.stockLevel}</span>
                        <button
                          onClick={() => handleIncrement(item._id)}
                          className="px-2"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        Rs. {item.price * item.stockLevel}
                      </div>
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="text-red-500"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Totals */}
              <div className="space-y-6">
                <h1 className="text-2xl font-bold mb-4 text-center">Cart Totals</h1>

                <div className="flex justify-between py-2 border-b">
                  <span className="text-lg font-medium">Subtotal</span>
                  <span className="text-lg font-medium">Rs. {calculateTotal()}</span>
                </div>

                <div className="flex justify-between py-2 border-b">
                  <span className="text-xl font-semibold">Total</span>
                  <span className="text-xl font-semibold text-yellow-500">
                    Rs. {calculateTotal()}
                  </span>
                </div>

                <button
                  onClick={handleProceed}
                  className="w-full py-2 bg-black text-white rounded-md text-lg hover:bg-gray-800 transition mt-4"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Additional Section */}
      <Sec7 />
    </div>
  );
};

export default Cart;
