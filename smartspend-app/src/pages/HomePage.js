import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Contains the Sign-In button and Modal logic
import Footer from '../components/Footer';

// A simple reusable card for the "Why Choose SmartSpend?" section
const FeatureHighlightCard = ({ imageSrc, altText, title, description }) => (
  <div className="card">
    <img src={imageSrc} alt={altText} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const HomePage = () => {
  // Set the document title when the component mounts
  useEffect(() => {
    document.title = 'SmartSpend – Home';
  }, []);

  // Data for the 'Why Choose SmartSpend?' highlights
  const highlights = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png",
      alt: "Expense Tracking",
      title: "Expense Tracking",
      description: "Log your expenses in seconds and categorize them automatically.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
      alt: "Reports",
      title: "Detailed Reports",
      description: "Visualize your spending trends through charts and analytics.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
      alt: "Budget Planning",
      title: "Smart Budgeting",
      description: "Set monthly budgets and get real-time alerts to stay on track.",
    },
  ];

  const testimonials = [
    { quote: "SmartSpend helped me reduce my monthly expenses by 25%! I love the visual reports.", cite: "Sarah J." },
    { quote: "Finally, a budgeting app that’s both powerful and easy to use.", cite: "David M." },
    { quote: "Tracking my spending has never been this effortless.", cite: "Priya R." },
  ];

  return (
    <>
      <Header />
      
      {/* Main Content */}
      <main>
        {/* --- Hero Section --- */}
        <section className="hero">
          <div className="hero-text">
            <h1>Track, Save, & Grow with **SmartSpend**</h1>
            <p>SmartSpend helps you take control of your finances by tracking expenses, setting budgets, and reaching your savings goals.</p>
            {/* Use Link component for internal navigation */}
            <Link to="/features" className="cta-btn">Explore Features</Link>
          </div>
          <div className="hero-img">
            <img 
              src="https://images.unsplash.com/photo-1604594849809-dfedbc827105" 
              alt="Expense Tracking Dashboard"
            />
          </div>
        </section>

        {/* --- Intro Section --- */}
        <section className="intro">
          <h2>Take Charge of Your Financial Future</h2>
          <p>With SmartSpend, you’ll always know where your money goes. From daily purchases to monthly savings goals, our platform gives you the insights you need to make smarter decisions.</p>
        </section>

        {/* --- Highlights Section --- */}
        <section className="highlights">
          <h2>Why Choose SmartSpend?</h2>
          <div className="feature-cards">
            {highlights.map((feature, index) => (
              <FeatureHighlightCard
                key={index}
                imageSrc={feature.img}
                altText={feature.alt}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* --- Testimonials Section --- */}
        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <blockquote key={index}>
                “{item.quote}” 
                <cite>– {item.cite}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="cta">
          <h2>Start Managing Your Finances Smarter</h2>
          <p>Join thousands of people achieving financial freedom with SmartSpend.</p>
          <Link to="/pricing" className="cta-btn">Get Started</Link>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default HomePage;