import Image from 'next/image'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='relative w-72 h-auto bg-white shadow-xl rounded-lg my-5 py-5 ps-10 pe-6 leading-loose'>
        <h3 className='text-sm font-bold'>Kamil Ochel</h3>
        <Image src='/img/man_smiling.jpg' width={45} height={45} alt='Profile img' className='absolute top-4 -left-4 rounded-full shadow-lg'/>
        <p className='text-[0.6rem] text-muted-foreground'>Wrocław pamięta - App Store</p>
        <h5 className='text-xs'>Piękna aplikacja z bardzo ładnymi kolorami. Super ułatwieniedla osoób niepełnosprawnych!</h5>
        <div className="flex items-center gap-2 mt-1">
          <Image src="/img/star.png" width={16} height={16} alt="rating" />
          <p className="text-sm font-bold text-amber-400">5</p>
        </div>
    </div>
  )
}

export default ReviewCard