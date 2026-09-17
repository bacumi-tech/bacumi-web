import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-background-dark text-strong">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden layout-grid-overlay" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[-8%] top-[-14%] h-[28rem] w-[28rem] rounded-full bg-primary/6 blur-[100px]" />
        <div className="absolute bottom-[-12%] right-[-6%] h-[22rem] w-[22rem] rounded-full bg-accent/8 blur-[90px]" />
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
