import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TableData = ({
  index = 0,
  image = "/images/airdrop/dark.png",
  name = "Jon dao",
  votingPower = 0,
  commission = 0,
  openModal,
  modalDataIndex,
}) => {
  const handleClick = () => {
    modalDataIndex(index);
    openModal(true);
  };
  return (
    <div className="table__element_option">
      <h4>
        <img src={image} alt={name} />
        {name}
      </h4>
      <h4>{commission}%</h4>
      <button onClick={handleClick}>Manage</button>
    </div>
  );
};

const Modal = ({
  closeModal,
  image = "/images/airdrop/dark.png",
  name = "Jon dao",
  website = "--",
  commission = 0,
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magni rem libero similique consequuntur ipsa debitis repudiandae, exercitationem hic culpa.",
}) => {
  return (
    <ModalContainer>
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
          {/* <h2 className="modal_container__title">Eligible Pools</h2> */}
          <div className="modal_container__body">
            <div className="modal_container__body_persona_line1">
              <div className="modal_container__body_persona_line1__image">
                <img src={image} alt={name} />
              </div>
              <div className="modal_container__body_persona_line1__details">
                <h2>{name}</h2>
                <p>Commission - {commission}%</p>
              </div>
            </div>
            <div className="modal_container__body_persona_body">
              <h4>Website</h4>
              <a href={website} target="_blank" rel="noopener noreferrer">
                {website}
              </a>
              <h4>Description</h4>
              <p>{description}</p>
            </div>
            <div className="modal_container__body_persona_button">
              <button>Delegate</button>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default function OsmosisStakePage() {
  const [modal, setModal] = useState(false);
  const [modalDataIndex, setModalDataIndex] = useState(0);
  const [data, setData] = useState();

  console.log(data && data[modalDataIndex].description.moniker);

  useEffect(() => {
    fetch("https://rest.test-mantle-1.assetmantle.one/staking/validators")
      .then((res) => res.json())
      .then((data) => {
        if (data.result && data.result.length !== 0) {
          setData(data.result);
        }
      });
  }, []);
  return (
    <>
      <Container>
        <div className="table__title">Active Validators</div>
        <div className="table__element">
          <div className="table__element_option">
            <h4>Name</h4>
            <h4>Commission</h4>
            <p></p>
          </div>
          {data &&
            React.Children.toArray(
              data.map((d, i) => (
                <TableData
                  index={i}
                  image="/images/airdrop/dark.png"
                  name={d.description.moniker}
                  votingPower={0}
                  commission={d.commission.commission_rates.rate * 100}
                  openModal={setModal}
                  modalDataIndex={setModalDataIndex}
                />
              ))
            )}
        </div>
      </Container>
      {modal && (
        <Modal
          closeModal={setModal}
          name={data && data[modalDataIndex].description.moniker}
          website={data && data[modalDataIndex].description.website}
          description={data && data[modalDataIndex].description.details}
          commission={
            data && data[modalDataIndex].commission.commission_rates.rate * 100
          }
        />
      )}
    </>
  );
}

const Container = styled.main`
  max-width: 1440px;
  scroll-behavior: smooth;
  margin: 0 auto;
  background-image: url("/images/bg/bg_assets.svg");
  background-size: 100vw auto;
  background-repeat: no-repeat;
  z-index: 1;
  padding: 20px 92px;
  color: var(--gray);
  width: 100%;
  overflow-x: auto;
  @media (max-width: 768px) {
    background-image: url("/images/bg/tab_bg_assets.svg");
    padding: 80px 40px;
  }
  @media (max-width: 548px) {
    background-image: url("/images/bg/m_bg_assets.svg");
    padding: 80px 20px;
  }
  .table {
    &__title {
        font: var(--p-m);
      color: var(--gray-deep);
      padding-bottom: 24px;
    }
    &__element {
      background-color: var(--dark-s);
      box-shadow: var(--dark-shadow);
      border-radius: 12px;
      width: 100%;
      @media (max-width: 1024px) {
        width: max-content;
      }
      &_option {
        display: grid;
        grid-template-columns: 2fr 2fr 2fr;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding: 24px;
        text-align: center;
        @media (max-width: 768px) {
          padding: 24px 20px;
        }
        &:not(:last-child) {
          border-bottom: 1px solid var(--dark-xs);
        }
        h4 {
          color: var(--gray);
          &:nth-child(1) {
            text-align: left;
            display: flex;
            align-items: center;
          }
        }
        p {
          font: 600 var(--p-m);
          color: var(--gray);
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        button {
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
          &:disabled {
            background: none;
            background-color: var(--yellow-disabled) !important;
            box-shadow: none;
            &:hover,
            &:focus {
              box-shadow: none;
            }
          }
        }
        &:first-child {
          h4 {
            color: var(--gray-deep);
          }
          p {
            font: var(--h4);
            color: var(--gray-deep);
            text-align: center;
          }
        }
      }
    }
  }
`;

const ModalContainer = styled.div`
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
      &_persona {
        &_line1 {
          display: flex;
          align-items: center;
          gap: 24px;
          &__image {
            width: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            img {
              width: 100%;
              height: auto;
            }
          }
          &__details {
            display: flex;
            flex-direction: column;
            gap: 8px;
            h2 {
              color: var(--gray);
              padding: 0;
            }
            p {
              font: var(--p-m);
              padding: 0;
              color: var(--gray-deep);
            }
          }
        }
        &_body {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-top: 24px;
          h4 {
            color: var(--gray);
          }
          a {
            color: var(--yellow);
            text-decoration: none;
          }
          p {
            font: var(--p-m);
            color: var(--gray-deep);
          }
        }
        &_button {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 24px;
          flex-wrap: wrap;
          padding: 24px 5px 5px 0;
          button {
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
            &:disabled {
              background: none;
              background-color: var(--yellow-disabled) !important;
              box-shadow: none;
              &:hover,
              &:focus {
                box-shadow: none;
              }
            }
          }
        }
      }
    }
  }
`;
