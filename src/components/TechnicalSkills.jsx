import React, { useState } from "react";
import { technicalSkills, skillColors } from "../constants";

const SkillBar = ({ skill, maxYears = 4 }) => (
  <div className="mb-6 w-full sm:w-1/2 px-2">
    <div className="flex justify-between items-center mb-2">
      <span className="text-lg font-medium text-white">{skill.name}</span>
      <span className="text-sm font-medium text-gray-400">
        {skill.experience} years
      </span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-3">
      <div
        className={`${
          skillColors[skill.name]
        } h-3 rounded-full transition-all duration-500 ease-out`}
        style={{ width: `${(skill.experience / maxYears) * 100}%` }}
      ></div>
    </div>
  </div>
);

const SkillSection = ({ skills }) => (
  <div className="flex flex-wrap -mx-2">
    {skills.slice(0, 10).map((skill, index) => (
      <SkillBar key={index} skill={skill} />
    ))}
  </div>
);

const TabButton = ({ title, isActive, onClick }) => (
  <button
    className={`px-4 py-2 font-semibold rounded-t-lg ${
      isActive ? "bg-gray-800 text-white" : "bg-gray-700 text-gray-300"
    }`}
    onClick={onClick}
  >
    {title}
  </button>
);

const TechnicalSkills = () => {
  const [activeTab, setActiveTab] = useState("technologies");

  const tabs = [
    { id: "technologies", title: "Technologies" },
    { id: "frameworks", title: "Frameworks" },
    { id: "developerTools", title: "Developer Tools" },
  ];

  return (
    <section className="bg-black py-16 px-4 w-screen" id="skills">
      <div className="container mx-auto">
        <p className="text-gray-400 font-light mb-2">
          What do i bring to the table?
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12">
          Technical Skills
        </h2>

        <div className="mb-6 flex space-x-2">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              title={tab.title}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <SkillSection skills={technicalSkills[activeTab]} />
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
