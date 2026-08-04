import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './SignUp.css';

export default function SignUp() {
  const navigate = useNavigate();
  const { register } = useAuth();
  
  const [view, setView] = useState('selection'); // 'selection' | 'customer' | 'business'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      await register({
        ...formData,
        role: view,
        avatarUrl
      });
      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to sign up');
    } finally {
      setIsLoading(false);
    }
  };

  if (view === 'selection') {
    return (
      <main className="selection-page">
        <div className="selection-content">
          <button className="close-btn" onClick={() => navigate('/')}>×</button>
          
          <h1>Select your role</h1>
          <p>Choose how you want to join EMY.</p>
          
          <div className="cards-container">
            <button className="role-card" onClick={() => setView('customer')}>
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2>Customer</h2>
              <p>Find services, shops, offers,<br />and places near you.</p>
            </button>
            <button className="role-card" onClick={() => setView('business')}>
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h2>Business</h2>
              <p>Offer services and connect with<br />local customers.</p>
            </button>
          </div>
        </div>
      </main>
    );
  }

  const isBusiness = view === 'business';

  return (
    <main className="page">
      <div className="glass-container">
        <button className="back-link" type="button" onClick={() => setView('selection')}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back
        </button>
        
        <section className="wrap" aria-label="EMY registration form">
          <h1>Sign Up</h1>
          <p className="subtitle">And enjoy life during the time you just saved!</p>
          <div className="role-badge">{isBusiness ? 'Business account' : 'Customer account'}</div>
          
          <div className="form-shell">
            <div className="left-rail">
              <div className="photo-area">
                <button 
                  className="photo-button" 
                  type="button" 
                  onClick={() => fileInputRef.current?.click()}
                  aria-label="Add profile picture" 
                >
                  {avatarUrl ? (
                    <img src={avatarUrl} alt="Preview" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                  ) : (
                    <>
                      <span className="avatar-fallback">
                        <svg viewBox="0 0 96 96" fill="none" aria-hidden="true">
                          <circle cx="48" cy="48" r="39" fill="#fffaf5" stroke="#001b47" strokeWidth="2.6"/>
                          <circle cx="48" cy="38" r="13" stroke="#001b47" strokeWidth="3.2"/>
                          <path d="M25.5 75.5c4.2-14.3 13.2-22 22.5-22s18.3 7.7 22.5 22" stroke="#001b47" strokeWidth="3.2" strokeLinecap="round"/>
                          <path d="M34 75.5h28" stroke="#001b47" strokeWidth="3.2" strokeLinecap="round"/>
                        </svg>
                      </span>
                      <span className="camera"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 8l1.5-2h5L16 8h2.5A2.5 2.5 0 0 1 21 10.5v6A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-6A2.5 2.5 0 0 1 5.5 8H8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="12" cy="13.5" r="3" stroke="currentColor" strokeWidth="2"/></svg></span>
                    </>
                  )}
                </button>
                <input ref={fileInputRef} onChange={handleFileChange} type="file" accept="image/*" hidden />
              </div>
              <p className="photo-required">Profile picture<span>*</span></p>
              {avatarUrl && (
                <button className="photo-remove" type="button" onClick={() => setAvatarUrl(null)} style={{ display: 'block', margin: '8px auto', border: 0, background: 'none', color: '#ff6a00', cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}>Remove photo</button>
              )}
              <div className="segmented" role="group" aria-label="Privacy mode">
                <button type="button" className="active">Private</button>
                <button type="button">Public</button>
              </div>
            </div>
            
            <form noValidate onSubmit={handleSubmit}>
              <div className="grid-two">
                <div className="field">
                  <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder=" " autoComplete="given-name" required />
                  <label>First Name<span>*</span></label>
                </div>
                <div className="field">
                  <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder=" " autoComplete="family-name" required />
                  <label>Last Name<span>*</span></label>
                </div>
              </div>
              
              <div className="field">
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder=" " autoComplete="tel" inputMode="numeric" pattern="[0-9]*" required />
                <label>Mobile Number<span>*</span></label>
              </div>
              
              <div className="field">
                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder=" " autoComplete="email" required />
                <label>Email<span>*</span></label>
              </div>
              
              <div className="field">
                <input name="password" value={formData.password} onChange={handleChange} type={showPassword ? "text" : "password"} placeholder=" " autoComplete="new-password" required />
                <label>Password<span>*</span></label>
                <button className={`password-toggle ${showPassword ? 'is-visible' : ''}`} type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Show password">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {showPassword ? (
                      <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></>
                    ) : (
                      <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                    )}
                  </svg>
                </button>
              </div>
              
              <div className="field">
                <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} type={showConfirm ? "text" : "password"} placeholder=" " autoComplete="new-password" required />
                <label>Confirm Password<span>*</span></label>
                <button className={`password-toggle ${showConfirm ? 'is-visible' : ''}`} type="button" onClick={() => setShowConfirm(!showConfirm)} aria-label="Show password">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {showConfirm ? (
                      <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></>
                    ) : (
                      <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                    )}
                  </svg>
                </button>
              </div>
              
              <label className="agreement"><input type="checkbox" required />Yes! I Agree all <a href="/terms">Terms & Condition</a></label>
              
              {error && <p className="status">{error}</p>}
              
              <button className="primary" type="submit" disabled={isLoading}>{isLoading ? 'Signing Up...' : 'Sign Up'}</button>
              
              <p className="social-title">Or Sign Up With</p>
              <div className="social-row">
                <button className="social" type="button" aria-label="Sign up with Google"><svg width="24" height="24" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5Z"/><path fill="#FF3D00" d="M6.3 14.7 12.9 19.5C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.8l-6.5 5C9.5 39.6 16.2 44 24 44Z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5Z"/></svg></button>
                <button className="social" type="button" aria-label="Sign up with Facebook"><svg width="24" height="24" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#1877F2"/><path fill="#fff" d="M25.6 21.2h-3.7V34h-5.3V21.2h-2.7v-4.5h2.7v-2.9c0-2.1 1-5.5 5.5-5.5l4 .1v4.4h-2.9c-.5 0-1.3.3-1.3 1.4v2.5h4.3l-.6 4.5Z"/></svg></button>
              </div>
              <p className="switch">already have an account ? <button type="button" onClick={() => navigate('/sign-in')}>Sign in</button></p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
