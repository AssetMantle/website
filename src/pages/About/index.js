import React, { useState } from "react";
import { AboutContainer } from "../../styles/pages/AboutContainer";
import TeamMemberCard from "../../components/TeamMemberCard";
import { teamMemberData } from "../../data/teamData";
import { useTranslation } from "react-i18next";
import aboutData from "../../data/aboutData.json";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import WhitePaper from "../Home/WhitePaper";
import RoadMapSlide from "./RoadMapSlide";

export default function About() {
  const { t } = useTranslation();

  const [phase, setPhase] = useState(0);

  const phases = [
    {
      image: "phase_00.png",
      title: "Phase 00 UNEARTH",
      list: [
        "Testnet",
        "Onboarding for validators",
        "MantlePlace beta version release ",
        "Multi-wallet support: Ledger, Keplr",
        "Mantle transaction explorer ",
        "Mint, Buy, Sell, Transfer ",
        "Onboarding for ‘Mantle Genesis creators’",
      ],
    },
    {
      image: "phase_01.png",
      title: "Phase 01 TRENCH",
      list: [
        "$MNTL Tokenomics*",
        "IBC enabled chain",
        "MantlePlace V2",
        "Introducing Fractional NFTs",
        "Onboarding for ‘Genesis stores’",
        "Incentivised Testnet V2*",
        "$MNTL Airdrop Calculator",
      ],
    },
    {
      image: "phase_02.png",
      title: "Phase 02 UNLIMIT",
      list: [
        "Auctions, secondary sales & Royalties",
        "Mainnet Launch",
        "$MNTL Airdrops*",
        "Liquidity Bootstrapping Pool event on Osmosis Chain*",
        "MantleBuilder V1",
        "MantlePlace early access to ‘Genesis creators’",
        "Mantle NFT Drops for Genesis Creators & early adopters",
      ],
    },
    {
      image: "phase_03.png",
      title: "Phase 03 CACHE",
      list: [
        "IBC InterNFT Compatibility ",
        "Curation for art and verification for artists by Mantle DAO* ",
        "Stats, Analytics dashboard on MantlePlace ",
        "$MNTL Retroactive Rewards ",
        "Membership NFT drops to Genesis stores & early adopters ",
      ],
    },
    {
      image: "phase_04.png",
      title: "Phase 04 CURATE",
      list: [
        "Introducing TradeRoom ",
        "Composable, Decomposable NFTs   ",
        "Integrations of Multiple-Payment modes",
        "Staking and liquidity pools (LPs) for NFTs",
        "MantlePlace V3 ",
      ],
    },
    {
      image: "phase_05.png",
      title: "Phase 05 RAREFY",
      list: [
        "Cosmos NFT projects collaborations ",
        "ETH Bridge Integration for multi-chain compatibility ",
        "IBC Resolver  ",
        "Identity as SECP256K1 Address ",
      ],
    },
  ];

  return (
    <AboutContainer>
      <Header />
      <div className="smoothScrollElement center">
        <section className="section_hero">
          <div className="section_hero__element">
            <h1 className="section_hero__element_title">
              {t("ABOUT_HERO_TITLE")}
            </h1>
            <p className="section_hero__element_details">
              {t("ABOUT_HERO_DESCRIPTION")}
            </p>
          </div>
          <div className="section_hero__element">
            <iframe
              src="https://www.youtube.com/embed/vvKVCbxWl1g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
      <div className="smoothScrollElement center">
        <section className="section_visionMission">
          <div className="section_visionMission_grid">
            <div className="section_visionMission__element">
              <h1>{t("ABOUT_VISION_TITLE")}</h1>
              <p>{t("ABOUT_VISION_DESCRIPTION")}</p>
            </div>
            <div className="section_visionMission__element">
              <h1>{t("ABOUT_MISSION_TITLE")}</h1>
              <p>{t("ABOUT_MISSION_DESCRIPTION")}</p>
            </div>
          </div>
          <div className="section_visionMission_grid">
            <img src={aboutData.hero.image} alt={aboutData.hero.image_alt} />
          </div>
        </section>
        <WhitePaper />
      </div>
      <div className="smoothScrollElement center">
        <section className="section_roadmap" id="roadmap">
          <h1>{t("ABOUT_ROADMAP_TITLE")}</h1>
          <div className="section_roadmap__slide">
            <div className="section_roadmap__slide_element">
              <button
                onClick={() =>
                  phase !== 0 ? setPhase(phase - 1) : setPhase(5)
                }
                className="section_roadmap__slide_element_left_button"
              >
                <img src="/images/about/left_arrow.svg" alt="arrow" />
              </button>
              <div className="section_roadmap__slide_element__phase">
                <RoadMapSlide
                  image={phases[phase].image}
                  title={phases[phase].title}
                  list={phases[phase].list}
                />
              </div>
              <button
                onClick={() =>
                  phase !== 5 ? setPhase(phase + 1) : setPhase(0)
                }
                className="section_roadmap__slide_element_right_button"
              >
                <img src="/images/about/right_arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
          <div className="section_roadmap__note">{t("ABOUT_ROADMAP_NOTE")}</div>
        </section>
      </div>
      <div className="smoothScrollElement center">
        <section className="section_team" id="team">
          <h2>{t("ABOUT_TEAM_TITLE")}</h2>
          <p>{t("ABOUT_TEAM_DESCRIPTION")}</p>
          <div className="section_team__container">
            {Array.isArray(teamMemberData) &&
              teamMemberData.length !== 0 &&
              teamMemberData.map((data) => (
                <TeamMemberCard
                  imgSrc={
                    data.image !== null &&
                    data.image !== undefined &&
                    data.image !== ""
                      ? data.image
                      : "placeholder.png"
                  }
                  name={data.name}
                  position={data.designation}
                  social={data.social}
                  key={data.name + data.designation}
                />
              ))}
          </div>
        </section>
      </div>
      <div className="smoothScrollElement center">
        <Footer />
      </div>
    </AboutContainer>
  );
}
