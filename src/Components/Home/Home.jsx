/** @format */

import React, { useState, useEffect } from "react";
import HomePics from "./HomePics";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import MotionText from "../Motions/MotionText"; // Import MotionText
import MotionButton from "../Motions/MotionButton"; // Import MotionButton
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

  const buttonVariants = {
    hover: { scale: 1.8, transition: { yoyo: Infinity, duration: 0.3 } },
  };

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
      className={`relative h-screen w-screen grid gap-6 container-none ${
        isDesktop ? "md:grid-cols-2" : "container"
      }`}
    >
      {/* left section that carried the content */}
      <div className=" w-full px-4 md:px-6 flex h-screen justify-center items-start flex-col gap-2">
        <MotionText
          variants={textVariants}
          className=" uppercase text-black font-bold text-xl md:text-2xl"
        >
          hi there! 👋🏾
        </MotionText>
        <h1 className=" font-extrabold text-6xl md:text-7xl uppercase">
          i'm <span className="text-primary font-bold text-7xl">Benjamin</span>
        </h1>
        <div className=" bg-primary py-2 px-4">
          <h3 className="  text-gray font-semibold">
            Frontend Developer / Graphic Designer
          </h3>
        </div>
        <p className=" text-sm md:text-sm lg:text-base font-medium py-4">
          As a versatile and creative professional, I wear two hats: Frontend
          Developer and Graphic Designer. With a passion for building engaging
          and user-friendly digital experiences, I bring a unique combination of
          technical and design skills to the table.
        </p>

        {/* about me more btn */}
        <MotionButton
          variants={containerVariants}
          onClick={handleNavigate}
          className=" hover:text-secondary duration-300 hover:bg-primary/95 bg-primary text-gray rounded-full px-4 py-2"
        >
          <Link to="/about-me" className="block w-full h-full text-inherit">
            More About Me
          </Link>
        </MotionButton>
        <div className=" flex justify-end items-end mb-4">
          <SocialLinks />
        </div>
      </div>

      {/* right section that carried the image */}
      <div>
        <HomePics />
      </div>
    </motion.div>
  );
};

export default Home;
