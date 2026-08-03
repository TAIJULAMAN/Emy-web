import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AskEmy.css';

export default function AskEmy() {
  const navigate = useNavigate();

  return (
    <>
      <div className="ask-shell">
        <div className="blob one" aria-hidden="true"></div>
        <div className="blob two" aria-hidden="true"></div>
        <div className="blob three" aria-hidden="true"></div>
        <header className="topbar">
          <a className="brand" href="index.html" aria-label="EMY home">
            <img src="https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png" alt="EMY" />
          </a>
          <nav className="nav" aria-label="Ask EMY navigation">
            <a className="home" href="index.html">EMY Home</a>
            <a href="ask-emy.html">Ask EMY</a>
            <a className="soft" href="emy-signin.html">Sign In</a>
            <a className="primary" href="emy-signup.html">Sign up</a>
          </nav>
        </header>
        <main className="about-main">
          <section className="center" aria-label="About Ask EMY">
            <div className="hero-stage">
              <span className="hero-ring" aria-hidden="true"></span>
              <span className="hero-ring second" aria-hidden="true"></span>
              <span className="flow-line one" aria-hidden="true"></span>
              <span className="flow-line two" aria-hidden="true"></span>
              <span className="flow-line three" aria-hidden="true"></span>
              <span className="flow-line four" aria-hidden="true"></span>
              <span className="tool-pill one" aria-hidden="true">Chat</span>
              <span className="tool-pill two" aria-hidden="true">Nearby</span>
              <span className="tool-pill three" aria-hidden="true">Products</span>
              <span className="tool-pill four" aria-hidden="true">Answers</span>
              <span className="flow-card ask-card">
                <small>Customer asks</small>
                <strong>&quot;What is open near me?&quot;</strong>
                <span>Ask EMY starts with normal words.</span>
              </span>
              <span className="flow-card answer-card">
                <small>EMY answers</small>
                <strong>Nearby matches, offers, and useful next steps.</strong>
                <span>The assistant turns intent into EMY actions.</span>
              </span>
              <span className="flow-card profile-card">
                <small>Go deeper</small>
                <strong>Open business profile</strong>
                <span>Products, posts, clips, location.</span>
              </span>
              <span className="flow-card clip-card">
                <small>Keep exploring</small>
                <strong>Show fresh clips</strong>
                <span>Quick updates from nearby businesses.</span>
              </span>
              <div className="identity">
                <div className="wordmark">
                  <span className="ask">Ask</span>
                  <span className="divider" aria-hidden="true"></span>
                  <img src="https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png" alt="EMY" />
                  <span className="bag" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M6.9 8.1c.35-1.08 1.36-1.8 2.5-1.8h5.2c1.14 0 2.15.72 2.5 1.8l1.7 8.7c.35 1.78-1.01 3.45-2.82 3.45H8.02c-1.81 0-3.17-1.67-2.82-3.45l1.7-8.7Z" fill="#f76512" stroke="#cf5200" strokeLinejoin="round" strokeWidth="1"/>
                      <path d="M15.9 6.55c.58.35 1.02.9 1.2 1.55l1.7 8.7c.29 1.48-.6 2.88-1.96 3.32l-.98-.08c.74-.62 1.04-1.6.82-2.72l-1.25-6.7c-.28-1.5-.1-2.8.47-4.07Z" fill="#ad3e00" opacity=".2"/>
                      <path d="M6.35 10.05c2.15.62 4.02.48 5.66-.3 1.78-.85 3.62-.92 5.46-.22l.38 1.84c-2.32-.78-4.28-.63-6.04.22-1.62.78-3.45.9-5.78.28l.32-1.82Z" fill="#ffb067" opacity=".34"/>
                      <path d="M8.8 6.35c.32-1.92 1.42-3 3.2-3s2.88 1.08 3.2 3" stroke="#fff" strokeLinecap="round" strokeWidth="1.18" opacity=".9"/>
                      <path d="M9.25 13.2c.46-.36.92-.36 1.38 0" stroke="#fff" strokeLinecap="round" strokeWidth="1.02" opacity=".96"/>
                      <path d="M13.37 13.2c.46-.36.92-.36 1.38 0" stroke="#fff" strokeLinecap="round" strokeWidth="1.02" opacity=".96"/>
                      <path d="M9.8 15.82c1.34.94 3.06.94 4.4 0" stroke="#fff" strokeLinecap="round" strokeWidth="1.18" opacity=".96"/>
                    </svg>
                  </span>
                </div>
                <span className="beta">Beta</span>
              </div>
            </div>
            <h1>Ask EMY is EMY's AI project assistant for chat-based help and discovery.</h1>
            <p className="lead">It supports customers by chatting with them, understanding what they need, and guiding them toward businesses, products, places, answers, posts, and clips inside EMY.</p>
            <div className="answer-box">
              <span className="answer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                  <path d="M5 12.5c0-3.6 2.95-6.5 7-6.5s7 2.9 7 6.5-2.95 6.5-7 6.5c-.72 0-1.4-.1-2.03-.29L6 20l1.28-3.03A6.17 6.17 0 0 1 5 12.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                  <path d="M9 12h6M9 15h3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="answer-copy">
                <strong>Built into EMY, not another app.</strong>
                <span>Ask EMY sits inside the same experience, so a customer can ask, discover, and continue without feeling sent somewhere else.</span>
              </span>
              <span className="answer-flow" aria-hidden="true">
                <span>Chat <b>Ask</b></span>
                <span>Match <b>Find</b></span>
                <span>Continue <b>Open</b></span>
              </span>
            </div>
            <div className="chips" aria-label="Ask EMY highlights">
              <span><i>01</i>Find nearby services</span>
              <span><i>02</i>Compare products</span>
              <span><i>03</i>Understand results</span>
              <a href="ask-emy.html"><i>GO</i>Open Ask EMY</a>
            </div>
            <section className="tools-section" aria-label="Ask EMY tools in action">
              <div className="tools-head">
                <div>
                  <span>Tools in action</span>
                  <strong>How Ask EMY helps inside EMY</strong>
                </div>
                <p>Short, practical steps that move a customer from a question to the right EMY place.</p>
              </div>
              <div className="tool-grid">
                <article className="action-card wide">
                  <div className="action-copy">
                    <small>Chat to search</small>
                    <h2>A customer can ask normally.</h2>
                    <p>Ask EMY reads the request, uses location and intent, then turns it into something EMY can show clearly.</p>
                  </div>
                  <div className="mini-chat" aria-hidden="true">
                    <span>I need somewhere nearby that is open and sells pizza.</span>
                    <span>Here are nearby businesses, offers, and clips you can check now.</span>
                    <span>Open the business profile to compare products, posts, and location.</span>
                  </div>
                </article>
                <article className="action-card">
                  <div className="action-copy">
                    <small>Discover</small>
                    <h3>Find what is active near you.</h3>
                    <p>Nearby businesses, new products, updates, and clips can surface from one conversation.</p>
                  </div>
                  <div className="route-list" aria-hidden="true">
                    <span>Business List <b>nearby</b></span>
                    <span>Product List <b>fresh</b></span>
                  </div>
                </article>
                <article className="action-card">
                  <div className="action-copy">
                    <small>Continue</small>
                    <h3>Send people to the right page.</h3>
                    <p>When chat is not enough, Ask EMY can guide the customer into search, profile, posts, or clips.</p>
                  </div>
                  <div className="route-list" aria-hidden="true">
                    <span>Search results <b>open</b></span>
                    <span>Business profile <b>visit</b></span>
                  </div>
                </article>
              </div>
            </section>
            <p className="terms">Ask EMY follows the same EMY experience. <a href="terms.html">Terms</a> and <a href="privacy.html">Privacy Policy</a>.</p>
          </section>
        </main>
      </div>
    </>
  );
}
