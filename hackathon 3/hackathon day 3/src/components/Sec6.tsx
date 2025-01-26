import React from 'react';

const InstagramSection = () => {
  return (
    <section className="relative bg-gray-100 text-black py-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/insta.jpeg')", // Path to insta.jpeg
          opacity: 0.1, // 10% opacity for transparency
        }}
      ></div>

      {/* Content Section */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
        <h2 className="text-4xl text-center font-bold mb-4">Our Instagram</h2>
        <p className="text-lg mb-4 text-center">Follow our store on Instagram</p>
        <div className="flex justify-center py-10">
          <a
            href="https://www.instagram.com/yourstore"
            className="border-2 border-white text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
            style={{ width: "200px", textAlign: "center" }}
          >
            Follow Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
