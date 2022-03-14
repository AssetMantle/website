import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { AirdropContainer } from "../../styles/pages/airdropStyle";

import airDropData from "../../data/airdropData.json";
import LPModal from "./LPModal";
import MetaMaskModal from "./MetaMaskModal";

// const chainIDs = require("../../data/chain.json");

export default function Airdrop() {
  const { t } = useTranslation();

  const [LPModalStat, setLPModalStat] = useState(false);
  const [OsmoAddress, setOsmoAddress] = useState();
  const [KeplrModalInputAddress, setKeplrModalInputAddress] = useState();
  console.log(OsmoAddress, KeplrModalInputAddress);
  const [KeplrCalculatedDATA, setKeplrCalculatedDATA] = useState();

  const [MetaMaskModalStat, setMetaMaskModalStat] = useState(false);
  const [MetaMaskAddress, setMetaMaskAddress] = useState();
  const [MetaMaskModalInputAddress, setMetaMaskModalInputAddress] = useState();
  console.log(MetaMaskAddress, MetaMaskModalInputAddress);

  const [MetaMaskCalculatorDATA, setMetaMaskCalculatorDATA] = useState();
  const [TotalCalculatedDATA, setTotalCalculatedDATA] = useState();

  // const [wallet, setWallet] = useState([]);
  // const [inputWallet, setInputWallet] = useState();
  // var AllWallets =
  //   wallet &&
  //   [...new Set(wallet)].filter((el) => {
  //     return el !== null && typeof el !== undefined && el !== "";
  //   });

  // const [eligibilityDATA, setEligibilityDATA] = useState();
  // console.log("eligibilityDATA", eligibilityDATA);
  // const [showCalculator, setShowCalculator] = useState(false);

  // const [MetaMaskConnectionState, setMetaMaskConnectionState] = useState(0);
  // const handleMetamaskConnect = async () => {
  //   if (typeof window.ethereum !== "undefined") {
  //     console.log("Connecting MetaMask...");
  //     setMetaMaskConnectionState(1);

  //     const accounts = await window.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     const account = accounts[0];

  //     console.log("Account: ", account);
  //     setMetaMaskConnectionState(2);
  //     setWallet([...wallet, account]);
  //   } else {
  //     window.alert("Please install MetaMask to move forward with the task.");
  //   }
  // };

  // const [KeplrConnectionState, setKeplrConnectionState] = useState(0);
  // const chainID = "osmosis-1";
  // const handleKeplrConnect = async () => {
  //   if (window.keplr) {
  //     setKeplrConnectionState(1);
  //     let offlineSigner = window.keplr.getOfflineSigner(chainID);
  //     let accounts = await offlineSigner.getAccounts();
  //     const account = accounts[0].address;
  //     setKeplrWallet(account);
  //     setKeplrConnectionState(2);
  //     //   console.log("Account: ", account);
  //     // keplr addresses array

  //     //   const _chainIDArray = JSON.parse(chainIDs);
  //     //   _chainIDArray.forEach(function (number) {
  //     //     const addressK = window.keplr.getKey(number).then(
  //     //       (result) => {
  //     //         console.log(result.bech32Address);
  //     //         // keplrWalletAddresses.push(result.bech32Address);
  //     //         // setKeplrWalletAccount([
  //     //         //   ...keplrWalletAccount,
  //     //         //   result.bech32Address,
  //     //         // ]);
  //     //       },
  //     //       (error) => {
  //     //         console.log(error);
  //     //       }
  //     //     );
  //     //     console.log(addressK);
  //     //   });
  //     // ends
  //   } else {
  //     window.alert("Please install Keplr to move forward with the task.");
  //   }
  // };

  // const handleAddInputField = () => {
  //   setWallet([...wallet, inputWallet]);
  //   document.querySelector("#inputWalletAddress").value = "";
  // };

  // const handleClick = () => {
  //   if (wallet) {
  //     setEligibilityDATA({
  //       stakeDrop: { eligible: true },
  //       liquidityProviders: { eligible: false },
  //       NFTOwners: { eligible: true },
  //       MantleReservesForCreators: { eligible: true },
  //     });
  //     setShowCalculator(true);
  //   }
  // };

  return (
    <>
      <AirdropContainer>
        <section className="section_hero">
          <div className="section_hero__element">
            <h1>{t("AIRDROP_HERO_TITLE")}</h1>
            <p>{t("AIRDROP_HERO_DESCRIPTION")}</p>
            <div className="section_hero__element_readBlog">
              <p className="section_hero__element_readBlog__text">
                {t("AIRDROP_HERO_READ_BLOG_TEXT")}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={airDropData.hero.href && airDropData.hero.href}
                className="section_hero__element_readBlog__button"
              >
                {t("AIRDROP_HERO_READ_BLOG_BUTTON_TEXT")}
              </a>
            </div>
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
              <p title={t("AIRDROP_START_WITH_STAKEDROP_DESCRIPTION")}>
                {t("AIRDROP_START_WITH_STAKEDROP_DESCRIPTION")}
              </p>
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
              <p title={t("AIRDROP_REQUIRED_ELIGIBILITY_DESCRIPTION_1")}>
                {t("AIRDROP_REQUIRED_ELIGIBILITY_DESCRIPTION_1")}
              </p>
            </div>
            <div className="section_drop__element_value">
              <p>{t("AIRDROP_REQUIRED_ELIGIBILITY_KEY_1")}</p>
              <h4>{t("AIRDROP_REQUIRED_ELIGIBILITY_VALUE_1")}</h4>
            </div>
            <div className="section_drop__button">
              {OsmoAddress || KeplrModalInputAddress ? undefined : (
                <button onClick={() => setLPModalStat(true)}>
                  Check Eligibility
                </button>
              )}
            </div>
          </div>
          <div className="section_drop__data">
            {OsmoAddress || KeplrModalInputAddress ? (
              <div className="sectionDropAdd">
                <span>Wallet Addresses</span>
                <span>Edit</span>
              </div>
            ) : undefined}
            {OsmoAddress && (
              <div className="section_wallets__form">
                <input
                  type="text"
                  value={OsmoAddress}
                  onChange={(e) => setOsmoAddress(e.target.value)}
                  placeholder={t("AIRDROP_WALLETS_OPTION_2_PLACEHOLDER")}
                />
              </div>
            )}
            {KeplrModalInputAddress && (
              <div className="section_wallets__form">
                <input
                  type="text"
                  value={KeplrModalInputAddress}
                  onChange={(e) => setKeplrModalInputAddress(e.target.value)}
                  placeholder={t("AIRDROP_WALLETS_OPTION_2_PLACEHOLDER")}
                />
              </div>
            )}
            {KeplrCalculatedDATA && (
              <>
                <section className="section_allocation">
                  <h3>{t("AIRDROP_ALLOCATION_SINGLE_TITLE")}</h3>
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
                  {/* <h4 className="section_allocation_by_network__title">
              {t("AIRDROP_ALLOCATION_BY_NETWORK_TITLE")}
            </h4> */}
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
          </div>
          <div className="section_drop__element">
            <div className="section_drop__element_details">
              <h3>{t("AIRDROP_REQUIRED_ELIGIBILITY_TITLE_2")}</h3>
            </div>
            <div className="section_drop__element_value">
              <p>{t("AIRDROP_REQUIRED_ELIGIBILITY_KEY_2")}</p>
              <h4>{t("AIRDROP_REQUIRED_ELIGIBILITY_VALUE_2")}</h4>
            </div>
            <div className="section_drop__button">
              {!MetaMaskAddress || !MetaMaskModalInputAddress ? (
                <button onClick={() => setMetaMaskModalStat(true)}>
                  Check Eligibility
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="section_drop__data">
            {MetaMaskAddress || MetaMaskModalInputAddress ? (
              <div className="sectionDropAdd">
                <span>Wallet Addresses</span>
                <span>Edit</span>
              </div>
            ) : undefined}
            {MetaMaskAddress && (
              <div className="section_wallets__form">
                <input
                  type="text"
                  value={MetaMaskAddress}
                  onChange={(e) => setMetaMaskAddress(e.target.value)}
                  placeholder={t("AIRDROP_WALLETS_OPTION_2_PLACEHOLDER")}
                />
              </div>
            )}
            {MetaMaskModalInputAddress && (
              <div className="section_wallets__form">
                <input
                  type="text"
                  value={MetaMaskModalInputAddress}
                  onChange={(e) => setMetaMaskModalInputAddress(e.target.value)}
                  placeholder={t("AIRDROP_WALLETS_OPTION_2_PLACEHOLDER")}
                />
              </div>
            )}
            {MetaMaskCalculatorDATA && (
              <>
                <section className="section_allocation">
                  <h3>{t("AIRDROP_ALLOCATION_SINGLE_TITLE")}</h3>
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
                  {/* <h4 className="section_allocation_by_network__title">
              {t("AIRDROP_ALLOCATION_BY_NETWORK_TITLE")}
            </h4> */}
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
            {/*{AllWallets &&
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
        <p>{t("OR")}</p>
        <p>{t("AIRDROP_WALLETS_OPTION_2_TITLE")}</p>
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
        </div>*/}
          </>
        </section>
        {TotalCalculatedDATA && (
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
              {/* <h4 className="section_allocation_by_network__title">
              {t("AIRDROP_ALLOCATION_BY_NETWORK_TITLE")}
            </h4> */}
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
              {/* <p>{t("AIRDROP_NFT_OWNERS_DESCRIPTION")} </p>*/}
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
        {LPModalStat && (
          <LPModal
            closeModal={setLPModalStat}
            setKeplr1={setOsmoAddress}
            setKeplr2={setKeplrModalInputAddress}
          />
        )}
        {MetaMaskModalStat && (
          <MetaMaskModal
            closeModal={setMetaMaskModalStat}
            setMetaMask1={setMetaMaskAddress}
            setMetaMask2={setMetaMaskModalInputAddress}
          />
        )}
      </AirdropContainer>
    </>
  );
}
