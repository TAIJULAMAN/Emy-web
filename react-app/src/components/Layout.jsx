import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/sign-in' || location.pathname === '/sign-up';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main className={hideHeaderFooter ? "flex flex-col flex-1" : "min-h-screen pt-[72px] flex flex-col"}>
        {children}
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
