import React, { useEffect, useState } from 'react';
import './Reviews.css';

const reviews = [
    { id: 1, title: 'Great Product!', text: 'I love this product. It exceeded my expectations.', rating: 5 },
    { id: 2, title: 'Excellent Service!', text: 'The service was excellent. Will buy again.', rating: 4 },
    { id: 3, title: 'Not Bad', text: 'The product is decent for the price.', rating: 3 },
    { id: 4, title: 'Amazing Quality', text: 'The quality of this item is amazing.', rating: 5 },
    { id: 5, title: 'Very Satisfied', text: 'I am very satisfied with my purchase.', rating: 4 },
    { id: 6, title: 'Would Recommend', text: 'I would definitely recommend this to others.', rating: 5 },
];

const Reviews: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviewsPerSlide = 3;

    // Handle automatic slide transition
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    // Get visible cards based on the current index
    const getVisibleCards = () => {
        const totalReviews = reviews.length;
        const result = [];
        for (let i = 0; i < reviewsPerSlide; i++) {
            const index = (currentIndex + i) % totalReviews;
            result.push(reviews[index]);
        }
        return result;
    };

    // Determine card position classes
    const getCardClasses = (position: number) => {
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
        <div className="reviews-container">
            <div className="reviews-header">
                <h1>Reviews</h1>
                <p>Read what our customers have to say about our products.</p>
            </div>
            <div className="carousel">
                {getVisibleCards().map((review, index) => (
                    <div className={getCardClasses(index)} key={review.id}>
                        <h3>{review.title}</h3>
                        <p>{review.text}</p>
                        <div className="rating">
                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                        </div>
                        <small>Review #{review.id}</small>
                        <div className="google-symbol"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
