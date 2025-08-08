/** @format */

// import React from "react";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const SocialLinks = () => {
  return (
    <div className=" mt-6 flex  gap-4">
      <a href="https://x.com/Bensaxxy11" target="_blank">
        <FaXTwitter
          className="text-secondary hover:text-primary dark:hover:text-white duration-300"
          size={22}
        />
      </a>
      <a href="https://discord.com/channels/@me" target="_blank">
        <FaDiscord
          className="text-secondary hover:text-primary dark:hover:text-white duration-00"
          size={22}
        />
      </a>
      <a href="https://github.com/Bensaxxy" target="_blank">
        <FaGithub
          className="text-secondary hover:text-primary dark:hover:text-white duration-300"
          size={22}
        />
      </a>
      <a href="https://www.linkedin.com/in/oluwasegun-benjamin-a80b76252/">
        <FaLinkedin
          className="text-secondary hover:text-primary dark:hover:text-white duration-300"
          size={22}
        />
      </a>
      <a href="https://www.frontendmentor.io/profile/Bensaxxy" target="_blank">
        <SiFrontendmentor
          className="text-secondary hover:text-primary dark:hover:text-white duration-300"
          size={22}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
