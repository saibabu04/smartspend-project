import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- Data for Budgeting Features with corresponding routes ---
const budgetFeatures = [
    { 
        title: "Set Monthly Goals", 
        description: "Plan your spending with personalized monthly targets and stay on track effortlessly.",
        to: "/budgeting/goals" // Links to SetMonthlyGoalsPage.js
    },
    { 
        title: "Track Savings", 
        description: "Monitor your progress toward savings goals in real time with clear insights.",
        to: "/budgeting/savings" // Links to TrackSavingsPage.js
    },
    { 
        title: "Expense Alerts", 
        description: "Receive automatic notifications when you exceed your planned budget.",
        to: "/budgeting/alerts" // Links to ExpenseAlertsPage.js
    },
    { 
        title: "Visual Analytics", 
        description: "Analyze spending patterns using charts and reports for smarter decisions.",
        to: "/budgeting/analytics" // Links to VisualAnalyticsPage.js
    },
];

// --- Reusable Component for a Clickable Feature Card ---
const BudgetFeatureLink = ({ title, description, to }) => (
    // The entire card is wrapped in a React Router Link
    <Link to={to} className="card no-underline"> 
        <h3>{title}</h3>
        <p>{description}</p>
    </Link>
);


const BudgetingPage = () => {
    // Set the document title
    useEffect(() => {
        document.title = 'SmartSpend – Budgeting';
    }, []);

    return (
        <>
            <Header />
            <main className="content">
                <h1>Professional Budgeting Tools</h1>
                <p>SmartSpend provides intuitive tools to track, plan, and optimize your finances efficiently.</p>
                
                <div className="budget-cards">
                    {/* Map over the feature data and render the clickable link component */}
                    {budgetFeatures.map((feature, index) => (
                        <BudgetFeatureLink
                            key={index} 
                            title={feature.title} 
                            description={feature.description}
                            to={feature.to}
                        />
                    ))}
                </div>
                
                
            </main>
            <Footer />
        </>
    );
};

export default BudgetingPage;
