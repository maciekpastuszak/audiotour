import Image from 'next/image'
import React from 'react'

type AudioguideSpecProps ={
    imgSrc: string,
    size: string,
    screen: string,
    weight: string,
    battery: string,
}

const AudioguideSpec = ({ imgSrc, size, screen, weight, battery }: AudioguideSpecProps) => {
  return (
    <div className='flex flex-row gap-6 bg-white px-12 rounded-lg shadow-custom'>
        <div className='max-w-80 py-5'>
            <Image src={imgSrc} width={1} height={1} layout="responsive" alt="Device image" />
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