/** @format */

import React from "react";
import { motion } from "framer-motion";

// Motion button component with hover effect
const MotionButton = ({ children, variants, ...props }) => {
  return (
    <motion.button
      className="hover:text-secondary duration-300 hover:bg-primary/95 bg-primary text-gray rounded-full px-4 py-2"
      variants={variants}
      whileHover="hover"
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default MotionButton;
