import React, { useContext } from "react";
import TranslationContext from "./TranslationContext";

const Care = () => {
    const { translations } = useContext(TranslationContext);

  return (
    <section id="care" className="px-28 py-12 flex gap-20">
      <img
        src="https://www.oto.com/2021/images/ev/ev-battery-charger-web-car.png"
        alt="How to care"
        className="max-h-[600px]"
      />
      <div>
        <h1 className="text-4xl font-[700] opacity-85 capitalize mb-8">
          {translations.titleCare}
        </h1>
        {translations.care.map((isi, index) => (
        <div className="flex flex-col text-left justify-between px-3 py-1 border-l-4 border-gray-200 text-gray-800 text-sm mb-4">
          <span className="font-[650] text-xl">{isi.title}</span>
          {isi.capt}
        </div>
        ))}
      </div>
    </section>
  );
};

export default Care;
