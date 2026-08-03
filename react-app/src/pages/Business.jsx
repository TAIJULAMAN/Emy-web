import React, { useEffect, useMemo, useRef, useState } from "react";









const emyLogo = "https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png";
const videoUrl = "https://iqlance-demo.com/design/EMY-Web/img/reel-placeholder/landingvideo.mp4";

const imageFor = (query) => `https://source.unsplash.com/900x700/?${encodeURIComponent(query)}`;

const heroShopImages = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=90",
];

const solutionImages = {
  logistics: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=90",
  legal: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=90",
  payment: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=90",
  suppliers: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=90",
  retail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=90",
  marketing: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=90",
};

const steps = [
  {
    title: "Create an Account",
    text: "Join EMY and get instant access to essential tools and services tailored for small businesses. Creating your account is the first step towards transforming your business.",
    image: "https://iqlance-demo.com/design/EMY-Web/img/step-one.png",
    icon: "account",
  },
  {
    title: "Complete Verification",
    text: "Secure your account with a quick verification process. We ensure your business information is safe and ready to connect with our network of services.",
    image: "https://iqlance-demo.com/design/EMY-Web/img/step-two.png",
    icon: "verification",
  },
  {
    title: "Grow Your Business",
    text: "Use EMY services and insights to enhance customer engagement and drive business growth.",
    image: "https://iqlance-demo.com/design/EMY-Web/img/step-three.png",
    icon: "growth",
  },
];

const directServices = [
  {
    icon: "users",
    title: "Insights into Customer Behaviour",
    bullets: ["Behavioural analytics", "Market segmentation", "Trend analysis", "Personalisation", "Customer journey mapping"],
  },
  {
    icon: "truck",
    title: "Logistics",
    bullets: ["Reliable transportation", "Real-time tracking", "Cost-effective solutions", "Sustainable practices", "Flexible delivery options"],
  },
  {
    icon: "store",
    title: "Suppliers",
    bullets: ["Wide supplier network", "Quality assurance", "Negotiation support", "Supplier relationship management", "Sourcing alternatives"],
  },
  {
    icon: "shield",
    title: "Legal Support",
    bullets: ["Contract management", "Compliance guidance", "Dispute resolution", "Intellectual property protection", "Employment law support"],
  },
  {
    icon: "card",
    title: "Financial Advice",
    bullets: ["Budget planning", "Investment strategies", "Tax planning", "Credit management", "Risk assessment"],
  },
];

const accessServices = [
  {
    icon: "store",
    title: "Retail Tech Solutions Providers",
    bullets: ["Advanced point-of-sale systems", "Inventory management", "E-commerce integration", "Customer data analytics", "Security features"],
  },
  {
    icon: "users",
    title: "Customer Experience Enhancement",
    bullets: ["Personalised marketing", "Loyalty programmes", "Customer feedback tools", "Omnichannel support", "Engagement analytics"],
  },
  {
    icon: "truck",
    title: "Supply Chain Optimisation",
    bullets: ["Efficient logistics", "Inventory automation", "Supplier collaboration", "Cost reduction", "Demand forecasting"],
  },
  {
    icon: "card",
    title: "Payment and Checkout Solutions",
    bullets: ["Seamless integration", "Secure transactions", "Multi-channel payments", "Fast checkout processes", "Fraud prevention"],
  },
  {
    icon: "spark",
    title: "IT Solutions",
    bullets: ["Cybersecurity", "Data management", "Tech support", "Cloud services", "System integration"],
  },
];

function Logo() {
  return <img src={emyLogo} alt="EMY" className="h-12 w-auto object-contain" />;
}

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Icon({ type = "spark", className = "h-6 w-6" }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    check: <path d="M20 6 9 17l-5-5" />,
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    wave: <path d="M4 12c2.5-3 5-3 7.5 0s5 3 7.5 0" />,
    truck: (
      <>
        <path d="M3 7h11v10H3z" />
        <path d="M14 11h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </>
    ),
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    card: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      </>
    ),
    store: (
      <>
        <path d="M4 10h16" />
        <path d="M5 10l2-5h10l2 5" />
        <path d="M6 10v9h12v-9" />
      </>
    ),
    spark: <path d="M12 3l1.8 4.7L18 9l-4.2 1.3L12 15l-1.8-4.7L6 9l4.2-1.3L12 3z" />,
  };

  return <svg {...props}>{icons[type] || icons.spark}</svg>;
}

