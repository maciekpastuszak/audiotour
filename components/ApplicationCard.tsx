import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const ApplicationCard = () => {
  return (
    <div className='items-start w-4/5 my-5 border border-violet-700'>
        <div className='flex ms-5 my-5'>
            <Image src="/img/app-icons/Icon Audioprzewodniki.svg" width={50} height={50 }alt="Ikona - Audioprzewodniki" />
            <div className='font-articulat leading-3'>
                <h3 className='text-lg font-bold font-articulat'>Audioprzewodniki</h3>
                <p>Prosta obsługa, <span className='text-blue-500'>szybka realizacja</span></p>
            </div>
        </div>
        <div className='relative bg-application-banner bg-cover'>
            <h2 className='text-3xl text-white font-semibold mx-5 px-2 py-16'>Idealne rozwiązanie dla <br />muzeów oraz w przestrzeni <br /> miejskiej</h2>
            <Button className='bg-white rounded-full text-black px-40 mx-7 mb-20'>Więcej</Button>
            <div>
                <Image src='/img/app-phone-mockups/Banner Audioprzewodniki Tel.png' layout='responsive' width={1} height={1} />
            </div>
        </div>
        <div>
            {/* text */}
        </div>
    </div>
  )
}

export default ApplicationCard