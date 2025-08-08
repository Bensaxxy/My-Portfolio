/** @format */
import { useState } from "react";
import { motion } from "framer-motion";
import WebDesign from "./WebDesign.jsx";
import GraphicDesign from "./GraphicDesign";

const Portfolio = () => {
  const [activeLink, setActiveLink] = useState("Web design");

  // Map active links to components
  const components = {
    "Web design": <WebDesign />,
    "Graphic Design": <GraphicDesign />,
  };

  // Handle link click
  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div>
        <div className="container pb-20 md:pb-0 bg-gray dark:bg-black py-8 flex flex-col gap-8 w-full">
          <div>
            {/* Resume */}
            <h1 className=" text-center border px-10 border-zinc-300 tracking-widest font-extrabold text-4xl md:text-5xl lg:text-7xl uppercase dark:text-secondary">
              portfolio
            </h1>
          </div>

          <div className="flex flex-col items-center">
            {/* Navigation Links */}
            <div className="flex gap-6 justify-center font-semibold text-xl">
              {["Web design", "Graphic Design"].map((link) => (
                <button
                  key={link}
                  onClick={() => handleClick(link)}
                  className={`relative ${
                    activeLink === link
                      ? "text-primary dark:text-white"
                      : "text-secondary"
                  } hover:text-secondary dark:hover:text-gray transition duration-300`}
                >
                  {link}
                  {/* Animated underline for the active link */}
                  {activeLink === link && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 h-[2px] w-full bg-secondary"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Component Rendering Section */}
            <motion.div
              key={activeLink}
              className="mt-8 p-6 w-full border border-black/10 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {components[activeLink]} {/* Render the active component */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
