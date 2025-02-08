import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Use Next.js Link for client-side navigation

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Going all-in with millennial design',
      image: '/image/blog1.webp',
      altText: 'Blog Post 1 Image',
      postDate: new Date().toLocaleDateString(), // Placeholder for actual post date
    },
    {
      id: 2,
      title: 'Exploring modern design trends',
      image: '/image/blog2.webp',
      altText: 'Blog Post 2 Image',
      postDate: new Date().toLocaleDateString(), // Placeholder for actual post date
    },
    {
      id: 3,
      title: 'Sustainable interior design ideas',
      image: '/image/blog3.webp',
      altText: 'Blog Post 3 Image',
      postDate: new Date().toLocaleDateString(), // Placeholder for actual post date
    },
  ];

  return (
    <section className="bg-white text-black py-10">
      <div>
        <h2 className="text-5xl mb-6 text-center">Our Blog</h2>
        <p className="text-center text-lg mb-8">
          Find a bright idea to suit your taste with our great selection.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="text-center">
              <Image
                src={post.image}
                alt={post.altText}
                width={300}
                height={300}
                className="object-contain mx-auto"
              />
              <p className="text-lg">{post.title}</p>
              <Link href="/about">
                <span className="underline font-bold text-xl mb-4">Read More</span>
              </Link>
              <div className="flex justify-center gap-4">
                <span>⏰ 5 mins</span>
                <span>📅 {post.postDate}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-8">
          <Link href="/about">
            <span className="underline text-sm">View All Posts</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
