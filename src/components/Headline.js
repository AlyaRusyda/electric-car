import React, { useContext } from 'react';
import TranslationContext from './TranslationContext';

const Headline = () => {
  const { translations } = useContext(TranslationContext);

  return (
    <div className='max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      {translations.headline.map((isi, index) => (
        <div className='rounded-xl relative' key={index}>
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-4 pt-4'>{isi.title}</p>
            <p className='px-4'>{isi.sub}</p>
          </div>
          <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src={isi.image}
            alt={isi.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Headline;
