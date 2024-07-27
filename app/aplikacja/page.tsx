import Image from 'next/image'
import React from 'react'

const Aplikacja = () => {
  return (
    <section id='hero' className='border border-red-900 flex justify-center mt-12'>
      <div className='w-3/5'>
        <Image src='/app-grid.png' alt='app-grid' layout='responsive' width={1} height={1} />
        <div className='text-center'>
          <p>Every place an app</p>
          <p>200 wdroeń w całej Polsce</p>
        </div>
      </div>
    </section>
  )
}

export default Aplikacja