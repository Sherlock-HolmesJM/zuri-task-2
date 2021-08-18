import React from "react";
import styled from "styled-components";

import CertDate from "./certDate";
import CertContent from "./certContent";

function Education({ degree, course, school, location, dates }) {
  return (
    <Wrapper>
      <CertDate dates={dates} />
      <CertContent>
        <div className="title">
          {degree}: {course}
        </div>
        <div>
          {school} - {location}
        </div>
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

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export default Education;
