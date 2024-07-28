import Image from 'next/image'
import React from 'react'

type carouselProps = {
  iconId: string,
  alt: string
}

const CarouselIcon = ({iconId, alt}: carouselProps) => {
  return (
    <div className=" duration-700 ease-in-out" data-carousel-item>
        <Image src={`/img/carousel-icons/app-carousel-icon-${iconId}`}width={50} height={50} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={alt} />
    </div>
  )
}

export default CarouselIcon