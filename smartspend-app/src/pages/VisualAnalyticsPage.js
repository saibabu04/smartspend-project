import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./VisualAnalytics.css";

const VisualAnalyticsPage = () => {
  useEffect(() => {
    document.title = "SmartSpend – Visual Analytics";
  }, []);

  return (
    <>
      <Header />
      <main className="analytics-bg min-h-screen py-10 px-6">
        <section className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-700 flex justify-center items-center gap-2 mb-4">
              Visual Analytics <span role="img" aria-label="chart">📊</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Deep dive into your financial data with beautiful charts, heatmaps,
              and year-over-year trends — all designed to make smart spending simpler.
            </p>
          </div>

          {/* Spending Distribution */}
          <div className="analytics-section">
            <h2 className="section-title">Spending Distribution</h2>
            <p className="section-subtitle">
              Overview of your expenses by category for this month.
            </p>
            <div className="chart-placeholder doughnut-placeholder">
              <span>🍩 Doughnut Chart Placeholder</span>
            </div>
          </div>

          {/* Net Worth Trend */}
          <div className="analytics-section">
            <h2 className="section-title">Net Worth Trend</h2>
            <p className="section-subtitle">
              Track your savings and investments growth over time.
            </p>
            <div className="chart-placeholder line-placeholder">
              <span>📈 Line Chart Placeholder</span>
            </div>
          </div>

          {/* Category Insights */}
          <div className="analytics-section">
            <h2 className="section-title">Category Insights</h2>
            <p className="section-subtitle">
              Compare your monthly category-wise expenses using heatmaps.
            </p>
            <div className="chart-placeholder heatmap-placeholder">
              <span>🔥 Heatmap Chart Placeholder</span>
            </div>
          </div>

          {/* Insights & Highlights */}
          <div className="insights-section mt-12 p-6 bg-green-50 border border-green-200 rounded-2xl shadow-inner">
            <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2 justify-center">
              Insights & Highlights <span role="img" aria-label="idea">💡</span>
            </h2>

            <ul className="space-y-3 text-gray-700 text-lg max-w-xl mx-auto text-left">
              <li className="highlight-item">
                🎬 Your <strong>entertainment spending</strong> dropped
                <strong> 12%</strong> compared to last month.
              </li>
              <li className="highlight-item">
                🛒 <strong>Groceries</strong> make up <strong>28%</strong> of your total spending.
              </li>
              <li className="highlight-item">
                🏦 Your <strong>emergency fund</strong> growth trend is steady —
                <strong> up 8%</strong> this quarter.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VisualAnalyticsPage;
