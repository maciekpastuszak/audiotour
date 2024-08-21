import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const PortfolioCard = ({ bgImg, bgImgAlt, tourIcon, tourIconAlt, title, subtitle1, subtitle2, desc }) => {
  return (
    <div className='relative w-[300px] h-[350px] flex flex-col shadow-xl rounded-xl bg-white'>
        <div className="relative">
            <Image 
              src={bgImg} 
              width={300} 
              height={200} 
              alt={bgImgAlt}
              className='rounded-t-xl'
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white rounded-t-xl z-10"></div>
        </div>
        <div className='absolute top-32 flex flex-row gap-2 me-2 justify-between items-end mx-2 z-20'>
            <Image src={tourIcon} width={64} height={64} alt={tourIconAlt} className='rounded-xl shadow-md' />
            <Button className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-full h-6 text-[0.6rem] gap-1 flex justify-center shadow-md'>
                <Image src="/img/app-icons/App_Store_Icon.svg" alt="AppStore Icon" width={15} height={10} />
                App Store
            </Button>
            <Button className='bg-black rounded-full w-full h-6 text-[0.6rem] gap-1 flex justify-center'>
                <Image src="/img/app-icons/Google_Play_Icon.svg" alt="Google Play Icon" width={15} height={10} />
                Google Play
            </Button>
        </div>
        <div className='mt-7 ms-3 leading-loose z-20'>
            <h1 className='font-bold text-sm'>{title}</h1>
            <p className='text-[0.6rem] text-gray-500'>{subtitle1}</p>
            <p className='text-[0.6rem] text-gray-500'>{subtitle2}</p>
            <h2 className='text-xs mt-2'>{desc}</h2>
        </div>
    </div>
  )
}

export default PortfolioCard;
