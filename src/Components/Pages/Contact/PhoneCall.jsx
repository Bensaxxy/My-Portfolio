/** @format */

import React from "react";
import { CiPhone } from "react-icons/ci";

const PhoneCall = () => {
  return (
    <div>
      <div className=" flex gap-2 items-center">
        <CiPhone size={100} />
        <div className=" flex flex-col">
          <span>+234(0) 810 569 1875</span>
          <span>+234 (0) 705 480 9364</span>
        </div>
      </div>
    </div>
  );
};

export default PhoneCall;
