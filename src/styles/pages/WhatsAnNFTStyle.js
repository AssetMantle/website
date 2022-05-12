import styled from "styled-components";

export const WhatsAnNFTContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  z-index: 1;
  .section {
    &_whatIsNFT {
      display: grid;
      grid-template-columns: 3fr 2fr;
      gap: 20px;
      padding: 114px 92px 80px;
      @media (max-width: 768px) {
        padding: 80px 40px;
      }
      @media (max-width: 548px) {
        padding: 40px 20px;
        grid-template-columns: 1fr;
      }
      &__element {
        h1 {
          color: var(--gray);
          margin-bottom: 40px;
          text-transform: capitalize;
        }
        p {
          font: var(--p-l);
          color: var(--gray-deep);
        }
        &:nth-child(2) {
          display: flex;
          img {
            width: min(100%, 367px);
            height: auto;
            margin: auto;
          }
        }
      }
    }
    &_valueProps {
      padding: 80px 92px;
      @media (max-width: 768px) {
        padding: 80px 40px;
      }
      @media (max-width: 548px) {
        padding: 40px 20px;
      }
      h2 {
        color: var(--gray);
        margin-bottom: 24px;
        text-transform: capitalize;
      }
      p {
        font: var(--p-l);
        color: var(--gray-deep);
        &.des {
          margin-bottom: 60px;
        }
      }
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 25px;
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
      }
    }
    &_realWorldAssets {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 100px;
      padding: 80px 92px;
      padding-right: 0;
      @media (max-width: 768px) {
        padding: 80px 40px;
        padding-right: 0;
      }
      @media (max-width: 548px) {
        padding: 40px 20px;
        grid-template-columns: 1fr;
      }
      h2 {
        color: var(--gray);
        text-transform: capitalize;
        margin-bottom: 24px;
      }
      p {
        font: var(--p-l);
        color: var(--gray-deep);
        margin-bottom: 60px;
      }
      &__element {
        &:nth-child(1) {
          max-width: 592px;
        }
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    &_usdSpent {
      padding: 80px 92px;
      @media (max-width: 768px) {
        padding: 80px 40px;
      }
      @media (max-width: 548px) {
        padding: 40px 20px;
      }
      h2 {
        color: var(--gray);
        text-transform: capitalize;
        margin-bottom: 24px;
      }
      p {
        font: var(--p-l);
        color: var(--gray-deep);
        margin-bottom: 31px;
        &.sec {
          font: var(--p-m);
          padding-top: 40px;
          padding-bottom: 8px;
          margin: 0;
        }
      }
      &__element {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 38px;
        margin-bottom: 34px;
        @media (max-width: 548px) {
          gap: 20px;
        }
        h5 {
          color: var(--gray);
          &.active {
            color: var(--yellow);
          }
        }
      }
      img {
        width: 100%;
      }
    }
    &_letsAmplify {
      background-color: var(--dark-m);
      padding: 60px 92px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: no-wrap;
      gap: 50px;
      margin: 60px 0;
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
          @media (max-width: 548px) {
            width: 100%;
            text-align: center;
          }
          & > a {
            width: max-content;
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
    &_howItWorks {
      padding: 80px 92px;
      @media (max-width: 768px) {
        padding: 80px 40px;
      }
      @media (max-width: 548px) {
        padding: 40px 20px;
      }
      h2 {
        color: var(--gray);
        text-transform: capitalize;
        margin-bottom: 24px;
      }
      p {
        font: var(--p-l);
        color: var(--gray-deep);
        margin-bottom: 60px;
        max-width: 936px;
      }
      &__element {
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 40px;
        &_option {
          max-width: 219px;
          text-align: center;
          h3 {
            color: var(--gray);
            margin-top: 30px;
            margin-bottom: 24px;
          }
          p {
            font: var(--p-m);
            color: var(--gray-deep);
          }
        }
      }
    }
    &_lowCostMint {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      gap: 40px;
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 50px 40px;
        gap: 20px;
      }
      @media (max-width: 548px) {
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 48px 20px;
      }
      &__element {
        h2 {
          font: var(--h2);
          color: var(--gray);
          margin-bottom: 24px;
        }
        p {
          font: var(--p-l);
          color: var(--gray-deep);
          max-width: 536px;
        }
      }
      &__element:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 60px;
        background-color: var(--dark-m);
        border-radius: 12px;
        box-shadow: var(--dark-shadow);
        h1 {
          font: var(--h1);
          color: var(--gray);
          margin-bottom: 71px;
          text-transform: capitalize;
          text-align: center;
          @media (max-width: 768px) {
            margin-bottom: 50px;
          }
          @media (max-width: 548px) {
            margin-bottom: 20px;
          }
        }
        img {
          width: min(261.72px, 100%);
        }
        p {
          margin-top: 84px;
          font: var(--p-xl);
          color: var(--gray-deep);
          text-align: center;
          @media (max-width: 768px) {
            margin-top: 50px;
          }
          @media (max-width: 548px) {
            margin-top: 20px;
          }
        }
        @media (max-width: 768px) {
          padding: 40px;
        }
        @media (max-width: 548px) {
          padding: 20px;
        }
      }
    }
    &_mintYourNFT {
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 60px 40px;
      }
      @media (max-width: 548px) {
        padding: 40px 20px;
      }
      h2 {
        color: var(--gray);
        text-transform: capitalize;
        margin-bottom: 24px;
      }
      p {
        font: var(--p-l);
        color: var(--gray-deep);
        max-width: 936px;
        margin-bottom: 60px;
      }
      ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
      }
    }
    &_communityGuidelines {
      padding: 60px 92px;
      margin-bottom: 100px;
      @media (max-width: 768px) {
        padding: 60px 40px;
      }
      @media (max-width: 548px) {
        padding: 40px 20px;
        margin-bottom: 60px;
      }
      h2 {
        color: var(--gray);
        text-transform: capitalize;
        margin-bottom: 24px;
      }
      p {
        font: var(--p-l);
        color: var(--gray-deep);
        max-width: 936px;
        margin-bottom: 60px;
      }
      ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
        p {
          margin-bottom: 15px;
        }
      }
    }
  }
`;
