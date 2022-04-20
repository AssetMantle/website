import React from "react";
import { AboutContainer } from "../../styles/pages/AboutContainer";
// import { BsFillCaretRightFill } from "react-icons/bs";
import TeamMemberCard from "../../components/TeamMemberCard";
import { teamMemberData } from "../../data/teamData";

export default function About() {
  return (
    <AboutContainer>
      <section className="section_hero">
        <div className="section_hero__element">
          <h1 className="section_hero__element_title">What is AssetMantle ?</h1>
          <p className="section_hero__element_details">
            AssetMantle is a one-stop NFT framework that empowers and
            incentivizes creators and their communities to build, innovate, and
            transact independently, and securely on the blockchain via
            MantlePlace and MantleBuilder.
          </p>
        </div>
        <div className="section_hero__element">
          <img src="/images/about/hero.png" alt="token illustration" />
        </div>
      </section>
      <section className="section_whyBetter">
        <h2>Vision Of AssetMantle</h2>
        <p>The vision is to build an open-source community-driven framework that also contributes to interNFT metadata standardization and Mantle modules for modular, interoperable, composable, and decomposable NFT integration in metaverses,  games, and art.</p>
        <div className="section_whyBetter__image"><img src="/images/about/vision.png" alt="" /></div>
        {/* <ul className="section_whyBetter__list">
          <li>
            <span className="li">
              <BsFillCaretRightFill />
            </span>
            <p>
              Sovereignity of store
              <span className="li__details">
                As a store owner, you will enjoy a high degree of controlling
                power over your products, terms, and finances.
              </span>
            </p>
          </li>
          <li>
            <span className="li">
              <BsFillCaretRightFill />
            </span>
            <p>
              Transferability of assets
              <span className="li__details">
                With AssetMantle, you can freely transfer your digital assets
                across chains and platforms without hassles.
              </span>
            </p>
          </li>
          <li>
            <span className="li">
              <BsFillCaretRightFill />
            </span>
            <p>
              Agnosticism of currency
              <span className="li__details">
                Asset Mantle supports a variety of web3 wallets including Keplr
                and hardware wallets like Ledger.
              </span>
            </p>
          </li>
          <li>
            <span className="li">
              <BsFillCaretRightFill />
            </span>
            <p>
              Customisability of metadata
              <span className="li__details">
                No more getting stuck with rigid parameters. You can customize
                your meta data as per your specific products and needs.
              </span>
            </p>
          </li>
        </ul> */}
      </section>
      <section className="section_team" id="team">
        <h2>The Mantle team</h2>
        <p>
        The Mantle team consists of some of the best minds in their respective fields.
        </p>
        {/* <h3>Team</h3> */}
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
    </AboutContainer>
  );
}