import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { sendCoinTx } from "./send";
import data from "../../data/stakeDropData.json";
import HowToModal from "./HowToModal";

export default function CosmosCalculationPage() {
  const { t } = useTranslation();
  const sendingAddress = "cosmos1dsuar2ztnqevefxlnalmaetxca3gr0fp4c0uxr";
  const DATA = data.modal;
  const [modal, setModal] = useState(false);
  const [Address, setAddress] = useState();

  const [CampaignStat, setCampaignStat] = useState();

  const [IsMagicTransaction, setIsMagicTransaction] = useState();

  useEffect(() => {
    fetch("https://cosmos-stakedrop.assetmantle.one/status")
      .then((res) => res.json())
      .then((res) => setCampaignStat(res))
      .catch((err) => console.log(err));
  }, []);
  // https://cosmos-stakedrop.assetmantle.one/status

  // connect keplr
  const [KeplrConnectionState, setKeplrConnectionState] = useState(0);
  const chainID = "cosmoshub-4";
  const handleKeplrConnect = async () => {
    if (window.keplr) {
      setKeplrConnectionState(1);
      let offlineSigner = window.keplr.getOfflineSigner(chainID);
      let accounts = await offlineSigner.getAccounts();
      const account = accounts[0].address;
      setAddress(account);
      setKeplrConnectionState(2);
    } else {
      window.alert("Please install Keplr to move forward with the task.");
    }
  };

  // no magic transaction ?
  const handleMagicTransaction = async () => {
    const response = await sendCoinTx(
      "cosmos1dsuar2ztnqevefxlnalmaetxca3gr0fp4c0uxr",
      "cosmos",
      0.000001
    );
    console.log(response);
    if (response === 0) {
      setIsMagicTransaction(true);
    } else {
      setIsMagicTransaction(false);
      alert(response);
    }
  };

  // calculate rewards
  const [StakeAddress, setStakeAddress] = useState();
  const [TotalStaked, setTotalStaked] = useState("0.00");
  const [TotalReward, setTotaReward] = useState("0.00");

  const TotalStakedN = Number(TotalStaked);
  const TotalRewardN = Number(TotalReward);

  const handleCalculate = () => {
    fetch(`https://cosmos-stakedrop.assetmantle.one/delegator/${Address}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success.toString() === "true") {
          console.log(data);
          setStakeAddress(data.mantleAddress);
          setTotalStaked(data.globalDelegation);
          setTotaReward(data.received);
        } else if (data.success.toString() === "false") {
          setIsMagicTransaction(false);
        }
      })
      .catch((err) => console.log(err));
  };

  // Time left count down
  const [TimeLeft, setTimeLeft] = useState(0);
  var countDownDate = new Date(2022, 2, 22, 17, 30).getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setTimeLeft(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    if (distance < 0) {
      clearInterval(x);
      setTimeLeft("EXPIRED");
    }
  }, 1000);

  return (
    <>
      <Container>
        <section
          className="section_goBack"
          onClick={() => window.history.back()}
        >
          <img src="/images/stakedrop/back_arrow.svg" alt="back arrow" />
          <h2>Back to AssetMantle StakeDrop page</h2>
        </section>
        <section className="section_calculation lighter_bg">
          <h2>Calculate Your Estimated Rewards</h2>
          <div className="section_calculation__connect">
            <p className="section_calculation__connect_text">
              Connect your wallet to calculate estimated rewards
            </p>
            <div
              className="section_calculation__connect_button"
              onClick={handleKeplrConnect}
            >
              <img src="/images/airdrop/Kepler.png" alt="Keplr icon" />
              <span>{`${
                { 0: t("CONNECT"), 1: t("CONNECTING"), 2: t("CONNECTED") }[
                  KeplrConnectionState
                ]
              } Keplr`}</span>
            </div>
          </div>
          <div className="section_calculation__or">Or</div>
          <div className="section_calculation__from">
            <label
              htmlFor="walletAddress"
              className="section_calculation__from_label"
            >
              Enter your wallet address
            </label>
            <div className="section_calculation__from_line2">
              <input
                type="text"
                name="walletAddress"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                className="section_calculation__from_line2_input"
                placeholder="Enter your cosmos wallet address"
              />
              <button
                onClick={handleCalculate}
                className="section_calculation__from_line2_button"
              >
                Calculate
              </button>
            </div>
          </div>
          {IsMagicTransaction === false && (
            <div className="section_calculation__error">
              <div className="section_calculation__error_element">
                <div className="section_calculation__error_element__line1">
                  <img src="/images/stakedrop/info.svg" alt="info icon" />
                  <h3>You have not completed the magic transaction</h3>
                </div>
                <div className="section_calculation__error_element__line2">
                  <p>
                    You have to complete a magic transaction in order to
                    calculate estimated rewards. Here's a quick guide on how to
                    do this:{" "}
                    <span onClick={() => setModal(true)}>
                      Magic Transaction Guide
                    </span>{" "}
                    <br />
                    <br />
                    NOTE: If you have already sent magic transaction, please
                    wait for couple of minutes to confirm your participation.
                  </p>
                </div>
              </div>
              <div className="section_calculation__error_element">
                <button
                  onClick={handleMagicTransaction}
                  className="section_calculation__error_element__button"
                >
                  Complete Magic Transaction
                </button>
              </div>
            </div>
          )}
          <div className="section_calculation__result">
            <div className="section_calculation__result_address">
              <p className="section_calculation__result_address__label">
                $MNTL Address
              </p>
              <p className="section_calculation__result_address__value">
                {StakeAddress !== null &&
                StakeAddress !== undefined &&
                StakeAddress !== ""
                  ? StakeAddress
                  : "--"}
              </p>
            </div>
            <div className="section_calculation__result_rewards">
              <div className="section_calculation__result_rewards_reward">
                <p className="section_calculation__result_rewards_reward__label">
                  Total Staked
                </p>
                <h3 className="section_calculation__result_rewards_reward__value">
                  {(TotalStakedN / 1000000).toLocaleString('en-US', {maximumFractionDigits:4})} $ATOM
                </h3>
              </div>
              <div className="section_calculation__result_rewards_reward">
                <p className="section_calculation__result_rewards_reward__label">
                  Total Rewards
                </p>
                <h3 className="section_calculation__result_rewards_reward__value">
                  {(TotalRewardN / 1000000).toLocaleString('en-US', {maximumFractionDigits:4})} $MNTL
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="section__overview">
          <div>
            <div className="section__overview_campaign lighter_bg">
              <h3 className="section__overview_campaign__title">
                {t("STAKEDROP_MODAL_CAMPAIGN_TITLE")}
              </h3>
              <div className="section__overview_campaign__option">
                <p className="section__overview_campaign__option_label                                                                                                                        ">
                  {t("STAKEDROP_MODAL_CAMPAIGN_OPTION_2_TITLE")}
                </p>
                <h3 className="section__overview_campaign__option_value">
                  {DATA.campaign.option2.value}
                </h3>
              </div>
              <div className="section__overview_campaign__option">
                <p className="section__overview_campaign__option_label                                                                                                                        ">
                  {t("STAKEDROP_MODAL_CAMPAIGN_OPTION_3_TITLE")}
                </p>
                <h3 className="section__overview_campaign__option_value">
                  {DATA.campaign.option3.value}
                </h3>
                <p className="section__overview_campaign__option_details">
                  {DATA.campaign.option3.details}
                </p>
              </div>
              <div className="section__overview_campaign__option">
                <p className="section__overview_campaign__option_label                                                                                                                        ">
                  Reward Distribution Start Date
                </p>
                <h3 className="section__overview_campaign__option_value">
                  {DATA.campaign.option3i.value}
                </h3>
                <p className="section__overview_campaign__option_details">
                  {DATA.campaign.option3i.details}
                </p>
              </div>
              <div className="section__overview_campaign__option">
                <p className="section__overview_campaign__option_label                                                                                                                        ">
                  {t("STAKEDROP_MODAL_CAMPAIGN_OPTION_4_TITLE")}
                </p>
                <h3 className="section__overview_campaign__option_value">
                  {DATA.campaign.option4.value}
                </h3>
                <p className="section__overview_campaign__option_details">
                  {DATA.campaign.option4.details}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="section__overview_campaignStat lighter_bg">
              <h3 className="section__overview_campaignStat__title">
                {t("STAKEDROP_MODAL_CAMPAIGNSTAT_TITLE")}
              </h3>
              <div className="section__overview_campaignStat__option">
                <p className="section__overview_campaignStat__option_label">
                  {t("STAKEDROP_MODAL_CAMPAIGNSTAT_OPTION_1_TITLE")}
                </p>
                <h3 className="section__overview_campaignStat__option_value">
                  {CampaignStat
                    ? (2000000 - Number(CampaignStat.totalDistributed) / 1000000).toLocaleString('en-US', {maximumFractionDigits:4})
                    : "--"}
                  {` $MNTL`}
                </h3>
              </div>
              <div className="section__overview_campaignStat__option">
                <p className="section__overview_campaignStat__option_label">
                  {t("STAKEDROP_MODAL_CAMPAIGNSTAT_OPTION_2_TITLE")}
                </p>
                <h3 className="section__overview_campaignStat__option_value">
                  {TimeLeft}
                </h3>
              </div>
              <div className="section__overview_campaignStat__option">
                <p className="section__overview_campaignStat__option_label">
                  {t("STAKEDROP_MODAL_CAMPAIGNSTAT_OPTION_3_TITLE")}
                </p>
                <h3 className="section__overview_campaignStat__option_value">
                  {CampaignStat
                    ? (Number(CampaignStat.totalStakeDropGlobalDelegation) /
                      1000000).toLocaleString('en-US', {maximumFractionDigits:4})
                    : "--"}
                  {` $ATOM`}
                </h3>
                <p className="section__overview_campaign__option_details">
                  {`Total Active: `}
                  {CampaignStat
                    ? (Number(CampaignStat.worldGlobalDelegation) / 1000000).toLocaleString('en-US', {maximumFractionDigits:4})
                    : "--"} $ATOM
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
      {modal === true && (
        <HowToModal closeModal={setModal} address={sendingAddress} />
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
  min-height: 100vh;
  z-index: 1;
  padding: 120px 92px;
  @media (max-width: 768px) {
    background-image: url("/images/bg/tab_bg_assets.svg");
    padding: 80px 40px;
  }
  @media (max-width: 548px) {
    background-image: url("/images/bg/m_bg_assets.svg");
    padding: 80px 20px;
  }
  .lighter_bg {
    background: #2c2c2c;
    border-radius: 12px;
  }
  .section {
    &_goBack {
      display: flex;
      align-items: center;
      gap: 39.25px;
      padding-bottom: 80px;
      cursor: pointer;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 120%;
      text-transform: capitalize;
      color: #c2c2c2;
    }
    &_calculation {
      padding: 40px;
      @media (max-width: 548px) {
        padding: 20px;
      }
      h2 {
        color: var(--gray);
        padding-bottom: 80px;
      }
      &__connect {
        display: flex;
        align-items: center;
        gap: 24px;
        flex-wrap: wrap;
        &_text {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: #c2c2c2;
        }
        &_button {
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
          img {
            height: 26.25px;
          }
          @media (max-width: 548px) {
            width: 100%;
          }
        }
      }
      &__or {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 120%;
        color: #9d9d9d;
        padding: 36px 0;
      }
      &__from {
        display: flex;
        flex-direction: column;
        &_label {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 120%;
          color: #9d9d9d;
          padding-bottom: 8px;
        }
        &_line2 {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          &_input {
            flex: 1;
            border: 1px solid var(--gray);
            border-radius: 12px;
            padding: 12px 9px;
            padding-left: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font: var(--input);
            background: transparent;
            outline: none;
            color: var(--gray);
            &::placeholder {
              color: var(--gray-deep);
            }
          }
          &_button {
            font: 600 var(--p-m);
            color: var(--yellow);
            background: transparent;
            border: 2px solid var(--yellow);
            border-radius: 12px;
            padding: 8px 63px 10px;
            cursor: pointer;
            color: var(--yellow);
            text-decoration: none;
            box-shadow: none;
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
      &__error {
        margin-top: 40px;
        padding: 24px;
        background-color: #1e1e1e;
        border-radius: 12px;
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        &_element {
          &__line1 {
            display: flex;
            align-items: center;
            gap: 16px;
            padding-bottom: 12px;
            h3 {
              color: var(--gray);
            }
          }
          &__line2 {
            font-family: "Lato";
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 120%;
            color: #9d9d9d;
            width: 95%;
            span {
              cursor: pointer;
              color: var(--yellow);
              text-decoration: none;
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
          }
          &:first-child {
            flex: 1;
            max-width: 712px;
          }
        }
      }
      &__result {
        padding-top: 40px;
        &_address {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          padding-bottom: 40px;
          &__label,
          &__value {
            font-family: "Lato";
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            color: #c2c2c2;
          }
        }
        &_rewards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
          }
          @media (max-width: 548px) {
            grid-template-columns: repeat(1, 1fr);
          }
          &_reward {
            display: flex;
            flex-direction: column;
            gap: 4px;
            &__label {
              font-family: "Lato";
              font-style: normal;
              font-weight: 400;
              font-size: 20px;
              line-height: 24px;
              color: #c2c2c2;
            }
            &__value {
              font-family: "Lato";
              font-style: normal;
              font-weight: 800;
              font-size: 28px;
              line-height: 34px;
              color: #c2c2c2;
            }
          }
        }
      }
    }
    &__overview {
      padding-top: 24px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      @media (max-width: 548px) {
        grid-template-columns: 1fr;
      }
      &_campaign,
      &_campaignStat {
        &__title {
          font: var(--h3);
          color: var(--gray);
          padding: 40px;
          border-bottom: 1px solid #3d3d3d;
          @media (max-width: 548px) {
            padding: 20px;
          }
        }
        &__option {
          display: flex;
          gap: 4px;
          flex-direction: column;
          color: var(--gray);
          padding: 40px;
          @media (max-width: 548px) {
            padding: 20px;
          }
          &:not(:last-child) {
            border-bottom: 1px solid #3d3d3d;
          }
          &_label {
            font: var(--p-m);
          }
          &_details {
            font: 500 var(--p-l);
          }
        }
      }
    }
  }
`;
