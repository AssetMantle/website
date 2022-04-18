import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { AirdropContainer } from "../../styles/pages/airdropStyle";

import { HiOutlineInformationCircle } from "react-icons/hi";

import airDropData from "../../data/airdropData.json";
import LPModal from "./LPModal";
import MetaMaskModal from "./MetaMaskModal";
import TAndCModal from "../claim/TAndCModal";
import OsmoIModal from "./OsmoIModal";

// const chainIDs = require("../../data/chain.json");

export default function Airdrop() {
  const { t } = useTranslation();

  const [LPModalStat, setLPModalStat] = useState(false);
  const [OsmoAddress, setOsmoAddress] = useState();

  const [KeplrCalculatedDATA, setKeplrCalculatedDATA] = useState();
  const [TAndC, setTAndC] = useState(false);

  const [MetaMaskModalStat, setMetaMaskModalStat] = useState(false);
  const [MetaMaskAddress, setMetaMaskAddress] = useState();

  const [MetaMaskCalculatedDATA, setMetaMaskCalculatedDATA] = useState();

  const [OsmoIModalState, setOsmoIModalState] = useState(false);

  // const [Total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`https://airdrop-data.assetmantle.one/keplr/${OsmoAddress}`)
      .then((res) => res.json())
      .then((data) => {
        data.success.toString() === "true"
          ? setKeplrCalculatedDATA(data)
          : data.address.toString() === "undefined"
          ? setKeplrCalculatedDATA()
          : setKeplrCalculatedDATA(false);
      });
  }, [OsmoAddress]);

  useEffect(() => {
    fetch(`https://airdrop-data.assetmantle.one/metaMask/${MetaMaskAddress}`)
      .then((res) => res.json())
      .then((data) => {
        data.success.toString() === "true"
          ? setMetaMaskCalculatedDATA(data)
          : data.address.toString() === "undefined"
          ? setMetaMaskCalculatedDATA()
          : setMetaMaskCalculatedDATA(false);
      });
  }, [MetaMaskAddress]);

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
            <h3>{t("COMPLETED")}</h3>
            <hr />
          </div>
          <div className="section_drop__element">
            <div className="section_drop__element_details">
              <h3>{t("AIRDROP_START_WITH_STAKEDROP_TITLE")}</h3>
              <div className="section_drop__element_details__hover">
                <p>{t("AIRDROP_START_WITH_STAKEDROP_DESCRIPTION")}</p>
                <button>
                  <HiOutlineInformationCircle />
                </button>
                <span>{t("AIRDROP_START_WITH_STAKEDROP_DESCRIPTION")}</span>
              </div>
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
                {t("CHECK_NOW")}
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
              <div className="section_drop__element_details__hover">
                <p>{t("AIRDROP_REQUIRED_ELIGIBILITY_DESCRIPTION_1")}</p>
                <button onClick={() => setOsmoIModalState(true)}>
                  <HiOutlineInformationCircle />
                </button>
                {/* <span>
                  {t("AIRDROP_REQUIRED_ELIGIBILITY_DESCRIPTION_1")}
                  </span> */}
              </div>
            </div>
            <div className="section_drop__element_value">
              <p>{t("AIRDROP_REQUIRED_ELIGIBILITY_KEY_1")}</p>
              <h4>{t("AIRDROP_REQUIRED_ELIGIBILITY_VALUE_1")}</h4>
            </div>
            <div className="section_drop__button">
              {OsmoAddress ? (
                KeplrCalculatedDATA &&
                KeplrCalculatedDATA.allocation && (
                  <button onClick={() => setTAndC(true)}>Claim</button>
                )
              ) : (
                <button onClick={() => setLPModalStat(true)}>
                  Check Eligibility
                </button>
              )}
            </div>
          </div>
          <div className="section_drop__data">
            {OsmoAddress ? (
              <div className="sectionDropAdd">
                <span>Wallet Address: {OsmoAddress}</span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setLPModalStat(true)}
                >
                  Edit
                </span>
              </div>
            ) : undefined}
            {KeplrCalculatedDATA && KeplrCalculatedDATA.allocation ? (
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
                    <p>
                      {KeplrCalculatedDATA &&
                        KeplrCalculatedDATA.allocation &&
                        Number(KeplrCalculatedDATA.allocation).toFixed(2)}
                    </p>
                  </div>
                </section>
                <section className="section_allocation_by_network">
                  <div className="section_allocation_by_network__element">
                    <div className="section_allocation_by_network__element_option">
                      <h4>Total Liquidity Provided to eligible pools as on the snapshot date(15th Feb,2022)</h4>
                      <p>Value (in USD)</p>
                    </div>
                    <div className="section_allocation_by_network__element_option">
                      <h4>Locked / Bonded</h4>
                      <p>
                        $
                        {KeplrCalculatedDATA &&
                          KeplrCalculatedDATA.allocation &&
                          Number(KeplrCalculatedDATA.locked).toFixed(2)}
                      </p>
                    </div>
                    <div className="section_allocation_by_network__element_option">
                      <h4>Unlocked / Unbonded</h4>
                      <p>
                        $
                        {KeplrCalculatedDATA &&
                          KeplrCalculatedDATA.allocation &&
                          Number(KeplrCalculatedDATA.unlocked).toFixed(2)}
                      </p>
                    </div>
                    {/* <div className="section_allocation_by_network__element_option">
                      <h4>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_3_KEY")}</h4>
                      <p>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_3_VALUE")}</p>
                    </div> */}
                  </div>
                </section>
              </>
            ) : KeplrCalculatedDATA === false ? (
              <section className="section_allocation">
                <h3 className="error-t">
                  Sorry, you are not eligible.
                </h3>
              </section>
            ) : undefined}
          </div>
        </section>
        <section className="section_drop">
          <div className="section_drop__heading">
            <h3>{t("CHECK_NOW")}</h3>
            <hr />
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
              {MetaMaskAddress ? undefined : (
                <button onClick={() => setMetaMaskModalStat(true)}>
                  Check Eligibility
                </button>
              )}
            </div>
          </div>
          <div className="section_drop__data">
            {MetaMaskAddress ? (
              <div className="sectionDropAdd">
                <span>Wallet Address: {MetaMaskAddress}</span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setMetaMaskModalStat(true)}
                >
                  Edit
                </span>
              </div>
            ) : undefined}
            {MetaMaskCalculatedDATA && MetaMaskCalculatedDATA.allocation ? (
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
                    <p>
                      {MetaMaskCalculatedDATA &&
                        MetaMaskCalculatedDATA.allocation &&
                        Number(MetaMaskCalculatedDATA.allocation).toFixed(2)}
                    </p>
                  </div>
                </section>
                <section className="section_allocation_by_network">
                  <div className="section_allocation_by_network__element">
                    <div className="section_allocation_by_network__element_option">
                      <h4>Transaction Type</h4>
                      <p>Volume Traded (ETH)</p>
                    </div>
                    <div className="section_allocation_by_network__element_option">
                      <h4>Buy / Sell</h4>
                      <p>
                        {MetaMaskCalculatedDATA &&
                          MetaMaskCalculatedDATA.allocation &&
                          Number(MetaMaskCalculatedDATA.volumeTraded).toFixed(
                            2
                          )}
                      </p>
                    </div>
                    {/* <div className="section_allocation_by_network__element_option">
                      <h4>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_2_KEY")}</h4>
                      <p>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_2_VALUE")}</p>
                    </div>
                    <div className="section_allocation_by_network__element_option">
                      <h4>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_3_KEY")}</h4>
                      <p>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_3_VALUE")}</p>
                    </div> */}
                  </div>
                </section>
              </>
            ) : MetaMaskCalculatedDATA === false ? (
              <section className="section_allocation">
                <h3 className="error-t">
                  Sorry, you are not eligible.
                </h3>
              </section>
            ) : undefined}
          </div>
        </section>
        <section className="section_wallets">
        </section>
        {KeplrCalculatedDATA || MetaMaskCalculatedDATA ? (
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
                <p>
                  {MetaMaskCalculatedDATA &&
                  MetaMaskCalculatedDATA.allocation &&
                  KeplrCalculatedDATA &&
                  KeplrCalculatedDATA.allocation
                    ? (
                        Number(MetaMaskCalculatedDATA.allocation) +
                        Number(KeplrCalculatedDATA.allocation)
                      ).toFixed(2)
                    : MetaMaskCalculatedDATA &&
                      MetaMaskCalculatedDATA.allocation
                    ? Number(MetaMaskCalculatedDATA.allocation).toFixed(2)
                    : KeplrCalculatedDATA && KeplrCalculatedDATA.allocation
                    ? Number(KeplrCalculatedDATA.allocation).toFixed(2)
                    : undefined}
                </p>
              </div>
            </section>
            <section className="section_allocation_by_network">
              <div className="section_allocation_by_network__element">
                <div className="section_allocation_by_network__element_option">
                  <h4>Category</h4>
                  <p>$MNTL Allocation</p>
                </div>
                {KeplrCalculatedDATA && KeplrCalculatedDATA.allocation && (
                  <div className="section_allocation_by_network__element_option">
                    <h4>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_1_KEY")}</h4>
                    <p>
                      {KeplrCalculatedDATA &&
                        KeplrCalculatedDATA.allocation &&
                        Number(KeplrCalculatedDATA.allocation).toFixed(2)}
                    </p>
                  </div>
                )}
                {MetaMaskCalculatedDATA && MetaMaskCalculatedDATA.allocation && (
                  <div className="section_allocation_by_network__element_option">
                    <h4>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_2_KEY")}</h4>
                    <p>
                      {Number(MetaMaskCalculatedDATA.allocation).toFixed(2)}
                    </p>
                  </div>
                )}
                {/* <div className="section_allocation_by_network__element_option">
                  <h4>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_3_KEY")}</h4>
                  <p>{t("AIRDROP_ALLOCATION_BY_NETWORK_OPTION_3_VALUE")}</p>
                </div> */}
              </div>
            </section>
          </>
        ) : undefined}
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
              {/* <a
                href={
                  airDropData.NFTOwners.href !== null ||
                  airDropData.NFTOwners.href !== undefined ||
                  airDropData.NFTOwners.href !== ""
                    ? airDropData.NFTOwners.href
                    : undefined
                }
              >
                {t("NOTIFY_ME")}
              </a> */}
            </div>
          </div>
        </section>
        {LPModalStat && (
          <LPModal
            closeModal={setLPModalStat}
            setKeplrWallet={setOsmoAddress}
          />
        )}
        {MetaMaskModalStat && (
          <MetaMaskModal
            closeModal={setMetaMaskModalStat}
            setMetaMaskWallet={setMetaMaskAddress}
          />
        )}
        {TAndC === true && <TAndCModal closeModal={setTAndC} />}
        {OsmoIModalState && <OsmoIModal closeModal={setOsmoIModalState} />}
      </AirdropContainer>
    </>
  );
}
