
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BrainCircuit,
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Sparkles
} from "lucide-react";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email.trim() || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to log in.");
      }

      // The server should set a secure HttpOnly session cookie.
      navigate("/app");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <Link to="/" className="auth-brand">
        <span className="brand-icon">
          <BrainCircuit size={23} />
        </span>
        <span>TeamOS <b>AI</b></span>
      </Link>

      <div className="auth-card">
        <div className="auth-heading">
          <div className="auth-symbol">
            <Sparkles size={25} />
          </div>

          <span className="section-label">WELCOME BACK</span>
          <h1>Sign in to your workspace</h1>
          <p>Continue where your team left off.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <label htmlFor="email">Email address</label>
          <div className="input-wrap">
            <Mail size={18} />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <label htmlFor="password">Password</label>
          <div className="input-wrap">
            <Lock size={18} />
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="form-options">
            <label className="remember-label">
              <input type="checkbox" />
              Remember me
            </label>
            <button
              type="button"
              className="text-link"
              onClick={() => setError("Password reset will be added in the next authentication step.")}
            >
              Forgot password?
            </button>
          </div>

          {error && <div className="form-error">{error}</div>}

          <button
            type="submit"
            className="button button-primary auth-submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        <div className="auth-divider">
          <span>NEW TO TEAMOS AI?</span>
        </div>

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Create an account</Link>
        </p>
      </div>

      <p className="auth-footer">
        Your workspace, your team, your progress.
      </p>
    </div>
  );
}
