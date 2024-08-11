import React from 'react';
import './Aboutus.css';
import bannerImage from '../../assets/images/mdu-01.webp'; // Replace with the correct path to your image

const About: React.FC = () => {
    return (
        <div className="about-container">
            <div className="banner">
                <img src={bannerImage} alt="About Us Banner" className="banner-image" />
                <div className="overlay-text">
                    <h1>About Us</h1>
                </div>
            </div>
        </div>
    );
}

export default About;
