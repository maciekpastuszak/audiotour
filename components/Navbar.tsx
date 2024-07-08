import React from 'react'

const Navbar = () => {
  return (
    <div className="w-4/5 mx-auto justify-center items-center border border-neutral-900">
        <ul className="flex flex-row justify-between items-center">
            <li>Audioguide</li>
            <li>Przewodnik turystyczny</li>
            <li>Oferta</li>
            <li>Portfolio</li>
            <li>Kontakt</li>
        </ul>
    </div>
  )
}

export default Navbar