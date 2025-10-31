import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PlanCard from '../components/PlanCard'; // Import the new reusable component

// --- Data Definitions for Pricing Plans ---
const plansData = [
    { 
        name: "Free", 
        monthly: 0, 
        yearly: 0, 
        features: ["Track expenses", "Basic reports", "1 budget goal"], 
        isFeatured: false, 
        buttonText: "Get Started" 
    },
    { 
        name: "Pro", 
        monthly: 9.99, 
        yearly: 99.99, // Note: This gives a slight discount compared to monthly * 12
        features: ["Advanced analytics", "Unlimited budgets", "Real-time syncing"], 
        isFeatured: true, 
        buttonText: "Upgrade Now" 
    },
    { 
        name: "Business", 
        monthly: 19.99, 
        yearly: 199.99, 
        features: ["Team accounts", "Priority support", "Custom integrations"], 
        isFeatured: false, 
        buttonText: "Contact Sales" 
    },
];

const PricingPage = () => {
    // State to manage the toggle: false = Monthly, true = Yearly
    const [isYearly, setIsYearly] = useState(false);

    useEffect(() => {
        document.title = 'SmartSpend – Pricing Plans';
    }, []);

    // Function to handle the toggle click, inverting the state
    const handleToggle = () => {
        setIsYearly(prev => !prev);
    };

    return (
        <>
            <Header />
            <main className="content">
                <h1>Our Pricing Plans ✨</h1>

                {/* Toggle Switch Logic */}
                <div className="toggle-container">
                    <span>Monthly</span>
                    <div 
                        className={`toggle-switch ${isYearly ? 'active' : ''}`} 
                        onClick={handleToggle}
                        role="switch"
                        aria-checked={isYearly}
                        tabIndex="0"
                    ></div>
                    <span>Yearly</span>
                </div>

                {/* Pricing Table (Renders PlanCard component for each plan) */}
                <div className="pricing-table">
                    {plansData.map((plan) => (
                        <PlanCard 
                            key={plan.name} 
                            plan={plan} 
                            isYearly={isYearly} 
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default PricingPage;