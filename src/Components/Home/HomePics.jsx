/** @format */

import { motion } from "framer-motion";
import homeImage from "/ben.jpg";

const HomePics = () => {
  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" }, // Smooth animation
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={imageVariants}
      className="hidden md:block w-full h-screen"
    >
      <motion.img
        src={homeImage}
        alt="homePics"
        className="w-full object-cover h-screen"
        variants={imageVariants}
      />
    </motion.div>
  );
};

export default HomePics;
