import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-background-dark text-slate-900">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[-8%] top-[-14%] h-[30rem] w-[30rem] rounded-full bg-primary/8 blur-[110px]" />
        <div className="absolute bottom-[-12%] right-[-6%] h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[96px]" />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
