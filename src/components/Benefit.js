import React, { useContext } from 'react'
import TranslationContext from './TranslationContext';

const Benefit = () => {
    const { translations } = useContext(TranslationContext);

  return (
    <section id="benefit" className="md:px-32 px-8 py-12 flex gap-10 flex-col">
        <h1 className='text-4xl font-[700] opacity-85 capitalize'>{translations.titleBenefit}</h1>
        <div className='flex flex-col md:flex-row gap-12'>
            <img src='https://www.oto.com/2021/images/ev/ev-pros-cons-web.png' alt='Benefit img' className='max-h-[550px] md:ml-2' />
            <div className='flex flex-col w-full gap-4'>
            {translations.benefit.map((isi, index) => (
                <div key={index} className='border border-1.5 border-gray-300 rounded-xl flex gap-4 p-4'>
                    <img src={isi.img} alt={isi.title} className='max-w-10' />
                    <div>
                        <h4 className='capitalize font-semibold md:text-md text-sm'>{isi.title}</h4>
                        <p className='md:text-sm text-xs font-normal md:font-medium'>{isi.capt}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Benefit