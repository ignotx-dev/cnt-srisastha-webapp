import React from 'react';
import './Benefits.css';

const Benefits: React.FC = () => {
    const benefits = [
        { image: 'https://via.placeholder.com/200x150?text=Benefit+1', text: "Benefit 1: Boosts energy levels" },
        { image: 'https://via.placeholder.com/200x150?text=Benefit+2', text: "Benefit 2: Rich in essential nutrients" },
        { image: 'https://via.placeholder.com/200x150?text=Benefit+3', text: "Benefit 3: Supports digestive health" },
        { image: 'https://via.placeholder.com/200x150?text=Benefit+4', text: "Benefit 4: Promotes healthy skin" },
        { image: 'https://via.placeholder.com/200x150?text=Benefit+5', text: "Benefit 5: Enhances overall wellness" },
    ];

    return (
        <div className="benefits-container">
            <h1>Benefits</h1>
            <p>Discover the benefits of our cotton seed milk products.</p>
            <div className="cards-container">
                {benefits.map((benefit, index) => (
                    <div className="card" key={index}>
                        <img src={benefit.image} alt={`Benefit ${index + 1}`} className="card-image" />
                        <p className="card-text">{benefit.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Benefits;
