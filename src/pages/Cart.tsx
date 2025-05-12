
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
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
    // Implementation for promo code logic would go here
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.09;
  const total = subtotal + shipping + tax;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-6 pb-16">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-grow">
            {cartItems.length > 0 ? (
              <>
                {/* Cart Items List */}
                <div className="space-y-6 mb-8">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row gap-4 border-b pb-6">
                      <div className="w-full sm:w-24 h-auto aspect-square bg-gray-100 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      
                      <div className="flex-grow space-y-2">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.name}</h3>
                          <div className="font-bold">${item.price.toFixed(2)}</div>
                        </div>
                        
                        <div className="text-sm text-gray-500">
                          <p>Color: {item.color}</p>
                          <p>Size: {item.size}</p>
                        </div>
                        
                        <p className="text-sm">{item.delivery}</p>
                        
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2 border rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 hover:bg-gray-100"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-2">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-gray-100"
                              aria-label="Increase quantity"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="flex items-center gap-1 text-red-600 hover:text-red-800"
                          >
                            <Trash2 size={16} />
                            <span className="text-sm">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-right font-medium mb-8">
                  Subtotal ({cartItems.length} items): ${subtotal.toFixed(2)}
                </div>
                
              </>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="mb-8 text-gray-600">It looks like you haven't added anything to your cart yet.</p>
                <Link to="/">
                  <Button>Continue Shopping</Button>
                </Link>
              </div>
            )}
          </div>
          
          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:w-[350px] flex-shrink-0">
              <div className="border rounded-lg p-6 bg-gray-50 sticky top-28">
                <h2 className="font-bold text-lg mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping & Handling</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <form onSubmit={applyPromoCode} className="mb-6">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-grow px-4 py-2 border border-r-0 rounded-l-md focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-md hover:bg-gray-300"
                    >
                      Apply
                    </button>
                  </div>
                </form>
                
                <Button className="w-full bg-[#D92030] hover:bg-[#BC1C2A] mb-4">
                  Proceed to Checkout
                </Button>
                
                <div className="flex justify-between items-center border-t pt-4 mt-6">
                  <div className="flex-1 text-center">
                    <div className="flex justify-center mb-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-xs">FREE FAST DELIVERY</p>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="flex justify-center mb-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 9.35v5.3a.5.5 0 00.78.42l4.5-2.65a.5.5 0 000-.84l-4.5-2.65a.5.5 0 00-.78.42z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-xs">24/7 CUSTOMER SERVICE</p>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="flex justify-center mb-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-xs">MONEY BACK GUARANTEE</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Top Selling Products Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">TOP SELLING</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <Link to="/product" className="block">
                  <div className="aspect-square bg-gray-100 mb-3">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="text-sm font-bold">${product.price}</div>
                    {product.oldPrice && (
                      <div className="text-sm text-gray-500 line-through">${product.oldPrice}</div>
                    )}
                  </div>
                </Link>
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
