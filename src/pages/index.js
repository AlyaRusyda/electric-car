import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Headline from "../components/Headline";
import Car from "../components/Car";
import LocationPopup from "../components/LocationPopup";
import Future from "../components/Future";
import Benefit from "../components/Benefit";
import Care from "../components/Care";
import Faq from "../components/Faq";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const city = localStorage.getItem("city");
    const province = localStorage.getItem("province");

    if (!city && !province) {
      setIsPopupOpen(true);
    }
  }, []);

  const handleLocationSelect = (provinceName, cityName) => {
    console.log(
      `Selected Province: ${provinceName}, Selected City: ${cityName}`
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Headline />
      <Car />
      <Future />
      <Benefit />
      <Care />
      <Faq />
      <LocationPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onLocationSelect={handleLocationSelect}
      />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-emerald-600 text-white rounded-full px-4 py-2 shadow-lg border-0 hover:bg-emerald-700 transition"
        aria-label="Scroll to top"
      >
        <span className="text-3xl font-bold">↑</span>
      </button>
    </div>
  );
};

export default App;
