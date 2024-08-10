import * as React from "react";
import { motion } from "framer-motion";


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ index, link }: any) => {

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className=''
    >
      <a href={link.href}>
        <div className="text-l">{link.text}</div>
      </a>
    </motion.li>
  );
};
