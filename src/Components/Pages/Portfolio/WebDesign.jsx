/* eslint-disable react/jsx-key */
/** @format */

// import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import data from "../Portfolio/webDesigns";

const WebDesign = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((project) => (
        <div>
          <div key={project.id} className="relative group">
            {/* Image Container */}
            <div className="overflow-hidden ">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-[200px] object-center object-cover  transition-transform duration-500 ease-in-out group-hover:scale-110 dark:text-white"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 opacity-0 rounded-md bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-center gap-4">
              {/* Icons */}
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray transition duration-300">
                  <TbWorldWww className="text-xl text-black" />
                </button>
              </a>

              {/* GitHub Icon (Conditional) */}
              {project.links.code && (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray transition duration-300">
                    <FaGithub className="text-xl text-black" />
                  </button>
                </a>
              )}
            </div>
          </div>
          {/* Title */}
          <h1 className="text-center mt-4 text-lg font-semibold dark:text-white">
            {project.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default WebDesign;
