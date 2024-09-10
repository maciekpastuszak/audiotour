"use client"

import { motion } from 'framer-motion'
import React from 'react'

type audioguideTechCard = {
    isBig: boolean,
    title: string,
    subTitle?: string,
    lead: string,
    feature1?: string,
    feat1Desc?: string,
    feature2?: string,
    feat2Desc?: string,
    feature3?: string,
    feat3Desc?: string,
    featureIcon?: string,
    summary?: string,
    deviceImg1?: string,
    setActiveCard?: () => void
}

const AudioguideTechCard = ({ isBig, title, subTitle, lead, feature1, feat1Desc, feature2, feat2Desc, feature3, feat3Desc, featureIcon, summary, deviceImg1, setActiveCard }: audioguideTechCard) => {
    return (
<>
{isBig ? (
    <div className='relative w-full bg-white rounded-lg shadow-custom'>
        <div className='flex flex-col gap-4 p-5 rounded-b-lg '>
            <h3 className='text-3xl font-semibold'>{title}</h3>
            <h4 className='text-xl font-bold'>{subTitle}</h4>
            <p className='w-2/3'>{lead}</p>
            <p className='text-sm'><strong>{feature1}</strong>{feat1Desc}</p>
            <p className='text-sm'><strong>{feature2}</strong>{feat2Desc}</p>
            <p className='text-sm'><strong>{feature3}</strong>{feat3Desc}</p>
            {/* <p className='text-sm'>{summary}</p> */}
        </div>
        <div className='hidden lg:block md:absolute max-w-64 h-full top-1 -right-16'>
            <img src={deviceImg1} alt='Urządzenie' />
        </div>
    </div>
) : (
    <motion.div
    className='relative w-full md:w-[calc(50%-0.4rem)] text-sm bg-white rounded-lg shadow-custom'
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.9 }}
    onMouseEnter={setActiveCard}
    >
        <div className='py-10 md:p-1 bg-cover bg-center rounded-t-lg flex justify-center md:justify-start items-center'>
            <img src={`/img/tech-icons/${featureIcon}`} className='w-28 md:w-14 h-28 md:h-14' alt='Ikona karty' />
            <h3 className='text-l font-semibold text-start lg:px-5'>{title}</h3>
        </div>
        <div className='p-3 rounded-b-lg'>
            <p>{lead}</p>
        </div>
    </motion.div>
)}
</>
    )
}

export default AudioguideTechCard