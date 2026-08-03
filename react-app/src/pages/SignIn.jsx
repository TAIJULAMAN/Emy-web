import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <>
      <main className="page">
      <section className="left" aria-label="EMY sign in form">
        <a className="top-logo" href="index.html" aria-label="Go to EMY home">
          <img src="https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png" alt="EMY" />
        </a>
        <div className="account-pill">
          <span>You are signing in to</span>
          <img src="https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png" alt="EMY" />
        </div>
        <button className="back-link" type="button" data-back>&lt; Back</button>
        <div className="form-wrap">
          <div className="brand"><img src="https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png" alt="EMY" /></div>
          <h1>Sign In</h1>
          <div className="role-badge" data-role-badge>Customer account</div>
          <p className="intro" data-intro>Welcome back. Please enter your customer account details.</p>
          <form novalidate data-form>
            <label className="field">Email<span>*</span>
              <div className="input-box"><input data-email type="email" placeholder="Email" autocomplete="email" /></div>
            </label>
            <label className="field">Password<span>*</span>
              <div className="input-box">
                <input data-password type="password" placeholder="Password" autocomplete="current-password" />
                <button className="password-toggle" type="button" data-toggle-password aria-label="Show password">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg>
                </button>
              </div>
            </label>
            <div className="row">
              <label className="remember"><input type="checkbox" checked />Remember me</label>
              <button className="forgot" type="button" data-forgot>Forgot Password?</button>
            </div>
            <p className="status" data-status></p>
            <button className="primary" type="submit">Sign In</button>
          </form>
          <p className="social-title">Or Sign In With</p>
          <div className="social-row">
            <button className="social" type="button" data-social="google" aria-label="Sign in with Google">
              <svg width="29" height="29" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5Z"/><path fill="#FF3D00" d="M6.3 14.7 12.9 19.5C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.8l-6.5 5C9.5 39.6 16.2 44 24 44Z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5Z"/></svg>
            </button>
            <button className="social" type="button" data-social="facebook" aria-label="Sign in with Facebook">
              <svg width="31" height="31" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="20" fill="#1877F2"/><path fill="#fff" d="M25.6 21.2h-3.7V34h-5.3V21.2h-2.7v-4.5h2.7v-2.9c0-2.1 1-5.5 5.5-5.5l4 .1v4.4h-2.9c-.5 0-1.3.3-1.3 1.4v2.5h4.3l-.6 4.5Z"/></svg>
            </button>
          </div>
          <p className="switch">Don't have an account? <button type="button" data-signup>Sign up</button></p>
        </div>
        <p className="legal">By using EMY, you agree to our <a href="terms.html">Terms</a> and <a href="privacy.html">Privacy Policy</a>.</p>
      </section>
      <section className="right" aria-hidden="true">
        <button className="close" type="button" data-close aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="panel">
          <div className="panel-logo"><img src="https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png" alt="" /></div>
          <h2 data-panel-title>EMY Customer</h2>
          <p data-panel-tag>Welcome back</p>
        </div>
      </section>
    </main>
    </>
  );
}
