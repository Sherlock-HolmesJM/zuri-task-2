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
        <div>
          <img src={zuriLogo} alt="zuri logo" />
          <img src={i4gLogo} alt="i4g logo" className="header-i4g" />
        </div>
        <div>
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
  background: linear-gradient(
    225deg,
    hsla(206, 97%, 15%, 1) 0%,
    hsla(0, 0%, 100%, 1) 100%
  );

  header {
    margin: 20px 0;
  }

  .header-i4g {
    width: 150px;
    margin-left: 30px;
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
    width: 800px;
    border: 1px solid ${colors.primary};
    margin: 20px 0;
  }
`;

export default Resume;
