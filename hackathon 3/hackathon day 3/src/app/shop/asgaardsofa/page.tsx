"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; // For social media icons
import { IoCloseCircleOutline } from 'react-icons/io5'; // For cross icon

type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

const AsgaardSofaPage = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState <CartItem[]>([]);

  const handleAddToCart = () => {
    // Add the selected item to the cart
    const newItem : CartItem = { id: 'SS001', name: 'Asgaard Sofa', quantity: 1, price: 250000 };
    setCartItems([...cartItems, newItem]);
    setDrawerOpen(true); // Open the drawer after adding to cart
  };

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]); // Reset the cart items
  };

  return (
    <div className="container mx-auto px-4">
      {/* Breadcrumb Bar */}
      <div className="text-gray-500 text-sm my-4">
        <Link href="/" className="hover:text-black">Home</Link> &gt; 
        <Link href="/shop" className="hover:text-black">Shop</Link> &gt; 
        <span className="font-semibold">Asgaard Sofa</span>
      </div>

      {/* Main Section */}
      <section className="grid grid-cols-3 gap-8">
        {/* Image Thumbnails */}
        <div className="flex flex-col gap-4">
          {['/image/s2p1c1r1.webp', '/image/s2p1c1r2.webp', '/image/s2p1c1r3.webp', '/image/s2p1c1r4.png'].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Product ${index + 1}`}
              width={150}
              height={150}
              className="object-contain mx-auto"
            />
          ))}
        </div>

        {/* Large Image */}
        <div>
          <Image
            src="/image/c2r4.png"
            alt="Asgaard Sofa Large Image"
            width={2000}
            height={2000}
            className="object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Asgaard Sofa</h1>
          <p className="text-xl text-gray-500">Rs. 250,000.00</p>

          <div className="flex items-center">
            {[...Array(4)].map((_, index) => (
              <span key={index} className="text-yellow-500">&#9733;</span>
            ))}
            <span className="text-gray-300">&#9733;</span>
            <span className="ml-2 text-sm text-gray-500">5 Customer Review</span>
          </div>

          <p className="text-sm text-gray-600">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with well-balanced audio boasting clear midrange and extended highs.
          </p>

          <div className="flex items-center gap-2">
            <span className="font-bold">Size:</span>
            {['XS', 'L', 'XL'].map((size) => (
              <button key={size} className="px-4 py-2 border rounded">{size}</button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold">Color:</span>
            {['bg-blue-500', 'bg-black', 'bg-beige-500'].map((color, index) => (
              <button key={index} className={`w-8 h-8 rounded-full border ${color}`}></button>
            ))}
          </div>

          <div className="flex gap-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 border rounded text-center"
            />
            <button onClick={handleAddToCart} className="bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <ul>
              <li className="text-sm text-gray-600">SKU: SS001</li>
              <li className="text-sm text-gray-600">Category: Sofa</li>
              <li className="text-sm text-gray-600">Tags: Sofa, Chair, Home, Shop</li>
              <li className="text-sm text-gray-600 flex gap-3">
                Share: 
                {['facebook', 'linkedin', 'twitter'].map((platform) => (
                  <Link key={platform} href={`www.${platform}.com`} className="social-btn">
                    {platform === 'facebook' && <FaFacebookF />}
                    {platform === 'linkedin' && <FaLinkedinIn />}
                    {platform === 'twitter' && <FaTwitter />}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </section>

   {/* Cart Drawer */}
{isDrawerOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50">
    <div className="bg-white w-1/4 h-screen overflow-y-auto p-6 rounded-l-lg">
      {/* Cart Header */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <ul className="flex gap-8">
              <li>
                <h2 className="text-2xl font-bold flex-auto">Shopping Cart</h2>
              </li>
              <li className='size-1'>
                <IoCloseCircleOutline
                  onClick={() => setDrawerOpen(false)}
                  className="text-6xl text-gray-500 mt-4 cursor-pointer"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-300"></div>

      {/* Cart Product Details */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          {cartItems.map((item) => (
            <div key={item.id} className="space-y-6 mb-6">
              <div className="flex gap-4">
                {/* Product Image */}
                <img src="/image/c2r4.png" alt={item.name} className="w-16 h-16 object-cover" />

                {/* Product Info */}
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p>Price: Rs. {item.price}</p>
                </div>

                {/* Quantity Adjustments */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Subtotal */}
          <div className="text-golden-500 font-bold text-lg mt-4">
            Subtotal: Rs. {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </div>

          {/* Clear Cart Button */}
          <button
            onClick={clearCart}
            className="mt-4 w-full py-2 bg-red-500 text-white text-lg text-center rounded-md"
          >
            Clear Cart
          </button>

          {/* Cart Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <Link href="/cart" className="w-full py-2 bg-white text-black text-lg text-center rounded-md">
              View Cart
            </Link>

            <Link href="/checkout" className="w-full py-2 bg-white text-black text-lg text-center rounded-md">
              Checkout
            </Link>
          </div>
        </div>
      </section>
    </div>
  </div>
)}
{/* Additional Sections */}
<section className="bg-white py-10">
 <div className="grid grid-cols-3 gap-4 mb-8">
   {['Description', 'Additional Information', 'Reviews [5]'].map((title, index) => (
     <div key={index} className="p-4 border rounded text-center">
       <h3 className="text-xl font-bold">{title}</h3>
     </div>
   ))}
 </div>

 <div className="grid grid-cols-2 gap-4 mb-8">
   {['/image/s2p1s3c3.webp', '/image/s2p1s3c2.webp'].map((src, index) => (
     <Image
       key={index}
       src={src}
       alt={`Additional Image ${index + 1}`}
       width={600}
       height={400}
       className="object-cover rounded"
     />
   ))}
 </div>

 <div className="grid grid-cols-2 gap-4">
   {[ 
     "Embodying the row, wayward spirit of rock n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall unplugs the chords, and takes the show on the road.",
     "Weighing under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering, setting the bar as one of the loudest speakers in its class."
   ].map((text, index) => (
     <p key={index} className="text-gray-600">{text}</p>
   ))}
 </div>
</section>
<section className="bg-white text-black py-10">
<div className="text-center">
<h2 className="text-5xl font-bold mb-6">Related Products</h2>
<div className="grid grid-cols-4 gap-4">
{['Trenton modular sofa_3', 'Granite dining table with chairs', 'Outdoor bar table and stool', 'Plain console with teak mirror'].map((product, index) => (
<div key={index} className="text-center">
 <Image
   src={`/image/product${index + 1}.webp`}
   alt={product}
   width={150}
   height={150}
   className="object-contain mx-auto"
 />
 <h3 className="text-sm font-semibold mt-2">{product}</h3>
 <p className="text-lg font-bold">Rs. 25,000.00</p>
</div>
))}
</div>
<Link href="/shop" className="text-center underline text-sm mt-4 inline-block">View More</Link>
</div>
</section>

    </div>
  );
};

export default AsgaardSofaPage;


 
 
 









