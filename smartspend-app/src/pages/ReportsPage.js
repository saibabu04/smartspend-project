import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReportChart from '../components/ReportChart';

// --- Data Definitions (Moved from JavaScript in HTML) ---

// Monthly Data Set
const monthlyData = {
  categories: {
    labels: ["Food", "Transport", "Bills", "Shopping", "Entertainment"],
    data: [450, 120, 300, 200, 130],
  },
  trends: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    spending: [2000, 2200, 2100, 2500, 2300, 2400],
  },
  incomeExpense: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    income: [3000, 3200, 3100, 3300, 3400, 3500],
    expenses: [2000, 2200, 2100, 2500, 2300, 2400],
  },
  insights: [
    { label: "Top Spending Category", value: "Food & Dining" },
    { label: "Lowest Spending Category", value: "Entertainment" },
    { label: "Average Monthly Expense", value: "$2,150" },
    { label: "Spending Change (MoM)", value: "+4.3%" },
  ],
};

// Yearly Data Set
const yearlyData = {
  categories: { // Using the same category distribution for simplicity in the demo data
    labels: ["Food", "Transport", "Bills", "Shopping", "Entertainment"],
    data: [4500, 1200, 3000, 2000, 1300],
  },
  trends: {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    spending: [22000, 24500, 23000, 26000, 27500],
  },
  incomeExpense: {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    income: [34000, 35000, 36000, 38000, 40000],
    expenses: [25000, 27000, 28000, 30000, 32000],
  },
  insights: [
    { label: "Top Spending Category", value: "Food & Dining" },
    { label: "Total Annual Expense", value: "$27,500" },
    { label: "Spending Change (YoY)", value: "+12%" },
    { label: "Avg. Monthly Expense", value: "$2,291" },
  ],
};

const ReportsPage = () => {
  const [view, setView] = useState('monthly');
  const activeData = view === 'monthly' ? monthlyData : yearlyData;

  // Memoize chart data objects to avoid unnecessary re-renders in ReportChart
  const categoryChartData = useMemo(() => ({
    labels: activeData.categories.labels,
    datasets: [{
      label: "Spending ($)",
      data: activeData.categories.data,
      backgroundColor: ["#2b8a3e", "#56cc9d", "#f4b400", "#4285f4", "#ea4335"],
    }],
  }), [activeData]);

  const trendChartData = useMemo(() => ({
    labels: activeData.trends.labels,
    datasets: [{
      label: `${view === 'monthly' ? 'Monthly' : 'Annual'} Spending ($)`,
      data: activeData.trends.spending,
      borderColor: "#2b8a3e",
      backgroundColor: "rgba(43,138,62,0.1)",
      tension: 0.3,
      fill: true,
    }],
  }), [activeData, view]);

  const incomeExpenseChartData = useMemo(() => ({
    labels: activeData.incomeExpense.labels,
    datasets: [
      {
        label: "Income ($)",
        data: activeData.incomeExpense.income,
        backgroundColor: "#56cc9d",
      },
      {
        label: "Expenses ($)",
        data: activeData.incomeExpense.expenses,
        backgroundColor: "#ea4335",
      },
    ],
  }), [activeData]);


  // Effect to manage the document title
  useEffect(() => {
    document.title = 'SmartSpend – Reports & Analytics';
  }, []);

  return (
    <>
      <Header />
      <main className="content fade-in">
        <section className="reports-header">
          <h1>Financial Reports & Insights</h1>
          <p>Track, analyze, and understand your spending patterns with SmartSpend’s powerful reporting tools.</p>

          <div className="report-filters">
            <label htmlFor="report-type">View Report:</label>
            <select id="report-type" value={view} onChange={(e) => setView(e.target.value)}>
              <option value="monthly">Monthly Overview</option>
              <option value="yearly">Yearly Summary</option>
            </select>
          </div>
        </section>

        {/* --- Charts Section --- */}
        <section className="charts-container">
          <div className="chart-card">
            <h3>Spending by Category</h3>
            <ReportChart type="doughnut" data={categoryChartData} options={{ plugins: { legend: { position: "bottom" } } }} />
          </div>

          <div className="chart-card">
            <h3>{view === 'monthly' ? 'Monthly' : 'Annual'} Spending Trend</h3>
            <ReportChart type="line" data={trendChartData} options={{}} />
          </div>

          <div className="chart-card">
            <h3>Income vs Expenses</h3>
            <ReportChart type="bar" data={incomeExpenseChartData} options={{ plugins: { legend: { position: "bottom" } } }} />
          </div>
        </section>

        {/* --- Insights Section --- */}
        <section className="insights">
          <h2>Key Insights</h2>
          <ul>
            {activeData.insights.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </section>

        {/* --- CTA --- */}
        <section className="cta">
          <h2>Want Deeper Insights?</h2>
          <p>Upgrade to SmartSpend Pro for custom analytics and exportable reports.</p>
          <a href="pricing.html" className="cta-btn">Upgrade Now</a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ReportsPage;