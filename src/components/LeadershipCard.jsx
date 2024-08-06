import React from "react";

const LeadershipCard = ({ experience }) => {
  return (
    <div className="p-[1px] green-pink-gradient rounded-2xl">
      <div
        className="p-4 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between"
        style={{ background: "#1d1836" }}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={experience.image}
            alt="experience_image"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-white mt-2 flex flex-col flex-grow">
          <h3 className="font-bold text-[16px] flex-grow text-justify">
            {experience.role}
          </h3>
          <p className="mt-2 text-secondary text-[16px] flex-grow">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadershipCard;
