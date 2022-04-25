import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { MdDone } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

import OsmosisStakeModal from "./OsmosisStake";
import { getKeplrWallet } from "./utils/keplr";
const config = require("./config.json");

export default function OsmosisClaimPage() {
  const [apr, setApr] = useState(0);
  const [MNTLAddress, setMNTLAddress] = useState();
  const [OsmosisAddress, setOsmosisAddress] = useState();
  const [Bar, setBar] = useState(0);
  const [StakeModal, setStakeModal] = useState(false);
  const [Response, setResponse] = useState({
    success: false,
    address: "",
    message: "Not eligible",
  });

  const [NotEligible, setNotEligible] = useState();

  const [ClaimResponse, setClaimResponse] = useState({
    success: false,
    address: "",
    initialClaim: {
      success: false,
      txHash: "",
    },
    stake: {
      success: false,
      txHash: "",
    },
    vote: {
      success: false,
      txHash: "",
    },
  });

  // connect keplr
  const [KeplrConnectionState, setKeplrConnectionState] = useState(0);
  const MNTLchainId = config.mainNetChainID;
  console.log(MNTLchainId);
  const OsmosisChainID = "osmosis-1";

  useEffect(() => async () => {
    const total_supply =
      "https://rest.assetmantle.one/cosmos/bank/v1beta1/supply";
    const inflation =
      "https://rest.assetmantle.one/cosmos/mint/v1beta1/inflation";
    const bondedAmount =
      "https://rest.assetmantle.one/cosmos/staking/v1beta1/pool";

    function getAPR() {
      return axios
        .all([
          axios.get(total_supply),
          axios.get(inflation),
          axios.get(bondedAmount),
        ])
        .then(
          axios.spread((totalSupply, inflation, bondedAmount) => {
            totalSupply = totalSupply.data.supply[0].amount;
            inflation = inflation.data.inflation;
            bondedAmount = bondedAmount.data.pool.bonded_tokens;
            return (inflation * totalSupply * 100) / bondedAmount;
          })
        )
        .catch((error) => {
          return 0;
          // console.log(error);
        });
    }
    async function getApr() {
      const ap = await getAPR();
      setApr(ap);
    }
    getApr();
  });

  const handleKeplrConnect = async () => {
    if (window.keplr) {
      // $MNTL address
      const [offlineSigner, account] = await getKeplrWallet();
      console.log("offlineSigner: ", offlineSigner);
      console.log("Account: ", account);
      setKeplrConnectionState(1);
      setMNTLAddress(account);

      // Osmosis address
      let OsmosisOfflineSigner = await window.keplr.getOfflineSignerAuto(
        OsmosisChainID
      );
      let OsmosisAccounts = await OsmosisOfflineSigner.getAccounts();
      const OsmosisAccount = OsmosisAccounts[0].address;
      setOsmosisAddress(OsmosisAccount);
      setKeplrConnectionState(2);

      // fetching data from backend
      fetch(`https://airdrop-data.assetmantle.one/keplr/${OsmosisAccount}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success.toString() === "true") {
            setResponse(data);
          } else {
            setResponse({
              success: false,
              address: account,
              message: "Not eligible",
            });
          }
        })
        .catch((err) => console.log(err));

      //  Fetching claim response
      fetch(`${config.claimPageClaimEndPoint}claim/${OsmosisAccount}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setClaimResponse(data);
          } else {
            setClaimResponse({
              success: false,
              address: "",
              initialClaim: {
                success: false,
                txHash: "",
              },
              stake: {
                success: false,
                txHash: "",
              },
              vote: {
                success: false,
                txHash: "",
              },
            });
            setNotEligible(true);
          }
        })
        .catch((err) => console.log(err));
    } else {
      window.alert("Please install Keplr to move forward with the task.");
    }
  };

  const handleClaimInitial = async () => {
    const data = "INITIAL_CLAIM";
    const pub = await window.keplr.getKey("osmosis-1");
    const keplrSign = await window.keplr.signArbitrary(
      "osmosis-1",
      OsmosisAddress,
      data
    );
    const res = await fetch(`${config.claimPageClaimEndPoint}claim/`, {
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
    console.log("Claimed Initial!..", res);

    //  Fetching claim response
    fetch(`${config.claimPageClaimEndPoint}claim/${OsmosisAddress}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setClaimResponse(data);
        } else {
          setClaimResponse({
            success: false,
            address: "",
            initialClaim: {
              success: false,
              txHash: "",
            },
            stake: {
              success: false,
              txHash: "",
            },
            vote: {
              success: false,
              txHash: "",
            },
          });
          setNotEligible(true);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let bar = 0;
    if (ClaimResponse.success && ClaimResponse.initialClaim.success) {
      bar += 30;
    }
    if (ClaimResponse.success && ClaimResponse.stake.success) {
      bar += 10;
    }
    if (ClaimResponse.success && ClaimResponse.vote.success) {
      bar += 10;
    }
    setBar(bar);
  }, [ClaimResponse]);

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

        {MNTLAddress && (
          <section className="section_address">
            <h2>Addresses:</h2>
            <div className="section_address__address">
              <p>
                <strong>Osmosis: </strong>
                <br />
                {OsmosisAddress}
              </p>
              <p>
                <strong>AssetMantle: </strong>
                <br />
                {MNTLAddress}
              </p>
            </div>
          </section>
        )}

        {NotEligible === true && (
          <section className="section_notEligible">
            You're not eligible for this mission!
          </section>
        )}

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
            <h4>
              {Response && Response.allocation
                  ? Number(Response.allocation * Bar/100).toLocaleString("en-US", {
                    maximumFractionDigits: 4,
                  })
                  : "0"} /{" "}
              {Response && Response.allocation
                ? Number(Response.allocation).toLocaleString("en-US", {
                    maximumFractionDigits: 4,
                  })
                : "--"}{" "}
              $MNTL
            </h4>
          </div>
          <a
            href="a"
            onClick={(e) => e.preventDefault()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="section_overview__element">
              <p>$MNTL Staking APR</p>
              <h4>
                {Number(apr).toLocaleString("en-US", {
                  maximumFractionDigits: 4,
                })}
              </h4>
            </div>
          </a>
          <a
            href="a"
            onClick={(e) => e.preventDefault()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="section_overview__element">
              <p>Total Participants</p>
              <h4>N/A</h4>
            </div>
          </a>
          <a
            href="a"
            onClick={(e) => e.preventDefault()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="section_overview__element">
              <p>Distribution Left</p>
              <h4>
                {Number(30000000).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
                {` $MNTL`}
              </h4>
            </div>
          </a>
        </section>

        <section className="section_mission">
          <h2>My Missions</h2>
          <div className="section_mission__container">
            <div
              className={`section_mission__container_mission ${
                ClaimResponse.success &&
                ClaimResponse.initialClaim.success &&
                "completed"
              }`}
            >
              {/* add " completed" class to mark completed */}
              <div className="section_mission__container_mission__title">
                <p>Mission #1</p>
                <h4>Initial claim (30%)</h4>
              </div>
              <button
                disabled={
                  ClaimResponse.success ? ClaimResponse.initialClaim.success : true
                }
                onClick={handleClaimInitial}
                className="section_mission__container_mission__button"
              >
                Claim
              </button>
              <div className="section_mission__container_mission__done">
                <MdDone />
              </div>
            </div>
            <div
              className={`section_mission__container_mission ${
                ClaimResponse.success &&
                ClaimResponse.stake.success &&
                "completed"
              }`}
            >
              <div className="section_mission__container_mission__title">
                <p>Mission #2</p>
                <h4>Staking (10%)</h4>
              </div>
              <button
                disabled={ClaimResponse.success ? ClaimResponse.stake.success : true}
                className="section_mission__container_mission__button"
                onClick={() => setStakeModal(true)}
              >
                Stake
              </button>
              <div className="section_mission__container_mission__done">
                <MdDone />
              </div>
            </div>
            <div
              className={`section_mission__container_mission ${
                ClaimResponse.success &&
                ClaimResponse.vote.success &&
                "completed"
              }`}
            >
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
              <div className="section_mission__container_mission__done">
                <MdDone />
              </div>
            </div>
            <div className={`section_mission__container_mission`}>
              <div className="section_mission__container_mission__title">
                <p>Mission #4</p>
                <h4>Provide liquidity to Mantle ($MNTL) pools (20%)</h4>
              </div>
              <button
                disabled={true}
                className="section_mission__container_mission__button"
              >
                Provide
              </button>
              <div className="section_mission__container_mission__done">
                <MdDone />
              </div>
            </div>
            <div className={`section_mission__container_mission`}>
              <div className="section_mission__container_mission__title">
                <p>Mission #5</p>
                <h4>Mint an NFT on MantlePlace (30%)</h4>
              </div>
              <button
                disabled={true}
                className="section_mission__container_mission__button"
              >
                Mint
              </button>
              <div className="section_mission__container_mission__done">
                <MdDone />
              </div>
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
            <h4>
              Snapshot Date <AiOutlineArrowRight />{" "}
              <span>15 February, 2022</span>
            </h4>
            <h4>
              Maximum Allocation per wallet <AiOutlineArrowRight />{" "}
              <span>750 $MNTL</span>
            </h4>
          </div>
        </section>
      </Container>
      {StakeModal && (
        <OsmosisStakeModal closeModal={setStakeModal} address={MNTLAddress} ClaimResponse={setClaimResponse} />
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
    &_address {
      padding: 24px 0 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
      color: var(--gray);
      &__address {
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      p {
        font: var(--p-m);
        color: var(--gray-deep);
        word-wrap: break-word;
        strong {
          font: 600 var(--p-m);
          color: var(--gray);
        }
      }
    }
    &_notEligible {
      padding: 24px 0;
      color: red;
      text-align: center;
      font: var(--p-m);
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
          @media (max-width: 1017px) {
            width: 100%;
          }
          @media (max-width: 548px) {
            flex-wrap: wrap;
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
            display: none;
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
              display: none;
            }
            .section_mission__container_mission__done {
              display: flex;
            }
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
        span {
          color: var(--yellow);
        }
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
