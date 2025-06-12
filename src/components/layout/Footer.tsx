
import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Headphones, Shield, Star, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
  };

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      name: "Alex K.",
      rating: 5,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
      name: "James L.",
      rating: 5,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    }
  ];

  const services = [
    {
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140"
    },
    {
      icon: Headphones,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support"
    },
    {
      icon: Shield,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days"
    }
  ];

  return (
    <footer className="bg-background w-full">
      {/* Customer Testimonials Section */}
      <div className="bg-background py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">OUR HAPPY CUSTOMERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-6 rounded-lg border ${index === 0 ? 'border-primary' : 'border-border'}`}>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center mb-3">
                  <span className="font-semibold text-foreground">{testimonial.name}</span>
                  <div className="w-5 h-5 bg-green-500 rounded-full ml-2 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-background py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-black py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-2">STAY UPTO DATE ABOUT</h3>
              <h3 className="text-3xl font-bold">OUR LATEST OFFERS</h3>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white rounded-full px-6 py-3 w-80"
                />
              </div>
              <Button 
                onClick={handleSubmit}
                className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3 font-medium"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="bg-[#D92030] w-full text-white">
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
                <p className="mb-4">xyzabcgmail.com</p>
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
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-80">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
                <Linkedin className="w-6 h-6" />
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
      </div>
    </footer>
  );
};
