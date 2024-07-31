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
    <div className={`${isBig ? 'w-full' : 'w-full md:w-[calc(50%-0.4rem)]'} rounded-lg`}>
        <div className={`bg-[url(/img/app-features/Feature_Audioprzewodniki_1.png)] p-5`}>
            <Image src={iconSrc} width={55} height={55} alt={iconAlt}/>
        </div>
        <div className='p-5 bg-white'>
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p className='w-2/3'>{content}</p>
        </div>
    </div>
  )
}

export default AppFunctionCard