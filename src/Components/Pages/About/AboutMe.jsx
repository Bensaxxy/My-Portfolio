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

  const stats = [
    {
      number: "4+",
      title: "Years Experience",
    },
    {
      number: "50+",
      title: "Projects Completed",
    },
    {
      number: "10+",
      title: "Technologies",
    },
    {
      number: "100%",
      title: "Commitment",
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "Framer Motion",
    "REST APIs",
    "Vite",
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="w-full bg-gray-50 dark:bg-black py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div variants={childVariants} className="text-center">
          <p className="uppercase tracking-[6px] text-secondary font-semibold">
            About Me
          </p>

          <h1 className="text-4xl md:text-6xl font-black mt-4 dark:text-white">
            Hi, I'm <span className="text-secondary">Oluwasegun Benjamin</span>
          </h1>

          <h3 className="mt-5 text-xl text-zinc-600 dark:text-zinc-300">
            Frontend Developer • React Developer • UI Engineer
          </h3>
        </motion.div>

        {/* About */}
        <motion.div
          variants={childVariants}
          className="max-w-4xl mx-auto mt-12 space-y-6 text-center"
        >
          <p className="text-lg leading-9 text-zinc-600 dark:text-zinc-400">
            I'm a passionate Frontend Developer with over four years of
            experience building modern, responsive and high-performance web
            applications.
          </p>

          <p className="text-lg leading-9 text-zinc-600 dark:text-zinc-400">
            I specialize in React, Next.js, TypeScript, JavaScript, Tailwind CSS
            and modern frontend technologies, focusing on clean architecture,
            scalability and excellent user experiences.
          </p>

          <p className="text-lg leading-9 text-zinc-600 dark:text-zinc-400">
            I enjoy solving problems, learning new technologies and transforming
            ideas into beautiful digital products.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={statsVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg p-8 text-center"
            >
              <h2 className="text-5xl font-black text-secondary">
                {item.number}
              </h2>

              <p className="uppercase tracking-widest text-sm mt-4 text-zinc-500">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies */}
        <motion.div variants={childVariants} className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center dark:text-white">
            Technologies I Work With
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {technologies.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.08 }}
                className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-md font-medium dark:text-white"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
