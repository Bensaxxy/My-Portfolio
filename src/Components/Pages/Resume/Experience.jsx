/** @format */

import { experienceData } from "./experienceData";

const Experience = () => {
  return (
    <div className="mb-4">
      <div>
        <h1 className="uppercase font-semibold text-xl mb-4 dark:text-white">
          Experience
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {experienceData.map((item, index) => (
            <div key={index}>
              <div className="bg-primary py-2 px-4 rounded-sm dark:bg-secondary ">
                <h1 className="text-gray dark:text-black">
                  {item.company}: ({item.year})
                </h1>
              </div>

              <h1 className="uppercase my-2 font-semibold dark:text-white">
                {item.role}
              </h1>

              <p className="font-light dark:text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
