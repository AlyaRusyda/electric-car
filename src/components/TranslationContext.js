import React, { createContext, useState } from 'react';

const translations = {
  en: {
    heroTitle: "Electric Cars Bring REVolution to Indonesia",
    heroSubtitle: "Electric cars in Indonesia revolutionize transportation with low emissions and extraordinary energy efficiency.",
    menu: {
      home: "Home",
      catalog: "Catalog",
      adv: "Adventage",
      benefit: "Benefit",
      tips: "Tips",
      faq: "FAQ",
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
    titleBenefit: "Benefits of using EVs",
    benefit: [
      { title: "reduce carbon footprint", capt: "Electric vehicles do not emit CO2 and greenhouse gases, making them environmentally friendly.", img: "https://www.oto.com/2021/images/ev/reduced-carbon-footprint.svg" },
      { title: "Low cost of ownership and easy maintenance", capt: "Because there are fewer components, electric vehicles do not require much maintenance, nor do there are many components that require replacement even if they are used for a long time.", img: "https://www.oto.com/2021/images/ev/low-running-costs.svg" },
      { title: "best performance", capt: "Electric motors react faster than mechanical engines, so they offer great agility and torque resulting in a more relaxed ride and less noise pollution.", img: "https://www.oto.com/2021/images/ev/good-performance.svg" },
      { title: "Quiet and spacious cabin", capt: "Electric cars use far fewer components than ICE cars, allowing for a spacious cabin design and plenty of storage space.", img: "https://www.oto.com/2021/images/ev/spacious-cabin.svg" },
    ],
    titleCare: "How to Care for Your EV Battery",
    care: [
      { title: "Avoid exposure to high temperatures", capt: "Most of the damage occurs when the car is parked in extremely high temperatures. To keep the temperature under control for optimal efficiency, the automatic temperature control system in the EV will work and drain the battery" },
      { title: "Don't charge the battery to 100%", capt: "Fully charging the battery is not a good idea as it will affect the overall lifespan of the unit. Most electric vehicles today are equipped with a battery management system that helps avoid overcharging." },
      { title: "Avoid using fast charging too often", capt: "While fast charging offers great convenience when the battery is running low, doing this frequently will put a strain on the battery and reduce its lifespan." },
      { title: "Maintain optimal battery condition during long-term ideal conditions", capt: "Experts do not recommend leaving EVs for long periods of time with the battery fully charged or empty, as it will cause degradation. Here a timed charger will come in handy." },
      { title: "Battery Efficient Driving", capt: "Battery life can be improved by driving efficiently. Includes regenerative braking, controlled acceleration and precise tire pressure." }
    ],
    checkout: {
      title: "Checkout",
      fullName: "Full Name",
      fullAddress: "Full Address",
      phoneNumber: "Phone Number",
      shippingCost: "Shipping Cost",
      submit: "Submit",
    },
    titleFaq: "Frequently Asked Questions",
    faq: [
      { question: "What kind of electric car is it?", answer: "There are three types of electric vehicles available for sale in Indonesia 1. Battery Electric Vehicles (BEVs) BEVs are also known as All-Electric Vehicles. 2. Hybrid Electric Vehicles (HEV) 3. Plug-in Hybrid Electric Vehicles (PHEVs)" },
      { question: "Which electric cars are popular in Indonesia?", answer: "The 5 most popular electric cars in Indonesia are Binguo EV, Air EV, 4 EV, V and Seres E1. To see the full list of electric cars, Electric Cars" },
      { question: "Are there any upcoming electric cars in Indonesia?", answer: "Yes. There are upcoming electric cars in Indonesia. VF 6, VF 7, D9, Atto 4 and U are upcoming electric cars that are planned to be launched in Indonesia soon. To see a full list of all upcoming electric cars, Upcoming Electric Cars" },
      { question: "Are there hybrid cars available in Indonesia?", answer: "Yes. There are hybrid cars available in Indonesia. The top hybrid cars are the XL7, CR-V, Kijang Innova Zenix Hybrid EV, Tank 500 HEV and Ertiga Smart Hybrid. To see the full list of hybrid cars, Hybrid Cars" },
      { question: "Why are electric cars considered environmentally friendly?", answer: "Because it does not use an internal combustion engine that emits exhaust gas emissions from the combustion process that drives the pistons, to run the car." }
    ],
    searchPlaceholder: "Enter Model/Brand",
    carTitle: "Electric Cars",
    viewMore: "View more electric cars >",
    allFilter: "All",
    hours: "Hours",
    million: "Million",
    disc: "Get special discounts for your area",
    alert: "Successfully choose your area!",
  },
  id: {
    heroTitle: "Mobil Listrik Membawa REVolusi Ke Indonesia",
    heroSubtitle: "Mobil listrik di Indonesia merevolusi transportasi dengan emisi rendah dan efisiensi energi yang luar biasa.",
    menu: {
      home: "Beranda",
      catalog: "Katalog",
      adv: "Keunggulan",
      benefit: "Manfaat",
      tips: "Tips",
      faq: "FAQ",
    },
    headline: [
      { title: "Wuling", sub: "Terpopuler di Indonesia", image: "https://th.bing.com/th/id/OIP.lG7Rg-jxzpoLU7oscsS1TwAAAA?rs=1&pid=ImgDetMain" },
      { title: "DFSK", sub: "Kualitas yang bersaing", image: "https://logodix.com/logo/1609524.jpg" },
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
    titleBenefit: "Manfaat menggunakan EV",
    benefit: [
      { title: "mengurangi jejak karbon", capt: "Kendaraan listrik tidak mengeluarkan CO2 dan gas rumah kaca, sehingga ramah lingkungan.", img: "https://www.oto.com/2021/images/ev/reduced-carbon-footprint.svg" },
      { title: "biaya kepemilikan rendah dan perawatan mudah", capt: "Karena komponen lebih sedikit, kendaraan listrik tidak memerlukan banyak perawatan, juga tidak banyak komponen yang memerlukan penggantian meskipun digunakan dalam jangka waktu lama.", img: "https://www.oto.com/2021/images/ev/low-running-costs.svg" },
      { title: "performa terbaik", capt: "Motor listrik bereaksi lebih cepat dibandingkan mesin mekanis, sehingga menawarkan kelincahan dan torsi besar sehingga menghasilkan pengendaraan yang lebih santai dan polusi suara lebih sedikit.", img: "https://www.oto.com/2021/images/ev/good-performance.svg" },
      { title: "kabin senyap dan luas", capt: "Mobil listrik menggunakan komponen yang jauh lebih sedikit dibandingkan mobil ICE sehingga memungkinkan rancangan kabin luas dan banyak ruang penyimpanan.", img: "https://www.oto.com/2021/images/ev/spacious-cabin.svg" },
    ],
    titleCare: "Cara merawat baterai EV anda",
    care: [
      { title: "Hindari Paparan Suhu Tinggi", capt: "Sebagian besar kerusakan terjadi ketika mobil diparkir dalam suhu yang sangat tinggi. Untuk menjaga suhu tetap terkendali untuk efisiensi optimal, sistem kontrol suhu otomatis di EV akan bekerja dan menguras baterai" },
      { title: "Jangan Mengisi Baterai 100%", capt: "Mengisi daya baterai hingga penuh bukanlah ide yang baik karena akan memengaruhi masa pakai unit secara keseluruhan. Kebanyakan kendaraan listrik saat ini dilengkapi dengan sistem manajemen baterai yang membantu menghindari pengisian daya berlebih." },
      { title: "Hindari Terlalu Sering Menggunakan Pengisian Daya Cepat", capt: "Meskipun fast charging menawarkan kenyamanan luar biasa saat baterai hampir habis, melakukan hal ini secara sering akan membebani baterai dan mengurangi usianya." },
      { title: "Pertahankan Kondisi Baterai Optimal Selama Kondisi Ideal Jangka Panjang", capt: "Para ahli tidak menyarankan membiarkan EV dalam waktu lama dengan daya baterai terisi penuh atau kosong, karena akan menyebabkan degradasi. Di sini pengisi daya berjangka waktu akan berguna." },
      { title: "Mengemudi Hemat Baterai", capt: "Masa pakai baterai dapat ditingkatkan dengan cara berkendara efisien. Mencakup pengereman regeneratif, akselerasi terkontrol, dan tekanan ban yang tepat." }
    ],
    checkout: {
      title: "Checkout",
      fullName: "Nama Lengkap",
      fullAddress: "Alamat Lengkap",
      phoneNumber: "Nomor HP",
      shippingCost: "Total Pengiriman",
      submit: "Kirim",
    },
    titleFaq: "Pertanyaan yang Sering Diajukan",
    faq: [
      { question: "Apa saja jenis mobil listrik?", answer: "Ada tiga jenis kendaraan listrik yang tersedia untuk dijual di Indonesia. Pertama Kendaraan Listrik Berbaterai (BEVs) BEV juga dikenal sebagai Kendaraan Listrik Penuh (All-Electric Vehicle), Kendaraan Listrik Hibrid (HEV), Kendaraan Listrik Hibrida Plug-in (PHEV)" },
      { question: "Mobil listrik manakah yang populer di Indonesia?", answer: "5 mobil listrik terpopuler di Indonesia adalah Binguo EV, Air EV, 4 EV, V dan Seres E1. Untuk melihat daftar lengkap mobil listrik, Mobil Listrik" },
      { question: "Apakah ada mobil listrik yang akan datang di Indonesia?", answer: "Ya. Ada mobil listrik yang akan datang di Indonesia. VF 6, VF 7, D9, Atto 4 dan U adalah mobil listrik mendatang yang rencananya akan segera diluncurkan di Indonesia. Untuk melihat daftar lengkap semua mobil listrik yang akan datang, Mobil Listrik Yang Akan Datang" },
      { question: "Apakah ada mobil hybrid yang tersedia di Indonesia?", answer: "Ya. Ada mobil hibrida yang tersedia di Indonesia. Mobil hybrid teratas adalah XL7, CR-V, Kijang Innova Zenix Hybrid EV, Tank 500 HEV dan Ertiga Smart Hybrid. Untuk melihat daftar lengkap mobil hybrid, Mobil Hybrid" },
      { question: "Mengapa mobil listrik dianggap ramah lingkungan?", answer: "Karena tidak menggunakan mesin dengan pembakaran dalam (internal combustion engine) yang mengeluarkan emisi gas buang dari proses pembakaran yang menggerakkan piston, untuk menjalankan mobil." },
    ],
    searchPlaceholder: "Masukkan Merek",
    carTitle: "Mobil Listrik",
    viewMore: "Lihat mobil listrik lainnya >",
    allFilter: "Semua",
    hours: "Jam",
    million: "Juta",
    disc: "Dapatkan diskon spesial untuk daerahmu",
    alert: "Berhasil memilih daerah kamu!"
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
