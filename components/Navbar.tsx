"use client"

import Link from 'next/link'
import {useRef} from 'react'
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
    clipPath: "circle(30px at calc(100% - 1px) 1px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Navbar = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <nav className="bg-white shadow-md w-full">
      {/* Desktop */}
      <div className="container md:w-4/5 mx-auto px-5 md:px-0 py-3 flex justify-between items-center">
        <Link href='/aplikacja'><Image src="/img/logo.png" width={130} height={15} alt="logo" /></Link>
        <div className="hidden md:flex space-x-8 md:space-x-8 lg:space-x-16 font-halyard">
            <Link href='/technologia.html'><p className="text-stone-900 hover:text-gray-500">Audioguide</p></Link>
            <Link href='/aplikacja.html'><p className="text-stone-900 hover:text-gray-500">Przewodnik</p></Link>
            <Link href='/redakcja.html'><p className="text-stone-900 hover:text-gray-500">Oferta</p></Link>
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
