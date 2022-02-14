import React from "react";
import styled from "styled-components";

export default function UList({ data }) {
  return (
    <Container>
      {React.Children.toArray(data.map((item) => <li>{item}</li>))}
    </Container>
  );
}

const Container = styled.ul`
  list-style: url("/images/icons/list.svg");
  li {
    list-style-position: inside;
    list-style-type: none;
    color: var(--gray-deep);
    padding: 8px 0;
    line-height: 90%;
    /* display: flex;
    align-items: center; */
    /* &::marker {
    } */
  }
`;
