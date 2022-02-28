import styled from "styled-components";

export const PricingContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  background-image: url("/images/bg/bg_assets.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 100vh;
  z-index: 1;
  @media (max-width: 768px) {
    background-image: url("/images/bg/tab_bg_assets.svg");
  }
  @media (max-width: 548px) {
    background-image: url("/images/bg/m_bg_assets.svg");
  }
  .section {
    &_amplifyNFTGame {
      display: grid;
      grid-template-columns: 8fr 4fr;
      align-items: center;
      padding: 85px 92px 60px;
      @media (max-width: 768px) {
        padding: 50px 32px;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 548px) {
        display: flex;
        flex-direction: column-reverse;
        padding: 45px 20px;
        gap: 50px;
      }
      &__element {
        h1 {
          font: var(--h1);
          color: var(--gray);
          margin-bottom: 24px;
        }
        p {
          font: var(--p-xl);
          color: var(--gray-deep);
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
    &_lowestTransactionCosts {
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 50px 40px;
      }
      @media (max-width: 548px) {
        padding: 48px 20px;
      }
      h2 {
        font: var(--h2);
        color: var(--gray);
        margin-bottom: 24px;
      }
      p {
        font: var(--p-l);
        color: var(--gray-deep);
        margin-bottom: 106px;
      }
      img {
        width: 100%;
        height: auto;
        margin-bottom: 61px;
      }
      &__element {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 61px;
        &_box {
          display: flex;
          align-items: center;
          gap: 24px;
          color: var(--gray-deep);
          font: var(--p-l);
          span {
            height: 2px;
            width: 56px;
            background-color: #e3e3e3;
          }
          &:nth-child(1) {
            span {
              background-color: #efcb30;
            }
          }
          &:nth-child(2) {
            span {
              background-color: #15e6c0;
            }
          }
          &:nth-child(3) {
            span {
              background-color: rgba(255, 153, 158, 0.66);
            }
          }
        }
      }
    }
  }
`;
