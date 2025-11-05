import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Modal from "./Modal";

const Header = () => {
  const { isSignedIn, userName, handleSignOut, handleSignInSuccess } =
    useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/reports", label: "Reports" },
    { to: "/budgeting", label: "Budgeting" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="main-header">
        <div className="logo">💰 SmartSpend</div>
        <nav>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
          ))}

          {isSignedIn ? (
            <div
              className="profile-menu"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <div className="profile-info">
                <span className="profile-icon">👤</span>
                {userName}
              </div>
              {showDropdown && (
                <div className="dropdown-menu">
                  <button onClick={handleSignOut}>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <button className="btn" onClick={() => setIsModalOpen(true)}>
              Sign In
            </button>
          )}
        </nav>
      </header>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccessfulSignIn={(email) => {
          handleSignInSuccess(email);
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default Header;
