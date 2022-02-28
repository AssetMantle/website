import React from "react";
import styled from "styled-components";

const Details = ({ title, details }) => {
  return (
    <Container tabIndex="0">
      <summary>
        {title}
        <span>
          <img src="/images/landing/triangle.svg" alt="dropdown" />
        </span>
      </summary>
      <p className="details">{details}</p>
    </Container>
  );
};

const Container = styled.details`
  color: var(--gray-deep);
  padding: 40px 0;
  position: relative;
  summary {
    font: 600 var(--p-m);
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    outline: none;
    list-style: none;
    &::-webkit-details-marker {
      display: none;
    }
    span {
      width: 16px;
      height: max-content;
      transform: rotate(-90deg);
      transform-origin: center;
      transition: transform 0.3s ease-in-out;
      img {
        width: 16px;
        height: 12px;
      }
    }
  }
  p.details {
    font: var(--p-s);
    max-width: 94%;
    margin: 0;
    margin-top: 12px;
  }
  &[open] {
    summary {
      span {
        transform: rotate(90deg);
      }
    }
  }
`;

export default Details;
