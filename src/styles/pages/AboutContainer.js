import styled from "styled-components";

export const AboutContainer = styled.main`
  max-width: 1440px;
  scroll-behavior: smooth;
  margin: 0 auto;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  background-color: var(--bg);
  background-image: url("/images/bg/bg_big.webp");
  background-size: 100%;
  background-position: top left;
  background-repeat: no-repeat repeat;
  background-attachment: scroll;
  @media (min-width: 1441px) {
    background: none;
  }
  @media (min-width: 769px) {
    scroll-snap-type: y mandatory;
    .smoothScrollElement {
      max-width: 1440px;
      margin: auto;
      padding: 0;
      margin: 0;
      scroll-snap-align: start;
      min-height: 900px;
      width: calc(100vw - 5px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      &.center {
        justify-content: center;
      }
      &:last-child {
        scroll-snap-align: end;
      }
      & > * {
        width: 100%;
      }
    }
  }
  @media (prefers-reduced-motion: reduce) {
    scroll-snap-type: none;
    & > .smoothScrollElement {
      scroll-snap-align: none;
    }
  }
  .section {
    &_hero {
      position: relative;
      padding: 0px 92px 0px;
      display: grid;
      grid-template-columns: 3fr 4fr;
      align-items: center;
      justify-content: center;
      gap: 70px;
      @media (max-width: 768px) {
        padding: 20px 40px;
        grid-template-columns: 1fr 2fr;
      }
      @media (max-width: 548px) {
        padding: 20px 30px;
        grid-template-columns: 1fr;
      }
      &__element {
        &_title {
          font: var(--h1);
          color: var(--yellow);
          padding: 12px 0;
          text-transform: capitalize;
          max-width: 335px;
          @media (max-width: 548px) {
            font: var(--h2);
            max-width: 100%;
          }
        }
        &_details {
          font: var(--p-l);
          color: var(--gray-deep);
          padding: 12px 0;
        }
        iframe{
          width: 100%;
          height: auto;
          aspect-ratio: 16/9;
          border-radius: 12px;
        }
        img {
          width: 100%;
          height: auto;
          transform: translateX(30px);
          @media (max-width: 548px) {
            transform: translateX(0);
          }
        }
      }
      &__animatedDown {
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        animation: upDown 2000ms cubic-bezier(1, 0.71, 0, 0.43) infinite;
        @keyframes upDown {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        img{
          cursor: pointer;
        }
        @media (max-width: 548px) {
          display: none;
        }
      }
    }
    &_visionMission {
      padding: 60px 92px 30px;
      @media (max-width: 768px) {
        padding: 40px;
      }
      @media (max-width: 548px) {
        padding: 20px;
      }
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      gap: 30px;
      @media (max-width: 768px) {
        padding: 20px 40px;
        grid-template-columns: 2fr 1fr;
      }
      @media (max-width: 548px) {
        padding: 20px 30px;
        grid-template-columns: 1fr;
      }
      &_grid {
        &:first-child {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-direction: column;
          gap: 68px;
        }
        &:last-child {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          img {
            width: min(447px, 100%);
          }
        }
      }
      &__element {
        max-width: 627px;
        h1 {
          font: var(--h1);
          color: var(--yellow);
        }
        p {
          text-align: justify;
          padding-top: 28px;
          font: var(--p-l);
          color: var(--gray-deep);
        }
      }
    }
    &_whitepaper {
      background-image: url("/images/bg/gradient_bg.png");
      background-size: 100%;
      background-repeat: no-repeat repeat;
      padding: 60px 92px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: no-wrap;
      gap: 50px;
      margin: 60px 0 30px;
      @media (max-width: 768px) {
        padding: 60px 40px;
      }
      @media (max-width: 548px) {
        flex-wrap: wrap;
        padding: 60px 28px;
      }
      &__element {
        &:nth-child(1) {
          width: min(936px, 100%);
        }
        h2 {
          font: var(--h2);
          color: var(--gray);
          margin-bottom: 24px;
          @media (max-width: 548px) {
            margin-bottom: 30px;
          }
        }
        p {
          font: var(--p-l);
          margin: 0;
          color: var(--gray-deep);
        }
        &.bu {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          @media (max-width: 548px) {
            width: 100%;
            grid-template-columns: repeat(1, 1fr);
            text-align: center;
          }
          & > a {
            width: 185px;
            text-align: center;
            display: inline-block;
            @media (max-width: 548px) {
              width: 100%;
              text-align: center;
            }
          }
        }
      }
      .btn__primary {
        @media (max-width: 548px) {
          width: 100%;
          text-align: center;
        }
      }
    }
    &_roadmap {
      h1 {
        font: var(--h1);
        color: var(--yellow);
        padding: 100px 93px 60px;
        @media (max-width: 768px) {
          padding: 40px;
        }
        @media (max-width: 548px) {
          padding: 20px;
        }
      }
      &__slide {
        background-image: url("/images/bg/gradient_bg.png");
        background-size: 100%;
        background-repeat: no-repeat repeat;
        padding: 43px 100px 74px;
        @media (max-width: 768px) {
          padding: 43px 50px 74px;
        }
        @media (max-width: 548px) {
          padding: 43px 20px 74px;
        }
        &_element {
          position: relative;
          &__phase {
            width: 100%;
            min-height: 475px;
            overflow: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: relative;
            &::-webkit-scrollbar {
              display: none;
            }
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none;
            width: 100%;
          }
          &_left_button,
          &_right_button {
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            @media (max-width: 548px) {
              img {
                width: 20px;
                height: auto;
              }
            }
          }
          &_left_button {
            left: 0;
            @media (max-width: 548px) {
              left: -10px;
            }
          }
          &_right_button {
            right: 0;
            @media (max-width: 548px) {
              right: -10px;
            }
          }
        }
      }
      &__note {
        font: var(--p-s);
        color: var(--gray);
        text-align: right;
        padding: 38px 100px 115px;
        @media (max-width: 768px) {
          padding: 38px 50px 74px;
        }
        @media (max-width: 548px) {
          padding: 38px 20px 74px;
        }
      }
    }
    &_whyBetter {
      padding: 30px 92px;
      @media (max-width: 768px) {
        padding: 40px;
      }
      @media (max-width: 548px) {
        padding: 20px;
      }
      h2 {
        font: var(--h2);
        color: var(--yellow);
        margin-bottom: 24px;
        text-transform: capitalize;
      }
      p {
        font: var(--p-l);
        color: var(--gray-deep);
        margin-bottom: 24px;
        max-width: 1096px;
      }
      &__image {
        width: 100%;
        padding-top: 24px;
        overflow-x: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
        img {
          height: auto;
          @media (min-width: 1025px) {
            width: 100%;
          }
        }
      }
      &__list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        list-style: none;
        padding-top: 40px;
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
        li {
          display: flex;
          gap: 19px;
          .li {
            color: var(--yellow);
            font: var(--p-m);
            padding-top: 4px;
          }
          p {
            font: 600 var(--p-l);
            color: var(--gray);
            display: grid;
            gap: 8px;
            .li__details {
              font: var(--p-m);
              color: var(--gray-deep);
              text-align: justify;
            }
          }
        }
      }
    }
    &_whyStore {
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 40px;
      }
      @media (max-width: 548px) {
        padding: 20px;
      }
      &__title {
        font: var(--h2);
        color: var(--gray);
        margin-bottom: 24px;
        text-transform: capitalize;
      }
      &__details {
        font: var(--p-l);
        color: var(--gray-deep);
        margin-bottom: 24px;
        max-width: 935px;
      }
      &__grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-top: 60px;
        gap: 24px;
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
      }
      &__element {
        h3 {
          font: var(--h3);
          color: var(--gray);
          margin-bottom: 24px;
          text-transform: capitalize;
        }
        p {
          font: var(--p-m);
          color: var(--gray-deep);
          text-align: justify;
        }
      }
    }
    &_right {
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 40px;
      }
      @media (max-width: 548px) {
        padding: 20px;
      }
      &__title {
        font: var(--h2);
        color: var(--gray);
        margin-bottom: 24px;
        text-transform: capitalize;
      }
      &__details {
        font: var(--p-l);
        color: var(--gray-deep);
        margin-bottom: 24px;
        max-width: 935px;
      }
      &__grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-top: 60px;
        gap: 24px;
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
      }
      &__element {
        display: flex;
        gap: 24px;
        &_img {
          img {
            width: 60px;
            height: auto;
          }
        }
        &_details {
          h3 {
            font: var(--h3);
            color: var(--gray);
            margin-bottom: 8px;
            text-transform: capitalize;
          }
          p {
            font: var(--p-s);
            color: var(--gray-deep);
            text-align: justify;
          }
        }
      }
    }
    &_VP {
      display: grid;
      grid-template-columns: 3fr 2fr;
      padding: 60px 92px;
      gap: 40px;
      justify-content: space-between;
      @media (max-width: 768px) {
        padding: 40px;
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 548px) {
        padding: 20px;
        grid-template-columns: 1fr;
      }
      &__element {
        display: grid;
        grid-template-columns: 1fr;
        gap: 54px;
        align-items: center;
        justify-content: space-between;
        h2 {
          font: var(--h2);
          color: var(--gray);
          margin-bottom: 24px;
          text-transform: capitalize;
        }
        p {
          font: var(--p-l);
          color: var(--gray-deep);
          text-align: justify;
          a {
            color: var(--yellow);
            text-decoration: none;
            span {
              &:first-child {
                display: inline-block;
              }
              &:last-child {
                display: none;
              }
              &:hover {
                &:first-child {
                  display: none;
                }
                &:last-child {
                  display: flex;
                }
              }
            }
          }
        }
        img {
          width: 100%;
          height: auto;
        }
        &:last-child {
          max-width: 346px;
          margin: auto;
          @media (min-width: 648px) {
            margin: 0;
            margin-left: auto;
          }
          p {
            text-align: center;
          }
        }
      }
    }
    &_team {
      padding: 100px 70px 60px;
      @media (max-width: 768px) {
        padding: 40px;
      }
      @media (max-width: 548px) {
        padding: 20px;
      }
      h2 {
        font: var(--h2);
        color: var(--yellow);
        margin-bottom: 24px;
        text-transform: capitalize;
        + p {
          font: var(--p-l);
          color: var(--gray-deep);
          margin-bottom: 24px;
          max-width: 935px;
          text-align: justify;
        }
      }
      h3 {
        font: var(--h3);
        color: var(--gray);
        padding: 24px 0;
      }
      &__container {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        align-items: flex-start;
        justify-content: center;
        padding: 24px 0;
      }
    }
  }
`;
