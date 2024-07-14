import React, { useContext, useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import TranslationContext from "./TranslationContext";

const Navbar = () => {
  const { translations, setLanguage, language } =
    useContext(TranslationContext);
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: translations.menu.home, link: "/" },
    { name: translations.menu.catalog, link: "/#catalog" },
    { name: translations.menu.adv, link: "/#future" },
    { name: translations.menu.benefit, link: "/#benefit" },
    { name: translations.menu.tips, link: "/#care" },
    { name: translations.menu.faq, link: "/#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] px-5 md:px-24 ${
        sticky ? "bg-white/90 text-emerald-800 shadow-md" : "bg-transparent text-emerald-800"
      }`}
    >
      <div className="flex items-center justify-between h-16 mt-2">
        <a
          href="/"
          className="text-2xl md:text-3xl font-bold uppercase hover:text-emerald-500"
        >
          mobil
          <span className="text-emerald-500">istrik</span>
        </a>

      <div className="flex items-center">
        <ul className="hidden md:flex space-x-3">
          {menuLinks.map((menu, index) => (
            <li key={index}>
              <a
                href={menu.link}
                className="px-4 mb-1 border-b-2 border-transparent hover:text-emerald-500 uppercase"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleLanguage}
          className="ml-6 md:h-10 md:w-8 w-4 h-9 md:text-base text-sm bg-white border border-emerald-800 text-emerald-800 rounded-lg hover:bg-emerald-100 flex items-center justify-center transition-colors"
        >
          {language === "en" ? "EN" : "ID"}
        </button>
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)} className="text-3xl md:m-5 border-0">
            <Hamburger />
          </button>
        </div>
      </div>

        <div
          className={`fixed inset-0 bg-white/80 px-7 py-6 font-medium text-emerald-800 transform ${
            open ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 md:hidden`}
        >
          <ul className="flex flex-col gap-10 text-lg uppercase">
            {menuLinks.map((menu, index) => (
              <li key={index} onClick={() => setOpen(false)}>
                <a href={menu.link} className="hover:text-emerald-500">
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
