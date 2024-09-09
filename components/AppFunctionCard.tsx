import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type appFunctionPros = {
    cardBg: string
    iconSrc: string,
    title: string,
    content: string,
    smartphoneImg: string,
    isBig: boolean,
    setActiveCard?: () => void
}
const AppFunctionCard = ({ cardBg, iconSrc, title, content, isBig, smartphoneImg, setActiveCard }: appFunctionPros) => {
  return (
    <motion.div 
    className={`relative ${isBig ? 'w-full h-[428px]' : 'w-full md:w-[calc(50%-0.4rem)] text-sm'} bg-white rounded-lg shadow-custom`}
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.9 }}
    onMouseEnter={setActiveCard}
    >
        <div className={`${isBig ? 'p-5' : 'py-10 md:p-1'} bg-cover bg-center rounded-t-lg flex justify-center md:justify-start`} style={{ backgroundImage: `url('/img/app-features/${cardBg}')` }}>
            <img src={`/img/app-icons/${iconSrc}`} className='w-28 md:w-14 h-28 md:h-14' alt='Ikona karty' />
        </div>
        <div className={`${isBig ? 'p-5 h-72' : 'p-3'}  rounded-b-lg`}>
            <h3 className='text-l font-semibold'>{title}</h3>
            <div className={`${isBig ? 'lg:w-2/3' : 'w-full'} text-xs py-2`}>
            {isBig ? <div><p className='mb-3'>Ułatwia zwiedzającym nawigację w terenie. </p><p className='mb-3'>Mapa wyświetla trasę audioprzewodnika. Umożliwia też uruchamianie nagrań z jej poziomu.</p><p className='mb-3'> Na tym ekranie zwiedzający może też wyświetlić swoją pozycję - dzięki temu łatwiej odnajdzie się w terenie</p><p>Pomoc w przygotowywaniu wniosku na cyfrowy przewodnik / aplikację mobilną w programie HORECA (link: <a href='https://horeca-kpo.pl/nabory'>https://horeca-kpo.pl/nabory</a>)</p></div> : content}
            </div>
        </div>
        {isBig && (
            <div className='hidden lg:block md:absolute max-w-40 h-full top-16 right-5'>
                <img src={smartphoneImg} alt='Smartphone - Interakltywna mapa' />
            </div>
        )}
    </motion.div>
  )
}

export default AppFunctionCard