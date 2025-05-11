
import React from 'react';
import { TopBar } from './TopBar';
import { MainNav } from './MainNav';

export const Header = () => {
  return (
    <header className="bg-white border-b w-full flex max-w-[1440px] flex-col pb-[9px] border-[rgba(139,139,139,1)] border-solid sticky top-0 z-40">
      <TopBar />
      <MainNav />
    </header>
  );
};
