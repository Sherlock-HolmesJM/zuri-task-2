import React from "react";
import styled from "styled-components";
import CertDate from "./certDate";
import CertContent from "./certContent";

function WorkExperience({ jobTitle, employer, city, state, contents, dates }) {
  return (
    <Wrapper>
      <CertDate dates={dates} />
      <CertContent>
        <div className="title">{jobTitle}</div>
        <div className="employer">
          {employer}, {city}, {state}
        </div>
        <ul className="ul">
          {contents.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
      </CertContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 20px;

  .title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .ul {
    margin-top: 5px;
  }
`;

export default WorkExperience;
