import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 60px 92px 80px;
  background-color: var(--dark-m);
  max-width: 1440px;
  margin: auto;
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
      }
      &__element {
        h3 {
          font: var(--h3);
          color: var(--gray);
          margin-bottom: 24px;
        }
        &_label {
          font: var(--p-s) !important;
          color: var(--gray-deep);
          margin-bottom: 14px;
        }
        &_form {
          background-color: transparent;
          width: max-content;
          border-radius: 12px;
          margin-bottom: 80px;
          border: 2px solid var(--gray-deep);
          display: flex;
          @media (max-width: 768px) {
            width: 90%;
          }

          @media (max-width: 548px) {
            width: 88vw;
          }
          input {
            font: var(--input);
            color: var(--gray-deep);
            background-color: transparent;
            border: none;
            outline: none;
            padding: 0 15px;
            width: max-content;
            flex: 1;

            @media (max-width: 768px) {
              width: 80%;
            }
            @media (max-width: 548px) {
              width: 60%;
            }
          }
          button {
            display: inline;
            font: 600 var(--p-m);
            color: var(--dark-m);
            text-transform: capitalize;
            background: var(--yellow-gradient-bg);
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
              inset -4px -4px 8px rgba(0, 0, 0, 0.25), inset 4px 4px 8px #ffc942;
            border-radius: 12px;
            padding: 10px 43px 12px;
            transition: all ease-in-out 100ms;
            border: none;
            outline: none;
            &:hover,
            &:focus {
              box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
            }
            /* @media (max-width: 548px) {
              margin-left: -13%;
            } */
          }
        }
        p {
          font: 600 var(--p-m);
          &:first-child {
            margin-bottom: 24px;
          }
          a {
            color: var(--yellow);
            text-decoration: none;
          }
        }
        &:last-child {
          h3 {
            margin-bottom: 32px;
          }
        }
        &_media__icons {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 22px;
        }
      }
      &:last-child {
        p {
          font: normal var(--p-m);
        }
      }
    }
  }
`;
