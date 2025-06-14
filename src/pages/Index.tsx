
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { NewArrivals } from '@/components/sections/NewArrivals';
import { Categories } from '@/components/sections/Categories';
import { Newsletter } from '@/components/sections/Newsletter';
import { Footer } from '@/components/layout/Footer/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div>
      <Header />
    <div className="felx flex-col overflow-hidden items-center bg-white ">
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
          <div className="max-w-[1080px] justify-center flex min-h-[340px] w-full gap-6 overflow-hidden flex-wrap ml-[195px] mt-24 py-[5px]">
            {[
                'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/f3a59d3c18ef931719e92290738cf5332a8d0bb8?placeholderIfAbsent=true', 
                'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/a3778de0b6fa7c76cfd3fcebbe3550413b4e6770?placeholderIfAbsent=true', 
                'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/eb643d7fe0ae4338ccb6e5788c39e2bcd9311740?placeholderIfAbsent=true', 
                'https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/e0f1ccf92e2dce8c07fc31ea713741f0624b1ac9?placeholderIfAbsent=true'
              ].map((url, index) => (
              <img
                key={index}
                src={url}
                className="aspect-[0.75] object-contain w-[250px] rounded min-w-60 shrink grow"
                alt={`Hot Boy Fit item ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="w-full px-4 md:px-8 py-12 bg-white">
          <h2 className="text-black text-4xl md:text-5xl font-bold text-center mb-10 uppercase">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
            {[
              {
                name: "Sarah M.",
                text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
                verified: true
              },
              {
                name: "Sarah M.",
                text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
                verified: true
              },
              {
                name: "Alex K.",
                text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
                verified: true
              },
              {
                name: "James L.",
                text: "As someone who's always looking for unique fashion pieces, I stumbled upon Shop.co and was impressed. Their collection of clothes is not only diverse but also keeps up with the latest trends.",
                verified: true
              },
              
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  {testimonial.verified && (
                    <span className="ml-2 bg-green-500 rounded-full h-4 w-4 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* <Newsletter /> */}
      </main>
      <Footer />
    </div>
    </div>
  );
};

export default Index;
