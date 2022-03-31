import React, { useState } from "react";
import { HomeContainer } from "../styles/pages/HomeStyle.js";
import DATA from "../data/homeData.json";
import { teamMemberData } from "../data/teamData.js";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
} from "../components/Buttons.js";
import UList from "../styles/components/UList.js";
import TeamMemberCard from "../components/TeamMemberCard.js";

console.table(teamMemberData);

export default function Home() {
  const [section5, setSection5] = useState(DATA.section5.options[0].name);

  return (
    <HomeContainer>
      <section className="section_1">
        <div className="section_1__left">
          <div className="section_1__left_box2">
            <img src="/images/hero_NFT_image.png" alt="NFT" />
          </div>
          {/* <div className="section_1__left_box">
            <img src="/images/hero_NFT_image.png" alt="preview" />
            <div className="section_1__left_box__details2">
              <h3>Coming soon!</h3>
            </div>
            <div className="section_1__left_box__details">
              <img
                src="/images/profile.png"
                alt="profile"
                className="section_1__left_box__details_profile"
              />
              <div className="section_1__left_box__details_data">
                <h4>{DATA.section1.left.name}</h4>
                <p>{DATA.section1.left.eth}</p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="gap"></div>
        <div className="section_1__right">
          <h1 dangerouslySetInnerHTML={{ __html: DATA.section1.right.h1 }}></h1>
          <p>{DATA.section1.right.p}</p>
        </div>
      </section>
      <section className="section_2">
        <div className="section_2__element">
          <img src="/images/Group151.png" alt="" />
          <div className="section_2__element_details">
            <h2>{DATA.section2.left.h2}</h2>
            <p>{DATA.section2.left.p_l}</p>
            <ButtonTertiary
              href={DATA.section2.left.href}
              text={DATA.section2.left.a}
              leftArrow
              comingSoon={true}
            />
          </div>
        </div>
        <div className="section_2__element">
          <img src="/images/Group249.png" alt="" />
          <div className="section_2__element_details">
            <h2>{DATA.section2.right.h2}</h2>
            <p>{DATA.section2.right.p_l}</p>
            <ButtonTertiary
              href={DATA.section2.right.href}
              text={DATA.section2.right.a}
              leftArrow
              comingSoon={true}
            />
          </div>
        </div>
      </section>
      <section className="section_3">
        <h2>
          Become a part of the booming NFT community<a href="#Source">*</a>
        </h2>
        <div className="section_3_element_con">
          <div className="section_3__element">
            <img
              src={`/images/${DATA.section3.left.img}.png`}
              alt="world icon"
            />
            <h2>
              22 billion+
              <br /> Sales in USD
            </h2>
          </div>
          <div className="section_3__element">
            <img
              src={`/images/${DATA.section3.middle.img}.png`}
              alt="world icon"
            />
            <h2>
              35.6 million+
              <br /> Total Sales
            </h2>
          </div>
          <div className="section_3__element">
            <img
              src={`/images/${DATA.section3.right.img}.png`}
              alt="world icon"
            />
            <h2>
              3 million+
              <br /> Active Wallets
            </h2>
          </div>
        </div>
      </section>
      <section className="section_4">
        <div className="section_4__element">
          <h2>{DATA.section4.left.h2}</h2>
          <p>{DATA.section4.left.p_l}</p>
          <UList data={DATA.section4.left.list} />
        </div>
        <div className="section_4__element">
          <img src="/images/Group289.png" alt="" />
        </div>
      </section>
      <section className="section_5">
        <h2>{DATA.section5.h2}</h2>
        <p>{DATA.section5.p_l}</p>
        <div className="section_5__element one">
          {DATA.section5.options &&
            React.Children.toArray(
              DATA.section5.options.map((data) => (
                <div className="section_5__element_options">
                  <h3
                    className={section5 === data.name ? "active" : ""}
                    onClick={() => setSection5(data.name)}
                    tabIndex="0"
                    onKeyPress={(e) =>
                      e.key === "Enter" && setSection5(data.name)
                    }
                    role="button"
                  >
                    {data.name}
                  </h3>
                </div>
              ))
            )}
        </div>
        {section5 && (
          <div className="section_5__element two__storebuilder">
            {DATA.section5.options &&
              React.Children.toArray(
                DATA.section5.options
                  .filter((e) => e.name === section5)[0]
                  .content.map((data) => (
                    <div className="section_5__element_content">
                      <img
                        src={`/images/${data.img}.png`}
                        alt={data.h3}
                        className="section_5__element_content__img"
                      />
                      <h3 className="section_5__element_content__title">
                        {data.h3}
                      </h3>
                      <p className="section_5__element_content__description">
                        {data.p_m}
                      </p>
                    </div>
                  ))
              )}
          </div>
        )}
      </section>
      <section className="section_6">
        <div className="section_6__element">
          <h2>{DATA.section6.h2}</h2>
          <p>{DATA.section6.p_l}</p>
        </div>
        <ButtonPrimary
          text={DATA.section6.bp}
          href={DATA.section6.href}
          targetBlank={true}
        />
      </section>
      {/* <section className="section_7">
        <div className="section_7__element">
          <img src={`/image/${DATA.section7.leftImg}.png`} alt="" />
        </div>
        <div className="section_7__element">
          <h2>{DATA.section7.mid.h2}</h2>
          <p>{DATA.section7.mid.p_l}</p>
        </div>
        <div className="section_7__element">
          <ButtonSecondary text={DATA.section7.rightButton} />
        </div>
      </section> */}
      <section className="am_diff">
        <h2>{DATA.amDif.h2}</h2>
        <p>{DATA.amDif.p_l}</p>
        <div className="am_diff__element">
          {React.Children.toArray(
            DATA.amDif.contents.map((data) => (
              <div className="am_diff__element_content">
                <img src={`/images/${data.img}.png`} alt="" />
                <div className="am_diff__element_content__right">
                  <h3>{data.h3}</h3>
                  <p>{data.p_m}</p>
                </div>
              </div>
            ))
          )}
        </div>
        {/* <p className="am_diff__link">
          {DATA.amDif.p_l2} <a href={DATA.amDif.href}>{DATA.amDif.link}</a>
        </p> */}
      </section>
      <section className="section_team">
        <h2>Meet the team</h2>
        <p>Get to know the AssetMantle team </p>
        <div className="section_team__container">
          {teamMemberData[0] && (
            <TeamMemberCard
              imgSrc={
                teamMemberData[0].image !== null &&
                teamMemberData[0].image !== undefined &&
                teamMemberData[0].image !== ""
                  ? teamMemberData[0].image
                  : "placeholder.png"
              }
              name={teamMemberData[0].name}
              position={teamMemberData[0].designation}
              social={teamMemberData[0].social}
              key={teamMemberData[0].name + teamMemberData[0].designation}
            />
          )}
          {teamMemberData[1] && (
            <TeamMemberCard
              imgSrc={
                teamMemberData[1].image !== null &&
                teamMemberData[1].image !== undefined &&
                teamMemberData[1].image !== ""
                  ? teamMemberData[1].image
                  : "placeholder.png"
              }
              name={teamMemberData[1].name}
              position={teamMemberData[1].designation}
              social={teamMemberData[1].social}
              key={teamMemberData[1].name + teamMemberData[1].designation}
            />
          )}
          {teamMemberData[2] && (
            <TeamMemberCard
              imgSrc={
                teamMemberData[2].image !== null &&
                teamMemberData[2].image !== undefined &&
                teamMemberData[2].image !== ""
                  ? teamMemberData[2].image
                  : "placeholder.png"
              }
              name={teamMemberData[2].name}
              position={teamMemberData[2].designation}
              social={teamMemberData[2].social}
              key={teamMemberData[2].name + teamMemberData[2].designation}
            />
          )}
          {teamMemberData[3] && (
            <TeamMemberCard
              imgSrc={
                teamMemberData[3].image !== null &&
                teamMemberData[3].image !== undefined &&
                teamMemberData[3].image !== ""
                  ? teamMemberData[3].image
                  : "placeholder.png"
              }
              name={teamMemberData[3].name}
              position={teamMemberData[3].designation}
              social={teamMemberData[3].social}
              key={teamMemberData[3].name + teamMemberData[3].designation}
            />
          )}
        </div>
        <div className="section_team__button">
          <ButtonSecondary text="View More" href="/about#team" />
        </div>
      </section>
      <section className="section_source">
        <span id="Source"></span>
        <p>
          *Source:{" "}
          <a
            href="https://nonfungible.com/market/history"
            target="_blank"
            rel="noopener noreferrer"
          >
            NFT Market History
          </a>
        </p>
      </section>
    </HomeContainer>
  );
}
