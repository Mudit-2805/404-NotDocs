import React from 'react';

const OutbreakCard = ({ title, severity, location, recommendations }) => {
  // Determine severity class for color coding
  const getSeverityClass = (severity) => {
    switch (severity.toLowerCase()) {
      case 'high':
        return 'severity-high';
      case 'moderate':
        return 'severity-moderate';
      case 'low':
        return 'severity-low';
      case 'localized':
        return 'severity-localized';
      default:
        return '';
    }
  };

  return (
    <div className="outbreak-card">
      <div className="outbreak-header">
        <h3>{title}</h3>
        <span className={`severity-badge ${getSeverityClass(severity)}`}>
          {severity}
        </span>
      </div>
      <div className="outbreak-details">
        <div className="outbreak-location">
          <span className="detail-label">Location:</span>
          <span>{location}</span>
        </div>
        <div className="outbreak-recommendations">
          <span className="detail-label">Recommendations:</span>
          <p>{recommendations}</p>
        </div>
      </div>
    </div>
  );
};

export default OutbreakCard;