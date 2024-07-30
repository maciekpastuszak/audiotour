import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const ApplicationCard = () => {
  return (
    <div className='items-start w-5/6 my-5 bg-white min-w-[375px]'>
        <div className='flex ms-5 my-5'>
            <Image src="/img/app-icons/Icon Audioprzewodniki.svg" width={55} height={55}alt="Ikona - Audioprzewodniki" />
            <div className='font-articulat leading-3'>
                <h3 className='text-lg font-bold font-articulat'>Audioprzewodniki</h3>
                <p className='text-sm md:text-noraml'>Prosta obsługa, <span className='text-blue-500'>szybka realizacja</span></p>
            </div>
        </div>
        <div className='relative bg-application-banner bg-cover h-96'>
            <h2 className='text-xl md:text-3xl text-white font-semibold mx-5 px-2 py-5 md:py-8 text-nowrap'>Idealne rozwiązanie dla <br />muzeów oraz w przestrzeni <br /> miejskiej</h2>
            <Button className='absolute bg-white rounded-full text-black right-10 bottom-10 px-10 md:px-40 md:mx-7'>Więcej</Button>
            <div className='absolute max-w-60 md:max-w-96 h-full top-28 left-5 md:top-2 md:-right-20'>
                <img src='/img/app-phone-mockups/Banner Audioprzewodniki Tel.png' alt='Smartphone - Audioprzewodniki' />
            </div>
        </div>
        <div className='md:w-3/5 m-8 pt-4 text-justify'>
            <p className='pb-4'>Audioprzewodnik to audioprzewodnik, który oprowadzi Pańśtwa w multimedialny sposób po multimedialnym mieście Kraków.</p>
            <p>Doskonały do multimedialnego zwiedzania audioprzewodnika w formie audioprzewodnika za pomocą aplikacji multimedialnej. Nie czekaj ani chwili dłużej, zamów audioprzewodnik w formie audioprzewonika już dziś!</p>
        </div>
    </div>
  )
}

export default ApplicationCard