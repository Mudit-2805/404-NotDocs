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
      price: 25,
      image: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/5ba5701fcb6c46628c5cff317109886b.jpg",
      description: "Pain reliever and fever reducer",
      requiresPrescription: false,
      category: "pain-relief"
    },
    {
      id: 2,
      name: "Acetaminophen",
      brand: "Tylenol",
      price: 30,
      image: "data:image/jpeg;base64,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",
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