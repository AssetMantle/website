import styled from "styled-components";

export const AboutContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  z-index: 1;
  .section {
    &_hero {
      padding: 0px 92px 0px;
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
      &__element {
        &_title {
          font: var(--h1);
          color: var(--yellow);
          padding: 12px 0;
          text-transform: capitalize;
          @media (max-width: 548px) {
            font: var(--h2);
          }
        }
        &_details {
          font: var(--p-l);
          color: var(--gray-deep);
          padding: 12px 0;
          text-align: justify;
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
      padding: 60px 92px;
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