import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { navLinks } from "@/constants";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants} className="navbarUl">
    {navLinks.map((link, index) => (
      <MenuItem key={link.key} index={index} link={link} />
    ))}
  </motion.ul>
);