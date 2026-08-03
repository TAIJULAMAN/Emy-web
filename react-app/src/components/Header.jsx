import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src="https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png" alt="EMY" className="h-10 w-auto object-contain" />
      <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-orange-600">Beta</span>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e, hash) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 border-b border-white/40 bg-white/90 backdrop-blur transition-all duration-300 ${scrolled ? "shadow-xl shadow-[#001B47]/8" : "shadow-none"}`}>
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="cursor-pointer" aria-label="Go to homepage">
          <Logo />
        </Link>

        <div className="hidden items-center gap-2 sm:flex">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="cursor-pointer rounded-full px-4 py-2 text-xl font-bold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">
            Home
          </Link>
          <Link to="/about" className="cursor-pointer rounded-full px-4 py-2 text-xl font-bold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">
            About
          </Link>
          <Link to="/business" className="cursor-pointer rounded-full px-4 py-2 text-xl font-bold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">
            Business
          </Link>

          <Link to="/ask-emy" className="cursor-pointer rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-xl font-bold text-orange-600 shadow-sm transition hover:border-orange-300 hover:bg-orange-100 hover:-translate-y-0.5">
            Ask EMY
          </Link>

          <Link to="/contact" className="cursor-pointer rounded-full px-4 py-2 text-xl font-bold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">
            Contact
          </Link>
          <Link to="/faqs" className="cursor-pointer rounded-full px-4 py-2 text-xl font-bold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">
            FAQs
          </Link>

          <div className="ml-2 flex items-center gap-3 border-l border-[#001B47]/10 pl-4">
            <Link to="/sign-in" className="cursor-pointer rounded-full border border-[#001B47]/10 bg-white px-6 py-2 text-xl font-bold text-[#001B47] shadow-sm backdrop-blur transition hover:border-[#001B47]/20 hover:bg-gray-50 hover:-translate-y-0.5">
              Sign In
            </Link>
            <Link to="/sign-up" className="cursor-pointer rounded-full bg-orange-500 px-6 py-2 text-xl font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 hover:-translate-y-0.5">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
