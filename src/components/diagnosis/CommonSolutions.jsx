import React, { useState } from 'react';

const CommonSolutions = () => {
  const [activeTab, setActiveTab] = useState('headaches');
  
  const conditions = [
    { id: 'headaches', label: 'Headaches' },
    { id: 'cold', label: 'Common Cold' },
    { id: 'allergies', label: 'Allergies' },
    { id: 'stomach', label: 'Stomach Pain' },
    { id: 'minor-injuries', label: 'Minor Injuries' }
  ];
  
  const solutions = {
    headaches: [
      "Stay hydrated by drinking plenty of water",
      "Rest in a quiet, dark room",
      "Apply a cold or warm compress to your head",
      "Take over-the-counter pain relievers as directed",
      "Maintain regular sleep patterns",
      "Consider stress-reduction techniques"
    ],
    cold: [
      "Get plenty of rest",
      "Stay hydrated with water, warm tea, or broth",
      "Use a humidifier to add moisture to the air",
      "Take over-the-counter decongestants or pain relievers as needed",
      "Use saline nasal sprays",
      "Gargle with salt water for sore throat"
    ],
    allergies: [
      "Identify and avoid allergen triggers",
      "Keep windows closed during high pollen seasons",
      "Use air purifiers with HEPA filters",
      "Try over-the-counter antihistamines",
      "Use nasal irrigation with saline solution",
      "Consider wearing a mask outdoors during high pollen days"
    ],
    stomach: [
      "Eat small, frequent meals",
      "Avoid spicy, fatty, or acidic foods",
      "Stay hydrated with water and clear broths",
      "Try the BRAT diet (bananas, rice, applesauce, toast)",
      "Use a heating pad on your abdomen",
      "Avoid caffeine and alcohol"
    ],
    'minor-injuries': [
      "Clean wounds with soap and water",
      "Apply direct pressure to stop bleeding",
      "Use ice packs to reduce swelling (20 minutes on, 20 minutes off)",
      "Elevate injured limbs above heart level",
      "Use adhesive bandages for minor cuts",
      "Apply antibiotic ointment to prevent infection"
    ]
  };

  return (
    <div className="diagnosis-card common-solutions">
      <h2>Common Solutions</h2>
      
      <div className="tabs">
        {conditions.map(condition => (
          <button 
            key={condition.id}
            className={`tab-button ${activeTab === condition.id ? 'active' : ''}`} 
            onClick={() => setActiveTab(condition.id)}
          >
            {condition.label}
          </button>
        ))}
      </div>
      
      <div className="tab-content">
        <h3>{conditions.find(c => c.id === activeTab)?.label}</h3>
        <ul className="solutions-list">
          {solutions[activeTab].map((solution, index) => (
            <li key={index}>
              <span className="solution-number">{index + 1}</span>
              <span className="solution-text">{solution}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommonSolutions;