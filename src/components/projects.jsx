import React from "react";
import styled from "styled-components";

function Projects() {
  const list = [
    "Project Manager: current project for my school Workshop - University of Uyo",
    "My first Portfolio with React, GSAP and Framer Motion",
  ];

  return (
    <Wrapper data-aos="fade-in" data-aos-duration={1000} data-aos-once={true}>
      <div className="aside"></div>
      <div className="content">
        <ul>
          {list.map((item) => (
            <li key={item}>
              <a
                className="project-link"
                target="_blank"
                rel="noreferrer"
                href="https://p-manager.netlify.app/projects"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 0 20px 20px 20px;

  .aside {
    width: 100px;
  }
  .content {
    width: 100%;
  }

  .project-link {
    color: inherit;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export default Projects;
