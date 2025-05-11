import React from 'react';

export const Hero = () => {
  return (
    <section className="flex flex-col relative min-h-[588px] w-full max-w-[1181px] items-center mt-[33px] pt-[556px] pb-[18px] px-[70px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/70ad6d2d96f744648798836a6706b9db/d5b391a024519f0a274f617aaa8e815af74b7883?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero banner"
      />
      <div className="relative flex items-center gap-3">
        <button className="bg-[rgba(255,255,255,0.5)] self-stretch flex w-3 shrink-0 h-3 my-auto rounded-[50%]" aria-label="Slide 1" />
        <button className="bg-[rgba(255,255,255,0.5)] self-stretch flex w-3 shrink-0 h-3 my-auto rounded-[50%]" aria-label="Slide 2" />
        <button className="bg-[rgba(255,255,255,0.5)] self-stretch flex w-3 shrink-0 h-3 my-auto rounded-[50%]" aria-label="Slide 3" />
        <button className="bg-[rgba(255,255,255,0.5)] self-stretch flex w-3 shrink-0 h-3 my-auto rounded-[50%]" aria-label="Slide 4" />
      </div>
    </section>
  );
};
