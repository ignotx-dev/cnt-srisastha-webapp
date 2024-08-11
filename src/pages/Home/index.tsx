import React, { useState, useEffect } from 'react';
import './Home.css';
import sastha from '../../assets/images/sastha.webp';
import sastha1 from '../../assets/images/mdu-01.webp';
import sastha2 from '../../assets/images/sastha-01.webp';

const Home: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
    const images = [sastha, sastha1, sastha2]; // Array of images

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                let nextIndex = prevIndex + direction;

                if (nextIndex >= images.length) {
                    setDirection(-1); // Reverse direction
                    nextIndex = images.length - 2; // Move back to the previous image
                } else if (nextIndex < 0) {
                    setDirection(1); // Forward direction
                    nextIndex = 1; // Move to the second image
                }

                return nextIndex;
            });
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, [direction, images.length]);

    return (
        <div className="home-container">
            <div className="image-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="slide" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
