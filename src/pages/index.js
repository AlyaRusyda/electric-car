import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Headline from '../components/Headline';
import Car from '../components/Car';
import LocationPopup from '../components/LocationPopup';
import Future from '../components/Future';
const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const city = localStorage.getItem('city');
    const province = localStorage.getItem('province');

    if (!city && !province) {
      setIsPopupOpen(true);
    }
  }, []);

  const handleLocationSelect = (provinceName, cityName) => {
    console.log(`Selected Province: ${provinceName}, Selected City: ${cityName}`);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Headline />
      <Car />
      <Future />
      <LocationPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        onLocationSelect={handleLocationSelect} 
      />
    </div>
  );
};

export default App;
