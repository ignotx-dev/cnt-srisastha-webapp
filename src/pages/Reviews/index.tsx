import React, { useState } from 'react';
import ReviewCarousel from '../../components/ReviewCarousel';
import ReviewModal from '../../components/ReviewModal';
import styles from './Reviews.module.css'; // Import styles as a module

const Reviews: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddReviewClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles['reviews-container']}>
            <div className={styles['reviews-header']}>
                <h1>Reviews</h1>
                <p>Read what our customers have to say about our products.</p>
            </div>
            <ReviewCarousel />
            <button
                className={styles['add-review-button']}
                onClick={handleAddReviewClick}
            >
                Add Review
            </button>
            <ReviewModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default Reviews;
