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
      gap: 20px;
      align-items: center;
      padding: 85px 92px 60px;
      @media (max-width: 768px) {
        padding: 50px 32px;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 548px) {
        display: flex;
        flex-direction: column;
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
        &:first-child {
          @media (min-width: 549px) {
            padding-right: 60px;
          }
        }
        &:nth-child(2) {
          position: relative;
          padding-bottom: 60px;
          /* padding-left: 60px; */
          /* min-height: 400px; */
          @media (max-width: 548px) {
            padding: 10px;
            padding-left: 25px;
            padding-right: 0;
          }
          .section_stores__element_card {
            @media (max-width: 548px) {
              width: min(90%, 374px);
            }
            &:nth-child(1) {
              z-index: 1;
              position: absolute;
              top: 0px;
              right: 0px;
              animation-fill-mode: both;
              &:hover {
                animation: upDown 200ms ease-in-out;
                animation-fill-mode: both;
                @keyframes upDown {
                  0% {
                    transform: translateY(0px);
                    z-index: 1;
                  }
                  50% {
                    transform: translateY(-200px);
                    z-index: 3;
                  }
                  100% {
                    z-index: 3;
                    transform: translateY(0px);
                  }
                }
              }
            }
            &:nth-child(2) {
              z-index: 2;
              position: absolute;
              top: 60px;
              right: 60px;
              @media (max-width: 548px) {
                top: 25px;
                right: 25px;
              }
            }
            &:nth-child(3) {
              opacity: 0;
              .section_stores__element_card__profile {
                display: flex;
              }
              /* @media (max-width: 548px) {
                display: none;
              } */
            }
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
    &_lowestTransactionCosts {
      padding: 60px 92px;
      margin-bottom: 100px;
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
    &_jumpRightIn,
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
    &_convincing {
      display: grid;
      grid-template-columns: 2fr 8fr 2fr;
      margin-bottom: 20px;
      gap: 30px;
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 60px 40px;
        grid-template-columns: 2fr 8fr 1fr;
      }
      @media (max-width: 548px) {
        padding: 60px 28px;
        grid-template-columns: 1fr;
      }
      &__element {
        &:first-child {
          img {
            width: 100%;
          }
          @media (max-width: 768px) and (min-width: 549px) {
            width: 120px;
            margin: auto 0;
          }
          @media (max-width: 548px) {
            width: 180px;
            margin: auto;
            margin-bottom: 30px;
          }
        }
        h2 {
          font: var(--h2);
          color: var(--gray);
          margin-bottom: 24px;
        }
        p {
          font: var(--p-l);
          color: var(--gray-deep);
        }
        &:last-child {
          display: flex;
          margin: auto;
          @media (max-width: 548px) {
            width: 100%;
            text-align: center;
          }
          & > a {
            width: 166.02px;
            height: max-content;
            margin: auto 0;
            @media (max-width: 548px) {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 768px) {
            margin-top: 30px;
          }
        }
      }
    }
    &_getPaid {
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 60px 40px;
      }
      @media (max-width: 548px) {
        padding: 60px 28px;
      }
      h2 {
        font: var(--h2);
        color: var(--gray);
        margin-bottom: 24px;
      }
      h3 {
        font: var(--h3);
        color: var(--gray);
        text-transform: capitalize;
        margin: 24px 0;
        margin-top: 120px;
      }
      p {
        font: var(--p-l);
        color: var(--gray-deep);
        margin-bottom: 89px;
        max-width: 615px;
      }
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        @media (max-width: 768px) {
        }
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
        li {
          padding-top: 0;
          padding-bottom: 0;
          h3 {
            margin: 0;
            margin-bottom: 12px;
          }
          p {
            margin-bottom: 20px;
          }
        }
      }
    }
    &_acceptedCurrencies {
      padding: 60px 92px 100px;
      @media (max-width: 768px) {
        padding: 60px 40px 80px;
      }
      @media (max-width: 548px) {
        padding: 60px 28px;
      }
      h2 {
        font: var(--h2);
        color: var(--gray);
        margin-bottom: 24px;
      }
      p {
        font: var(--p-l);
        color: var(--gray-deep);
        margin-bottom: 60px;
        max-width: 615px;
      }
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
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
      }
    }
  }
`;
