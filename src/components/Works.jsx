import React from "react";
import { projects } from "../constants";
import Card from "./Card";
import ButtonLink from "./ButtonLink"; // Make sure to import ButtonLink

const Works = () => {
  return (
    <div className="projects bg-black px-4 py-16" id="works">
      <div className="text-white w-full sm:px-16 px-2">
        <h2 className="text-5xl font-extrabold mt-4">Projects</h2>
        <p className="mt-3 text-[17px] max-w-3xl leading-[30px]">
          Coding is my passion, and despite my busy schedule with internships
          and schoolwork, I always find time to bring my ideas to life. These
          projects are the result of my curiosity and dedication to learning new
          technologies. Dive in to see what I've been working on!
        </p>

        {/* Add the View Github button here */}
        <div className="mt-8">
          <ButtonLink
            url="https://github.com/Ishan3842" // Replace with your actual GitHub URL
            text="View Github →"
            padding={`p-3`}
          />
        </div>
      </div>

      <div className="mt-20 flex justify-center flex-wrap gap-7">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Works;
