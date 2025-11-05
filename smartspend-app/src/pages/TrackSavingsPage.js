import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./TrackSavings.css";

const TrackSavingsPage = () => {
  const [savingsGoals, setSavingsGoals] = useState([
    { name: "Emergency Fund", target: 10000, saved: 4500 },
    { name: "Vacation", target: 5000, saved: 3200 },
    { name: "New Laptop", target: 80000, saved: 15000 },
  ]);

  const [newGoal, setNewGoal] = useState({ name: "", target: "", saved: "" });
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = "SmartSpend – Track Savings";
    const storedUser = localStorage.getItem("smartspendUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleAddGoal = () => {
    if (!newGoal.name || !newGoal.target) {
      alert("⚠️ Please enter a valid goal name and target amount.");
      return;
    }

    setSavingsGoals([
      ...savingsGoals,
      {
        name: newGoal.name,
        target: Number(newGoal.target),
        saved: Number(newGoal.saved) || 0,
      },
    ]);

    setNewGoal({ name: "", target: "", saved: "" });
  };

  const handleAddFunds = (index, amount) => {
    const updatedGoals = [...savingsGoals];
    updatedGoals[index].saved += Number(amount);
    setSavingsGoals(updatedGoals);
  };

  const progressPercentage = (saved, target) =>
    Math.min(((saved / target) * 100).toFixed(1), 100);

  return (
    <>
      <Header />
      <main className="content bg-gray-50 min-h-screen p-6">
        <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-green-700 mb-2 text-center">
            Savings Tracker 🏦
          </h1>

          {user ? (
            <>
              <p className="text-gray-600 mb-8 text-center">
                Hi <span className="text-green-700 font-semibold">{user.name}</span>!<br />
                Visualize your progress toward long-term financial freedom.
              </p>

              {/* Active Goals List */}
              <div className="space-y-6">
                {savingsGoals.map((goal, index) => (
                  <div
                    key={index}
                    className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-green-50"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-semibold text-green-700">
                        {goal.name}
                      </h3>
                      <span className="text-sm text-gray-600">
                        Target: ₹{goal.target.toLocaleString()}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
                      <div
                        className="bg-green-600 h-4 rounded-full transition-all"
                        style={{
                          width: `${progressPercentage(goal.saved, goal.target)}%`,
                        }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-700">
                      <span>Saved: ₹{goal.saved.toLocaleString()}</span>
                      <span>{progressPercentage(goal.saved, goal.target)}%</span>
                    </div>

                    {/* Add Funds */}
                    <div className="mt-4 flex gap-2">
                      <input
                        type="number"
                        placeholder="Add Amount"
                        min="0"
                        className="border p-2 rounded-lg w-2/3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && e.target.value) {
                            handleAddFunds(index, e.target.value);
                            e.target.value = "";
                          }
                        }}
                      />
                      <button
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        onClick={() => {
                          const amountInput = document.querySelectorAll(
                            "input[type='number']"
                          )[index];
                          if (amountInput.value) {
                            handleAddFunds(index, amountInput.value);
                            amountInput.value = "";
                          }
                        }}
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Goal Section */}
              <div className="mt-10 border-t pt-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">
                  Add a New Savings Goal
                </h2>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <input
                    type="text"
                    value={newGoal.name}
                    onChange={(e) =>
                      setNewGoal({ ...newGoal, name: e.target.value })
                    }
                    placeholder="Goal Name"
                    className="border rounded-lg p-3 w-full md:w-1/4 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                  <input
                    type="number"
                    value={newGoal.target}
                    onChange={(e) =>
                      setNewGoal({ ...newGoal, target: e.target.value })
                    }
                    placeholder="Target Amount (₹)"
                    className="border rounded-lg p-3 w-full md:w-1/4 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                  <input
                    type="number"
                    value={newGoal.saved}
                    onChange={(e) =>
                      setNewGoal({ ...newGoal, saved: e.target.value })
                    }
                    placeholder="Saved So Far (₹)"
                    className="border rounded-lg p-3 w-full md:w-1/4 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                  <button
                    onClick={handleAddGoal}
                    className="px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition font-semibold"
                  >
                    Add Goal
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-red-600 mb-4">
                ⚠️ Please sign in to track your savings goals.
              </h2>
              <p className="text-gray-600">
                Sign up or sign in using the button at the top of the page to start
                saving and monitoring your financial goals.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TrackSavingsPage;
