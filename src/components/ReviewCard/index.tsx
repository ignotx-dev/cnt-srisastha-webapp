import React from 'react';
import './ReviewCard.css';

interface ReviewCardProps {
    title: string;
    text: string;
    rating: number;
    id: number;
    position: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ title, text, rating, id, position }) => {
    const getCardClasses = () => {
        switch (position) {
            case 0:
                return 'card card-left';
            case 1:
                return 'card card-center';
            case 2:
                return 'card card-right';
            default:
                return 'card';
        }
    };

    return (
        <div className={getCardClasses()}>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="rating">
                {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
            </div>
            <small>Review #{id}</small>
            <div className="google-symbol"></div>
        </div>
    );
};

export default ReviewCard;
