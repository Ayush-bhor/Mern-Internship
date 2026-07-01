import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="container">
      <div className="form-box">
        <h1>Login Form</h1>

        <div className="tabs">
          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>

          <button
            className={activeTab === "signup" ? "active" : ""}
            onClick={() => setActiveTab("signup")}
          >
            Signup
          </button>
        </div>

        {activeTab === "signup" && (
          <input type="text" placeholder="Full Name" />
        )}

        <input type="email" placeholder="Email Address" />

        <input type="password" placeholder="Password" />

        {activeTab === "login" && (
          <p className="forgot">Forgot password?</p>
        )}

        <button className="login-btn">
          {activeTab === "login" ? "Login" : "Signup"}
        </button>

        <p className="bottom-text">
          {activeTab === "login" ? (
            <>
              Not a member?
              <span onClick={() => setActiveTab("signup")}>
                {" "}
                Signup now
              </span>
            </>
          ) : (
            <>
              Already have an account?
              <span onClick={() => setActiveTab("login")}>
                {" "}
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default App;