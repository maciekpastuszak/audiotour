import Image from 'next/image'
import React from 'react'

const Aplikacja = () => {
  return (
    <section id='hero' className='border border-red-900 flex justify-center mt-12'>
      <div className='w-3/5'>
        <Image src='/app-grid.png' alt='app-grid' layout='responsive' width={1} height={1} />
        <div className='mt-6 text-center text-4xl font-bold font-articulat'>
          <p>Every place an <span className='text-blue-500'>app</span></p>
          <p>200 <span className='text-xl font-normal'>wdrożeń w całej Polsce</span></p>
        </div>
      </div>
    </section>
  )
}

export default Aplikacja