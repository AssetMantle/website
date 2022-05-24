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
      min-height: 100vh;
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
      &.height-auto {
        min-height: auto;
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
        &.pushed {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 30px 0;
        }
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
        iframe {
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
        img {
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
            width: min(427px, 100%);
            height: auto;
          }
        }
      }
      &__element {
        max-width: 627px;
        h1 {
          font: 600 var(--h1);
          color: var(--yellow);
        }
        p {
          text-align: left;
          padding-top: 16px;
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
      /* margin: 60px 0 30px; */
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
      position: relative;
      h1 {
        font: 600 var(--h1);
        color: var(--yellow);
        padding: 80px 92px 24px;
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
            z-index: 10;
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
        position: absolute;
        bottom: 0;
        width: 100%;
        font: var(--p-s);
        color: var(--gray);
        text-align: right;
        padding: 16px 100px;
        @media (max-width: 768px) {
          padding: 16px 50px;
        }
        @media (max-width: 548px) {
          padding: 16px 20px;
        }
      }
    }
    &_team {
      padding: 80px 70px 60px;
      @media (max-width: 768px) {
        padding: 40px;
      }
      @media (max-width: 548px) {
        padding: 20px;
      }
      h2 {
        font: 600 var(--h2);
        color: var(--yellow);
        margin-bottom: 8px;
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
