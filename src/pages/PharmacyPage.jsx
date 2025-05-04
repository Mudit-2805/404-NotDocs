import React, { useState } from 'react';
import Navigation from '../components/common/Navigation';
import MedicineCard from '../components/pharmacy/MedicineCard';
import '../styles/pharmacy.css';

const PharmacyPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Mock data for frequently bought medications
  const frequentMeds = [
    {
      id: 1,
      name: "Ibuprofen",
      brand: "Advil",
      price: 8.99,
      image: "https://images.pexels.com/photos/4210610/pexels-photo-4210610.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Pain reliever and fever reducer",
      requiresPrescription: false,
      category: "pain-relief"
    },
    {
      id: 2,
      name: "Acetaminophen",
      brand: "Tylenol",
      price: 7.49,
      image: "https://images.pexels.com/photos/7579830/pexels-photo-7579830.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Pain reliever and fever reducer",
      requiresPrescription: false,
      category: "pain-relief"
    },
    {
      id: 3,
      name: "Loratadine",
      brand: "Claritin",
      price: 12.99,
      image: "https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "24-hour allergy relief",
      requiresPrescription: false,
      category: "allergy"
    },
    {
      id: 4,
      name: "Omeprazole",
      brand: "Prilosec",
      price: 15.99,
      image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Acid reducer for heartburn relief",
      requiresPrescription: false,
      category: "digestive"
    }
  ];
  
  // Mock data for other medications
  const otherMeds = [
    {
      id: 5,
      name: "Amoxicillin",
      brand: "Generic",
      price: 12.99,
      image: "https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Antibiotic for bacterial infections",
      requiresPrescription: true,
      category: "antibiotics"
    },
    {
      id: 6,
      name: "Lisinopril",
      brand: "Generic",
      price: 8.99,
      image: "https://images.pexels.com/photos/7579544/pexels-photo-7579544.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "ACE inhibitor for high blood pressure",
      requiresPrescription: true,
      category: "heart"
    },
    {
      id: 7,
      name: "Cetirizine",
      brand: "Zyrtec",
      price: 14.99,
      image: "https://images.pexels.com/photos/7579570/pexels-photo-7579570.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "24-hour allergy relief",
      requiresPrescription: false,
      category: "allergy"
    },
    {
      id: 8,
      name: "Diphenhydramine",
      brand: "Benadryl",
      price: 6.99,
      image: "https://images.pexels.com/photos/4210614/pexels-photo-4210614.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Allergy relief and sleep aid",
      requiresPrescription: false,
      category: "allergy"
    },
    {
      id: 9,
      name: "Naproxen",
      brand: "Aleve",
      price: 9.99,
      image: "https://images.pexels.com/photos/3683095/pexels-photo-3683095.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Pain reliever and anti-inflammatory",
      requiresPrescription: false,
      category: "pain-relief"
    },
    {
      id: 10,
      name: "Simvastatin",
      brand: "Zocor",
      price: 16.99,
      image: "https://images.pexels.com/photos/7579825/pexels-photo-7579825.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Cholesterol-lowering medication",
      requiresPrescription: true,
      category: "heart"
    },
    {
      id: 11,
      name: "Metformin",
      brand: "Glucophage",
      price: 10.99,
      image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Oral diabetes medication",
      requiresPrescription: true,
      category: "diabetes"
    },
    {
      id: 12,
      name: "Multivitamin",
      brand: "Centrum",
      price: 13.99,
      image: "https://images.pexels.com/photos/4046862/pexels-photo-4046862.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Daily vitamins and minerals",
      requiresPrescription: false,
      category: "vitamins"
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'pain-relief', name: 'Pain Relief' },
    { id: 'allergy', name: 'Allergy' },
    { id: 'digestive', name: 'Digestive Health' },
    { id: 'heart', name: 'Heart Health' },
    { id: 'antibiotics', name: 'Antibiotics' },
    { id: 'diabetes', name: 'Diabetes' },
    { id: 'vitamins', name: 'Vitamins & Supplements' }
  ];
  
  // Filter medications based on search and category
  const filterMeds = (meds) => {
    return meds.filter(med => {
      const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           med.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || med.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };
  
  const filteredFrequentMeds = filterMeds(frequentMeds);
  const filteredOtherMeds = filterMeds(otherMeds);

  return (
    <div className="pharmacy-container">
      <Navigation />
      
      <main className="pharmacy-content">
        <header className="page-header">
          <h1>Pharmacy</h1>
          <p>Browse and order medications securely</p>
        </header>
        
        <div className="pharmacy-filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search medications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {filteredFrequentMeds.length > 0 && (
          <section className="medication-section">
            <h2>Frequently Purchased</h2>
            <div className="medication-grid">
              {filteredFrequentMeds.map(med => (
                <MedicineCard key={med.id} medicine={med} />
              ))}
            </div>
          </section>
        )}
        
        {filteredOtherMeds.length > 0 && (
          <section className="medication-section">
            <h2>All Medications</h2>
            <div className="medication-grid">
              {filteredOtherMeds.map(med => (
                <MedicineCard key={med.id} medicine={med} />
              ))}
            </div>
          </section>
        )}
        
        {filteredFrequentMeds.length === 0 && filteredOtherMeds.length === 0 && (
          <div className="no-results">
            <h3>No medications found</h3>
            <p>Try adjusting your search or category filters</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default PharmacyPage;