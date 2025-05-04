import React from 'react';
import Navigation from '../components/common/Navigation';
import OutbreakCard from '../components/dashboard/OutbreakCard';
import HealthForecast from '../components/dashboard/HealthForecast';
import HealthNews from '../components/dashboard/HealthNews';
import '../styles/dashboard.css';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage = () => {
  const { currentUser } = useAuth();
  
  return (
    <div className="dashboard-container">
      <Navigation />
      
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Welcome back, {currentUser?.name || 'User'}</h1>
          <p>Here's your health overview for today</p>
        </header>
        
        <section className="dashboard-grid">
          <div className="grid-col">
            <div className="dashboard-card">
              <h2>Current Outbreaks</h2>
              <div className="outbreaks-container">
                <OutbreakCard 
                  title="Seasonal Flu" 
                  severity="Moderate" 
                  location="Nationwide"
                  recommendations="Vaccination recommended for everyone 6 months and older"
                />
                <OutbreakCard 
                  title="COVID-19" 
                  severity="Low to Moderate" 
                  location="Regional"
                  recommendations="Stay updated with boosters, practice good hygiene"
                />
                <OutbreakCard 
                  title="Stomach Virus" 
                  severity="Localized" 
                  location="Urban Centers"
                  recommendations="Wash hands frequently, avoid contaminated food and water"
                />
              </div>
            </div>
          </div>
          
          <div className="grid-col">
            <HealthForecast />
            <HealthNews />
          </div>
        </section>
        
        <section className="quick-access">
          <h2>Quick Access</h2>
          <div className="quick-access-cards">
            <div className="quick-card">
              <div className="quick-icon appointments-icon"></div>
              <h3>Appointments</h3>
              <p>Schedule or view your upcoming appointments</p>
            </div>
            <div className="quick-card">
              <div className="quick-icon medications-icon"></div>
              <h3>Medications</h3>
              <p>View and manage your current medications</p>
            </div>
            <div className="quick-card">
              <div className="quick-icon records-icon"></div>
              <h3>Medical Records</h3>
              <p>Access your complete health history</p>
            </div>
            <div className="quick-card">
              <div className="quick-icon emergency-icon"></div>
              <h3>Emergency</h3>
              <p>Quick access to emergency services</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;