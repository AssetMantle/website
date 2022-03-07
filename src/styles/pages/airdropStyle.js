import styled from "styled-components";

export const AirdropContainer = styled.main`
  max-width: 1440px;
  scroll-behavior: smooth;
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
    &_hero {
      display: grid;
      grid-template-columns: 3fr 2fr;
      align-items: center;
      gap: 70px;
      padding: 138px 92px 60px;
      @media (max-width: 768px) {
        padding: 100px 40px 60px;
      }
      @media (max-width: 548px) {
        padding: 60px 20px;
        grid-template-columns: 1fr;
      }
      &__element {
        h1 {
          color: var(--gray);
          padding-bottom: 40px;
        }
        p {
          font: var(--p-xl);
          color: var(--gray-deep);
          max-width: 600px;
        }
        &:last-child {
          position: relative;
          display: flex;
          flex-direction: column;
          img {
            width: 100%;
            height: auto;
            &:nth-child(2) {
              position: absolute;
              top: 60px;
              right: 60px;
            }
          }
        }
      }
    }
    &_wallets {
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 60px 40px;
      }
      @media (max-width: 548px) {
        padding: 60px 20px;
      }
      p {
        color: var(--gray-deep);
        font: var(--p-m);
        padding-bottom: 24px;
        &:nth-child(1),
        &:nth-child(3) {
          font: var(--p-l);
        }
      }
      &__buttons {
        display: flex;
        gap: 24px;
        padding-bottom: 24px;
        @media (max-width: 548px) {
          flex-direction: column;
        }
        &_button {
          border-radius: 12px;
          background: var(--yellow-gradient-bg);
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
            inset -4px -4px 8px rgba(0, 0, 0, 0.25), inset 4px 4px 8px #ffc942;
          padding: 10px 22px 9px;
          display: flex;
          gap: 8px;
          align-items: center;
          justify-content: center;
          font: 600 var(--p-m);
          color: var(--dark-m);
          img {
            height: 26.25px;
          }
          @media (max-width: 548px) {
            width: 100%;
          }
        }
      }

      &__form {
        display: flex;
        align-items: center;
        gap: 16px;
        width: min(964px, 100%);
        &_input {
          flex: 1;
          border: 1px solid var(--gray);
          border-radius: 12px;
          padding: 12px 9px;
          padding-left: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font: var(--input);
          input {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            color: var(--gray);
            &::placeholder {
              color: var(--gray-deep);
            }
          }
          img {
            height: 28px;
            width: 28px;
          }
        }
        button {
          font: 600 var(--p-m);
          color: var(--yellow);
          background: transparent;
          border: 2px solid var(--yellow);
          border-radius: 12px;
          padding: 10px 37.5px 12px;
          cursor: pointer;
          width: max-content;
          color: var(--yellow);
          text-decoration: none;
          &:hover,
          &:focus {
            box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
          }
        }
      }
    }
    &_drops {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 60px 40px;
      }
      @media (max-width: 548px) {
        padding: 60px 20px;
        grid-template-columns: 1fr;
      }
      &__drop {
        padding: 40px;
        border-radius: 12px;
        background: var(--dark-s);
        box-shadow: var(--dark-shadow);
        position: relative;
        &_title {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          color: var(--gray);
          padding-bottom: 8px;
        }
        &_title + p {
          padding-bottom: 40px;
        }
        p {
          font: var(--p-m);
          color: var(--gray-deep);
          font-weight: 600;
        }
        &_value {
          display: flex;
          align-items: center;
          gap: 10px;
          h4 {
            color: var(--yellow);
          }
        }
        img {
          position: absolute;
          height: 53px;
          width: 53px;
          bottom: 26px;
          right: 26px;
        }
      }
    }
  }
`;
