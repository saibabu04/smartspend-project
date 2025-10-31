import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  // State to toggle between 'signin' and 'signup' views
  const [view, setView] = useState('signin'); 

  // Reset view state whenever the modal is closed
  React.useEffect(() => {
    if (!isOpen) {
      setView('signin');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Handler for form submission (prevents default behavior and shows success message)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (view === 'signin') {
      alert("Sign In successful! Welcome back.");
    } else {
      alert("Account created successfully! Please sign in.");
      setView('signin'); // Switch back to sign-in after successful registration
    }
    // In a real app, you would handle Firebase/API authentication here
  };

  return (
    <div id="signin-modal" 
         className={`modal ${isOpen ? 'active' : ''}`} 
         aria-hidden={!isOpen}
         onClick={(e) => { if (e.target.id === 'signin-modal') onClose(); }} // Close if backdrop is clicked
    >
      <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="close-btn" onClick={onClose} aria-label="Close">&times;</button>
        
        {/* --- Dynamic Content Based on View State --- */}
        
        {view === 'signin' ? (
          <>
            <h2 id="modal-title">Sign In to SmartSpend</h2>
            <form onSubmit={handleFormSubmit}>
              <input type="email" placeholder="Email Address" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="btn">Sign In</button>
            </form>
            <p className="signup-link">
              Don’t have an account? 
              <a href="#" onClick={(e) => { e.preventDefault(); setView('signup'); }}>
                **Sign up here**
              </a>
            </p>
          </>
        ) : (
          <>
            <h2 id="modal-title">Create Your SmartSpend Account</h2>
            <form onSubmit={handleFormSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="password" placeholder="Create Password" required />
              <button type="submit" className="btn">Sign Up</button>
            </form>
            <p className="signup-link">
              Already have an account? 
              <a href="#" onClick={(e) => { e.preventDefault(); setView('signin'); }}>
                **Sign in**
              </a>
            </p>
          </>
        )}

      </div>
    </div>
  );
};

export default Modal;
