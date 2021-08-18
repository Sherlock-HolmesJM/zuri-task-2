import React from "react";
import styled from "styled-components";

import Aside from "./aside";
import Main from "./main";

import zuriLogo from "../media/zuri_internship.svg";
import i4gLogo from "../media/I4G-Logo-Color-Cropped.png";

import { colors } from "../config";

function Resume() {
  return (
    <Wrapper>
      <header>
        <div className="header-logos">
          <div>
            <img src={zuriLogo} alt="zuri logo" />
          </div>
          <div className="header-i4g-div">
            <img src={i4gLogo} alt="i4g logo" className="header-i4g" />
          </div>
        </div>
        <div className="header-links">
          <a href="https://internship.zuri.team/" className="header-link">
            Join the internship
          </a>
        </div>
      </header>

      <div className="resume">
        <Aside />
        <Main />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 250px;
  background: linear-gradient(
    225deg,
    hsla(206, 97%, 15%, 1) 0%,
    hsla(0, 0%, 100%, 1) 100%
  );

  header {
    margin: 20px 0;
    flex-basis: 100%;
    flex-grow: 1;
  }

  .header-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .header-logos > * {
    margin: 15px;
  }

  .header-i4g {
    display: inline-block;
    width: 150px;
  }

  .header-links {
    text-align: center;
  }

  .header-link {
    color: ${colors.white};
    font-size: 20px;
    font-weight: 500;
  }

  .header-link:visited {
    color: ${colors.white};
  }

  .resume {
    display: flex;
    width: 60%;
    border: 1px solid ${colors.primary};
    margin: 20px 0;
  }

  .resume > * {
    flex-grow: 1;
  }

  @media (max-width: 1085px) {
    .resume {
      width: 80%;
    }
  }

  @media (max-width: 900px) {
    .resume {
      width: 95%;
    }
  }
  @media (max-width: 600px) {
    .resume {
      flex-wrap: wrap;
    }
  }
`;

export default Resume;
