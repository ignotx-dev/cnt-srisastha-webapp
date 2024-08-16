import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MobileApp from './components/MobileApp';
import DesktopApp from './components/DesktopApp';
import './App.css';

const App: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const prevIsMobileRef = useRef(isMobile); // To track previous screen size state

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileNow = window.innerWidth <= 768;
      setIsMobile(isMobileNow);

      // Close the sidebar if screen size changes to desktop
      if (!isMobileNow && prevIsMobileRef.current) {
        setSidebarVisible(false);
      }

      prevIsMobileRef.current = isMobileNow; // Update previous state
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      {isMobile ? (
        <MobileApp isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      ) : (
        <DesktopApp />
      )}
    </Router>
  );
}

export default App;
