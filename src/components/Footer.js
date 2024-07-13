import React, { useContext, useEffect, useState } from "react";
import LocationPopup from "./LocationPopup";
import TranslationContext from "./TranslationContext";

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const { translations } = useContext(TranslationContext);

  useEffect(() => {
    const storedCity = localStorage.getItem("city_name");

    if (storedCity) {
      setSelectedLocation(`${storedCity}`);
    }
  }, []);

  const handleLocationSelect = (city) => {
    setSelectedLocation(`${city}`);
  };

  return (
    <footer className="bg-white shadow-inner-up text-gray-900">
      <div className="container flex flex-col p-4 mx-auto lg:flex-row divide-gray-600">
        <p className="self-center items-center text-left sm:flex sm:space-y-0 sm:justify-start sm:space-x-0 lg:flex-1 lg:justify-start text-emerald-800">
          <a
            href="/"
            className="flex items-center justify-start uppercase text-2xl md:text-2xl font-bold hover:text-emerald-500 mr-2"
          >
            mobil
            <span className="text-emerald-500 hover:text-emerald-800">
              istrik
            </span>
          </a>
          <span className="text-md">© {new Date().getFullYear()} - Alya Rusyda</span>
        </p>
        <div className="flex justify-center pt-6 lg:pt-0 items-center gap-2">
          <p className="text-emerald-700">
            {translations.disc}
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="flex items-center gap-1 bg-white text-emerald-600 p-2 border-1.5 rounded-lg border-emerald-600 hover:bg-emerald-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            {selectedLocation}
          </button>
        </div>
      </div>
      <LocationPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onLocationSelect={handleLocationSelect} // Make sure this is passed correctly
      />
    </footer>
  );
};

export default Footer;
