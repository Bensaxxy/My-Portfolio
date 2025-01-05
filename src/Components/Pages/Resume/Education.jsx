/** @format */

import React from "react";

const Education = () => {
  return (
    <div>
      <div>
        <h1 className=" uppercase font-semibold text-xl mb-4">Education</h1>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-primary py-2 px-4 rounded-sm">
              <h1 className=" text-gray">
                Federal Polytecnic Nasarawa (HND): (2024/2025)
              </h1>
            </div>
            <h1 className=" uppercase my-2 font-semibold">Computer Science</h1>
            <p className=" font-light">
              This is also a 2-year program that builds on the foundation
              provided by the ND program, which includes Database Systems,
              Artificial Intelligence and Machine Learning, Project Management
              etc...
            </p>
          </div>
          <div>
            <div className="bg-primary py-2 px-4 rounded-sm">
              <h1 className=" text-gray">
                Federal Polytecnic Nasarawa (ND): (2018/2019)
              </h1>
            </div>
            <h1 className=" uppercase my-2 font-semibold">Computer Science</h1>
            <p className=" font-light">
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
