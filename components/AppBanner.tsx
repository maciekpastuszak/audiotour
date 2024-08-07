"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

type AppBannerProps = {
    headerIcon: string, 
    headerTitle: string, 
    subtitle1: string,
    subtitle2Color: string
     subtitle2: string,
     bannerBgSrc: string,
     mobileImg: string,
     text1: string,
     text2: string
}

const AppBanner = ({ headerIcon, headerTitle, subtitle1, subtitle2Color, subtitle2, bannerBgSrc, mobileImg, text1, text2  }: AppBannerProps) => {
  return (
    <motion.div 
    className='items-start w-5/6 my-5 bg-white min-w-[375px] drop-shadow-md'
    variants={fadeIn('right', 'tween', 0.2, 0.7)}
    initial="hidden"
    whileInView="show">
        <div className='flex ms-5 my-3'>
            <Image src={`/img/app-icons/${headerIcon}`} width={55} height={55} alt="Ikona - Audioprzewodniki" />
            <div className='font-articulat leading-3'>
                <h3 className='text-lg font-bold'>{headerTitle}</h3>
                <p className='text-sm md:text-noraml'>{subtitle1} <span className={subtitle2Color}>{subtitle2}</span></p>
            </div>
        </div>
        <div className={`relative w-full md:w-4/5 bg-[url('/img/app-banners/${bannerBgSrc}')] bg-cover h-64`}>
            <div className='w-full md:w-2/3 mx-5 px-2 py-5 md:py-8'>
                <h2 className='text-xl md:text-3xl text-white font-semibold'>Idealne rozwiązanie dla muzeów oraz w przestrzeni miejskiej</h2>
            </div>
            <Button className='absolute bg-white rounded-full text-black right-10 md:left-0 md:w-[320px] bottom-10 md:bottom-12 px-10 md:mx-7'>Więcej</Button>
        </div>
            <motion.div 
                className='absolute w-48 md:w-80 lg:w-[400px] h-full top-48 md:top-5 left-5 md:left-auto md:-right-10'
                variants={fadeIn('left', 'tween', 0.4, 0.7)}
                initial="hidden"
                whileInView="show"
            >
                <img src={`/img/app-phone-mockups/${mobileImg}`} alt='Smartphone - Audioprzewodniki' />
            </motion.div>
        <div className='md:w-3/5 m-8 pt-4 text-justify md:text-left'>
            <p className='pb-4'>{text1}</p>
            <p>{text2}</p>
        </div>
    </motion.div>
  )
}

export default AppBanner