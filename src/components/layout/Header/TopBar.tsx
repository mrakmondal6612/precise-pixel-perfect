
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';

export const TopBar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    if (location.pathname.includes('/men')) return 'men';
    if (location.pathname.includes('/kids')) return 'kids';
    return 'women';
  });
  
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[rgba(34,40,40,1)] flex h-[48px] w-full flex-col items-stretch justify-center px-3 md:px-6 lg:px-80">
      <div className="flex min-h-[45px] w-full items-center gap-4 md:gap-8 justify-between">
        {/* Mobile menu toggle */}
        {isMobile && (
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-1"
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>
        )}

        {/* Main navigation - shifted to left */}
        <nav className={`${isMobile && !mobileMenuOpen ? 'hidden' : 'flex'} ${isMobile ? 'absolute top-[41px] left-0 right-0 bg-[rgba(34,40,40,1)] z-50 flex-col' : 'static flex-row'} items-stretch text-sm text-white font-bold text-center uppercase ml-0`}>
          <Link 
            to="/"
            className={`leading-loose w-[70px] md:w-[114px] px-px border-x-[1px] border-x-[#52505] border-solid ${activeTab === 'women' ? 'text-white underline' : 'text-white'}`}
            onClick={() => {
              setActiveTab('women');
              if (isMobile) setMobileMenuOpen(false);
            }}
          >
            <div className="font-bold leading-[21px]">WOMEN</div>
          </Link>
          <Link 
            to="/men"
            className={`whitespace-nowrap leading-loose w-[70px] md:w-[113px] pr-px border-r-[1px] border-r-[#52505] border-solid ${activeTab === 'men' ? 'text-white underline' : 'text-white'}`}
            onClick={() => {
              setActiveTab('men');
              if (isMobile) setMobileMenuOpen(false);
            }}
          >
            <div className="leading-[21px]">MEN</div>
          </Link>
          <Link 
            to="/kids"
            className={`w-[70px] md:w-[113px] pr-px border-r-[1px] border-r-[#52505] border-solid ${activeTab === 'kids' ? 'text-white underline' : 'text-white'}`}
            onClick={() => {
              setActiveTab('kids');
              if (isMobile) setMobileMenuOpen(false);
            }}
          >
            <div className="text-sm font-black leading-[21px]">KIDS</div>
          </Link>
        </nav>
        
        <div className="z-10 ml-auto flex items-center gap-1 md:gap-2.5 text-white">
          <div className="flex items-center gap-1 md:gap-[5px] text-xs md:text-sm font-bold whitespace-nowrap leading-[1.1]">
            <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/c20d732439d086a64aed116707cf0bd74a991145?placeholderIfAbsent=true" className="aspect-[0.56] object-contain w-2 md:w-2.5 shrink-0" alt="Location icon" />
            <div className="text-white text-xs md:text-sm font-bold leading-[15.4px]">
              India
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2 text-[10px] md:text-[13px] font-normal uppercase">
            <Link to="/track-order" className="flex items-center hover:underline">
              <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/691ed78c6049932f5280dd59e41110f3ce0d07be?placeholderIfAbsent=true" className="aspect-[1] object-contain w-4 md:w-5 shrink-0" alt="Track order icon" />
              <span className="hidden md:inline ml-1">Track Order</span>
            </Link>
            <Link to="/contact" className="text-white text-[10px] md:text-[13px] font-normal leading-[19.5px] hover:underline ml-1 md:ml-2">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
