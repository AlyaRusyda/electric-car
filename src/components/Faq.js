import React, { useContext, useState } from "react";
import TranslationContext from "./TranslationContext";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { translations } = useContext(TranslationContext);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="px-28 py-16 gap-20">
      <h1 className="text-4xl font-[700] opacity-85 capitalize mb-8">
        {translations.titleFaq}
      </h1>
      <div className="space-y-4">
        {translations.faq.map((isi, index) => (
          <div key={index} className="border rounded-lg">
            <summary
              className="flex justify-between items-center px-4 py-6 focus:outline-none cursor-pointer"
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
              <p className="px-4 pb-4 text-sm text-gray-600">
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
