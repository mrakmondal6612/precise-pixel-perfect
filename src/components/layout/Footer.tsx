
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
  };

  return (
    <div className="w-full">
      {/* Service Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Free Delivery */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7V17C3 17.5523 3.44772 18 4 18H5.5C5.5 19.3807 6.61929 20.5 8 20.5C9.38071 20.5 10.5 19.3807 10.5 18H13.5C13.5 19.3807 14.6193 20.5 16 20.5C17.3807 20.5 18.5 19.3807 18.5 18H20C20.5523 18 21 17.5523 21 17V13H17L15 9H12V7H3Z"/>
                  <circle cx="8" cy="18" r="1"/>
                  <circle cx="16" cy="18" r="1"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">FREE AND FAST DELIVERY</h3>
              <p className="text-gray-600">Free delivery for all orders over $140</p>
            </div>

            {/* Customer Service */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.1046 2 14 2.89543 14 4V7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7V4C10 2.89543 10.8954 2 12 2Z"/>
                  <path d="M19 10V11C19 15.9706 14.9706 20 10 20H9C7.34315 20 6 21.3431 6 23H18C19.6569 23 21 21.6569 21 20V19C21 14.0294 16.9706 10 12 10H19Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 CUSTOMER SERVICE</h3>
              <p className="text-gray-600">Friendly 24/7 customer support</p>
            </div>

            {/* Money Back */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">MONEY BACK GUARANTEE</h3>
              <p className="text-gray-600">We return money within 30 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#D92030] w-full text-white">
        <div className="max-w-[1200px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Exclusive Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Exclusive</h3>
              <h4 className="text-lg font-medium mb-4">Subscribe</h4>
              <p className="mb-4">Get 10% off your first order</p>
              <form onSubmit={handleSubmit} className="flex border border-white rounded mb-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-white p-2 w-full outline-none placeholder-white placeholder-opacity-40"
                />
                <button type="submit" className="p-2">
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 9H18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.25 1.5L18.75 9L11.25 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-xl font-medium mb-6">Support</h3>
              <address className="not-italic">
                <p className="mb-4">1, Khan Road Mankundu<br />Hooghly - 720012</p>
                <p className="mb-4">xyzzabgmail.com</p>
                <p className="mb-4">+91015-8436-9999</p>
              </address>
            </div>

            {/* Account Column */}
            <div>
              <h3 className="text-xl font-medium mb-6">Account</h3>
              <ul className="space-y-4">
                <li><Link to="/account" className="hover:underline">My Account</Link></li>
                <li><Link to="/login" className="hover:underline">Login / Register</Link></li>
                <li><Link to="/cart" className="hover:underline">Cart</Link></li>
                <li><Link to="/wishlist" className="hover:underline">Wishlist</Link></li>
                <li><Link to="/shop" className="hover:underline">Shop</Link></li>
              </ul>
            </div>

            {/* Quick Link Column */}
            <div>
              <h3 className="text-xl font-medium mb-6">Quick Link</h3>
              <ul className="space-y-4">
                <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:underline">Terms Of Use</Link></li>
                <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-end mt-8 mb-10">
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Divider */}
          <div className="border-t border-white opacity-40 my-4"></div>
          
          {/* Copyright */}
          <div className="flex justify-center items-center">
            <span>© Copyright ZIXX. All right reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
