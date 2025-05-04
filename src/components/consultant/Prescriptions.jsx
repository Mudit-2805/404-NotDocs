import React, { useState } from 'react';

const Prescriptions = () => {
  const [activeTab, setActiveTab] = useState('current');
  
  // Mock prescription data
  const prescriptions = {
    current: [
      {
        id: 1,
        name: "Lisinopril 10mg",
        instructions: "Take 1 tablet daily",
        prescribed: "May 15, 2025",
        refills: 3,
        doctor: "Dr. Sarah Johnson"
      },
      {
        id: 2,
        name: "Atorvastatin 20mg",
        instructions: "Take 1 tablet at bedtime",
        prescribed: "June 2, 2025",
        refills: 5,
        doctor: "Dr. Michael Chen"
      }
    ],
    history: [
      {
        id: 3,
        name: "Amoxicillin 500mg",
        instructions: "Take 1 capsule 3 times daily for 10 days",
        prescribed: "January 10, 2025",
        refills: 0,
        doctor: "Dr. Sarah Johnson",
        completed: "January 20, 2025"
      },
      {
        id: 4,
        name: "Prednisone 20mg",
        instructions: "Take as directed on taper schedule",
        prescribed: "March 5, 2025",
        refills: 0,
        doctor: "Dr. Emily Rodriguez",
        completed: "March 15, 2025"
      },
      {
        id: 5,
        name: "Azithromycin 250mg",
        instructions: "Take 2 tablets on first day, then 1 tablet daily for 4 days",
        prescribed: "April 12, 2025",
        refills: 0,
        doctor: "Dr. Sarah Johnson",
        completed: "April 17, 2025"
      }
    ]
  };

  return (
    <div className="consultant-card prescriptions">
      <h2>Prescriptions</h2>
      
      <div className="prescription-tabs">
        <button 
          className={`tab-button ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          Current
        </button>
        <button 
          className={`tab-button ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          History
        </button>
      </div>
      
      <div className="prescription-list">
        {prescriptions[activeTab].length > 0 ? (
          prescriptions[activeTab].map(prescription => (
            <div key={prescription.id} className="prescription-item">
              <div className="prescription-header">
                <h3>{prescription.name}</h3>
                {activeTab === 'current' && (
                  <button className="refill-btn">Refill</button>
                )}
              </div>
              
              <div className="prescription-details">
                <p><strong>Instructions:</strong> {prescription.instructions}</p>
                <p><strong>Prescribed:</strong> {prescription.prescribed}</p>
                {activeTab === 'current' && (
                  <p><strong>Refills remaining:</strong> {prescription.refills}</p>
                )}
                {activeTab === 'history' && (
                  <p><strong>Completed:</strong> {prescription.completed}</p>
                )}
                <p><strong>Prescribed by:</strong> {prescription.doctor}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-prescriptions">
            <p>No {activeTab} prescriptions found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prescriptions;