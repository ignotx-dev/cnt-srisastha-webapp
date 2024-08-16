// DesktopApp.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/SideBar';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Benefits from '../../pages/Benefits';
import Services from '../../pages/Services';
import Reviews from '../../pages/Reviews';
import styles from './DesktopApp.module.css'; // Import CSS module

const DesktopApp: React.FC = () => {
    return (
        <>
            <Sidebar />
            <div className={styles.mainContent}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/benefits" element={<Benefits />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/reviews" element={<Reviews />} />
                </Routes>
            </div>
        </>
    );
};

export default DesktopApp;
