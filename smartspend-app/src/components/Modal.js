import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, onSuccessfulSignIn }) => {
  const [view, setView] = useState("signin");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ✅ Close modal on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (view === "signin") {
      const storedUser = JSON.parse(localStorage.getItem("smartspendUser"));

      // 🧠 If no user found → redirect to signup
      if (!storedUser) {
        alert("⚠️ No account found. Please sign up first to continue.");
        setView("signup");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
        return;
      }

      // 🔐 If email & password match → success
      if (
        formData.email === storedUser.email &&
        formData.password === storedUser.password
      ) {
        alert(`✅ Welcome back, ${storedUser.name}!`);
        if (typeof onSuccessfulSignIn === "function") {
          onSuccessfulSignIn(storedUser.email);
        }
        onClose();
      } else {
        alert("❌ Incorrect email or password. Please try again.");
      }
    } else {
      // 📝 Handle signup
      const { name, email, password, confirmPassword } = formData;

      if (!name || !email || !password || !confirmPassword) {
        alert("⚠️ Please fill in all fields.");
        return;
      }

      if (password !== confirmPassword) {
        alert("❌ Passwords do not match.");
        return;
      }

      const newUser = { name, email, password };
      localStorage.setItem("smartspendUser", JSON.stringify(newUser));

      alert("🎉 Signup successful! You can now sign in.");
      setView("signin");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content improved"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-body improved-body">
          <h2 className="brand-title text-green">SmartSpend</h2>

          {view === "signin" ? (
            <>
              <h3 className="modal-subtitle">
                Welcome Back 👋 <br /> Sign in to continue your journey
              </h3>

              <form onSubmit={handleSubmit} className="modal-form">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="modal-input"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="modal-input"
                  required
                />
                <button type="submit" className="modal-btn improved-btn">
                  Sign In
                </button>
              </form>

              <p className="signup-text">
                Don’t have an account?{" "}
                <span
                  className="signup-link"
                  onClick={() => setView("signup")}
                >
                  Sign Up
                </span>
              </p>
            </>
          ) : (
            <>
              <h3 className="modal-subtitle">Create Your Account 🚀</h3>

              <form onSubmit={handleSubmit} className="modal-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="modal-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="modal-input"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="modal-input"
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="modal-input"
                  required
                />
                <button type="submit" className="modal-btn improved-btn">
                  Create Account
                </button>
              </form>

              <p className="signup-text">
                Already have an account?{" "}
                <span
                  className="signup-link"
                  onClick={() => setView("signin")}
                >
                  Sign In
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
