import React from "react";
import styled from "styled-components";

import Contact from "./common/contact";
import Skill from "./common/skill";

import { colors } from "../config";

function Aside() {
  return (
    <Wrapper>
      <div className="name-container">
        <div className="name">Ugochukwu Nkweke</div>
        <div className="profession">Web Development</div>
      </div>

      <div className="caption">Contact</div>

      <Contact title="address" content="Uyo, Nigeria, 282882" />
      <Contact title="phone" content="0903 049 8410" />
      <Contact title="email" content="sherllyj191@gmail.com" />

      <div className="caption">Skills</div>

      <Skill title="JavaScript" rating={4} />
      <Skill title="React" rating={4} />
      <Skill title="HTML5" rating={4} />
      <Skill title="CSS3" rating={4} />
      <Skill title="Firebase" rating={3} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  background: ${colors.primary};
  padding-bottom: 20px;

  .name-container {
    padding: 15px;
  }
  .name {
    font-size: 28px;
    font-weight: 900;
  }

  .profession {
    font-size: 20px;
  }

  .caption {
    font-size: 25px;
    font-weight: 600;
    background-color: ${colors.secondary};
    margin: 10px 0;
    padding: 5px 19px;
  }
`;

export default Aside;
