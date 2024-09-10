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
    <div className='relative w-full h-[428px] bg-white rounded-lg shadow-custom'>
        <div className='p-5 h-72 rounded-b-lg'>
            <h3 className='text-l font-semibold'>{title}</h3>
            <h4>{subTitle}</h4>
            <p>{lead}</p>
            <p><strong>{feature1}</strong>{feat1Desc}</p>
            <p><strong>{feature2}</strong>{feat2Desc}</p>
            <p><strong>{feature3}</strong>{feat3Desc}</p>
            <p>{summary}</p>
        </div>
        <div className='hidden lg:block md:absolute max-w-40 h-full top-16 right-5'>
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
        <div className='py-10 md:p-1 bg-cover bg-center rounded-t-lg flex justify-center md:justify-start'>
            <img src={`/img/app-icons/${featureIcon}`} className='w-28 md:w-14 h-28 md:h-14' alt='Ikona karty' />
        </div>
        <div className='p-3 rounded-b-lg'>
            <h3 className='text-l font-semibold'>{title}</h3>
            <p>{lead}</p>
        </div>
    </motion.div>
)}
</>
    )
}

export default AudioguideTechCard