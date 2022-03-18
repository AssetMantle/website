import styled from "styled-components";

const HeaderContainer = styled.header`
  max-width: 1440px;
  background-color: var(--dark);
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
  &.padding_1 {
    padding: 60px 92px;
    @media (max-width: 768px) {
      padding: 20px 40px;
    }
    @media (max-width: 548px) {
      padding: 20px 20px;
    }
  }
  &.padding_2 {
    padding: 20px 92px;
    @media (max-width: 768px) {
      padding: 20px 40px;
    }
    @media (max-width: 548px) {
      padding: 20px 20px;
    }
  }
  @media (max-width: 768px) {
    padding: 19px 40px;
  }
  @media (max-width: 548px) {
    padding: 19px 20px;
  }
  .header {
    &__left {
      img {
        height: 42px;
        width: auto;
      }
      &.airdrop {
        display: flex;
        gap: 8px;
        align-items: center;
        @media (max-width: 768px) {
          align-items: flex-start;
        }
        img {
          height: 56px;
          width: auto;
          @media (max-width: 745px) {
            height: 40px;
          }
          @media (max-width: 400px) {
            height: 28px;
          }
        }
        h2 {
          color: var(--gray);
          @media (max-width: 610px) {
            font-size: 20px;
          }
          @media (max-width: 385px) {
            font-size: 16px;
          }
        }
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
          justify-content: center;
          gap: 24px;
          padding-left: 37px;
          padding-right: 24px;
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
  cursor:pointer;
  img {
    width: 32px;
    height: 22px;
    z-index: 100;
    &[alt="close"] {
      width: 16px;
      height: 16px;
    }
  }
`;

export default HeaderContainer;
