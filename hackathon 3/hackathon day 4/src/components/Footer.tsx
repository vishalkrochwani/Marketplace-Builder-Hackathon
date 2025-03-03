import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* First Column: Address */}
          <div className='text-gray-500'>
            <br />
            <p>400 University Drive Suite 200 Corol Gables, 33134 USA</p>
            <br />
            <p className='text-black mt-4'>2022 Meubel House. All rights reserved</p>
          </div>

          {/* Second Column: Home, Shop, About, Contact */}
          <div className="flex flex-col gap-4">
            <h6 className="footer-title text-gray-500">Links</h6>
            <Link href="/" className="link link-hover">Home</Link>
            <Link href="/shop" className="link link-hover">Shop</Link>
            <Link href="/about" className="link link-hover">About</Link>
            <Link href="/contact" className="link link-hover">Contact</Link>
          </div>

          {/* Third Column: Payment Options, Returns, Privacy Policy */}
          <div className="flex flex-col gap-4">
            <h6 className="footer-title text-gray-500">Help</h6>
            <Link href="/paymentoption" className="link link-hover">Payment Options</Link>
            <Link href="/returns" className="link link-hover">Returns</Link>
            <Link href="/privacy" className="link link-hover">Privacy Policy</Link>
          </div>

          {/* Fourth Column: Newsletter */}
          <div className="flex flex-col gap-4">
            <h6 className="footer-title text-gray-500">Newsletter</h6>
            <form>
              <fieldset className="form-control w-80">
                <div className="join flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email Address"
                    className="input input-bordered join-item"
                    aria-label="Email Address"
                  />
                  <button
                    className="btn btn-primary join-item"
                    type="submit"
                    aria-label="Subscribe to Newsletter"
                  >
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
