import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 40px 92px;
  background-color: var(--footer-bg);
  max-width: 1440px;
  margin: auto;
  margin-bottom: 0;
  @media (max-width: 768px) {
    padding: 40px;
  }
  @media (max-width: 548px) {
    padding: 40px 28px 20;
  }
  padding-bottom: 20px;
  h2 {
    font: 600 var(--h2);
    color: var(--gray);
    margin-bottom: 16px;
    letter-spacing: 0.08em;
    @media (max-width: 548px) {
      margin-bottom: 24px;
    }
  }
  p {
    font: var(--p-l);
    max-width: 983px;
    color: var(--gray-deep);
  }
  .footer {
    &__details {
      font: var(--p-s);
      margin-bottom: 32px;
    }
    &_container {
      display: grid;
      grid-template-columns: 2fr 3fr 2fr;
      gap: 94px;
      @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 548px) {
        grid-template-columns: 1fr;
        gap: 64px;
      }
      &__element {
        h3 {
          font: 600 var(--h3);
          color: var(--gray);
        }
        h4 {
          font: 600 var(--h4);
          color: var(--gray);
        }
        p {
          color: var(--gray-deep);
        }
        &_emails {
          display: flex;
          gap: 24px;
          align-items: center;
          padding-bottom: 12px;
          &__icon {
            width: 36px;
            height: auto;
          }
          &__title {
            margin: auto 0 !important;
            letter-spacing: 0.08em;
          }
        }
        &_email__tile {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 12px 0;
          &_title {
            margin: 0;
            text-transform: capitalize;
            font: 800 var(--p-s) !important;
          }
          &_email {
            font: var(--p-xs);
            color: var(--gray-deep);
            text-decoration: none;
            /* @media (max-width: 350px) {
              font: var(--p-s);
            } */
          }
        }
        &_2 {
          display: flex;
          flex-direction: column;
          gap: 36px;
          justify-content: space-between;
          /* @media (max-width: 768px) {
            gap: 50px;
          } */
          @media (max-width: 548px) {
            gap: 48px;
          }
          &__subscribe {
            @media (min-width: 549px) {
              padding-top: 50px;
            }
            &_title {
              font: 600 var(--h3);
              color: var(--gray);
              padding-bottom: 16px;
              letter-spacing: 0.08em;
            }
            &_label {
              font: var(--p-s) !important;
              color: var(--gray-deep);
              margin-bottom: 7px;
            }
            &_form {
              background-color: transparent;
              width: 100%;
              display: flex;
              flex-direction: column;
              @media (max-width: 768px) {
                width: 90%;
                gap: 10px;
              }

              @media (max-width: 548px) {
                width: 100%;
              }
              &__fields {
                display: flex;
                gap: 12px;
                @media (max-width: 768px) {
                  flex-direction: column;
                  gap: 10px;
                }
              }
              input {
                font: var(--p-xs);
                color: var(--gray-deep);
                background-color: transparent;
                border: 2px solid var(--gray-deep);
                border-radius: 12px;
                outline: none;
                width: 59%;
                flex: 1;
                padding: 10px 16px 9px;
                @media (max-width: 768px) {
                  width: 100%;
                }
                /* @media (max-width: 548px) {
                  width: 60%;
                } */
              }
              button {
                display: inline;
                font: 600 var(--p-s);
                color: var(--dark-m);
                text-transform: capitalize;
                background: var(--yellow-gradient-bg);
                box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
                  inset -4px -4px 8px rgba(0, 0, 0, 0.25),
                  inset 4px 4px 8px #ffc942;
                border-radius: 12px;
                padding: 9px 73.5px 8px;
                transition: all ease-in-out 100ms;
                border: none;
                outline: none;
                width: min(176px, 100%);
                &:hover,
                &:focus {
                  box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
                }
                &:disabled {
                  background: var(--yellow-disabled);
                  box-shadow: none;
                  &:hover,
                  &:focus {
                    box-shadow: none;
                  }
                }
                @media (max-width: 768px) {
                  width: 100%;
                }
              }
              &__message {
                margin: 24px 0;
                font: var(--p-m);
              }
            }
          }
          &__links {
            display: flex;
            flex-direction: column;
            @media (min-width: 769px) {
              margin-left: auto;
            }
            &_link {
              margin: 0;
              padding: 8px 0;
              font: var(--p-xs);
              color: var(--gray-deep);
              display: flex;
              @media (max-width: 362px) {
                flex-direction: column;
              }
              &__button {
                font: var(--p-xs);
                background-color: transparent;
                border: none;
                outline: none;
                color: var(--yellow);
                width: max-content;
                cursor: pointer;
                span:last-child {
                  display: none;
                }
                &.coming {
                  &:hover,
                  &:focus {
                    span:last-child {
                      display: inline;
                    }
                    span:first-child {
                      display: none;
                    }
                  }
                }
              }
              a {
                text-decoration: none;
                color: var(--yellow);
              }
            }
          }
          &__logo {
            padding-top: 10px;
            width: min(274px, 100%);
            @media (min-width: 769px) {
              margin-left: auto;
            }
            @media (max-width: 548px) {
              display: none;
            }
            img {
              width: 100%;
            }
          }
          &_social {
            display: flex;
            flex-direction: column;
            gap: 16px;
            &__title {
              font-weight: 600;
              color: var(--gray);
              letter-spacing: 0.08em;
            }
            &__icons {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              flex-wrap: wrap;
              gap: 24px;
              @media (max-width: 768px) {
                width: 90%;
              }
              &_icon {
                width: 40px;
                height: 40px;
                font-size: 26px;
                background-color: black;
                border-radius: 50%;
                text-decoration: none;
                color: var(--gray);
                display: flex;
                align-items: center;
                justify-content: center;
                &:hover,
                &:focus {
                  color: var(--yellow);
                }
                &.github_icon {
                  font-size: 40px;
                  color: black;
                  background-color: var(--gray);
                  border: none;
                  outline: none;
                  & > * {
                    transform: scale(1.1);
                  }
                  &:hover,
                  &:focus {
                    background-color: var(--yellow);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  hr.bottom__line {
    background: #383838;
    width: 100%;
    margin-top: 20px;
    height: 2px;
    border: none;
    outline: none;
    box-shadow: 1.41818px 1.41818px 2.83636px rgba(0, 0, 0, 0.2),
      inset -1.41818px -1.41818px 2.83636px rgba(0, 0, 0, 0.2),
      inset 1.41818px 1.41818px 2.83636px #3f3f3f;
    border-radius: 10px;
  }
  .copy-right__footer {
    text-align: center;
    padding: 20px 20px 0;
    font: 600 var(--p-xs);
    color: var(--gray-deep);
  }
`;
