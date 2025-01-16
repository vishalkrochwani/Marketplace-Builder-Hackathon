'use client';

import Link from 'next/link';
import Image from 'next/image';
import Sec7 from '../../components/Sec7'
import { FaFilter, FaList, FaTh, FaThList } from 'react-icons/fa'; // Import the icons

const Shop = () => {
  return (
    <div>
     {/* First Section with Tailwind Background */}
     
          <section className="relative h-[60vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/bg.jpeg')", // Path to shop.png
            opacity: 0.6, // Adjusts the transparency of the background image (40% transparency)
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          {/* Small Image in Center */}
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
          {/* Left side: Filter Icon, Text, and Category Icon */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaFilter className="text-xl" /> {/* Filter Icon */}
              <span className="text-lg">Filter</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaList className="text-xl" /> {/* Category Icon */}
              <span className="text-lg">Category</span>
            </div>
            <div className="text-lg">
            Showing 1-16 out of 32 items
          </div>
          </div>

          
          

          {/* Right side: Sort and View */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg">Show</span>
              <div className="bg-white text-center w-12 py-1 text-sm text-gray-500">
                16
              </div>
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
      <section className="bg-white text-black py-10">
        <div className="container mx-auto px-4 text-center">

          {/* Product Grid */}
          <div className="grid grid-cols-4 gap-4">
            
            {/* Column 1 */}
            <div className="text-center">
              <Image
                src="/image/product1.webp"
                alt="Product 1"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Trenton modular sofa_3</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/product2.webp"
                alt="Product 1"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Granite dining table with dining chair</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/product3.webp"
                alt="Product 1"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Outdoor bar table and stool</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/product4.webp"
                alt="Product 1"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Plain console with teak mirror</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>

            {/* Column 2 */}
            <div className="text-center">
              <Image
                src="/image/c1r2.webp"
                alt="Product 2"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Grain Coffee Table</h3>
              <p className="text-lg font-bold">Rs. 15,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/c2r2.webp"
                alt="Product 2"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Kant Coffee table</h3>
              <p className="text-lg font-bold">Rs. 225,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/c3r2.webp"
                alt="Product 2"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Round coffee table_color 2</h3>
              <p className="text-lg font-bold">Rs. 251,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/c4r2.webp"
                alt="Product 2"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Reclaimed teak coffee table</h3>
              <p className="text-lg font-bold">Rs. 25,200.00</p>
            </div>

            {/* Column 3 */}
            <div className="text-center">
              <Image
                src="/image/c3r1.webp"
                alt="Product 3"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Plain console</h3>
              <p className="text-lg font-bold">Rs. 258,200.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/c2r3.webp"
                alt="Product 3"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Reclaimed teak side board</h3>
              <p className="text-lg font-bold">Rs. 20,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/c3r3.webp"
                alt="Product 3"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2"> SJP_0825</h3>
              <p className="text-lg font-bold">Rs. 200,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/c4r3.webp"
                alt="Product 3"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Bella Chair and table</h3>
              <p className="text-lg font-bold">Rs. 100,000.00</p>
            </div>

            {/* Column 4 */}
            <div className="text-center">
              <Image
                src="/image/side_table.webp"
                alt="Product 4"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Granite square side table</h3>
              <p className="text-lg font-bold">Rs. 58,800.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/c2r4.webp"
                alt="Product 4"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Asgaard Sofa</h3>
              <p className="text-lg font-bold">Rs. 250,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/c3r4.webp"
                alt="Product 4"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Maya sofa three seater</h3>
              <p className="text-lg font-bold">Rs. 115,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/c4r4.webp"
                alt="Product 4"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Outdoor sofa set</h3>
              <p className="text-lg font-bold">Rs. 244,000.00</p>
            </div>
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
            <div className="w-10  bg-amber-100 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              2
            </div>
          </Link>
          <Link href={`/shop?page=3`}>
            <div className="w-10  bg-amber-100 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              3
            </div>
          </Link>
          <Link href={`/shop?page=next`}>
            <div className="w-10  bg-amber-100 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              Next
            </div>
          </Link>
        </div>
      </section>

 <Sec7/>




    </div>
  );
};

export default Shop;
