import React, { useContext } from "react";
import TranslationContext from "./TranslationContext";

const Care = () => {
    const { translations } = useContext(TranslationContext);

  return (
    <section id="care" className="md:px-28 px-8 py-12 flex flex-col md:flex-row md:gap-20 gap-8">
      <img
        src="https://www.oto.com/2021/images/ev/ev-battery-charger-web-car.png"
        alt="How to care"
        className="max-h-[600px]"
      />
      <div>
        <h1 className="md:text-4xl text-xl font-[700] opacity-85 capitalize mb-8">
          {translations.titleCare}
        </h1>
        {translations.care.map((isi, index) => (
        <div key={index} className="flex flex-col text-left justify-between px-3 py-1 border-l-4 border-gray-200 text-gray-800 md:text-sm text-xs mb-4 gap-2 md:gap-0">
          <span className="font-[650] md:text-xl text-[14px]">{isi.title}</span>
          {isi.capt}
        </div>
        ))}
      </div>
    </section>
  );
};

export default Care;
