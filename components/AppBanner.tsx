"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../lib/motion'
import HoverButtton from './ui/HoverButtton'

type AppBannerProps = {
    headerIcon: string, 
    lineColor: string,
    headerTitle: string, 
    subtitle1: string,
    subtitle2Color: string
    subtitle2: string,
    bannerBgSrc: string,
    mobileImg: string,
    lead: string,
    ctaText: string,
    text1: string,
    text2: string
}

const AppBanner = ({ headerIcon, lineColor, headerTitle, subtitle1, subtitle2Color, subtitle2, bannerBgSrc, mobileImg, lead, ctaText, text1, text2  }: AppBannerProps) => {
    return (
        <motion.div 
          className='relative items-start w-5/6 max-w-[1066px] my-5 bg-white min-w-[375px] shadow-custom rounded-md'
          variants={fadeIn('right', 'tween', 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
            <div className='flex bg-gray-100'>
                <div className={`w-[8px] ${lineColor}`}></div>
                <Image src={`/img/app-icons/${headerIcon}`} width={72} height={72} alt="Ikona karty" className='mx-4 my-3'/>
                <div className='flex flex-col leading-7 justify-center'>
                    <h3 className='text-xl md:text-text3xl font-bold'>{headerTitle}</h3>
                    <p className='md:text-xl'>{subtitle1} <span className={`${subtitle2Color} font-bold`}>{subtitle2}</span></p>
                </div>
            </div>
    
            <div className="relative w-full md:w-4/5 bg-cover h-64" style={{ backgroundImage: `url('/img/app-banners/${bannerBgSrc}')` }}>
                <div className='w-full md:w-2/3 mx-5 px-2 py-5 md:py-8'>
                    <h2 className='text-xl md:text-3xl text-white font-semibold'>
                        {lead}
                    </h2>
                </div>
                <div className='w-1/2 ms-auto mt-20 md:mt-1 me-7 md:mx-7'>
                    <HoverButtton btnText={ctaText} type='button'/>
                </div>
            </div>
    
            <motion.div 
                className='absolute w-40 md:w-80 lg:w-[400px] h-full top-40 md:top-5 left-5 md:left-auto md:-right-10'
                variants={fadeIn('left', 'tween', 0.4, 0.5)}
                initial="hidden"
                whileInView="show"
                style={{ transform: 'translateZ(0)' }} // Enforce hardware acceleration for smoother animations
                viewport={{ once: true }}
            >
                <img 
                    src={`/img/app-phone-mockups/${mobileImg}`} 
                    alt='Smartphone' 
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
            </motion.div>
    
            <div className='md:w-3/5 m-8 pt-4 text-justify md:text-left'>
                <p className='pb-4'>{text1}</p>
                <p>{text2}</p>
            </div>
        </motion.div>
      )
    }

export default AppBanner