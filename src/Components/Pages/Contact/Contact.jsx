/** @format */

// import React from "react";
import { IoMailOpen } from "react-icons/io5";
import { Mail } from "./Mail";
import PhoneCall from "./PhoneCall";

const Contact = () => {
  return (
    <div>
      <div className="container bg-gray dark:bg-black py-8 flex flex-col w-full">
        <div>
          {/* Resume */}
          <h1 className=" text-center border px-10 border-zinc-300 tracking-widest font-extrabold text-4xl md:text-5xl lg:text-7xl uppercase dark:text-secondary">
            Contact
          </h1>
        </div>

        <div>
          <h1 className=" text-2xl lg:text-3xl font-normal mt-8 mb-2 dark:text-secondary">
            Feel <span className=" font-bold dark:text-secondary">Free</span> to
            contact me
          </h1>
          <p className=" font-medium text-sm leading-6 md:text-md dark:text-white">
            For inquiries about my services, please dont hesitate to drop me a
            line. I am passionate about delivering high-quality frontend
            solutions and would be delighted to discuss how I can help bring
            your project to life. Lets get in touch and explore the
            possibilities.
          </p>
        </div>
        <div className=" flex my-6 items-center gap-1">
          <IoMailOpen className=" text-primary dark:text-white" />
          <a
            href="#"
            target="_blank"
            className=" font-semibold text-primary dark:text-white "
          >
            benjaminsegun38@gmail.com
          </a>
        </div>
        <div className=" items-center grid grid-cols-1 md:grid-cols-2 gap-6">
          <Mail />
          <PhoneCall />
        </div>
      </div>
    </div>
  );
};

export default Contact;
