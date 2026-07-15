import React from "react";
import "./From.css";

function YouTubeMusicMark() {
  return (
    <svg
      className="ytMusicLogo"
      viewBox="0 0 64 64"
      role="img"
      aria-label="YouTube Music"
    >
      <defs>
        <linearGradient id="ytMusicGradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ff4b2b" />
          <stop offset="100%" stopColor="#ff1f5a" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#ytMusicGradient)" />
      <circle cx="32" cy="32" r="12" fill="rgba(255,255,255,0.92)" />
      <polygon points="29,25 41,32 29,39" fill="#ff1f5a" />
    </svg>
  );
}

export default function YouTubeMusicLoginForm({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [remember, setRemember] = React.useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email: email.trim(),
      displayName: displayName.trim(),
      remember,
    });
  }

  return (
    <div className="musicPage">
      <div className="musicCard" role="region" aria-label="YouTube Music Login">
        <div className="musicHeader">
          <YouTubeMusicMark />
          <div>
            <div className="brandPill">YouTube Music</div>
            <h1 className="musicTitle">Sign in to your music space</h1>
            <p className="musicSubtitle">Stream your favorites, save your vibe, and keep it synced.</p>
          </div>
        </div>

        <form className="musicForm" onSubmit={handleSubmit}>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              autoComplete="email"
            />
          </label>

          <label className="field">
            <span>Display name</span>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="What should we call you?"
              required
              autoComplete="nickname"
            />
          </label>

          <label className="checkRow">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span>Remember me</span>
          </label>

          <button type="submit" className="loginBtn">
            Continue with YouTube Music
          </button>

          <p className="finePrint">
            Demo screen only. This form redirects to a local confirmation page so the project runs without external services.
          </p>
        </form>
      </div>
    </div>
  );
}
