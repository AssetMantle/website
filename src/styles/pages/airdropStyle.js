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
      padding: 120px 0 60px 92px;
      @media (max-width: 768px) {
        padding: 100px 0px 60px 40px;
      }
      @media (max-width: 548px) {
        padding: 60px 20px;
        grid-template-columns: 1fr;
      }
      &__element {
        h1 {
          color: var(--gray);
          padding-bottom: 40px;
          & + p {
            font: var(--p-xl);
            color: var(--gray-deep);
            max-width: 700px;
          }
        }
        &_readBlog {
          display: flex;
          align-items: center;
          padding-top: 40px;
          gap: 8px;
          flex-wrap: wrap;
          font: var(--p-l);
          &__text {
            color: var(--gray-deep);
          }
          &__button {
            color: var(--yellow);
            text-decoration: none;
          }
        }
        &:last-child {
          position: relative;
          display: flex;
          flex-direction: column;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
    &_drop {
      display: flex;
      flex-direction: column;
      gap: 40px;
      padding: 40px 92px;
      @media (max-width: 768px) {
        padding: 40px 40px;
      }
      @media (max-width: 650px) {
        padding: 40px 20px;
      }
      &__heading {
        display: flex;
        gap: 24px;
        align-items: center;
        h3 {
          font-size: 24px;
          color: var(--gray);
        }
        hr {
          flex: 1;
          min-width: 50px;
        }
      }
      &__element {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        @media (max-width: 1078px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 650px) {
          grid-template-columns: 1fr;
        }
        gap: 24px;
        &_details {
          position: relative;
          h3 {
            color: var(--gray);
            padding-bottom: 8px;
            & + p {
              font: 600 var(--p-m);
              color: var(--gray-deep);
              width: 320px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              @media (max-width: 548px) {
                width: 200px;
              }
            }
          }
          p {
            &:hover {
              & + span {
                display: flex;
              }
            }
          }
          span {
            position: absolute;
            top: 100%;
            display: none;
            left: 0px;
            width: 110%;
            padding: 10px;
            border-radius: 12px;
            background: var(--dark-m);
            color: var(--gray);
            font: 600 var(--p-s);
            z-index: 1;
            word-break: break-word;
            @media (max-width: 768px) {
              width: 90%;
            }
          }
        }
        &_value {
          text-align: center;
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          p {
            font: var(--p-m);
            color: var(--gray-deep);
          }
          h4 {
            color: var(--gray);
          }
        }
      }
      .sectionDropAdd {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 120%;
        padding-bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 768px) {
          flex-wrap: wrap;
        }
        span {
          &:first-child {
            color: #9d9d9d;
            word-break: break-word;
          }
          &:last-child {
            cursor: pointer;
            color: var(--yellow);
          }
        }
      }
      .section_wallets__form {
        padding: 0;
        padding-bottom: 24px;
        width: 100%;
        input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid var(--gray);
          border-radius: 12px;
          padding-left: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font: var(--input);
          background: transparent;
          outline: none;
          color: var(--gray);
          &::placeholder {
            color: var(--gray-deep);
          }
        }
      }
      .section_allocation {
        padding: 0;
        h3 {
          a {
            color: var(--yellow);
            text-decoration: none;
          }
        }
      }
      .section_allocation_by_network {
        padding: 0;
        padding-top: 24px;
      }
      &__button {
        display: flex;
        justify-content: flex-end;
        @media (max-width: 1078px) {
          justify-content: flex-start;
        }
        a,
        button {
          border: none;
          outline: none;
          width: 296px;
          margin: auto 0;
          display: inline;
          font: 600 var(--p-m);
          color: var(--dark-m);
          text-transform: capitalize;
          background: var(--yellow-gradient-bg);
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
            inset -4px -4px 8px rgba(0, 0, 0, 0.25), inset 4px 4px 8px #ffc942;
          border-radius: 12px;
          padding: 10px 74px 12px;
          transition: all ease-in-out 100ms;
          cursor: pointer;
          color: var(--dark-m);
          text-decoration: none;
          text-align: center;
          &:hover,
          &:focus {
            box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
          }
          @media (max-width: 548px) {
            width: 100%;
            padding: 10px 20px 12px;
          }
        }
        &.two {
          a {
            font: 600 var(--p-m);
            color: var(--yellow);
            background: transparent;
            border: 2px solid var(--yellow);
            border-radius: 12px;
            padding: 8px 63px 10px;
            cursor: pointer;
            color: var(--yellow);
            text-decoration: none;
            box-shadow: none;
            &:hover,
            &:focus {
              box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
            }
          }
        }
      }
    }
    &_wallets {
      /* padding: 0px 92px 10px;
      @media (max-width: 768px) {
        padding: 0px 40px 10px;
      }
      @media (max-width: 548px) {
        padding: 0px 20px 10px;
      } */
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
        /* padding-bottom: 24px; */
        @media (max-width: 548px) {
          flex-direction: column;
        }
        &_button {
          width: 296px;
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
          cursor: pointer;
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
        &:not(:last-child) {
          padding-bottom: 24px;
          button {
            display: none;
          }
          .section_wallets__form_input img {
            opacity: 0;
          }
        }
        @media (max-width: 651px) {
          flex-direction: column;
        }
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
          max-width: min(697.969px, 100%);
          @media (max-width: 651px) {
            width: 100%;
          }
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
          white-space: nowrap;
          @media (max-width: 651px) {
            width: 100%;
          }
          &:hover,
          &:focus {
            box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
          }
        }
      }
    }
    &_allocation {
      padding: 20px 92px 40px;
      @media (max-width: 768px) {
        padding: 20px 40px 40px;
      }
      @media (max-width: 650px) {
        padding: 20px 20px 40px;
      }
      h3 {
        color: var(--gray);
        padding-bottom: 24px;
      }
      &__element {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        border-radius: 12px;
        padding: 16px 40px 16px 15px;
        background: var(--dark-s);
        box-shadow: var(--dark-shadow);
        &_left {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        h4 {
          color: var(--gray);
        }
        p {
          font: var(--p-l);
          color: var(--gray-deep);
        }
      }
    }
    &_allocation_by_network {
      padding: 0px 92px 40px;
      @media (max-width: 768px) {
        padding: 0 40px 40px;
      }
      @media (max-width: 650px) {
        padding: 0px 20px 40px;
      }
      &__title {
        color: var(--gray-deep);
        padding-bottom: 16px;
      }
      &__element {
        background-color: var(--dark-s);
        box-shadow: var(--dark-shadow);
        border-radius: 12px;
        &_option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 24px 40px;
          @media (max-width: 548px) {
            padding: 24px 20px;
            flex-direction: column;
          }
          &:not(:last-child) {
            border-bottom: 1px solid var(--dark-xs);
          }
          h4 {
            color: var(--gray);
          }
          p {
            font: 600 var(--p-m);
            color: var(--gray);
          }
          &:first-child {
            h4 {
              color: var(--gray-deep);
            }
            p {
              font: var(--p-m);
              color: var(--gray-deep);
            }
          }
        }
      }
    }
  }
`;
