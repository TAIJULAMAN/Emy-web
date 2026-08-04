import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './SignIn.css';

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [view, setView] = useState('selection'); // 'selection' | 'customer' | 'business'
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password, view);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setIsLoading(false);
    }
  };

  if (view === 'selection') {
    return (
      <main className="selection-page">
        <div className="selection-content">
          <h1>Sign in as</h1>
          <p>Choose the EMY account type you want to access.</p>
          <div className="cards-container">
            <button className="role-card" onClick={() => setView('customer')}>
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2>Customer</h2>
              <p>Sign in to your customer<br />account.</p>
            </button>
            <button className="role-card" onClick={() => setView('business')}>
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h2>Business</h2>
              <p>Sign in to your business<br />account.</p>
            </button>
          </div>
        </div>
      </main>
    );
  }

  const isBusiness = view === 'business';
  const roleName = isBusiness ? 'Business' : 'Customer';
  const roleLabel = roleName + ' account';
  const introText = isBusiness 
    ? "Welcome back. Please enter your business account details." 
    : "Welcome back. Please enter your customer account details.";
  const panelTag = isBusiness ? "Manage your profile" : "Continue discovering";

  return (
    <main className="page">
      <div className="glass-container">
        <section className="left" aria-label="EMY sign in form">
          <button className="back-link" type="button" onClick={() => setView('selection')}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back
          </button>
          
          <div className="form-wrap">
            <div className="brand">
              <a href="/" aria-label="Go to EMY home">
                <img src="https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png" alt="EMY" />
              </a>
            </div>
            
            <h1>Sign In</h1>
            <div className="role-badge">{roleLabel}</div>
            <p className="intro">{introText}</p>
            
            <form noValidate onSubmit={handleSubmit}>
              <div className="field">
                <input 
                  type="email" 
                  placeholder=" " 
                  autoComplete="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Email<span>*</span></label>
              </div>
              
              <div className="field">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder=" " 
                  autoComplete="current-password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Password<span>*</span></label>
                <button 
                  className={`password-toggle ${showPassword ? 'is-visible' : ''}`} 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Show password"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {showPassword ? (
                      <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></>
                    ) : (
                      <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                    )}
                  </svg>
                </button>
              </div>

              <div className="row">
                <label className="remember"><input type="checkbox" defaultChecked /> Remember me</label>
                <button className="forgot" type="button">Forgot Password?</button>
              </div>
              
              {error && <p className="status">{error}</p>}
              
              <button className="primary" type="submit" disabled={isLoading}>
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
            
            <p className="social-title">Or Sign In With</p>
            <div className="social-row">
              <button className="social" type="button" aria-label="Sign in with Google">
                <svg width="24" height="24" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5Z"/><path fill="#FF3D00" d="M6.3 14.7 12.9 19.5C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.8l-6.5 5C9.5 39.6 16.2 44 24 44Z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5Z"/></svg>
              </button>
              <button className="social" type="button" aria-label="Sign in with Facebook">
                <svg width="24" height="24" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#1877F2"/><path fill="#fff" d="M25.6 21.2h-3.7V34h-5.3V21.2h-2.7v-4.5h2.7v-2.9c0-2.1 1-5.5 5.5-5.5l4 .1v4.4h-2.9c-.5 0-1.3.3-1.3 1.4v2.5h4.3l-.6 4.5Z"/></svg>
              </button>
            </div>
            
            <p className="switch">Don't have an account? <button type="button" onClick={() => navigate('/sign-up')}>Sign up</button></p>
          </div>
          <p className="legal">By using EMY, you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.</p>
        </section>

        <section className="right" aria-hidden="true">
          <button className="close" type="button" onClick={() => setView('selection')} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <div className="panel">
            <div className="panel-logo"><img src="https://iqlance-demo.com/design/EMY-Web/img/logo-landing.png" alt="EMY" /></div>
            <h2>EMY {roleName}</h2>
            <p>{panelTag}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
