import styled from "styled-components";
// import { RiFileCopyLine } from "react-icons/ri";

export default function HowToModal({ address, closeModal }) {
  // const handleCopy = () => {
  //   navigator.clipboard.writeText(address);
  //   alert("Copied to clipboard!");
  // };
  // const handleCopy2 = () => {
  //   navigator.clipboard.writeText(
  //     `persistenceCore tx bank send [FROM_YOUR_PERSISTENCE_ADDRESS] persistence1muxl7jkupqq95l6lpfewxjf3nsgmaepgcvgyde 1uxprt --chain-id core-1 --fees 3000uxprt --node https://rpc.persistence.audit.one:443 --memo [YOUR_COSMOS_ADDRESS]`
  //   );
  //   alert("Copied to clipboard!");
  // };
  return (
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
          <h2 className="modal_container__title">
            Magic Transaction Guide (Terra StakeDrop Campaign)
          </h2>
          <p>
            Magic Transaction needs to be sent only once for confirming your
            participation in the campaign.
          </p>
          <p>
            To begin your participation in StakeDrop Campaign, please send{" "}
            <strong>0.000001 $LUNA</strong> to the following address:{" "}
          </p>
          <p>
            <strong>
              {address}
              {"  "}
              {/* <RiFileCopyLine onClick={handleCopy} /> */}
            </strong>
          </p>
          <p>
            <strong>Terra Station Users:</strong>
            <br />
            To the recipient address ( as mentioned above) send 0.000001 $LUNA
            and mention your cosmos address in the memo field.
          </p>
          <p>
            <strong>CLI Users:</strong>
            <br />
            Please follow the following command to do the magic transaction.
            Remember to put your Cosmos address in the memo field.
          </p>
          <p>
            <strong>
              terrad tx bank send [FROM_YOUR_TERRA_ADDRESS] {address} 1uluna
              --chain-id columbus-5 --fees 3000uluna --node{" "}
              <a href="https://rpc-columbus.keplr.app">
                https://rpc-columbus.keplr.app
              </a>{" "}
              --memo [YOUR_COSMOS_ADDRESS]
              {"  "}
              {/* <RiFileCopyLine onClick={handleCopy2} /> */}
            </strong>
          </p>
          <p>
            <strong>
              Note: The amount sent will be refunded back to the origin address
            </strong>
          </p>
          <div className="modal_container__button">
            <button
              className="modal_container__button_close"
              onClick={() => closeModal(false)}
            >
              Close
            </button>
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
      margin: 0;
      text-align: center;
      padding-bottom: 24px;
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
