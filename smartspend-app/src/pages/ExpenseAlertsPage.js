import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ExpenseAlertsPage = () => {
  const [alerts, setAlerts] = useState({
    budgetLimit: true,
    largeTransaction: true,
    email: false,
    sms: false,
  });

  useEffect(() => {
    document.title = "SmartSpend – Expense Alerts";
  }, []);

  const handleToggle = (key) => {
    setAlerts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-10 px-6">
        <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 text-center">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-green-700 mb-3 flex justify-center items-center gap-2">
            Expense Alerts <span role="img" aria-label="bell">🔔</span>
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Stay informed and avoid overspending with real-time notifications based on your
            budgets and thresholds.
          </p>

          {/* Notification Settings */}
          <div className="border-t border-b py-8 mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              Notification Settings
            </h2>
            <p className="text-gray-600 mb-6">
              Customize when and how you want to receive alerts. Choose notification
              types, frequency, and limits.
            </p>

            <div className="grid md:grid-cols-2 gap-4 justify-center max-w-md mx-auto text-left">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={alerts.budgetLimit}
                  onChange={() => handleToggle("budgetLimit")}
                  className="w-5 h-5 accent-green-600"
                />
                <span className="text-gray-800 font-medium">Budget Limit Alerts</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={alerts.largeTransaction}
                  onChange={() => handleToggle("largeTransaction")}
                  className="w-5 h-5 accent-green-600"
                />
                <span className="text-gray-800 font-medium">
                  Large Transaction Alerts
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={alerts.email}
                  onChange={() => handleToggle("email")}
                  className="w-5 h-5 accent-green-600"
                />
                <span className="text-gray-800 font-medium">Email Notifications</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={alerts.sms}
                  onChange={() => handleToggle("sms")}
                  className="w-5 h-5 accent-green-600"
                />
                <span className="text-gray-800 font-medium">SMS Notifications</span>
              </label>
            </div>
          </div>

          {/* Recent Alerts Section */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Recent Alerts
            </h2>

            <div className="space-y-3 text-left max-w-lg mx-auto">
              <div className="flex items-start gap-2">
                <span className="text-yellow-500 text-xl">⚠️</span>
                <p className="text-gray-800">
                  <strong>Food budget</strong> reached <strong>90%</strong> —{" "}
                  <span className="text-gray-500">Yesterday</span>
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-blue-500 text-xl">💳</span>
                <p className="text-gray-800">
                  Single transaction over <strong>₹5000</strong> —{" "}
                  <span className="text-gray-500">2 days ago</span>
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-green-600 text-xl">✅</span>
                <p className="text-gray-800">
                  All alerts are <strong>active</strong> —{" "}
                  <span className="text-gray-500">Today</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ExpenseAlertsPage;
