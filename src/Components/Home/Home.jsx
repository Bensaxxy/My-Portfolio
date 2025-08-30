/** @format */

import { useState, useEffect } from "react";
import HomePics from "./HomePics";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import MotionText from "../Motions/MotionText";
import MotionButton from "../Motions/MotionButton";
import SocialLinks from "./SocialLinks";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Start the exit animation
    navigate("/about-me", { state: { fromHome: true } });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
    },
  };

  // const buttonVariants = {
  //   hover: { scale: 1.8, transition: { yoyo: Infinity, duration: 0.3 } },
  // };

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Set to desktop size (md and above)
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className={`relative dark:bg-black h-screen w-full grid gap-6 ${
        isDesktop ? "md:grid-cols-2" : "grid-cols-1 container"
      }`}
    >
      {/* left section with content */}
      <div className="w-full px-4 md:px-6 flex h-screen justify-center items-start flex-col gap-4">
        <MotionText
          variants={textVariants}
          className="uppercase text-black dark:text-gray font-bold text-[18px] md:text-2xl"
        >
          hi there! 👋🏾
        </MotionText>
        <h1 className="font-extrabold dark:text-gray text-5xl md:text-7xl uppercase">
          i&apos;m{" "}
          <span className="text-primary dark:text-secondary font-bold text-6xl">
            Benjamin
          </span>
        </h1>
        <div className="bg-primary dark:bg-secondary py-2 px-4">
          <h3 className="text-gray dark:text-black font-semibold">
            Frontend Developer / Graphic Designer
          </h3>
        </div>
        <p className="text-sm md:text-sm lg:text-base font-medium py-4 dark:text-white">
          As a versatile and creative professional, I wear two hats: Frontend
          Developer and Graphic Designer. With a passion for building engaging
          and user-friendly digital experiences, I bring a unique combination of
          technical and design skills to the table.
        </p>

        {/* About me button */}
        <MotionButton
          variants={containerVariants}
          onClick={handleNavigate}
          className="hover:text-secondary duration-300 dark:hover:bg-white hover:bg-primary/95 bg-primary dark:bg-secondary text-gray rounded-full px-4 py-2"
        >
          <Link
            to="/about-me"
            className="block w-full h-full text-inherit dark:text-black"
          >
            More About Me
          </Link>
        </MotionButton>
        <div className="flex justify-end items-end mb-4">
          <SocialLinks />
        </div>
      </div>

      {/* right section with image */}
      <div className="w-full flex justify-center items-center">
        <HomePics />
      </div>
    </motion.div>
  );
};

export default Home;
