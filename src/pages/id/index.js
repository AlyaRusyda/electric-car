import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavbarDetails from "../../components/NavbarDetails";
import { Plus } from "../../components/Plus";
import { Minus } from "../../components/Minus";
import TranslationContext from "../../components/TranslationContext";

function Detail() {
  const { id } = useParams();
  const { translations } = useContext(TranslationContext); // Use the context
  const [car, setCar] = useState(null);
  const [qty, setQty] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [setSelectedImage] = useState(null);
  const [setSelectedColor] = useState("");

  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/669111ddacd3cb34a864ffc8"
        );
        const data = await response.json();
        const carItem = data.record.find((e) => e.id === Number(id));
        setCar(carItem || {});
        setSelectedImage(carItem.image);  // Set default image
        setSelectedColor("Default Color"); // Set default color name
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    }

    fetchCar();
  });

  if (car === null) {
    return <div>{translations.detail.loading}</div>;
  }

  if (Object.keys(car).length === 0) {
    return <div>{translations.detail.itemNotFound}</div>;
  }

  const total = qty * car.price;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  const truncatedDescription = car.description.slice(0, 200);
  const shouldShowFullText = car.description.length > 200;

  return (
    <>
      <NavbarDetails />
      <div className="container lg:max-w-screen-lg mx-auto py-24 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Product's image */}
          <div className="relative">
            <div className="border border-opacity-50 rounded-md shadow-lg p-4 mt-4 w-96">
              <Carousel showArrows={true} dynamicHeight={true}>
                <div onClick={() => { setSelectedImage(car.image); setSelectedColor("Default Color"); }}>
                  <img src={car.image} alt="Default" className="w-96 rounded-md" />
                </div>
                {car.imgColor.map((colorImage, index) => (
                  <div key={index} className="relative" onClick={() => { setSelectedImage(colorImage); setSelectedColor(car.color[index]); }}>
                    <img src={colorImage} alt={`Color variant ${car.color[index]}`} className="w-96 rounded-md" />
                    <p className="absolute bottom-2 -right-6 text-xs transform -translate-x-1/2 font-semibold bg-black text-white bg-opacity-60 rounded p-1">
                      {car.color[index]}
                    </p>
                  </div>
                ))}
              </Carousel>
              <table className="table-auto w-full text-xs mt-6">
                <tbody>
                  <tr>
                    <td className="text-gray-500 align-top">{translations.detail.transmission}</td>
                    <td className="font-semibold align-top">: {car.transmission}</td>
                    <td className="text-gray-500 align-top">{translations.detail.battery}</td>
                    <td className="font-semibold align-top">: {car.battery} kWh</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 align-top">{translations.detail.emission}</td>
                    <td className="font-semibold align-top">: {car.emission} g/km</td>
                    <td className="text-gray-500 align-top">{translations.detail.fastCharge}</td>
                    <td className="font-semibold align-top">: {car.fastCharge}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 align-top">{translations.detail.mile}</td>
                    <td className="font-semibold align-top">: {car.mile} km</td>
                    <td className="text-gray-500 align-top">{translations.detail.regCharge}</td>
                    <td className="font-semibold align-top">: {car.regCharge} {translations.detail.hours}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 align-top">{translations.detail.rimSize}</td>
                    <td className="font-semibold align-top">: {car.velg} inch</td>
                    <td className="text-gray-500 align-top">{translations.detail.tireSize}</td>
                    <td className="font-semibold align-top">: {car.tire}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 align-top">{translations.detail.speed}</td>
                    <td className="font-semibold align-top">: {car.speed} km/h</td>
                    <td className="text-gray-500 align-top">{translations.detail.capacity}</td>
                    <td className="font-semibold align-top">: {car.capacity}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Product's details */}
          <div className="flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6 mt-80">
            <h2 className="text-2xl font-semibold">{car.make} {car.model}</h2>
            <p className="mt-4 text-gray-700 text-sm">
              {isExpanded || !shouldShowFullText ? car.description : truncatedDescription}
              {shouldShowFullText && (
                <button
                  onClick={() => setIsExpanded((prev) => !prev)}
                  className="p-0 border-0 text-gray-400 text-sm underline ml-1"
                >
                  {isExpanded ? translations.detail.showLess : translations.detail.showMore}
                </button>
              )}
            </p>
            <div className="mt-8 border-t pt-4">
              <p className="text-gray-500 text-sm">{translations.detail.price}</p>
              <p className="text-lg font-semibold">{formatPrice(car.price)}</p>
            </div>

            <div className="mt-4 border-t pt-4">
              <p className="text-gray-500 text-sm">{translations.detail.quantity}</p>
              <div className="mt-1 flex items-center space-x-3">
                <button
                  onClick={() => setQty((prev) => prev - 1)}
                  disabled={qty <= 1}
                  className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1 border-0"
                >
                  <Minus />
                </button>
                <p className="font-semibold text-xl">{qty}</p>
                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  disabled={qty >= car.stock}
                  className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-green-100 hover:text-green-500 rounded-md p-1 border-0"
                >
                  <Plus />
                </button>
              </div>
              <div className="flex flex-row gap-2">
                <button
                  type="button"
                  disabled
                  className="mt-8 border rounded py-2 px-6 bg-emerald-500 hover:bg-emerald-600 border-emerald-500 hover:border-emerald-600 focus:ring-4 focus:ring-opacity-50 focus:ring-emerald-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex flex-row"
                >
                  {translations.detail.addToCart} (Rp {formatPrice(total)})
                </button>
                <a
                  href="/#catalog"
                  className="mt-8 border rounded py-2 px-6 bg-gray-500 hover:text-gray-600 hover:bg-gray-100 border-gray-600 hover:border-gray-600 focus:ring-4 focus:ring-opacity-50 focus:ring-gray-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex flex-row"
                >
                  {translations.detail.back}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
