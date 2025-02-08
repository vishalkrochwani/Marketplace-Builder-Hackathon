import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Category List Component
const categories = [
  { name: 'Crafts', count: 2 },
  { name: 'Design', count: 8 },
  { name: 'Handmade', count: 7 },
  { name: 'Indoor', count: 1 },
  { name: 'Wood', count: 6 },
];

const CategoryList = () => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
      />
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="flex justify-between">
            <span>{category.name}</span>
            <span>{category.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Blog = () => {
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

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* Small Image in Center */}
          <div className="mb-4">
            <Image
              src="/image/shop.webp"
              alt="Blog Icon"
              width={100}
              height={100}
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-5xl font-bold text-black">Blog</h1>
          <p className="text-xl mt-4 text-black">
            <Link href="/">Home</Link> &gt; Blog
          </p>
        </div>
      </section>

      {/* 2nd Section: Blog Content with Two Columns (65:35 Ratio) */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* First Column (65% width) */}
            <div className="md:col-span-3 space-y-6">
              {/* First Post */}
              <div>
                <Image
                  src="/image/2.webp"
                  alt="Going On"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-3xl font-bold mt-4">
                  Going all-in with millennial design
                </h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non
                  faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Second Post */}
              <div className="mt-12">
                <Image
                  src="/image/blog2.webp"
                  alt="Going On Again"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-3xl font-bold mt-4">
                  Exploring new ways of decorating
                </h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non
                  faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Third Post */}
              <div className="mt-12">
                <Image
                  src="/image/blog3.webp"
                  alt="Third Post"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-3xl font-bold mt-4">
                  Hand-made pieces that took time to make
                </h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non
                  faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>
            </div>

            {/* Second Column (35% width) */}
            <div className="md:col-span-2 space-y-6">
              <CategoryList />

              <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
              {['b1', 'b2', 'b3', 'b4', 'b5'].map((img, i) => (
                <div key={i} className="flex items-center space-x-4 mb-4">
                  <Image
                    src={`/image/${img}.webp`}
                    alt={`Recent Post ${i + 1}`}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                  <div>
                    <h2 className="text-black font-bold">
                      {`Recent Post Title ${i + 1}`}
                    </h2>
                    <p className="text-gray-600 text-sm">03 Aug 2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: Concept Posts */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[ 
              { title: 'Free Delivery', text: 'For all orders over $50.' },
              { title: '90 Days Return', text: 'If the product has an issue.' },
              { title: 'Secure Payments', text: '100% secure payments.' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h2 className="text-black font-bold text-3xl">
                  {item.title}
                </h2>
                <p className="text-lg text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
