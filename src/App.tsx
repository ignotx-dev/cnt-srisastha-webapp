import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Home from './pages/Home';
import About from './pages/About';
import Benefits from './pages/Benefits';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import './App.css';

const App: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (!isMobile) {
        setSidebarVisible(false); // Hide sidebar on larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  return (
    <Router>
      <div className="app-container">
        {isMobile && (
          <>
            <header className="app-header">
              <div className="logo">Logo</div>
              <button className="menu-button" onClick={toggleSidebar}>
                Menu
              </button>
            </header>
            {isSidebarVisible && <Sidebar />}
          </>
        )}
        {!isMobile && <Sidebar />} {/* Sidebar is always visible on larger screens */}
        <div className={`main-content ${isMobile ? 'mobile-content' : ''} ${isSidebarVisible && isMobile ? 'with-sidebar' : ''}`}>
          {isMobile ? (
            <div className="scrollable-content">
              <Home />
              <About />
              <Benefits />
              <Services />
              <Reviews />
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/services" element={<Services />} />
              <Route path="/reviews" element={<Reviews />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
