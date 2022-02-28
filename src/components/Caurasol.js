import React from "react";

import { Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import styled from "styled-components";

const Caurasol = ({ children, option }) => {
  return <Container>{children}</Container>;
};

const Container = styled(Splide)`
  button {
    &.splide__arrow {
      background-color: transparent;
      background-image: url("/images/landing/triangle.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      top: 50%;
      height: 20px;
      aspect-ratio: 4/3;
      border-radius: 0;
      &.splide__arrow--prev {
        left: -24px;
      }
      &.splide__arrow--next {
        right: -24px;
        transform: rotate(180deg);
        top: 46.9%;
      }
      svg {
        opacity: 0;
      }
    }
  }
`;

export default Caurasol;
