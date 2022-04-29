import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 1440px;
  scroll-behavior: smooth;
  margin: 0 auto;
  height: 100vh;
  overflow-y: auto;
  z-index: 1;
  background-color: var(--bg);
  background-image: url("/images/bg/bg_big.webp");
  background-size: 100%;
  background-position: top left;
  background-repeat: no-repeat repeat;
  scroll-snap-type: y mandatory;
  & > section {
    scroll-snap-align: start;
  }
  @media (prefers-reduced-motion: reduce) {
    scroll-snap-type: none;
    & > section {
      scroll-snap-align: none;
    }
  }
  .section {
    &_hero {
      display: grid;
      grid-template-columns: 6fr 1fr 9fr;
      align-items: center;
      justify-items: flex-start;
      padding: 85px 92px 60px;
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
          }
        }
        &_box {
          background-image: url("/imagesgradient_bg_pngwebp");
          background-size: 100%;
          background-repeat: no-repeat repeat;
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
    &_services {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      padding: 60px 160px 160px;
      gap: 25px;
      @media (max-width: 1060px) {
        padding-left: 40px;
        padding-right: 40px;
      }
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
          & > a span {
            @media (max-width: 548px) {
              align-items: center;
              justify-content: center;
              text-align: center;
            }
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
    &_overview {
      background-image: url("/images/bg/gradient_bg.png");
      background-size: 100%;
      background-repeat: no-repeat repeat;
      padding: 60px 92px;
      margin-bottom: 60px;
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
        max-width: 290px;
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
          max-width: 287px;
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
    &_WhatIsAssetMantle {
      position: relative;
      padding: 60px 92px;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 70px;
      @media (max-width: 768px) {
        gap: 40px;
        padding: 70px 40px;
      }
      @media (max-width: 548px) {
        grid-template-columns: 1fr;
        padding: 120px 20px;
        gap: 50px;
      }
      &__link_span {
        position: absolute;
        top: -150px;
      }
      &__element {
        &:nth-child(1) {
          display: flex;
          flex-direction: column;
          h2 {
            font: var(--h2);
            color: var(--gray);
            margin-bottom: 24px;
          }
          p {
            font: 600 var(--p-l);
            /* max-width: 548px; */
            color: var(--gray-deep);
            margin-bottom: 60px;
          }
          ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
          .section_WhatIsAssetMantle__element_button {
            padding-top: 66px;
          }
        }
        &:nth-child(2) {
          display: flex;
          width: 100%;
          img {
            width: 100%;
            height: auto;
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
    &_airdrop {
      padding: 0px 92px 0px 32px;
      margin: 60px 0;
      display: grid;
      grid-template-columns: 1fr 9fr 2fr;
      gap: 40px;
      background-image: url("/images/bg/gradient_bg.png");
      background-size: 100%;
      background-repeat: no-repeat repeat;
      @media (max-width: 768px) {
        padding: 80px 40px;
      }
      @media (max-width: 548px) {
        padding: 60px 20px;
        grid-template-columns: 1fr;
        gap: 80px;
      }
      &__element {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        &__link_span {
          position: absolute;
          top: -150px;
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
        &:first-child {
          @media (max-width: 548px) {
            width: 60%;
            justify-self: center;
          }
        }
        &:nth-child(2) {
          @media (min-width: 549px) {
            margin-left: -15px;
          }
        }
        &.bu {
          & > a {
            word-break: keep-all;
            line-break: strict;
            width: max-content;
            @media (max-width: 548px) {
              width: 100%;
              text-align: center;
            }
          }
        }
      }
    }
    &_howItWorks {
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 70px 40px;
      }
      @media (max-width: 548px) {
        padding: 50px 20px;
      }
      position: relative;
      &__link_span {
        position: absolute;
        top: -150px;
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
          .section_howItWorks__element_options {
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
          align-items: center;
          gap: 30px;
          @media (max-width: 768px) {
            gap: 70px;
          }
          @media (max-width: 548px) {
            flex-direction: column;
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
              &.mint_nft {
                width: 90px;
                height: auto;
                margin-bottom: 64px;
              }
            }
          }
          &:nth-child(3) {
            img {
              width: 102.7px;
              height: auto;
              margin-bottom: 28px;
              &.sell {
                margin-bottom: 46px;
              }
            }
          }
          &:nth-child(4) {
            img {
              width: 108.31px;
              height: 92px;
              &.engage {
                /* margin-bottom: 65px; */
              }
            }
          }
        }
      }
    }
    &_iAmSold,
    &_letsAmplify {
      background-image: url("/images/bg/gradient_bg.png");
      background-size: 100%;
      background-repeat: no-repeat repeat;
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
      padding: 60px 92px;
      margin-bottom: 80px;
      gap: 30px;
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
    &_gettingStarted {
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 60px 40px;
      }
      @media (max-width: 548px) {
        padding: 60px 28px;
      }
      position: relative;
      &__link_span {
        position: absolute;
        top: -150px;
      }
      h2 {
        font: var(--h2);
        color: var(--gray);
        margin-bottom: 24px;
      }
      p {
        font: var(--p-l);
        color: var(--gray-deep);
        max-width: 936px;
      }
      &__element {
        padding-top: 79px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        @media (max-width: 668px) {
          grid-template-columns: 1fr;
        }
        &_card {
          background-color: var(--dark-t);
          backdrop-filter: blur(2px);
          border-radius: 12px;
          padding: 40px 72px;
          @media (max-width: 768px) {
            padding: 30px 40px;
          }
          @media (max-width: 548px) {
            padding: 20px 28px;
          }
          &_title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 24px;
            @media (max-width: 548px) {
              flex-direction: column-reverse;
            }
            h2 {
              max-width: 150px;
              @media (max-width: 548px) {
                max-width: 100%;
              }
            }
            img {
              width: min(50%, 150px);
              height: auto;
            }
          }
        }
        &_button {
          display: grid;
          place-items: center;
          padding-top: 80px;
          & > a {
            @media (max-width: 548px) {
              width: 100%;
              text-align: center;
            }
          }
        }
      }
    }
    &__am_diff {
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 100px 40px;
      }
      @media (max-width: 548px) {
        padding: 60px 20px;
      }
      position: relative;
      &__link_span {
        position: absolute;
        top: -150px;
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
          &:nth-child(1) {
            img {
              width: 106px;
              height: auto;
            }
          }
          &:nth-child(2) {
            img {
              width: 106px;
              height: auto;
            }
          }
          &:nth-child(3) {
            img {
              width: 106px;
              height: auto;
            }
          }
          &:nth-child(4) {
            img {
              width: 106px;
              height: auto;
            }
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
    &_roadMap {
      padding: 40px 92px;
      margin: 60px 0;
      display: grid;
      grid-template-columns: 1fr 9fr 2fr;
      gap: 40px;
      background-image: url("/images/bg/gradient_bg.png");
      background-size: 100%;
      background-repeat: no-repeat repeat;
      @media (max-width: 768px) {
        padding: 80px 40px;
      }
      @media (max-width: 548px) {
        padding: 60px 20px;
        grid-template-columns: 1fr;
        gap: 80px;
      }
      &__element {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        &__link_span {
          position: absolute;
          top: -150px;
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
        &:first-child {
          @media (max-width: 548px) {
            width: 60%;
            justify-self: center;
          }
        }
        &.bu {
          & > a {
            @media (max-width: 548px) {
              width: 100%;
              text-align: center;
            }
          }
        }
      }
    }
    &_whitepaper {
      background-image: url("/images/bg/gradient_bg.png");
      background-size: 100%;
      background-repeat: no-repeat repeat;
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
    &_slick__left {
      display: flex;
      flex-direction: column;
      gap: 48px;
    }
    &_team {
      padding: 60px 80px;
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
    &_faq {
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 70px 40px;
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
        max-width: 936px;
        margin-bottom: 40px;
      }
      details {
        &:not(:last-child) {
          border-bottom: 1px solid var(--dark-s);
        }
      }
    }
    &_stores {
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
      p {
        font: var(--p-l);
        color: var(--gray-deep);
        margin-bottom: 80px;
        max-width: 936px;
      }
      h3 {
        font: var(--h3);
        color: var(--gray);
        margin: 40px 0;
        &.section_stores__title {
          position: relative;
          span {
            position: absolute;
            top: -150px;
          }
        }
      }
      &__element {
        /* display: grid; */
        /* grid-template-columns: repeat(4, 1fr); */
        /* gap: 24px; */
        padding-bottom: 20px;
        width: 100%;
        @media (max-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
        li.splide__slide {
          width: 30%;
          min-height: 435.859px;
          display: flex;
        }
        button {
          &.splide__arrow {
            background-color: transparent;
            background-image: url("/images/landing/triangle.svg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            top: 50%;
            height: 20px;
            aspect-ratio: 4/3;
            border-radius: 0;
            &.splide__arrow--prev {
              left: -24px;
            }
            &.splide__arrow--next {
              right: -24px;
              transform: rotate(180deg);
              top: 46.9%;
            }
            svg {
              opacity: 0;
            }
          }
        }
      }
    }
    &_w__nft {
      padding: 80px 92px 0px;
      @media (max-width: 768px) {
        padding: 80px 40px 0px;
      }
      @media (max-width: 548px) {
        padding: 80px 28px 0px;
      }
      position: relative;
      &__link_span {
        position: absolute;
        top: -150px;
      }
      h2 {
        font: var(--h2);
        color: var(--gray);
        margin-bottom: 24px;
      }
      p {
        font: var(--p-l);
        color: var(--gray-deep);
        max-width: 936px;
        margin-bottom: 60px;
      }
      h3 {
        font: var(--h3);
        color: var(--gray);
        padding-bottom: 38px;
      }
      &.section_w__nft_button {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 80px 92px 60px;
        @media (max-width: 768px) {
          padding: 50px 40px 60px;
        }
        @media (max-width: 548px) {
          padding: 50px 20px 60px;
        }
        & > a {
          @media (max-width: 548px) {
            width: 100%;
            text-align: center;
          }
        }
      }
    }
    &_pricing {
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 80px 40px 60px;
      }
      @media (max-width: 548px) {
        padding: 60px 28px;
      }
      position: relative;
      &__link_span {
        position: absolute;
        top: -150px;
      }
      h2 {
        font: var(--h2);
        color: var(--gray);
        margin-bottom: 24px;
      }
      p {
        font: var(--p-l);
        color: var(--gray-deep);
        margin-bottom: 80px;
        max-width: 936px;
      }
      &__body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
        &_element__left {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          &_content {
            font: var(--h3);
            color: var(--gray);
            @media (max-width: 548px) {
              font: var(--h4);
            }
          }
        }
        &_element__right {
          display: flex;
          justify-content: center;
          flex-direction: column;
          h1 {
            font: var(--h1);
            color: var(--gray);
            margin: 0;
            @media (max-width: 548px) {
              font: var(--h2);
            }
            &:nth-child(2) {
              margin-top: 8px;
              color: var(--yellow);
              @media (max-width: 548px) {
                font: var(--h3);
              }
            }
          }
        }
      }
      &__button {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 80px;
        & > a {
          @media (max-width: 548px) {
            width: 100%;
            text-align: center;
          }
        }
      }
    }
    &_testimonial {
      padding: 60px 92px;
      @media (max-width: 768px) {
        padding: 70px 40px;
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
        max-width: 936px;
        margin-bottom: 59px;
      }
      &_slick {
        li.splide__slide {
          width: 50%;
        }
        button {
          &.splide__arrow {
            background-color: transparent;
            background-image: url("/images/landing/triangle.svg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            top: 50%;
            height: 20px;
            aspect-ratio: 4/3;
            border-radius: 0;
            &.splide__arrow--prev {
              left: -24px;
            }
            &.splide__arrow--next {
              right: -24px;
              transform: rotate(180deg);
              top: 46.9%;
            }
            svg {
              opacity: 0;
            }
          }
        }
      }
    }
    &_source {
      padding: 60px 92px;
      margin-top: 20px;
      position: relative;
      @media (max-width: 768px) {
        padding: 40px;
      }
      @media (max-width: 548px) {
        padding: 40px 20px;
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
`;
