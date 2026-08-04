import React, { useEffect, useMemo, useRef, useState } from "react";









const emyLogo = "https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png";
const gatewayImage = "https://iqlance-demo.com/design/EMY-Web/img/aboutus/our-workplace.jpg";

const gatewayBackgroundStyle = {
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

function FloatingMenu() {
  const items = [
    { href: "#terms-overview", label: "Overview" },
    { href: "#terms-rules", label: "Terms" },
    { href: "#terms-support", label: "Support" },
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


const termsSections = [
  {
    title: "1. Acceptance of these Terms",
    text: "By accessing, browsing, creating an account, or using EMY in any way, you confirm that you have read, understood, and agreed to these Terms of Use. If you do not agree with these terms, you must stop using the platform immediately. These terms apply to all visitors, users, businesses, service providers, advertisers, and third parties using EMY services.",
  },
  {
    title: "2. About EMY",
    text: "EMY is a digital platform that helps users discover local businesses, services, suppliers, and nearby opportunities. EMY may provide search, communication, recommendation, business visibility, review, promotional, advertising, AI-powered assistance, and location-based features. EMY reserves the right to modify, suspend, restrict, or discontinue any part of the platform at any time without prior notice.",
  },
  {
    title: "3. Eligibility and Account Registration",
    text: "You must be at least 18 years old or meet the legal minimum age required in your country to use EMY. You agree to provide accurate, complete, and current information when creating an account. You are fully responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.",
  },
  {
    title: "4. User Responsibilities",
    text: "Users agree to use EMY responsibly and lawfully. You may not impersonate another person or business, create fake accounts, provide misleading information, engage in fraudulent behaviour, upload harmful software, interfere with the platform, scrape data, attempt unauthorized access, or misuse EMY services in any way that could damage users, businesses, or the platform.",
  },
  {
    title: "5. Business Listings and Service Providers",
    text: "Businesses and service providers are solely responsible for the accuracy, legality, quality, safety, availability, pricing, licensing, certifications, and delivery of their products or services. EMY does not guarantee, endorse, inspect, supervise, or verify every business listed on the platform. Users engage with businesses and providers at their own discretion and risk.",
  },
  {
    title: "6. Reviews, Ratings, and User Content",
    text: "Users may post reviews, comments, ratings, images, or other content where available. By submitting content to EMY, you grant EMY a worldwide, non-exclusive, royalty-free license to use, display, reproduce, modify, distribute, and promote that content in connection with the platform and marketing activities. EMY reserves the right to remove content that is abusive, defamatory, misleading, illegal, offensive, spam-related, or harmful to the platform or other users.",
  },
  {
    title: "7. AI Features and Recommendations",
    text: "EMY may use automated systems, algorithms, AI tools, or recommendation technologies to provide suggestions, search results, business visibility, support responses, or local recommendations. EMY does not guarantee the accuracy, completeness, reliability, or suitability of automated recommendations and users should independently verify important information before relying on it.",
  },
  {
    title: "8. Payments and Transactions",
    text: "If payments, subscriptions, promotions, bookings, or transactions are offered through EMY, users and businesses are responsible for complying with all applicable payment terms, taxes, laws, and obligations. EMY may use third-party payment providers and is not responsible for payment processing failures, banking issues, disputes between users and businesses, chargebacks, delays, or third-party payment service interruptions.",
  },
  {
    title: "9. Intellectual Property Rights",
    text: "EMY, including its branding, design, software, content, features, graphics, trademarks, logos, and technology, is protected by intellectual property laws and remains the property of MY-EMY.COM Ltd or its licensors. You may not copy, reproduce, distribute, modify, reverse engineer, sell, or exploit any part of the platform without prior written permission.",
  },
  {
    title: "10. Privacy and Data Usage",
    text: "EMY may collect, process, and store personal information in accordance with its Privacy Policy. By using EMY, you consent to the collection and processing of information required to operate, improve, secure, and personalize the platform. Users are responsible for ensuring that any information they upload or share complies with applicable privacy and data protection laws.",
  },
  {
    title: "11. Third-Party Services and External Links",
    text: "The platform may include links, integrations, advertisements, APIs, maps, external websites, or third-party tools. EMY does not control or guarantee third-party services and is not responsible for their availability, content, practices, products, services, or policies. Accessing third-party services is done entirely at your own risk.",
  },
  {
    title: "12. Platform Availability and Technical Issues",
    text: "EMY is provided on an as available and as is basis. We do not guarantee uninterrupted access, error-free performance, or permanent availability. The platform may experience downtime, maintenance, security incidents, technical failures, delays, or interruptions beyond our control.",
  },
  {
    title: "13. Limitation of Liability",
    text: "To the fullest extent permitted by law, MY-EMY.COM Ltd, its directors, employees, affiliates, partners, and service providers shall not be liable for any indirect, incidental, consequential, special, punitive, or financial losses arising from the use of EMY. This includes loss of profits, revenue, business opportunities, reputation, customers, data, or service interruptions. Users accept full responsibility for decisions, interactions, purchases, bookings, or agreements made through the platform.",
  },
  {
    title: "14. Indemnification",
    text: "You agree to defend, indemnify, and hold harmless MY-EMY.COM Ltd and its affiliates from any claims, liabilities, damages, losses, costs, legal fees, or disputes arising from your use of EMY, your violation of these Terms, your uploaded content, your business activities, or your interactions with other users or businesses.",
  },
  {
    title: "15. Account Suspension and Termination",
    text: "EMY reserves the right to suspend, restrict, investigate, remove content, or permanently terminate accounts at its sole discretion if users violate these Terms, engage in harmful behaviour, misuse the platform, create legal risk, or negatively impact the safety, reputation, or operation of EMY.",
  },
  {
    title: "16. Changes to the Platform and Terms",
    text: "We may modify, update, replace, or discontinue any feature, policy, functionality, or part of the platform at any time. EMY also reserves the right to update these Terms of Use periodically. Continued use of the platform after changes become effective constitutes acceptance of the revised terms.",
  },
  {
    title: "17. Governing Law",
    text: "These Terms shall be governed by and interpreted in accordance with the laws applicable to MY-EMY.COM Ltd, without regard to conflict of law principles. Any disputes relating to the platform or these Terms shall be subject to the jurisdiction of the appropriate courts where the company is established.",
  },
  {
    title: "18. Contact Information",
    text: "If you have questions, concerns, legal requests, or support enquiries regarding these Terms of Use or the EMY platform, please contact MY-EMY.COM Ltd through the official EMY contact page or support channels available on the platform.",
  },
];

function TermsCard({ title, text }) {
  return (
    <article className="rounded-[1.75rem] border border-orange-100 bg-white/85 p-6 shadow-xl shadow-[#001B47]/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#001B47]/10 md:p-7">
      <h2 className="text-xl font-black leading-tight text-[#001B47]">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-[#001B47]/70 md:text-base">{text}</p>
    </article>
  );
}

function TermsTestPanel() {
  const tests = [
    {
      name: "Terms section count",
      passed: termsSections.length === 18,
    },
    {
      name: "Every section has a title",
      passed: termsSections.every((section) => section.title.length > 0),
    },
    {
      name: "Every section has content",
      passed: termsSections.every((section) => section.text.length > 40),
    },
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

function EMYTermsPage() {
  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#001B47] antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{""}</style>

      <FloatingMenu />

      <main>
        <section id="terms-overview" className="relative isolate overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_18%,rgba(249,115,22,0.28),transparent_28%),radial-gradient(circle_at_12%_18%,rgba(0,27,71,0.10),transparent_28%),linear-gradient(115deg,#fffaf4_0%,#fff4e8_48%,#ffe4c6_100%)]" />
          <div className="absolute right-0 top-20 -z-10 h-[680px] w-[52%] rounded-l-[7rem] bg-gradient-to-br from-white/35 via-orange-200/35 to-orange-500/20 backdrop-blur" />

          <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="inline-flex rounded-full border border-white/60 bg-white/75 px-5 py-2 text-xl font-semibold uppercase tracking-[0.22em] text-orange-500 shadow-lg shadow-[#001B47]/5 backdrop-blur">
                Legal Information
              </p>
              <h1 className="mt-7 max-w-2xl text-5xl text-start font-black leading-[1.03] tracking-tight text-[#001B47] md:text-7xl">
                Terms of Use
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#001B47]/65">
                These terms explain how users, businesses, and service providers should use EMY responsibly and safely.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/60 p-4 shadow-2xl shadow-[#001B47]/10 backdrop-blur-xl">
              <img src={gatewayImage} alt="EMY local connection" className="h-[420px] w-full rounded-[2rem] object-cover" />
              <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-t from-[#001B47]/75 via-[#001B47]/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-100">EMY Platform</p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-4xl">Clear rules for a better local ecosystem.</h2>
              </div>
            </div>
          </div>
        </section>

        <section id="terms-rules" className="relative overflow-hidden bg-white px-6 py-20">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(249,115,22,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(249,115,22,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-[2rem] border border-orange-100 bg-[#fff8ef] p-6 shadow-xl shadow-[#001B47]/5 md:p-8">
              <h2 className="text-2xl font-black text-[#001B47]">Please read this carefully</h2>
              <p className="mt-4 text-base leading-8 text-[#001B47]/70">
                This page is a starting version of EMY&apos;s Terms of Use. It should be reviewed by a qualified legal professional before publishing, especially if EMY will process customer data, payments, business profiles, reviews, or location-based services.
              </p>
            </div>

            <div className="mt-8 grid gap-5">
              {termsSections.map((section) => (
                <TermsCard key={section.title} title={section.title} text={section.text} />
              ))}
            </div>

            <TermsTestPanel />
          </div>
        </section>

        <section id="terms-support" className="relative overflow-hidden px-6 py-24 text-white">
          <div className="absolute inset-0 bg-cover bg-center" style={gatewayBackgroundStyle} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001B47]/90 via-[#08285f]/85 to-orange-600/80" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent_40%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-100">Need support?</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Questions about using EMY?</h2>
            <p className="mt-5 text-lg text-white/75">Contact us and we will help point you in the right direction.</p>
            <a href="contact.html" className="mt-8 inline-flex rounded-2xl bg-orange-500 px-8 py-4 text-sm font-black text-white shadow-xl shadow-orange-500/25 transition hover:-translate-y-1 hover:bg-orange-600">
              Contact support
            </a>
          </div>
        </section>


      </main>
    </div>
  );
}



export default EMYTermsPage;
