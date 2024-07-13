import React, { useState, useEffect, useContext } from "react";
import TranslationContext from "./TranslationContext";

const Car = () => {
  const make = [
    { name: "DFSK", make: "DFSK" },
    { name: "Wuling", make: "Wuling" },
    { name: "Neta", make: "Neta" },
  ]
  const [cars, setCars] = useState([]);
  const [originalCars, setOriginalCars] = useState([]);
  const { translations } = useContext(TranslationContext);

  async function getCar() {
    try {
      const data = await fetch(
        "https://api.jsonbin.io/v3/b/669111ddacd3cb34a864ffc8"
      );
      const cars = await data.json();
      setCars(cars.record);
      setOriginalCars(cars.record);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCar();
  }, []);

  const filterType = async (make) => {
    try {
      await setCars(
        originalCars.filter((item) => {
          return item.make === make;
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  const formatPrice = (price) => {
    return `Rp ${(price / 1000000).toFixed(0)} ${translations.million}`;
  };

  return (
    <section id="favorit">
      <div className="max-w-[1640px] m-auto px-28 py-20">
        <h1 className="text-grey-600 font-bold text-3xl text-left mb-12 md:mb-6">
          {translations.carTitle}
        </h1>
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <p className="font-bold text-gray-700">{translations.filterCategory}</p>
            <div className="flex justify-between flex-wrap">
              <button
                onClick={() => getCar()}
                className="m-1 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
              >
                {translations.allFilter}
              </button>
              {make.map((isi, index) => (
                <button
                  onClick={() => filterType(isi.make)}
                  className="m-1 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                  key={index}
                >
                  {isi.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Display Cars */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
          {cars.map((item, index) => (
            <div key={item.index} className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg border-0 hover:scale-105 duration-300 p-0">
              <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                  src={item.image}
                  alt={item.make}
                  className="w-full h-[200px] object-cover"
                />
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
              </div>
              <div className="p-4 px-6">
                <div className="flex items-center justify-between">
                  <h5 className="block font-sans text-[17px] font-normal antialiased leading-snug tracking-normal text-blue-gray-900">
                    {item.make} {item.model}
                  </h5>
                </div>
                <p className="block font-sans text-lg antialiased font-bold leading-relaxed text-gray-700">
                  {formatPrice(item.price)}
                </p>
                <div className="inline-flex flex-wrap items-center gap-4 mt-2 group">
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-speedometer2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z" />
                      <path
                        fillRule="evenodd"
                        d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"
                      />
                    </svg>
                    <p className="text-[12px]">{item.mile} Km</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-ev-station"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm2.131 10.46H4.14v-.893h1.403v-.505H4.14v-.855h1.49v-.54H3.485V13h2.146zm1.316.54h.794l1.106-3.333h-.733l-.74 2.615h-.031l-.747-2.615h-.764z" />
                      <path d="M3 0a2 2 0 0 0-2 2v13H.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H11v-4a1 1 0 0 1 1 1v.5a1.5 1.5 0 0 0 3 0V4a.5.5 0 0 0-.146-.354l-.5-.5a.5.5 0 0 0-.707 0l-.5.5A.5.5 0 0 0 13 4v3c0 .71.38 1.096.636 1.357l.007.008c.253.258.357.377.357.635v3.5a.5.5 0 1 1-1 0V12a2 2 0 0 0-2-2V2a2 2 0 0 0-2-2zm7 2v13H2V2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1" />
                    </svg>
                    <p className="text-[12px]">{item.regCharge} {translations.hours}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-2">
                <a
                  href={`/${item.id}`}
                  className="block w-full select-none rounded-lg bg-emerald-600 border-0 py-3 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 hover:bg-emerald-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  detail
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sky-500 p-2 py-4 uppercase font-bold underline underline-offset-4 decoration-dotted hover:text-sky-600">
          {translations.viewMore}
        </p>
      </div>
    </section>
  );
};

export default Car;
