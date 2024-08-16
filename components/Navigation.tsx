import * as React from "react";
import { Variants, motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { navLinks } from "@/constants";
import Image from "next/image";

type NavigationProps = {
  index: number
}

const variants: Variants = {
  open: {
    opacity: 1, // Make items fully visible
    pointerEvents: "auto", // Allow interaction
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0, // Fade out items
    pointerEvents: "none", // Disable interaction
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const colors = [
  "bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent", 
  "bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent", 
  "bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent", 
  "text-black", 
  "text-black",
  "text-black",
];

export const Navigation = () => (

  <motion.div variants={variants} className="absolute top-10 left-12 m-0 p-0 z-50">
    {navLinks.map((section, sectionIndex) => (
      <div key={sectionIndex}>
        <div className="flex items-center">
          {/* <Image src={`/img/app-icons/${section.icon}`} width={40} height={40} alt='Menu icon' className="rounded-full h-10 w-10 p-2 bg-gradient-to-r from-cyan-500 to-blue-500"/> */}
          <h2 className={`
            text-2xl 
            font-bold 
            ps-2 
            ${colors[sectionIndex % colors.length]}
            `}>{section.section}</h2>
        </div>
        
        <motion.ul className="ms-2 border-l border-gray-400">
          {section.links.map((link, index) => (
            <div key={link.href}>
              <MenuItem key={index} link={link} />
            </div>
          ))}
        </motion.ul>
      </div>
    ))}
  </motion.div>
);