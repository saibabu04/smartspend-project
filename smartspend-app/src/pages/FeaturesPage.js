import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';

const featureData = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png",
    alt: "Expense Tracker",
    title: "Expense Tracking",
    description: "Record and categorize your expenses easily. Understand where your money goes and make informed decisions.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3208/3208768.png",
    alt: "Analytics Dashboard",
    title: "Analytics Dashboard",
    description: "Visualize spending trends, income breakdowns, and category-wise distribution with beautiful charts.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    alt: "Budget Planning",
    title: "Budget Planning",
    description: "Create budgets and get real-time alerts when you're close to overspending in any category.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4727/4727247.png",
    alt: "Savings Goals",
    title: "Savings Goals",
    description: "Set and track savings targets for vacations, emergencies, or long-term investments.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3081/3081957.png",
    alt: "Sync & Security",
    title: "Cloud Sync & Security",
    description: "Access your data from anywhere with 256-bit encryption to ensure your privacy and security.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
    alt: "Custom Reports",
    title: "Custom Reports",
    description: "Generate detailed reports by category, date, or project to get deeper financial insights.",
  },
];

const FeaturesPage = () => {
  useEffect(() => {
    document.title = 'SmartSpend – Features';
  }, []);

  return (
    <>
      <Header />
      <main className="content">
        <h1>SmartSpend **Features** 🚀</h1>
        <p>Discover all the powerful tools SmartSpend offers to help you take control of your finances and grow your savings effortlessly.</p>

        <div className="feature-grid">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              imageSrc={feature.img}
              altText={feature.alt}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FeaturesPage;