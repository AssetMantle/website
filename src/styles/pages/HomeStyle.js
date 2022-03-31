import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  background-image: url("/images/bg_assets.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 100vh;
  z-index: 1;
  @media (max-width: 768px) {
    background-image: url("/images/tab_bg_assets.svg");
  }
  @media (max-width: 548px) {
    background-image: url("/images/m_bg_assets.svg");
  }
  .section {
    &_1 {
      display: grid;
      grid-template-columns: 6fr 1fr 9fr;
      align-items: center;
      justify-items: flex-start;
      padding: 85px 92px;
      @media (max-width: 768px) {
        padding: 55px 32px 0;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
        .gap {
          display: none;
        }
      }
      @media (max-width: 548px) {
        display: flex;
        flex-direction: column-reverse;
        padding: 45px 20px 0;
        gap: 50px;
      }
      &__left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        &_box2 {
          img {
            width: 456px;
            height: 456px;
            filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.25));
            @media (max-width: 768px) {
              width: 320px;
              height: 320px;
              aspect-ratio: 1/1 !important;
            }
            @media (max-width: 548px) {
              width: 92vw;
              height: 92vw;
            }
            @media (max-width: 350px) {
            }
          }
        }
        &_box {
          background-color: var(--dark-m);
          padding: 25px;
          border-radius: 16px;
          width: min(100%, 375px);
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5),
            inset -4px -4px 8px rgba(0, 0, 0, 0.25), inset 4px 4px 8px #303030;
          @media (max-width: 548px) {
            padding: 20px;
          }
          img {
            width: 100%;
            border-radius: 16px;
            /* box-shadow: inset -4px -4px 8px rgba(0, 0, 0, 0.3),
              inset 4px 4px 8px rgba(136, 136, 136, 0.25); */
            filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.25));
          }
          &__details {
            padding-top: 37.11px;
            display: flex;
            align-items: center;
            gap: 15.24px;
            img {
              width: 74.14px;
              height: 74.14px;
              border-radius: 12px;
              box-shadow: none;
            }
            &_data {
              display: grid;
              gap: 12.7px;
              h4 {
                font: var(--h4);
                color: var(--gray);
                margin: 0;
              }
              p {
                font: var(--p-s);
                color: var(--gray-deep);
                margin: 0;
              }
            }
          }
          &__details2 {
            padding: 30px 0 15px;
            h3 {
              font: var(--h3);
              color: var(--gray);
              text-align: center;
            }
          }
        }
      }
      &__right {
        display: grid;
        gap: 40px;
        max-width: 695px;
        h1 {
          font: var(--h1);
          color: var(--gray);
          margin: 0;
          @media (max-width: 768px) {
            font: var(--h2);
          }
        }
        p {
          color: var(--gray-deep);
          font: var(--p-xl);
          @media (max-width: 768px) {
            font: var(--p-l);
          }
        }
      }
    }
    &_2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      padding: 49.3px 160px 160px;
      gap: 25px;
      @media (max-width: 768px) {
        padding: 90px 40px 60px;
        grid-template-columns: 1fr;
        align-items: center;
        padding-left: 20%;
        gap: 50px;
      }
      @media (max-width: 548px) {
        grid-template-columns: 1fr;
        padding: 98px 20px;
        gap: 120px;
      }
      &__element {
        display: flex;
        gap: 12px;
        @media (max-width: 768px) {
          align-items: center;
        }
        img {
          width: 132px;
          height: 132px;
        }
        @media (max-width: 768px) {
          img {
            width: 100px;
            height: 100px;
            aspect-ratio: 1/1;
          }
        }
        @media (max-width: 548px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 20px;
          img {
            width: 88px;
            height: auto;
          }
        }
        &_details {
          @media (max-width: 548) {
            text-align: center;
          }
          h2 {
            font: var(--h2);
            color: var(--gray);
            margin-bottom: 8px;
          }
          p {
            color: var(--gray-deep);
            font: var(--p-l);
            margin-bottom: 20px;
          }
          & > a {
            @media (max-width: 548px) {
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
    }
    &_3 {
      background-color: var(--dark-m);
      padding: 60px 92px;
      h2 {
        padding: 0 0 80px;
        font: var(--h2);
        color: var(--gray);
        text-align: center;
        a {
          color: var(--yellow);
          text-decoration: none;
        }
      }
      @media (max-width: 768px) {
        padding: 50px 40px;
      }
      @media (max-width: 548px) {
        padding: 48px 20px;
      }
      &_element_con {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: space-around;
        gap: 40px;
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
          gap: 80px;
        }
      }
      &__element {
        max-width: 273px;
        display: grid;
        align-items: center;
        justify-content: center;
        gap: 52px;
        margin: 0 auto;
        @media (max-width: 548px) {
          gap: 48px;
        }
        img {
          height: auto;
          width: 216px;
          margin: 0 auto;
          @media (max-width: 768px) {
            width: 150px;
          }

          @media (max-width: 548px) {
            width: 216px;
          }
        }
        h2 {
          font: var(--h2);
          color: var(--gray);
          text-align: center;
          margin-bottom: auto;
          max-width: 225px;
          @media (max-width: 768px) {
            font: var(--h3);
          }
        }
        &:nth-child(2) {
          h2 {
            margin-top: 14px;
          }
        }
        &:nth-child(3) {
          h2 {
            margin-top: 8px;
          }
        }
      }
    }
    &_4 {
      padding: 120px 92px 112px;
      display: grid;
      grid-template-columns: 1fr 1fr;

      @media (max-width: 768px) {
        padding: 90px 40px;
      }
      @media (max-width: 548px) {
        grid-template-columns: 1fr;
        padding: 130px 20px;
        gap: 50px;
      }
      &__element {
        &:nth-child(1) {
          h2 {
            font: var(--h2);
            color: var(--gray);
            margin-bottom: 24px;
          }
          p {
            font: 600 var(--p-l);
            max-width: 548px;
            color: var(--gray-deep);
            margin-bottom: 60px;
          }
        }
        &:nth-child(2) {
          display: flex;
          img {
            margin: auto;

            @media (max-width: 768px) {
              width: 80%;
            }
            @media (max-width: 548px) {
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }
    &_5 {
      padding: 0 92px 92px;

      @media (max-width: 768px) {
        padding: 50px 40px;
      }
      @media (max-width: 548px) {
        padding: 50px 20px;
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
        margin: 0;
        font: var(--p-l);
        color: var(--gray-deep);
        max-width: 936px;
      }
      &__element {
        &.one {
          display: grid;
          grid-template-columns: 1fr 1fr;
          @media (max-width: 548px) {
            overflow-y: auto;
            gap: 40px;
            margin: 40px 0;
          }
          .section_5__element_options {
            text-align: center;
            padding: 40px 20px;
            h3 {
              font: var(--h3);
              color: var(--gray);
              border-bottom: 3px solid transparent;
              margin: 0 auto;
              width: max-content;
              cursor: pointer;
              opacity: 0.5;
              &.active {
                opacity: 1;
                border-bottom: 3px solid var(--yellow);
              }
            }
          }
        }
        &.two__storebuilder {
          padding: 24px 0;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-around;
          gap: 30px;
          @media (max-width: 768px) {
            gap: 70px;
          }
          @media (max-width: 548px) {
            padding: 40px 0;
            gap: 120px;
          }
        }
        &_content {
          max-width: 219px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          img {
            margin-bottom: 44px;
          }
          h3 {
            font: var(--h3);
            color: var(--gray);
            margin-bottom: 12px;
          }
          p {
            font: var(--p-m);
            color: var(--gray-deep);
          }
          &:first-child {
            img {
              width: 90px;
              height: 90px;
            }
          }
          &:nth-child(2) {
            img {
              width: 97px;
              height: 92px;
            }
          }
          &:nth-child(3) {
            img {
              width: 102.7px;
              height: auto;
              margin-bottom: 28px;
            }
          }
          &:nth-child(4) {
            img {
              width: 108.31px;
              height: 92px;
            }
          }
        }
      }
    }
    &_6 {
      background-color: var(--dark-m);
      padding: 60px 92px;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 50px;
      @media (max-width: 768px) {
        padding: 60px 40px;
      }
      @media (max-width: 548px) {
        padding: 60px 28px;
      }
      &__element {
        &:nth-child(1) {
          max-width: 736px;
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
      }
      .btn__primary {
        @media (max-width: 548px) {
          width: 100%;
          text-align: center;
        }
      }
    }
    &_7 {
      display: grid;
      grid-template-columns: 2fr 8fr 2fr;
      padding: 120px 92px 117px;
      gap: 30px;
      &__element {
        &:nth-child(3) {
          display: flex;
          margin-top: auto;
          margin-bottom: 0;
        }
      }
    }
    &_team {
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 40px;
      }
      @media (max-width: 548px) {
        padding: 20px;
      }
      h2 {
        font: var(--h2);
        color: var(--gray);
        margin-bottom: 24px;
        text-transform: capitalize;
        + p {
          font: var(--p-l);
          color: var(--gray-deep);
          margin-bottom: 24px;
          max-width: 935px;
        }
      }
      h3 {
        font: var(--h3);
        color: var(--gray);
        padding: 24px 0;
      }
      &__container {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        align-items: flex-start;
        justify-content: center;
        padding: 24px 0;
      }
      &__button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 60px 0 0;
      }
    }
    &_source {
      padding: 20px 92px 120px;
      position: relative;
      @media (max-width: 768px) {
        padding: 10px 40px 40px;
      }
      @media (max-width: 548px) {
        padding: 10px 20px 40px;
      }
      span {
        position: absolute;
        top: -150px;
        @media (max-width: 548px) {
          top: -120px;
        }
      }
      p {
        font: 600 var(--p-m);
        color: var(--gray-deep);
        text-align: right;
        max-width: 100%;
        a {
          color: var(--gray-deep);
          text-decoration: none;
          word-break: break-all;
        }
      }
    }
  }
  .am_diff {
    padding: 120px 92px;
    @media (max-width: 768px) {
      padding: 100px 40px;
    }
    @media (max-width: 548px) {
      padding: 120px 20px;
    }
    h2 {
      font: var(--h2);
      color: var(--gray);
      margin-bottom: 24px;
    }
    p {
      font: var(--p-l);
      color: var(--gray-deep);
      margin-bottom: 83px;
      max-width: 983px;
    }
    &__element {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      @media (max-width: 768px) {
        gap: 40px;
      }

      @media (max-width: 635px) {
        grid-template-columns: 1fr;
      }
      @media (max-width: 548px) {
        grid-template-columns: 1fr;
        gap: 80px;
      }
      &_content {
        display: grid;
        grid-template-columns: 2fr 10fr;
        gap: 23px;
        align-items: center;
        @media (max-width: 768px) {
          align-items: flex-start;
          grid-template-columns: 1fr 11fr;
          gap: 15px;
        }
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 20px;
        }
        img {
          margin: auto;

          @media (max-width: 768px) {
            margin: 0 auto auto;
          }

          @media (max-width: 548px) {
            margin: auto;
          }
        }
        h3 {
          font: var(--h3);
          color: var(--gray);
          margin-bottom: 24px;
          text-transform: capitalize;
        }
        p {
          font: var(--p-m);
          color: var(--gray-deep);
          max-width: 479px;
          margin: 0;
        }
      }
    }
    &__link {
      a {
        color: var(--yellow);
        text-decoration: none;
      }
    }
  }
`;
