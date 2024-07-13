import React, { createContext, useState } from 'react';

const translations = {
  en: {
    heroTitle: "Electric Cars Bring REVolution to Indonesia",
    heroSubtitle: "Electric cars in Indonesia revolutionize transportation with low emissions and extraordinary energy efficiency.",
    menu: {
      home: "Home",
      favorite: "Your Favorites",
    },
    headline: [
      { title: "Wuling", sub: "Most popular in Indonesia", image: "https://th.bing.com/th/id/OIP.lG7Rg-jxzpoLU7oscsS1TwAAAA?rs=1&pid=ImgDetMain" },
      { title: "DFSK", sub: "Competitive quality", image: "https://logodix.com/logo/1609524.jpg" },
      { title: "Neta", sub: "Economical and budget-friendly", image: "https://th.bing.com/th/id/OIP.4xUO8-SKZZlyNhWxkoyvFwHaEV?rs=1&pid=ImgDetMain" },
    ],
    carTitle: "Electric Cars",
    viewMore: "View more electric cars >",
    allFilter: "All",
    hours: "Hours",
    million: "Million",
    loading: "Loading...",
    itemNotFound: "Item not found",
    transmission: "Transmission",
    capacity: "Passenger Capacity",
    emission: "Emission",
    battery: "Battery Capacity",
    mile: "Range",
    fastCharge: "Fast Charging",
    speed: "Max Speed",
    regCharge: "Regular Charging",
    rimSize: "Rim Size",
    tireSize: "Tire Size",
    price: "Price:",
    quantity: "Quantity:",
    addToCart: "Checkout",
    back: "Back",
    showMore: "Show more",
    showLess: "Show less",
    disc: "Get special discounts for your area"
  },
  id: {
    heroTitle: "Mobil Listrik Membawa REVolusi Ke Indonesia",
    heroSubtitle: "Mobil listrik di Indonesia merevolusi transportasi dengan emisi rendah dan efisiensi energi yang luar biasa.",
    menu: {
      home: "Beranda",
      favorite: "Favorit Anda",
    },
    headline: [
      { title: "Wuling", sub: "Terpopuler di Indonesia", image: "https://th.bing.com/th/id/OIP.lG7Rg-jxzpoLU7oscsS1TwAAAA?rs=1&pid=ImgDetMain" },
      { title: "DFSK", sub: "Kualitas yang bersaing", image: "https://th.bing.com/th/id/OIP.lG7Rg-jxzpoLU7oscsS1TwAAAA?rs=1&pid=ImgDetMain https://logodix.com/logo/1609524.jpg" },
      { title: "Neta", sub: "Ekonomis dan ramah kantong", image: "https://th.bing.com/th/id/OIP.4xUO8-SKZZlyNhWxkoyvFwHaEV?rs=1&pid=ImgDetMain" },
    ],
    carTitle: "Mobil Listrik",
    viewMore: "Lihat mobil listrik lainnya >",
    allFilter: "Semua",
    hours: "Jam",
    million: "Juta",
    loading: "Memuat...",
    itemNotFound: "Item tidak ditemukan",
    transmission: "Transmisi",
    capacity: "Kapasitas Penumpang",
    emission: "Emisi",
    battery: "Kapasitas Baterai",
    mile: "Jarak Tempuh",
    fastCharge: "Pengisian Cepat",
    speed: "Kecepatan Maksimal",
    regCharge: "Pengisian Reguler",
    rimSize: "Ukuran Velg",
    tireSize: "Ukuran Ban",
    price: "Harga:",
    quantity: "Jumlah:",
    addToCart: "Checkout",
    back: "Kembali",
    showMore: "Selengkapnya",
    showLess: "Tampilkan lebih sedikit",
    disc: "Dapatkan diskon spesial untuk daerahmu",
  },
};

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const value = {
    language,
    setLanguage,
    translations: translations[language],
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationContext;
