import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState("");

  // ✅ Restore from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("smartspendUser");
    if (savedUser) {
      setUserName(savedUser);
      setIsSignedIn(true);
    }
  }, []);

  // ✅ Handle successful sign-in
  const handleSignInSuccess = (email) => {
    const name = email.split("@")[0];
    const displayName = name.charAt(0).toUpperCase() + name.slice(1);
    setUserName(displayName);
    setIsSignedIn(true);
    localStorage.setItem("smartspendUser", displayName);
  };

  // ✅ Handle sign-out
  const handleSignOut = () => {
    setIsSignedIn(false);
    setUserName("");
    localStorage.removeItem("smartspendUser");
  };

  return (
    <AuthContext.Provider
      value={{ isSignedIn, userName, handleSignInSuccess, handleSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
