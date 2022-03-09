import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { AirdropContainer } from "../../styles/pages/airdropStyle";

const chainIDs = require("../../data/chain.json");
const chainID = "cosmoshub-4";

export default function Airdrop() {
  const { t } = useTranslation();

  const [walletAccount, setWalletAccount] = useState("");
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

  const [eligibility, setEligibility] = useState();
  const [showCalculator, setShowCalculator] = useState(false);

  useEffect(() => {
    setWallet([...wallet, walletAccount, ...keplrWalletAccount]);
  }, [walletAccount, keplrWalletAccount]);

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
      setWalletAccount(account);
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
      setEligibility({
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
      <section className="section_wallets">
        <p>{t("AIRDROP_WALLETS_OPTION_1_TITLE")}</p>
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
        </div>
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
      <section className="section_drops">
        <div className="section_drops__drop">
          <div className="section_drops__drop_title">
            <h3>{t("AIRDROP_DROPS_DROP_1_TITLE")}</h3>
            <h5>{t("AIRDROP_DROPS_DROP_1_LABEL")}</h5>
          </div>
          <p>{t("AIRDROP_DROPS_DROP_1_DETAILS")}</p>
          <div className="section_drops__drop_value">
            <p>{t("AIRDROP_DROPS_DROP_1_KEY")}</p>
            <h4>{t("AIRDROP_DROPS_DROP_1_VALUE")}</h4>
          </div>
          {eligibility && (
            <>
              {eligibility.stakeDrop.eligible ? (
                <img src="/images/airdrop/right.svg" alt="eligible" />
              ) : (
                <img src="/images/airdrop/wrong.svg" alt="not eligible" />
              )}
            </>
          )}
        </div>
        <div className="section_drops__drop">
          <div className="section_drops__drop_title">
            <h3>{t("AIRDROP_DROPS_DROP_2_TITLE")}</h3>
            <h5>{t("AIRDROP_DROPS_DROP_2_LABEL")}</h5>
          </div>
          <p>{t("AIRDROP_DROPS_DROP_2_DETAILS")}</p>
          <div className="section_drops__drop_value">
            <p>{t("AIRDROP_DROPS_DROP_2_KEY")}</p>
            <h4>{t("AIRDROP_DROPS_DROP_2_VALUE")}</h4>
          </div>
          {eligibility && (
            <>
              {eligibility.liquidityProviders.eligible ? (
                <img src="/images/airdrop/right.svg" alt="eligible" />
              ) : (
                <img src="/images/airdrop/wrong.svg" alt="not eligible" />
              )}
            </>
          )}
        </div>
        <div className="section_drops__drop">
          <div className="section_drops__drop_title">
            <h3>{t("AIRDROP_DROPS_DROP_3_TITLE")}</h3>
            <h5>{t("AIRDROP_DROPS_DROP_3_LABEL")}</h5>
          </div>
          <p>{t("AIRDROP_DROPS_DROP_3_DETAILS")}</p>
          <div className="section_drops__drop_value">
            <p>{t("AIRDROP_DROPS_DROP_3_KEY")}</p>
            <h4>{t("AIRDROP_DROPS_DROP_3_VALUE")}</h4>
          </div>
          {eligibility && (
            <>
              {eligibility.NFTOwners.eligible ? (
                <img src="/images/airdrop/right.svg" alt="eligible" />
              ) : (
                <img src="/images/airdrop/wrong.svg" alt="not eligible" />
              )}
            </>
          )}
        </div>
        <div className="section_drops__drop">
          <div className="section_drops__drop_title">
            <h3>{t("AIRDROP_DROPS_DROP_4_TITLE")}</h3>
            <h5>{t("AIRDROP_DROPS_DROP_4_LABEL")}</h5>
          </div>
          <p>{t("AIRDROP_DROPS_DROP_4_DETAILS")}</p>
          <div className="section_drops__drop_value">
            <p>{t("AIRDROP_DROPS_DROP_4_KEY")}</p>
            <h4>{t("AIRDROP_DROPS_DROP_4_VALUE")}</h4>
          </div>
          {eligibility && (
            <>
              {eligibility.MantleReservesForCreators.eligible ? (
                <img src="/images/airdrop/right.svg" alt="eligible" />
              ) : (
                <img src="/images/airdrop/wrong.svg" alt="not eligible" />
              )}
            </>
          )}
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
      <div className="section_gap"></div>
    </AirdropContainer>
  );
}
