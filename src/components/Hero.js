import React, { useContext } from "react";
import TranslationContext from "./TranslationContext";
import Logo from "./Logo";

const Hero = () => {
  const { translations } = useContext(TranslationContext);

  return (
    <div className="max-w-[1640px] mx-auto p-4 scroll-smooth">
      <div className="max-h-[500px] relative mt-16">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 md:max-h-[500px] bg-black/70 flex justify-center p-8 md:p-24">
          <div className="md:col-6 md:py-4 py-36">
            <span className="md:text-lg text-md font-medium flex gap-2 items-center mb-2.5">
              <Logo/>
              MobiListrik
            </span>
            <h1 className="mb-2.5 lg:text-4xl text-2xl font-semibold md:max-w-[70%]">
              {translations.heroTitle}
            </h1>
            <p className="font-light md:max-w-[64%] text-xs md:text-base hidden md:block">
              {translations.heroSubtitle}
            </p>
          </div>
        </div>
        <img
          className="w-full md:max-h-[400px] h-[450px] object-cover"
          src="https://th.bing.com/th/id/R.398b759caea92163d2c02408d3394d99?rik=t6Ml1iz162rEpQ&riu=http%3a%2f%2fwww.weareaugustines.com%2fwp-content%2fuploads%2f2018%2f09%2fImage_1-32.jpeg&ehk=gIXeDPgO3i0QLBs7AysfAtHPuuRoh3r0pWyJSUZGmXY%3d&risl=&pid=ImgRaw&r=0"
          alt="Hero bg"
        />
      </div>
    </div>
  );
};

export default Hero;
