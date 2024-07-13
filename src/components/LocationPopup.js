import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import TranslationContext from './TranslationContext';

const LocationPopup = ({ isOpen, onClose, onLocationSelect }) => {
    const { translations } = useContext(TranslationContext);
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        if (isOpen) {
            fetchProvinces();
        }
    }, [isOpen]);

    const fetchProvinces = async () => {
        const response = await axios.get('http://localhost:5000/api/provinces');
        setProvinces(response.data.rajaongkir.results);
    };

    const fetchCities = async (provinceId) => {
        const response = await axios.get(`http://localhost:5000/api/cities/${provinceId}`);
        setCities(response.data.rajaongkir.results);
    };

    const handleProvinceChange = (e) => {
        setSelectedProvince(e.target.value);
        setCities([]);
        fetchCities(e.target.value);
    };

    const handleSubmit = () => {
        if (selectedProvince && selectedCity) {
            const provinceName = provinces.find(province => province.province_id === selectedProvince)?.province || '';
            const cityName = cities.find(city => city.city_id === selectedCity)?.city_name || '';
            
            localStorage.setItem('province', selectedProvince);
            localStorage.setItem('province_name', provinceName);
            localStorage.setItem('city', selectedCity);
            localStorage.setItem('city_name', cityName);
            onLocationSelect(provinceName, cityName);

            alert(`${translations.alert}`);
            window.location.href = "/#favorit";
        } else {
            alert('Please select both a province and a city.');
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100">
            <div className="bg-white p-4 rounded shadow-lg">
                <h2 className="text-lg font-bold">Select Location</h2>
                <div>
                    <select onChange={handleProvinceChange} value={selectedProvince} className='w-full bg-gray-100 p-2 my-2 rounded border-1 border-emerald-100 focus:ring-0 hover:bg-gray-200'>
                        <option value="">Select Province</option>
                        {provinces.map((province) => (
                            <option key={province.province_id} value={province.province_id}>
                                {province.province}
                            </option>
                        ))}
                    </select>
                </div>
                {cities.length > 0 && (
                    <div>
                        <select onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity} className='w-full bg-gray-100 p-2 rounded hover:bg-gray-200 focus-within:ring-0'>
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option key={city.city_id} value={city.city_id}>
                                    {city.city_name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <div className="mt-4">
                    <button onClick={handleSubmit} className="mr-2 bg-emerald-600 text-white px-2 rounded border-0 hover:bg-emerald-400">
                        Submit
                    </button>
                    <button onClick={onClose} className="bg-gray-300 hover:bg-gray-100 px-2 rounded border-0">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocationPopup;
