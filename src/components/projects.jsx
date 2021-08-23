import React from "react";
import styled from "styled-components";

function Projects() {
  const list = [
    {
      description:
        "Project Manager: current project for my school Workshop - University of Uyo",
      link: "https://p-manager.netlify.app/projects",
    },
    {
      description: "My first Portfolio with React, GSAP and Framer Motion",
      link: "https://justiz47.netlify.app/",
    },
  ];

  return (
    <Wrapper data-aos="fade-in" data-aos-duration={1000}>
      <div className="aside"></div>
      <div className="content">
        <ul>
          {list.map((item) => (
            <li key={item.description}>
              <a
                className="project-link"
                target="_blank"
                rel="noreferrer"
                href={item.link}
              >
                {item.description}
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

    .aside {
      width: 100%;
    }
  }
`;

export default Projects;
