import React, { useContext, useState } from "react";
import TranslationContext from "./TranslationContext";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { translations } = useContext(TranslationContext);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="md:px-28 px-8 py-16 gap-20">
      <h1 className="md:text-4xl text-xl text-center md:text-left font-[700] opacity-85 capitalize mb-8">
        {translations.titleFaq}
      </h1>
      <div className="space-y-4">
        {translations.faq.map((isi, index) => (
          <div key={index} className="border rounded-lg">
            <summary
              className="flex justify-between items-center md:px-4 px-3 md:py-6 py-4 focus:outline-none cursor-pointer md:text-base text-sm"
              onClick={() => toggleAccordion(index)}
            >
              <span>{isi.question}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M1 1l4 4 4-4"
                />
              </svg>
            </summary>
            {openIndex === index && (
              <p className="px-4 pb-4 md:text-sm text-[12px] font-normal md:font-medium text-gray-600">
                {isi.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
