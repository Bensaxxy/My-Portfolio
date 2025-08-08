/** @format */

// import React from "react";
import Education from "./Education";
import Experience from "./Experience";

const Resume = () => {
  return (
    <div>
      <div className="container pb-20 md:pb-0 bg-gray dark:bg-black py-8 flex flex-col gap-8 w-full">
        <div>
          {/* Resume */}
          <h1 className=" text-center border px-10 border-zinc-300 tracking-widest font-extrabold text-4xl md:text-5xl lg:text-7xl uppercase dark:text-secondary">
            resume
          </h1>
        </div>

        {/* Education section */}
        <Education />
        <hr className=" border border-secondary/30" />
        {/* Experience section */}
        <Experience />
      </div>
    </div>
  );
};

export default Resume;
