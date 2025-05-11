import React from 'react';

export const TopBar = () => {
  return (
    <div className="bg-[rgba(34,40,40,1)] flex h-[41px] w-full flex-col items-stretch justify-center px-5 md:px-[395px]">
      <div className="flex min-h-[45px] w-full items-stretch gap-5 justify-between">
        <nav className="flex items-stretch text-sm text-white font-bold text-center uppercase pl-10">
          <div className="leading-loose w-[114px] px-px border-x-[1px] border-x-[#52505] border-solid">
            <div className="font-bold leading-[21px]">
              <span className="underline text-white">WOMEN</span>
            </div>
          </div>
          <div className="text-[#222828] whitespace-nowrap leading-loose w-[113px] pr-px border-r-[1px] border-r-[#52505] border-solid">
            <div className="leading-[21px]">MEN</div>
          </div>
          <div className="w-[113px] pr-px border-r-[1px] border-r-[#52505] border-solid">
            <div className="text-sm font-black leading-[21px]">
              <a
                href="https://www.thesouledstore.com/kids"
                className="font-black text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                KIDS
              </a>
            </div>
          </div>
        </nav>
        <div className="z-10 flex items-stretch gap-2.5 text-white my-auto">
          <div className="flex items-stretch gap-[5px] text-sm font-bold whitespace-nowrap leading-[1.1]">
            <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/c20d732439d086a64aed116707cf0bd74a991145?placeholderIfAbsent=true" className="aspect-[0.56] object-contain w-2.5 shrink-0" alt="Location icon" />
            <div className="text-white text-sm font-bold leading-[15.4px]">
              India
            </div>
          </div>
          <div className="flex text-[13px] font-normal uppercase">
            <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/691ed78c6049932f5280dd59e41110f3ce0d07be?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5 shrink-0" alt="Track order icon" />
            <div className="text-white text-[13px] font-normal leading-[19.5px]">
              Track Order
            </div>
            <div className="text-white text-[13px] font-normal leading-[19.5px]">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
