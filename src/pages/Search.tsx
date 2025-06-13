
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer/Footer';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-8 py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Search Results</h1>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D92030] focus:outline-none"
              placeholder="Search for products..."
            />
          </div>
        </div>

        <div className="text-center text-gray-600">
          <p>Enter a search term to find products</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
