"use client"

import Link from 'next/link'
import {useRef, useState} from 'react'
import Image from 'next/image'
import { useDimensions } from './use-dimensions';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 1px) 1px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(1px at calc(100% - 1px) 1px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const dropdownVariants = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Navbar = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const [dropdownOpenAplikacja, setDropdownOpenAplikacja] = useState(false);
  const [dropdownOpenOferta, setDropdownOpenOferta] = useState(false);
  const [dropdownOpenTechnologia, setDropdownOpenTechnologia] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <nav className="bg-white shadow-custom w-full py-7">
      {/* Desktop */}
      <div className="container md:w-4/5 mx-auto px-5 md:px-0 flex justify-between items-center">
        <Link href='/aplikacja'><Image src="/img/logo.png" width={130} height={15} alt="logo" /></Link>
        <div className="hidden lg:flex space-x-8 md:space-x-13 font-bold z-40">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpenAplikacja(true)}
            onMouseLeave={() => setDropdownOpenAplikacja(false)}
          >
            <Link href='/aplikacja' className="text-stone-900 hover:text-gray-500 cursor-pointer">
              Aplikacja
            </Link>
            <motion.div
              className="absolute left-0 mt-2 w-48 bg-white shadow-custom rounded-md overflow-hidden"
              initial="closed"
              animate={dropdownOpenAplikacja ? 'open' : 'closed'}
              variants={dropdownVariants}
            >
              <Link href="/aplikacja#audioprzewodniki" className='block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm'>
                Aplikacja Audioguide
              </Link>
              <Link href="/aplikacja#aplikacjaTurystyczna" className='block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm'> 
                Aplikacja Turystyczna
              </Link>
            </motion.div>
          </div>
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpenTechnologia(true)}
            onMouseLeave={() => setDropdownOpenTechnologia(false)}
          >
            <Link href='/technologia.html' className="text-stone-900 hover:text-gray-500">
              Audioprzewodniki
            </Link>
            <motion.div
              className="absolute left-0 mt-2 w-48 bg-white shadow-custom rounded-md overflow-hidden"
              initial="closed"
              animate={dropdownOpenTechnologia ? 'open' : 'closed'}
              variants={dropdownVariants}
            >
              <Link href="/technologia.html#hengda" className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                Audioprzewodnik G7
              </Link>
              <Link href="/technologia.html#mgpro" className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                Audioprzewodnik AG-600
              </Link>
              <Link href="/technologia.html#mgkeypad" className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                Audioprzewodnik AG-600c
              </Link>
              <Link href="/technologia.html#technology-02" className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                Synchronizator ATV-6
              </Link>
            </motion.div>
          </div>
            {/* <Link href='/technologia.html'><p className="text-stone-900 hover:text-gray-500">Audioprzewodniki</p></Link> */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpenOferta(true)}
            onMouseLeave={() => setDropdownOpenOferta(false)}
          >
            <p className="text-stone-900 hover:text-gray-500 cursor-pointer">Oferta</p>
            <motion.div
              className="absolute left-0 mt-2 w-48 bg-white shadow-custom rounded-md overflow-hidden"
              initial="closed"
              animate={dropdownOpenOferta ? 'open' : 'closed'}
              variants={dropdownVariants}
            >
              <Link href="/aplikacja" className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                  Aplikacja
              </Link>
              <Link href="/technologia.html" className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                  Audioprzewodniki
              </Link>
              <Link href="/tlumaczenia.html" className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                  Tłumaczenia
              </Link>
              <Link href="/nagrania.html" className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                  Nagrania
              </Link>
              <Link href="/redakcja.html" className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                  Usługi redakcyjne
              </Link>
            </motion.div>
          </div>
            <Link href='/realizacje' className="text-stone-900 hover:text-gray-500">
              Portfolio
            </Link>
            <Link href="/bankglosow.html" className="text-stone-900 hover:text-gray-500">
              Bank głosów
            </Link>
            <Link href='/kontakt' className="text-stone-900 hover:text-gray-500">
              Kontakt
            </Link>
        </div>

        {/* Mobile */}

        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div className="absolute top-0 right-0 bottom-0 w-3/4 md:w-1/2 max-w-[450px] h-full bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 z-50 shadow-md" variants={sidebar}>
            <div className='relative'>
              <Navigation />
            </div>
          </motion.div>
          <MenuToggle toggle={() => toggleOpen()} />

        </motion.div>

      </div>
    </nav>
  )
}

export default Navbar
