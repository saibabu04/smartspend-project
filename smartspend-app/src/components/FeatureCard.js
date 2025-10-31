import React from 'react';

const FeatureCard = ({ imageSrc, altText, title, description, className = "feature-card" }) => (
  <div className={className}>
    <img src={imageSrc} alt={altText} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default FeatureCard;