import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import '../../styles/navigation.css';

import { 
  Home,
  Stethoscope, 
  Pill, 
  MessageCircle, 
  User,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';

const Navigation = () => {
  const { currentUser, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  const navItems = [
    { path: '/dashboard', name: 'Home'},
    { path: '/diagnosis', name: 'Diagnosis'},
    { path: '/pharmacy', name: 'Pharmacy'},
    { path: '/consultant', name: 'Consultancy'},
    { path: '/profile', name: 'Profile'}
  ];

  return (
    <div className="nav-container">
      <div className="nav-header">
        <div className="logo">
          <span className="logo-text">Immunet</span>
        </div>

        <div className="nav-menu">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li 
                key={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
                onClick={closeMenu}
              >
                <Link to={item.path}>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
            <li className="logout-btn" onClick={handleLogout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="mobile-toggle" onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>


      <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li 
              key={item.path} 
              className={location.pathname === item.path ? 'active' : ''}
              onClick={closeMenu}
            >
              <Link to={item.path}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
          <li className="logout-btn" onClick={handleLogout}>
            <a>Logout</a>
          </li>
        </ul>
      </nav>

      <div className={`overlay ${menuOpen ? 'visible' : ''}`} onClick={closeMenu}></div>
    </div>
  );
};

export default Navigation;