import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from './Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <header>
        <div className="logo">💰 SmartSpend</div>
        <nav>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => isActive ? 'active' : ''} 
            >
              {link.label}
            </NavLink>
          ))}
          <button id="nav-signin-btn" className="btn" onClick={() => setIsModalOpen(true)}>
            Sign In
          </button>
        </nav>
      </header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;