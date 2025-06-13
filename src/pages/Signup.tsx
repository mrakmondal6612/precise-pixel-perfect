
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt with:', { firstName, lastName, email, password, phone, acceptTerms, selectedGender });
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Left side - Form */}
          <div className="w-full lg:w-1/2 max-w-md">
            <Card className="w-full border-0 shadow-none">
              <CardContent className="p-6">
                <div className="text-left mb-6">
                  <h1 className="text-3xl font-bold mb-2">Welcome 👋</h1>
                  <p className="text-gray-600">Join us now to be a part of Zixx's family.</p>
                </div>
                
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D92030] focus:outline-none"
                        placeholder="First Name*"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D92030] focus:outline-none"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D92030] focus:outline-none"
                      placeholder="Email ID*"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D92030] focus:outline-none"
                      placeholder="Choose New Password*"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D92030] focus:outline-none"
                      placeholder="Confirm Password*"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D92030] focus:outline-none"
                      placeholder="Phone (Include your 10 Digits)*"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptTerms}
                      onChange={() => setAcceptTerms(!acceptTerms)}
                      className="h-5 w-5 text-[#D92030] focus:ring-[#D92030] border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the Terms and Conditions and Privacy Policy
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    {['Senior', 'Male', 'Female', 'Other'].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSelectedGender(option)}
                        className={`p-3 rounded-lg text-center transition-colors ${
                          selectedGender === option 
                            ? 'bg-[#D92030] text-white' 
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-[#D92030] hover:bg-[#BC1C2A] py-4 text-lg font-semibold rounded-lg"
                  >
                    REGISTER
                  </Button>
                </form>
                
                <div className="text-center mt-6">
                  <p className="text-gray-600 mb-4">Or</p>
                  
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full py-3 h-auto rounded-lg border-2">
                      <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center mr-3">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </div>
                      Sign in with Google
                    </Button>
                    
                    <Button variant="outline" className="w-full py-3 h-auto rounded-lg border-2">
                      <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center mr-3">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                        </svg>
                      </div>
                      Sign in with Facebook
                    </Button>
                  </div>
                  
                  <p className="text-gray-600 mt-6">
                    Already a customer?{" "}
                    <Link to="/login" className="font-medium text-[#D92030] hover:underline">
                      Login
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right side - Image */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&h=500" 
                alt="Floral arrangement" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Signup;
