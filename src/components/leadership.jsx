import React from "react";
import { leadershipExperiences } from "../constants";
import LeadershipCard from "./LeadershipCard";

const Leadership = () => {
  return (
    <div className="projects bg-black px-4 py-16" id="leadership">
      <div className="text-white w-full sm:px-16 px-2">
        <h2 className="text-5xl font-extrabold mt-4">Leadership Experience</h2>
        <p className="mt-3 text-[17px] max-w-3xl leading-[30px]">
          Here are some of my leadership experiences where I have taken on roles
          that helped me grow and contribute to my community.
        </p>
      </div>

      <div className="mt-20 flex justify-center flex-wrap gap-7">
        {leadershipExperiences.map((experience, index) => (
          <LeadershipCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Leadership;
