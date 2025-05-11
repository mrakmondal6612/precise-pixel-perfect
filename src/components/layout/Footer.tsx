import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[rgba(217,32,48,1)] flex w-full max-w-[1438px] flex-col overflow-hidden items-stretch pt-20 pb-6">
      <div className="w-full max-w-[1272px] mr-[33px] max-md:max-w-full max-md:mr-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[82%] max-md:w-full">
            <div className="flex gap-[40px_87px] text-neutral-50 justify-center flex-wrap max-md:max-w-full max-md:mt-10">
              <div className="flex flex-col items-stretch w-[217px]">
                <div>
                  <div className="w-[118px] max-w-full whitespace-nowrap">
                    <div className="text-neutral-50 w-full text-2xl font-bold tracking-[0.72px] leading-none">
                      Exclusive
                    </div>
                    <div className="text-neutral-50 text-xl font-medium leading-[1.4] mt-6">
                      Subscribe
                    </div>
                  </div>
                  <div className="text-neutral-50 text-base font-normal mt-6">
                    Get 10% off your first order
                  </div>
                </div>
                <div className="items-center rounded border-[color:var(--Text,#FAFAFA)] flex max-w-full w-[217px] gap-8 text-base font-normal mt-4 pl-4 py-3 border-[1.5px] border-solid">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="text-neutral-50 opacity-40 self-stretch my-auto bg-transparent outline-none"
                  />
                  <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/98231e33944eaca641aa23f2dd2fb6bdc23b476e?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" alt="Send" />
                </div>
              </div>

              <div className="w-[175px]">
                <h3 className="text-neutral-50 text-xl font-medium leading-[1.4]">
                  Support
                </h3>
                <address className="max-w-full w-[175px] text-base font-normal mt-6 not-italic">
                  <div className="text-neutral-50 text-[15px] leading-6">
                    1, Khan Road Mankundu<br />
                    Hooghly - 720012
                  </div>
                  <div className="text-neutral-50 mt-4">
                    xyzabcgmail.com
                  </div>
                  <div className="text-neutral-50 mt-4">
                    +91015-8436-9999
                  </div>
                </address>
              </div>

              <nav className="space-y-4">
                <h3 className="text-neutral-50 text-xl font-medium leading-[1.4]">
                  Account
                </h3>
                <ul className="text-base font-normal mt-6 space-y-4">
                  <li><a href="#" className="text-neutral-50">My Account</a></li>
                  <li><a href="#" className="text-neutral-50">Login / Register</a></li>
                  <li><a href="#" className="text-neutral-50">Cart</a></li>
                  <li><a href="#" className="text-neutral-50">Wishlist</a></li>
                  <li><a href="#" className="text-neutral-50">Shop</a></li>
                </ul>
              </nav>

              <nav className="space-y-4">
                <h3 className="text-neutral-50 text-xl font-medium leading-[1.4]">
                  Quick Link
                </h3>
                <ul className="text-base font-normal mt-6 space-y-4">
                  <li><a href="#" className="text-neutral-50">Privacy Policy</a></li>
                  <li><a href="#" className="text-neutral-50">Terms Of Use</a></li>
                  <li><a href="#" className="text-neutral-50">FAQ</a></li>
                  <li><a href="#" className="text-neutral-50">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="w-[18%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex gap-6 self-stretch my-auto max-md:mt-10">
              <a href="#" aria-label="Facebook">
                <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/c583f579fa1cb68d5283489243accb132e230c69?placeholderIfAbsent=true" className="aspect-[1] object-contain w-[30px] shrink-0" alt="Facebook" />
              </a>
              <a href="#" aria-label="Twitter">
                <div className="flex w-[30px] shrink-0 h-[30px]" />
              </a>
              <a href="#" aria-label="Instagram">
                <div className="flex w-[30px] shrink-0 h-[30px]" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/804bd789114468e95d382d84f5008a8057781c27?placeholderIfAbsent=true" className="aspect-[1] object-contain w-[30px] shrink-0" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center mt-[60px] max-md:max-w-full max-md:mt-10">
        <div className="w-full">
          <div className="opacity-40 border bg-white shrink-0 h-px border-white border-solid" />
        </div>
        <div className="flex items-center gap-3 text-base text-white font-normal mt-4">
          <div className="self-stretch flex min-w-60 items-center gap-1.5 my-auto">
            <div className="self-stretch flex w-5 shrink-0 h-5 my-auto">©</div>
            <div className="text-white self-stretch my-auto">
              Copyright ZIXX. All right reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
