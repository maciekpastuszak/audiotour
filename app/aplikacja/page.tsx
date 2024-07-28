import Carousel from '@/components/Carousel'
import Navbar from '@/components/Navbar'
import { appCarouselIcons } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Aplikacja = () => {
  return (
      <section id='hero' className='border border-red-900 flex flex-col justify-center items-center mt-12'>
        <div className='md:w-3/4'>
          <Image src='/app-grid.png' alt='app-grid' layout='responsive' width={1} height={1} />
          <div className='mt-6 text-center text-3xl md:text-4xl font-bold font-articulat'>
            <p>Every place an <span className='text-blue-500'>app</span></p>
            <p>200 <span className='text-xl font-normal'>wdrożeń w całej Polsce</span></p>
          </div>
        </div>

        <Carousel />
      </section>
  )
}

export default Aplikacja