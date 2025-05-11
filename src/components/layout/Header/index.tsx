import React from 'react';
import { TopBar } from './TopBar';
import { MainNav } from './MainNav';

export const Header = () => {
  return (
    <header className="bg-white border w-full flex max-w-[1440px] flex-col pb-[9px] border-[rgba(139,139,139,1)] border-solid">
      <TopBar />
      <MainNav />
    </header>
  );
};
