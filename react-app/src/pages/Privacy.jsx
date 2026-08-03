import React, { useEffect, useMemo, useRef, useState } from "react";









const emyLogo = "https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png";
const privacyImage = "https://iqlance-demo.com/design/EMY-Web/img/aboutus/our-workplace.jpg";

const privacyBackgroundStyle = {
  backgroundImage: "url(https://iqlance-demo.com/design/EMY-Web/img/aboutus/our-workplace.jpg)",
};

function Logo() {
  return <img src={emyLogo} alt="EMY" className="h-12 w-auto object-contain" />;
}

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/50 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5">
        <a href="index.html" aria-label="Go to homepage">
          <Logo />
        </a>

        <nav className="hidden items-center gap-3 sm:flex" aria-label="Main navigation">
          <a href="index.html" className="rounded-full px-5 py-2 text-sm font-bold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">Home</a>
          <a href="about.html" className="rounded-full px-5 py-2 text-sm font-bold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">About</a>
          <a href="contact.html" className="rounded-full px-5 py-2 text-sm font-bold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">Contact</a>
          <a href="#login" className="rounded-full border border-[#001B47]/10 bg-white/80 px-6 py-2 text-sm font-bold text-[#001B47] shadow-sm backdrop-blur transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600">Sign In</a>
          <a href="#signup" className="rounded-full bg-orange-500 px-6 py-2 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600">Sign up</a>
        </nav>
      </div>
    </header>
  );
}

