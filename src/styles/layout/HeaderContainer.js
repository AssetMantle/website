import styled from "styled-components";

const HeaderContainer = styled.header`
  max-width: 1440px;
  background-color: var(--header-bg);
  backdrop-filter: blur(2px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 300;
  transition: all 0.15s ease-in-out;
  padding: 0 92px;
  @media (max-width: 768px) {
    padding: 19px 40px;
  }
  @media (max-width: 548px) {
    padding: 19px 20px;
  }
  .header {
    &__left {
      padding: 17px 0 12px;
      img {
        width: min(174px, 75%);
        height: auto;
      }
    }
    &__right {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &_second__nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 61.5px;
        @media (max-width: 852px) {
          display: none;
        }
        &_theme__toggler {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          &_button {
            display: flex;
            align-items: center;
            background-color: var(--dark-s);
            padding: 6px;
            border-radius: 15px;
            width: 56px;
            &__dot {
              height: 21px;
              width: 21px;
              border-radius: 50%;
              background: var(--yellow-gradient-bg);
              margin-right: auto;
              margin-left: 0;
              transition: all ease-in 1s;
              &.active {
                margin-left: auto;
                margin-right: 0;
              }
            }
          }
        }
        &_buttons {
          display: flex;
          align-items: center;
          gap: 40px;
          padding-left: 48px;
          padding-right: 48px;
          &__drop {
            display: flex;
            align-items: center;
            gap: 4px;
            font: 600 14px/120% "Lato", sans-serif;
            color: var(--header-color);
            padding: 25px 4px 20px;
            border-bottom: 1px solid transparent;
            cursor: pointer;
            position: relative;

            &_down {
              display: none;
              padding: 16px;
              position: absolute;
              top: 99.5%;
              right: 0;
              background-color: var(--dark);
              border-radius: 0 0 16px 16px;
              border: 1px solid var(--yellow);
              width: max-content;
              &__grid {
                display: grid;
                gap: 24px;
                &.one {
                  grid-template-columns: repeat(1, 1fr);
                }
                &.two {
                  grid-template-columns: repeat(2, 1fr);
                }
                &_element {
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                  &__title {
                    text-transform: uppercase;
                    padding-bottom: 16px;
                    border-bottom: 2px solid var(--dark-s);
                    width: 100%;
                    color: var(--header-color);
                  }
                  &__body {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    &_line {
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      align-items: center;
                      justify-content: space-between;
                      gap: 16px;
                    }
                    &_link {
                      color: var(--header-color-s);
                      font: var(--p-s);
                      text-decoration: none;
                      max-width: 180px;
                      display: flex;
                      align-items: center;
                      gap: 16px;
                      img {
                        width: 40px;
                        height: auto;
                      }
                      &.hovered {
                        span {
                          &:nth-child(1) {
                            display: inline-block;
                          }
                          &:nth-child(2) {
                            display: none;
                          }
                        }
                      }
                      &:hover {
                        span {
                          &:nth-child(1) {
                            display: none;
                          }
                          &:nth-child(2) {
                            display: inline-block;
                          }
                        }
                      }
                      &:hover {
                        color: var(--yellow);
                      }
                      &.title {
                        &:hover {
                          color: var(--header-color-s);
                        }
                      }
                      &.small {
                        font-size: 12px;
                      }
                    }
                  }
                }
              }
            }

            &:hover {
              border-bottom: 1px solid var(--yellow);
              color: var(--yellow);
              .header__right_second__nav_buttons__drop_down {
                display: grid;
              }
            }
          }
        }
      }
      &_one {
        display: flex;
        gap: 24px;
        a {
          font: var(--p-l);
          color: var(--yellow);
          text-decoration: none;
          @media (max-width: 576px) {
            display: none;
          }
        }
        .toggler {
          /* @media (min-width: 577px) {
            display: none;
          } */
        }
      }
    }
  }
`;

export const NavIcon = styled.div`
  z-index: 100;
  margin: auto;
  display: grid;
  place-items: center;
  img {
    width: 20px;
    height: 20px;
    z-index: 100;
    cursor: pointer;
    /* &[alt="close"] {
      width: 16px;
      height: 16px;
    } */
  }
`;

export default HeaderContainer;