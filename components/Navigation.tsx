import * as React from "react";
import { Variants, motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { navLinks } from "@/constants";

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

export const Navigation = () => (
  <motion.ul variants={variants} className="navbarUl relative z-50">
    {navLinks.map((link, index) => (
      <MenuItem key={link.key} index={index} link={link} />
    ))}
  </motion.ul>
);