function FloatingMenu() {
  const items = [
    { href: "#privacy-overview", label: "Overview" },
    { href: "#privacy-data", label: "Data" },
    { href: "#privacy-rights", label: "Rights" },
    { href: "#privacy-details", label: "Details" },
    { href: "#privacy-support", label: "Support" },
  ];

  return (
    <aside className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 opacity-25 transition-all duration-300 hover:opacity-100 lg:flex">
      <div className="flex min-w-[170px] flex-col gap-2 rounded-2xl border border-white/50 bg-white/80 p-3 shadow-2xl shadow-[#001B47]/10 backdrop-blur-xl">
        {items.map((item) => (
          <button key={item.href} type="button" onClick={() => smoothScroll(item.href)} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[#001B47] transition hover:bg-orange-50 hover:text-orange-600">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-orange-300" />
            <span className="whitespace-nowrap leading-none">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#fff7ef] px-6 py-16">
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
              <li><a href="privacy.html" className="font-bold text-orange-500">Privacy Policy</a></li>
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

const privacyHighlights = [
  ["What we collect", "Account details, contact information, business profiles, messages, location signals, device data, usage activity, and content you choose to share."],
  ["Why we use it", "To run EMY, help people discover nearby businesses, improve recommendations, protect the platform, support users, and provide business tools."],
  ["Who may receive it", "Businesses you interact with, trusted service providers, payment partners, analytics tools, security providers, and authorities where required by law."],
];

const dataCategories = [
  {
    label: "Account data",
    examples: "Name, email, phone number, login details, preferences, and support history.",
  },
  {
    label: "Business data",
    examples: "Business name, services, opening hours, images, offers, categories, and contact information.",
  },
  {
    label: "Location data",
    examples: "Approximate or precise location where permission is granted, IP-based location, and nearby search activity.",
  },
  {
    label: "Usage data",
    examples: "Searches, clicks, pages viewed, device type, browser type, cookies, analytics, and performance logs.",
  },
  {
    label: "User content",
    examples: "Reviews, ratings, messages, enquiries, comments, uploaded images, and profile information.",
  },
  {
    label: "Transaction data",
    examples: "Subscription status, billing records, invoices, payment confirmations, and purchase history where applicable.",
  },
];

const userRights = [
  "Ask for a copy of your personal information.",
  "Correct inaccurate or incomplete account details.",
  "Request deletion of certain personal information.",
  "Object to or restrict certain forms of processing.",
  "Manage cookies, location permissions, and marketing choices.",
  "Contact EMY about privacy concerns or data requests.",
];

const privacySections = [
  {
    title: "Legal basis and lawful use",
    text: "EMY processes personal information where it is necessary to provide the service, perform a contract, protect legitimate business interests, comply with legal obligations, prevent fraud, improve safety, or where users have given consent for specific features such as location access or marketing communications.",
  },
  {
    title: "Business interactions",
    text: "When a user contacts, messages, books, reviews, or interacts with a business through EMY, relevant information may be shared with that business so they can respond, provide services, manage enquiries, or complete the requested interaction.",
  },
  {
    title: "AI and recommendations",
    text: "EMY may use automated tools, search technology, and AI-supported systems to suggest businesses, services, content, or support responses. These systems may use profile data, activity, location signals, and preferences to improve relevance and user experience.",
  },
  {
    title: "Cookies and analytics",
    text: "EMY may use cookies, pixels, analytics tools, and similar technologies to remember preferences, measure performance, improve services, support security, and understand how users interact with the platform. Users can manage cookies through their browser settings.",
  },
  {
    title: "Payments and subscriptions",
    text: "Where EMY enables payments, subscriptions, bookings, promotions, or paid business features, payment information may be processed by trusted third-party payment providers. EMY may retain billing records, invoices, subscription status, and transaction references.",
  },
  {
    title: "Security and retention",
    text: "EMY uses reasonable technical and organisational measures to protect personal information. Data is kept only for as long as reasonably necessary to provide services, comply with legal obligations, resolve disputes, prevent misuse, and maintain business records.",
  },
  {
    title: "International transfers",
    text: "EMY may use cloud providers, technology partners, or service providers located in different countries. Where data is transferred internationally, EMY will take reasonable steps to protect it in accordance with applicable data protection laws.",
  },
  {
    title: "Children and minors",
    text: "EMY is not intended for children below the minimum legal age required to use the platform. We do not knowingly collect personal information from children without proper consent. If we become aware of this, we may delete the information.",
  },
  {
    title: "Policy updates",
    text: "EMY may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements, or business operations. The latest version will be made available on this page.",
  },
];

function HighlightCard({ title, text }) {
  return (
    <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-xl shadow-[#001B47]/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-lg font-black text-orange-500">✓</div>
      <h3 className="mt-5 text-xl font-black text-[#001B47]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#001B47]/70">{text}</p>
    </div>
  );
}

function DataCard({ label, examples }) {
  return (
    <div className="rounded-[1.5rem] border border-orange-100 bg-white p-5 shadow-lg shadow-[#001B47]/5">
      <p className="text-sm font-black uppercase tracking-wide text-orange-500">{label}</p>
      <p className="mt-3 text-sm leading-7 text-[#001B47]/70">{examples}</p>
    </div>
  );
}

function DetailRow({ title, text }) {
  return (
    <article className="grid gap-4 border-b border-orange-100 py-7 md:grid-cols-[0.35fr_0.65fr]">
      <h3 className="text-lg font-black text-[#001B47]">{title}</h3>
      <p className="text-sm leading-7 text-[#001B47]/70 md:text-base">{text}</p>
    </article>
  );
}

function PrivacyTestPanel() {
  const tests = [
    { name: "Privacy highlights exist", passed: privacyHighlights.length === 3 },
    { name: "Data categories exist", passed: dataCategories.length === 6 },
    { name: "User rights exist", passed: userRights.length === 6 },
    { name: "Detailed sections exist", passed: privacySections.length === 9 },
  ];

  return (
    <div className="mt-8 hidden rounded-[1.5rem] border border-orange-100 bg-white p-5 text-sm shadow-lg">
      <h3 className="font-black text-[#001B47]">Component checks</h3>
      <ul className="mt-3 space-y-2">
        {tests.map((test) => (
          <li key={test.name} className="text-[#001B47]/70">
            {test.passed ? "Pass" : "Fail"}: {test.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EMYPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#001B47] antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{""}</style>
      
      <FloatingMenu />

      <main>
        <section id="privacy-overview" className="relative isolate overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_18%,rgba(249,115,22,0.28),transparent_28%),radial-gradient(circle_at_12%_18%,rgba(0,27,71,0.10),transparent_28%),linear-gradient(115deg,#fffaf4_0%,#fff4e8_48%,#ffe4c6_100%)]" />
          <div className="absolute right-0 top-20 -z-10 h-[680px] w-[52%] rounded-l-[7rem] bg-gradient-to-br from-white/35 via-orange-200/35 to-orange-500/20 backdrop-blur" />

          <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="inline-flex rounded-full border border-white/60 bg-white/75 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-orange-500 shadow-lg shadow-[#001B47]/5 backdrop-blur">Privacy Centre</p>
              <h1 className="mt-7 max-w-2xl text-5xl font-black leading-[1.03] tracking-tight text-[#001B47] md:text-7xl">Your data, clearly explained.</h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#001B47]/65">
                EMY uses information to power local discovery, business connections, support, safety, and personalised platform experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-black text-orange-500 shadow-sm">Location-aware discovery</span>
                <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-black text-orange-500 shadow-sm">Business profiles</span>
                <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-black text-orange-500 shadow-sm">User control</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/60 p-4 shadow-2xl shadow-[#001B47]/10 backdrop-blur-xl">
              <img src={privacyImage} alt="EMY privacy workplace" className="h-[470px] w-full rounded-[2rem] object-cover" />
              <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-t from-[#001B47]/80 via-[#001B47]/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-100">Privacy by design</p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-4xl">Built around trust, transparency, and local connection.</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-6 py-20">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(249,115,22,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(249,115,22,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="grid gap-6 md:grid-cols-3">
              {privacyHighlights.map(([title, text]) => (
                <HighlightCard key={title} title={title} text={text} />
              ))}
            </div>
          </div>
        </section>

        <section id="privacy-data" className="relative overflow-hidden bg-[#fff4ea] px-6 py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-wide text-orange-500">Data we may process</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#001B47] md:text-5xl">Different features use different types of information.</h2>
              <p className="mt-5 text-base leading-8 text-[#001B47]/70">
                EMY only needs certain information depending on how a person or business uses the platform. A customer browsing nearby services may use different data than a business managing a public profile.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {dataCategories.map((category) => (
                <DataCard key={category.label} label={category.label} examples={category.examples} />
              ))}
            </div>
          </div>
        </section>

        <section id="privacy-rights" className="relative overflow-hidden bg-[#001B47] px-6 py-24 text-white">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={privacyBackgroundStyle} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.35),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-200">Your choices</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">You should stay in control of your data.</h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                Depending on your location and the law that applies to you, you may have certain rights over your personal information.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {userRights.map((right, index) => (
                <div key={right} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white">{index + 1}</div>
                  <p className="mt-4 text-sm font-bold leading-7 text-white/85">{right}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="privacy-details" className="relative overflow-hidden bg-white px-6 py-24">
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-[2rem] border border-orange-100 bg-[#fff8ef] p-6 shadow-xl shadow-[#001B47]/5 md:p-8">
              <h2 className="text-2xl font-black text-[#001B47]">Detailed Privacy Policy</h2>
              <p className="mt-4 text-base leading-8 text-[#001B47]/70">
                This page is a strong starting version for EMY. It should be reviewed by a qualified legal professional before publishing, especially if EMY uses payments, precise location data, customer messaging, business verification, reviews, analytics, or AI recommendations.
              </p>
            </div>

            <div className="mt-8 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-xl shadow-[#001B47]/5 md:p-10">
              {privacySections.map((section) => (
                <DetailRow key={section.title} title={section.title} text={section.text} />
              ))}
            </div>

            <PrivacyTestPanel />
          </div>
        </section>

        <section id="privacy-support" className="relative overflow-hidden px-6 py-24 text-white">
          <div className="absolute inset-0 bg-cover bg-center" style={privacyBackgroundStyle} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001B47]/90 via-[#08285f]/85 to-orange-600/80" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent_40%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-100">Privacy support</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Questions about your data?</h2>
            <p className="mt-5 text-lg text-white/75">Contact us and we will help with privacy, account, or data-related requests.</p>
            <a href="contact.html" className="mt-8 inline-flex rounded-2xl bg-orange-500 px-8 py-4 text-sm font-black text-white shadow-xl shadow-orange-500/25 transition hover:-translate-y-1 hover:bg-orange-600">Contact support</a>
          </div>
        </section>

        
      </main>
    </div>
  );
}



export default EMYPrivacyPage;
