import Image from 'next/image'
import React from 'react'

const Aplikacja = () => {
  return (
    <section id='hero' className='w-full mt-10 flex justify-center items-center'>

      <Image src='/app-grid.png' alt='app-grid' width={460} height={924} />

    </section>
  )
}

export default Aplikacja