
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { NewArrivals } from '@/components/sections/NewArrivals';
import { Categories } from '@/components/sections/Categories';
import { Newsletter } from '@/components/sections/Newsletter';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="flex flex-col overflow-hidden items-center bg-white pb-10">
      <Header />
      <main className="w-full max-w-[1440px] flex flex-col items-center">
        <Hero />
        <NewArrivals />
        <Categories />
        
        {/* Indianwear Banner */}
        <div className="rounded flex min-h-[350px] w-full max-w-[1405px] flex-col overflow-hidden items-center justify-center mt-[63px] max-md:max-w-full max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/4aced3c27c234d70267aacc0142add1478e2c868?placeholderIfAbsent=true"
            className="aspect-[3.42] object-contain w-full max-w-[1200px] flex-1 max-md:max-w-full"
            alt="Indianwear collection"
          />
        </div>

        {/* Collection Grid */}
        <div className="max-w-[1080px] justify-center flex min-h-[356px] w-full gap-5 overflow-hidden flex-wrap mt-[119px] pt-[5px] pb-4 max-md:max-w-full max-md:mt-10">
          {['https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/a3eb5973361b70df8423fb8187c106fa1cccf9ee?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/1ae9ee2293ad29eef209760dacb27c2cfcc587ac?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/195176e2222a7c41d44bd7662e7402d74c61a9a0?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/323635352eed4542ef83c5e9d41e0f884d43499e?placeholderIfAbsent=true'].map((url, index) => (
            <img
              key={index}
              src={url}
              className="aspect-[0.75] object-contain w-[200px] rounded min-w-60 shrink grow"
              alt={`Collection item ${index + 1}`}
            />
          ))}
        </div>

        {/* Hot Boy Fit Section */}
        <section>
          <h2 className="text-[#222828] text-center text-[40px] font-bold leading-[35px] mt-10">
            Hot Boy fIT
          </h2>
          <div className="self-stretch min-h-[364px] w-full overflow-hidden mt-[66px] px-5 md:px-[155px] pb-1">
            <div className="rounded flex w-full flex-col overflow-hidden items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/7087fa7cadbd89e8fc148d4f01d42317d99eaccb?placeholderIfAbsent=true"
                className="aspect-[3.42] object-contain w-[1200px] max-w-[1200px]"
                alt="Hot Boy Fit collection"
              />
            </div>
          </div>
          <div className="max-w-[1080px] justify-center flex min-h-[345px] w-full gap-5 overflow-hidden flex-wrap ml-[19px] mt-24 py-[5px]">
            {['https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/f3a59d3c18ef931719e92290738cf5332a8d0bb8?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/a3778de0b6fa7c76cfd3fcebbe3550413b4e6770?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/eb643d7fe0ae4338ccb6e5788c39e2bcd9311740?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/e0f1ccf92e2dce8c07fc31ea713741f0624b1ac9?placeholderIfAbsent=true'].map((url, index) => (
              <img
                key={index}
                src={url}
                className="aspect-[0.75] object-contain w-[200px] rounded min-w-60 shrink grow"
                alt={`Hot Boy Fit item ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full px-4 md:px-8">
          <h2 className="text-black text-5xl font-bold mt-[60px] text-center max-md:text-[40px] max-md:mt-10">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {[
              {
                name: "Sarah M.",
                text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
              },
              {
                name: "Alex T.",
                text: "The customer service at Shop.co is unmatched! When I had an issue with sizing, they were quick to respond and made the exchange process seamless and hassle-free."
              },
              {
                name: "Jordan K.",
                text: "I've been shopping at Shop.co for years and have never been disappointed. Their collection is always on trend, and the quality keeps me coming back for more."
              },
              {
                name: "Taylor B.",
                text: "As someone who values sustainability, I appreciate Shop.co's commitment to ethical fashion. Plus, their clothes are stylish, comfortable, and durable!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
                <p className="text-right font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
