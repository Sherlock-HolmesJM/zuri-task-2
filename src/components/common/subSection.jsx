import React from "react";
import styled from "styled-components";

import { colors } from "../../config";

function SubSection({ title }) {
  return (
    <Wrapper>
      <div
        className="section-child"
        data-aos="line-right"
        data-aos-duration={1000}
      ></div>
      <div className="section-text" data-aos="fade" data-aos-duration={2000}>
        {title}
      </div>
      <div
        className="section-child"
        data-aos="line-right"
        data-aos-duration={1000}
      ></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 0;
  margin: 5px 20px;

  .section-text {
    margin: 10px 0;
  }

  .section-child {
    position: absolute;
    right: 1px;
    height: 1px;
    background-color: ${colors.primary};
  }

  &:first-child {
    top: 1px;
  }

  &:last-child {
    bottom: 1px;
  }

  [data-aos="line-right"] {
    width: 0;
    transition-property: width;

    &.aos-animate {
      width: 100%;
    }
  }
`;

export default SubSection;
