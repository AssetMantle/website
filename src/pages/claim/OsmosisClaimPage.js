import React, { useState } from "react";
import styled from "styled-components";

// import { MdDone } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import OsmosisStakeModal from "./OsmosisStake";
import {getKeplrWallet} from "./utils/keplr";
const config = require('./config.json')

export default function OsmosisClaimPage() {
  const [Address, setAddress] = useState();
  const [Bar, setBar] = useState(60);
  const [StakeModal, setStakeModal] = useState(false);

  // connect keplr
  const [KeplrConnectionState, setKeplrConnectionState] = useState(0);
  const chainId = config.mainNetChainID;
  const handleKeplrConnect = async () => {
    if (window.keplr) {
      const [offlineSigner, account] = await getKeplrWallet();
      console.log("Account: ", account);
      setKeplrConnectionState(1);
      setAddress(account);
      setKeplrConnectionState(2);
    } else {
      window.alert("Please install Keplr to move forward with the task.");
    }
  };

  const handleClaimInitial = async () => {
    const data = "INITIAL_CLAIM";
    const pub = await window.keplr.getKey(config.mainNetChainID);
    const keplrSign = await window.keplr.signArbitrary(
        config.mainNetChainID,
        Address,
        data
    );
    const res = await fetch("https://cosmos-sakedrop.assetmantle.one/qna", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signedData: data,
        signature: keplrSign.signature,
        publicKey: pub.pubKey,
      }),
    });
     console.log("Claimed Initial!..",res);
  }

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
    <>
      <Container>
        <section className="section_title">
          <h1>$MNTL Airdrop for Osmosis Liquidity Providers.</h1>
          <button
            className="section_title__button"
            onClick={handleKeplrConnect}
          >
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
            <h4>0 / -- OSMO</h4>
          </div>
          <a
            href="a"
            onClick={(e) => e.preventDefault()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="section_overview__element">
              <p>$MNTL Staking APR</p>
              <h4>105.27%</h4>
            </div>
          </a>
          <a
            href="a"
            onClick={(e) => e.preventDefault()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="section_overview__element">
              {/* <p>STARS/OSMO LP APR</p>
            <h4>201.35%</h4> */}
              <h4>Coming soon.</h4>
            </div>
          </a>
          <a
            href="a"
            onClick={(e) => e.preventDefault()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="section_overview__element">
              {/* <p>STARS/ATOM LP APR</p>
            <h4>256.15%</h4> */}
              <h4>Coming soon.</h4>
            </div>
          </a>
        </section>

        <section className="section_mission">
          <h2>My Missions</h2>
          <div className="section_mission__container">
            <div className="section_mission__container_mission">
              {" "}
              {/* add " completed" class to mark completed */}
              <div className="section_mission__container_mission__title">
                <p>Mission #1</p>
                <h4>Initial claim (30%)</h4>
              </div>
              <button
                disabled={Address ? false : true}
                onClick={handleClaimInitial}
                className="section_mission__container_mission__button"
              >
                Claim
              </button>
              {/* <div className="section_mission__container_mission__done">
                <MdDone />
              </div> */}
            </div>
            <div className="section_mission__container_mission">
              <div className="section_mission__container_mission__title">
                <p>Mission #2</p>
                <h4>Staking (10%)</h4>
              </div>
              <button
                disabled={Address ? false : true}
                className="section_mission__container_mission__button"
                onClick={() => setStakeModal(true)}
              >
                Stake
              </button>
              {/* <div className="section_mission__container_mission__done"><MdDone/></div> */}
            </div>
            <div className="section_mission__container_mission">
              <div className="section_mission__container_mission__title">
                <p>Mission #3</p>
                <h4>Vote on a governance proposal (10%)</h4>
              </div>
              <button
                disabled={true}
                className="section_mission__container_mission__button"
              >
                Vote
              </button>
              {/* <div className="section_mission__container_mission__done"><MdDone/></div> */}
            </div>
            <div className="section_mission__container_mission">
              <div className="section_mission__container_mission__title">
                <p>Mission #4</p>
                <h4>Provide liquidity to Mantle ($MNTL) pools (20%)</h4>
              </div>
              <button
                disabled={true}
                className="section_mission__container_mission__button"
              >
                Claim
              </button>
              {/* <div className="section_mission__container_mission__done"><MdDone/></div> */}
            </div>
            <div className="section_mission__container_mission">
              <div className="section_mission__container_mission__title">
                <p>Mission #5</p>
                <h4>Mint an NFT on MantlePlace (30%)</h4>
              </div>
              <button
                disabled={true}
                className="section_mission__container_mission__button"
              >
                Claim
              </button>
              {/* <div className="section_mission__container_mission__done"><MdDone/></div> */}
            </div>
          </div>
        </section>

        <section className="section_data">
          <div className="section_data__con">
            <h4>
              The amount of allocated $MNTL tokens can be calculated as follows:
            </h4>
            <div className="section_data__formula">
              <var>Allocation</var> <var>=</var> <var>750</var> <var>*</var>{" "}
              <var>(</var>
              <var>1</var> <var>-</var> <var>e</var>
              <sup>
                <var>p</var>
              </sup>
              <var>)</var>
            </div>
            <div className="section_data__exp_formula">
              <p>where;</p>
              <br />
              <div className="section_data__exp_formula__var">
                <p>
                  <var>x</var> <var>=</var> <var>$</var> value of locked tokens
                  in pools (Bonded)
                </p>
                <p>
                  <var>y</var> <var>=</var> <var>$</var> value of unlocked
                  tokens in pools (Unbonded)
                </p>
                <p>
                  <var>z</var> <var>=</var> <var>1.25</var> <var>*</var>{" "}
                  <var>x</var> <var>+</var> <var>y</var>
                </p>
                <p>
                  <var>p</var> <var>=</var> <var>(</var>
                  <var>-z</var>
                  <var>/</var>
                  <var>100</var>
                  <var>)</var>
                </p>
              </div>
            </div>
            <br />
            <h4>Maximum Allocation per wallet < AiOutlineArrowRight /> 750 $MNTL</h4>
          </div>
        </section>
      </Container>
      {StakeModal && (
        <OsmosisStakeModal closeModal={setStakeModal} address={Address} />
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
      flex-wrap: wrap;
      gap: 24px;
      @media (max-width: 548px) {
        flex-direction: column;
      }
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
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p {
          font: var(--p-s);
          color: var(--gray-deep);
          padding-bottom: 8px;
        }
        h4 {
          font: var(--h4);
        }
        &:hover {
          background: var(--yellow-gradient-bg);
          color: var(--dark-m);
          p {
            color: var(--dark-m);
          }
        }
      }
      a {
        text-decoration: none;
      }
    }
    &_mission {
      h2 {
        font: var(--h2);
        color: var(--gray);
        padding: 24px 0;
      }
      &__container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 12px;
        &_mission {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: var(--dark-m);
          padding: 24px 20px;
          border-radius: 12px;
          gap: 10px;
          width: min(100%, 410.66px);
          min-height: 147.19px;
          @media (max-width: 548px) {
            flex-wrap: wrap;
          }
          &.completed {
            border: 2px solid var(--success);
            position: relative;
            &::after {
              content: "Completed";
              color: var(--success);
              font: 600 var(--p-s);
              position: absolute;
              right: 15px;
              top: -12px;
            }
            &::before {
              content: "";
              position: absolute;
              height: 10px;
              width: 85px;
              background: var(--dark-m);
              top: -2px;
              right: 13px;
            }
            .section_mission__container_mission__button {
              opacity: 0;
            }
            .section_mission__container_mission__done {
              opacity: 0;
            }
          }
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
          &__done {
            color: var(--success);
            font: var(--h3);
          }
        }
      }
    }
    &_data {
      padding-top: 40px;
      &__con {
        color: var(--gray);
        font-size: 24px;
        background: var(--dark-m);
        border-radius: 12px;
        padding: 24px;
      }
      h4 {
        font: var(--h4);
        /* padding: 40px 0 24px; */
      }
      var {
        color: var(--yellow);
      }
      &__formula {
        text-align: center;
      }
    }
  }
`;
