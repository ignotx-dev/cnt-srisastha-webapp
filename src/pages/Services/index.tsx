import React, { useState } from 'react';
import styles from './Services.module.css'; // Import styles as a module
import bannerImage from '../../assets/images/mdu-01.webp';

// Import images
import shop1 from '../../assets/images/SHOP 01.jpg';
import shop2 from '../../assets/images/SHOP 02.jpg';
import shop3 from '../../assets/images/SHOP.jpg';
import infoImage from '../../assets/images/cotton.jpg'; // Example image for the left side

const Services: React.FC = () => {
    const shops = [
        { 
            imageSrc: shop1, 
            address: '123 Main St, Springfield, IL',
            mapLink: 'https://www.google.com/maps?q=123+Main+St,+Springfield,+IL' 
        },
        { 
            imageSrc: shop2, 
            address: '456 Elm St, Springfield, IL',
            mapLink: 'https://www.google.com/maps?q=456+Elm+St,+Springfield,+IL' 
        },
        { 
            imageSrc: shop3, 
            address: '789 Oak St, Springfield, IL',
            mapLink: 'https://www.google.com/maps?q=789+Oak+St,+Springfield,+IL' 
        }
    ];

    return (
        <div className={styles['services-container']}>
            <div className={styles['main-section']}>
                <div className={styles.banner}>
                    <img src={bannerImage} alt="Services Banner" className={styles['banner-image']} />
                    <div className={styles['overlay-text']}>
                        <h1>Our Services</h1>
                    </div>
                </div>
                <div className={styles['info-container']}>
                    <div className={styles['info-image']}>
                        <img src={infoImage} alt="Cotton Seed Milk" />
                    </div>
                    <div className={styles['info-content']}>
                        <p className={styles['info-text']}>
                            We offer high-quality cotton seed milk for all your events, from intimate gatherings to large celebrations. Our product is perfect for adding a touch of natural flavor to your special occasions.
                        </p>
                        <p className={styles['info-text']}>
                            To place an order or get more details, contact us via WhatsApp. We’re here to make your event memorable with top-notch quality and service.
                        </p>
                        <div className={styles['contact-section']}>
                            <p className={styles['contact-text']}>
                                Ready to enhance your event? Let's chat and make it unforgettable!
                            </p>
                            <a
                                href="https://wa.me/your-whatsapp-number"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles['whatsapp-button']}
                            >
                                Chat with us on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['shops-section']}>
                <h2 className={styles['shops-heading']}>Discover Our Shops</h2>
                <div className={styles['cards-container']}>
                    {shops.map((shop, index) => (
                        <div className={styles['shop-card']} key={index}>
                            <div className={styles['shop-image-container']}>
                                <img src={shop.imageSrc} alt={`Shop ${index + 1}`} className={styles['shop-image']} />
                            </div>
                            <div className={styles['shop-info']}>
                                <a
                                    href={shop.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles['shop-address']}
                                >
                                    {shop.address}
                                </a>
                                <a
                                    href={shop.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles['view-map']}
                                >
                                    View on Map
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
