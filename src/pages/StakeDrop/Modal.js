import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { sendCoinTx } from "./send";

export default function Modal({ modalTitle, closeModal }) {
  const { t } = useTranslation();

  const [address, setAddress] = useState("");
  const [ButtonText, setButtonText] = useState();

  const handleClick = async () => {
    const response = await sendCoinTx(
      "cosmos142w23c7vwuxrj5p0yyg6x0vxaqxn92xrpjcdmv",
      "cosmos",
      0.000001
    );
    console.log(response);
    response === 0 ? setButtonText(0) : alert(response);
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
          <h2 className="modal_container__title">{modalTitle}</h2>
          <section className="modal_container__magicTransaction dark__BG">
            <h3 className="modal_container__magicTransaction_title">
              {t("STAKEDROP_MODAL_STEP_1_TITLE")}{" "}
              <span>({t("STAKEDROP_MODAL_STEP_1_OPTIONAL_TEXT")})</span>
            </h3>
            <button
              className="modal_container__magicTransaction_button"
              onClick={handleClick}
            >
              {ButtonText === 0
                ? t("COMPLETED")
                : t("STAKEDROP_MODAL_STEP_1_BUTTON")}
            </button>
          </section>
          <section className="modal_container__step2 dark__BG">
            <h3 className="modal_container__step2_title">
              {t("STAKEDROP_MODAL_STEP_2_TITLE")}
            </h3>
            <div className="modal_container__step2_body">
              <div className="modal_container__step2_body__form">
                <div className="modal_container__step2_body__form_line_1">
                  <label className="modal_container__step2_body__form_line_1__label">
                    {t("STAKEDROP_MODAL_STEP_2_FORM_LABEL")}
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={t("STAKEDROP_MODAL_STEP_2_FORM_PLACEHOLDER")}
                    className="modal_container__step2_body__form_line_1__input"
                  />
                </div>
                <div className="modal_container__step2_body__form_line_2">
                  <button className="modal_container__step2_body__form_line_2_button">
                    {t("STAKEDROP_MODAL_STEP_2_FORM_BUTTON")}
                  </button>
                </div>
              </div>
              <div className="modal_container__step2_body__address">
                <div className="modal_container__step2_body__address_label">
                  {t("STAKEDROP_MODAL_STEP_2_Address_LABEL")}
                </div>
                <div className="modal_container__step2_body__address_value">
                  {address === "" || address === null || address === undefined
                    ? "--"
                    : address}
                </div>
              </div>
              <div className="modal_container__step2_body__dataSet">
                <div className="modal_container__step2_body__dataSet_col">
                  <div className="modal_container__step2_body__dataSet_col__label"></div>
                  <div className="modal_container__step2_body__dataSet_col__value"></div>
                </div>
                <div className="modal_container__step2_body__dataSet_col">
                  <div className="modal_container__step2_body__dataSet_col__label"></div>
                  <div className="modal_container__step2_body__dataSet_col__value"></div>
                </div>
                <div className="modal_container__step2_body__dataSet_col">
                  <div className="modal_container__step2_body__dataSet_col__label"></div>
                  <div className="modal_container__step2_body__dataSet_col__value"></div>
                </div>
              </div>
            </div>
          </section>
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
  padding: 80px 92px;
  @media (max-width: 768px) {
    padding: 40px;
  }
  @media (max-width: 548px) {
    padding: 20px;
  }
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
    height: 100%;
    position: relative;
    z-index: 3;
    background-color: var(--dark-xs);
    border-radius: 20px;
    width: 100%;
    padding: 60px;
    @media (max-width: 768px) {
      padding: 40px;
    }
    @media (max-width: 548px) {
      padding: 20px;
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
    display: flex;
    flex-direction: column;
    gap: 60px;
    &__title {
      font: var(--h2);
      color: var(--gray);
      margin: 0;
    }
    .dark__BG {
      background-color: var(--dark);
      border-radius: 12px;
    }
    &__magicTransaction {
      padding: 32px 40px;
      display: flex;
      gap: 24px;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      &_title {
        color: var(--gray);
        font-size: 24px;
        span {
          font: var(--p-s);
          color: var(--gray-deep);
        }
      }
      &_button {
        display: inline;
        border: none;
        font: 600 var(--p-m);
        color: var(--dark-m);
        text-transform: capitalize;
        background: var(--yellow-gradient-bg);
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
          inset -4px -4px 8px rgba(0, 0, 0, 0.25), inset 4px 4px 8px #ffc942;
        border-radius: 12px;
        padding: 10px 28px 12px;
        transition: all ease-in-out 100ms;
        cursor: pointer;
        color: var(--dark-m);
        text-decoration: none;
        &:hover,
        &:focus {
          box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
        }
      }
    }
    &__step2 {
      &_title {
        color: var(--gray);
        font-size: 24px;
        padding: 40px;
        border-bottom: 1px solid #3d3d3d;
      }
      &_body {
        padding: 40px;
        &__form {
          display: flex;
          gap: 24px;
          flex-direction: column;
          justify-content: flex-end;
          &_line_1 {
            display: flex;
            gap: 40px;
            align-items: center;
            justify-content: flex-start;
            &__label {
              font: var(--p-m);
              color: var(--gray);
            }
            &__input {
              font: var(--p-m);
              color: var(--gray);
              background-color: var(--dark-s);
              padding: 16px;
              border-radius: 12px;
              flex: 1;
              border: none;
              outline: none;
              min-width: 250px;
              &::placeholder {
                color: var(--gray-deep);
              }
            }
          }
          &_line_2 {
            display: flex;
            justify-content: flex-end;
            button {
              display: inline-block;
              border: none;
              font: 600 var(--p-m);
              color: var(--yellow);
              background: transparent;
              border: 2px solid var(--yellow);
              border-radius: 12px;
              padding: 8px 31px 10px;
              cursor: pointer;
              width: max-content;
              color: var(--yellow);
              text-decoration: none;
              &:hover,
              &:focus {
                box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
              }
            }
          }
        }
        &__address {
          padding: 40px 0;
          display: flex;
          gap: 49px;
          align-items: center;
          flex-wrap: wrap;
          font: var(--p-m);
          color: var(--gray);
        }
      }
    }
  }
`;
