import React, { useState } from 'react';
import Navigation from '../components/common/Navigation';
import DoctorList from '../components/consultant/DoctorList';
import Prescriptions from '../components/consultant/Prescriptions';
import ChatInterface from '../components/consultant/ChatInterface';
import '../styles/consultant.css';

const ConsultantPage = () => {
  const [activeDoctor, setActiveDoctor] = useState(null);
  
  const handleDoctorSelect = (doctor) => {
    setActiveDoctor(doctor);
  };
  
  return (
    <div className="consultant-container">
      <Navigation />
      
      <main className="consultant-content">
        <header className="page-header">
          <h1>Healthcare Consultancy</h1>
          <p>Connect with your healthcare team and manage your prescriptions</p>
        </header>
        
        <div className="consultant-grid">
          <div className="consultant-sidebar">
            <DoctorList onSelectDoctor={handleDoctorSelect} activeDoctor={activeDoctor} />
            <Prescriptions />
          </div>
          
          <div className="consultant-main">
            {activeDoctor ? (
              <ChatInterface doctor={activeDoctor} />
            ) : (
              <div className="no-selection">
                <div className="no-selection-icon"></div>
                <h2>Select a healthcare provider</h2>
                <p>Choose a doctor or consultant from the list to start a conversation</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConsultantPage;