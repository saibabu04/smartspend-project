import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VisualAnalyticsPage = () => {
  useEffect(() => {
    document.title = 'SmartSpend – Visual Analytics';
  }, []);

  return (
    <>
      <Header />
      <main className="content visual-analytics-page">
        <h1>Visual Analytics 📊</h1>
        <p>
          Deep dive into your financial data with beautiful charts, heatmaps, and year-over-year trends — all designed to make smart spending simpler.
        </p>

        <section className="charts-section max-w-6xl mx-auto">
          {/* --- Spending Distribution --- */}
          <div className="chart-card enhanced-card">
            <h3>Spending Distribution</h3>
            <p className="chart-subtext">Overview of your expenses by category for this month.</p>
            <div className="chart-placeholder">
              <span>Chart Placeholder (Doughnut)</span>
            </div>
          </div>

          {/* --- Net Worth Trend --- */}
          <div className="chart-card enhanced-card">
            <h3>Net Worth Trend</h3>
            <p className="chart-subtext">Track your savings and investments growth over time.</p>
            <div className="chart-placeholder">
              <span>Chart Placeholder (Line Chart)</span>
            </div>
          </div>

          {/* --- Additional Placeholder for Growth Insights --- */}
          <div className="chart-card enhanced-card">
            <h3>Category Insights</h3>
            <p className="chart-subtext">Compare your monthly category-wise expenses using heatmaps.</p>
            <div className="chart-placeholder">
              <span>Chart Placeholder (Heatmap)</span>
            </div>
          </div>
        </section>

        <section className="insights-section">
          <h2>Insights & Highlights 💡</h2>
          <ul>
            <li>Your entertainment spending dropped 12% compared to last month.</li>
            <li>Groceries make up 28% of your total spending.</li>
            <li>Your emergency fund growth trend is steady — up 8% this quarter.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VisualAnalyticsPage;
