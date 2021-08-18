import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

import Aside from "./aside";
import Main from "./main";

import zuriLogo from "../media/zuri_internship.svg";
import i4gLogo from "../media/I4G-Logo-Color-Cropped.png";

import { colors } from "../config";

import printName from "../printName";

function Resume() {
  const [text, setText] = useState("Print my name");

  const handleClick = () => {
    printName();

    setText("Name printed");

    setTimeout(() => setText("Print name again"), 12000);
  };

  return (
    <Wrapper>
      <ToastContainer />
      <header>
        <div className="header-logos">
          <div>
            <img src={zuriLogo} alt="zuri logo" />
          </div>
          <div>
            <img src={i4gLogo} alt="i4g logo" className="header-i4g" />
          </div>
        </div>
        <div className="header-links">
          <a href="https://internship.zuri.team/" className="header-link">
            Join the internship
          </a>
          <em className="header-pipe">||</em>
          <button className="header-printName" onClick={handleClick}>
            {text}
          </button>
        </div>
      </header>

      <div className="resume">
        <Aside />
        <Main />
      </div>

      <div className="footer">
        <div>Developed by Ugochukwu Nkweke &copy; 2021</div>
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

  .header-pipe {
    font-size: 30px;
    font-weight: 600;
    margin: 0 10px;
    color: ${colors.white};
  }

  .header-printName {
    font-size: 16px;
    font-weight: 600;
    padding: 10px 14px;
    outline: none;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px dashed ${colors.primary};
    background-color: ${colors.white};
    color: ${colors.primary};
    transition: 1s ease;
  }

  .header-printName:hover {
    color: ${colors.white};
    background-color: ${colors.primary};
    border: 1px dashed ${colors.primary};
    transition: 1s ease;
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

  .footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    font-size: 15px;
    color: ${colors.white};
    background-color: ${colors.primary};
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
