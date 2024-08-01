import Image from 'next/image'
import React from 'react'

type appFunctionPros = {
    iconSrc: string,
    iconAlt: string,
    title: string,
    content: string
    isBig: boolean
}
const AppFunctionCard = ({ iconSrc, iconAlt, title, content, isBig }: appFunctionPros) => {
  return (
    <div className={`relative ${isBig ? 'w-full h-[428px]' : 'w-full md:w-[calc(50%-0.4rem)] min-h-[200px'} bg-white drop-shadow-md`}>
        <div className={`${isBig ? 'p-5' : 'p-1'} bg-[url(/img/app-features/Feature_Audioprzewodniki_1.png)] bg-cover rounded-t-lg`}>
            <Image src={iconSrc} width={55} height={55} alt={iconAlt}/>
        </div>
        <div className={`${isBig ? 'p-5 h-72' : 'p-3'}  rounded-b-lg`}>
            <h3 className='text-l font-semibold'>{title}</h3>
            <div className={`${isBig ? 'lg:w-2/3' : 'w-full'} text-sm py-2`}>
            {isBig ? <div><p className='mb-3'>Ułatwia zwiedzającym nawigację w terenie. </p><p className='mb-3'>Mapa wyświetla trasę audioprzewodnika. Umożliwia też uruchamianie nagrań z jej poziomu.</p><p> Na tym ekranie zwiedzający może też wyświetlić swoją pozycję - dzięki temu łatwiej odnajdzie się w terenie</p></div> : content}
            </div>
        </div>
        {isBig && (
            <div className='hidden lg:block md:absolute max-w-40 h-full top-16 right-5'>
                <img src='/img/app-features/Feature_Audioprzewodniki_SS1.png' alt='Smartphone - Interakltywna mapa' />
            </div>
        )}
    </div>
  )
}

export default AppFunctionCard