import React from "react";
import styled from "styled-components";

export default function TAndCModal({ closeModal }) {
  return (
    <>
    <Container>
      <div className="modal___fo_bg" onClick={() => closeModal(false)}></div>
      <div className="modal__sc">
        <>
          {/* <div
            className="modal__sc_close"
            onClick={() => closeModal(false)}
            onKeyPress={(e) => e.key === "Enter" && closeModal(false)}
            >
            <img src="/images/icons/close.png" alt="close" />
          </div> */}
        </>
        <div className="modal_container">
          <h2 className="modal_container__title">Term and Conditions</h2>
          <div className="modal_container__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              cumque totam assumenda sit quae voluptate corrupti eius nihil unde
              ducimus vitae, consectetur tempore maxime. Alias explicabo hic vel
              pariatur odit molestiae, nisi, officia, in quos id similique
              libero. Odit corporis earum illum quos magni quidem ipsa libero
              aliquam, ipsam iusto doloribus, explicabo minus debitis quo nulla
              esse ullam amet fugit sit asperiores ad! Ipsum, earum eos! Harum
              cupiditate tempore adipisci voluptatibus odio, quis, architecto
              maiores vel aut ipsum doloribus voluptates ipsa nostrum aperiam
              voluptatum provident neque molestiae soluta rerum distinctio nobis
              repellendus minus ratione delectus? In qui obcaecati omnis quia
              amet et nobis quas doloribus odio? Quibusdam sequi dignissimos
              incidunt aspernatur atque. Necessitatibus debitis vitae optio
              asperiores explicabo enim rem, accusamus minus mollitia alias fuga
              repellendus saepe, nisi vero voluptatem accusantium nobis natus
              quam! Voluptatum vel accusantium recusandae dicta esse? Error,
              possimus! Itaque nesciunt modi accusamus animi dolore blanditiis
              nihil illum eaque esse explicabo impedit praesentium suscipit, vel
              saepe ipsa ipsam officiis officia odit numquam vero quam. Nam
              porro ut quaerat et voluptatum aliquid molestiae, molestias velit
              quia assumenda sequi suscipit a omnis ex consequuntur ipsam
              nostrum similique, totam impedit beatae doloremque itaque eos? Sit
              autem numquam ipsam nesciunt obcaecati!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              cumque totam assumenda sit quae voluptate corrupti eius nihil unde
              ducimus vitae, consectetur tempore maxime. Alias explicabo hic vel
              pariatur odit molestiae, nisi, officia, in quos id similique
              libero. Odit corporis earum illum quos magni quidem ipsa libero
              aliquam, ipsam iusto doloribus, explicabo minus debitis quo nulla
              esse ullam amet fugit sit asperiores ad! Ipsum, earum eos! Harum
              cupiditate tempore adipisci voluptatibus odio, quis, architecto
              maiores vel aut ipsum doloribus voluptates ipsa nostrum aperiam
              voluptatum provident neque molestiae soluta rerum distinctio nobis
              repellendus minus ratione delectus? In qui obcaecati omnis quia
              amet et nobis quas doloribus odio? Quibusdam sequi dignissimos
              incidunt aspernatur atque. Necessitatibus debitis vitae optio
              asperiores explicabo enim rem, accusamus minus mollitia alias fuga
              repellendus saepe, nisi vero voluptatem accusantium nobis natus
              quam! Voluptatum vel accusantium recusandae dicta esse? Error,
              possimus! Itaque nesciunt modi accusamus animi dolore blanditiis
              nihil illum eaque esse explicabo impedit praesentium suscipit, vel
              saepe ipsa ipsam officiis officia odit numquam vero quam. Nam
              porro ut quaerat et voluptatum aliquid molestiae, molestias velit
              quia assumenda sequi suscipit a omnis ex consequuntur ipsam
              nostrum similique, totam impedit beatae doloremque itaque eos? Sit
              autem numquam ipsam nesciunt obcaecati!
            </p>
          <div className="modal_container__button">
            <button
              className="modal_container__button_close"
              onClick={() => closeModal(false)}
            >
              Deny
            </button>
            <a className="modal_container__button_close" href="/osmosis-claim">
              Accept And Continue
            </a>
          </div>
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
    }
    p {
      font: var(--p-m);
      color: var(--gray-deep);
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
