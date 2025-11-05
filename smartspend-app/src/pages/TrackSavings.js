import React, { useEffect, useState } from "react";
import "./TrackSavings.css"; // Optional: create CSS for styles

const TrackSavings = () => {
  const [user, setUser] = useState(null);

  // ✅ Check localStorage for signed-in user
  useEffect(() => {
    const storedUser = localStorage.getItem("smartspendUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <section className="track-savings-section">
      <div className="track-savings-container">
        <h2 className="track-savings-title">💰 Track Savings</h2>
        <p className="track-savings-subtitle">
          Monitor your progress toward savings goals in real time with clear insights.
        </p>

        {user ? (
          <div className="user-greeting">
            <h3 className="welcome-message">
              ✅ Welcome back, {user.name}! Let’s grow your savings together.
            </h3>
            <div className="savings-details">
              <p>Here you can track your savings milestones and progress visually.</p>
              <ul>
                <li>🎯 Set financial goals</li>
                <li>📈 Monitor your daily or monthly savings</li>
                <li>📊 See visual insights into your progress</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="signin-reminder">
            <p>⚠️ Please sign in to start tracking your savings.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrackSavings;
