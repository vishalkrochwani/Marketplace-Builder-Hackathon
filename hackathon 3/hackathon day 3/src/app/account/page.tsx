import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Sec7 from '../../components/Sec7'

const Account = () => {
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
          <h1 className="text-5xl font-bold text-black">My Account</h1>
          <p className="text-xl mt-4 text-black">
            <Link href="/">Home</Link> &gt; My Account
          </p>
        </div>
      </section>

      {/* 2nd Section: Login and Register */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Login Column */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold ">Login</h1>
              <form className="space-y-4">
                {/* Username or Email */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="email">Username or Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Password */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Remember Me Checkbox */}
                <div className="flex items-center">
                  <input type="checkbox" id="rememberMe" className="mr-2" />
                  <label htmlFor="rememberMe" className="text-lg">Remember Me</label>
                </div>
                {/* Login Button */}
                <button className="w-10000 px-14 py-3 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition">
                  Login
                </button> <Link href="#" className="text-lg text-blue-600 px-8">Lost your password?</Link>
               
              </form>
            </div>

            {/* Register Column */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Register</h1>
              <form className="space-y-4">
                {/* Email Address */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="registerEmail">Email Address</label>
                  <input
                    type="email"
                    id="registerEmail"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Register Information */}
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    A link to set a new password will be sent to your email address.
                  </p>
                  <p>
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                  </p>
                </div>
                {/* Register Button */}
                <button className="w-100 px-14 py-3 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Sec7/>
    </div>
  )
}

export default Account
