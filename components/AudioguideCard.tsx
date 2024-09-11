"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
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

const AudioguideCard = ({ isBig, title, subTitle, lead, feature1, feat1Desc, feature2, feat2Desc, feature3, feat3Desc, featureIcon, summary, deviceImg1, setActiveCard }: audioguideTechCard) => {
    return (
<>
{isBig ? (
    <div className='relative w-full rounded-lg shadow-custom p-2 bg-gradient-to-r from-neutral-200 to-white'>
        <div className='flex flex-col gap-4 p-5 rounded-b-lg '>
            <h3 className='text-3xl font-semibold'>{title}</h3>
            <h4 className='text-xl font-bold w-2/3'>{subTitle}</h4>
            <p className='w-2/3'>{lead}</p>
            <p className='text-sm w-2/3'><strong>{feature1}</strong>{feat1Desc}</p>
            <p className='text-sm'><strong>{feature2}</strong>{feat2Desc}</p>
            <p className='text-sm'><strong>{feature3}</strong>{feat3Desc}</p>
            {/* <p className='text-sm'>{summary}</p> */}
        </div>
        <div className='hidden lg:block md:absolute max-w-64 h-full top-5 -right-12'>
            {deviceImg1 && (
                <Image src={deviceImg1} width={256} height={267} alt='Urządzenie' />
            )}
        </div>
    </div>
) : (
    <motion.div
    className='relative w-full md:w-[calc(50%-0.4rem)] text-sm bg-white rounded-lg shadow-custom'
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.9 }}
    onMouseEnter={setActiveCard}
    >
        <div className='py-10 md:p-1 bg-cover bg-center rounded-t-lg flex justify-center md:justify-start items-center bg-gradient-to-r from-neutral-300 to-stone-400'>
            <Image src={`/img/tech-icons/${featureIcon}`} width={48} height={48} className='w-28 md:w-14 h-28 md:h-14 bg-white p-2 m-1 rounded-2xl' alt='Ikona karty' />
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

export default AudioguideCard