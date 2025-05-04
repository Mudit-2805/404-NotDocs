import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import '../../styles/navigation.css';

// Import icons
import { 
  Home,
  Stethoscope, 
  Pill, 
  MessageCircle, 
  User,
  Menu,
  X
} from 'lucide-react';

const Navigation = () => {
  const { currentUser, logout } = useAuth();
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
    { path: '/dashboard', name: 'Home', icon: <Home size={20} /> },
    { path: '/diagnosis', name: 'Diagnosis', icon: <Stethoscope size={20} /> },
    { path: '/pharmacy', name: 'Pharmacy', icon: <Pill size={20} /> },
    { path: '/consultant', name: 'Consultancy', icon: <MessageCircle size={20} /> },
    { path: '/profile', name: 'Profile', icon: <User size={20} /> }
  ];

  return (
    <div className="nav-container">
      <div className="nav-header">
        <div className="logo">
          <span className="logo-text">MediCare</span>
        </div>
        <div className="mobile-toggle" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
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