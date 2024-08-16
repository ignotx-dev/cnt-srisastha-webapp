// MobileApp.tsx
import React from 'react';
import MobileSidebar from '../MobileSidebar';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Benefits from '../../pages/Benefits';
import Services from '../../pages/Services';
import Reviews from '../../pages/Reviews';
import styles from './MobileApp.module.css'; // Import CSS module

interface MobileAppProps {
    isSidebarVisible: boolean;
    toggleSidebar: () => void;
}

const MobileApp: React.FC<MobileAppProps> = ({ isSidebarVisible, toggleSidebar }) => {
    return (
        <>
            <header className={styles.appHeader}>
                <div className={styles.logo}>Logo</div>
                <button className={styles.menuButton} onClick={toggleSidebar}>
                    ☰
                </button>
            </header>
            <MobileSidebar isSidebarVisible={isSidebarVisible} closeSidebar={toggleSidebar} />
            <div className={styles.mainContent}>
                <div className={styles.scrollableContent}>
                    <section id="home"><Home /></section>
                    <section id="about"><About /></section>
                    <section id="benefits"><Benefits /></section>
                    <section id="services"><Services /></section>
                    <section id="reviews"><Reviews /></section>
                </div>
            </div>
        </>
    );
};

export default MobileApp;
