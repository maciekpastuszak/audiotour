import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const ApplicationCard = () => {
  return (
    <div className='relative items-start w-4/5 my-5 border border-violet-700'>
        <div className='flex ms-5 my-5'>
            <Image src="/img/app-icons/Icon Audioprzewodniki.svg" width={50} height={50 }alt="Ikona - Audioprzewodniki" />
            <div className='font-articulat leading-3'>
                <h3 className='text-lg font-bold font-articulat'>Audioprzewodniki</h3>
                <p>Prosta obsługa, <span className='text-blue-500'>szybka realizacja</span></p>
            </div>
        </div>
        <div className='bg-application-banner bg-cover'>
            <h2 className='text-3xl text-white font-semibold mx-5 px-2 py-16'>Idealne rozwiązanie dla <br />muzeów oraz w przestrzeni <br /> miejskiej</h2>
            <Button className='bg-white rounded-full text-black px-40 mx-7 mb-20'>Więcej</Button>
        </div>
        <div className='absolute max-w-96 h-full top-2 -right-28 border border-rose-700'>
            <img src='/img/app-phone-mockups/Banner Audioprzewodniki Tel.png' alt='Smartphone - Audioprzewodniki' />
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default ApplicationCard