import React from 'react';
import Image from 'next/image';

const BlogSection = () => {
  return (
    <section className="bg-white text-black py-10">
      <div>
        <h2 className="text-5xl mb-6 text-center">Our Blog</h2>
        <p className="text-center text-lg mb-8">
          Find a bright idea to suit your taste with our great selection.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <Image
              src="/image/blog1.webp"
              alt="Blog Post 1"
              width={300}
              height={300}
              className="object-contain mx-auto"
            />
            <p className="text-lg">Going all-in with millennial design</p>
            <a href="/about" className="underline font-bold text-xl mb-4">
              Read More
            </a>
            <div className="flex justify-center gap-4">
              <span>⏰ 5 mins</span>
              <span>📅 {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          <div className="text-center">
            <Image
              src="/image/blog2.webp"
              alt="Blog Post 2"
              width={300}
              height={300}
              className="object-contain mx-auto"
            />
            <p className="text-lg">Going all-in with millennial design</p>
            <a href="/about" className="underline font-bold text-xl mb-4">
              Read More
            </a>
            <div className="flex justify-center gap-4">
              <span>⏰ 5 mins</span>
              <span>📅 {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          <div className="text-center">
            <Image
              src="/image/blog3.webp"
              alt="Blog Post 3"
              width={300}
              height={300}
              className="object-contain mx-auto"
            />
            <p className="text-lg">Going all-in with millennial design</p>
            <a href="/about" className="underline font-bold text-xl mb-4">
              Read More
            </a>
            <div className="flex justify-center gap-4">
              <span>⏰ 5 mins</span>
              <span>📅 {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-8">
          <a href="/about" className="underline text-sm">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
