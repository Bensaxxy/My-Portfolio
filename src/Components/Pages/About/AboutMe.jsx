/** @format */

// import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import printDesign from "/print-design.png";
import webDesign from "/web-design.png";

const AboutMe = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="container bg-gray dark:bg-black py-8 flex justify-center  w-full"
    >
      <div>
        {/* About Me Title */}
        <motion.h1
          variants={childVariants}
          className="text-center border px-10 border-zinc-300 tracking-widest font-extrabold text-4xl md:text-5xl lg:text-7xl uppercase dark:text-secondary"
        >
          About Me
        </motion.h1>

        {/* About Me Name and Intro */}
        <motion.div variants={childVariants} className="mt-14">
          <h2 className="text-center md:text-left text-xl lg:text-2xl font-light my-6 dark:text-white">
            I&apos;m{" "}
            <span className="font-bold dark:text-secondary">
              Oluwasegun Benjamin,
            </span>{" "}
            Frontend Developer / Graphic Designer
          </h2>
          <p className="text-sm text-center md:text-left md:text-[15px] leading-7 mb-6 dark:text-white">
            With 5 years of experience in frontend development, I&apos;ve honed
            my skills in crafting responsive, accessible, and high-performance
            web applications using Git, Github, HTML, CSS, JavaScript, and
            popular frameworks like Bootstrap, TailwindCSS, React and NextJs.
            I&apos;m driven by a passion for innovation, creativity, and
            problem-solving.
          </p>
        </motion.div>

        {/* Stats and What I Do */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Stats Section */}
          <motion.div
            variants={statsVariants}
            className="bg-black dark:bg-white p-10 grid gap-8 grid-cols-2 md:grid-cols-2"
          >
            {[
              { number: "5+", label: "YEARS EXPERIENCE" },
              { number: "40+", label: "PROJECTS DONE" },
              { number: "99+", label: "HAPPY CLIENTS" },
              { number: "92+", label: "FOLLOWERS" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="text-gray text-center dark:text-black p-2"
              >
                <h1 className="text-5xl">{stat.number}</h1>
                <p className="text-[8px] tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* What I Do Section */}
          <motion.div variants={containerVariants}>
            <motion.h1
              variants={childVariants}
              className="font-semibold text-xl mb-4 tracking-wider dark:text-secondary"
            >
              What I Do?
            </motion.h1>

            {/* What I Do Items */}
            <div className=" mb-10 md:mb-0 dark:text-white">
              {[
                {
                  image: printDesign,
                  title: "Print Design",
                  description:
                    "Creating visually stunning and effective designs for Developing brand identities, logos, and typography systems.",
                },
                {
                  image: webDesign,
                  title: "Web Design",
                  description:
                    "Building custom UI components and reusable code libraries, Developing responsive and mobile designs, Implementing accessibility features and best practices, Collaborating with backend teams to integrate APIs and services.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={childVariants}
                  className="flex gap-6 mt-8"
                >
                  <img
                    className="w-full max-w-16 max-h-16"
                    src={item.image}
                    alt={item.title}
                  />
                  <div>
                    <h1 className="font-semibold">{item.title}</h1>
                    <p className="text-sm md:text-[15px]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
