import styled from "styled-components";

const HeaderContainer = styled.header`
  max-width: 1440px;
  background-color: var(--darkT);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  left: 0;
  right: 0;
  padding: 20px 92px 20px;
  z-index: 300;
  @media (max-width: 768px) {
    padding: 19px 40px;
  }
  @media (max-width: 548px) {
    padding: 19px 20px;
  }
  .header {
    &__left {
      img {
        .logo {
          height: 42px;
          width: auto;
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
        }
      }
    }
  }
`;

export const NavIcon = styled.div`
  z-index: 100;
  margin: 15px 20px;
  /* width: 20px;
  height: 22px; */
`;

export default HeaderContainer;
