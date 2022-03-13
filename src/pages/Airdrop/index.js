import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { AirdropContainer } from "../../styles/pages/airdropStyle";

import airDropData from "../../data/airdropData.json";

const chainIDs = require("../../data/chain.json");
const chainID = "cosmoshub-4";

export default function Airdrop() {
  const { t } = useTranslation();

  const [keplrWalletAccount, setKeplrWalletAccount] = useState([]);
  const [wallet, setWallet] = useState([]);
  const [inputWallet, setInputWallet] = useState();
  var AllWallets =
    wallet &&
    [...new Set(wallet)].filter((el) => {
      return el !== null && typeof el !== undefined && el !== "";
    });

  const [MetaMaskConnectionState, setMetaMaskConnectionState] = useState(0);
  const [KeplrConnectionState, setKeplrConnectionState] = useState(0);

  const [eligibilityDATA, setEligibilityDATA] = useState();
  console.log("eligibilityDATA", eligibilityDATA);
  const [showCalculator, setShowCalculator] = useState(false);

  useEffect(() => {
    setWallet([...wallet, ...keplrWalletAccount]);
  }, [keplrWalletAccount]);

  const handleMetamaskConnect = async () => {
    if (typeof window.ethereum !== "undefined") {
      console.log("Connecting MetaMask...");
      setMetaMaskConnectionState(1);

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];

      console.log("Account: ", account);
      setMetaMaskConnectionState(2);
      setWallet([...wallet, account]);
    } else {
      window.alert("Please install MetaMask to move forward with the task.");
    }
  };

  const handleKeplrConnect = async () => {
    if (window.keplr) {
      setKeplrConnectionState(1);
      let offlineSigner = window.keplr.getOfflineSigner(chainID);
      let accounts = await offlineSigner.getAccounts();
      const account = accounts[0].address;
      console.log("Account: ", account);
      // keplr addresses array

      const _chainIDArray = JSON.parse(chainIDs);
      _chainIDArray.forEach(function (number) {
        const addressK = window.keplr.getKey(number).then(
          (result) => {
            // console.log(result.bech32Address);
            // keplrWalletAddresses.push(result.bech32Address);
            setKeplrWalletAccount([
              ...keplrWalletAccount,
              result.bech32Address,
            ]);
          },
          (error) => {
            console.log(error);
          }
        );
        console.log(addressK);
      });
      // ends
      setKeplrWalletAccount([...keplrWalletAccount, account]);
      setKeplrConnectionState(2);
    } else {
      window.alert("Please install Keplr to move forward with the task.");
    }
  };

  const handleAddInputField = () => {
    setWallet([...wallet, inputWallet]);
    document.querySelector("#inputWalletAddress").value = "";
  };

  const handleClick = () => {
    if (wallet) {
      setEligibilityDATA({
        stakeDrop: { eligible: true },
        liquidityProviders: { eligible: false },
        NFTOwners: { eligible: true },
        MantleReservesForCreators: { eligible: true },
      });
      setShowCalculator(true);
    }
  };

  return (
    <AirdropContainer>
      <section className="section_hero">
        <div className="section_hero__element">
          <h1>{t("AIRDROP_HERO_TITLE")}</h1>
          <p>{t("AIRDROP_HERO_DESCRIPTION")}</p>
        </div>
        <div className="section_hero__element">
          <div className="section_hero__element_image__con">
            <img
              src="/images/airdrop/coins.png"
              alt="double coin illustration"
            />
          </div>
        </div>
      </section>
      <section className="section_drop">
        <div className="section_drop__heading">
          <h3>{t("AIRDROP_START_WITH_STAKEDROP_HEADING")}</h3>
          <hr />
        </div>
        <div className="section_drop__element">
          <div className="section_drop__element_details">
            <h3>{t("AIRDROP_START_WITH_STAKEDROP_TITLE")}</h3>
            <p>{t("AIRDROP_START_WITH_STAKEDROP_DESCRIPTION")}</p>
          </div>
          <div className="section_drop__element_value">
            <p>{t("AIRDROP_START_WITH_STAKEDROP_KEY")}</p>
            <h4>{t("AIRDROP_START_WITH_STAKEDROP_VALUE")}</h4>
          </div>
          <div className="section_drop__button">
            <a
              href={
                airDropData.startWithStakedrop.href !== null ||
                airDropData.startWithStakedrop.href !== undefined ||
                airDropData.startWithStakedrop.href !== ""
                  ? airDropData.startWithStakedrop.href
                  : undefined
              }
            >
              {t("LETS_GO")}
            </a>
          </div>
        </div>
      </section>
      <section className="section_drop">
        <div className="section_drop__heading">
          <h3>{t("AIRDROP_REQUIRED_ELIGIBILITY_HEADING")}</h3>
          <hr />
        </div>
        <div className="section_drop__element">
          <div className="section_drop__element_details">
            <h3>{t("AIRDROP_REQUIRED_ELIGIBILITY_TITLE_1")}</h3>
            <p>{t("AIRDROP_REQUIRED_ELIGIBILITY_DESCRIPTION_1")}</p>
          </div>
          <div className="section_drop__element_value">
            <p>{t("AIRDROP_REQUIRED_ELIGIBILITY_KEY_1")}</p>
            <h4>{t("AIRDROP_REQUIRED_ELIGIBILITY_VALUE_1")}</h4>
          </div>
          <div className="section_wallets__buttons">
            <div
              className="section_wallets__buttons_button"
              onClick={handleKeplrConnect}
            >
              <img src="/images/airdrop/Kepler.png" alt="Keplr icon" />
              <span>{`${
                { 0: t("CONNECT"), 1: t("CONNECTING"), 2: t("CONNECTED") }[
                  KeplrConnectionState
                ]
              } Kepler`}</span>
            </div>
          </div>
        </div>
        <div className="section_drop__element">
          <div className="section_drop__element_details">
            <h3>{t("AIRDROP_REQUIRED_ELIGIBILITY_TITLE_2")}</h3>
            <p>{t("AIRDROP_REQUIRED_ELIGIBILITY_DESCRIPTION_2")}</p>
          </div>
          <div className="section_drop__element_value">
            <p>{t("AIRDROP_REQUIRED_ELIGIBILITY_KEY_2")}</p>
            <h4>{t("AIRDROP_REQUIRED_ELIGIBILITY_VALUE_2")}</h4>
          </div>
          <div className="section_wallets__buttons">
            <div
              className="section_wallets__buttons_button"
              onClick={handleMetamaskConnect}
            >
              <img src="/images/airdrop/MetaMask.png" alt="Metamask icon" />
              <span>{`${
                { 0: t("CONNECT"), 1: t("CONNECTING"), 2: t("CONNECTED") }[
                  MetaMaskConnectionState
                ]
              } Metamask`}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section_wallets">
        <>
          {/* <p>{t("AIRDROP_WALLETS_OPTION_1_TITLE")}</p>
        <div className="section_wallets__buttons">
          <div
            className="section_wallets__buttons_button"
            onClick={handleKeplrConnect}
          >
            <img src="/images/airdrop/Kepler.png" alt="Keplr icon" />
            <span>{`${
              { 0: t("CONNECT"), 1: t("CONNECTING"), 2: t("CONNECTED") }[
                KeplrConnectionState
              ]
            } Kepler`}</span>
          </div>
          <div
            className="section_wallets__buttons_button"
            onClick={handleMetamaskConnect}
          >
            <img src="/images/airdrop/MetaMask.png" alt="Metamask icon" />
            <span>{`${
              { 0: t("CONNECT"), 1: t("CONNECTING"), 2: t("CONNECTED") }[
                MetaMaskConnectionState
              ]
            } Metamask`}</span>
          </div>
        </div> */}
        </>
        <p>{t("OR")}</p>
        <p>{t("AIRDROP_WALLETS_OPTION_2_TITLE")}</p>
        {AllWallets &&
          React.Children.toArray(
            AllWallets.map((data) => (
              <div className="section_wallets__form">
                <div className="section_wallets__form_input">
                  <input
                    type="text"
                    value={data}
                    onChange={(e) =>
                      (AllWallets[AllWallets.indexOf(data)] = e.target.value)
                    }
                    placeholder={t("AIRDROP_WALLETS_OPTION_2_PLACEHOLDER")}
                  />
                  <img src="/images/airdrop/plus.png" alt="add" />
                </div>
              </div>
            ))
          )}
        <div className="section_wallets__form">
          <div className="section_wallets__form_input">
            <input
              type="text"
              id="inputWalletAddress"
              onChange={(e) => setInputWallet(e.target.value)}
              placeholder={t("AIRDROP_WALLETS_OPTION_2_PLACEHOLDER")}
            />
            <img
              onClick={handleAddInputField}
              src="/images/airdrop/plus.png"
              alt="add"
            />
          </div>
          <button onClick={handleClick}>{t("CHECK_ELIGIBILITY")}</button>
        </div>
      </section>
      {showCalculator && (
        <>
          <section className="section_allocation">
            <h3>{t("AIRDROP_ALLOCATION_TITLE")}</h3>
            <div className="section_allocation__element">
              <div className="section_allocation__element_left">
                <img
                  src="/images/airdrop/dark.png"
                  alt="coin illustration dark"
                />
                <h4>{t("AIRDROP_ALLOCATION_KEY")}</h4>
              </div>
              <p>{t("AIRDROP_ALLOCATION_VALUE")}</p>
            </div>
          </section>
          <section className="section_allocation_by_network">
            <h4 className="section_allocation_by_network__title">
              {t("AIRDROP_ALLOCATION_BY_NETWORK_TITLE")}
            </h4>
            <div className="section_allocation_by_network__element">
              <div className="section_allocation_by_network__element_option">
                <h4>Pools</h4>
                <p>Liquidity Provided</p>
              </div>
              <div className="section_allocation_by_network__element_option">
                <h4>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_1_KEY")}</h4>
                <p>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_1_VALUE")}</p>
              </div>
              <div className="section_allocation_by_network__element_option">
                <h4>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_2_KEY")}</h4>
                <p>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_2_VALUE")}</p>
              </div>
              <div className="section_allocation_by_network__element_option">
                <h4>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_3_KEY")}</h4>
                <p>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_3_VALUE")}</p>
              </div>
            </div>
          </section>
        </>
      )}
      <section className="section_drop">
        <div className="section_drop__heading">
          <h3>{t("AIRDROP_NFT_OWNERS_HEADING")}</h3>
          <hr />
        </div>
        <div className="section_drop__element">
          <div className="section_drop__element_details">
            <h3>{t("AIRDROP_NFT_OWNERS_TITLE")}</h3>
            <p>{t("AIRDROP_NFT_OWNERS_DESCRIPTION")}</p>
          </div>
          <div className="section_drop__element_value">
            <p>{t("AIRDROP_NFT_OWNERS_KEY")}</p>
            <h4>{t("AIRDROP_NFT_OWNERS_VALUE")}</h4>
          </div>
          <div className="section_drop__button two">
            <a
              href={
                airDropData.NFTOwners.href !== null ||
                airDropData.NFTOwners.href !== undefined ||
                airDropData.NFTOwners.href !== ""
                  ? airDropData.NFTOwners.href
                  : undefined
              }
            >
              {t("NOTIFY_ME")}
            </a>
          </div>
        </div>
      </section>
    </AirdropContainer>
  );
}
