import React from "react";
import { AboutContainer } from "../styles/pages/AboutContainer";
import { BsFillCaretRightFill } from "react-icons/bs";
import TeamMemberCard from "../components/TeamMemberCard";
import { teamMemberData } from "../data/teamData";

export default function About() {
  return (
    <AboutContainer>
      <section className="section_hero">
        <div className="section_hero__element">
          <h1 className="section_hero__element_title">
            who is AssetMantle for?
          </h1>
          <p className="section_hero__element_details">
            If you believe in NFTs and are eager to buy the best or sell in a
            smart, seamless manner, AssetMantle is for you. We are a
            community-first platform for creators and collectors.
          </p>
          <p className="section_hero__element_details">
            The NFT market is new-age and exciting. But it’s also intricate and
            dynamic. AssetMantle helps you truly AMPLIFY your collection and
            commerce. With the advantage of choice, flexibility, affordability,
            and security.
          </p>
        </div>
        <div className="section_hero__element"></div>
      </section>
      <section className="section_whyBetter">
        <h2>why is AssetMantle better?</h2>
        <p>
          There are many NFT marketplaces. AssetMantle gives you unique
          benefits.
        </p>
        <ul className="section_whyBetter__list">
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
        </ul>
      </section>
      <section className="section_whyStore">
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
      </section>
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
      <section className="section_VP">
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
      </section>
      <section className="section_team" id="team">
        <h2>The team</h2>
        <p>
          We are backed by a stellar team. That includes founders with vision,
          engineers with the best ideas to execute that vision, customer
          behavior experts to keep the delight quotient always high, and new-age
          thinkers and advisors who push us to keep raising the bar.{" "}
        </p>
        <h3>Team</h3>
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
