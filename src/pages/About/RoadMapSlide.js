import React from "react";
import styled from "styled-components";

export default function RoadMapSlide({
  image,
  title = "Phase 00 UNEARTH",
  list,
}) {
  return (
    <Container>
      <div className="roadMapSlide_image">
        <img src={`/images/about/${image}`} alt={title} />
      </div>
      <div className="roadMapSlide_details">
        <h1>{title}</h1>
        <ul>{React.Children.toArray(list.map((data) => <li>{data}</li>))}</ul>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: min(805px, 100%);
  margin: auto;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
  }
  @media (max-width: 548px) {
    grid-template-columns: 1fr;
    padding: 20px 30px;
  }
  .roadMapSlide {
    &_image {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: min(300px, 100%);
        height: auto;
        margin: auto;
      }
    }
    &_details {
      h1 {
        font: 600 var(--h1);
        color: var(--yellow);
        max-width: 190px;
        padding-bottom: 20px;
        padding: 0 !important;
      }
      ul {
        padding-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        li {
          position: relative;
          list-style-type: none;
          color: var(--gray);
          font: 600 var(--p-m);
          padding-left: 25px;
          &:before {
            content: "";
            width: 12px;
            height: 12px;
            background: #f3b211;
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),
              inset -2px -2px 4px rgba(0, 0, 0, 0.25), inset 2px 2px 4px #ffdc87;
            border-radius: 2.69191px;
            transform: rotate(-45deg);
            position: absolute;
            left: 0;
            top: 7px;
          }
        }
      }
    }
  }
`;
