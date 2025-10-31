import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExpenseAlertsPage = () => {
  useEffect(() => {
    document.title = 'SmartSpend – Expense Alerts';
  }, []);

  return (
    <>
      <Header />
      <main className="content py-10 px-4 sm:px-8 bg-gradient-to-br from-gray-50 to-green-50 min-h-screen">
        <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 transition-transform hover:scale-[1.01] duration-300">
          <h1 className="text-4xl font-bold text-green-700 mb-4 flex items-center gap-2">
            Expense Alerts <span className="text-3xl">🔔</span>
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Stay informed and avoid overspending with real-time notifications based on your set budgets and thresholds.
          </p>

          {/* Notification Settings */}
          <div className="bg-green-50 p-6 rounded-xl shadow-inner mb-8">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">Notification Settings</h2>
            <p className="text-gray-600 mb-4">
              Customize when and how you want to receive alerts. You can choose notification types, frequency, and budget limits.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 bg-white border border-green-200 rounded-lg shadow-sm hover:shadow-md transition">
                <span className="font-medium text-gray-700">Budget Limit Alerts</span>
                <input type="checkbox" defaultChecked className="accent-green-600 w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 bg-white border border-green-200 rounded-lg shadow-sm hover:shadow-md transition">
                <span className="font-medium text-gray-700">Large Transaction Alerts</span>
                <input type="checkbox" defaultChecked className="accent-green-600 w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 bg-white border border-green-200 rounded-lg shadow-sm hover:shadow-md transition">
                <span className="font-medium text-gray-700">Email Notifications</span>
                <input type="checkbox" className="accent-green-600 w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 bg-white border border-green-200 rounded-lg shadow-sm hover:shadow-md transition">
                <span className="font-medium text-gray-700">SMS Notifications</span>
                <input type="checkbox" className="accent-green-600 w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Recent Alerts Section */}
          <div>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Recent Alerts</h2>
            <ul className="space-y-3">
              <li className="bg-green-50 p-4 rounded-lg shadow-sm flex items-center justify-between hover:bg-green-100 transition">
                <span className="text-gray-800">⚠️ Food budget reached <strong>90%</strong></span>
                <span className="text-sm text-gray-500">Yesterday</span>
              </li>
              <li className="bg-green-50 p-4 rounded-lg shadow-sm flex items-center justify-between hover:bg-green-100 transition">
                <span className="text-gray-800">💳 Single transaction over <strong>$500</strong></span>
                <span className="text-sm text-gray-500">2 days ago</span>
              </li>
              <li className="bg-green-50 p-4 rounded-lg shadow-sm flex items-center justify-between hover:bg-green-100 transition">
                <span className="text-gray-800">✅ All alerts are active</span>
                <span className="text-sm text-gray-500">Today</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ExpenseAlertsPage;
