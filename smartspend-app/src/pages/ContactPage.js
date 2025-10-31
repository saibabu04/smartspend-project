import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  // 1. State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Set the document title
  useEffect(() => {
    document.title = 'SmartSpend – Contact';
  }, []);

  // 2. Handler for input changes (to update state)
  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    // Map placeholder names to state keys (name, email, message)
    const key = placeholder.replace(/Your\s*|\s*Address/g, '').toLowerCase();

    setFormData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  // 3. Handler for form submission (replaces the vanilla JS logic)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send data to an API endpoint
    console.log('Form Submitted with Data:', formData);
    
    // Dummy alert logic from original file
    alert('Thank you for contacting SmartSpend! We will get back to you soon.');
    
    // Reset the form state
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <Header />
      <main className="content">
        <h1>Contact Us 📧</h1>
        <p>Have questions or feedback? We’d love to hear from you!</p>

        <form id="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            required 
            value={formData.name}
            onChange={handleChange}
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea 
            placeholder="Your Message" 
            required 
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;