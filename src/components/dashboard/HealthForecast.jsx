import React from 'react';

const HealthForecast = () => {
  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <div className="dashboard-card health-forecast">
      <h2>Health Forecast</h2>
      <div className="forecast-content">
        <div className="forecast-date">{formattedDate}</div>
        
        <div className="forecast-item">
          <div className="forecast-icon pollen-icon"></div>
          <div className="forecast-details">
            <h3>Pollen</h3>
            <div className="forecast-level">
              <div className="progress-bar">
                <div className="progress" style={{ width: '40%' }}></div>
              </div>
              <span>Moderate</span>
            </div>
          </div>
        </div>
        
        <div className="forecast-item">
          <div className="forecast-icon air-quality-icon"></div>
          <div className="forecast-details">
            <h3>Air Quality</h3>
            <div className="forecast-level">
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
              <span>Good</span>
            </div>
          </div>
        </div>
        
        <div className="forecast-item">
          <div className="forecast-icon uv-icon"></div>
          <div className="forecast-details">
            <h3>UV Index</h3>
            <div className="forecast-level">
              <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
              </div>
              <span>Moderate</span>
            </div>
          </div>
        </div>
        
        <div className="forecast-item">
          <div className="forecast-icon flu-icon"></div>
          <div className="forecast-details">
            <h3>Flu Risk</h3>
            <div className="forecast-level">
              <div className="progress-bar">
                <div className="progress" style={{ width: '30%' }}></div>
              </div>
              <span>Low</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthForecast;