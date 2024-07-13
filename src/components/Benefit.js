import React, { useContext } from 'react'
import TranslationContext from './TranslationContext';

const Benefit = () => {
    const { translations } = useContext(TranslationContext);

  return (
    <section id="benefit" className="px-32 py-12 flex gap-10 flex-col">
        <h1 className='text-4xl font-[700] opacity-85 capitalize'>{translations.titleBenefit}</h1>
        <div className='flex gap-12'>
            <img src='https://www.oto.com/2021/images/ev/ev-pros-cons-web.png' alt='Benefit img' className='max-h-[550px] ml-2' />
            <div className='flex flex-col w-full gap-4'>
            {translations.benefit.map((isi, index) => (
                <div className='border border-1.5 border-gray-300 rounded-xl flex gap-4 p-4'>
                    <img src={isi.img} alt={isi.title} className='max-w-10' />
                    <div>
                        <h4 className='capitalize font-semibold text-md'>{isi.title}</h4>
                        <p className='text-sm'>{isi.capt}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Benefit