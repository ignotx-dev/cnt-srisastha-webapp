import React from 'react';
import styles from './about.module.css'; // Import styles as a module
import bannerImage from '../../assets/images/mdu-01.webp'; // Path to your image

const About: React.FC = () => {
    return (
        <div className={styles['about-container']}>
            <div className={styles.banner}>
                <img
                    src={bannerImage}
                    alt="About Us Banner"
                    className={styles['banner-image']}
                />
                <div className={styles['overlay-text']}>
                    <h1>About Us</h1>
                </div>
            </div>
        </div>
    );
}

export default About;
