import React, { useState } from "react";
import styled from "styled-components";

export default function BugBountyModal({ closeModal }) {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [ReceiveM, setReceiveM] = useState(false);
  const [TAndC, setTAndC] = useState(false);
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
  };

  return (
    <Container>
      <div className="modal___fo_bg" onClick={() => closeModal(false)}></div>
      <div className="modal__sc">
        <div className="modal_container">
          <h2 className="modal_container__title">Bug Bounty</h2>
          <p className="modal_container__description">
            Did you spot a bug? Let us know and there might just be something
            for you!
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
                Full Name
                <input
                  type="text"
                  placeholder="Jon Dao"
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </label>
              <label className="modal_container__form_label" htmlFor="Email">
                Email
                <input
                  type="email"
                  placeholder="jon.dao@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>
            <label htmlFor="Title" className="modal_container__form_label">
              Title
              <input
                type="text"
                placeholder="Report a bug."
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
            <label
              htmlFor="Description"
              className="modal_container__form_label"
            >
              Description
              <textarea
                name="Description"
                id="Description"
                placeholder="A short description of the issue you found."
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
              I would like to receive news and information about developments at
              AssetMantle.{" "}
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
              I accept the terms and conditions
            </label>
            <div className="modal_container__form_button">
              <button type="submit" value="Submit">
                Submit
              </button>
            </div>
          </form>
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
    height: 100%;
    position: relative;
    height: min(max-content, 100%);
    z-index: 3;
    background-color: var(--dark-xs);
    padding: 40px;
    border-radius: 20px;
    @media (max-width: 548px) {
      padding: 20px;
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
        }
      }
      &_label__checkbox {
        display: flex;
        gap: 7px;
        align-items: center;
        font: var(--p-s);
        color: var(--yellow);
        input[type="checkbox"] {
          display: grid;
          width: 15px;
          height: 15px;
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
          }
          &:checked::before {
            content: "✓";
          }
        }
      }
    }
  }
`;
