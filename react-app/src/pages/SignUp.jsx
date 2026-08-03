import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <>
      <main className="page">
      <div className="marks" aria-hidden="true">
        <svg className="mark-top" viewBox="0 0 180 180" fill="none"><path d="M20 10l65 135L160 5" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <svg className="mark-bottom" viewBox="0 0 360 240" fill="none"><path d="M0 210L70 55l66 155 45-88 60 88 42-58 56 58" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <button className="back" type="button" data-back>&lt; Back</button>
      <section className="wrap" aria-label="EMY registration form">
        <h1>Sign Up</h1>
        <p className="subtitle">And enjoy life during the time you just saved!</p>
        <div className="role-badge" data-role-badge>Customer account</div>
        <div className="form-shell">
          <div className="left-rail">
            <div className="photo-area">
              <button className="photo-button" type="button" data-photo-button aria-label="Add profile picture" title="Required customer profile picture. This belongs to the customer account.">
                <span className="avatar-fallback" data-avatar-fallback>
                  <svg viewBox="0 0 96 96" fill="none" aria-hidden="true">
                    <circle cx="48" cy="48" r="39" fill="#fffaf5" stroke="#001b47" strokeWidth="2.6"/>
                    <circle cx="48" cy="38" r="13" stroke="#001b47" strokeWidth="3.2"/>
                    <path d="M25.5 75.5c4.2-14.3 13.2-22 22.5-22s18.3 7.7 22.5 22" stroke="#001b47" strokeWidth="3.2" strokeLinecap="round"/>
                    <path d="M34 75.5h28" stroke="#001b47" strokeWidth="3.2" strokeLinecap="round"/>
                  </svg>
                </span>
                <img data-photo-preview alt="" hidden />
                <span className="camera"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 8l1.5-2h5L16 8h2.5A2.5 2.5 0 0 1 21 10.5v6A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-6A2.5 2.5 0 0 1 5.5 8H8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="12" cy="13.5" r="3" stroke="currentColor" strokeWidth="2"/></svg></span>
              </button>
              <input data-photo-input type="file" accept="image/*" hidden />
            </div>
            <p className="photo-required">Profile picture<span>*</span></p>
            <button className="photo-adjust" type="button" data-photo-adjust hidden>Adjust photo</button>
            <button className="photo-remove" type="button" data-photo-remove hidden>Remove photo</button>
            <div className="segmented" role="group" aria-label="Privacy mode">
              <button type="button" className="active" data-privacy="private" aria-pressed="true">Private</button>
              <button type="button" data-privacy="public" aria-pressed="false">Public</button>
            </div>
          </div>
          <form data-form novalidate>
            <div className="grid-two">
              <label className="field">First Name<span>*</span><div className="control"><input data-first placeholder="First Name" autocomplete="given-name" /></div></label>
              <label className="field">Last Name<span>*</span><div className="control"><input data-last placeholder="Last Name" autocomplete="family-name" /></div></label>
            </div>
            <label className="field">Mobile Number<span>*</span><div className="control phone-row"><span className="dial-select" data-code-widget><button className="dial-button" type="button" data-code-button aria-haspopup="listbox" aria-expanded="false"><span data-code-value>+44 UK</span><span className="dial-chevron" aria-hidden="true">v</span></button><span className="dial-menu" data-code-menu hidden><input className="dial-search" data-code-search type="search" placeholder="Search country" autocomplete="off" aria-label="Search country code" /><span className="dial-options" data-code-options role="listbox"></span><span className="dial-empty" data-code-empty hidden>No country found</span></span><input data-code type="hidden" value="+44" /></span><input data-phone placeholder="Mobile Number" autocomplete="tel" inputmode="numeric" pattern="[0-9]*" /></div></label>
            <label className="field">Email<span>*</span><div className="control"><input data-email type="email" placeholder="Email" autocomplete="email" /></div></label>
            <label className="field">Password<span>*</span><div className="control"><input data-password type="password" placeholder="New Password" autocomplete="new-password" /><button className="password-toggle" type="button" data-toggle-password="password" aria-label="Show password"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg></button></div></label>
            <label className="field">Confirm Password<span>*</span><div className="control"><input data-confirm type="password" placeholder="Confirm Password" autocomplete="new-password" /><button className="password-toggle" type="button" data-toggle-password="confirm" aria-label="Show password"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg></button></div></label>
            <label className="agreement"><input data-agree type="checkbox" />Yes! I Agree all <a href="terms.html">Terms & Condition</a></label>
            <p className="status" data-status></p>
            <button className="primary" type="submit">Sign Up</button>
            <p className="social-title">Or Sign Up With</p>
            <div className="social-row">
              <button className="social" type="button" data-social="google" aria-label="Sign up with Google"><svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5Z"/><path fill="#FF3D00" d="M6.3 14.7 12.9 19.5C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.8l-6.5 5C9.5 39.6 16.2 44 24 44Z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5Z"/></svg></button>
              <button className="social" type="button" data-social="facebook" aria-label="Sign up with Facebook"><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="20" fill="#1877F2"/><path fill="#fff" d="M25.6 21.2h-3.7V34h-5.3V21.2h-2.7v-4.5h2.7v-2.9c0-2.1 1-5.5 5.5-5.5l4 .1v4.4h-2.9c-.5 0-1.3.3-1.3 1.4v2.5h4.3l-.6 4.5Z"/></svg></button>
            </div>
            <p className="switch">already have an account ? <button type="button" data-signin>Sign in</button></p>
          </form>
        </div>
      </section>
      <div className="sheet-overlay" data-photo-source-sheet aria-hidden="true">
        <section className="photo-sheet" aria-label="Choose profile photo source">
          <h2>Add profile photo</h2>
          <p>Choose a clear profile picture. You can crop it so the face sits properly inside the circle.</p>
          <div className="source-actions">
            <button type="button" data-photo-source="upload"><strong>Open gallery</strong><span>Choose an image from your phone, laptop, or files.</span></button>
            <button type="button" data-photo-source="camera"><strong>Take photo</strong><span>Use your camera to take a new profile picture.</span></button>
          </div>
          <button className="sheet-close" type="button" data-photo-source-close>Cancel</button>
        </section>
      </div>
      <div className="sheet-overlay" data-photo-camera-sheet aria-hidden="true">
        <section className="camera-sheet" aria-label="Camera capture">
          <h2>Take profile photo</h2>
          <p>Allow camera access, then capture a photo. You can crop it before continuing.</p>
          <div className="camera-preview-frame is-profile-camera" aria-label="Profile photo circle guide">
            <video className="camera-preview" data-camera-preview autoplay muted playsinline></video>
          </div>
          <p className="camera-status" data-camera-status></p>
          <div className="camera-actions">
            <button type="button" data-camera-cancel>Cancel</button>
            <button type="button" data-camera-capture>Take photo</button>
          </div>
        </section>
      </div>
      <div className="sheet-overlay crop-modal" data-photo-crop-modal aria-hidden="true">
        <section className="crop-card" aria-label="Adjust profile photo">
          <h2>Adjust profile photo</h2>
          <p className="crop-help">Drag the image to position it, then use zoom and the direction controls to fit it inside the circle.</p>
          <button className="crop-change" type="button" data-crop-change>Change image</button>
          <div className="crop-frame" data-crop-frame></div>
          <div className="crop-controls">
            <label>Zoom<input data-crop-zoom type="range" min="100" max="260" value="100" /></label>
            <label>Left / Right<input data-crop-x type="range" min="0" max="100" value="50" /></label>
            <label>Up / Down<input data-crop-y type="range" min="0" max="100" value="50" /></label>
          </div>
          <div className="crop-actions">
            <button className="crop-cancel" type="button" data-crop-cancel>Cancel</button>
            <button className="crop-apply" type="button" data-crop-apply>Apply</button>
          </div>
        </section>
      </div>
      <div className="registration-leave-modal" data-registration-leave-modal aria-hidden="true">
        <section className="registration-leave-card" role="dialog" aria-modal="true" aria-labelledby="registration-leave-title">
          <div className="registration-leave-mark" aria-hidden="true">!</div>
          <h2 id="registration-leave-title">Leave registration?</h2>
          <p>Any details you added in this registration will be deleted. If you leave now, you will need to start this registration again.</p>
          <div className="registration-leave-actions">
            <button className="registration-leave-continue" type="button" data-registration-continue>Continue registration</button>
            <button className="registration-leave-delete" type="button" data-registration-delete>Leave and delete details</button>
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
