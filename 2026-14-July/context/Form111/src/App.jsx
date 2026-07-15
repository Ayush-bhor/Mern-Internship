import React from "react";
import YouTubeMusicLoginForm from "./From.jsx";
import "./App.css";

function DetailsPage({ profile, onBack }) {
  return (
    <div className="detailsPage">
      <div className="detailsCard" role="region" aria-label="YouTube Music details">
        <div className="detailsTop">
          <div className="detailsBadge">Signed in</div>
          <h1 className="detailsTitle">
            Welcome to YouTube Music{profile.displayName ? `, ${profile.displayName}` : ""}!
          </h1>
          <p className="detailsSub">Your local demo login redirected here and the app is ready to run.</p>
        </div>

        <div className="detailsGrid">
          <div className="kv">
            <div className="k">Account email</div>
            <div className="v">{profile.email || "—"}</div>
          </div>
          <div className="kv">
            <div className="k">Keep me signed in</div>
            <div className="v">{profile.remember ? "Yes" : "No"}</div>
          </div>
        </div>

        <button className="backBtn" onClick={onBack} type="button">
          Back to sign in
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = React.useState("login");
  const [profile, setProfile] = React.useState(null);

  function handleLogin(payload) {
    setProfile(payload);
    setPage("details");
  }

  if (page === "details") {
    return <DetailsPage profile={profile} onBack={() => setPage("login")} />;
  }

  return <YouTubeMusicLoginForm onLogin={handleLogin} />;
}
