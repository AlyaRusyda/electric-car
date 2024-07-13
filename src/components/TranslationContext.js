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
    detail: {
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
    },
    future: {
      title: "Why the Automotive Future is Electric",
      desc: "Electric cars are powered by electrical energy stored in the battery. Compared to ICE (Internal Combustion Engine) cars, electric cars are much quieter and do not produce pollutants. Then here are the other features:",
      title1: "Affordable Ownership Costs",
      title2: "Easy to Drive",
      title3: "Environmentally friendly",
      title4: "Ease of charging batteries at home",
      desc1: "Although they are expensive compared to regular cars, the cost of owning and maintaining electric cars is cheaper. The factor of long battery life and tax incentives from the government also adds to cost efficiency.",
      desc2: "Because it does not have a transmission with a large number of gears, driving an electric car feels easy. Control, responsiveness and comfort are also good because the center of gravity is low. The electric motor also offers smooth acceleration and deceleration.",
      desc3: "By choosing an electric car, the owner participates in maintaining the earth. Unlike ICE cars, electric cars use 100% renewable energy that does not emit exhaust fumes and greenhouse gases.",
      desc4: "Like electronic devices, electric cars are also very easy to charge. Although charging the battery takes longer, some planning will reduce the impact. Often the filling is done overnight. If you use the fast charger method (100kW), the process is completed in a few minutes.",
    },
    carTitle: "Electric Cars",
    viewMore: "View more electric cars >",
    allFilter: "All",
    hours: "Hours",
    million: "Million",
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
    detail: {
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
    },
    future: {
      title: "mengapa masa depan otomitif adalah listrik",
      desc: "Mobil listrik ditenagai energi listrik yang tersimpan di dalam baterai. Dibandingkan mobil ICE (Internal Combustion Engine), mobil listrik jauh lebih senyap dan tidak menghasilkan polutan. Lalu berikut ini keistimewaan-keistimewaan lainnya:",
      title1: "Biaya Kepemilikan Terjangkau",
      title2: "Mudah Dikendarai",
      title3: "Ramah Lingkungan",
      title4: "Kemudahan Mengisi Baterai Di Rumah",
      desc1: "Meski harganya mahal dibandingkan mobil biasa, biaya kepemilikan dan perawatan mobil listrik lebih murah. Faktor usia baterai panjang dan insentif pajak dari pemerintah juga menambah efisiensi biaya.",
      desc2: "Karena tidak memiliki transmisi dengan jumlah gigi banyak, mengendarai mobil listrik terasa mudah. Pengendalian, responsivitas dan kenyamanan juga baik karena titik pusat gravitasi rendah. Motor listrik juga menawarkan akselerasi dan deselerasi halus.",
      desc3: "Dengan memilih mobil listrik, pemilik ikut serta dalam memelihara bumi. Tidak seperti mobil ICE, mobil listrik memakai energi terbarukan 100% yang tidak mengeluarkan asap knalpot dan gas rumah kaca.",
      desc4: "Seperti alat elektronik, mobil listrik juga sangat mudah dicas. Meskipun pengisian baterai membutuhkan waktu lebih lama, beberapa perencanaan akan mengurangi dampaknya. Seringkali pengisian dilakukan dalam semalaman. Kalau pakai metode pengisi daya cepat (100kW), proses selesai dalam beberapa menit.",
    },
    carTitle: "Mobil Listrik",
    viewMore: "Lihat mobil listrik lainnya >",
    allFilter: "Semua",
    hours: "Jam",
    million: "Juta",
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
