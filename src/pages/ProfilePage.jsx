import React, { useState } from 'react';
import Navigation from '../components/common/Navigation';
import { useAuth } from '../contexts/AuthContext';
import '../styles/profile.css';

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
    birthdate: currentUser?.birthdate || '',
    address: currentUser?.address || '',
    emergencyContact: currentUser?.emergencyContact || '',
    allergies: currentUser?.allergies || '',
    medicalConditions: currentUser?.medicalConditions || '',
    bloodType: currentUser?.bloodType || '',
    height: currentUser?.height || '',
    weight: currentUser?.weight || ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would save these changes to a backend
    // For now, we'll just toggle the edit mode off
    setIsEditing(false);
  };
  
  return (
    <div className="profile-container">
      <Navigation />
      
      <main className="profile-content">
        <header className="page-header">
          <h1>My Profile</h1>
          <p>Manage your personal information and medical history</p>
        </header>
        
        <div className="profile-grid">
          <div className="profile-sidebar">
            <div className="profile-card user-info">
              <div className="user-avatar">
                {/* Use initials as avatar */}
                <div className="avatar-placeholder">
                  {formData.name.split(' ').map(name => name[0]).join('')}
                </div>
              </div>
              
              <h2>{formData.name}</h2>
              <p className="user-email">{formData.email}</p>
              <p className="user-type">{currentUser?.userType === 'patient' ? 'Patient' : 'Health Provider'}</p>
              
              {!isEditing && (
                <button className="edit-profile-btn" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </button>
              )}
            </div>
            
            <div className="profile-card quick-actions">
              <h3>Quick Actions</h3>
              <ul className="action-links">
                <li><a href="#"><span className="action-icon record-icon"></span>View Medical Records</a></li>
                <li><a href="#"><span className="action-icon appointment-icon"></span>Upcoming Appointments</a></li>
                <li><a href="#"><span className="action-icon insurance-icon"></span>Insurance Information</a></li>
                <li><a href="#"><span className="action-icon billing-icon"></span>Billing & Payments</a></li>
                <li><a href="#"><span className="action-icon settings-icon"></span>Account Settings</a></li>
              </ul>
            </div>
          </div>
          
          <div className="profile-main">
            <div className="profile-card personal-info">
              <h2>Personal Information</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="birthdate">Date of Birth</label>
                    <input
                      type="date"
                      id="birthdate"
                      name="birthdate"
                      value={formData.birthdate}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="emergencyContact">Emergency Contact</label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Name and phone number"
                  />
                </div>
                
                <h3>Medical Information</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="bloodType">Blood Type</label>
                    <select
                      id="bloodType"
                      name="bloodType"
                      value={formData.bloodType}
                      onChange={handleChange}
                      disabled={!isEditing}
                    >
                      <option value="">Select Type</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="height">Height (cm)</label>
                    <input
                      type="number"
                      id="height"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="weight">Weight (kg)</label>
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="allergies">Allergies</label>
                  <textarea
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="List any allergies here"
                  ></textarea>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="medicalConditions">Medical Conditions</label>
                  <textarea
                    id="medicalConditions"
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="List any medical conditions here"
                  ></textarea>
                </div>
                
                {isEditing && (
                  <div className="form-actions">
                    <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>
                      Cancel
                    </button>
                    <button type="submit" className="save-btn">
                      Save Changes
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;