function StepIcon({ type }) {
  const navyStroke = "#001B47";
  const orangeStroke = "#ff5a00";

  const icons = {
    account: (
      <>
        <circle cx="25" cy="20" r="5.5" stroke={navyStroke} strokeWidth="3" />
        <path d="M15.5 37c.7-7.1 5.2-10.8 9.5-10.8 2.3 0 4.4.9 6 2.7" stroke={navyStroke} strokeWidth="3" strokeLinecap="round" />
        <path d="M39 28v12M33 34h12" stroke={orangeStroke} strokeWidth="3" strokeLinecap="round" />
      </>
    ),
    verification: (
      <>
        <circle cx="28" cy="28" r="12" stroke={navyStroke} strokeWidth="3" />
        <path d="M22 28.5 26 32.5 36.5 22" stroke={orangeStroke} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M39.5 17.5h4M41.5 15.5v4" stroke={navyStroke} strokeWidth="2.4" strokeLinecap="round" />
      </>
    ),
    growth: (
      <>
        <path d="M15 39h28" stroke={navyStroke} strokeWidth="3" strokeLinecap="round" />
        <path d="M18 33l8-8 6 5 11-13" stroke={orangeStroke} strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 17h9v9" stroke={orangeStroke} strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  };

  return (
    <div className="mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#f7f9fd]">
      <svg viewBox="0 0 56 56" className="h-10 w-10" fill="none" aria-hidden="true">
        {icons[type] || icons.account}
      </svg>
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 border-b border-white/40 bg-white/75 backdrop-blur-xl transition-all duration-300 ${scrolled ? "shadow-lg shadow-[#001B47]/10" : "shadow-none"}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6">
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer" aria-label="Go to top">
          <Logo />
        </button>

        <nav className="hidden items-center gap-3 sm:flex" aria-label="Main navigation">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer rounded-full px-5 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-50">
            Home
          </button>
          <button type="button" onClick={() => smoothScroll("#gateway")} className="cursor-pointer rounded-full px-5 py-2 text-sm font-semibold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">
            About
          </button>
          <a href="#contact" className="cursor-pointer rounded-full px-5 py-2 text-sm font-semibold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">
            Contact
          </a>
          <a href="#login" className="cursor-pointer rounded-full border border-orange-200 bg-white/80 px-6 py-2 text-sm font-semibold text-[#001B47] shadow-sm transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600">
            Sign In
          </a>
          <a href="#signup" className="cursor-pointer rounded-full bg-orange-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700">
            Sign up
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const solutions = [
    { title: "Logistics partner", text: "Fast delivery support", image: solutionImages.logistics, badge: "Delivery", style: "from-orange-600/95 via-orange-500/45 to-transparent", extra: "24h delivery" },
    { title: "Legal advisor", text: "Contracts & compliance", image: solutionImages.legal, badge: "Protection", style: "from-[#001B47]/95 via-[#001B47]/45 to-transparent", extra: "VIEW" },
    { title: "Payment expert", text: "Checkout solutions", image: solutionImages.payment, badge: "Payments", style: "from-emerald-900/90 via-emerald-700/35 to-transparent", extra: "Secure" },
    { title: "Supplier network", text: "Verified partners", image: solutionImages.suppliers, badge: "Suppliers", style: "from-purple-900/90 via-purple-600/35 to-transparent", extra: "Verified" },
    { title: "Retail support", text: "Store optimisation", image: solutionImages.retail, badge: "Retail", style: "from-amber-900/90 via-orange-500/35 to-transparent", extra: "VIEW" },
    { title: "Marketing help", text: "Grow your reach", image: solutionImages.marketing, badge: "Growth", style: "from-pink-900/90 via-rose-500/35 to-transparent", extra: "+32% reach" },
  ];

  useEffect(() => {
    const intervalId = window.setInterval(() => setBgIndex((prev) => (prev + 1) % heroShopImages.length), 4500);
    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSlideIndex((current) => {
        const next = (current + 1) % solutions.length;
        if (sliderRef.current) sliderRef.current.scrollTo({ left: next * sliderRef.current.clientWidth, behavior: "smooth" });
        return next;
      });
    }, 3600);
    return () => window.clearInterval(intervalId);
  }, [solutions.length]);

  const moveSlider = (direction) => {
    setSlideIndex((current) => {
      const next = (current + direction + solutions.length) % solutions.length;
      if (sliderRef.current) sliderRef.current.scrollTo({ left: next * sliderRef.current.clientWidth, behavior: "smooth" });
      return next;
    });
  };

  return (
    <section className="relative isolate min-h-[820px] overflow-hidden px-6 pb-20 pt-36 text-white md:pt-44">
      <div className="absolute inset-0 -z-30 grid grid-cols-2 grid-rows-2 gap-0 bg-orange-100">
        {heroShopImages.map((src, i) => (
          <img key={src} src={src} alt="Small business" className={`h-full w-full object-cover transition duration-1000 ${bgIndex === i ? "scale-105 opacity-100" : "opacity-80"}`} />
        ))}
      </div>
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#001B47]/70 via-[#001B47]/35 to-orange-500/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.62fr_0.38fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white px-6 py-2 text-sm font-bold text-[#001B47] shadow-lg">Built for small businesses</span>
          <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.22] tracking-normal text-white md:text-6xl">Connect your business<br />with essential services<br />— fast.</h1>
          <p className="mt-8 max-w-3xl text-base font-semibold leading-8 text-white md:text-lg">EMY helps small businesses discover trusted providers for logistics, suppliers, legal support, financial advice, IT solutions, and more — all in one place.</p>
          <div className="mt-16 grid max-w-4xl gap-5 sm:grid-cols-2">
            {[["Trusted network", "Verified providers"], ["Smart matching", "Recommendations that fit"], ["Simple onboarding", "Start in minutes"]].map(([title, text], i) => (
              <div key={title} className={`rounded-xl border border-neutral-200 bg-white p-6 shadow-xl shadow-black/15 ${i === 2 ? "sm:col-span-2" : ""}`}>
                <h3 className="text-xl font-bold text-[#001B47]">{title}</h3>
                <p className="mt-2 text-base font-normal text-neutral-500">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 hidden lg:block">
          <div className="relative ml-auto max-w-[460px] overflow-hidden rounded-[2rem] bg-white p-6 text-[#001B47] shadow-2xl shadow-black/25">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[3rem] bg-orange-100" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-orange-50" />
            <div className="relative z-10">
              <div className="mb-6 flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-500">Business matching</p>
                  <h3 className="mt-2 text-2xl font-bold leading-tight text-[#001B47]">Find trusted support</h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/25">
                  <Icon type="spark" />
                </div>
              </div>
              <div className="relative">
                <div ref={sliderRef} className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-[1.75rem] bg-gradient-to-br from-white via-[#fff7ef] to-orange-50 p-2 shadow-inner shadow-orange-200/40">
                  {solutions.map((item, index) => (
                    <div key={item.title} className="min-w-full snap-start px-1">
                      <div className="group relative h-[280px] overflow-hidden rounded-[1.5rem] bg-neutral-900 shadow-2xl shadow-black/20 ring-1 ring-white/40 transition duration-700 hover:-translate-y-1">
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-110" />
                        <div className={`absolute inset-0 bg-gradient-to-t ${item.style}`} />
                        <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/85 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-orange-600 shadow-lg backdrop-blur-xl">{item.badge}</div>
                        <div className="absolute right-4 top-4 rounded-xl bg-white/90 px-3 py-2 text-xs font-black text-[#001B47] shadow">{item.extra}</div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="mb-4 flex gap-1.5">
                            {solutions.map((_, dot) => (
                              <span key={dot} className={`h-1.5 rounded-full transition-all duration-500 ${dot === index ? "w-8 bg-white" : "w-2 bg-white/35"}`} />
                            ))}
                          </div>
                          <p className="text-2xl font-black leading-tight tracking-tight">{item.title}</p>
                          <p className="mt-1 text-base font-semibold text-white/85">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button type="button" onClick={() => moveSlider(-1)} className="absolute -left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-2xl font-black text-[#001B47] shadow-xl shadow-black/15 backdrop-blur transition hover:scale-105 hover:bg-white">‹</button>
                <button type="button" onClick={() => moveSlider(1)} className="absolute -right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-2xl font-black text-[#001B47] shadow-xl shadow-black/15 backdrop-blur transition hover:scale-105 hover:bg-white">›</button>
              </div>
              <div className="mt-5 rounded-2xl border border-orange-100 bg-[#001B47] p-5 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-orange-300"><Icon type="check" className="h-5 w-5" /></div>
                  <div>
                    <p className="font-bold">Smart recommendation</p>
                    <p className="mt-1 text-sm leading-6 text-white/75">“Here are providers that match your current business need.”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gateway() {
  const cards = [
    { icon: "users", title: "Comprehensive network", text: "Access an extensive network of businesses and providers." },
    { icon: "spark", title: "Tailored solutions", text: "Get recommendations that match your business needs." },
    { icon: "wave", title: "Real-time support", text: "Get help as you explore and connect with providers." },
  ];

  return (
    <section id="gateway" className="relative overflow-hidden px-6 py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fff7ef] via-white to-[#eef4ff]" />
      <div className="mx-auto max-w-[1440px]">
        <div className="mt-8">
          <h2 className="text-4xl font-black text-[#001B47] md:text-6xl">Your Gateway to Trusted Business Services</h2>
          <p className="mt-4 max-w-xl text-lg text-neutral-600">Find the right partners faster — a platform designed for real small business needs.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-orange-100 bg-white p-6 shadow-xl shadow-orange-950/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500"><Icon type={card.icon} /></div>
              <h3 className="mt-4 text-lg font-bold text-[#001B47]">{card.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);
  const step = steps[index];

  const changeStep = (getNextIndex) => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setIsVisible(false);
    timeoutRef.current = window.setTimeout(() => {
      setIndex((currentIndex) => getNextIndex(currentIndex));
      setIsVisible(true);
    }, 260);
  };

  const prevStep = () => changeStep((currentIndex) => (currentIndex + steps.length - 1) % steps.length);
  const nextStep = () => changeStep((currentIndex) => (currentIndex + 1) % steps.length);

  useEffect(() => {
    const intervalId = window.setInterval(() => changeStep((currentIndex) => (currentIndex + 1) % steps.length), 5000);
    return () => {
      window.clearInterval(intervalId);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section id="steps" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[0.9fr_1.05fr_1fr]">
        <div className="lg:pr-6">
          <h2 className="max-w-sm text-3xl font-black leading-tight text-[#001B47] md:text-4xl">Create an Account in 3 Easy Steps:</h2>
          <p className="mt-4 max-w-sm text-base font-semibold leading-7 text-[#8a90ad]">Join our platform effortlessly—just three simple steps to get started and unlock a world of opportunities for your business.</p>
        </div>
        <div className={`flex justify-center transition-all duration-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
          <img src={step.image} alt={step.title} className="h-[500px] w-full max-w-[360px] object-contain md:h-[560px] lg:h-[600px]" />
        </div>
        <div className={`lg:pl-4 transition-all duration-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
          <p className="text-lg font-black text-orange-500">Step {index + 1}</p>
          <StepIcon type={step.icon} />
          <h3 className="mt-8 text-3xl font-black leading-tight text-[#001B47] md:text-4xl">{step.title}</h3>
          <p className="mt-4 max-w-md text-base font-semibold leading-7 text-[#8a90ad]">{step.text}</p>
          <div className="mt-8 flex gap-4">
            <button type="button" onClick={prevStep} aria-label="Previous step" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e2e6f0] bg-white text-2xl font-light text-[#001B47] transition hover:border-orange-400 hover:text-orange-500">‹</button>
            <button type="button" onClick={nextStep} aria-label="Next step" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e2e6f0] bg-white text-2xl font-light text-[#001B47] transition hover:border-orange-400 hover:text-orange-500">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoPreview() {
  return (
    <section className="relative flex h-[520px] items-center overflow-hidden bg-[#001B47]">
      <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#001B47]/70 via-[#001B47]/30 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 text-white">
        <h2 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl">See how EMY connects your business</h2>
        <p className="mt-4 max-w-xl text-lg text-white/85">Discover services, connect with providers, and grow faster — all in one place.</p>
      </div>
    </section>
  );
}

function FeatureMiniVisual({ item, index }) {
  const palettes = [
    { bg: "from-orange-50 via-white to-amber-100", icon: "bg-orange-500", chip: "bg-orange-100 text-orange-600", glow: "bg-orange-300/40" },
    { bg: "from-blue-50 via-white to-sky-100", icon: "bg-[#001B47]", chip: "bg-blue-100 text-blue-700", glow: "bg-blue-300/35" },
    { bg: "from-emerald-50 via-white to-teal-100", icon: "bg-emerald-500", chip: "bg-emerald-100 text-emerald-700", glow: "bg-emerald-300/35" },
    { bg: "from-purple-50 via-white to-fuchsia-100", icon: "bg-purple-500", chip: "bg-purple-100 text-purple-700", glow: "bg-purple-300/35" },
    { bg: "from-rose-50 via-white to-orange-100", icon: "bg-rose-500", chip: "bg-rose-100 text-rose-700", glow: "bg-rose-300/35" },
  ];
  const palette = palettes[index % palettes.length];

  return (
    <div className={`relative mt-5 h-32 overflow-hidden rounded-2xl bg-gradient-to-br ${palette.bg} p-4`}>
      <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full ${palette.glow} blur-2xl`} />
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative z-10 flex h-full items-center justify-between gap-4">
        <div className={`feature-float flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${palette.icon} text-white shadow-xl`}>
          <Icon type={item.icon || "spark"} className="h-7 w-7" />
        </div>
        <div className="grid flex-1 gap-2">
          <div className={`feature-chip w-fit rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wide ${palette.chip}`}>{item.bullets[0]}</div>
          <div className="h-2 w-4/5 rounded-full bg-white/80 shadow-sm" />
          <div className="h-2 w-3/5 rounded-full bg-white/70 shadow-sm" />
          <div className="flex gap-2 pt-1">
            <span className="h-7 w-7 rounded-full bg-white shadow-sm" />
            <span className="h-7 w-7 rounded-full bg-white/80 shadow-sm" />
            <span className="h-7 w-7 rounded-full bg-white/60 shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselSection({ id, eyebrow, title, subtitle, items, reverse = false }) {
  const marqueeItems = [...items, ...items];

  return (
    <section id={id} className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? <p className="font-black uppercase tracking-wide text-orange-500">{eyebrow}</p> : null}
          <h2 className="mt-3 text-4xl font-black text-[#001B47]">{title}</h2>
          {subtitle ? <p className="mt-4 text-lg leading-8 text-neutral-600">{subtitle}</p> : null}
        </div>
        <div className="marquee-wrap relative mt-12 overflow-hidden">
          <div className={`services-marquee flex w-max gap-5 py-4 ${reverse ? "services-marquee-reverse" : ""}`}>
            {marqueeItems.map((item, index) => (
              <div key={`${item.title}-${index}`} className="feature-card group relative w-[300px] shrink-0 overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white p-5 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-950/10 md:w-[320px]">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-transparent to-blue-50/80 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-black leading-tight text-[#001B47]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-500">{item.bullets[0]}</p>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#001B47] text-white shadow-lg shadow-blue-950/10 transition group-hover:rotate-6 group-hover:bg-orange-500">
                      <Icon type={item.icon || "spark"} className="h-5 w-5" />
                    </div>
                  </div>
                  <FeatureMiniVisual item={item} index={index} />
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.bullets.slice(1, 4).map((bullet) => (
                      <span key={bullet} className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-bold text-neutral-600 transition group-hover:bg-orange-100 group-hover:text-orange-600">{bullet}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}

function ShopIllustration({ type }) {
  const icon = type === "hardware" ? "card" : type === "cafe" ? "store" : type === "boutique" ? "spark" : type === "daycare" ? "users" : "store";
  const accent = { retail: "bg-blue-100", boutique: "bg-pink-100", cafe: "bg-amber-100", daycare: "bg-sky-100", hardware: "bg-slate-100" }[type] || "bg-orange-100";

  return (
    <div className="relative h-16 overflow-hidden rounded-xl bg-gradient-to-br from-white to-orange-50/70 ring-1 ring-orange-100">
      <div className="absolute left-3 top-4 h-8 w-12 rounded-md bg-white shadow ring-1 ring-neutral-100">
        <div className="h-2 rounded-t-md bg-[#001B47]" />
        <div className="mx-2 mt-2 h-1 rounded-full bg-neutral-200" />
        <div className="mx-2 mt-1 h-1 w-6 rounded-full bg-orange-200" />
      </div>
      <div className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl ${accent} text-orange-500 shadow-sm ring-1 ring-white`}>
        <Icon type={icon} className="h-4 w-4" />
      </div>
      {type === "cafe" && (
        <div className="absolute bottom-2 right-8 h-5 w-6 rounded-b-lg rounded-t-sm bg-white shadow ring-1 ring-orange-100">
          <div className="absolute -right-1.5 top-1.5 h-3 w-2 rounded-r-full border-2 border-orange-300" />
        </div>
      )}
    </div>
  );
}

function IndustrySection() {
  const cards = [
    { type: "retail", title: "Retail Stores", text: "Checkout, stock and customer support." },
    { type: "boutique", title: "Boutiques", text: "Fashion, POS and online sales." },
    { type: "cafe", title: "Cafés & Restaurants", text: "Food, payments and delivery help." },
    { type: "daycare", title: "Daycare & Toy Shops", text: "Compliance, finance and marketing." },
    { type: "hardware", title: "Hardware & Plumbing", text: "Bookings, suppliers and trade support." },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fffaf5] px-6 py-16">
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-wide text-orange-500">Business types</p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-[#001B47] md:text-4xl">Built for Every Small Business</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-neutral-600">Simple support for shops, cafés and local services.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card) => (
            <div key={card.title} className="industry-card group rounded-2xl border border-orange-100 bg-white p-4 shadow-lg shadow-orange-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <ShopIllustration type={card.type} />
              <h3 className="mt-4 text-base font-black leading-tight text-[#001B47]">{card.title}</h3>
              <p className="mt-2 text-xs font-semibold leading-5 text-neutral-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustedNetwork() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20">
      <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-100/60 blur-3xl" />
      <div className="mx-auto max-w-[1440px]">
        <div className="grid overflow-hidden rounded-[2rem] border border-orange-100 bg-[#fff7ef] shadow-2xl shadow-orange-950/5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-wide text-orange-500">We did it for you</p>
            <h2 className="mt-3 max-w-lg text-4xl font-black leading-tight text-[#001B47] md:text-5xl">The trusted network is already built.</h2>
            <p className="mt-5 max-w-md text-base font-semibold leading-7 text-neutral-600">Verified partners, tailored matches, and live support — ready when your business needs them.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[["01", "Verified"], ["02", "Matched"], ["03", "Supported"]].map(([num, label]) => (
                <div key={label} className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-orange-100">
                  <p className="text-xs font-black text-orange-500">{num}</p>
                  <p className="mt-1 font-black text-[#001B47]">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px] bg-white/50 p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(249,115,22,0.16),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(0,27,71,0.10),transparent_32%)]" />
            <img src="https://iqlance-demo.com/design/EMY-Web/img/trust-pics.png" alt="Trusted business network" className="relative z-10 h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SideNav() {
  const items = useMemo(() => [["#gateway", "About"], ["#steps", "Steps"], ["#services", "Services"]], []);
  const [active, setActive] = useState(items[0][0]);

  useEffect(() => {
    const onScroll = () => {
      let current = items[0][0];
      items.forEach(([href]) => {
        const element = document.querySelector(href);
        if (!element) return;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 220 && rect.bottom > 120) current = href;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <aside className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 opacity-25 transition-all duration-300 hover:opacity-100 lg:flex">
      <div className="flex min-w-[190px] flex-col gap-2 rounded-2xl border border-white/50 bg-white/80 p-3 shadow-2xl shadow-[#001B47]/10 backdrop-blur-xl">
        {items.map(([href, label]) => {
          const isActive = active === href;
          return (
            <button key={href} type="button" onClick={() => smoothScroll(href)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${isActive ? "bg-orange-100 text-orange-600" : "text-[#001B47] hover:bg-orange-50 hover:text-orange-600"}`}>
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full transition ${isActive ? "scale-125 bg-orange-600" : "bg-orange-300"}`} />
              <span className="whitespace-nowrap leading-none">{label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#fff7ef] px-6 py-16" id="contact">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px] rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-2xl shadow-[#001B47]/5 backdrop-blur-xl md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-md text-sm leading-7 text-[#001B47]/70">
              EMY helps people discover nearby businesses, interact directly, and explore services in their local area.
              <br />
              <span className="font-semibold text-orange-500">We did it for you.</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-bold text-orange-500">Local discovery</span>
              <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-bold text-orange-500">Ask EMY</span>
              <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-bold text-orange-500">Business support</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide text-[#001B47]">Support</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#001B47]/70">
              <li><a href="terms.html" className="hover:text-orange-500">Terms of Use</a></li>
              <li><a href="privacy.html" className="hover:text-orange-500">Privacy Policy</a></li>
              <li><a href="#gateway" className="hover:text-orange-500">About Us</a></li>
              <li><a href="#contact" className="hover:text-orange-500">Contact Support</a></li>
              <li><a href="faqs.html" className="hover:text-orange-500">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-orange-100 pt-6 text-center text-sm text-[#001B47]/55">© MY-EMY.COM Ltd. All Rights reserved.</div>
      </div>
    </footer>
  );
}

function EMYPage() {
  return (
    <div className="emy-page min-h-screen bg-white text-neutral-950">
      <style>{`
        .emy-page, .emy-page * { font-family: 'Inter', Arial, Helvetica, sans-serif !important; }
        @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes featureFloat { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-6px) rotate(3deg); } }
        @keyframes chipPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.04); } }
        .services-marquee { animation: marqueeScroll 35s linear infinite; }
        .services-marquee-reverse { animation-direction: reverse; }
        .marquee-wrap:hover .services-marquee { animation-play-state: paused; }
        .feature-card:hover .feature-float { animation: featureFloat 2.4s ease-in-out infinite; }
        .feature-card:hover .feature-chip { animation: chipPulse 1.8s ease-in-out infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      <SideNav />
      <main>
        <Hero />
        <Gateway />
        <Steps />
        <VideoPreview />
        <CarouselSection id="services" eyebrow="Services We Provide" title="Direct access Services" subtitle="Connect directly with service providers essential for your business operations." items={directServices} />
        <CarouselSection title="Business Access Services" subtitle="Find comprehensive business support services." items={accessServices} reverse />
        <IndustrySection />
        <TrustedNetwork />
      </main>
      
    </div>
  );
}



export default EMYPage;
