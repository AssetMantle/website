import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getKeplrWallet, getOsmosBalance, getValidators } from "./keplr";
import { delegateCoinTx } from "./utils/blockchainTransactions";
import config from "./config.json";

const TableData = ({
  index = 0,
  image = "/images/airdrop/dark.png",
  name = "",
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
      <h4>
        {(Number(commission) * 100).toLocaleString("en-US", {
          maximumFractionDigits: 2,
        })}
        %
      </h4>
      <div className="button_con">
        <button onClick={handleClick}>Delegate</button>
      </div>
    </div>
  );
};

const OsmosisStakeList = ({ data, Modal, ModalDataIndex }) => {
  return (
    <StakeListContainer>
      {data ? (
        <>
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
                    commission={d.commission.commissionRates.rate}
                    openModal={Modal}
                    modalDataIndex={ModalDataIndex}
                  />
                ))
              )}
          </div>
        </>
      ) : (
        <img
          className="loadingImage"
          alt={"spinning loading indicator"}
          src="images/stakedrop/loader.svg"
        />
      )}
    </StakeListContainer>
  );
};

// this function is handling the delegate amount
const OsmosisStakeForm = ({
  closeModal,
  image = "/images/airdrop/dark.png",
  name = "",
  website = "--",
  commission = 0,
  description = "Not assigned.",
  address, // osmosis address
  delegationState,
}) => {
  const [Amount, setAmount] = useState("");
  const [availableAmount, setAvailableAmount] = useState("");
  const [DelegatedAmount, setDelegatedAmount] = useState("");
  const [currentValidator, setCurrentValidator] = useState("");

  // Get balance
  useEffect(() => {
    const bs = async () => {
      const account = await getKeplrWallet("mantle-1");
      console.log("Account: ", account);
      const balance = await getOsmosBalance(account, address);
      console.log(balance.balance, balance.delegatedBalance);
      setAvailableAmount(balance.balance);
      setDelegatedAmount(balance.delegatedBalance);
      setCurrentValidator(address);
    };
    return bs();
  });

  // this function is handling the max button click
  const handleMax = () => {
    setAmount(availableAmount);
    console.log("max button clicked");
  };

  // this function is handling the delegate button click
  const handleDelegate = async (data) => {
    console.log(data);
    const response = await delegateCoinTx(this, currentValidator, Amount);
    console.log("SUCCESS: ", response);
    delegationState(response);
  };

  return (
    <StakeFormContainer>
      <div className="modal_container__body">
        <div className="modal_container__body_persona_line1">
          <div className="modal_container__body_persona_line1__image">
            <img src={image} alt={name} />
          </div>
          <div className="modal_container__body_persona_line1__details">
            <h2>{name}</h2>
            <p>
              Commission -
              {(Number(commission) * 100).toLocaleString("en-US", {
                maximumFractionDigits: 2,
              })}
              %
            </p>
          </div>
        </div>
        <div className="modal_container__body_persona_body">
          <h5>Website</h5>
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
          <h5>Description</h5>
          <p>{description}</p>
        </div>
        <div className="modal_container__body_persona_form">
          <div className="modal_container__body_persona_form__overview">
            <div className="modal_container__body_persona_form__overview_element">
              <h5>My Delegation</h5>
              <p>{DelegatedAmount} $MNTL</p>
            </div>
            <div className="modal_container__body_persona_form__overview_element">
              <h5>Available balance</h5>
              <p>{availableAmount} $MNTL</p>
            </div>
          </div>
          <div className="modal_container__body_persona_form__con">
            <label htmlFor="amount">Amount to Delegate</label>
            <div className="modal_container__body_persona_form__con_input">
              <input
                type="number"
                name="amount"
                id="amount"
                value={Amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button onClick={handleMax}>max</button>
              <span>OSMO</span>
            </div>
          </div>
        </div>
        <div className="modal_container__body_persona_button">
          <button onClick={() => closeModal(false)}>Back</button>
          <button onClick={handleDelegate} disabled={Amount>availableAmount || Amount<0.000001 ? true : false}>Delegate</button>
        </div>
      </div>
    </StakeFormContainer>
  );
};

// below function is just fetching the table data and changing between the two the table and  the delegate form
export default function OsmosisStakeModal({ closeModal, operatorAddress }) {
  const [modal, setModal] = useState(false);
  const [modalDataIndex, setModalDataIndex] = useState(0);
  const [data, setData] = useState(null);
  const [Delegated, setDelegated] = useState({transactionHash:"aklsalskajskajkokjfdjhdfkdfkmdfskmdkjjkdfkdslksdkjsdhjdsjkjijoadijdjkvdkjdjhaijkoadokmdsmkfmdjifkdkdlkdkslsdkdksk"});

  useEffect(() => {
    const ds = async () => {
      await getValidators().then((data) => {
        if (data.length !== 0) {
          console.log(data);
          setData(data);
        }
      });
    };
    return ds();
  }, []);

  return (
    <Container>
      <div className="modal___fo_bg" onClick={() => closeModal(false)}></div>
      <div
        className={`modal__sc ${!modal ? "sec" : ""} ${!data || Delegated ? "loading" : ""}`}
      >
        <div
          className="modal__sc_close"
          onClick={() => closeModal(false)}
          onKeyPress={(e) => e.key === "Enter" && closeModal(false)}
        >
          <img src="/images/icons/close.png" alt="close" />
        </div>
        <div className="modal_container">
          {/* <h2 className="modal_container__title">Eligible Pools</h2> */}
          {Delegated ? (
            Delegated.transactionHash && (
              <Success className="delegated">
                <img src="/images/icons/success.png" alt="" />
                <h2>Transaction Successful</h2>
                <p>Tx Hash:</p>
                <a
                  href={`${config.websiteURL}/${Delegated.transactionHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Delegated.transactionHash}
                </a>
              </Success>
            )
          ) : (
            <>
              {modal ? (
                <OsmosisStakeForm
                  closeModal={setModal}
                  name={data && data[modalDataIndex].description.moniker}
                  website={data && data[modalDataIndex].description.website}
                  description={data && data[modalDataIndex].description.details}
                  commission={
                    data && data[modalDataIndex].commission.commissionRates.rate
                  }
                  address={data && data[modalDataIndex].operatorAddress}
                  delegationState={setDelegated}
                />
              ) : (
                <OsmosisStakeList
                  data={data}
                  Modal={setModal}
                  ModalDataIndex={setModalDataIndex}
                />
              )}
            </>
          )}
        </div>
      </div>
      {/* </div> */}
    </Container>
  );
}

// everything below is for styling using styled-components
const StakeListContainer = styled.div`
  color: var(--gray);
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .loadingImage {
    margin: auto;
    @media (prefers-reduced-motion: no-preference) {
      animation: loading-spin infinite 20s linear;
    }
    @keyframes loading-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
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
        .button_con {
          display: flex;
          align-items: center;
          justify-content: flex-end;
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

const StakeFormContainer = styled.div`
  .modal_container {
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
            gap: 2px;
            h2 {
              font: var(--h3);
              color: var(--gray);
              padding: 0;
            }
            p {
              font: var(--p-s);
              padding: 0 !important;
              color: var(--gray-deep);
            }
          }
        }
        &_body {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 24px;
          h5 {
            color: var(--gray);
          }
          a {
            color: var(--yellow);
            text-decoration: none;
            font: var(--p-s);
          }
          p {
            font: var(--p-s);
            color: var(--gray-deep);
          }
        }
        &_form {
          padding-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          &__overview {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            &_element {
              display: flex;
              flex-direction: column;
              gap: 8px;
              h5 {
                color: var(--gray);
              }
              p {
                font: var(--p-m);
                color: var(--yellow);
              }
            }
          }
          &__con {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
            label {
              font: var(--h5);
              color: var(--gray);
            }
            &_input {
              display: flex;
              width: 100%;
              border: 1px solid var(--gray);
              border-radius: 6px;
              align-items: center;
              input {
                flex: 1;
                width: 100%;
                border: none;
                outline: none;
                padding: 8px 12px;
                background-color: transparent;
                color: var(--yellow);
                font: var(--p-s);
                -moz-appearance: textfield;
                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
              }
              button {
                margin: 6px;
                padding: 2px 8px;
                border: none;
                border-radius: 6px;
                background: var(--yellow-gradient-bg);
                box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
                  inset -4px -4px 8px rgba(0, 0, 0, 0.25),
                  inset 4px 4px 8px #ffc942;
                font: 600 var(--p-xs);
                cursor: pointer;
                &:hover,
                &:focus {
                  box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
                }
              }
              span {
                border-left: 1px solid var(--gray);
                color: var(--gray);
                padding: 8px 12px;
                font: 600 var(--p-s);
              }
            }
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

const Success = styled.div`
  &.delegated {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 12px;
    max-width: 100%;
    img {
      width: min(100%, 200px);
      height: auto;
    }
    h2 {
      color: var(--success);
    }
    p { 
      font: var(--p-m);
      color: var(--gray);
    }
    a {
      font: var(--p-m);
      color: var(--yellow);
      text-decoration: none;
      max-width: 100%;
      word-wrap: break-word;
    }
  }
`;

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
    position: relative;
    z-index: 3;
    background-color: var(--dark-m);
    padding: 40px;
    border-radius: 20px;
    width: min(100%, 550px);
    transition: all ease-in-out 500ms;
    @media (max-width: 548px) {
      padding: 20px;
      height: 100%;
    }
    @media (max-width: 548px) {
      height: 100%;
    }
    &.sec {
      width: max-content;
      max-width: 100%;
      height: 100%;
    }
    &.loading {
      display: flex;
      align-items: center;
      justify-content: center;
      width: min(500px, 100%);
      height: min(500px, 100%);
      .modal_container {
        width: 100%;
        height: 100%;
      }
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
  }
`;
