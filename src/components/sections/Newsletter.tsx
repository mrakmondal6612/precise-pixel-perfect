import React from 'react';

export const Newsletter = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
  };

  return (
    <div className="z-10 flex w-full max-w-[1319px] items-stretch gap-[33px] flex-wrap ml-[17px] mt-[45px] max-md:max-w-full max-md:mt-10">
      <div className="bg-[rgba(34,40,40,1)] flex items-center gap-[40px_100px] overflow-hidden justify-between flex-wrap grow shrink basis-auto px-16 py-9 rounded-[20px] max-md:max-w-full max-md:px-5">
        <h2 className="text-white text-[40px] font-bold leading-[45px] self-stretch w-[551px] my-auto max-md:max-w-full">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <form onSubmit={handleSubmit} className="self-stretch min-w-60 text-base w-[349px] my-auto">
          <div className="bg-white flex max-w-full w-[349px] gap-3 overflow-hidden text-black font-normal px-4 py-3 rounded-[62px]">
            <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/dfac35255f50746a7b0e86a21373be5633b8bdbd?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 shrink-0" alt="Email icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black font-medium mt-3.5 px-4 py-3 rounded-[62px] hover:bg-gray-100 transition-colors"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
      <div className="flex flex-col relative aspect-[1] w-[46px] my-auto">
        <img src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/6faf58fa75bba98bf3dc438ecc0325f23b3057e5?placeholderIfAbsent=true" className="absolute h-full w-full object-cover inset-0" alt="Newsletter decoration" />
      </div>
    </div>
  );
};
