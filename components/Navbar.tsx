import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 py-3 flex justify-between items-center">
        <Image src="/img/logo.png" width={130} height={15} alt="logo" />
        <div className="hidden md:flex space-x-8 md:space-x-8 lg:space-x-16 font-halyard">
            <Link href='/audioguide'><p className="text-stone-900 hover:text-gray-500">Audioguide</p></Link>
            <Link href='/przewodnik'><p className="text-stone-900 hover:text-gray-500">Przewodnik</p></Link>
            <Link href='/oferta'><p className="text-stone-900 hover:text-gray-500">Oferta</p></Link>
            <Link href='/portfolio'><p className="text-stone-900 hover:text-gray-500">Portfolio</p></Link>
            <Link href='/kontakt'><p className="text-stone-900 hover:text-gray-500">Kontakt</p></Link>
        </div>
        <div className="md:hidden items-center">
          <button className="text-stone-900 hover:text-gray-500">
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar