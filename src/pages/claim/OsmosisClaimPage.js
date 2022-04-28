import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import axios from "axios";

import { MdDone } from "react-icons/md";
import {
  AiOutlineArrowRight,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";

import OsmosisStakeModal from "./OsmosisStake";
import { getMantleAddress } from "./utils/address";
import TAndCModal from "./TAndCModal";
import config from "./config";

export default function OsmosisClaimPage() {
  const { t } = useTranslation();
  const [apr, setApr] = useState(0);
  const [MNTLAddress, setMNTLAddress] = useState("");
  const [OsmosisAddress, setOsmosisAddress] = useState();
  const [Bar, setBar] = useState(0);
  const [StakeModal, setStakeModal] = useState(false);
  const [TotalParticipant, setTotalParticipant] = useState();
  const [TotalClaimed, setTotalClaimed] = useState();
  const [InitialClaimNotification, setInitialClaimNotification] =
    useState(false);
  const [Response, setResponse] = useState({
    success: false,
    address: "",
    message: "Not eligible",
  });

  const [NotEligible, setNotEligible] = useState();
  const [TAndC, setTAndC] = useState(
    localStorage.getItem("TAndC") && localStorage.getItem("TAndC") === "true"
      ? false
      : true
  );

  const [CalculationShowState, setCalculationShowState] = useState(false);

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
  const OsmosisChainID = "osmosis-1";

  const totalParticipant = `${config.claimPageClaimEndPoint}/status`;
  function getTotalUsers() {
    return axios
      .all([axios.get(totalParticipant)])
      .then(
        axios.spread((totalParticipant) => {
          setTotalParticipant(totalParticipant.data.totalList);
          setTotalClaimed(totalParticipant.data.initialClaimList);
          return totalParticipant.data.totalList;
        })
      )
      .catch((error) => {
        return 0;
        // console.log(error);
      });
  }

  const total_supply =
    `${process.env.REACT_APP_restAPI}/cosmos/bank/v1beta1/supply/umntl`;
  const inflation =
      `${process.env.REACT_APP_restAPI}/cosmos/mint/v1beta1/inflation`;
  const bondedAmount =
    `${process.env.REACT_APP_restAPI}/cosmos/staking/v1beta1/pool`;

  function getAPR() {
    return axios
      .all([
        axios.get(total_supply),
        axios.get(inflation),
        axios.get(bondedAmount),
      ])
      .then(
        axios.spread((totalSupply, inflation, bondedAmount) => {
          totalSupply = totalSupply.data.amount.amount;
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
  async function getAprTest() {
    const ap = await getAPR();
    setApr(ap);
  }

  useEffect(() => {
    getAprTest();
    getTotalUsers();
    try {
      if (sessionStorage.getItem("MNTL") !== null) {
        setMNTLAddress(sessionStorage.getItem("MNTL"));
        setOsmosisAddress(sessionStorage.getItem("OSMO"));
        setKeplrConnectionState(2);
        fetchBackendData(
          sessionStorage.getItem("OSMO"),
          sessionStorage.getItem("MNTL")
        );
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const fetchBackendData = async (OsmosisAccount, mntlAddress) => {
    // fetching data from backend
    fetch(`https://airdrop-data.assetmantle.one/keplr/${OsmosisAccount}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success.toString() === "true") {
          setResponse(data);
        } else {
          setResponse({
            success: false,
            address: mntlAddress,
            message: "Not eligible",
          });
        }
      })
      .catch((err) => console.log(err));

    //  Fetching claim response
    fetch(`${config.claimPageClaimEndPoint}/osmosis/${OsmosisAccount}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setClaimResponse(data);
          setNotEligible(false);
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

  const handleKeplrConnect = async () => {
    if (window.keplr) {
      // Osmosis address
      let OsmosisOfflineSigner = await window.keplr.getOfflineSignerAuto(
        OsmosisChainID
      );
      setKeplrConnectionState(1);
      let OsmosisAccounts = await OsmosisOfflineSigner.getAccounts();
      const OsmosisAccount = OsmosisAccounts[0].address;
      setOsmosisAddress(OsmosisAccount);
      setKeplrConnectionState(2);
      const mntlAddress = getMantleAddress(OsmosisAccount);
      setMNTLAddress(mntlAddress);
      sessionStorage.setItem("MNTL", mntlAddress);
      sessionStorage.setItem("OSMO", OsmosisAccount);

      await fetchBackendData(OsmosisAccount, mntlAddress);
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
    const res = await fetch(`${config.claimPageClaimEndPoint}/osmosis/`, {
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

    console.log(res);

    //  Fetching claim response
    fetch(`${config.claimPageClaimEndPoint}/osmosis/${OsmosisAddress}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setClaimResponse(data);
          if (data.success && data.initialClaim.success) {
            setInitialClaimNotification(true);
            setTimeout(() => {
              setInitialClaimNotification(false);
            }, 10000);
          }
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

  // useEffect(() => {
  //   if (ClaimResponse.success && ClaimResponse.initialClaim.success) {
  //     setInitialClaimNotification(true);
  //     setTimeout(() => {
  //       setInitialClaimNotification(false);
  //     }, 10000);
  //   }
  // }, [ClaimResponse]);

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

  useEffect(() => {
    window.addEventListener("keplr_keystorechange", () => {
      handleKeplrConnect();
    });
  }, []);

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
          <h1>{t("OSMOSIS_CLAIM_TITLE")}</h1>
          <button
            className="section_title__button"
            onClick={handleKeplrConnect}
          >
            {`${
              {
                0: t("CONNECT_WALLET"),
                1: t("CONNECTING_WALLET"),
                2: t("WALLET_CONNECTED"),
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
        {NotEligible === true ? (
          <section className="section_notEligible">
            {t("OSMOSIS_CLAIM_NOT_ELIGIBLE")}
          </section>
        ) : (
          <section className="section_progress">
            <div className="section_progress__line_1">
              <h2>{t("OSMOSIS_CLAIM_YOUR_PROGRESS")}</h2>
              <p>{Bar}%</p>
            </div>
            <BarContainer>
              <div className="section_progress__line_2__bar"></div>
            </BarContainer>
          </section>
        )}

        <section className="section_overview">
          <div className="section_overview__element">
            <p>{t("OSMOSIS_CLAIM_OVERVIEW_1")}</p>
            <h4>
              {Response && Response.allocation
                ? Number((Response.allocation * Bar) / 100).toLocaleString(
                    "en-US",
                    {
                      maximumFractionDigits: 2,
                    }
                  )
                : "0"}{" "}
              /{" "}
              {Response && Response.allocation
                ? Number(Response.allocation).toLocaleString("en-US", {
                    maximumFractionDigits: 2,
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
              <p>{t("OSMOSIS_CLAIM_OVERVIEW_2")}</p>
              <h4>
                {Number(apr).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
                %
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
              <p>{t("OSMOSIS_CLAIM_OVERVIEW_3")}</p>
              <h4>
                {TotalParticipant
                  ? TotalClaimed + "/" + TotalParticipant
                  : "N/A"}
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
              <p>{t("OSMOSIS_CLAIM_OVERVIEW_4")}</p>
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
                <p>{t("MISSION")} #1</p>
                <h4>{t("OSMOSIS_CLAIM_MISSION_1")}</h4>
              </div>
              <button
                disabled={
                  ClaimResponse.success
                    ? ClaimResponse.initialClaim.success
                    : true
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
                <p>{t("MISSION")} #2</p>
                <h4>{t("OSMOSIS_CLAIM_MISSION_2")}</h4>
              </div>
              <button
                disabled={
                  ClaimResponse.success ? ClaimResponse.stake.success : true
                }
                className="section_mission__container_mission__button"
                onClick={() =>
                  window.open(
                    "https://wallet.assetmantle.one/dashboard/staking",
                    "_blank"
                  )
                }
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
                <p>{t("MISSION")} #3</p>
                <h4>{t("OSMOSIS_CLAIM_MISSION_3")}</h4>
              </div>
              <button
                disabled={true}
                className="section_mission__container_mission__button"
                onClick={() =>
                  window.open(
                    "https://wallet.keplr.app/#/osmosis/governance?detailId=" +
                      config.proposalID,
                    "_blank"
                  )
                }
              >
                {/*Vote*/}
                Soon
              </button>
              <div className="section_mission__container_mission__done">
                <MdDone />
              </div>
            </div>
            <div className={`section_mission__container_mission`}>
              <div className="section_mission__container_mission__title">
                <p>{t("MISSION")} #4</p>
                <h4>{t("OSMOSIS_CLAIM_MISSION_4")}</h4>
              </div>
              <button
                disabled={true}
                className="section_mission__container_mission__button"
              >
                {/*Provide*/}
                Soon
              </button>
              <div className="section_mission__container_mission__done">
                <MdDone />
              </div>
            </div>
            <div className={`section_mission__container_mission`}>
              <div className="section_mission__container_mission__title">
                <p>{t("MISSION")} #5</p>
                <h4>{t("OSMOSIS_CLAIM_MISSION_5")}</h4>
              </div>
              <button
                disabled={true}
                className="section_mission__container_mission__button"
              >
                {/* Mint */}
                Soon
              </button>
              <div className="section_mission__container_mission__done">
                <MdDone />
              </div>
            </div>
          </div>
        </section>

        <section className="section_data">
          <div className="section_data__con">
            <div className="section_data__con__shown">
              <div className="section_data__con__shown_l">
                <h4>
                  {t("OSMOSIS_CLAIM_CALCULATION_KEY_1")} <AiOutlineArrowRight />{" "}
                  <span>
                    15<sup>th</sup> February, 2022
                  </span>
                </h4>
                <h4>
                  {t("OSMOSIS_CLAIM_CALCULATION_KEY_2")} <AiOutlineArrowRight />{" "}
                  <span>750 $MNTL</span>
                </h4>
              </div>
              <div className="section_data__con__shown_r">
                <span
                  onClick={() => setCalculationShowState(!CalculationShowState)}
                >
                  Calculation{" "}
                  {CalculationShowState ? (
                    <AiFillCaretUp />
                  ) : (
                    <AiFillCaretDown />
                  )}
                </span>
              </div>
            </div>
            {CalculationShowState && (
              <div className="section_data__con__hide">
                <br />
                <h4>{t("OSMOSIS_CLAIM_CALCULATION_TITLE")}</h4>
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
                      <var>x</var> <var>=</var> <var>$</var>{" "}
                      {t("OSMOSIS_CLAIM_CALCULATION_EXP_1")}
                    </p>
                    <p>
                      <var>y</var> <var>=</var> <var>$</var>{" "}
                      {t("OSMOSIS_CLAIM_CALCULATION_EXP_2")}
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
              </div>
            )}
          </div>
        </section>
      </Container>
      {StakeModal && (
        <OsmosisStakeModal
          closeModal={setStakeModal}
          address={MNTLAddress}
          ClaimResponse={setClaimResponse}
        />
      )}
      <NotificationInitialClaim className={InitialClaimNotification && "show"}>
        <div className="left">
          <img
            className="left_loadingImage"
            alt={"spinning loading indicator"}
            src="images/stakedrop/loader.svg"
          />
          <div className="left_close">
            <img
              // className="left_close"
              onClick={() => setInitialClaimNotification(false)}
              src="/images/icons/close.png"
              alt="close"
            />
          </div>
        </div>
        <div className="right">
          Can't see your tokens after initial claim? <br /> Please wait for 10 -
          15 minutes for the tokens to be displayed in the wallet.
        </div>
      </NotificationInitialClaim>
      {TAndC === true && <TAndCModal closeModal={setTAndC} />}
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
      h1 {
        font: var(--h2);
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
      margin-top: 24px;
      text-align: center;
      font: var(--p-xl);
      color: var(--yellow);
      background: var(--dark-m);
      border-radius: 12px;
      padding: 24px;
      &:hover {
        color: var(--yellow);
        background: var(--dark-m);
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
        justify-content: flex-start;
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
          /* padding: 24px 20px; */
          border-radius: 12px;
          gap: 10px;
          width: min(100%, 233.66px);
          flex-direction: column;
          min-height: 250.19px;
          text-align: center;
          /* @media (max-width: 1017px) {
            width: 100%;
          } */
          @media (max-width: 548px) {
            flex-wrap: wrap;
          }
          &__title {
            padding: 24px 20px;
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
            border-radius: 0 0 12px 12px;
            transition: all ease-in-out 100ms;
            cursor: pointer;
            color: var(--dark-m);
            text-decoration: none;
            border: none;
            outline: none;
            width: 100%;
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
              opacity: 0;
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
        transition: all ease-in-out 200ms;
        &__shown {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          &_r {
            span {
              display: flex;
              align-items: center;
              gap: 12px;
              color: var(--yellow);
              cursor: pointer;
              font: var(--p-m);
              & > svg {
                margin-top: 4px;
              }
            }
          }
        }
      }
      h4 {
        font: var(--h4);
        font-weight: 400;
        span {
          /* color: var(--yellow); */
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
  .vote_btn {
    padding: 10px 22.5px 12px;
    display: inline;
    font: 600 var(--p-m);
    color: var(--dark-m);
    text-transform: capitalize;
    background: var(--yellow-gradient-bg);
    box-shadow: 4px 4px 8px rgb(0 0 0 / 25%),
      inset -4px -4px 8px rgb(0 0 0 / 25%), inset 4px 4px 8px #ffc942;
    border-radius: 12px;
    -webkit-transition: all ease-in-out 100ms;
    transition: all ease-in-out 100ms;
    cursor: pointer;
    color: var(--dark-m);
    -webkit-text-decoration: none;
    text-decoration: none;
    border: none;
    outline: none;
  }
`;

const NotificationInitialClaim = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  width: min(95vw, 400px);
  padding: 20px;
  background: var(--dark-m);
  border-radius: 12px;
  font: 600 var(--p-s);
  color: var(--success);
  box-shadow: var(--dark-shadow);
  transition: all ease-in-out 300ms;
  transform: translateX(800px);
  display: flex;
  gap: 12px;
  border: 1px solid var(--success);
  .left {
    position: relative;
    &_loadingImage {
      width: 20px;
      height: 20px;
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
    &_close {
      position: absolute;
      background-color: var(--dark-s);
      border-radius: 50%;
      width: 22px;
      height: 22px;
      top: -25px;
      left: -25px;
      padding: 2px;
      display: flex;
      img {
        margin: auto;
        width: 16px;
        height: 16px;
      }
    }
  }
  &.show {
    transform: translateX(0);
  }
`;
