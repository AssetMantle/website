import React from "react";
import { AboutContainer } from "../styles/pages/AboutContainer";
// import { BsFillCaretRightFill } from "react-icons/bs";
import TeamMemberCard from "../components/TeamMemberCard";
import { teamMemberData } from "../data/teamData";

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
      {/* <section className="section_whyStore">
        <h2 className="section_whyStore__title">
          why should I build my own NFT store?
        </h2>
        <p className="section_whyStore__details">
          You can just sell your NFTs without a store, right? Sure, but building
          a store at AssetMantle gives you an edge in the market.
        </p>
        <div className="section_whyStore__grid">
          <div className="section_whyStore__element">
            <h3>do I have to build a store?</h3>
            <p>
              No, but when you build a store at AssetMantle, you get many
              distinct advantages: higher control and credibility, go-to-market
              speed, full customizability, and strong visibility. Over time,
              you’ll also enjoy a high degree of interoperability and optimal
              running costs.{" "}
            </p>
          </div>
          <div className="section_whyStore__element">
            <h3>okay, but do I have an alternative?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section> */}
      {/* <section className="section_right">
        <h2 className="section_right__title">
          what are my rights as an NFT store owner?
        </h2>
        <p className="section_right__details">
          There are many rights and privileges you get when you become an owner
          of an NFT store at AssetMantle.
        </p>
        <div className="section_right__grid">
          <div className="section_right__element">
            <div className="section_right__element_img">
              <img src="/images/icons/1.svg" alt="One Illustration" />
            </div>
            <div className="section_right__element_details">
              <h3>Curation </h3>
              <p>Curation DAO funded by the community pool</p>
            </div>
          </div>
          <div className="section_right__element">
            <div className="section_right__element_img">
              <img src="/images/icons/2.svg" alt="Two Illustration" />
            </div>
            <div className="section_right__element_details">
              <h3>lorem ipsum dolor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>
          <div className="section_right__element">
            <div className="section_right__element_img">
              <img src="/images/icons/3.svg" alt="Three Illustration" />
            </div>
            <div className="section_right__element_details">
              <h3>lorem ipsum dolor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna lorem ipsum
                dolor sit amet, consectetur adipiscing{" "}
              </p>
            </div>
          </div>
          <div className="section_right__element">
            <div className="section_right__element_img">
              <img src="/images/icons/4.svg" alt="Four Illustration" />
            </div>
            <div className="section_right__element_details">
              <h3>lorem ipsum dolor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna lorem ipsum
                dolor sit amet, consectetur adipiscing{" "}
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="section_VP">
        <div className="section_VP__element">
          <div className="section_VP__element_group">
            <h2>Our Vision</h2>
            <p>
              We want to transform the way people buy, sell, and flaunt things
              on the internet. If a digital native thinks about flexing social
              status through a collectible or increasing their sense of security
              online, we want to be the ones who enable them.{" "}
            </p>
          </div>
          <div className="section_VP__element_group">
            <h2>Our Philosophy</h2>
            <p>
              We believe in making things as insightful as they are simple.
              Whatever brings you delight or growth, that’s where our efforts
              are aligned. Our values are inclusion, freedom, growth,
              creativity, and thoughtfulness. We want to make your NFT game a
              joyful and thriving enterprise.
            </p>
          </div>
        </div>
        <div className="section_VP__element">
          <img src="/images/roadmap.png" alt="roadmap illustration" />
          <p>
            Want to know more about our journey?{" "}
            <a href="/roadmap">Check out our roadmap</a>
          </p>
        </div>
      </section> */}
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
