"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sec7 from "../../components/Sec7";
import { Product } from "../../../types/product";
import { getCartItems } from "../actions/actions";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    city: false,
    country: false,
    zipCode: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.stockLevel,
    0
  );
  const total = Math.max(subTotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      city: !formValues.city,
      country: !formValues.country,
      zipCode: !formValues.zipCode,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "Processing your order",
      text: "Please wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          localStorage.removeItem("appliedDiscount");
          Swal.fire(
            "Success!",
            "Your order has been successfully processed!",
            "success"
          );
        } else {
          Swal.fire("Error", "Please fill in all the fields before proceeding");
        }
      }
    });

    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      city: formValues.city,
      country: formValues.country,
      zipCode: formValues.zipCode,
      email: formValues.email,
      phone: formValues.phone,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: total,
      discount: discount,
      orderDate: new Date().toISOString(), // Fixed here
    };
    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount"); // Fixed key here
    } catch (error) {
      console.error("Error creating order", error);
    }
  };

  return (
    <div>
      {/* First Section with Tailwind Background */}
      <section className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/bg.jpeg')",
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
          <h1 className="text-5xl font-bold text-black">Check Out</h1>
          <p className="text-xl mt-4 text-black">
            <Link href="/">Cart</Link> &gt; Check Out
          </p>
        </div>
      </section>

      {/* 2nd Section: Billing Details and Product Information */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column: Billing Details */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Billing Details</h1>
              <form className="space-y-4">
                {/* First Name */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  {formErrors.firstName && (
                    <p className="text-red-500">First Name is required</p>
                  )}
                </div>
                {/* Last Name */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  {formErrors.lastName && (
                    <p className="text-red-500">Last Name is required</p>
                  )}
                </div>
                {/* Country/Region */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="country">
                    Country/Region
                  </label>
                  <input
                    type="text"
                    id="country"
                    placeholder="Enter your country"
                    value={formValues.country}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  {formErrors.country && (
                    <p className="text-red-500">Country Name is required</p>
                  )}
                </div>
                {/* Street Address */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="address">
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Enter your street address"
                    value={formValues.address}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  {formErrors.address && (
                    <p className="text-red-500">Address is required</p>
                  )}
                </div>
                {/* Town/City */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="city">
                    Town/City
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Enter your town or city"
                    value={formValues.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  {formErrors.city && (
                    <p className="text-red-500">City/Town is required</p>
                  )}
                </div>
                {/* ZIP Code */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="zipCode">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    placeholder="Enter your ZIP code"
                    value={formValues.zipCode}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  {formErrors.zipCode && (
                    <p className="text-red-500">Zipcode is required</p>
                  )}
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  {formErrors.phone && (
                    <p className="text-red-500">Phone no is required</p>
                  )}
                </div>
                {/* Email */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  {formErrors.email && (
                    <p className="text-red-500">Email is required</p>
                  )}
                </div>
              </form>
            </div>

            {/* Second Column: Product Information */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Order <span className="text-end">Summary</span></h1>
              <div className="space-y-4">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center gap-4 py-3 border-0"
                    >
                      <div className="w-16 h-16 rounded overflow-hidden">
                        {item.image && (
                          <Image
                            src={urlFor(item.image).url()}
                            alt="image"
                            width={50}
                            height={50}
                            className="object-cover w-full h-full"
                          />
                        )}
                      </div>
                      <div className="flex flex-col md:flex-row justify-between w-full">
                        <h3>{item.name}</h3>
                        <p>Quantity: {item.stockLevel}</p>
                        <p>${item.price * item.stockLevel}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="font-semibold">No items in cart</p>
                )}
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Discount</span>
                  <span>${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button
                className="w-full py-2 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>

      <Sec7 />
    </div>
  );
};

export default Checkout;
