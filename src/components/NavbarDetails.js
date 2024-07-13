"use client"
import React, { useEffect, useState, useContext } from "react";
import TranslationContext from "./TranslationContext";

const NavbarDetails = () => {
  const { setLanguage, language } = useContext(TranslationContext);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] py-5 md:px-24 ${
        sticky
          ? "p-2 bg-white/90 text-emerald-800 md:drop-shadow-md"
          : "p-2 bg-transparent text-emerald-800"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <a href="/" className="flex items-center justify-start uppercase text-2xl md:text-3xl font-bold hover:text-emerald-500">
            mobil<span className="w-60 text-emerald-500 hover:text-emerald-800">istrik</span>
          </a>
        </div>
        <button
          onClick={toggleLanguage}
          className="ml-4 p-2 bg-emerald-600 text-white rounded-lg border-0"
        >
          {language === 'en' ? 'EN' : 'ID'}
        </button>
      </div>
    </nav>
  );
};

export default NavbarDetails;
