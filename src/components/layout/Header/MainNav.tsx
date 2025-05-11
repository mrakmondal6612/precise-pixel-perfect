import React from 'react';

export const MainNav = () => {
  return (
    <div className="self-center flex w-full max-w-[1331px] items-stretch gap-[35px] flex-wrap mt-[13px]">
      <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/7cca860fedc8680dd550e361a158b91fff3bb621?placeholderIfAbsent=true" className="aspect-[1.02] object-contain w-14 shrink-0" alt="Logo" />
      <div className="flex items-center gap-10 justify-center flex-wrap grow shrink basis-auto my-auto">
        <div className="text-[rgba(33,33,33,1)] text-[32px] font-bold self-stretch my-auto">
          ZIXX
        </div>
        <nav className="self-stretch flex min-w-60 items-center gap-6 text-base text-black font-normal my-auto">
          <div className="self-stretch flex items-center gap-1 whitespace-nowrap my-auto">
            <div className="self-stretch my-auto">Shop</div>
            <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/61681d95c81742945eb5daae085148f6cfab4444?placeholderIfAbsent=true" className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto" alt="Dropdown" />
          </div>
          <div className="self-stretch my-auto">On Sale</div>
          <div className="self-stretch my-auto">New Arrivals</div>
          <div className="self-stretch my-auto">Brands</div>
        </nav>
        <div className="bg-[rgba(240,240,240,1)] self-stretch flex min-w-60 gap-3 overflow-hidden text-base text-black font-normal flex-1 shrink basis-[0%] my-auto px-4 py-3 rounded-[62px]">
          <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/6b478e42f8403dc6f5eae99c7cf3bb374642f221?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 shrink-0" alt="Search" />
          <input 
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none w-full"
          />
        </div>
        <div className="self-stretch flex gap-3.5 my-auto">
          <button aria-label="User account">
            <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/97301dab40dc819ef659872c1b3cc1eb4fd0e9f2?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 shrink-0" alt="Account" />
          </button>
          <button aria-label="Wishlist">
            <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/ac715f0dd7f9aaef44ddb1306739d29ec63e93de?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 shrink-0" alt="Wishlist" />
          </button>
          <button aria-label="Shopping cart">
            <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/6b5e3f50c44bce7c8563de675dc18441131747a3?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 shrink-0" alt="Cart" />
          </button>
        </div>
      </div>
    </div>
  );
};
