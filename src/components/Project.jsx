/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import img from "../images/digitic.jpeg";
import chat from "../images/chat.jpeg";
import recruitifie from "../images/recruitifie.jpeg";

import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div id="project" className="text-white mt-10">
      <h1
        data-aos="fade-up-right"
        className="lg:text-4xl text-3xl flex justify-center items-center gap-6 font-bold my-10"
      >
        {" "}
        <span className="text-5xl text-[#817ffa]">
          <AiOutlineFundProjectionScreen />
        </span>{" "}
        My Projects
      </h1>
      <div className="flex  bg-[rgba(0,0,0,0.9)] sm:p-10 p-5 gap-7 flex-wrap justify-center rounded-xl">
        <div
          data-aos="zoom-in-up"
          className=" lg:w-[25%] lg:h-[360px] sm:w-[50%] md:w-[40%] w-[80%] bg-gray-900  projectShadow sm:h-[100%] rounded-lg p-2 "
        >
          <div className="rounded-2xl  ">
            <img
              className="w-[100%] sm:h-[200px] h-[150px] rounded-2xl"
              src={recruitifie}
              alt=""
            />

            <div className="bg-[#2d434c] p-5  h-[100%] lg:h-[120px] mt-4 rounded-lg ">
              <h1 className="font-bold text-white mt-3">
                {" "}
                Recruitifie
              </h1>
              <p className="text-white text-sm mb-3">september - december</p>
              <div className="flex gap-2 project-description  justify-between flex-wrap">
                <div>
                  <a
                    href="https://www.recruitifie.com/"
                    target="_blank"
                  >
                    <button className="px-1 py-[4px] mt-4 bg-green-600 text-white outline-none ">
                      Live Url
                    </button>
                  </a>
                </div>
                <div className="mt-2">
                  <ProjectCard
                    projectDescription="Designed and developed backend code for this project registartion,login nd admin part.Authentication and authorization also completed"
                    tech="Technologies Used:- Node JS, Mongo DB, Express,JWT"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          className=" lg:w-[25%] lg:h-[360px] sm:w-[50%] md:w-[40%] w-[80%] bg-gray-900  projectShadow sm:h-[100%] rounded-lg p-2 "
        >
          <div className="rounded-2xl  ">
            <img
              className="w-[100%] sm:h-[200px] h-[150px] rounded-2xl"
              src={img}
              alt=""
            />

            <div className="bg-[#2d434c] p-5  h-[100%] lg:h-[120px] mt-4 rounded-lg ">
              <h1 className="font-bold text-white mt-3">
                {" "}
                Digitic Clone
              </h1>
              <p className="text-white text-sm mb-3">june - july</p>
              <div className="flex gap-2 project-description  justify-between flex-wrap">
                <div>
                  <a
                    href="https://github.com/mouli112/Ecomerce"
                    target="_blank"
                  >
                    <button className="px-1 py-[4px] mt-4 bg-green-600 text-white outline-none ">
                      Github Url
                    </button>
                  </a>
                </div>
                <div className="mt-2">
                  <ProjectCard
                    projectDescription="Designed and developed backend code for this project registartion,login nd admin part.Authentication and authorization also completed"
                    tech="Technologies Used:- Node JS, Mongo DB, Express,JWT"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          className=" lg:w-[25%] lg:h-[360px]  sm:w-[50%] md:w-[40%] w-[80%] bg-gray-900  projectShadow sm:h-[350px] rounded-lg p-2 "
        >
          <div className="rounded-2xl  ">
            <img
              className="w-[100%] sm:h-[200px]  h-[150px] rounded-2xl"
              src={chat}
              alt=""
            />

            <div className="bg-[#2d434c] p-5  h-[100%] lg:h-[120px] mt-4 rounded-lg ">
              <h1 className="font-bold text-white mt-3">Chat App</h1>
              <p className="text-white text-sm">In Progress</p>
              <div className="flex gap-2 project-description justify-between flex-wrap">
                <div>
                  <a
                    href=""
                    target="_blank"
                  >
                    <button className="px-1 py-[4px] mt-4 bg-green-600 text-white outline-none ">
                      Github Url
                    </button>
                  </a>
                </div>
                <div className="mt-2">
                  <ProjectCard
                    projectDescription="This chat app is building by using socket.io "
                    tech="Technologies Used:- React js, Express js, Node js, MongoDB, JWT,CSS"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
