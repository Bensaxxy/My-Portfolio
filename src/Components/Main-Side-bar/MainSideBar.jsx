/** @format */

// import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations
import sideImage from "/side-bar-img.jpg";

const MainSideBar = () => {
  // Define animation variants for the sidebar
  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 }, // Initially off-screen to the left
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      x: "-10%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-[20%] hidden lg:block ">
      <motion.div
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="h-screen hidden lg:block w-full max-w-[20%] fixed bg-primary dark:bg-secondary"
      >
        {/* Sidebar Content */}
        <img
          className="w-full object-center object-cover h-[200px]"
          src={sideImage}
          alt="homePics"
        />
        <div className="font-semibold flex flex-col justify-center items-center gap-8 text-gray dark:text-black mt-20">
          {/* Navigation Links */}
          {[
            { path: "/", label: "HOME" },
            { path: "/about-me", label: "ABOUT ME" },
            { path: "/resume", label: "RESUME" },
            { path: "/portfolio", label: "PORTFOLIO" },
            { path: "/testimonials", label: "TESTIMONIALS" },
            { path: "/contact", label: "CONTACT" },
          ].map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-secondary dark:text-black"
                  : "text-gray duration-300 hover:text-secondary dark:hover:text-primary"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MainSideBar;
