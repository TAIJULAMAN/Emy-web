import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src="https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png" alt="EMY" className="h-12 w-30 object-contain" />
      <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-orange-600">Beta</span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#fff7ef] px-6 py-16" id="contact">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-[1600px] rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur-xl shadow-[#001B47]/5 backdrop-blur md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-md text-xl leading-7 text-[#001B47]/70">
              EMY helps people discover nearby businesses, interact directly, and explore services in their local area.
              <br />
              <span className="font-semibold text-orange-500">We did it for you.</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-orange-100 px-4 py-2 text-base font-bold text-orange-500">Local discovery</span>
              <span className="rounded-full bg-orange-100 px-4 py-2 text-base font-bold text-orange-500">Ask EMY</span>
              <span className="rounded-full bg-orange-100 px-4 py-2 text-base font-bold text-orange-500">Business support</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold uppercase tracking-wide text-[#001B47]">Support</h3>
            <ul className="mt-5 space-y-3 text-xl text-[#001B47]/70">
              <li><Link to="/terms" className="hover:text-orange-500">Terms of Use</Link></li>
              <li><Link to="/privacy" className="hover:text-orange-500">Privacy Policy</Link></li>
              <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500">Contact Support</Link></li>
              <li><Link to="/faqs" className="hover:text-orange-500">FAQs</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-orange-100 pt-6 text-center text-xl text-[#001B47]/55">
          © MY-EMY.COM Ltd. All Rights reserved.
        </div>
      </div>
    </footer>
  );
}
