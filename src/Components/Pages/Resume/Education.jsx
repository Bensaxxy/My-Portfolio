/** @format */

// import React from "react";

const Education = () => {
  return (
    <div>
      <div>
        <h1 className=" uppercase font-semibold text-xl mb-4 dark:text-white">
          Education
        </h1>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-primary dark:bg-secondary py-2 px-4 rounded-sm">
              <h1 className=" text-gray dark:text-black">
                Federal Polytecnic Nasarawa (HND): (2023/2025)
              </h1>
            </div>
            <h1 className=" uppercase my-2 font-semibold dark:text-white">
              Computer Science
            </h1>
            <p className=" font-light dark:text-white">
              This is also a 2-year program that builds on the foundation
              provided by the ND program, which includes Database Systems,
              Artificial Intelligence and Machine Learning, Project Management
              etc...
            </p>
          </div>
          <div>
            <div className="bg-primary dark:bg-secondary py-2 px-4 rounded-sm">
              <h1 className=" text-gray dark:text-black">
                Federal Polytecnic Nasarawa (ND): (2018/2020)
              </h1>
            </div>
            <h1 className=" uppercase my-2 font-semibold dark:text-white ">
              Computer Science
            </h1>
            <p className=" font-light dark:text-white ">
              This is a 2-year program that provides a foundation in computer
              science and information technology which includes Programming
              Fundamentals, Web Development etc...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
