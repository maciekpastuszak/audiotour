import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import parse from 'html-react-parser';
import Link from 'next/link';

type PortfolioCardProps = {
    bgImg : string,
    tourIcon : string,
    title : string,
    subtitle1 : string,
    subtitle2 : string,
    desc : string,  
    linkAppStore : string,
    linkGooglePlay: string,
}

const PortfolioCard = ({ bgImg, tourIcon, title, subtitle1, subtitle2, desc,linkAppStore, linkGooglePlay }: PortfolioCardProps) => {
  return (
    <div className='relative w-[300px] h-[350px] flex flex-col shadow-custom rounded-xl bg-white'>
        <div className="relative">
            <Image 
              src={bgImg}
              width={300} 
              height={200}
              alt="Image of the place"
              className='rounded-t-xl'
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white from-0% to-25% z-10"></div>
        </div>
        <div className='absolute top-32 flex flex-row gap-2 me-2 justify-between items-end mx-2 z-20'>
            <Image src={tourIcon} width={112} height={112} alt='Tour place icon' className='rounded-xl shadow-md w-16 h-16' quality={85} />
            <Button className='bg-gradient-to-b from-[#25B4F0] to-[#267ADF] rounded-full w-full h-6 text-[0.6rem] gap-1 flex justify-center shadow-custom' asChild>
                <Link href={linkAppStore}>
                    <Image src="/img/app-icons/App_Store_Icon.svg" alt="AppStore Icon" width={15} height={10} />
                    App Store
                </Link>
            </Button>
            <Button className='bg-black rounded-full w-full h-6 text-[0.6rem] gap-1 flex justify-center' asChild>
                <Link href={linkGooglePlay}>
                <Image src="/img/app-icons/Google_Play_Icon.svg" alt="Google Play Icon" width={15} height={10} />
                Google Play
                </Link>
            </Button>
        </div>
        <div className='mt-7 ms-3 leading-loose z-20'>
            <h1 className='font-bold text-sm'>{title}</h1>
            <p className='text-[0.6rem] text-gray-500'>{subtitle1}</p>
            <p className='text-[0.6rem] text-gray-500'>{subtitle2}</p>
            <h2 className='text-xs mt-2'>{parse(desc)}</h2>
        </div>
    </div>
  )
}

export default PortfolioCard;
