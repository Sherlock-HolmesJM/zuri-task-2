// @ts-nocheck
import React from "react";
import styled from "styled-components";

import { colors } from "../../config";

function Skill({ title, rating }) {
  const ratings = ["Poor", "Not Bad", "Good", "Very Good", "Excellent"];
  const rate = rating < 1 || rating > 5 ? 0 : rating - 1;

  return (
    <Wrapper rating={rating}>
      <div className="title">{title}</div>
      <div className="progress-bar">
        <div
          className="thumb"
          data-aos="thumb-progress"
          data-aos-duration={1000}
        ></div>
      </div>
      <div className="rating" data-aos="zoom-in-left" data-aos-duration={1000}>
        {ratings[rate]}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 10px;
  padding: 0 10px;
  padding-top: 5px;

  .title,
  .rating {
    font-weight: 400;
  }

  .title {
    font-size: 18px;
    margin-bottom: 3px;
  }

  .rating {
    font-size: 16px;
    text-align: right;
  }

  .progress-bar,
  .thumb {
    height: 10px;
  }
  .progress-bar {
    position: relative;
    background-color: ${colors.secondary};
  }

  .thumb {
    position: absolute;
    top: -1px;
    background: ${colors.white};
    width: ${(props) => `${props.rating * 20}%`};
    border: 1px solid white;
  }

  /* ==== Custom aos animations ==== */

  [data-aos="thumb-progress"] {
    width: 0;
    background-color: ${colors.primary};
    transition-property: width, background-color;

    &.aos-animate {
      width: ${(props) => `${props.rating * 20}%`};
      background: ${colors.primary};
    }
  }
`;

export default Skill;
