import React from "react";
import styled from "styled-components";

export default function OsmoIModal({ closeModal }) {
  const LIST = [
    `OSMO/ATOM`,
    `OSMO/XPRT`,
    `OSMO/JUNO`,
    `OSMO/STARS`,
    `OSMO/CMDX`,
    `OSMO/UST`,
    `OSMO/LUNA`,
    `OSMO/SOMM`,
    `OSMO/SCRT`,
    `LUNA/UST`,
  ];
  return (
    <>
      <Container>
        <div className="modal___fo_bg" onClick={() => closeModal(false)}></div>
        <div className="modal__sc">
          <>
            <div
              className="modal__sc_close"
              onClick={() => closeModal(false)}
              onKeyPress={(e) => e.key === "Enter" && closeModal(false)}
            >
              <img src="/images/icons/close.png" alt="close" />
            </div>
          </>
          <div className="modal_container">
            <h2 className="modal_container__title">
              Eligible Pools
            </h2>
            <div className="modal_container__body">
              <div className="modal_container__body_table">
                {React.Children.toArray(
                  LIST.map((item) => {
                    return (
                      <div className="modal_container__body_table__data">
                        {item}
                      </div>
                    );
                  })
                )}
              </div>
              <br />
              <br />
              <h3>Snapshot Date - 15th Feb, 2022</h3>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 500;
  background-color: hsla(0, 0%, 6%, 0.5);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  .modal___fo_bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .modal__sc {
    width: min(100%, 550px);
    position: relative;
    z-index: 3;
    background-color: var(--dark-xs);
    padding: 40px;
    border-radius: 20px;
    @media (max-width: 548px) {
      padding: 20px;
      height: 100%;
    }
    @media (max-width: 548px) {
      height: 100%;
    }
    &_close {
      font: var(--h2);
      color: var(--yellow);
      position: absolute;
      top: 20px;
      right: 30px;
      @media (max-width: 548px) {
        top: 10px;
        right: 20px;
      }
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
  .modal_container {
    z-index: 7;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &__title {
      font: var(--h2);
      color: var(--gray);
      margin: 0;
      text-align: center;
      padding-bottom: 0;
    }
    &__body {
      height: 100%;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      &_table {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 5px;
        &__data {
          background-color: var(--dark-m);
        padding: 15px;
        border-radius: 12px;
        text-decoration: none;
        color: var(--gray);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: min(200px,100%);
          font: var(--h5);
        &:hover {
          background: var(--yellow-gradient-bg);
          color: var(--dark-m);
        }
        }
      }
    }
    ol {
      list-style-position: inside;
    }
    li {
      font: 600 var(--p-m);
      color: var(--gray);
    }
    h3 {
      color: var(--yellow);
      text-align: center;
    }
    p {
      font: var(--p-m);
      color: var(--gray);
      padding: 12px 0;
      max-width: 934px;
      strong {
        font: 600 var(--p-m);
        color: var(--gray);
      }
      a {
        color: var(--yellow);
        text-decoration: none;
      }
      svg {
        cursor: pointer;
      }
    }
    &__button {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 24px;
      &_close {
        padding: 10px 22.5px 12px;
        display: inline;
        font: 600 var(--p-m);
        color: var(--dark-m);
        text-transform: capitalize;
        background: var(--yellow-gradient-bg);
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
          inset -4px -4px 8px rgba(0, 0, 0, 0.25), inset 4px 4px 8px #ffc942;
        border-radius: 12px;
        transition: all ease-in-out 100ms;
        cursor: pointer;
        color: var(--dark-m);
        text-decoration: none;
        border: none;
        outline: none;
        &:hover,
        &:focus {
          box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
        }
        @media (max-width: 548px) {
          width: 100%;
        }
      }
    }
  }
`;
