import React from "react";
import styled from "styled-components";

import Projects from "./projects";
import Certification from "./common/certification";
import SubHeader from "./common/subSection";

import { colors } from "../config";

function Content() {
  const contents = [
    "Managed full-cycle design tasks, handling all phases from conception to completion while maintaining guidelines throughout.",
    "Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.",
    "Verified all web-based products fulfilled prescribed project needs through direct interaction with stakeholders.",
    "Consulted with customers to gather requirements and discuss design choices.",
    "Reviewed and tested customer-facing prototypes before deployment, applying best practice diagnostic techniques to verify usability.",
  ];

  const dates = { start: "2020-05", end: "Current" };

  return (
    <Wrapper>
      <div className="summary" data-aos="fade-in" data-aos-duration={1000}>
        Logical and results-driven Web Developer dedicated to building and
        optimizing user-focused websites for customers with various business
        objectives. Judicious and creative when crafting effective websites,
        apps and platforms to propel competitive advantage and revenue growth.
        Technically proficient and analytical problem solver with calm and
        focused demeanor.
      </div>

      <SubHeader title="Work Experience" />

      <Certification
        title="FrontEnd Web Development"
        location="James McQueen, Lagos City - Lagos, Nigeria"
        dates={dates}
        content={contents}
      />

      <SubHeader title="Education" />

      <Certification
        title="Bachelor of Science & Education: Computer Education"
        location="University of Uyo - Uyo, Nigeria"
        dates={{ start: "2016-11", end: "Current" }}
      />

      <SubHeader title="Certification" />

      <Certification
        title="Internship: Frontend Web Development"
        location="Zuri - Nigeria"
        dates={{ start: "2021-08", end: "Current" }}
      />

      <SubHeader title="Projects" />

      <Projects />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${colors.secondary};
  background: ${colors.white};
  font-size: 16px;
  font-weight: 500;

  .summary {
    padding: 25px;
    text-align: justify;
    text-justify: auto;
  }
`;

export default Content;
