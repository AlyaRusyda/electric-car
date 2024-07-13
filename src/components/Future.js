import React, { useContext, useState } from "react";
import TranslationContext from "./TranslationContext";

const Future = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { translations } = useContext(TranslationContext);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="future" className="px-28 pb-12 flex gap-10">
      <img
        src="https://www.oto.com/2021/images/ev/ev-features-web-car.png"
        alt="Masa depan otomotif adalah listrik"
        className="h-full"
      />
      <div className="flex flex-col gap-4 pt-8">
        <h1 className="text-4xl font-[700] opacity-85 capitalize">
          {translations.future.title}
        </h1>
        <p className="text-md">
          {translations.future.desc}
        </p>
        <div id="accordion-open" className="w-full mt-6">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <h2 id={`accordion-open-heading-${index + 1}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-emerald-200 hover:bg-emerald-100 gap-3"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`accordion-open-body-${index + 1}`}
                >
                  <span className="flex items-center font-semibold text-black/70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-ev-front-fill text-emerald-400 w-5 h-5 mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848Zm6.75.51a.186.186 0 0 0-.23.034L6.05 7.246a.188.188 0 0 0 .137.316h1.241l-.673 2.195a.19.19 0 0 0 .085.218c.075.043.17.03.23-.034l2.88-3.187a.188.188 0 0 0-.137-.316H8.572l.782-2.195a.19.19 0 0 0-.085-.218Z" />
                    </svg>
                    {index === 0
                      ? `${translations.future.title1}`
                      : index === 1
                      ? `${translations.future.title2}`
                      : index === 2
                      ? `${translations.future.title3}`
                      : `${translations.future.title4}`}
                  </span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 shrink-0 ${
                      openIndex === index ? "" : "rotate-180"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-open-body-${index + 1}`}
                className={`${openIndex === index ? "" : "hidden"}`}
                aria-labelledby={`accordion-open-heading-${index + 1}`}
              >
                <div className="p-5 border border-b-0 border-gray-200 font-medium text-sm">
                  {index === 0 && (
                    <>
                      <p className="mb-2 text-gray-500">
                        {translations.future.desc1}
                      </p>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <p className="mb-2 text-gray-500">
                        {translations.future.desc2}
                      </p>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <p className="mb-2 text-gray-500">
                        {translations.future.desc3}
                      </p>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <p className="mb-2 text-gray-500">
                        {translations.future.desc4}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Future;
