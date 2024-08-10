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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const Navigation = () => (

  <motion.div variants={variants} className="absolute top-10 right-10 m-0 p-0 z-50">
    {navLinks.map((section, sectionIndex) => (
      <div key={sectionIndex}>
        <div className="flex">
          <Image src='' width={40} height={40} alt='Menu icon' />
          <h2 className="text-2xl font-bold ps-3">{section.section}</h2>
        </div>
        
        <motion.ul>
          {section.links.map((link, index) => (
            <MenuItem key={index} link={link} />
          ))}
        </motion.ul>
      </div>
    ))}
  </motion.div>
);