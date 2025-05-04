import React from 'react';
import Navigation from '../components/common/Navigation';
import CommonSolutions from '../components/diagnosis/CommonSolutions';
import Precautions from '../components/diagnosis/Precautions';
import MedicalBot from '../components/diagnosis/MedicalBot';
import '../styles/diagnosis.css';

const DiagnosisPage = () => {
  return (
    <div className="diagnosis-container">
      <Navigation />
      
      <main className="diagnosis-content">
        <header className="page-header">
          <h1>Self Diagnosis</h1>
          <p>Find guidance for common health issues or chat with our AI assistant</p>
        </header>
        
        <section className="diagnosis-grid">
          <div className="grid-col">
            <CommonSolutions />
            <Precautions />
          </div>
          
          <div className="grid-col">
            <MedicalBot />
          </div>
        </section>
        
        <section className="disclaimer">
          <div className="disclaimer-content">
            <h3>Important Medical Disclaimer</h3>
            <p>
              The information provided by this diagnosis tool is not a substitute for professional medical advice, 
              diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions 
              you may have regarding a medical condition. If you think you may have a medical emergency, call your 
              doctor or emergency services immediately.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DiagnosisPage;