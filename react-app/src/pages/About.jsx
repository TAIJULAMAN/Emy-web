import React, { useEffect, useMemo, useRef, useState } from "react";









const FOUNDER_IMAGE_URL = "https://iqlance-demo.com/design/EMY-Web/img/aboutus/isaac_stephane.jpg";
const emyLogo = "https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png";
const EMY_NAVY = "#001B47";

function Logo() {
  return <img src={emyLogo} alt="EMY" className="h-12 w-auto object-contain" />;
}

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
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

  return (
    <svg {...props}>
      <path d="M4 10h16" />
      <path d="M5 10l2-5h10l2 5" />
      <path d="M6 10v9h12v-9" />
      <path d="M9 19v-5h6v5" />
    </svg>
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
        <button type="button" onClick={() => smoothScroll("#about-hero")} className="cursor-pointer" aria-label="Go to top">
          <Logo />
        </button>

        <nav className="hidden items-center gap-3 sm:flex" aria-label="Main navigation">
          <button type="button" onClick={() => smoothScroll("#about-hero")} className="cursor-pointer rounded-full px-5 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-50">
            Home
          </button>
          <button type="button" onClick={() => smoothScroll("#about-world")} className="cursor-pointer rounded-full px-5 py-2 text-sm font-semibold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">
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

function FloatingMenu() {
  const items = useMemo(
    () => [
      ["#about-world", "It’s Your World"],
      ["#about-who", "Who We Are"],
      ["#about-what", "What We Do"],
      ["#about-team", "Our Team"],
    ],
    []
  );
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
      <div className="flex min-w-[190px] flex-col gap-2 rounded-2xl border border-white/50 bg-white/80 p-3 shadow-2xl backdrop-blur-xl shadow-[#001B47]/10 backdrop-blur">
        {items.map(([href, label]) => {
          const isActive = active === href;
          return (
            <button
              key={href}
              type="button"
              onClick={() => smoothScroll(href)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${isActive ? "bg-orange-100 text-orange-600" : "text-[#001B47] hover:bg-orange-50 hover:text-orange-600"}`}
            >
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full transition ${isActive ? "scale-125 bg-orange-600" : "bg-orange-300"}`} />
              <span className="whitespace-nowrap leading-none">{label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

function StorySection({ id, title, text, image, accent, reverse = false, bullets = [], background = "white" }) {
  const isWorld = id === "about-world";
  const isWho = id === "about-who";

  return (
    <section id={id} className={`relative overflow-hidden px-6 py-28 ${background}`}>
      <style>{`
        @keyframes emyFloatSoft {
          0%, 100% { transform: translateY(0) rotate(var(--emy-rotate, 0deg)); }
          50% { transform: translateY(-10px) rotate(var(--emy-rotate, 0deg)); }
        }
      `}</style>
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(249,115,22,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(249,115,22,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
      <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

      {(isWorld || isWho) && (
        <>
          <div style={{ "--emy-rotate": "-4deg", animation: "emyFloatSoft 6s ease-in-out infinite" }} className="hidden lg:block absolute left-[5%] top-[10%] w-40 rounded-2xl bg-white p-3 shadow-xl transition hover:scale-105">
            <img alt="Local shops" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=60" className="h-20 w-full object-cover rounded-xl" />
            <p className="mt-2 text-xs font-bold text-orange-500">Local shops</p>
          </div>

          <div style={{ "--emy-rotate": "4deg", animation: "emyFloatSoft 7s ease-in-out infinite 0.8s" }} className="hidden lg:block absolute right-[6%] top-[20%] w-40 rounded-2xl bg-white p-3 shadow-xl transition hover:scale-105">
            <img alt="Suppliers" src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=400&q=60" className="h-20 w-full object-cover rounded-xl" />
            <p className="mt-2 text-xs font-bold text-orange-500">Suppliers</p>
          </div>

          <div style={{ "--emy-rotate": "3deg", animation: "emyFloatSoft 6.5s ease-in-out infinite 0.4s" }} className="hidden lg:block absolute left-[12%] bottom-[8%] w-44 rounded-2xl bg-white p-3 shadow-xl transition hover:scale-105">
            <img alt="Delivery" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=400&q=60" className="h-20 w-full object-cover rounded-xl" />
            <p className="mt-2 text-xs font-bold text-orange-500">Delivery</p>
          </div>

          <div style={{ "--emy-rotate": "-3deg", animation: "emyFloatSoft 7.5s ease-in-out infinite 1s" }} className="hidden lg:block absolute right-[18%] bottom-[6%] w-40 rounded-2xl bg-white p-3 shadow-xl transition hover:scale-105">
            <img alt="Support" src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=400&q=60" className="h-20 w-full object-cover rounded-xl" />
            <p className="mt-2 text-xs font-bold text-orange-500">Support</p>
          </div>
        </>
      )}

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className={reverse ? "group md:order-2" : "group"}>
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[#001B47]/10">
              <img src={image} alt={title} loading="lazy" className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-3 text-sm font-black text-orange-500 shadow-lg backdrop-blur">
                {accent}
              </div>
            </div>
          </div>

          <div className={reverse ? "md:order-1" : ""}>
            <p className="text-sm font-black uppercase tracking-wide text-orange-500">About EMY</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#001B47] md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-[#001B47]/70">{text}</p>

            {bullets.length > 0 && (
              <div className="mt-8 grid gap-3">
                {bullets.map((bullet, index) => (
                  <div key={bullet} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm transition hover:shadow-md">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-black text-orange-600">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold leading-7 text-[#001B47]">{bullet}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section id="about-team" className="relative overflow-visible bg-white px-6 pb-28 pt-12">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(249,115,22,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(249,115,22,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl" />
      <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="flex justify-center">
          <div className="relative z-20 mt-0">
            <div className="relative">
              <img
                src={FOUNDER_IMAGE_URL}
                alt="Isaac Stephane"
                className="h-80 w-80 rounded-[2rem] object-cover shadow-[0_25px_70px_rgba(0,0,0,0.25)] md:h-[440px] md:w-[440px]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm font-black uppercase tracking-wide text-orange-500">Founder & CEO</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#001B47] md:text-5xl">Isaac Stephane</h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#001B47]/70">
            Founder and CEO of EMY, building a smarter local business ecosystem that connects customers, small businesses, service providers, suppliers, and communities.
          </p>
          <a href="/team" className="mt-8 inline-flex items-center justify-center rounded-xl bg-orange-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-orange-600/25 transition hover:bg-orange-700">
            Meet the full team →
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#fff7ef] px-6 py-16" id="contact">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px] rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur-xl shadow-[#001B47]/5 backdrop-blur md:p-10">
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
              <li><a href="#about-world" className="hover:text-orange-500">About Us</a></li>
              <li><a href="#contact" className="hover:text-orange-500">Contact Support</a></li>
              <li><a href="faqs.html" className="hover:text-orange-500">FAQs</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-orange-100 pt-6 text-center text-sm text-[#001B47]/55">
          © MY-EMY.COM Ltd. All Rights reserved.
        </div>
      </div>
    </footer>
  );
}

function AboutPageOnly() {
  const heroImages = useMemo(
    () => [
      "https://images.unsplash.com/photo-1507914372368-b2b085b925a1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=80",
    ],
    []
  );

  const [activeAboutImage, setActiveAboutImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveAboutImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [heroImages.length]);

  const storySections = [
    {
      id: "about-world",
      title: "It’s Your World",
      text: "EMY helps people, customers, and small businesses connect with the local world around them. We make discovery, communication, and access to support easier in one ecosystem.",
      image: heroImages[0],
      accent: "Discovery starts locally",
      background: "bg-white",
    },
    {
      id: "about-who",
      title: "Who We Are",
      text: "We are building the future of connection for small businesses, helping them access the right services, tools, customers, and support to grow with confidence.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      accent: "People, services, and businesses",
      reverse: true,
      background: "bg-[#fff4ea]",
      bullets: [
        "Connect with trusted service providers",
        "Discover solutions tailored to your business",
        "Simplify daily communication",
        "Grow with smarter insights and support",
      ],
    },
    {
      id: "about-what",
      title: "What We Do",
      text: "EMY connects small businesses with customers, service providers, and tools they need to grow and succeed in a changing world.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
      accent: "Built for small shops & local businesses",
      background: "bg-[#fff3e6]",
      bullets: [
        "Match businesses with trusted service providers",
        "Help customers discover nearby businesses",
        "Unlock insights to improve performance",
        "Support growth with tailored solutions",
      ],
    },
  ];

  const miniCards = [
    ["store", "Small shops", "Make local businesses easier to discover."],
    ["pin", "Nearby discovery", "Help people find what is around them."],
    ["chat", "Direct connection", "Bring customers and businesses closer."],
    ["bolt", "Ask EMY", "Make finding support faster and easier."],
  ];

  return (
    <div className="min-h-screen bg-[#fff7ef] font-['Public_Sans',sans-serif] text-[#001B47]">
      <style>{``}</style>
      
      <FloatingMenu />

      <main className="pt-28">
        <section id="about-hero" className="relative isolate overflow-hidden px-6 py-20 md:py-28">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_22%,rgba(255,148,65,0.30),transparent_28%),linear-gradient(115deg,#fffaf4_0%,#fff3e7_48%,#ffe2c4_100%)]" />
          <div className="absolute inset-0 -z-10 opacity-30 bg-[linear-gradient(90deg,rgba(249,115,22,0.15)_1px,transparent_1px),linear-gradient(0deg,rgba(249,115,22,0.12)_1px,transparent_1px)] bg-[size:42px_42px]" />

          <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-orange-500">About EMY</p>
              <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Business connection for the local world.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#001B47]/70">
                EMY is creating a smarter ecosystem where customers discover nearby businesses, businesses connect with customers, and service providers become easier to reach.
              </p>
            </div>

            <div className="relative min-h-[520px]">
              <div className="absolute right-8 top-8 h-80 w-80 rounded-[4rem] bg-gradient-to-br from-[#001B47] via-orange-500 to-orange-600 shadow-2xl shadow-[#001B47]/25" />
              <img
                src={heroImages[activeAboutImage]}
                alt="Business owners connecting"
                loading="eager"
                className="absolute left-0 top-16 h-80 w-[78%] rounded-[2rem] object-cover shadow-2xl transition-all duration-500"
              />
              <div className="absolute left-[82%] top-32 flex flex-col items-center gap-3">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveAboutImage(index)}
                    className={`h-12 w-1 cursor-pointer rounded-full ${activeAboutImage === index ? "bg-orange-500" : "bg-neutral-300"}`}
                    aria-label={`Show image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#fffaf5] px-6 py-16">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,rgba(255,120,40,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,120,40,0.2),transparent_40%)]" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(249,115,22,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(249,115,22,0.12)_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative mx-auto grid max-w-[1440px] gap-6 md:grid-cols-4">
            {miniCards.map(([type, title, text]) => (
              <div key={title} className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-xl backdrop-blur-xl shadow-[#001B47]/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.4),transparent_60%)]" />
                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                    <LineIcon type={type} />
                  </div>
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#001B47]/70">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {storySections.map((section) => (
          <StorySection key={section.id} {...section} />
        ))}

        <FounderSection />
        
      </main>
    </div>
  );
}



export default AboutPageOnly;
