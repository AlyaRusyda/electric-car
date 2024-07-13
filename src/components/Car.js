import React, { useState, useEffect, useContext } from "react";
import TranslationContext from "./TranslationContext";
import Mile from "./Mile";
import Charge from "./Charge";

const Car = () => {
  const [cars, setCars] = useState([]);
  const [originalCars, setOriginalCars] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4); // Initial visible count
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const { translations } = useContext(TranslationContext);

  async function getCar() {
    try {
      const response = await fetch(
        "https://api.jsonbin.io/v3/b/669111ddacd3cb34a864ffc8"
      );
      const data = await response.json();
      setCars(data.record);
      setOriginalCars(data.record);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCar();
  }, []);

  useEffect(() => {
    const filteredCars = originalCars.filter(
      (item) =>
        item.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCars(filteredCars);
    setVisibleCount(4);
  }, [searchTerm, originalCars]);

  const formatPrice = (price) => {
    return `Rp ${(price / 1000000).toFixed(0)} ${translations.million}`;
  };

  const handleViewMore = () => {
    setVisibleCount(cars.length);
  };

  return (
    <section id="catalog" className="pb-8">
      <div className="max-w-[1640px] m-auto px-28 py-20">
        <div className="flex">
          <h1 className="text-grey-600 font-bold text-3xl text-left mb-12 md:mb-6">
            {translations.carTitle}
          </h1>
          <div className="flex flex-col lg:flex-row justify-between mb-4 ml-auto">
            <input
              type="text"
              placeholder={translations.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-400 rounded-lg p-2"
            />
          </div>
        </div>

        {/* Display Cars */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
          {cars.slice(0, visibleCount).map((item) => (
            <div
              key={item.id}
              className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg border-0 hover:scale-105 duration-300 p-0"
            >
              <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                  src={item.image}
                  alt={item.make}
                  className="w-full h-[200px] object-cover"
                />
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
              </div>
              <div className="p-4 px-6">
                <h5 className="block font-sans text-[17px] font-normal antialiased leading-snug tracking-normal text-blue-gray-900">
                  {item.make} {item.model}
                </h5>
                <p className="block font-sans text-lg antialiased font-bold leading-relaxed text-gray-700">
                  {formatPrice(item.price)}
                </p>
                <div className="flex gap-2 items-center mt-2">
                  <Mile />
                  <p className="text-[12px]">{item.mile} Km</p>
                  <Charge />
                  <p className="text-[12px]">
                    {item.regCharge} {translations.hours}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-2">
                <a
                  href={`/${item.id}`}
                  className="block w-full select-none rounded-lg bg-emerald-600 border-0 py-3 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md transition-all hover:bg-emerald-800"
                >
                  detail
                </a>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < cars.length && (
          <p
            onClick={handleViewMore}
            className="text-sky-500 p-2 py-4 uppercase font-bold underline underline-offset-4 decoration-dotted hover:text-sky-600 cursor-pointer"
          >
            {translations.viewMore}
          </p>
        )}
      </div>
    </section>
  );
};

export default Car;
