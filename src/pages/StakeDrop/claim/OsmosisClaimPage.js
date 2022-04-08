import React, { useState } from "react";
import styled from "styled-components";

export default function OsmosisClaimPage() {
  const [Address, setAddress] = useState();
  const [Bar, setBar] = useState(60);

  // connect keplr
  const [KeplrConnectionState, setKeplrConnectionState] = useState(0);
  const chainId = "osmosis-1";
  const handleKeplrConnect = async () => {
    if (window.keplr) {
      setKeplrConnectionState(1);
      let offlineSigner = window.keplr.getOfflineSigner(chainId);
      let accounts = await offlineSigner.getAccounts();
      const account = accounts[0].address;
      setAddress(account);
      setKeplrConnectionState(2);
    } else {
      window.alert("Please install Keplr to move forward with the task.");
    }
  };

  // connect bar

  const BarContainer = styled.div`
    width: 100%;
    height: 12px;
    background: var(--dark-m);
    border-radius: 12px;
    display: flex;
    .section_progress__line_2__bar {
      height: 100%;
      background: var(--yellow-gradient-bg);
      width: ${Bar}%;
      border-radius: 12px;
      margin-right: auto;
    }
  `;

  return (
    <Container>
      <section className="section_title">
        <h1>Airdrop</h1>
        <button className="section_title__button" onClick={handleKeplrConnect}>
          {`${
            {
              0: "Connect Wallet",
              1: "Connecting Wallet",
              2: "Wallet Connected",
            }[KeplrConnectionState]
          }`}
        </button>
      </section>

      <section className="section_progress">
        <div className="section_progress__line_1">
          <h2>Your Progress</h2>
          <p>{Bar}%</p>
        </div>
        <BarContainer>
          <div className="section_progress__line_2__bar"></div>
        </BarContainer>
      </section>

      <section className="section_overview">
        <div className="section_overview__element">
          <p>Claimed</p>
          <h4>0 / -- STARS</h4>
        </div>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <div className="section_overview__element">
            <p>STARS Staking APR</p>
            <h4>105.27%</h4>
          </div>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <div className="section_overview__element">
            <p>STARS/OSMO LP APR</p>
            <h4>201.35%</h4>
          </div>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <div className="section_overview__element">
            <p>STARS/ATOM LP APR</p>
            <h4>256.15%</h4>
          </div>
        </a>
      </section>

      <section className="section_mission">
        <h2>My Missions</h2>
        <div className="section_mission__container">
          <div className="section_mission__container_mission">
            <div className="section_mission__container_mission__title">
              <p>Mission #</p>
              <h4>MissionName</h4>
            </div>
            <button
              disabled={true}
              className="section_mission__container_mission__button"
            >
              Claim
            </button>
          </div>
          <div className="section_mission__container_mission">
            <div className="section_mission__container_mission__title">
              <p>Mission #</p>
              <h4>MissionName</h4>
            </div>
            <button
              disabled={true}
              className="section_mission__container_mission__button"
            >
              Claim
            </button>
          </div>
          <div className="section_mission__container_mission">
            <div className="section_mission__container_mission__title">
              <p>Mission #</p>
              <h4>MissionName</h4>
            </div>
            <button
              disabled={true}
              className="section_mission__container_mission__button"
            >
              Claim
            </button>
          </div>
          <div className="section_mission__container_mission">
            <div className="section_mission__container_mission__title">
              <p>Mission #</p>
              <h4>MissionName</h4>
            </div>
            <button
              disabled={true}
              className="section_mission__container_mission__button"
            >
              Claim
            </button>
          </div>
          <div className="section_mission__container_mission">
            <div className="section_mission__container_mission__title">
              <p>Mission #</p>
              <h4>MissionName</h4>
            </div>
            <button
              disabled={true}
              className="section_mission__container_mission__button"
            >
              Claim
            </button>
          </div>
        </div>
      </section>
    </Container>
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
  @media (max-width: 768px) {
    background-image: url("/images/bg/tab_bg_assets.svg");
    padding: 80px 40px;
  }
  @media (max-width: 548px) {
    background-image: url("/images/bg/m_bg_assets.svg");
    padding: 80px 20px;
  }
  color: var(--gray);
  .section {
    &_title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &__button {
        width: 296px;
        border-radius: 12px;
        background: var(--yellow-gradient-bg);
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
          inset -4px -4px 8px rgba(0, 0, 0, 0.25), inset 4px 4px 8px #ffc942;
        padding: 10px 22px 9px;
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: center;
        font: 600 var(--p-m);
        color: var(--dark-m);
        cursor: pointer;
        border: none;
        outline: none;
        img {
          height: 26.25px;
        }
        &:disabled {
          // background: none;
          // background-color: var(--yellow-disabled) !important;
          box-shadow: none;
          opacity: 0.5;
          cursor: not-allowed;
          &:hover,
          &:focus {
            box-shadow: none;
          }
        }
        @media (max-width: 548px) {
          width: 100%;
        }
      }
    }
    &_progress {
      &__line_1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 0;
        h2 {
          font: var(--h3);
          color: var(--gray-deep);
        }
        p {
          font: 600 var(--p-m);
          color: var(--gray);
        }
      }
    }
    &_overview {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      padding: 24px 0;
      @media (max-width: 1025px) {
        grid-template-columns: 1fr;
      }
      &__element {
        background-color: var(--dark-m);
        padding: 15px;
        border-radius: 12px;
        text-decoration: none;
        color: var(--gray);
        p {
          font: var(--p-s);
          color: var(--gray-deep);
          padding-bottom: 8px;
        }
        h4 {
          font: var(--h4);
        }
      }
      a {
        text-decoration: none;
        .section_overview__element:hover {
          background: var(--yellow-gradient-bg);
          color: var(--dark-m);
        }
      }
    }
    &_mission {
      h2 {
        font: var(--h2);
        color: var(--gray);
        padding: 24px 0;
      }
      &__container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
        &_mission {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: var(--dark-m);
          padding: 24px 20px;
          border-radius: 12px;
          &__title {
            p {
              font: var(--p-s);
              color: var(--gray-deep);
              padding-bottom: 8px;
            }
          }
          &__button {
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
