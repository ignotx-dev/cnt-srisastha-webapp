import React from 'react';
import './ShopCard.css';

interface ShopCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const ShopCard: React.FC<ShopCardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className="shop-card">
            <img src={imageSrc} alt={title} className="shop-card-image" />
            <div className="shop-card-info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ShopCard;
