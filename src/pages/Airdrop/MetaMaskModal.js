import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import styled from "styled-components";

export default function MetaMaskModal({ closeModal, setMetaMaskWallet }) {
  const { t } = useTranslation();
  const [Input, setInput] = useState();
  console.log(Input);

  const [MetaMaskConnectionState, setMetaMaskConnectionState] = useState(0);

  const handleMetamaskConnect = async () => {
    if (typeof window.ethereum !== "undefined") {
      console.log("Connecting MetaMask...");
      setMetaMaskConnectionState(1);

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];

      // console.log("Account: ", account);
      setMetaMaskConnectionState(2);
      setMetaMaskWallet(account);
      closeModal(false);
    } else {
      window.alert("Please install MetaMask to move forward with the task.");
    }
  };

  const handleConfirms = () => {
    setMetaMaskWallet(Input);
    closeModal(false);
  };

  return (
    <Container>
      <div className="modal___fo_bg" onClick={() => closeModal(false)}></div>
      <div className="modal__sc">
        <div
          className="modal__sc_close"
          onClick={() => closeModal(false)}
          onKeyPress={(e) => e.key === "Enter" && closeModal(false)}
        >
          <img src="/images/icons/close.png" alt="close" />
        </div>
        <div className="modal_container">
          <h2 className="modal_container__title">
            {t("AIRDROP_MODAL_KEPLR_TITLE")}
          </h2>
          <div className="modal_container__connect">
            <p className="modal_container__connect_instruction">
              {t("AIRDROP_MODAL_KEPLR_INSTRUCTION")}
            </p>
            <div className="section_wallets__buttons">
              <div
                className="section_wallets__buttons_button"
                onClick={handleMetamaskConnect}
              >
                <img src="/images/airdrop/MetaMask.png" alt="Metamask icon" />
                <span>{`${
                  { 0: t("CONNECT"), 1: t("CONNECTING"), 2: t("CONNECTED") }[
                    MetaMaskConnectionState
                  ]
                } MetaMask`}</span>
              </div>
            </div>
          </div>
          <div className="modal_container__or">{t("OR")}</div>
          <div className="modal_container__form">
            <label htmlFor="address" className="modal_container__form_label">
              {t("AIRDROP_MODAL_KEPLR_LABEL")}
            </label>
            <div className="modal_container__form_line2">
              <input
                type="text"
                className="modal_container__form_line2_input"
                name="address"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Valid Ethereum Address"
              />
              <button
                onClick={handleConfirms}
                className="modal_container__form_line2_button"
              >
                {t("AIRDROP_MODAL_KEPLR_BUTTON_TEXT")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
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
    max-height: 100%;
    width: min(1200px, 100%);
    position: relative;
    z-index: 3;
    background-color: var(--dark-xs);
    padding: 40px;
    border-radius: 20px;
    @media (max-width: 548px) {
      padding: 20px;
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
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &__title {
      font: var(--h2);
      color: var(--gray);
      padding-bottom: 60px;
      margin: 0;
    }
    &__connect {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      align-items: center;
      &_instruction {
        font: var(--p-l);
        color: var(--gray);
      }
    }
    &__or {
      font: var(--p-xl);
      font-size: 36px;
      text-transform: capitalize;
      padding: 32px 0;
      text-align: center;
      color: var(--gray);
    }
    &__form {
      display: flex;
      flex-direction: column;
      gap: 8px;
      &_label {
        font: var(--p-l);
        color: var(--gray);
      }
      &_line2 {
        display: flex;
        gap: 24px;
        align-items: center;
        flex-wrap: wrap;
        &_input {
          flex: 1;
          border: 1px solid var(--gray);
          border-radius: 12px;
          padding: 12px 9px;
          padding-left: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font: var(--input);
          background: transparent;
          outline: none;
          color: var(--gray);
          &::placeholder {
            color: var(--gray-deep);
          }
        }
        &_button {
          font: 600 var(--p-m);
          color: var(--yellow);
          background: transparent;
          border: 2px solid var(--yellow);
          border-radius: 12px;
          padding: 8px 63px 10px;
          cursor: pointer;
          color: var(--yellow);
          text-decoration: none;
          box-shadow: none;
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
  }
`;
