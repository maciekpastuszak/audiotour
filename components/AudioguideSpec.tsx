import Image from 'next/image'
import React from 'react'

type AudioguideSpecProps ={
    imgSrc: string,
    size: string,
    screen: string,
    weight: string,
}

const AudioguideSpec = ({ imgSrc, size, screen, weight }: AudioguideSpecProps) => {
  return (
    <div className='flex flex-row gap-6 bg-white p-12 rounded-lg shadow-custom'>
        <div className='w-80'>
            <Image src={imgSrc} width={384} height={378} alt="Device image" />
        </div>
        <div className='flex flex-col justify-center gap-5 ps-5'>
            <div className='flex'>
                <Image src='/img/tech-icons/size.png' width={48} height={48} alt='Ikona wymarów' />
                <div>
                <p>Wymiary</p>
                <p>{size}</p>
                </div>
            </div>
            <div className='flex'>
                <Image src='/img/tech-icons/picture.png' width={48} height={48} alt='Ikona ekranu' />
                <div>
                    <p>Wyświetlacz</p>
                    <p>{screen}</p>
                </div>
            </div>
            <div className='flex'>
                <Image src='/img/tech-icons/weight.png' width={48} height={48} alt='Ikona wagi' />
                <div>
                <p>Waga</p>
                <p>{weight}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AudioguideSpec