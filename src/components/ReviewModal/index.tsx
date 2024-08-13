import React from 'react';
import './ReviewModal.css';

interface ReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add Your Review</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">Review</label>
                        <textarea id="text" name="text" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <select id="rating" name="rating" required>
                            <option value="5">5 - Excellent</option>
                            <option value="4">4 - Very Good</option>
                            <option value="3">3 - Good</option>
                            <option value="2">2 - Fair</option>
                            <option value="1">1 - Poor</option>
                        </select>
                    </div>
                    <div className="modal-buttons">
                        <button type="submit" className="submit-button">Submit</button>
                        <button type="button" className="close-button" onClick={onClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewModal;
