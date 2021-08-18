import React from "react";
import styled from "styled-components";

import Education from "./common/education";
import WorkExperience from "./common/workExperience";

import { colors } from "../config";

function Second() {
  const contents = [
    "Managed full-cycle design tasks, handling all phases from conception to completion while maintaining guidelines throughout.",
    "Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.",
    "Verified all web-based products fulfilled prescribed project needs through direct interaction with stakeholders.",
    "Consulted with customers to gather requirements and discuss design choices.",
    "Reviewed and tested customer-facing prototypes before deployment, applying best practice diagnostic techniques to verify usability.",
  ];

  const dates = {
    start: "2020-05",
    end: "Current",
  };

  return (
    <Wrapper>
      <div className="summary">
        Logical and results-driven Web Developer dedicated to building and
        optimizing user-focused websites for customers with various business
        objectives. Judicious and creative when crafting effective websites,
        apps and platforms to propel competitive advantage and revenue growth.
        Technically proficient and analytical problem solver with calm and
        focused demeanor.
      </div>

      <div className="caption">Work Experience</div>

      <WorkExperience
        jobTitle="FrontEnd Web Development"
        employer="James McQueen"
        city="Lagos City"
        state="Lagos"
        contents={contents}
        dates={dates}
      />

      <div className="caption">Education</div>

      <Education
        dates={dates}
        school="University of Uyo"
        location="Uyo, Nigeria"
        degree="Bachelor of Science and Education"
        course="Computer Science Education"
      />

      <div className="caption">Certification</div>

      <Education
        dates={dates}
        school="Zuri Internship"
        location="Nigeria"
        degree="Internship"
        course="Frontend Web Development"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${colors.primary};
  background: ${colors.white};

  .summary {
    padding: 25px;
    text-align: justify;
    text-justify: auto;
  }

  .caption {
    font-size: 20px;
    font-weight: 700;
    padding: 10px 0;
    margin: 5px 20px;
    border-top: 1px solid ${colors.primary};
    border-bottom: 1px solid ${colors.primary};
  }
`;

export default Second;
