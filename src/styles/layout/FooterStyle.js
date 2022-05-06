import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 60px 92px 80px;
  background-color: var(--dark-m);
  max-width: 1440px;
  margin: auto;
  margin-bottom: 0;
  @media (max-width: 768px) {
    padding: 60px 40px;
  }
  @media (max-width: 548px) {
    padding: 60px 28px 0;
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
    max-width: 983px;
    color: var(--gray-deep);
    margin-bottom: 60px;
    @media (max-width: 548px) {
      margin-bottom: 50px;
    }
  }
  .footer {
    &_container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      @media (max-width: 638px) {
        grid-template-columns: 1fr;
      }
      @media (max-width: 548px) {
        grid-template-columns: 1fr;
        padding: 50px 0;
        gap: 100px;
      }
      &__element {
        h3 {
          font: var(--h3);
          color: var(--gray);
        }
        h4 {
          font: var(--h4);
          color: var(--gray);
        }
        p {
          color: var(--gray-deep);
        }
        &_emails {
          display: flex;
          gap: 24px;
          align-items: center;
          padding-bottom: 14px;
          &__title {
            margin: auto 0 !important;
          }
        }
        &_email__tile {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 20px 0;
          &_title {
            margin: 0;
            text-transform: capitalize;
          }
          &_email {
            font: var(--p-m);
            color: var(--gray-deep);
            text-decoration: none;
            @media (max-width: 350px) {
              font: var(--p-s);
            }
          }
        }
        &_social {
          padding-top: 60px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          &__icons {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 23px;
            @media (max-width: 768px) {
              width: 80%;
            }
            img {
              width: 50px;
              height: 50px;
            }
          }
        }
        &_2 {
          display: flex;
          flex-direction: column;
          gap: 40px;
          justify-content: space-between;
          /* @media (max-width: 768px) {
            gap: 50px;
          } */
          @media (max-width: 548px) {
            gap: 50px;
          }
          &__subscribe {
            &_title {
              font: var(--h3);
              color: var(--gray);
              padding-bottom: 24px;
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
                gap: 24px;
                @media (max-width: 768px) {
                  flex-direction: column;
                  gap: 10px;
                }
              }
              input {
                font: var(--input);
                color: var(--gray-deep);
                background-color: transparent;
                border: 2px solid var(--gray-deep);
                border-radius: 12px;
                outline: none;
                padding: 0 15px;
                width: 59%;
                flex: 1;
                padding: 12px 16px;
                @media (max-width: 768px) {
                  width: 100%;
                }
                /* @media (max-width: 548px) {
                  width: 60%;
                } */
              }
              button {
                display: inline;
                font: 600 var(--p-m);
                color: var(--dark-m);
                text-transform: capitalize;
                background: var(--yellow-gradient-bg);
                box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
                  inset -4px -4px 8px rgba(0, 0, 0, 0.25),
                  inset 4px 4px 8px #ffc942;
                border-radius: 12px;
                padding: 12px 43px 14px;
                transition: all ease-in-out 100ms;
                border: none;
                outline: none;
                width: 39%;
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
                @media (min-width: 769px) {
                  margin-left: -14px;
                }
                @media (max-width: 768px) {
                  width: 100%;
                  margin-top: 10px;
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
            &_link {
              margin: 0;
              padding: 12px 0;
              font: var(--p-m);
              color: var(--gray-deep);
              display: flex;
              @media (max-width: 768px) {
                flex-direction: column;
              }
              &__button {
                font: var(--p-m);
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
        }
      }
    }
  }
`;
