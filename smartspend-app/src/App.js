import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Import all pages
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import ReportsPage from "./pages/ReportsPage";
import BudgetingPage from "./pages/BudgetingPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import SetMonthlyGoalsPage from "./pages/SetMonthlyGoalsPage";
import TrackSavingsPage from "./pages/TrackSavingsPage";
import ExpenseAlertsPage from "./pages/ExpenseAlertsPage";
import VisualAnalyticsPage from "./pages/VisualAnalyticsPage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/budgeting" element={<BudgetingPage />} />
          <Route path="/budgeting/goals" element={<SetMonthlyGoalsPage />} />
          <Route path="/budgeting/savings" element={<TrackSavingsPage />} />
          <Route path="/budgeting/alerts" element={<ExpenseAlertsPage />} />
          <Route path="/budgeting/analytics" element={<VisualAnalyticsPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
