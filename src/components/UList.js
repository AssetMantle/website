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
  display: flex;
  flex-direction: column;
  gap: 24px;
  li {
    position: relative;
    list-style-type: none;
    color: var(--gray-deep);
    font: var(--p-m);
    padding-left: 25px;
    &:before {
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
      left: 0;
      top: 5px;
      background-image: url("/images/icons/list.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;
