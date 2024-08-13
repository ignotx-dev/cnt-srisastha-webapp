import React from 'react';
import styles from './Benefits.module.css';
import nutrientsImage from '../../assets/images/nutrients.jpg';
import digestiveImage from '../../assets/images/digestiveImage.jpg';
import skinImage from '../../assets/images/skinImage.jpg';
import immuneImage from '../../assets/images/immuneImage.jpg';
interface Benefit {
    image: string;
    text: string;
    description: string;
}

const benefits: Benefit[] = [
    { image: nutrientsImage, text: "Rich in Nutrients", description: "Packed with essential vitamins and minerals." },
    { image: digestiveImage, text: "Supports Digestive Health", description: "Promotes a healthy gut." },
    { image: skinImage, text: "Promotes Healthy Skin", description: "Maintains a youthful appearance." },
    { image: immuneImage, text: "Improves Immune Function", description: "Boosts your immune system." },
];

const Benefits: React.FC = () => (
    <div className={styles.benefitsContainer}>
        <h2 className={styles.title}>Top Benefits of Cotton Seed Milk</h2>
        <div className={styles.gridContainer}>
            {benefits.map((benefit, index) => (
                <div className={styles.benefitCard} key={index}>
                    <img src={benefit.image} alt={benefit.text} className={styles.benefitImage} />
                    <div className={styles.benefitContent}>
                        <h3 className={styles.benefitText}>{benefit.text}</h3>
                        <p className={styles.benefitDescription}>{benefit.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Benefits;
