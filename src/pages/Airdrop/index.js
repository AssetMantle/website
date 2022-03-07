import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AirdropContainer } from "../../styles/pages/airdropStyle";

export default function Airdrop() {
  const { t } = useTranslation();

  const [wallet, setWallet] = useState();
  const [inputWallet, setInputWallet] = useState();
  console.log(wallet, inputWallet);

  const [eligibility, setEligibility] = useState();

  useEffect(() => {
    setWallet(inputWallet);
  }, [inputWallet]);

  const handleClick = () => {
    wallet &&
      setEligibility({
        stakeDrop: { eligible: true },
        liquidityProviders: { eligible: false },
        NFTOwners: { eligible: true },
        MantleReservesForCreators: { eligible: true },
      });
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
            <img src="/images/airdrop/light.png" alt="" />
            <img src="/images/airdrop/dark_1.png" alt="" />
          </div>
        </div>
      </section>
      <section className="section_wallets">
        <p>{t("AIRDROP_WALLETS_OPTION_1_TITLE")}</p>
        <div className="section_wallets__buttons">
          <div className="section_wallets__buttons_button">
            <img src="/images/airdrop/Kepler.png" alt="" />
            <span>{t("CONNECT")} Kepler</span>
          </div>
          <div className="section_wallets__buttons_button">
            <img src="/images/airdrop/MetaMask.png" alt="" />
            <span>{t("CONNECT")} Metamask</span>
          </div>
        </div>
        <p>{t("OR")}</p>
        <p>{t("AIRDROP_WALLETS_OPTION_2_TITLE")}</p>
        <div className="section_wallets__form">
          <div className="section_wallets__form_input">
            <input
              type="text"
              onChange={(e) => setInputWallet(e.target.value)}
              placeholder={t("AIRDROP_WALLETS_OPTION_2_PLACEHOLDER")}
            />
            <img src="/images/airdrop/plus.png" alt="add" />
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
    </AirdropContainer>
  );
}
