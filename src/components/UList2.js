import React from "react";
import styled from "styled-components";

export default function UList2({ data }) {
  return (
    <Container className="list___2">
      {React.Children.toArray(
        data.map((item) => (
          <li className="list___2_li">
            <h3 className="list___2_li__title">{item.title}</h3>
            {item.body && <p className="list___2_li__body">{item.body}</p>}
          </li>
        ))
      )}
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
    h3 {
      font: var(--h3);
      color: var(--gray);
      text-transform: capitalize;
      margin: 0;
      margin-bottom: 12px;
    }
    p {
      font: var(--p-m);
      color: var(--gray-deep);
      margin: 0;
      margin-bottom: 15px;
    }
  }
`;
