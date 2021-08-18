import React from "react";
import styled from "styled-components";

function CertContent(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
`;

export default CertContent;
