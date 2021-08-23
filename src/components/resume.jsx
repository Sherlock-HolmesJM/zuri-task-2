// @ts-nocheck
import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

import Aside from "./aside";
import Content from "./main";

import zuriLogo from "../media/zuri_internship.svg";
import i4gLogo from "../media/I4G-Logo-Color-Cropped.png";

import { colors } from "../config";

import printName from "../printName";

function Resume() {
  const [text, setText] = useState("Print my name");

  const handleClick = () => {
    printName();

    setText("Name printed");

    setTimeout(() => setText("Print name again"), 6000);
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
        <Content />
      </div>

      <div className="footer">
        <div>Developed by Ugochukwu Nkweke &copy; 2021</div>
        <div>
          Animation with{" "}
          <a href="https://michalsnik.github.io/aos/">
            AOS: Animate on Scroll Library
          </a>
        </div>
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
    300deg,
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
    border-bottom: 5px groove ${colors.primary};
    margin-bottom: 10px;
  }

  .header-logos > * {
    margin: 15px;
    margin-bottom: 10px;
  }

  .header-i4g {
    display: inline-block;
    width: 150px;
  }

  .header-links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }

  .header-link {
    display: block;
    color: ${colors.secondary};
    font-size: 20px;
    font-weight: 500;
  }

  .header-link:visited {
    color: ${colors.secondary};
  }

  .header-pipe {
    display: block;
    font-size: 30px;
    font-weight: 600;
    margin: 0 10px;
    color: ${colors.secondary};
  }

  .header-printName {
    display: block;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 14px;
    outline: none;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px dashed gray;
    color: ${colors.white};
    background-color: ${colors.primary};
    width: 150px;
    transition: 0.4s ease;
  }

  .header-printName:hover {
    border: 1px dashed ${colors.white};
    transition: 0.4s ease;
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
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    padding: 10px;
    color: ${colors.secondary};
    background-color: ${colors.white};
    height: 100px;

    & > * {
      margin-bottom: 5px;
    }

    a {
      color: inherit;
    }
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

  @media (max-width: 425px) {
    .header-links {
      flex-direction: column;
    }

    .header-pipe {
      display: none;
    }

    .header-printName {
      margin-top: 20px;
      border-radius: 5px;
    }
  } ;
`;

export default Resume;
