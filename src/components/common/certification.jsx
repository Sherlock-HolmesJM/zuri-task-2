import React from "react";
import styled from "styled-components";

function Certification({
  title = "",
  content = undefined,
  location = undefined,
  dates = undefined,
}) {
  return (
    <Wrapper data-aos="fade-in" data-aos-duration={1000} data-aos-once={true}>
      <div className="dates">
        {dates && dates.start} {dates && "-"} {dates && dates.end}
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div>{location}</div>
        <ul>
          {content && content.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 20px;

  .dates {
    width: 130px;
    margin-right: 10px;
    margin-bottom: 5px;
  }

  .content {
    width: 100%;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export default Certification;
