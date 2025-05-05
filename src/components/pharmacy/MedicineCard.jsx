import React from 'react';

const MedicineCard = ({ medicine }) => {
  const { name, brand, price, image, description, requiresPrescription } = medicine;
  
  return (
    <div className="medicine-card">
      <div className="medicine-image">
        <img src={image} alt={name} />
        {requiresPrescription && <div className="prescription-badge">Prescription Required</div>}
      </div>
      
      <div className="medicine-info">
        <h3>{name}</h3>
        <div className="medicine-brand">{brand}</div>
        <p className="medicine-description">{description}</p>
        
        <div className="medicine-price-row">
          <div className="medicine-price">₹{price.toFixed(2)}</div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;