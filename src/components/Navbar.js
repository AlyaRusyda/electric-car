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
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] md:px-24 ${
        sticky
          ? "p-2 bg-white/90 text-emerald-800 w-full fixed md:drop-shadow-md"
          : "p-2 bg-transparent text-emerald-800 w-full fixed"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <a
            href="/"
            className="flex items-center justify-start uppercase text-2xl md:text-3xl font-bold hover:text-emerald-500"
          >
            mobil
            <span className="w-60 text-emerald-500 hover:text-emerald-800">
              istrik
            </span>
          </a>
        </div>
        <div className="container flex justify-between h-16 mx-auto md:justify-end md:space-x-8">
          <ul className="items-stretch hidden space-x-3 md:flex">
            {menuLinks?.map((menu, index) => (
              <li className="flex" key={index}>
                <a
                  rel="noopener noreferrer"
                  className="flex items-center px-4 mb-1 border-b-2 border-transparent hover:text-emerald-500 uppercase"
                  href={menu.link}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={toggleLanguage}
          className="ml-2 h-10 w-8 bg-white border border-emerald-800 text-emerald-800 rounded-lg hover:bg-emerald-100 flex items-center justify-center transition-colors"
        >
          {language === "en" ? "EN" : "ID"}
        </button>
        <div className={` ${sticky ? "hidden" : "block"} `}>
          <div
            onClick={() => setOpen(!open)}
            className={`z-[999] ${
              open ? "text-emerald-800" : "text-emerald-800"
            } text-3xl md:hidden m-5`}
          >
            <Hamburger />
          </div>
        </div>
        <div className={` ${sticky ? "block" : "hidden"} `}>
          <div
            onClick={() => setOpen(!open)}
            className={`z-[999] ${
              open ? "text-emerald-800" : "text-emerald-800"
            } text-3xl md:hidden m-5`}
          >
            <Hamburger />
          </div>
        </div>
        <div
          className={`${
            sticky
              ? "md:hidden ml-0 text-emerald-800 fixed w-full px-7 py-8 font-medium bg-white/70 top-0 duration-300"
              : "md:hidden ml-0 text-emerald-800 fixed w-full px-7 py-8 font-medium bg-white/70 top-0 duration-300"
          } ${open ? "top-0" : "top-[-100%]"}`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg uppercase">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-emerald-500"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
