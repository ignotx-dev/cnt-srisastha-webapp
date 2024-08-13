import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard';
import './ReviewCarousel.css';

const reviews = [
    { id: 1, title: 'Great Product!', text: 'I love this product. It exceeded my expectations.', rating: 5 },
    { id: 2, title: 'Excellent Service!', text: 'The service was excellent. Will buy again.', rating: 4 },
    { id: 3, title: 'Not Bad', text: 'The product is decent for the price.', rating: 3 },
    { id: 4, title: 'Amazing Quality', text: 'The quality of this item is amazing.', rating: 5 },
    { id: 5, title: 'Very Satisfied', text: 'I am very satisfied with my purchase.', rating: 4 },
    { id: 6, title: 'Would Recommend', text: 'I would definitely recommend this to others.', rating: 5 },
];

const ReviewCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviewsPerSlide = 3;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    const getVisibleCards = () => {
        const totalReviews = reviews.length;
        const result = [];
        for (let i = 0; i < reviewsPerSlide; i++) {
            const index = (currentIndex + i) % totalReviews;
            result.push(reviews[index]);
        }
        return result;
    };

    return (
        <div className="carousel">
            {getVisibleCards().map((review, index) => (
                <ReviewCard
                    key={review.id}
                    id={review.id}
                    title={review.title}
                    text={review.text}
                    rating={review.rating}
                    position={index}
                />
            ))}
        </div>
    );
};

export default ReviewCarousel;
