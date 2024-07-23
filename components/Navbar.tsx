import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-4/5 mx-auto justify-center items-center border border-neutral-900">
        <ul className="flex flex-row justify-between items-center text-white">
            <li><Link href='/audioguide' /> Audioguide</li>
            <li><Link href='/przewodnik' /> Przewodnik turystyczny</li>
            <li><Link href='/oferta' /> Oferta</li>
            <li><Link href='/portfolio' /> Portfolio</li>
            <li><Link href='/kontakt' />Kontakt</li>
        </ul>
    </div>
  )
}

export default Navbar