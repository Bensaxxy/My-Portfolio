/** @format */

import React from "react";
import { motion } from "framer-motion";

// Motion image component
const MotionImage = ({ src, alt, className, initial, animate, transition }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    />
  );
};

export default MotionImage;
