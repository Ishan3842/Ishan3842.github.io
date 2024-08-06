import React from "react";
import "../App.css";
import { services } from "../constants";
import ButtonLink from "./ButtonLink";

const ServiceCard = ({ service }) => (
  <div className="sm:w-[250px] w-full">
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px]">
      <div
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden"
        style={{ background: "#151030" }}
      >
        <img
          src={service.icon}
          alt="service_icon"
          className="w-full h-full object-cover absolute inset-0 opacity-20"
        />
        <div className="z-10 text-center">
          <h3 className="text-white text-[20px] font-bold">{service.title}</h3>
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="bg-black p-4 h-full w-full text-white" id="about">
      <div className="container mx-auto">
        <div className="sm:flex sm:justify-between sm:items-start mb-12">
          <div className="sm:w-2/3">
            <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-6">
              Introduction
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-green-400">
                  Tech Enthusiast & Problem Solver
                </h3>
                <p className="mt-2 text-[17px] leading-[30px]">
                  👨‍💻 Hey there! I'm Ishan Bhutoria, currently wrapping up my
                  Computer Science & Data Science studies at UW-Madison. I'm
                  passionate about creating software that makes a difference and
                  delving into the world of AI and data science.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-400">
                  Code Craftsman
                </h3>
                <p className="mt-2 text-[17px] leading-[30px]">
                  🚀 I enjoy working with a variety of technologies, from
                  Flutter and React Native to Spring Boot and the MERN stack. My
                  internships have given me the chance to develop smart visitor
                  management systems and automated data analysis tools.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-400">
                  Beyond the Screen
                </h3>
                <p className="mt-2 text-[17px] leading-[30px]">
                  🏆 When I'm not coding, you'll likely find me on the squash
                  court. As a national-level player and former captain of the
                  West Bengal team, I bring the same drive and teamwork to my
                  tech projects.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-400">
                  Always Learning, Always Growing
                </h3>
                <p className="mt-2 text-[17px] leading-[30px]">
                  🌟 I love staying updated with the latest tech trends,
                  contributing to open-source projects, and planning outdoor
                  adventures. My enthusiasm for leadership and community
                  engagement keeps me active in campus activities and beyond.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <ButtonLink
                url="https://drive.google.com/file/d/1S5_3SyZYrIRJ1jZgT3-LcBBnavmZXhne/view?usp=sharing"
                text="View Resume →"
                padding={`p-3`}
              />
            </div>
          </div>

          <div className="sm:w-1/3 mt-8 sm:mt-0">
            <img
              src="profile.jpg"
              alt="ishan-bhutoria"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-7">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
