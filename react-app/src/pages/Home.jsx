import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const emyLogo = "https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png";
const stepOneImg = "https://iqlance-demo.com/design/EMY-Web/img/step-one.png";
const stepTwoImg = "https://iqlance-demo.com/design/EMY-Web/img/step-two.png";
const stepThreeImg = "https://iqlance-demo.com/design/EMY-Web/img/step-three.png";
const heroVideo = "https://iqlance-demo.com/design/EMY-Web/img/reel-placeholder/landingvideo.mp4";

const primaryButton =
  "inline-flex items-center justify-center cursor-pointer rounded-xl bg-orange-500 px-8 py-4 text-base font-black text-white shadow-xl shadow-orange-500/25 transition duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-orange-500/35 active:translate-y-0";

const secondaryButton =
  "inline-flex items-center justify-center cursor-pointer rounded-xl border border-[#001B47]/10 bg-white/80 px-8 py-4 text-base font-black text-[#001B47] shadow-lg shadow-[#001B47]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600";

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src={emyLogo} alt="EMY" className="h-12 w-auto object-contain" />
      <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-orange-600">
        Beta
      </span>
    </div>
  );
}

function LineIcon({ type, className = "h-7 w-7" }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "chat") {
    return (
      <svg {...props}>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        <path d="M8 10h8" />
        <path d="M8 14h5" />
      </svg>
    );
  }

  if (type === "pin") {
    return (
      <svg {...props}>
        <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (type === "bolt") {
    return (
      <svg {...props}>
        <path d="M12 3l1.8 4.7L18 9l-4.2 1.3L12 15l-1.8-4.7L6 9l4.2-1.3L12 3z" />
      </svg>
    );
  }

  if (type === "bag") {
    return (
      <svg {...props}>
        <path d="M6 8h12l-1 13H7L6 8z" />
        <path d="M9 8a3 3 0 0 1 6 0" />
      </svg>
    );
  }

  if (type === "store") {
    return (
      <svg {...props}>
        <path d="M4 10h16" />
        <path d="M5 10l2-5h10l2 5" />
        <path d="M6 10v9h12v-9" />
        <path d="M9 19v-5h6v5" />
      </svg>
    );
  }

  if (type === "users") {
    return (
      <svg {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M12 2l2.8 6 6.2.8-4.6 4.5 1.2 6.4L12 16.5 6.4 19.7l1.2-6.4L3 8.8 9.2 8 12 2z" />
    </svg>
  );
}

function FloatingMenu({ items, defaultActive }) {
  const [active, setActive] = useState(defaultActive || items[0][0]);

  useEffect(() => {
    const onScroll = () => {
      let current = defaultActive || items[0][0];
      for (const [href] of items) {
        const element = document.querySelector(href);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 220 && rect.bottom > 120) current = href;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items, defaultActive]);

  return (
    <aside className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 opacity-30 transition-all duration-300 hover:opacity-100 lg:flex">
      <div className="flex min-w-[190px] flex-col gap-2 rounded-3xl border border-white/50 bg-white/75 p-3 shadow-2xl shadow-[#001B47]/10 backdrop-blur-2xl">
        {items.map(([href, label]) => {
          const isActive = active === href;
          return (
            <button key={href} type="button" onClick={() => smoothScroll(href)} className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-bold transition ${isActive ? "bg-orange-100 text-orange-600" : "text-[#001B47]/75 hover:bg-orange-50 hover:text-orange-600"}`}>
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full transition ${isActive ? "scale-125 bg-orange-500" : "bg-orange-300"}`} />
              <span className="whitespace-nowrap leading-none">{label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

function FloatingSideNav() {
  const items = useMemo(
    () => [
      ["#features", "Features"],
      ["#how", "How it works"],
      ["#business", "For Businesses"],
    ],
    []
  );
  return <FloatingMenu defaultActive="#how" items={items} />;
}

function HeroPhoneCard({ src, alt, label, className = "", imageClassName = "" }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative overflow-hidden rounded-[2.4rem] border border-white/80 bg-white/90 p-2 shadow-2xl shadow-orange-200/40 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:rotate-0">
        <img src={src} alt={alt} className={`w-full rounded-[1.9rem] object-cover ${imageClassName}`} />
        {label && (
          <div className="absolute left-4 top-4 rounded-full border border-orange-100 bg-white/95 px-4 py-2 text-xs font-black text-orange-500 shadow-lg">
            {label}
          </div>
        )}
      </div>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="relative min-h-[620px] lg:min-h-[720px]">
      <div className="absolute right-8 top-8 h-[500px] w-[500px] rounded-full bg-orange-300/45 blur-3xl" />
      <div className="absolute left-20 bottom-16 h-[260px] w-[260px] rounded-full bg-[#001B47]/10 blur-3xl" />
      <div className="absolute right-0 bottom-12 h-[180px] w-[180px] rounded-full bg-orange-500/25 blur-2xl" />
      <div className="absolute left-1/2 top-10 hidden h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-white/70 bg-white/20 backdrop-blur-sm lg:block" />

      <div className="absolute left-[8%] top-5 hidden h-20 w-20 rounded-full border border-dashed border-orange-300 lg:block" />
      <div className="absolute right-[16%] top-[10%] hidden h-5 w-5 rounded-full bg-orange-400 shadow-lg shadow-orange-400/40 lg:block" />
      <div className="absolute left-[58%] bottom-[13%] hidden h-8 w-8 rounded-full border-2 border-white bg-orange-200 shadow-lg lg:block" />

      <HeroPhoneCard
        src={stepOneImg}
        alt="EMY sign up screen"
        label="Sign up"
        className="left-0 top-20 z-10 hidden w-[210px] rotate-[-10deg] lg:block xl:left-8 xl:w-[235px]"
      />

      <HeroPhoneCard
        src={stepTwoImg}
        alt="EMY product dashboard screen"
        label="Explore nearby"
        className="left-1/2 top-4 z-30 w-[255px] -translate-x-1/2 rotate-[1deg] sm:w-[290px] lg:w-[330px] xl:w-[355px]"
      />

      <HeroPhoneCard
        src={stepThreeImg}
        alt="EMY verified profile screen"
        label="Verified"
        className="bottom-20 right-0 z-20 hidden w-[205px] rotate-[10deg] lg:block xl:right-4 xl:w-[235px]"
      />

      <Link to="/ask-emy" aria-label="About Ask EMY" className="absolute bottom-8 left-[8%] z-40 hidden max-w-[310px] rotate-[-3deg] rounded-[2rem] border border-white/80 bg-white/95 p-5 text-left shadow-2xl shadow-[#001B47]/10 backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-orange-200/40 lg:block">
        <div className="flex items-center gap-4">
          <span className="group relative flex h-20 w-20 shrink-0 items-center justify-center overflow-visible">
            <span className="pointer-events-none absolute bottom-full left-1/2 z-[80] mb-2 w-52 -translate-x-1/2 translate-y-2 rounded-2xl border border-orange-200 bg-white/95 px-3 py-2 text-left text-xs font-bold leading-snug text-[#001B47] opacity-0 shadow-xl shadow-[#001B47]/10 backdrop-blur transition group-hover:translate-y-0 group-hover:opacity-100">Hi, I'm EMY. Click me to find out more about me.</span>
            <svg className="h-20 w-20 animate-bounce drop-shadow-2xl transition group-hover:scale-110" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.9 8.1c.35-1.08 1.36-1.8 2.5-1.8h5.2c1.14 0 2.15.72 2.5 1.8l1.7 8.7c.35 1.78-1.01 3.45-2.82 3.45H8.02c-1.81 0-3.17-1.67-2.82-3.45l1.7-8.7Z" fill="#f76512" stroke="#cf5200" strokeLinejoin="round" strokeWidth="1" /><path d="M15.9 6.55c.58.35 1.02.9 1.2 1.55l1.7 8.7c.29 1.48-.6 2.88-1.96 3.32l-.98-.08c.74-.62 1.04-1.6.82-2.72l-1.25-6.7c-.28-1.5-.1-2.8.47-4.07Z" fill="#ad3e00" opacity=".2" /><path d="M6.35 10.05c2.15.62 4.02.48 5.66-.3 1.78-.85 3.62-.92 5.46-.22l.38 1.84c-2.32-.78-4.28-.63-6.04.22-1.62.78-3.45.9-5.78.28l.32-1.82Z" fill="#ffb067" opacity=".34" /><path d="M8.8 6.35c.32-1.92 1.42-3 3.2-3s2.88 1.08 3.2 3" stroke="#fff" strokeLinecap="round" strokeWidth="1.18" opacity=".9" /><path d="M9.25 13.2c.46-.36.92-.36 1.38 0" stroke="#fff" strokeLinecap="round" strokeWidth="1.02" opacity=".96" /><path d="M13.37 13.2c.46-.36.92-.36 1.38 0" stroke="#fff" strokeLinecap="round" strokeWidth="1.02" opacity=".96" /><path d="M9.8 15.82c1.34.94 3.06.94 4.4 0" stroke="#fff" strokeLinecap="round" strokeWidth="1.18" opacity=".96" /></svg>
          </span>
          <div>
            <p className="text-lg font-black text-[#001B47]">Ask EMY</p>
            <p className="text-sm leading-6 text-[#001B47]/60">What are you looking for today?</p>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-orange-100 bg-[#fff8ef] px-4 py-3 text-sm font-semibold text-[#001B47]/50">
          Ask anything...
          <span className="text-orange-500">→</span>
        </div>
      </Link>

      <div className="absolute bottom-8 right-8 z-40 hidden rounded-full border border-white/80 bg-white/95 px-6 py-4 shadow-xl shadow-orange-200/40 backdrop-blur-xl xl:flex">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
            <LineIcon type="users" className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-black text-[#001B47]">Trusted by communities</p>
            <p className="text-xs text-[#001B47]/55">Built for local discovery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RealisticCardImage({ card }) {
  return (
    <div className="relative h-72 overflow-hidden rounded-[2rem] bg-orange-100">
      <img src={card.image} alt={card.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#001B47]/90 via-[#001B47]/35 to-transparent" />
      <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-black text-orange-500 shadow-lg">{card.badge}</div>
      <div className="absolute right-4 top-4 flex flex-wrap justify-end gap-2">
        {card.chips.map((chip) => (
          <span key={chip} className="rounded-full bg-orange-500/95 px-3 py-1 text-[10px] font-black text-white shadow-md">
            {chip}
          </span>
        ))}
      </div>
      <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/50 bg-white/90 p-4 shadow-xl backdrop-blur-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black text-[#001B47]">{card.overlay}</p>
            <p className="mt-1 text-xs text-[#001B47]/55">On EMY</p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
            <LineIcon type="chat" className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ComingSoonModal({ action = "This feature", onClose }) {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#001B47]/75 px-4 backdrop-blur-md" onClick={onClose}>
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/95 p-7 text-center text-[#001B47] shadow-2xl backdrop-blur-2xl md:p-9" onClick={(event) => event.stopPropagation()}>
        <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_18%_12%,rgba(249,115,22,0.20),transparent_34%),radial-gradient(circle_at_90%_90%,rgba(0,27,71,0.12),transparent_36%)]" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-200/50 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#001B47]/10 blur-2xl" />

        <button type="button" onClick={onClose} className="absolute right-5 top-5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-white text-[#001B47] shadow-lg shadow-[#001B47]/10 ring-1 ring-orange-100 transition hover:bg-orange-100" aria-label="Close coming soon modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="relative z-10 flex justify-center">
          <Logo />
        </div>
        <h3 className="relative z-10 mt-5 text-3xl font-black leading-tight text-[#001B47]">{action} is coming soon</h3>
        <p className="relative z-10 mx-auto mt-4 max-w-sm text-base font-semibold leading-7 text-[#001B47]/65">
          We are still polishing this experience so it feels smooth, secure, and ready for everyone. Thank you for trying EMY while we build the next version.
        </p>

        <div className="relative z-10 mt-8 rounded-3xl border border-orange-100 bg-[#fff8ef] p-4 text-left">
          <p className="text-sm font-black text-[#001B47]">What is next?</p>
          <p className="mt-1 text-sm leading-6 text-[#001B47]/60">Account access, business onboarding, and profile tools will be available soon.</p>
        </div>

        <button type="button" onClick={onClose} className="relative z-10 mt-7 inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-orange-500 px-6 py-4 text-sm font-black text-white shadow-xl shadow-orange-500/25 transition hover:-translate-y-1 hover:bg-orange-600">
          Got it
        </button>
      </div>
    </div>
  );
}

function DownloadModal({ onClose }) {
  return (
    <div className="emy-fullscreen-cover fixed inset-0 z-[100] flex items-center justify-center bg-[#001B47]/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/95 p-7 text-[#001B47] shadow-2xl backdrop-blur-2xl md:p-9">
        <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.18),transparent_35%),radial-gradient(circle_at_85%_85%,rgba(0,27,71,0.12),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(249,115,22,0.16)_1px,transparent_1px),linear-gradient(0deg,rgba(249,115,22,0.16)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="relative z-10 flex items-center justify-between">
          <button type="button" onClick={onClose} className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-orange-100 text-[#001B47] shadow-sm transition hover:bg-orange-200" aria-label="Close download modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <Logo />
        </div>
        <div className="relative z-10 mt-10">
          <h3 className="text-3xl font-black text-[#001B47]">Download Our App</h3>
          <p className="mt-4 max-w-sm text-lg font-bold leading-8 text-[#001B47]/75">Try it now and transform the way you connect.</p>
        </div>
        <div className="relative z-10 mt-10 space-y-4">
          <StoreButton type="google" />
          <StoreButton type="apple" />
        </div>
        <p className="relative z-10 mx-auto mt-10 max-w-md text-center text-sm font-semibold leading-7 text-[#001B47]/60">
          By continuing, you acknowledge and agree to EMY&apos;s Legal Terms, which we recommend reviewing.
        </p>
      </div>
    </div>
  );
}

function StoreButton({ type }) {
  const isGoogle = type === "google";
  return (
    <a href="../emy-app-web/index.html" className="flex w-full items-center justify-center gap-4 rounded-2xl bg-[#001B47] px-6 py-4 text-white shadow-xl shadow-[#001B47]/15 transition hover:-translate-y-0.5 hover:bg-orange-600">
      {isGoogle ? (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center" aria-hidden="true">
          <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none">
            <path d="M8 6.6v34.8c0 1.8 1.9 2.9 3.4 1.9L30.2 24 11.4 4.7C9.9 3.7 8 4.8 8 6.6z" fill="#34A853" />
            <path d="M30.2 24 8 6.6c.1-.8.6-1.5 1.3-1.9.7-.4 1.5-.4 2.1 0L35.1 18 30.2 24z" fill="#4285F4" />
            <path d="M35.1 30 11.4 43.3c-.6.4-1.4.4-2.1 0-.7-.4-1.2-1.1-1.3-1.9L30.2 24l4.9 6z" fill="#FBBC05" />
            <path d="M39.3 21.6c1.7 1 1.7 3.8 0 4.8L35.1 30l-4.9-6 4.9-6 4.2 3.6z" fill="#EA4335" />
          </svg>
        </span>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.365 1.43c0 1.14-.466 2.21-1.243 2.97-.82.8-2.14 1.42-3.31 1.33-.15-1.11.44-2.3 1.22-3.08.85-.85 2.28-1.48 3.33-1.22zm4.27 16.23c-.77 1.77-1.7 3.53-3.14 3.57-1.4.04-1.85-.83-3.45-.83-1.6 0-2.1.83-3.48.86-1.43.05-2.52-1.8-3.29-3.56C5.64 14.8 4.4 10.7 6.14 7.72c.87-1.48 2.42-2.42 4.09-2.45 1.28-.03 2.5.86 3.28.86.78 0 2.24-1.06 3.77-.91.64.03 2.43.26 3.58 1.95-.09.06-2.13 1.24-2.1 3.7.03 2.93 2.57 3.9 2.6 3.92-.02.07-.4 1.38-1.3 2.71z" />
        </svg>
      )}
      <span className="text-left">
        <span className="block text-xs text-white/70">{isGoogle ? "Get it on" : "Download on the"}</span>
        <span className="block text-base font-black">{isGoogle ? "Google Play" : "App Store"}</span>
      </span>
    </a>
  );
}

function MarqueeStrip() {
  const items = ["Local discovery", "Ask EMY", "Nearby businesses", "Direct messaging", "Smart services", "Community first"];

  return (
    <section className="relative overflow-hidden bg-[#fff8ef] py-8">
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(90deg,#fff8ef,transparent_16%,transparent_84%,#fff8ef)]" />
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-4 pr-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-full border border-white/70 bg-white/75 px-6 py-3 text-sm font-black text-[#001B47] shadow-lg shadow-[#001B47]/5 backdrop-blur-2xl"
          >
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
            <span className="whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(100vw); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}

const features = [
  { type: "chat", title: "Interact naturally", desc: "Ask questions and connect directly with local businesses." },
  { type: "pin", title: "Find nearby", desc: "Discover local shops, services, and businesses around you." },
  { type: "bolt", title: "Ask EMY", desc: "Ask EMY to find businesses and services faster." },
  { type: "bag", title: "Support local", desc: "Build stronger connections with nearby small businesses." },
];

const stats = [
  { type: "store", value: "Local", label: "Businesses" },
  { type: "users", value: "Nearby", label: "Customers" },
  { type: "chat", value: "Direct", label: "Conversations" },
  { type: "star", value: "Smart", label: "Discovery" },
];

const ecosystemCards = [
  {
    title: "For customers",
    subtitle: "Discover local shops near you",
    text: "Explore nearby shops, see what they offer, ask questions, and connect directly with business owners in your area.",
    image: "https://iqlance-demo.com/design/EMY-Web/img/trust-pics.png",
    badge: "Customer view",
    overlay: "Local shop nearby • See what they offer",
    chips: ["Nearby", "Open now", "Message"],
  },
  {
    title: "For businesses",
    subtitle: "Connect with real local customers",
    text: "Reach people around your business, understand what they care about, and keep communication direct and simple.",
    image: "https://iqlance-demo.com/design/EMY-Web/img/gatway-one.jpg",
    badge: "Business view",
    overlay: "People nearby discovering your business",
    chips: ["Customers", "Insights", "Messages"],
  },
  {
    title: "Ask EMY",
    subtitle: "Find services and support faster",
    text: "Ask EMY helps customers and businesses discover the right local shops, services, and opportunities without searching endlessly.",
    image: "https://iqlance-demo.com/design/EMY-Web/img/new_img/5.%20Financial%20Advice.jpg",
    badge: "AI support",
    overlay: "Ask EMY: Find what you need around you",
    chips: ["AI", "Services", "Fast"],
  },
];

function HomePage() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [comingSoonAction, setComingSoonAction] = useState(null);

  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#001B47] antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{``}</style>

      <FloatingSideNav />

      <main>
        <section className="relative isolate overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-44">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_28%,rgba(249,115,22,0.22),transparent_30%),radial-gradient(circle_at_12%_16%,rgba(0,27,71,0.10),transparent_28%),linear-gradient(115deg,#fffaf4_0%,#fff4e8_46%,#ffe3c4_100%)]" />

          <div className="absolute bottom-0 right-0 top-0 z-0 hidden w-[64%] overflow-hidden lg:block">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-75"
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff8ef_0%,rgba(255,248,239,0.92)_10%,rgba(255,248,239,0.60)_28%,rgba(255,248,239,0.24)_54%,rgba(255,248,239,0.08)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,248,239,0.54)_0%,rgba(255,248,239,0.08)_36%,rgba(255,248,239,0.10)_66%,#fff8ef_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_34%,rgba(249,115,22,0.20),transparent_34%),radial-gradient(circle_at_92%_68%,rgba(0,27,71,0.12),transparent_32%)]" />
          </div>

          <div className="absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent to-[#fff8ef]" />
          <div className="absolute left-[clamp(25rem,12vw,12rem)] top-28 z-10 block rounded-full border border-white/60 bg-white/55 px-5 py-3 text-xl font-semibold text-[#001B47]/70 shadow-xl shadow-[#001B47]/5 backdrop-blur">
            Modern local discovery
          </div>

          <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full border border-white/60 bg-white/70 px-5 py-2 text-xl font-semibold uppercase tracking-[0.22em] text-orange-500 shadow-lg shadow-[#001B47]/5 backdrop-blur">
                Ask. Discover. Connect.
              </p>
              <h1 className="mt-7 text-7xl text-start font-extrabold leading-[1.5] tracking-tight text-[#001B47] md:text-7xl">
                Find nearby.<br />Ask instantly.<br /><span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Connect locally.</span>
              </h1>
              <p className="mt-8 max-w-xl text-xl leading-8 text-[#001B47]/85">
                EMY connects people with local businesses in real time. Discover nearby shops, interact directly, and use Ask EMY to find what you need faster.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button type="button" onClick={() => smoothScroll("#business")} className={primaryButton}>Businesses: find out more <span className="ml-3">→</span></button>
                <button type="button" onClick={() => setIsDownloadOpen(true)} className={secondaryButton}>Download app</button>
              </div>
            </div>
            <HeroIllustration />
          </div>

          <div id="features" className="relative z-10 mx-auto mt-[100px] max-w-7xl rounded-[2.5rem] border border-white/60 bg-white/75 p-5 shadow-2xl shadow-[#001B47]/10 backdrop-blur-2xl">
            <div className="grid gap-4 md:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.title} className="group flex gap-4 rounded-3xl p-4 transition duration-300 hover:-translate-y-1 hover:bg-orange-50 hover:shadow-lg hover:shadow-orange-900/5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white">
                    <LineIcon type={feature.type} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#001B47]">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#001B47]/55">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="relative overflow-hidden bg-[#fff8ef] px-6 py-24 text-center">
          <div className="absolute left-1/2 top-8 h-56 w-56 -translate-x-1/2 rounded-full bg-orange-300/25 blur-3xl animate-pulse" />
          <div className="absolute -left-20 bottom-6 h-48 w-48 rounded-full bg-[#001B47]/10 blur-3xl" />
          <div className="absolute -right-20 top-16 h-48 w-48 rounded-full bg-orange-400/15 blur-3xl" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(249,115,22,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(249,115,22,0.10)_1px,transparent_1px)] bg-[size:46px_46px]" />

          <div className="relative mx-auto max-w-6xl">
            <p className="inline-flex rounded-full border border-white/60 bg-white/80 px-6 py-3 text-xl font-semi text-[#001B47] shadow-lg shadow-[#001B47]/5 backdrop-blur transition duration-500 hover:-translate-y-1 hover:text-orange-600 hover:shadow-xl">
              Trusted by local businesses and loved by customers
            </p>

            <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-xl shadow-[#001B47]/5 backdrop-blur-2xl transition duration-500 hover:-translate-y-3 hover:border-orange-200 hover:bg-white hover:shadow-2xl hover:shadow-[#001B47]/10"
                  style={{ animation: `floatIn 0.7s ease-out ${index * 0.12}s both` }}
                >
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_20%,rgba(249,115,22,0.18),transparent_55%)]" />
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-300/20 transition duration-500 group-hover:scale-150 group-hover:bg-orange-400/25" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 shadow-inner transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#001B47] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#001B47]/20">
                      <LineIcon type={stat.type} className="h-9 w-9 transition duration-500 group-hover:scale-110" />
                    </div>
                    <p className="mt-5 text-3xl font-black text-[#001B47] transition duration-500 group-hover:text-orange-600">{stat.value}</p>
                    <p className="mt-1 text-sm font-bold text-[#001B47]/60 transition duration-500 group-hover:text-[#001B47]">{stat.label}</p>
                    <div className="mt-5 h-1 w-10 rounded-full bg-orange-200 transition-all duration-500 group-hover:w-16 group-hover:bg-orange-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes floatIn {
              from {
                opacity: 0;
                transform: translateY(28px) scale(0.96);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          `}</style>
        </section>

        <MarqueeStrip />

        <section className="bg-white px-6 pb-24 pt-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-3xl font-bold uppercase tracking-[0.22em] text-orange-500">EMY ecosystem</p>
              <h2 className="mt-3 text-4xl font-black text-[#001B47]">How EMY works</h2>
              <p className="mt-5 text-xl font-semibold leading-8 text-[#001B47]/65">See how people discover businesses, how businesses connect with customers, and how Ask EMY helps along the way.</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {ecosystemCards.map((card) => (
                <div key={card.title} className="group rounded-[2.5rem] border border-orange-100 bg-[#fffaf5] p-4 shadow-xl shadow-[#001B47]/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#001B47]/10">
                  <RealisticCardImage card={card} />
                  <div className="p-4">
                    <p className="text-sm font-bold uppercase tracking-wide text-orange-500">{card.title}</p>
                    <h3 className="mt-2 text-xl font-semibold text-[#001B47]">{card.subtitle}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#001B47]/60">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="business" className="bg-white px-6 py-20 text-center">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-orange-100 bg-gradient-to-br from-[#fff8ef] to-white p-8 shadow-2xl shadow-[#001B47]/5 md:p-12">
            <h2 className="text-4xl font-bold text-[#001B47]">Built for customers and small businesses</h2>
            <p className="mt-5 max-w-4xl mx-auto text-xl font-semibold leading-8 text-[#001B47]/65">
              Customers can discover and interact with businesses around them. Businesses can reach local customers, understand what they like, communicate directly, and find services from other providers on EMY.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[["store", "Financial"], ["bolt", "IT Support"], ["pin", "Logistics"], ["users", "Suppliers"]].map(([type, label]) => (
                <div key={label} className="flex flex-col items-center gap-3 rounded-3xl bg-white/80 p-5 shadow-lg shadow-[#001B47]/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                    <LineIcon type={type} className="h-8 w-8" />
                  </div>
                  <p className="text-xs font-black text-[#001B47]/75">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xl font-semibold text-[#001B47]/50">Explore services available through EMY</p>
            <button type="button" onClick={() => setIsDownloadOpen(true)} className={primaryButton + " mt-8"}>Businesses: find out more</button>
          </div>
        </section>

        <section id="join" className="relative overflow-hidden px-6 py-24 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001B47] via-[#08285f] to-orange-600" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent_40%)]" />
          <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-400/30 blur-3xl" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-xl font-bold uppercase tracking-[0.22em] text-orange-100">Get the app</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">We did it for you.</h2>
            <p className="mt-5 text-2xl font-semibold text-white/75">Discover nearby businesses, connect directly, and access services all from your phone.</p>
            <button type="button" onClick={() => setIsDownloadOpen(true)} className="mt-10 inline-flex cursor-pointer items-center justify-center rounded-2xl bg-white px-8 py-4 text-xl font-black text-[#001B47] shadow-xl shadow-[#001B47]/20 transition hover:-translate-y-1 hover:bg-orange-50 hover:text-orange-600">
              Download the app
            </button>
          </div>
        </section>

        {isDownloadOpen && <DownloadModal onClose={() => setIsDownloadOpen(false)} />}
        {comingSoonAction && <ComingSoonModal action={comingSoonAction} onClose={() => setComingSoonAction(null)} />}

      </main>
    </div>
  );
}

export default function Home() {
  return <HomePage />;
}
