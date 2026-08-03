import React, { useEffect, useMemo, useRef, useState } from "react";









const emyLogo = "https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png";

const inputClass =
  "w-full rounded-2xl border border-[#001B47]/10 bg-white/85 px-5 py-4 text-sm font-semibold text-[#001B47] outline-none backdrop-blur transition placeholder:text-[#001B47]/35 focus:border-orange-400 focus:bg-white focus:shadow-lg focus:shadow-orange-500/10";

function Logo() {
  return <img src={emyLogo} alt="EMY" className="h-12 w-auto object-contain" />;
}

function LineIcon({ type, className = "h-6 w-6" }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "mail") {
    return (
      <svg {...props}>
        <path d="M4 4h16v16H4z" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg {...props}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.62 2.65a2 2 0 0 1-.45 2.11L8 9.76a16 16 0 0 0 6.24 6.24l1.28-1.28a2 2 0 0 1 2.11-.45c.85.29 1.74.5 2.65.62A2 2 0 0 1 22 16.92z" />
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

  if (type === "chat") {
    return (
      <svg {...props}>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        <path d="M8 10h8" />
        <path d="M8 14h5" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M12 2l2.8 6 6.2.8-4.6 4.5 1.2 6.4L12 16.5 6.4 19.7l1.2-6.4L3 8.8 9.2 8 12 2z" />
    </svg>
  );
}

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function FloatingMenu() {
  const items = [
    { href: "#contact-hero", label: "Contact" },
    { href: "#contact-footer", label: "Support" },
  ];

  return (
    <aside className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 opacity-25 transition-all duration-300 hover:opacity-100 lg:flex">
      <div className="flex min-w-[170px] flex-col gap-2 rounded-2xl border border-white/50 bg-white/80 p-3 shadow-2xl shadow-[#001B47]/10 backdrop-blur-xl">
        {items.map((item) => (
          <button
            key={item.href}
            type="button"
            onClick={() => smoothScroll(item.href)}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600"
          >
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-orange-300" />
            <span className="whitespace-nowrap leading-none">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/50 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5">
        <a href="index.html" aria-label="Go to homepage">
          <Logo />
        </a>

        <nav className="hidden items-center gap-3 sm:flex">
          <a href="index.html" className="rounded-full px-5 py-2 text-sm font-bold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">
            Home
          </a>
          <a href="about.html" className="rounded-full px-5 py-2 text-sm font-bold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">
            About
          </a>
          <a href="contact.html" className="rounded-full px-5 py-2 text-sm font-bold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">
            Contact
          </a>
          <a href="#login" className="rounded-full border border-[#001B47]/10 bg-white/80 px-6 py-2 text-sm font-bold text-[#001B47] shadow-sm backdrop-blur transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600">
            Sign In
          </a>
          <a href="#signup" className="rounded-full bg-orange-500 px-6 py-2 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600">
            Sign up
          </a>
        </nav>
      </div>
    </header>
  );
}

function ContactInfoCard({ icon, title, text, detail }) {
  return (
    <div className="group rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-xl shadow-[#001B47]/5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-[#001B47]/10">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
        <LineIcon type={icon} />
      </div>
      <h3 className="mt-5 text-lg font-black text-[#001B47]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#001B47]/60">{text}</p>
      <p className="mt-4 text-sm font-black text-orange-500">{detail}</p>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Contact form submitted", form);
    alert("Message submitted. This demo currently logs the form data to the browser console.");
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-2xl shadow-[#001B47]/10 backdrop-blur-2xl md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#001B47]/60">Full name</label>
          <input className={inputClass} placeholder="Your name" value={form.name} onChange={(e) => updateField("name", e.target.value)} />
        </div>
        <div>
          <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#001B47]/60">Email address</label>
          <input className={inputClass} type="email" placeholder="you@example.com" value={form.email} onChange={(e) => updateField("email", e.target.value)} />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#001B47]/60">What can we help with?</label>
        <select className={inputClass} value={form.topic} onChange={(e) => updateField("topic", e.target.value)}>
          <option value="">Select a topic</option>
          <option value="customer">I am a customer</option>
          <option value="business">I am a business</option>
          <option value="partnership">Partnership enquiry</option>
          <option value="support">Support request</option>
        </select>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#001B47]/60">Message</label>
        <textarea className={`${inputClass} min-h-[170px] resize-none`} placeholder="Tell us how we can help..." value={form.message} onChange={(e) => updateField("message", e.target.value)} />
      </div>

      <button type="submit" className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-2xl bg-orange-500 px-8 py-4 text-sm font-black text-white shadow-xl shadow-orange-500/25 transition hover:-translate-y-1 hover:bg-orange-600">
        Send message <span className="ml-3">→</span>
      </button>
    </form>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#fff7ef] px-6 py-16" id="contact-footer">
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
              <li><a href="about.html" className="hover:text-orange-500">About Us</a></li>
              <li><a href="contact.html" className="hover:text-orange-500">Contact Support</a></li>
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

function EMYContactPage() {
  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#001B47] antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{``}</style>
      
      <FloatingMenu />

      <main>
        <section id="contact-hero" className="relative isolate overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_18%,rgba(249,115,22,0.28),transparent_28%),radial-gradient(circle_at_12%_18%,rgba(0,27,71,0.10),transparent_28%),linear-gradient(115deg,#fffaf4_0%,#fff4e8_48%,#ffe4c6_100%)]" />
          <div className="absolute right-0 top-20 -z-10 h-[680px] w-[52%] rounded-l-[7rem] bg-gradient-to-br from-white/35 via-orange-200/35 to-orange-500/20 backdrop-blur" />
          

          <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="inline-flex rounded-full border border-white/60 bg-white/75 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-orange-500 shadow-lg shadow-[#001B47]/5 backdrop-blur">
                Contact EMY
              </p>
              <h1 className="mt-7 max-w-2xl text-5xl font-black leading-[1.03] tracking-tight text-[#001B47] md:text-7xl">
                Let’s build better local connections.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#001B47]/65">
                Have a question about EMY, business support, partnerships, or the app? Send us a message and our team will help point you in the right direction.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <ContactInfoCard icon="mail" title="Email us" text="For general questions and support enquiries." detail="support@my-emy.com" />
                <ContactInfoCard icon="chat" title="Business support" text="For shops, services, and local providers joining EMY." detail="For businesses" />
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

        <section id="contact-info" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-6 md:grid-cols-3">
              <ContactInfoCard icon="phone" title="Quick response" text="Send a clear message and we will get back to you as soon as possible." detail="Fast support" />
              <ContactInfoCard icon="pin" title="Local first" text="EMY is designed around nearby customers, shops, and service providers." detail="Community focused" />
              <ContactInfoCard icon="mail" title="Partnerships" text="Interested in working with EMY or exploring a collaboration?" detail="Partner with us" />
            </div>
          </div>
        </section>

        <section id="contact-cta" className="relative overflow-hidden px-6 py-24 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://iqlance-demo.com/design/EMY-Web/img/gatway-three.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001B47]/85 via-[#08285f]/80 to-orange-600/75" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent_40%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-100">Ready to connect?</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              EMY helps local businesses and customers find each other faster.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              Tell us what you need and we’ll help you take the next step.
            </p>
          </div>
        </section>

        
      </main>
    </div>
  );
}



export default EMYContactPage;
