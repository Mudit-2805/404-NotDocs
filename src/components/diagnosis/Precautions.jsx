import React from 'react';

const Precautions = () => {
  const precautions = [
    {
      title: "Cuts and Scrapes",
      steps: [
        "Clean the wound with clean water and mild soap",
        "Apply pressure with a clean cloth to stop bleeding",
        "Apply antibiotic ointment and cover with a sterile bandage",
        "Change the bandage daily and keep the wound clean",
        "Watch for signs of infection (increased redness, swelling, warmth)"
      ]
    },
    {
      title: "Sprains and Strains",
      steps: [
        "Follow the RICE protocol: Rest, Ice, Compression, Elevation",
        "Apply ice for 20 minutes at a time, several times a day",
        "Use elastic bandage for compression, but not too tight",
        "Elevate the injured area above heart level when possible",
        "Take over-the-counter pain relievers as needed"
      ]
    },
    {
      title: "Burns",
      steps: [
        "Cool the burn with cool (not cold) running water for 10-15 minutes",
        "Don't apply ice directly to a burn",
        "Cover with a clean, non-stick bandage",
        "Don't apply butter, toothpaste, or other home remedies",
        "Seek medical attention for burns larger than 3 inches or on sensitive areas"
      ]
    }
  ];

  return (
    <div className="diagnosis-card precautions">
      <h2>Injury Precautions</h2>
      
      <div className="accordion">
        {precautions.map((item, index) => (
          <details key={index} className="accordion-item">
            <summary className="accordion-header">{item.title}</summary>
            <div className="accordion-content">
              <ol className="precaution-steps">
                {item.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </details>
        ))}
      </div>
      
      <div className="emergency-note">
        <h3>When to Seek Emergency Care:</h3>
        <ul>
          <li>Severe bleeding that doesn't stop with pressure</li>
          <li>Difficulty breathing or shortness of breath</li>
          <li>Chest pain or pressure</li>
          <li>Sudden severe pain</li>
          <li>Serious burns or electrical injuries</li>
          <li>Head injuries with confusion or loss of consciousness</li>
        </ul>
      </div>
    </div>
  );
};

export default Precautions;