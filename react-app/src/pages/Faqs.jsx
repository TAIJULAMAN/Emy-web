import React, { useEffect, useMemo, useRef, useState } from "react";









const emyLogo = "https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png";
const faqHeroImage = "https://iqlance-demo.com/design/EMY-Web/img/trust-pics.png";
const faqSupportImage = "https://iqlance-demo.com/design/EMY-Web/img/gatway-one.jpg";

const faqBackgroundStyle = {
  backgroundImage: `url(${faqSupportImage})`,
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
    { href: "#faq-overview", label: "Overview" },
    { href: "#faq-users", label: "Users" },
    { href: "#faq-business", label: "Business" },
    { href: "#faq-account", label: "Account" },
    { href: "#faq-support", label: "Support" },
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
              <li><a href="privacy.html" className="hover:text-orange-500">Privacy Policy</a></li>
              <li><a href="about.html" className="hover:text-orange-500">About Us</a></li>
              <li><a href="contact.html" className="hover:text-orange-500">Contact Support</a></li>
              <li><a href="faqs.html" className="font-bold text-orange-500">FAQs</a></li>
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

const faqHighlights = [
  ["For customers", "Find nearby businesses, compare services, ask questions, and connect with local providers more easily."],
  ["For businesses", "Create a stronger local presence, showcase services, manage enquiries, and reach people already searching nearby."],
  ["For support", "Get help with accounts, privacy, business profiles, technical issues, and general platform questions."],
];

const userFaqs = [
  {
    question: "What is EMY?",
    answer: "EMY is a local discovery platform that helps people find nearby businesses, explore services, and connect directly with providers in their area.",
  },
  {
    question: "How does EMY help users?",
    answer: "Users can search for businesses, view services, compare local options, ask questions, and interact with businesses more easily from one place.",
  },
  {
    question: "Do I need an account to use EMY?",
    answer: "Some features may be available without an account, but creating an account can give users access to saved preferences, messaging, enquiries, and personalised discovery.",
  },
  {
    question: "Does EMY use my location?",
    answer: "EMY may use approximate or precise location data where permission is granted, mainly to show nearby businesses and improve local recommendations.",
  },
];

const businessFaqs = [
  {
    question: "Can businesses create their own profile?",
    answer: "Yes. Businesses can create or manage a profile, add key information, publish services, upload images, and make it easier for local customers to find them.",
  },
  {
    question: "How does EMY help businesses get discovered?",
    answer: "EMY helps businesses appear in relevant local searches, present their services clearly, and connect with users who are already looking for support nearby.",
  },
  {
    question: "Can businesses update their details?",
    answer: "Businesses may be able to update details such as contact information, opening hours, services, images, categories, and offers depending on the features available.",
  },
  {
    question: "Is EMY free for businesses?",
    answer: "EMY may offer free and paid business features depending on profile visibility, subscriptions, promotions, or additional tools available on the platform.",
  },
];

const accountFaqs = [
  {
    question: "How do I contact support?",
    answer: "You can contact EMY through the contact page for help with accounts, business profiles, privacy requests, technical issues, or general platform support.",
  },
  {
    question: "Can I request deletion of my account or data?",
    answer: "Yes. You can contact EMY support to ask about account deletion, privacy requests, or access to personal information, depending on applicable legal rights.",
  },
  {
    question: "How does EMY handle privacy?",
    answer: "EMY uses information to provide the platform, support local discovery, improve recommendations, protect users, and operate business tools. More details are available in the Privacy Policy.",
  },
  {
    question: "Where can I read the terms?",
    answer: "You can review EMY's terms on the Terms of Use page, which explains platform rules, responsibilities, acceptable use, and service conditions.",
  },
];

function HighlightCard({ title, text }) {
  return (
    <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-xl shadow-[#001B47]/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-lg font-black text-orange-500">?</div>
      <h3 className="mt-5 text-xl font-black text-[#001B47]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#001B47]/70">{text}</p>
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-orange-100 bg-white shadow-lg shadow-[#001B47]/5">
      <button type="button" onClick={onClick} className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition hover:bg-orange-50/60">
        <span className="text-base font-black leading-7 text-[#001B47] md:text-lg">{question}</span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xl font-black text-orange-500">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="border-t border-orange-100 px-6 pb-6 pt-4">
          <p className="text-sm leading-7 text-[#001B47]/70 md:text-base">{answer}</p>
        </div>
      )}
    </div>
  );
}

function FAQGroup({ id, eyebrow, title, description, items, openKey, setOpenKey, groupKey }) {
  return (
    <section id={id} className="relative overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.42fr_0.58fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-orange-500">{eyebrow}</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-[#001B47] md:text-5xl">{title}</h2>
          <p className="mt-5 text-base leading-8 text-[#001B47]/70">{description}</p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const key = `${groupKey}-${index}`;
            return (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openKey === key}
                onClick={() => setOpenKey(openKey === key ? null : key)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EMYFAQsPage() {
  const [openKey, setOpenKey] = useState("users-0");

  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#001B47] antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{""}</style>
      
      <FloatingMenu />

      <main>
        <section id="faq-overview" className="relative isolate overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_18%,rgba(249,115,22,0.28),transparent_28%),radial-gradient(circle_at_12%_18%,rgba(0,27,71,0.10),transparent_28%),linear-gradient(115deg,#fffaf4_0%,#fff4e8_48%,#ffe4c6_100%)]" />
          <div className="absolute right-0 top-20 -z-10 h-[680px] w-[52%] rounded-l-[7rem] bg-gradient-to-br from-white/35 via-orange-200/35 to-orange-500/20 backdrop-blur" />

          <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="inline-flex rounded-full border border-white/60 bg-white/75 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-orange-500 shadow-lg shadow-[#001B47]/5 backdrop-blur">Help Centre</p>
              <h1 className="mt-7 max-w-2xl text-5xl font-black leading-[1.03] tracking-tight text-[#001B47] md:text-7xl">Frequently asked questions.</h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#001B47]/65">
                Clear answers about using EMY, discovering nearby businesses, managing profiles, accounts, privacy, and support.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-black text-orange-500 shadow-sm">Local discovery</span>
                <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-black text-orange-500 shadow-sm">Business profiles</span>
                <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-black text-orange-500 shadow-sm">Account support</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/60 p-4 shadow-2xl shadow-[#001B47]/10 backdrop-blur-xl">
              <img src={faqHeroImage} alt="EMY FAQs support" className="h-[470px] w-full rounded-[2rem] object-cover" />
              <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-t from-[#001B47]/80 via-[#001B47]/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-100">Support made simple</p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-4xl">Quick guidance for customers and businesses.</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-6 py-20">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(249,115,22,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(249,115,22,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="grid gap-6 md:grid-cols-3">
              {faqHighlights.map(([title, text]) => (
                <HighlightCard key={title} title={title} text={text} />
              ))}
            </div>
          </div>
        </section>

        <FAQGroup
          id="faq-users"
          eyebrow="For users"
          title="Using EMY as a customer."
          description="These answers explain how people can discover local businesses, browse services, interact with providers, and use location-based features."
          items={userFaqs}
          openKey={openKey}
          setOpenKey={setOpenKey}
          groupKey="users"
        />

        <section id="faq-business" className="relative overflow-hidden bg-[#fff4ea] px-6 py-24">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.42fr_0.58fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-orange-500">For businesses</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#001B47] md:text-5xl">Managing your business presence.</h2>
              <p className="mt-5 text-base leading-8 text-[#001B47]/70">
                These answers cover business profiles, visibility, updates, local enquiries, and business tools available through EMY.
              </p>
            </div>

            <div className="space-y-4">
              {businessFaqs.map((item, index) => {
                const key = `business-${index}`;
                return (
                  <FAQItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openKey === key}
                    onClick={() => setOpenKey(openKey === key ? null : key)}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <FAQGroup
          id="faq-account"
          eyebrow="Account and privacy"
          title="Support, privacy, and account help."
          description="Find answers about contacting support, managing account requests, privacy questions, data requests, and EMY platform rules."
          items={accountFaqs}
          openKey={openKey}
          setOpenKey={setOpenKey}
          groupKey="account"
        />

        <section id="faq-support" className="relative overflow-hidden px-6 py-24 text-white">
          <div className="absolute inset-0 bg-cover bg-center" style={faqBackgroundStyle} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001B47]/90 via-[#08285f]/85 to-orange-600/80" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent_40%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-100">Still need help?</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Contact EMY support.</h2>
            <p className="mt-5 text-lg text-white/75">Our team can help with accounts, business profiles, platform questions, and privacy requests.</p>
            <a href="contact.html" className="mt-8 inline-flex rounded-2xl bg-orange-500 px-8 py-4 text-sm font-black text-white shadow-xl shadow-orange-500/25 transition hover:-translate-y-1 hover:bg-orange-600">Contact support</a>
          </div>
        </section>

        
      </main>
    </div>
  );
}



export default EMYFAQsPage;
