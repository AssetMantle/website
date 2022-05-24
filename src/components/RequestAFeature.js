import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const RequestAFeature = ({ closeModal }) => {
  const { t } = useTranslation();

  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [ReceiveM, setReceiveM] = useState(false);
  const [TAndC, setTAndC] = useState(false);

  const [status, setStatus] = useState();

  const FormBody = {
    fullName: FullName,
    email: Email,
    title: Title,
    description: Description,
    receiveMessage: ReceiveM,
    termsAndConditions: TAndC,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormBody);
    setStatus(200);
  };

  return (
    <Container>
      <div className="modal___fo_bg" onClick={() => closeModal(false)}></div>
      {status === "200" || status === 200 ? (
        <div className="modal_success">
          <div
            className="modal_success__close"
            onClick={() => closeModal(false)}
            onKeyPress={(e) => e.key === "Enter" && closeModal(false)}
          >
            <img src="/images/icons/close.png" alt="close" />
          </div>
          <div className="modal_success__container">
            <div className="modal_success__container_element">
              <img
                src="/images/icons/greentick.png"
                alt="Success illustration"
              />
            </div>
            <div className="modal_success__container_element">
              <h1>{t("BUG_BOUNTY_MODAL_SUBMIT_SUCCESS_TITLE")}</h1>
              <p>{t("BUG_BOUNTY_MODAL_SUBMIT_SUCCESS_DESCRIPTION")}</p>
            </div>
          </div>
        </div>
      ) : (
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
              {t("REQUEST_A_FEATURE_MODAL_TITLE")}
            </h2>
            <p className="modal_container__description">
              {t("REQUEST_A_FEATURE_MODAL_DESCRIPTION")}
            </p>
            <form
              action=""
              className="modal_container__form"
              onSubmit={handleSubmit}
            >
              <div className="modal_container__form_two_col">
                <label
                  className="modal_container__form_label"
                  htmlFor="Full Name"
                >
                  {t("REQUEST_A_FEATURE_MODAL_NAME_LABEL")}
                  <input
                    type="text"
                    placeholder="Jon Dao"
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </label>
                <label className="modal_container__form_label" htmlFor="Email">
                  {t("REQUEST_A_FEATURE_MODAL_EMAIL_LABEL")}
                  <input
                    type="email"
                    placeholder="jon.dao@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>
              <label htmlFor="Title" className="modal_container__form_label">
                {t("REQUEST_A_FEATURE_MODAL_TITLE_LABEL")}
                <input
                  type="text"
                  placeholder="Feature title"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </label>
              <label
                htmlFor="Description"
                className="modal_container__form_label"
              >
                {t("REQUEST_A_FEATURE_MODAL_DESCRIPTION_LABEL")}
                <textarea
                  name="Description"
                  id="Description"
                  placeholder="A short description of the feature."
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </label>
              <label
                htmlFor="receive_news"
                className="modal_container__form_label__checkbox"
              >
                <input
                  type="checkbox"
                  name="receive_news"
                  onChange={(e) => setReceiveM(e.target.checked)}
                  id="receive_news"
                />
                {t("REQUEST_A_FEATURE_MODAL_CHECKBOX_1")}
              </label>
              <label
                htmlFor="term_and_condition"
                className="modal_container__form_label__checkbox"
              >
                <input
                  type="checkbox"
                  name="term_and_condition"
                  onChange={(e) => setTAndC(e.target.checked)}
                  id="term_and_condition"
                />
                {t("REQUEST_A_FEATURE_MODAL_CHECKBOX_2")}
              </label>
              <div className="modal_container__form_button">
                <button type="submit" value="Submit">
                  {t("REQUEST_A_FEATURE_MODAL_SUBMIT_BUTTON_TEXT")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Container>
  );
};

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
    height: 100%;
    position: relative;
    z-index: 3;
    background-color: var(--dark-xs);
    padding: 40px;
    border-radius: 20px;
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
    &__title {
      font: var(--h2);
      color: var(--gray);
      padding-bottom: 24px;
      margin: 0;
    }
    &__description {
      font: var(--p-l);
      color: var(--gray-deep);
      padding-bottom: 60px;
      margin: 0;
    }
    &__form {
      display: flex;
      flex-direction: column;
      gap: 24px;
      &_two_col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
      }
      &_label {
        display: flex;
        flex-direction: column;
        gap: 7px;
        font: var(--label);
        color: var(--gray);
        input,
        textarea {
          font: var(--input);
          background-color: transparent;
          border-radius: 12px;
          border: 2px solid var(--gray-deep);
          color: var(--gray-deep);
          padding: 12px 16px;
        }
      }
      &_button {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        button {
          display: inline;
          font: 600 var(--p-m);
          color: var(--dark-m);
          text-transform: capitalize;
          background: var(--yellow-gradient-bg);
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
            inset -4px -4px 8px rgba(0, 0, 0, 0.25),
            inset 4px 4px 8px var(--yellow);
          border-radius: 12px;
          padding: 10px 43px 12px;
          transition: all ease-in-out 100ms;
          border: none;
          &:hover,
          &:focus {
            box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
          }
          &:disabled {
            background-color: var(--yellow-disabled);
          }
        }
      }
      &_label__checkbox {
        display: flex;
        gap: 7px;
        align-items: flex-start;
        font: var(--p-m);
        color: var(--gray);
        input[type="checkbox"] {
          display: grid;
          grid-template-columns: 1fr;
          width: 15px;
          height: 15px;
          margin-top: 6px;
          line-height: 15px;
          text-align: center;
          cursor: pointer;
          border: 0;
          appearance: none;
          -webkit-appearance: none;
          &::before {
            content: "";
            grid-area: 1/1;
            border: 2px solid var(--yellow);
            color: var(--yellow);
            width: 15px;
            height: 15px;
          }
          &:checked::before {
            content: "✓";
          }
        }
      }
    }
  }
  .modal_success {
    background-color: var(--dark-xs);
    padding: 40px;
    border-radius: 20px;
    z-index: 7;
    position: relative;
    max-width: 636px;
    &__close {
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
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 42px;
      &_element {
        &:nth-child(1) {
          @media (max-width: 548px) {
            display: flex;
          }
          img {
            margin: auto;
            width: min(100%, 100px);
          }
        }
        &:nth-child(2) {
          text-align: center;
          h1 {
            font: var(--h2);
            color: var(--gray);
            padding-bottom: 24px;
            margin: 0;
            @media (max-width: 768px) {
              font: var(--h2);
            }
          }
          p {
            font: var(--p-s);
            color: var(--gray-deep);
            margin: 0;
            /* padding-bottom: 40px; */
          }
        }
        &__button {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          @media (max-width: 548px) {
            justify-content: center;
          }
          button {
            width: 216px;
            text-align: center;
            display: inline-block;
            font: 600 var(--p-m);
            color: var(--dark-m);
            text-transform: capitalize;
            background: var(--yellow-gradient-bg);
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
              inset -4px -4px 8px rgba(0, 0, 0, 0.25),
              inset 4px 4px 8px var(--yellow);
            border-radius: 12px;
            padding: 10px 43px 12px;
            transition: all ease-in-out 100ms;
            border: none;
            &:hover,
            &:focus {
              box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
            }
            &:disabled {
              background-color: var(--yellow-disabled);
            }
          }
        }
      }
    }
  }
`;
