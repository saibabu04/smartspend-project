import React from 'react';
import { Link } from 'react-router-dom';

const PlanCard = ({ plan, isYearly }) => {
    
    const cardClass = `plan ${plan.isFeatured ? 'featured' : ''}`;

    const getPriceText = () => {
        const price = isYearly ? plan.yearly : plan.monthly;
        const term = isYearly ? 'year' : 'month';
        
        if (price === 0) {
            return `$0/${term}`;
        }
        
        return `$${price.toFixed(2)}/${term}`;
    };

    const getLinkPath = () => {
        // Simple routing logic based on plan type
        if (plan.name === 'Free') return '/features';
        if (plan.name === 'Pro') return '/contact';
        if (plan.name === 'Business') return '/contact';
        return '#';
    };

    return (
        <div className={cardClass}>
            <h3>{plan.name}</h3>
            
            <p className="price">
                {getPriceText()}
            </p>
            
            <ul>
                {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            
            <Link to={getLinkPath()}>
                <button>{plan.buttonText}</button>
            </Link>
        </div>
    );
};

export default PlanCard;