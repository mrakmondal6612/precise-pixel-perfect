import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type CartItem = {
  id: string;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
  delivery: string;
};

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'ZIXX Classic Fit T-shirt',
      color: 'Gray',
      size: 'XL',
      price: 49.99,
      quantity: 1,
      image: 'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/a3778de0b6fa7c76cfd3fcebbe3550413b4e6770?placeholderIfAbsent=true',
      delivery: 'Delivery by Tue, 20th May'
    },
    {
      id: '2',
      name: 'ZIXX Oversized Tee',
      color: 'Black',
      size: 'L',
      price: 39.99,
      quantity: 1,
      image: 'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/f3a59d3c18ef931719e92290738cf5332a8d0bb8?placeholderIfAbsent=true',
      delivery: 'Delivery by Thu, 22nd May'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? {...item, quantity: newQuantity} : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const applyPromoCode = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Applying promo code:', promoCode);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.09;
  const total = subtotal + shipping + tax;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-6 pb-16">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-grow">
            {cartItems.length > 0 ? (
              <>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="space-y-0">
                    {cartItems.map((item, index) => (
                      <div key={item.id} className={`flex flex-col sm:flex-row gap-4 p-6 ${index < cartItems.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-contain product-image" 
                          />
                        </div>
                        
                        <div className="flex-grow space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-base">{item.name}</h3>
                              <div className="text-sm text-gray-600 space-y-1">
                                <p><span className="font-medium">Color:</span> {item.color}</p>
                                <p><span className="font-medium">Size:</span> {item.size}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-lg text-[#D92030]">${item.price.toFixed(2)}</div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-green-600 font-medium">{item.delivery}</p>
                          
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-0 border border-gray-300 rounded-lg overflow-hidden">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-3 py-1 hover:bg-gray-100 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-4 py-1 font-medium border-x border-gray-300">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-3 py-1 hover:bg-gray-100 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="flex items-center gap-2 text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-lg transition-colors"
                            >
                              <Trash2 size={14} />
                              <span className="text-sm font-medium">Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-right font-semibold text-lg my-6 bg-white rounded-lg shadow-sm p-4">
                  Subtotal ({cartItems.length} items): <span className="text-[#D92030]">${subtotal.toFixed(2)}</span>
                </div>
              </>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="mb-8 text-gray-600">It looks like you haven't added anything to your cart yet.</p>
                <Link to="/">
                  <Button className="bg-[#D92030] hover:bg-[#BC1C2A]">Continue Shopping</Button>
                </Link>
              </div>
            )}
          </div>
          
          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:w-[350px] flex-shrink-0">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-28">
                <h2 className="font-bold text-lg mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping & Handling</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Estimated Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t-2 pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-[#D92030]">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <form onSubmit={applyPromoCode} className="mb-6">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D92030] text-sm"
                    />
                    <button
                      type="submit"
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors font-medium text-sm"
                    >
                      Apply
                    </button>
                  </div>
                </form>
                
                <Button className="w-full bg-[#D92030] hover:bg-[#BC1C2A] py-3 text-base font-semibold rounded-lg mb-6">
                  Proceed to Checkout
                </Button>
                
                <div className="grid grid-cols-3 gap-4 border-t-2 pt-6">
                  <div className="text-center">
                    <div className="mx-auto mb-2 w-8 h-8 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-xs font-medium">FREE FAST DELIVERY</p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-2 w-8 h-8 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 9.35v5.3a.5.5 0 00.78.42l4.5-2.65a.5.5 0 000-.84l-4.5-2.65a.5.5 0 00-.78.42z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-xs font-medium">24/7 CUSTOMER SERVICE</p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-2 w-8 h-8 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-xs font-medium">MONEY BACK GUARANTEE</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Top Selling Products Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">TOP SELLING</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              {
                name: 'Vertical Striped Shirt',
                price: 29.99,
                oldPrice: 44.99,
                image: 'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/a3eb5973361b70df8423fb8187c106fa1cccf9ee?placeholderIfAbsent=true'
              },
              {
                name: 'Orange Graphic T-shirt',
                price: 19.99,
                image: 'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/1ae9ee2293ad29eef209760dacb27c2cfcc587ac?placeholderIfAbsent=true'
              },
              {
                name: 'Loose Fit Bermuda Shorts',
                price: 34.99,
                image: 'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/195176e2222a7c41d44bd7662e7402d74c61a9a0?placeholderIfAbsent=true'
              },
              {
                name: 'Faded Skinny Jeans',
                price: 49.99,
                image: 'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/323635352eed4542ef83c5e9d41e0f884d43499e?placeholderIfAbsent=true'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow">
                <Link to="/product" className="block">
                  <div className="aspect-square bg-gray-100 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover product-image" 
                    />
                  </div>
                  <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-bold text-[#D92030]">${product.price}</div>
                    {product.oldPrice && (
                      <div className="text-sm text-gray-500 line-through">${product.oldPrice}</div>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* NEW ARRIVALS Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">NEW ARRIVALS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              {
                name: 'T-SHIRT WITH TAPE DETAILS',
                price: 120,
                image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&h=500'
              },
              {
                name: 'SKINNY FIT JEANS',
                price: 240,
                oldPrice: 260,
                image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&h=500'
              },
              {
                name: 'CHECKERED SHIRT',
                price: 180,
                image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&h=500'
              },
              {
                name: 'SLEEVE STRIPED T-SHIRT',
                price: 130,
                oldPrice: 160,
                image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&h=500'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow">
                <Link to="/product" className="block">
                  <div className="aspect-square bg-gray-100 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover product-image" 
                    />
                  </div>
                  <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-bold text-[#D92030]">${product.price}</div>
                    {product.oldPrice && (
                      <div className="text-sm text-gray-500 line-through">${product.oldPrice}</div>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* OUR HAPPY CUSTOMERS Section */}
        <section className="mt-16 bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-12">OUR HAPPY CUSTOMERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                rating: 5,
                review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
              },
              {
                name: "Alex K.",
                rating: 5,
                review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable."
              },
              {
                name: "James L.",
                rating: 5,
                review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
              }
            ].map((customer, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  {[...Array(customer.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <h4 className="font-bold mb-2">{customer.name}</h4>
                <p className="text-gray-600 text-sm">{customer.review}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
