import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/auth.css';

const SignInPage = () => {
  const [userType, setUserType] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setError('');
  };

  const handleBackClick = () => {
    setUserType(null);
    setEmail('');
    setPassword('');
    setName('');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    // Simple validation
    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // For demo purposes, allow any login
    try {
      login(userType, { name: name || email.split('@')[0], email });
      navigate('/dashboard');
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  // Initial selection screen
  if (!userType) {
    return (
      <div className="signin-container">
        <div className="signin-content">
          <h1 className="app-title">Immunet</h1>
          <p className="app-subtitle">Your personal healthcare companion</p>
          
          <div className="user-type-container">
            <h2>Sign in as</h2>
            
            <div className="user-type-options">
              <div 
                className="user-type-card" 
                onClick={() => handleUserTypeSelect('patient')}
              >
                <div className="user-icon patient-icon"></div>
                <h3>Patient</h3>
                <p>Access your medical records, appointments, and care plans</p>
              </div>
              
              <div 
                className="user-type-card"
                onClick={() => handleUserTypeSelect('provider')}
              >
                <div className="user-icon provider-icon"></div>
                <h3>Health Provider</h3>
                <p>Manage patients, consultations, and treatment plans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sign in form
  return (
    <div className="signin-container">
      <div className="signin-form-container">
        <button className="back-button" onClick={handleBackClick}>
          ← Back
        </button>
        
        <div className="signin-form">
          <h1>Sign in as {userType === 'patient' ? 'Patient' : 'Health Provider'}</h1>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
          
          <div className="form-footer">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
            <p>
              <a href="#">Forgot password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;