import React from "react";
import styled from "styled-components";

function CertDate({ dates }) {
  return (
    <Wrapper>
      {dates.start} - {dates.end}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 130px;
  margin-right: 10px;
`;

export default CertDate;
