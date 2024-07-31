import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const ApplicationCard = () => {
  return (
    <div className='items-start w-5/6 my-5 bg-white min-w-[375px]'>
        <div className='flex ms-5 my-3'>
            <Image src="/img/app-icons/Icon Audioprzewodniki.svg" width={55} height={55}alt="Ikona - Audioprzewodniki" />
            <div className='font-articulat leading-3'>
                <h3 className='text-lg font-bold'>Audioprzewodniki</h3>
                <p className='text-sm md:text-noraml'>Prosta obsługa, <span className='text-blue-500'>szybka realizacja</span></p>
            </div>
        </div>
        <div className={`relative bg-[url('/img/app-banners/Banner_Audioprzewodniki_Wide.png')] bg-cover h-80`}>
            <h2 className='text-xl md:text-3xl text-white font-semibold mx-5 px-2 py-5 md:py-8 text-nowrap'>Idealne rozwiązanie dla <br />muzeów oraz w przestrzeni <br /> miejskiej</h2>
            <Button className='absolute bg-white rounded-full text-black right-10 md:left-0 md:w-[320px] bottom-10 md:bottom-24 px-10 md:mx-7'>Więcej</Button>
            <div className='absolute max-w-48 md:max-w-80 lg:max-w-96 h-full top-28 md:-top-16 left-5 md:left-auto md:-right-10'>
                <img src='/img/app-phone-mockups/Banner Audioprzewodniki Tel.png' alt='Smartphone - Audioprzewodniki' />
            </div>
        </div>
        <div className='md:w-3/5 m-8 pt-4 text-justify md:text-left'>
            <p className='pb-4'>Audioprzewodnik to audioprzewodnik, który oprowadzi Pańśtwa w multimedialny sposób po multimedialnym mieście Kraków.</p>
            <p>Doskonały do multimedialnego zwiedzania audioprzewodnika w formie audioprzewodnika za pomocą aplikacji multimedialnej. Nie czekaj ani chwili dłużej, zamów audioprzewodnik w formie audioprzewonika już dziś!</p>
        </div>
    </div>
  )
}

export default ApplicationCard