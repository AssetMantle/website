import styled from "styled-components";

export const StakeDropContainer = styled.main`
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
    &_intro {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
      padding: 0px 0px 0px 92px;
      @media (max-width: 768px) {
        padding: 0px 0px 0px 40px;
      }
      @media (max-width: 548px) {
        padding: 60px 20px;
        grid-template-columns: 1fr;
      }
      &__element {
        h1 {
          color: var(--gray);
          padding-bottom: 16px;
        }
        p {
          color: var(--gray-deep);
        }
        &_subtitle {
          font: var(--p-xl);
          color: var(--gray-deep);
          padding-bottom: 40px;
        }
        &_description {
          font: var(--p-m);
          font-size: 18px;
          padding-bottom: 50px;
        }
        &_buttons {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          &_button {
            background-color: var(--dark-m);
            border-radius: 12px;
            padding: 21px 23px;
            color: var(--gray);
            border: none;
            font: var(--h5);
          }
        }
        img {
          width: 100%;
          height: auto;
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
      }
    }
    &_whatIs {
      padding: 40px 92px;
      @media (max-width: 768px) {
        padding: 40px;
      }
      @media (max-width: 548px) {
        padding: 40px 20px;
      }
      h1 {
        color: var(--gray);
        padding-bottom: 16px;
      }
      p {
        color: var(--gray-deep);
        font: var(--p-xl);
        padding-bottom: 40px;
      }
      &__element {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        align-items: center;
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    &_howItWorks {
      padding: 40px 92px;
      @media (max-width: 768px) {
        padding: 40px;
      }
      @media (max-width: 548px) {
        padding: 40px 20px;
      }
      h2 {
        color: var(--gray);
        padding-bottom: 24px;
        & + p {
          color: var(--gray-deep);
          font: var(--p-l);
          padding-bottom: 60px;
        }
      }
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
      }
    }
    &_explanation {
      padding: 40px 92px 60px;
      @media (max-width: 768px) {
        padding: 40px 40px 60px;
      }
      @media (max-width: 548px) {
        padding: 40px 20px 60px;
      }
      h3 {
        color: var(--gray);
        font-size: 24px;
        padding-bottom: 19px;
      }
      &__video {
        aspect-ratio: 16/9;
        width: 100%;
        height: auto;
        background-color: #2a2a2a;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &_availableStakeDrop {
      background-color: var(--dark-m);
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 60px;
      }
      @media (max-width: 548px) {
        padding: 60px 20px;
      }
      h2 {
        color: var(--gray);
        padding-bottom: 74px;
      }
      &__body {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 24px;
        @media (max-width: 768px) {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
        &_element {
          border: 1px solid var(--dark);
          background-color: var(--dark);
          border-radius: 12px;
          padding: 40px;
          position: relative;
          &__stat {
            display: none;
          }
          &__title {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 24px;
            padding-bottom: 36px;
            flex-wrap: wrap;
            img {
              width: 100px;
              height: 100px;
              border-radius: 50%;
            }
            &_button {
              &_normal {
                display: inline;
                border: none;
                font: 600 var(--p-m);
                color: var(--dark-m);
                text-transform: capitalize;
                background: var(--yellow-gradient-bg);
                box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
                  inset -4px -4px 8px rgba(0, 0, 0, 0.25),
                  inset 4px 4px 8px #ffc942;
                border-radius: 12px;
                padding: 10px 43px 12px;
                transition: all ease-in-out 100ms;
                cursor: pointer;
                color: var(--dark-m);
                text-decoration: none;
                &:hover,
                &:focus {
                  box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
                }
              }
              &_completed {
                display: none;
                border: none;
                font: 600 var(--p-m);
                color: var(--yellow);
                background: transparent;
                border: 2px solid var(--yellow);
                border-radius: 12px;
                padding: 8px 31px 10px;
                cursor: pointer;
                width: max-content;
                color: var(--yellow);
                text-decoration: none;
                &:hover,
                &:focus {
                  box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
                }
              }
              &_coming_soon {
                display: none;
                border: none;
                font: 600 var(--p-m);
                color: var(--dark-m);
                text-transform: capitalize;
                background: var(--yellow-gradient-bg);
                box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
                  inset -4px -4px 8px rgba(0, 0, 0, 0.25),
                  inset 4px 4px 8px #ffc942;
                border-radius: 12px;
                padding: 10px 20px 12px;
                transition: all ease-in-out 100ms;
                cursor: pointer;
                color: var(--dark-m);
                text-decoration: none;
                &:hover,
                &:focus {
                  box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
                }
              }
            }
          }
          &__body {
            p {
              color: var(--gray-deep);
              font: 700 24px/120% "Lato", sans-serif;
              font-weight: 700;
              padding-bottom: 42px;
            }
            &_options {
              display: flex;
              align-items: flex-start;
              gap: 22px;
              flex-direction: column;
              &_option {
                display: flex;
                gap: 12px;
                align-items: center;
                p {
                  font: var(--p-m);
                  font-size: 18px;
                  padding-bottom: 0 !important;
                }
              }
            }
            &_data {
              display: none;
            }
          }
          &__claim_button {
            display: none;
            padding-top: 60px;
            button {
              display: inline;
              margin-right: 0;
              margin-left: auto;
              border: none;
              font: 600 var(--p-m);
              color: var(--dark-m);
              text-transform: capitalize;
              background: var(--yellow-gradient-bg);
              box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
                inset -4px -4px 8px rgba(0, 0, 0, 0.25),
                inset 4px 4px 8px #ffc942;
              border-radius: 12px;
              padding: 10px 43px 12px;
              transition: all ease-in-out 100ms;
              cursor: pointer;
              color: var(--dark-m);
              text-decoration: none;
              &:hover,
              &:focus {
                box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
              }
            }
          }
          &.active {
            border-color: var(--yellow);
            .section_availableStakeDrop__body_element__stat {
              display: inline-block;
              color: var(--yellow);
              font: var(--p-m);
              position: absolute;
              top: -15px;
              right: 40px;
              z-index: 1;
              &::before {
                position: absolute;
                content: "";
                bottom: 0;
                height: 43%;
                width: 120%;
                background: var(--dark);
                right: -10%;
                z-index: 0;
              }
              span {
                &:nth-child(2) {
                  z-index: 1;
                  position: relative;
                  width: 100%;
                }
                &:nth-child(1) {
                  display: none;
                }
              }
            }
          }
          &.comingSoon {
            .section_availableStakeDrop__body_element__title_button_completed {
              display: none;
            }
            .section_availableStakeDrop__body_element__title_button_normal {
              display: none;
            }
            .section_availableStakeDrop__body_element__title_button_coming_soon {
              display: inline-block;
            }
          }
          &.completed {
            border-color: var(--yellow);
            .section_availableStakeDrop__body_element__stat {
              display: inline-block;
              color: var(--yellow);
              font: var(--p-m);
              position: absolute;
              top: -15px;
              right: 40px;
              z-index: 1;
              &::before {
                position: absolute;
                content: "";
                bottom: 0;
                height: 43%;
                width: 120%;
                background: var(--dark);
                right: -10%;
                z-index: 0;
              }
              span {
                &:nth-child(1) {
                  z-index: 1;
                  position: relative;
                  width: 100%;
                }
                &:nth-child(2) {
                  display: none;
                }
              }
            }
            .section_availableStakeDrop__body_element__title {
              &_button {
                &_normal {
                  display: none;
                }
                &_coming_soon {
                  display: none;
                }
                &_completed {
                  display: inline;
                }
              }
            }
            .section_availableStakeDrop__body_element__body_options {
              display: none;
            }
            .section_availableStakeDrop__body_element__body_data {
              display: flex;
              gap: 12px;
              &__text {
                display: flex;
                flex-direction: column;
                gap: 12px;
                p {
                  padding-bottom: 0 !important;
                  &:nth-child(1) {
                    font: var(--p-m);
                    font-size: 18px;
                  }
                  &:nth-child(2) {
                    font: 600 var(--p-l);
                  }
                  &:nth-child(3) {
                    font: var(--p-m);
                    font-size: 18px;
                  }
                }
              }
            }
            .section_availableStakeDrop__body_element__claim_button {
              display: flex;
              margin-top: auto;
            }
          }
        }
      }
    }
    &_faq {
      margin-top: 60px;
      padding: 60px 92px 120px;
      @media (max-width: 768px) {
        padding: 70px 40px 120px;
      }
      @media (max-width: 548px) {
        padding: 60px 28px 120px;
      }
      h2 {
        font: var(--h2);
        color: var(--gray);
        margin-bottom: 24px;
        & + p {
          font: var(--p-l);
          color: var(--gray-deep);
          max-width: 936px;
          margin-bottom: 40px;
        }
      }
      details {
        &:not(:last-child) {
          border-bottom: 1px solid var(--dark-s);
        }
      }
    }
  }
`;
