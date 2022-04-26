import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

// import campaignData from "../../../data/campaignData.json";
import { initializeKeplrForComdex } from "../StakeDrop/comdex/comdexKeplr";
import { initializeKeplrForTera } from "../StakeDrop/terraKeplr";

export default function MantleDropClaim() {
  const { t } = useTranslation();

  const [Participated, setParticipated] = useState();

  const [InputError, setInputError] = useState();

  //   address
  const [InputAddress, setInputAddress] = useState("");
  const [CosmosAddress, setCosmosAddress] = useState("");
  const [PersistenceAddress, setPersistenceAddress] = useState("");
  const [TerraAddress, setTerraAddress] = useState("");
  const [ComdexAddress, setComdexAddress] = useState("");
  const [JunoAddress, setJunoAddress] = useState("");
  const [StargazeAddress, setStargazeAddress] = useState("");

  const [InputCampaignData, setInputCampaignData] = useState({
    delegator: "",
    received: 0,
    mantleAddress: "",
  });
  const [CosmosCampaignData, setCosmosCampaignData] = useState({
    delegator: "",
    received: 0,
    mantleAddress: "",
  });
  const [PersistenceCampaignData, setPersistenceCampaignData] = useState({
    delegator: "",
    received: 0,
    mantleAddress: "",
  });
  const [TerraCampaignData, setTerraCampaignData] = useState({
    delegator: "",
    received: 0,
    mantleAddress: "",
  });
  const [ComdexCampaignData, setComdexCampaignData] = useState({
    delegator: "",
    received: 0,
    mantleAddress: "",
  });
  const [JunoCampaignData, setJunoCampaignData] = useState({
    delegator: "",
    received: 0,
    mantleAddress: "",
  });
  const [StargazeCampaignData, setStargazeCampaignData] = useState({
    delegator: "",
    received: 0,
    mantleAddress: "",
  });

  // connect keplr
  const [KeplrConnectionState, setKeplrConnectionState] = useState(0);
  const cosmosChainID = "cosmoshub-4";
  const persistenceChainID = "core-1";
  const terraChainID = "columbus-5";
  const comdexChainID = "comdex-1";
  const junoChainID = "juno-1";
  const stargazeChainID = "stargaze-1";

  const handleKeplrConnect = async () => {
    if (window.keplr) {
      setKeplrConnectionState(1);

      // taking cosmos address
      let cosmosOfflineSigner = window.keplr.getOfflineSigner(cosmosChainID);
      let cosmosAccounts = await cosmosOfflineSigner.getAccounts();
      const cosmosAccount = cosmosAccounts[0].address;
      setCosmosAddress(cosmosAccount);
      fetch(
        `https://cosmos-stakedrop.assetmantle.one/delegator/${cosmosAccount}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success.toString() === "true") {
            setCosmosCampaignData(data);
          } else if (data.success.toString() === "false") {
            setCosmosCampaignData({
              delegator: "",
              received: 0,
              mantleAddress: "",
            });
          }
        })
        .catch((err) => console.log(err));
      // taking cosmos address ends

      // taking persistence address
      let persistenceOfflineSigner =
        window.keplr.getOfflineSigner(persistenceChainID);
      let persistenceAccounts = await persistenceOfflineSigner.getAccounts();
      const persistenceAccount = persistenceAccounts[0].address;
      setPersistenceAddress(persistenceAccount);
      fetch(
        `https://persistence-stakedrop.assetmantle.one/delegator/${persistenceAccount}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success.toString() === "true") {
            setPersistenceCampaignData(data);
          } else if (data.success.toString() === "false") {
            setPersistenceCampaignData({
              delegator: "",
              received: 0,
              mantleAddress: "",
            });
          }
        })
        .catch((err) => console.log(err));
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
      fetch(`https://terra-stakedrop.assetmantle.one/delegator/${terraAccount}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success.toString() === "true") {
            setTerraCampaignData(data);
          } else if (data.success.toString() === "false") {
            setTerraCampaignData({
              delegator: "",
              received: 0,
              mantleAddress: "",
            });
          }
        })
        .catch((err) => console.log(err));
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
      fetch(
        `https://comdex-stakedrop.assetmantle.one/delegator/${comdexAccount}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success.toString() === "true") {
            setComdexCampaignData(data);
          } else if (data.success.toString() === "false") {
            setComdexCampaignData({
              delegator: "",
              received: 0,
              mantleAddress: "",
            });
          }
        })
        .catch((err) => console.log(err));
      //  taking comdex address end

      // taking juno address
      let junoOfflineSigner = window.keplr.getOfflineSigner(junoChainID);
      let junoAccounts = await junoOfflineSigner.getAccounts();
      const junoAccount = junoAccounts[0].address;
      setJunoAddress(junoAccount);
      fetch(`https://juno-stakedrop.assetmantle.one/delegator/${junoAccount}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success.toString() === "true") {
            setJunoCampaignData(data);
          } else if (data.success.toString() === "false") {
            setJunoCampaignData({
              delegator: "",
              received: 0,
              mantleAddress: "",
            });
          }
        })
        .catch((err) => console.log(err));
      // taking juno address ends

      // taking stargaze address
      let stargazeOfflineSigner =
        window.keplr.getOfflineSigner(stargazeChainID);
      let stargazeAccounts = await stargazeOfflineSigner.getAccounts();
      const stargazeAccount = stargazeAccounts[0].address;
      setStargazeAddress(stargazeAccount);
      fetch(
        `https://stargaze-stakedrop.assetmantle.one/delegator/${stargazeAccount}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success.toString() === "true") {
            setStargazeCampaignData(data);
          } else if (data.success.toString() === "false") {
            setStargazeCampaignData({
              delegator: "",
              received: 0,
              mantleAddress: "",
            });
          }
        })
        .catch((err) => console.log(err));
      // taking stargaze address ends

      // took necessary addresses

      setKeplrConnectionState(2);
    } else {
      window.alert("Please install Keplr to move forward with the task.");
    }
  };

  const InputCalculate = () => {
    if (InputAddress.includes("cosmos")) {
      fetch(
        `https://cosmos-stakedrop.assetmantle.one/delegator/${InputAddress}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success.toString() === "true") {
            setInputError();
            setInputCampaignData(data);
          } else if (data.success.toString() === "false") {
            setParticipated(false);
            setInputError();
            setInputCampaignData({
              delegator: InputAddress,
              received: 0,
              mantleAddress: "",
            });
          }
        })
        .catch((err) => console.log(err));
    } else if (InputAddress.includes("persistence")) {
      fetch(
        `https://persistence-stakedrop.assetmantle.one/delegator/${InputAddress}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success.toString() === "true") {
            setInputError();
            setInputCampaignData(data);
          } else if (data.success.toString() === "false") {
            setParticipated(false);
            setInputError();
            setInputCampaignData({
              delegator: InputAddress,
              received: 0,
              mantleAddress: "",
            });
          }
        })
        .catch((err) => console.log(err));
    } else if (InputAddress.includes("terra")) {
      fetch(`https://terra-stakedrop.assetmantle.one/delegator/${InputAddress}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success.toString() === "true") {
            setInputError();
            setInputCampaignData(data);
          } else if (data.success.toString() === "false") {
            setParticipated(false);
            setInputError();
            setInputCampaignData({
              delegator: InputAddress,
              received: 0,
              mantleAddress: "",
            });
          }
        })
        .catch((err) => console.log(err));
    } else if (InputAddress.includes("comdex")) {
      fetch(
        `https://comdex-stakedrop.assetmantle.one/delegator/${InputAddress}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success.toString() === "true") {
            setInputError();
            setInputCampaignData(data);
          } else if (data.success.toString() === "false") {
            setParticipated(false);
            setInputError();
            setInputCampaignData({
              delegator: InputAddress,
              received: 0,
              mantleAddress: "",
            });
          }
        })
        .catch((err) => console.log(err));
    } else if (InputAddress.includes("juno")) {
      fetch(`https://juno-stakedrop.assetmantle.one/delegator/${InputAddress}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success.toString() === "true") {
            setInputError();
            setInputCampaignData(data);
          } else if (data.success.toString() === "false") {
            setParticipated(false);
            setInputError();
            setInputCampaignData({
              delegator: InputAddress,
              received: 0,
              mantleAddress: "",
            });
          }
        })
        .catch((err) => console.log(err));
    } else if (InputAddress.includes("stars")) {
      fetch(
        `https://stargaze-stakedrop.assetmantle.one/delegator/${InputAddress}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success.toString() === "true") {
            setInputError();
            setInputCampaignData(data);
          } else if (data.success.toString() === "false") {
            setParticipated(false);
            setInputError();
            setInputCampaignData({
              delegator: InputAddress,
              received: 0,
              mantleAddress: "",
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      setInputError();
      setInputCampaignData({
        delegator: "",
        received: 0,
        mantleAddress: "",
      });
      setInputError(
        "Please enter a valid Cosmos or Persistence or Terra or Comdex or Juno or Stargaze or Osmosis address to calculate your rewards."
      );
    }
  };

  const handleInputChange = (e) => {
    setInputCampaignData({
      delegator: "",
      received: 0,
      mantleAddress: "",
    });
    setInputAddress(e.target.value);
  };

  const division = (value) => {
    let result;
    let p = Number(value) / 1000000;
    result = p.toLocaleString("en-US", {
      maximumFractionDigits: 4,
    });
    return result;
  };

  return (
    <>
      <Container>
        <section className="section_calculation lighter_bg">
          <h2>Participated in the StakeDrop Campaign?</h2>
          <h3>Check your $MNTL Allocation</h3>
          <div className="section_calculation__connect">
            {/* <p className="section_calculation__connect_text">
              Connect your wallet
            </p> */}
            <button
              className="section_calculation__connect_button"
              onClick={handleKeplrConnect}
              disabled={
                InputAddress !== null &&
                InputAddress !== undefined &&
                InputAddress !== ""
                  ? true
                  : false
              }
            >
              <img src="/images/airdrop/Kepler.png" alt="Keplr icon" />
              <span>{`${
                { 0: t("CONNECT"), 1: t("CONNECTING"), 2: t("CONNECTED") }[
                  KeplrConnectionState
                ]
              } Keplr`}</span>
            </button>
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
                className="section_calculation__from_line2_input"
                readOnly={
                  CosmosAddress ||
                  PersistenceAddress ||
                  TerraAddress ||
                  ComdexAddress ||
                  JunoAddress ||
                  StargazeAddress
                    ? true
                    : false
                }
                onChange={(e) =>
                  CosmosAddress ||
                  PersistenceAddress ||
                  TerraAddress ||
                  ComdexAddress ||
                  JunoAddress ||
                  StargazeAddress
                    ? setInputAddress()
                    : handleInputChange(e)
                }
                placeholder="Enter your wallet address"
              />
              <button
                onClick={InputCalculate}
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
              <div className="section_calculation__error_element__line1">
                <img src="/images/stakedrop/info.svg" alt="info icon" />
                <h3>You didn't participate in the campaigns!</h3>
              </div>
            </div>
          )}
          {InputError && (
            <div className="section_calculation__error">
              <div className="section_calculation__error_element__line1">
                <img src="/images/stakedrop/info.svg" alt="info icon" />
                <h3>{InputError}</h3>
              </div>
            </div>
          )}
          {CosmosCampaignData.mantleAddress ? (
            <div className="section_calculation__address">
              Address: {CosmosCampaignData.mantleAddress}
            </div>
          ) : PersistenceCampaignData.mantleAddress ? (
            <div className="section_calculation__address">
              Address: {PersistenceCampaignData.mantleAddress}
            </div>
          ) : TerraCampaignData.mantleAddress ? (
            <div className="section_calculation__address">
              Address: {TerraCampaignData.mantleAddress}
            </div>
          ) : ComdexCampaignData.mantleAddress ? (
            <div className="section_calculation__address">
              Address: {ComdexCampaignData.mantleAddress}
            </div>
          ) : JunoCampaignData.mantleAddress ? (
            <div className="section_calculation__address">
              Address: {JunoCampaignData.mantleAddress}
            </div>
          ) : StargazeCampaignData.mantleAddress ? (
            <div className="section_calculation__address">
              Address: {StargazeCampaignData.mantleAddress}
            </div>
          ) : InputCampaignData.mantleAddress ? (
            <div className="section_calculation__address">
              Address: {InputCampaignData.mantleAddress}
            </div>
          ) : null}
        </section>
        {Participated !== false && (
          <section className="section_reward_table">
            <div className="section_reward_table__element">
              <>
                {CosmosAddress ||
                PersistenceAddress ||
                TerraAddress ||
                ComdexAddress ||
                JunoAddress ||
                StargazeAddress ||
                InputCampaignData.delegator ? (
                  <div className="section_reward_table__element_option">
                    <h4>Campaign</h4>
                    <h4>Address</h4>
                    <p>Rewards ($MNTL)</p>
                  </div>
                ) : (
                  ""
                )}
              </>
              {CosmosAddress && (
                <div className="section_reward_table__element_option">
                  <h4>Cosmos</h4>
                  <h4>
                    {CosmosAddress.substring(0, 5)}...
                    {CosmosAddress.substring(CosmosAddress.length - 5)}
                  </h4>
                  <p>
                    {CosmosCampaignData.received
                      ? division(CosmosCampaignData.received)
                      : "--"}
                  </p>
                </div>
              )}
              {PersistenceAddress && (
                <div className="section_reward_table__element_option">
                  <h4>Persistence</h4>
                  <h4>
                    {PersistenceAddress.substring(0, 5)}...
                    {PersistenceAddress.substring(
                      PersistenceAddress.length - 5
                    )}
                  </h4>

                  <p>
                    {PersistenceCampaignData.received
                      ? division(PersistenceCampaignData.received)
                      : "--"}
                  </p>
                </div>
              )}
              {TerraAddress && (
                <div className="section_reward_table__element_option">
                  <h4>Terra</h4>
                  <h4>
                    {TerraAddress.substring(0, 5)}...
                    {TerraAddress.substring(TerraAddress.length - 5)}
                  </h4>

                  <p>
                    {TerraCampaignData.received
                      ? division(TerraCampaignData.received)
                      : "--"}
                  </p>
                </div>
              )}
              {ComdexAddress && (
                <div className="section_reward_table__element_option">
                  <h4>Comdex</h4>
                  <h4>
                    {ComdexAddress.substring(0, 5)}...
                    {ComdexAddress.substring(ComdexAddress.length - 5)}
                  </h4>

                  <p>
                    {ComdexCampaignData.received
                      ? division(ComdexCampaignData.received)
                      : "--"}
                  </p>
                </div>
              )}
              {JunoAddress && (
                <div className="section_reward_table__element_option">
                  <h4>Juno</h4>
                  <h4>
                    {JunoAddress.substring(0, 5)}...
                    {JunoAddress.substring(JunoAddress.length - 5)}
                  </h4>

                  <p>
                    {JunoCampaignData.received
                      ? division(JunoCampaignData.received)
                      : "--"}
                  </p>
                </div>
              )}
              {StargazeAddress && (
                <div className="section_reward_table__element_option">
                  <h4>Stargaze</h4>
                  <h4>
                    {StargazeAddress.substring(0, 5)}...
                    {StargazeAddress.substring(StargazeAddress.length - 5)}
                  </h4>

                  <p>
                    {StargazeCampaignData.received
                      ? division(StargazeCampaignData.received)
                      : "--"}
                  </p>
                </div>
              )}
              {InputCampaignData.delegator && (
                <div className="section_reward_table__element_option">
                  <h4>
                    {InputAddress.includes("cosmos")
                      ? "Cosmos"
                      : InputAddress.includes("persistence")
                      ? "Persistence"
                      : InputAddress.includes("terra")
                      ? "Terra"
                      : InputAddress.includes("comdex")
                      ? "Comdex"
                      : InputAddress.includes("juno")
                      ? "Juno"
                      : InputAddress.includes("stars")
                      ? "Stargaze"
                      : "Failed to detect"}
                  </h4>
                  <h4>
                    {InputCampaignData.delegator.substring(0, 5)}...
                    {InputCampaignData.delegator.substring(
                      InputCampaignData.delegator.length - 5
                    )}
                  </h4>

                  <p>
                    {InputCampaignData.received
                      ? division(InputCampaignData.received)
                      : "--"}
                  </p>
                </div>
              )}
              <>
                {CosmosAddress ||
                PersistenceAddress ||
                TerraAddress ||
                ComdexAddress ||
                JunoAddress ||
                StargazeAddress ? (
                  <div className="section_reward_table__element_option">
                    <h4>Total Rewards:</h4>
                    <span></span>
                    {/* <span></span> */}
                    <p>
                      <img
                        src="/images/airdrop/dark.png"
                        alt="coin illustration dark"
                      />{" "}
                      {(
                        (CosmosCampaignData.received +
                          PersistenceCampaignData.received +
                          TerraCampaignData.received +
                          ComdexCampaignData.received +
                          JunoCampaignData.received +
                          StargazeCampaignData.received) /
                        1000000
                      ).toLocaleString("en-US", {
                        maximumFractionDigits: 4,
                      })}
                      {` $MNTL`}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </>
            </div>
          </section>
        )}
      </Container>
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
  padding: 20px 92px 80px;
  @media (max-width: 768px) {
    background-image: url("/images/bg/tab_bg_assets.svg");
    padding: 20px 40px 60px;
  }
  @media (max-width: 548px) {
    background-image: url("/images/bg/m_bg_assets.svg");
    padding: 20px 20px 40px;
  }
  .lighter_bg {
    background: #2c2c2c;
    border-radius: 12px;
  }
  .section {
    &_calculation {
      position: relative;
      padding: 40px;
      @media (min-width: 768px) {
        background-image: url("/images/airdrop/tokens-s.png");
        background-size: auto 300px;
        background-repeat: no-repeat;
        background-position: top right;
      }
      @media (max-width: 548px) {
        padding: 20px;
      }
      h2 {
        color: var(--gray);
        padding-bottom: 12px;
      }
      h3 {
        color: var(--gray);
        padding-bottom: 40px;
      }
      &__connect {
        display: flex;
        align-items: center;
        gap: 24px;
        justify-content: space-between;
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
        padding-bottom: 24px;
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
          flex-direction: row;
          justify-content: flex-end;
          @media (max-width: 768px) {
            flex-wrap: wrap;
          }
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
            &:read-only {
              border-color: var(--gray-deep);
              color: var(--gray-deep);
              cursor: not-allowed;
              opacity: 0.4;
            }
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
              cursor: not-allowed;
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
            /* max-width: 712px; */
          }
          &:last-child {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            width: 100%;
          }
        }
      }
      &__address {
        font: var(--p-m);
        color: var(--gray-deep);
        word-break: break-word;
      }
    }
  }
`;
