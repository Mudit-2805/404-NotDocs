import React from 'react';

const DoctorList = ({ onSelectDoctor, activeDoctor }) => {
  // Mock data for healthcare providers
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Primary Care Physician",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600",
      available: true
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Cardiologist",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600",
      available: true
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Dermatologist",
      image: "https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=600",
      available: false
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Neurologist",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600",
      available: true
    }
  ];

  return (
    <div className="consultant-card doctor-list">
      <h2>Your Healthcare Team</h2>
      
      <div className="doctors">
        {doctors.map(doctor => (
          <div 
            key={doctor.id} 
            className={`doctor-item ${activeDoctor?.id === doctor.id ? 'active' : ''} ${!doctor.available ? 'unavailable' : ''}`}
            onClick={() => doctor.available && onSelectDoctor(doctor)}
          >
            <div className="doctor-avatar">
              <img src={doctor.image} alt={doctor.name} />
              <span className={`status-indicator ${doctor.available ? 'available' : 'unavailable'}`}></span>
            </div>
            
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
              <span className="availability-status">
                {doctor.available ? 'Available Now' : 'Unavailable'}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="find-new-doctor">
        <button className="find-doctor-btn">Find New Specialist</button>
      </div>
    </div>
  );
};

export default DoctorList;