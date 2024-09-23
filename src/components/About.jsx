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
                  Tech Enthusiast & Creative Coder
                </h3>
                <p className="mt-2 text-[17px] leading-[30px]">
                  👋 Hey there! I'm Ishan, studying Computer Science & Data
                  Science from UW-Madison. I’m all about crafting cool software
                  and diving into the fascinating realms of AI and data science.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-400">
                  Your Go-To Code Ninja
                </h3>
                <p className="mt-2 text-[17px] leading-[30px]">
                  💻 Whether it’s building apps with Flutter, React Native, or
                  getting hands-on with the MERN stack and Spring Boot, I’m in
                  my element. My internships have been exciting adventures where
                  I’ve created smart visitor management systems and automated
                  data-crunching tools.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-400">
                  Off the Court and On the Tech Scene
                </h3>
                <p className="mt-2 text-[17px] leading-[30px]">
                  🏆 When I’m not immersed in code, you’ll find me on the squash
                  court. I’ve played at the national level and even captained
                  the West Bengal team. The teamwork and focus I bring to sports
                  are the same qualities I channel into my tech projects.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-400">
                  Always Learning, Always Growing
                </h3>
                <p className="mt-2 text-[17px] leading-[30px]">
                  🚀 I’m a lifelong learner, always on the lookout for the
                  latest in tech. I love contributing to open-source, staying
                  active in campus life, and planning my next outdoor adventure.
                  Leadership and community? I’m all in!
                </p>
              </div>
            </div>

            <div className="mt-8">
              <ButtonLink
                url="https://drive.google.com/file/d/1kEp7e6bxB0gnPZz6BdW1R1Rq_ZlXqu1a/view?usp=drive_link"
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
