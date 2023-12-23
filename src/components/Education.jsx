/* eslint-disable no-unused-vars */
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FcHome } from "react-icons/fc";
import { GiBookAura } from "react-icons/gi";
import { GoBook } from "react-icons/go";

const Education = () => {
  return (
    <div id="education" className="sm:py-10 h-full w-[70%] m-auto">
      <h1
        data-aos="zoom-out-left"
        className="text-4xl font-bold text-center py-8 text-white"
      >
        Education
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ff9b9b", color: "#fff" }}
          date="2018 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GiBookAura />}
        >
          <h3 className="vertical-timeline-element-title text-[#150808] font-bold">
            BTECH
          </h3>
          <h4 className="vertical-timeline-element-subtitle  text-[12px]">
            Electronics Communication And Engineering
          </h4>
          <p>Pace Institute of Technologies and Sciences</p>
          <p className="text-red-100">CGPA - 8.33</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#5c69a6", color: "#fff" }}
          date="2016 - 2018"
          iconStyle={{ background: "#bbcde6", color: "#434d6c" }}
          icon={<GoBook />}
        >
          <h3 className="vertical-timeline-element-title text-[#ede9e9] font-bold">
            12th
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-[12px]">
            {" "}
            MPC
          </h4>
          <p> M.S.R Junior College,Chimakurthy</p>
          <p className="text-blue-200">Marks - 923</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#87be6f", color: "#fff" }}
          date="2016"
          iconStyle={{ background: "#87be6f", color: "#434d6c" }}
          icon={<GoBook />}
        >
          <h3 className="vertical-timeline-element-title text-[#ede9e9] font-bold">
            10th
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-[12px]">
            {" "}
            Science
          </h4>
          <p>Z.P High School,KonaganiVariPalem</p>
          <p className="text-green-100">Grade - 8.8</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
