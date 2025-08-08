/** @format */

const Experience = () => {
  return (
    <div className=" mb-4">
      <div>
        <h1 className=" uppercase font-semibold text-xl mb-4 dark:text-white">
          Experience
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* 1 experience */}
          <div>
            <div className="bg-primary py-2 px-4 rounded-sm dark:bg-secondary">
              <h1 className=" text-gray dark:text-black">
                Nexus Botix: (2024/2025)
              </h1>
            </div>
            <h1 className=" uppercase my-2 font-semibold dark:text-white">
              Frontend Developer
            </h1>
            <p className=" font-light dark:text-white">
              This is a company that deals with the development of websites and
              applications. I am in the position of a frontend developer, where
              I build user interfaces, collaborate with backend developers, and
              ensure responsive and accessible web experiences.
            </p>
          </div>
          {/* 2 experience */}
          <div>
            <div className="bg-primary dark:bg-secondary py-2 px-4 rounded-sm">
              <h1 className=" text-gray dark:text-black">
                Interprint Computers and Graphic Limited: (2022/2024)
              </h1>
            </div>
            <h1 className=" uppercase my-2 font-semibold dark:text-white">
              Graphic Designer
            </h1>
            <p className=" font-light dark:text-white">
              This is an Organization whereby will deal withing printing,
              typing, editing and binding. I am in the position whereby i help
              in doing the Graphic work designs.
            </p>
          </div>

          {/* 3 experience */}
          <div>
            <div className="bg-primary dark:bg-secondary py-2 px-4 rounded-sm">
              <h1 className=" text-gray dark:text-black">
                Segma Upservices Nig. Ltd: (2021)
              </h1>
            </div>
            <h1 className=" uppercase my-2 font-semibold dark:text-white">
              Computer Operator
            </h1>
            <p className=" font-light dark:text-white">
              This is a an Organization, whereby we deal with contracts, bidding
              and i am in the position whereby i do the typing and printing of
              documents etc...
            </p>
          </div>
          {/* 4 experience */}
          <div>
            <div className="bg-primary dark:bg-secondary py-2 px-4 rounded-sm">
              <h1 className=" text-gray dark:text-black">
                FCTA, PHERMC: (2019)
              </h1>
            </div>
            <h1 className=" uppercase my-2 font-semibold dark:text-white">
              IT assitant
            </h1>
            <p className=" font-light dark:text-white">
              This is a 4 month IT training, whereby i am assigned to be a
              assistant to an IT personnel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
