import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="bg-white shadow-md w-full">
      <div className="container mx-auto px-24 py-3 flex justify-between items-center">
        <Image src="/img/logo.png" width={217} height={25} alt="logo" />
        <div className="hidden md:flex space-x-8 md:space-x-16 font-halyard">
            <Link href='/audioguide'><p className="text-stone-900 hover:text-gray-500">Audioguide</p></Link>
            <Link href='/przewodnik'><p className="text-stone-900 hover:text-gray-500">Przewodnik</p></Link>
            <Link href='/oferta'><p className="text-stone-900 hover:text-gray-500">Oferta</p></Link>
            <Link href='/portfolio'><p className="text-stone-900 hover:text-gray-500">Portfolio</p></Link>
            <Link href='/kontakt'><p className="text-stone-900 hover:text-gray-500">Kontakt</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar