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
  }
`;
