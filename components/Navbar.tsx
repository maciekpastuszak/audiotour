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
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <nav className="bg-white shadow-md w-full py-7 font-articulat">
      {/* Desktop */}
      <div className="container md:w-4/5 mx-auto px-5 md:px-0 flex justify-between items-center">
        <Link href='/aplikacja'><Image src="/img/logo.png" width={130} height={15} alt="logo" /></Link>
        <div className="hidden md:flex space-x-8 md:space-x-13 font-bold">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpenAplikacja(true)}
            onMouseLeave={() => setDropdownOpenAplikacja(false)}
          >
            <p className="text-stone-900 hover:text-gray-500 cursor-pointer">Aplikacja</p>
            <motion.div
              className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
              initial="closed"
              animate={dropdownOpenAplikacja ? 'open' : 'closed'}
              variants={dropdownVariants}
            >
              <Link href="#audioprzewodniki">
                <p className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                  Aplikacja Audioguide
                </p>
              </Link>
              <Link href="#aplikacjaTurystyczna">
                <p className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                  Aplikacja Turystyczna
                </p>
              </Link>
            </motion.div>
          </div>
            <Link href='/technologia.html'><p className="text-stone-900 hover:text-gray-500">Audioprzewodniki</p></Link>
            {/* <Link href='/redakcja.html'><p className="text-stone-900 hover:text-gray-500">Oferta</p></Link> */}
            <div
            className="relative"
            onMouseEnter={() => setDropdownOpenOferta(true)}
            onMouseLeave={() => setDropdownOpenOferta(false)}
          >
            <p className="text-stone-900 hover:text-gray-500 cursor-pointer">Oferta</p>
            <motion.div
              className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
              initial="closed"
              animate={dropdownOpenOferta ? 'open' : 'closed'}
              variants={dropdownVariants}
            >
              <Link href="/aplikacja">
                <p className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                  Aplikacja
                </p>
              </Link>
              <Link href="/technologia.html">
                <p className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                  Audioprzewodniki
                </p>
              </Link>
              <Link href="/tlumaczenia.html">
                <p className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                  Tłumaczenia
                </p>
              </Link>
              <Link href="/nagrania.html">
                <p className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                  Nagrania
                </p>
              </Link>
              <Link href="/redakcja.html">
                <p className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                  Usługi redakcyjne
                </p>
              </Link>
              <Link href="/bankglosow.html">
                <p className="block px-4 py-2 text-stone-900 hover:text-gray-500 hover:bg-gray-100 text-sm">
                  Bank głosów
                </p>
              </Link>
            </motion.div>
          </div>
            <Link href='/realizacje'><p className="text-stone-900 hover:text-gray-500">Portfolio</p></Link>
            <Link href='/kontakt'><p className="text-stone-900 hover:text-gray-500">Kontakt</p></Link>
        </div>

        {/* Mobile */}

        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div className="absolute top-0 right-0 bottom-0 w-3/4 md:w-1/2 max-w-[450px] h-full bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 z-40 shadow-md" variants={sidebar}>
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
