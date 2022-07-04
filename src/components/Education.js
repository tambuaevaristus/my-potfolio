import * as React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import { width } from "@mui/system";
import { grey } from "@mui/material/colors";

export default function Education() {
  return (
    <div className=" ">
    
      <div
          class=" text-center pt-5 "
          
        >
          <h2>Educational Background</h2>
        </div>
      <div className="container m-auto mt-5 position-absolute"></div>
      <div className=" text-center"> {/* <h1>Education</h1> */}</div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2017 - 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-white">
            Bachelors of Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-white">
            B.Eng
          </h4>
          <p className="text-white">
            Faculty of Engineering and Technology, UB Computer Engineering /
            software Engineering{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016 - 2017"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-white">
            Software Engineering Training
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-white"></h4>
          <p className="text-white">
            School of Media Design and Information Technology
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(233, 30, 99)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          date="2014 - 2016"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-white">
            GCE Advanced Level
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-white">
            General Certificate of Education
          </h4>
          <p className="text-white">Government Bilingual High School Ndop</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(233, 30, 99)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          date="2010 - 2014"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-white">
            GCE Ordinary Level
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-white">
            General Certificate of Education
          </h4>
          <p className="text-white">
            Government Bilingual High School Mbeunkong
          </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Apri 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<SchoolIcon />}
        /> */}
      </VerticalTimeline>
    </div>
  );
}
