import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SetMonthlyGoalsPage = () => {
  const [goals, setGoals] = useState([
    { category: 'Groceries', amount: '' },
    { category: 'Rent', amount: '' },
    { category: 'Entertainment', amount: '' },
    { category: 'Transportation', amount: '' },
  ]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    document.title = 'SmartSpend – Set Monthly Goals';
  }, []);

  useEffect(() => {
    const totalAmount = goals.reduce((sum, goal) => sum + (Number(goal.amount) || 0), 0);
    setTotal(totalAmount);
  }, [goals]);

  const handleAmountChange = (index, value) => {
    const updatedGoals = [...goals];
    updatedGoals[index].amount = value;
    setGoals(updatedGoals);
  };

  const handleAddCategory = () => {
    setGoals([...goals, { category: '', amount: '' }]);
  };

  const handleSave = () => {
    alert('✅ Monthly goals saved successfully!');
  };

  return (
    <>
      <Header />
      <main className="content bg-gray-50 min-h-screen p-6">
        <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-green-700 mb-2 text-center">
            Set Monthly Goals 🎯
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Define your spending limits and financial objectives for the current month.
            Stay on track and achieve your goals with SmartSpend!
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-100 text-left">
                  <th className="p-3 text-gray-700 font-semibold">Category</th>
                  <th className="p-3 text-gray-700 font-semibold">Monthly Limit (₹)</th>
                </tr>
              </thead>
              <tbody>
                {goals.map((goal, index) => (
                  <tr key={index} className="border-b hover:bg-green-50 transition">
                    <td className="p-3">
                      <input
                        type="text"
                        value={goal.category}
                        onChange={(e) => {
                          const updatedGoals = [...goals];
                          updatedGoals[index].category = e.target.value;
                          setGoals(updatedGoals);
                        }}
                        className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="Enter category name"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        value={goal.amount}
                        onChange={(e) => handleAmountChange(index, e.target.value)}
                        className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="0.00"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handleAddCategory}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              + Add Category
            </button>

            <div className="text-lg font-semibold text-gray-700">
              Total Budget: <span className="text-green-700 font-bold">₹{total.toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleSave}
              className="px-8 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition text-lg font-semibold"
            >
              Save Goals
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SetMonthlyGoalsPage;
