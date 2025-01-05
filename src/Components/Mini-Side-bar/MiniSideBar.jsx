/** @format */

import React from "react";
import { FaHome } from "react-icons/fa";
import { MdPerson, MdWork } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { HiSpeakerphone } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const MiniSideBar = () => {
  return (
    <div>
      <div className=" grid-cols-6 md:grid-cols-1 bg-primary/90 md:bg-primary px-2 py-4 rounded-full text-gray grid gap-8">
        {/* Active styling using NavLink */}
        {/* Home link */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-secondary"
              : "text-gray  duration-300 hover:text-secondary"
          }
        >
          <FaHome className=" cursor-pointer duration-300" size={20} />
        </NavLink>

        {/* About me link */}
        <NavLink
          to="/about-me"
          className={({ isActive }) =>
            isActive
              ? "text-secondary "
              : "text-gray  duration-300 hover:text-secondary"
          }
        >
          <MdPerson
            className=" cursor-pointer duration-300 hover:text-secondary"
            size={20}
          />
        </NavLink>

        {/* Education link */}
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive
              ? "text-secondary "
              : "text-gray  duration-300 hover:text-secondary"
          }
        >
          <IoIosSchool
            className=" cursor-pointer duration-300 hover:text-secondary"
            size={20}
          />
        </NavLink>

        {/* portfolio link */}
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? "text-secondary "
              : "text-gray duration-300 hover:text-secondary"
          }
        >
          <MdWork
            className=" cursor-pointer duration-300 hover:text-secondary"
            size={20}
          />
        </NavLink>

        {/* testimonials link */}
        <NavLink
          to="/testimonials"
          className={({ isActive }) =>
            isActive
              ? "text-secondary "
              : "text-gray  duration-300 hover:text-secondary"
          }
        >
          <HiSpeakerphone
            className=" cursor-pointer duration-300 hover:text-secondary"
            size={20}
          />
        </NavLink>

        {/* contact link */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-secondary "
              : "text-gray  duration-300 hover:text-secondary"
          }
        >
          <FaPhoneVolume
            className=" cursor-pointer duration-300 hover:text-secondary"
            size={20}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default MiniSideBar;
