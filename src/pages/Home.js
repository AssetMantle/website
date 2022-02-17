import { HomeContainer } from "../styles/pages/HomeStyle.js";
import DATA from "../data/homeData.json";
import { ButtonPrimary, ButtonTertiary } from "../components/Buttons.js";
import UList from "../styles/components/UList.js";
import React, { useState } from "react";

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
            <h2>{DATA.section3.left.h2}</h2>
          </div>
          <div className="section_3__element">
            <img
              src={`/images/${DATA.section3.middle.img}.png`}
              alt="world icon"
            />
            <h2>{DATA.section3.middle.h2}</h2>
          </div>
          <div className="section_3__element">
            <img
              src={`/images/${DATA.section3.right.img}.png`}
              alt="world icon"
            />
            <h2>{DATA.section3.right.h2}</h2>
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
        <ButtonPrimary text={DATA.section6.bp} href={DATA.section6.href} />
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
      <section className="section_source">
        <span id="Source"></span>
        <p>
          *Source:{" "}
          <a
            href="https://www.statista.com/statistics/1235228/nft-art-monthly-sales-volume/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.statista.com/statistics/1235228/nft-art-monthly-sales-volume/
          </a>
        </p>
      </section>
    </HomeContainer>
  );
}
