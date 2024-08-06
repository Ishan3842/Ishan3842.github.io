import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-slate-900 p-4" style={{ cursor: "default" }}>
      <div className="flex justify-between flex-wrap gap-1">
        <div className="text-white flex justify-around sm:w-[250px] w-full">
          <a
            href="https://github.com/Ishan3842"
            target="_blank"
            className="relative transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <FaGithub className="text-xl" />
            <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded p-1 opacity-0 hover:opacity-100 transition-opacity">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/ishan-bhutoria/"
            target="_blank"
            className="relative transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <AiFillLinkedin className="text-xl" />
            <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded p-1 opacity-0 hover:opacity-100 transition-opacity">
              LinkedIn
            </span>
          </a>
          <a
            href="https://www.instagram.com/ishan.bhutoria/"
            target="_blank"
            className="relative transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <FaInstagram className="text-xl" />
            <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded p-1 opacity-0 hover:opacity-100 transition-opacity">
              Instagram
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
