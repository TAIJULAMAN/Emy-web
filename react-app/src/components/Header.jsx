import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

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
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Business', path: '/business' }
  ];

  const secondaryLinks = [
    { name: 'Contact', path: '/contact' },
    { name: 'FAQs', path: '/faqs' }
  ];

  const baseLinkClass = "cursor-pointer rounded-full px-4 py-2 text-xl font-bold transition hover:bg-orange-50 hover:text-orange-600";
  const activeClass = "bg-orange-50 text-orange-600";
  const inactiveClass = "text-[#001B47]";

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 border-b border-white/40 bg-white/90 backdrop-blur transition-all duration-300 ${scrolled ? "shadow-xl shadow-[#001B47]/8" : "shadow-none"}`}>
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="cursor-pointer" aria-label="Go to homepage">
          <Logo />
        </Link>

        <div className="hidden items-center gap-2 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => window.scrollTo(0, 0)}
              className={`${baseLinkClass} ${location.pathname === link.path ? activeClass : inactiveClass}`}
            >
              {link.name}
            </Link>
          ))}

          <Link to="/ask-emy" className={`cursor-pointer rounded-full border px-5 py-2 text-xl font-bold shadow-sm transition hover:-translate-y-0.5 ${location.pathname === '/ask-emy' ? 'border-orange-300 bg-orange-100 text-orange-700' : 'border-orange-200 bg-orange-50 text-orange-600 hover:border-orange-300 hover:bg-orange-100'}`}>
            Ask EMY
          </Link>

          {secondaryLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${baseLinkClass} ${location.pathname === link.path ? activeClass : inactiveClass}`}
            >
              {link.name}
            </Link>
          ))}

          <div className="ml-2 flex items-center gap-3 border-l border-[#001B47]/10 pl-4">
            {currentUser ? (
              <div className="group relative flex items-center gap-3 rounded-full border border-orange-100 bg-orange-50 p-1.5 pr-4 transition hover:bg-orange-100">
                <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm bg-orange-200 flex items-center justify-center">
                  {currentUser.avatarUrl ? (
                    <img src={currentUser.avatarUrl} alt={currentUser.firstName} className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-lg font-bold text-orange-700 uppercase">{currentUser.firstName?.[0]}{currentUser.lastName?.[0]}</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#001B47] leading-tight">{currentUser.firstName}</span>
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">{currentUser.role}</span>
                </div>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-[calc(100%+8px)] hidden w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-xl group-hover:block">
                  <button 
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                    className="w-full rounded-lg px-4 py-2 text-left text-sm font-bold text-red-600 transition hover:bg-red-50"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link to="/sign-in" className="cursor-pointer rounded-full border border-[#001B47]/10 bg-white px-6 py-2 text-xl font-bold text-[#001B47] shadow-sm backdrop-blur transition hover:border-[#001B47]/20 hover:bg-gray-50 hover:-translate-y-0.5">
                  Sign In
                </Link>
                <Link to="/sign-up" className="cursor-pointer rounded-full bg-orange-500 px-6 py-2 text-xl font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 hover:-translate-y-0.5">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
