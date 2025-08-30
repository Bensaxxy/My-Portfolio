/* eslint-disable react/prop-types */
/** @format */

import { motion } from "framer-motion";

// Motion text component with variants
const MotionText = ({ children, className, variants, ...props }) => {
  return (
    <motion.div className={className} variants={variants} {...props}>
      {children}
    </motion.div>
  );
};

export default MotionText;
