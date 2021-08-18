import React from "react";
import styled from "styled-components";

function Contact({ title, content }) {
  return (
    <Wrapper>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 3px 10px;
  padding: 5px 10px;

  .title {
    text-transform: capitalize;
    font-weight: 700;
    margin-bottom: 3px;
  }
`;

export default Contact;
