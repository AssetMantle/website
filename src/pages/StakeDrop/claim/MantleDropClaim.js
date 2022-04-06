import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import campaignData from "../../../data/campaignData.json";
import { initializeKeplrForComdex } from "../comdex/comdexKeplr";
import { initializeKeplrForTera } from "../terraKeplr";

export default function MantleDropClaim() {
  const { t } = useTranslation();

  const [Participated, setParticipated] = useState();

  //   address
  const [InputAddress, setInputAddress] = useState("");
  const [CosmosAddress, setCosmosAddress] = useState("");
  const [PersistenceAddress, setPersistenceAddress] = useState("");
  const [TerraAddress, setTerraAddress] = useState("");
  const [ComdexAddress, setComdexAddress] = useState("");
  const [JunoAddress, setJunoAddress] = useState("");
  const [StargazeAddress, setStargazeAddress] = useState("");
  const [OsmoAddress, setOsmoAddress] = useState("");

  // connect keplr
  const [KeplrConnectionState, setKeplrConnectionState] = useState(0);
  const cosmosChainID = "cosmoshub-4";
  const persistenceChainID = "core-1";
  const terraChainID = "columbus-5";
  const comdexChainID = "comdex-1";
  const junoChainID = "juno-1";
  const stargazeChainID = "stargaze-1";
  const osmoChainID = "osmosis-1";
  const handleKeplrConnect = async () => {
    if (window.keplr) {
      setKeplrConnectionState(1);

      // taking cosmos address
      let cosmosOfflineSigner = window.keplr.getOfflineSigner(cosmosChainID);
      let cosmosAccounts = await cosmosOfflineSigner.getAccounts();
      const cosmosAccount = cosmosAccounts[0].address;
      setCosmosAddress(cosmosAccount);
      // taking cosmos address ends

      // taking persistence address
      let persistenceOfflineSigner =
        window.keplr.getOfflineSigner(persistenceChainID);
      let persistenceAccounts = await persistenceOfflineSigner.getAccounts();
      const persistenceAccount = persistenceAccounts[0].address;
      setPersistenceAddress(persistenceAccount);
      // taking persistence address ends

      // taking terra address
      try {
        await initializeKeplrForTera();
      } catch (e) {
        console.log(e);
      }
      let terraOfflineSigner = window.keplr.getOfflineSigner(terraChainID);
      let terraAccounts = await terraOfflineSigner.getAccounts();
      const terraAccount = terraAccounts[0].address;
      setTerraAddress(terraAccount);
      // taking terra address ends

      // taking comdex address
      try {
        await initializeKeplrForComdex();
      } catch (e) {
        console.log(e);
      }
      let comdexOfflineSigner = window.keplr.getOfflineSigner(comdexChainID);
      let comdexAccounts = await comdexOfflineSigner.getAccounts();
      const comdexAccount = comdexAccounts[0].address;
      setComdexAddress(comdexAccount);
      //  taking comdex address end

      // taking juno address
      let junoOfflineSigner = window.keplr.getOfflineSigner(junoChainID);
      let junoAccounts = await junoOfflineSigner.getAccounts();
      const junoAccount = junoAccounts[0].address;
      setJunoAddress(junoAccount);
      // taking juno address ends

      // taking stargaze address
      let stargazeOfflineSigner =
        window.keplr.getOfflineSigner(stargazeChainID);
      let stargazeAccounts = await stargazeOfflineSigner.getAccounts();
      const stargazeAccount = stargazeAccounts[0].address;
      setStargazeAddress(stargazeAccount);
      // taking stargaze address ends

      // taking osmo address
      let osmoOfflineSigner = window.keplr.getOfflineSigner(osmoChainID);
      let osmoAccounts = await osmoOfflineSigner.getAccounts();
      const osmoAccount = osmoAccounts[0].address;
      setOsmoAddress(osmoAccount);
      // taking osmo address ends

      // took necessary addresses
      setKeplrConnectionState(2);
      setParticipated();
    } else {
      window.alert("Please install Keplr to move forward with the task.");
    }
  };

  return (
    <Container>
      <section className="section_goBack" onClick={() => window.history.back()}>
        <img src="/images/stakedrop/back_arrow.svg" alt="back arrow" />
        <h2>Back to AssetMantle StakeDrop page</h2>
      </section>
      <div className="calculate_grid">
        <div className="left">
          <section className="section__overview">
            <div className="section__overview_campaign lighter_bg">
              <h3 className="section__overview_campaign__title">
                {campaignData.comdex.dataTable1.title}
              </h3>
              <div className="section__overview_campaign__option">
                <p className="section__overview_campaign__option_label                                                                                                                        ">
                  {t("STAKEDROP_MODAL_CAMPAIGN_OPTION_2_TITLE")}
                </p>
                <h3 className="section__overview_campaign__option_value">
                  {Number(
                    campaignData.comdex.dataTable1.op1Value
                  ).toLocaleString("en-US", {
                    maximumFractionDigits: 4,
                  })}{" "}
                  $MNTL
                </h3>
              </div>
              <div className="section__overview_campaign__option">
                <p className="section__overview_campaign__option_label                                                                                                                        ">
                  {campaignData.comdex.dataTable1.op2Key}
                </p>
                <h3 className="section__overview_campaign__option_value">
                  {campaignData.comdex.dataTable1.op2Value}
                </h3>
                <p className="section__overview_campaign__option_details">
                  {campaignData.comdex.dataTable1.op2Description}
                </p>
              </div>
              <>
                <div className="section__overview_campaign__option">
                  <p className="section__overview_campaign__option_label                                                                                                                        ">
                    {campaignData.comdex.dataTable1.op3Key}
                  </p>
                  <h3 className="section__overview_campaign__option_value">
                    {campaignData.comdex.dataTable1.op3Value}
                  </h3>
                  <p className="section__overview_campaign__option_details">
                    {campaignData.comdex.dataTable1.op3Description}
                  </p>
                </div>
              </>
              <div className="section__overview_campaign__option">
                <p className="section__overview_campaign__option_label                                                                                                                        ">
                  {campaignData.comdex.dataTable1.op4Key}
                </p>
                <h3 className="section__overview_campaign__option_value">
                  {campaignData.comdex.dataTable1.op4Value}
                </h3>
                <p className="section__overview_campaign__option_details">
                  {campaignData.comdex.dataTable1.op4Description}
                </p>
              </div>
            </div>

            <div className="section__overview_campaignStat lighter_bg">
              <h3 className="section__overview_campaignStat__title">
                {t("STAKEDROP_MODAL_CAMPAIGNSTAT_TITLE")}
              </h3>
              <div className="section__overview_campaignStat__option">
                <p className="section__overview_campaignStat__option_label">
                  {t("STAKEDROP_MODAL_CAMPAIGNSTAT_OPTION_1_TITLE")}
                </p>
                <h3 className="section__overview_campaignStat__option_value">
                  {/* {CampaignStat
                        ? (
                            Number(campaignData.comdex.dataTable1.op1Value) -
                            Number(CampaignStat.totalDistributed) / 1000000
                          ).toLocaleString("en-US", {
                            maximumFractionDigits: 4,
                          })
                        : "--"} */}
                  0{` $MNTL`}
                </h3>
              </div>
              <div className="section__overview_campaignStat__option">
                <p className="section__overview_campaignStat__option_label">
                  {t("STAKEDROP_MODAL_CAMPAIGNSTAT_OPTION_2_TITLE")}
                </p>
                <h3 className="section__overview_campaignStat__option_value">
                  {/* {TimeLeft} */}Concluded
                </h3>
              </div>
              <div className="section__overview_campaignStat__option">
                <p className="section__overview_campaignStat__option_label">
                  {t("STAKEDROP_MODAL_CAMPAIGNSTAT_OPTION_3_TITLE")}
                </p>
                <h3 className="section__overview_campaignStat__option_value">
                  {/* {CampaignStat
                    ? (
                        Number(CampaignStat.totalStakeDropGlobalDelegation) /
                        1000000
                      ).toLocaleString("en-US", {
                        maximumFractionDigits: 4,
                      })
                    : "--"} */}
                  --
                  {` ${campaignData.comdex.currency}`}
                </h3>
                <p className="section__overview_campaign__option_details">
                  {`Total Active: `}
                  {/* {CampaignStat
                    ? (
                        Number(CampaignStat.worldGlobalDelegation) / 1000000
                      ).toLocaleString("en-US", {
                        maximumFractionDigits: 4,
                      })
                    : "--"} */}
                  -- {campaignData.comdex.currency}
                </p>
              </div>
              <div className="section__overview_campaignStat__option">
                <p className="section__overview_campaignStat__option_label">
                  Total Participants
                </p>
                <h3 className="section__overview_campaignStat__option_value">
                  {/* {CampaignStat
                    ? Number(CampaignStat.numDelegators).toLocaleString(
                        "en-US",
                        { maximumFractionDigits: 4 }
                      )
                    : "--"} */}
                  --
                </h3>
              </div>
            </div>
          </section>
        </div>
        <div className="right">
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
                  value={InputAddress}
                  onChange={(e) => setInputAddress(e.target.value)}
                  className="section_calculation__from_line2_input"
                  placeholder="Enter your wallet address"
                />
                <button
                  //   onClick={handleCalculate}
                  className="section_calculation__from_line2_button"
                  disabled={
                    InputAddress !== null &&
                    InputAddress !== "" &&
                    InputAddress !== undefined
                      ? false
                      : true
                  }
                >
                  Calculate
                </button>
              </div>
            </div>
            {Participated === false && (
              <div className="section_calculation__error">
                <div className="section_calculation__error_element">
                  <div className="section_calculation__error_element__line1">
                    <img src="/images/stakedrop/info.svg" alt="info icon" />
                    <h3>
                      {/* {MTButtonText === 3
                          ? "You have successfully submitted the magic transaction. Please wait for some time to show your estimated rewards."
                          : MTButtonText === 0
                          ? "You have not completed the magic transaction"
                          : "You have not completed the magic transaction"} */}
                      You didn't participate in this campaign!
                    </h3>
                  </div>
                  {/* <div className="section_calculation__error_element__line2">
                      <p>
                        You have to complete a magic transaction in order to
                        calculate estimated rewards. Here's a quick guide on how
                        to do this:{" "}
                        <span onClick={() => setModal(true)}>
                          Magic Transaction Guide
                        </span>{" "}
                        <br />
                        <br />
                        NOTE: If you have already sent magic transaction and
                        received the success response, please wait for some time
                        to confirm your participation. Please do not send the
                        magic transaction multiple times as your participation
                        is already confirmed.
                      </p>
                    </div> */}
                </div>
                {/* <div className="section_calculation__error_element">
                    <button
                      onClick={handleMagicTransaction}
                      className="section_calculation__error_element__button"
                      disabled={
                        MTButtonText === 0 || MTButtonText === 2 ? false : true
                      }
                    >
                      {
                        {
                          0: "Complete Magic Transaction",
                          1: "Processing...",
                          2: "Failed - Retry",
                          3: "Successful",
                        }[MTButtonText]
                      }
                    </button>
                  </div> */}
              </div>
            )}
            <div className="section_calculation__result">
              <div className="section_calculation__result_address">
                <p className="section_calculation__result_address__label">
                  MNTL Address
                </p>
                <p className="section_calculation__result_address__value">
                  {/* {StakeAddress !== null &&
                  StakeAddress !== undefined &&
                  StakeAddress !== ""
                    ? StakeAddress
                    : "--"} */}
                  --
                </p>
              </div>
              <div className="section_calculation__result_rewards">
                <div className="section_calculation__result_rewards_reward">
                  <p className="section_calculation__result_rewards_reward__label">
                    Total Staked
                  </p>
                  <h3 className="section_calculation__result_rewards_reward__value">
                    {/* {(TotalStakedN / 1000000).toLocaleString("en-US", {
                      maximumFractionDigits: 4,
                    })} */}
                    -- {campaignData.comdex.currency}
                  </h3>
                </div>
                <div className="section_calculation__result_rewards_reward">
                  <p className="section_calculation__result_rewards_reward__label">
                    Total Rewards
                  </p>
                  <h3 className="section_calculation__result_rewards_reward__value">
                    {/* {(TotalRewardN / 1000000).toLocaleString("en-US", {
                      maximumFractionDigits: 4,
                    })} */}
                    -- $MNTL
                  </h3>
                </div>
                <div className="section_calculation__result_rewards_reward">
                  <p className="section_calculation__result_rewards_reward__label">
                    Total Estimated Rewards
                  </p>
                  <h3 className="section_calculation__result_rewards_reward__value">
                    {/* {(TotalEstimatedN / 1000000).toLocaleString("en-US", {
                      maximumFractionDigits: 4,
                    })} */}
                    -- $MNTL
                  </h3>
                </div>
              </div>
            </div>
          </section>
          <section className="section_reward_table">
            <div className="section_reward_table__element">
              {CosmosAddress ||
              PersistenceAddress ||
              TerraAddress ||
              ComdexAddress ||
              JunoAddress ||
              StargazeAddress ||
              OsmoAddress ||
              InputAddress ? (
                <div className="section_reward_table__element_option">
                  <h4>Address</h4>
                  <p>Reward</p>
                </div>
              ) : (
                ""
              )}
              {CosmosAddress && (
                <div className="section_reward_table__element_option">
                  <h4>
                    {CosmosAddress.substring(0, 5)}...
                    {CosmosAddress.substring(CosmosAddress.length - 5)}
                  </h4>
                  <p>
                    {/* {reward.toLocaleString("en-US", {
                          maximumFractionDigits: 4,
                        })} */}
                    --
                    {` $MNTL`}
                  </p>
                </div>
              )}
              {PersistenceAddress && (
                <div className="section_reward_table__element_option">
                  <h4>
                    {PersistenceAddress.substring(0, 5)}...
                    {PersistenceAddress.substring(
                      PersistenceAddress.length - 5
                    )}
                  </h4>
                  <p>
                    {/* {reward.toLocaleString("en-US", {
                          maximumFractionDigits: 4,
                        })} */}
                    --
                    {` $MNTL`}
                  </p>
                </div>
              )}
              {TerraAddress && (
                <div className="section_reward_table__element_option">
                  <h4>
                    {TerraAddress.substring(0, 5)}...
                    {TerraAddress.substring(TerraAddress.length - 5)}
                  </h4>
                  <p>
                    {/* {reward.toLocaleString("en-US", {
                          maximumFractionDigits: 4,
                        })} */}
                    --
                    {` $MNTL`}
                  </p>
                </div>
              )}
              {ComdexAddress && (
                <div className="section_reward_table__element_option">
                  <h4>
                    {ComdexAddress.substring(0, 5)}...
                    {ComdexAddress.substring(ComdexAddress.length - 5)}
                  </h4>
                  <p>
                    {/* {reward.toLocaleString("en-US", {
                          maximumFractionDigits: 4,
                        })} */}
                    --
                    {` $MNTL`}
                  </p>
                </div>
              )}
              {JunoAddress && (
                <div className="section_reward_table__element_option">
                  <h4>
                    {JunoAddress.substring(0, 5)}...
                    {JunoAddress.substring(JunoAddress.length - 5)}
                  </h4>
                  <p>
                    {/* {reward.toLocaleString("en-US", {
                          maximumFractionDigits: 4,
                        })} */}
                    --
                    {` $MNTL`}
                  </p>
                </div>
              )}
              {StargazeAddress && (
                <div className="section_reward_table__element_option">
                  <h4>
                    {StargazeAddress.substring(0, 5)}...
                    {StargazeAddress.substring(StargazeAddress.length - 5)}
                  </h4>
                  <p>
                    {/* {reward.toLocaleString("en-US", {
                          maximumFractionDigits: 4,
                        })} */}
                    --
                    {` $MNTL`}
                  </p>
                </div>
              )}
              {OsmoAddress && (
                <div className="section_reward_table__element_option">
                  <h4>
                    {OsmoAddress.substring(0, 5)}...
                    {OsmoAddress.substring(OsmoAddress.length - 5)}
                  </h4>
                  <p>
                    {/* {reward.toLocaleString("en-US", {
                          maximumFractionDigits: 4,
                        })} */}
                    --
                    {` $MNTL`}
                  </p>
                </div>
              )}
              {InputAddress && (
                <div className="section_reward_table__element_option">
                  <h4>
                    {InputAddress.substring(0, 5)}...
                    {InputAddress.substring(InputAddress.length - 5)}
                  </h4>
                  <p>
                    {/* {reward.toLocaleString("en-US", {
                          maximumFractionDigits: 4,
                        })} */}
                    --
                    {` $MNTL`}
                  </p>
                </div>
              )}
              {CosmosAddress ||
              PersistenceAddress ||
              TerraAddress ||
              ComdexAddress ||
              JunoAddress ||
              StargazeAddress ||
              OsmoAddress ||
              InputAddress ? (
                <div className="section_reward_table__element_option">
                  <h4>Total Rewards:</h4>
                  <p>--{` $MNTL`}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </section>
        </div>
      </div>
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
  .calculate_grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 24px;
    @media (max-width: 760px) {
      grid-template-columns: 1fr;
    }
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
        @media (max-width: 768px) {
          flex-wrap: wrap;
        }
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
          align-items: flex-end;
          gap: 24px;
          flex-direction: column;
          justify-content: flex-end;
          flex-wrap: wrap;
          &_input {
            flex: 1;
            border: 1px solid var(--gray);
            border-radius: 12px;
            padding: 12px 16px;
            font: var(--input);
            background: transparent;
            outline: none;
            color: var(--gray);
            width: 100%;
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
            padding: 8px 83px 10px;

            cursor: pointer;
            color: var(--yellow);
            text-decoration: none;
            box-shadow: none;
            &:hover,
            &:focus {
              box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
            }
            @media (max-width: 768px) {
              width: 100%;
            }
            &:disabled {
              color: var(--yellow-disabled);
              border: 2px solid var(--yellow-disabled);
              /* background: var(--yellow-disabled); */
              &:hover,
              &:focus {
                box-shadow: none;
              }
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
        flex-direction: column;
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
            flex: 1;
            max-width: 712px;
          }
          &:last-child {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            width: 100%;
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
          &.two {
            grid-template-columns: repeat(2, 1fr);
            @media (max-width: 768px) {
              grid-template-columns: repeat(1, 1fr);
            }
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
      &__range {
        &.input {
          display: flex;
          gap: 24px;
          padding-bottom: 40px;
          flex-wrap: wrap;
          align-items: center;
          @media (max-width: 548px) {
            padding: 20px;
          }
          @media (max-width: 548px) {
            padding: 20px;
          }
          p {
            font: 600 var(--p-m);
            color: var(--gray-deep);
          }
          input[type="number"] {
            padding: 12px 16px;
            background-color: var(--dark);
            border-radius: 12px;
            border: none;
            font: var(--h3);
            color: var(--gray);
            outline: none;
            width: min(250px, 100%);
            -moz-appearance: textfield;
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
          }
          /* & * {
            @media (max-width: 548px) {
              width: 100%;
            }
          } */
        }
        input[type="range"] {
          width: 100%;
          accent-color: var(--yellow);
        }
      }
    }
    &__overview {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
      &_campaign,
      &_campaignStat {
        &__title {
          font: var(--h3);
          font-size: 24px;
          color: var(--gray);
          padding: 40px 30px;
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
          padding: 40px 30px;
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
