import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import DATA from "../data/headerData.json";
import FAQData from "../data/homeData.json";

// icons
import { BsTwitter } from "react-icons/bs";
import {
  FaDiscord,
  FaInstagram,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";
import { GrReddit } from "react-icons/gr";
import { BsFillCaretDownFill } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";

export default function Nav() {
  const { t } = useTranslation();

  const location = useLocation();
  const [details, setDetails] = useState(false);

  const FAQ = [
    {
      id: FAQData.faq.qas[0].id,
      question: t("FAQ_QUESTION_1"),
    },
    {
      id: FAQData.faq.qas[1].id,
      question: t("FAQ_QUESTION_2"),
    },
    {
      id: FAQData.faq.qas[2].id,
      question: t("FAQ_QUESTION_3"),
    },
    {
      id: FAQData.faq.qas[3].id,
      question: t("FAQ_QUESTION_4"),
    },
    {
      id: FAQData.faq.qas[4].id,
      question: t("FAQ_QUESTION_5"),
    },
  ];

  return (
    <NavContainer>
      <div className="nav__container">
        <div className="nav__container_box">
          {DATA &&
            React.Children.toArray(
              DATA.navItems.normal.map((data) => (
                <>
                  {data.visibility && (
                    <>
                      {data.href && data.href.charAt(0) === "/" ? (
                        data.href === "/" ? (
                          <>
                            <NavLink
                              to={data.href}
                              className={
                                location.pathname === data.href && "active"
                              }
                            >
                              {data.text}
                            </NavLink>
                            <div className="nav__container_box_second__nav">
                              <div className="nav__container_box_second__nav_buttons">
                                <div className="nav__container_box_second__nav_buttons__drop">
                                  <div className="nav__container_box_second__nav_buttons__drop_d">
                                    {t("RESOURCE")}
                                    <img
                                      src="/images/header/down_arrow.png"
                                      alt="down arrow"
                                    />
                                  </div>
                                  <div className="nav__container_box_second__nav_buttons__drop_down">
                                    <div className="nav__container_box_second__nav_buttons__drop_down__grid two">
                                      <div className="nav__container_box_second__nav_buttons__drop_down__grid_element">
                                        <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__title">
                                          {t("DOCS")}
                                        </div>
                                        <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body">
                                          <a
                                            href="https://docs.assetmantle.one/AssetMantle_Whitepaper/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                          >
                                            {t("WHITEPAPER")}
                                          </a>
                                          <a
                                            href="https://docs.assetmantle.one/About_AssetMantle#what-is-assetmantle"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                          >
                                            {t("WHAT_IS_ASSETMANTLE")}
                                          </a>
                                        </div>
                                      </div>
                                      <div className="nav__container_box_second__nav_buttons__drop_down__grid_element">
                                        <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__title">
                                          {t("FAQ")}
                                        </div>
                                        <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body">
                                          {React.Children.toArray(
                                            FAQ.map((data) => (
                                              <a
                                                href={`#${data.id}`}
                                                className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                              >
                                                {data.question}
                                              </a>
                                            ))
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="nav__container_box_second__nav_buttons__drop">
                                  <div className="nav__container_box_second__nav_buttons__drop_d">
                                    {t("NETWORK")}
                                    <img
                                      src="/images/header/down_arrow.png"
                                      alt="down arrow"
                                    />
                                  </div>
                                  <div className="nav__container_box_second__nav_buttons__drop_down">
                                    <div className="nav__container_box_second__nav_buttons__drop_down__grid two">
                                      <div className="nav__container_box_second__nav_buttons__drop_down__grid_element">
                                        <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__title">
                                          {t("NATIVE")}
                                        </div>
                                        <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body">
                                          <a
                                            href="https://wallet.assetmantle.one/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                          >
                                            {t("ASSETMANTLE_WALLET")}
                                          </a>
                                          <a
                                            href="https://explorer.assetmantle.one/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                          >
                                            {t("ASSETMANTLE_EXPLORER")}
                                          </a>
                                        </div>
                                      </div>
                                      <div className="nav__container_box_second__nav_buttons__drop_down__grid_element">
                                        <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__title">
                                          {t("EXTERNAL_TOOLS")}
                                        </div>
                                        <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body">
                                          <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_line">
                                            <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link title">
                                              {t("WALLET")}
                                            </div>
                                            <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link title">
                                              {t("EXPLORER")}
                                            </div>
                                          </div>
                                          <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_line">
                                            <a
                                              href="a"
                                              onClick={(e) =>
                                                e.preventDefault()
                                              }
                                              className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link small hovered"
                                            >
                                              <span>{t("KEPLR")}</span>
                                              <span>{t("COMING_SOON")}</span>
                                            </a>
                                            <a
                                              href="https://www.mintscan.io/asset-mantle"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link small"
                                            >
                                              {t("MINTSCAN")}
                                            </a>
                                            <a
                                              href="https://wallet.cosmostation.io/asset-mantle"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link small hovered"
                                            >
                                              {t("COSMOSTATION")}
                                            </a>
                                            <a
                                              href="https://explorer.postcapitalist.io/AssetMantle"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link small"
                                            >
                                              {t("POSTCAPITALIST")}
                                            </a>
                                            <a
                                              href="https://everstake.one/assetmantle"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link small"
                                            >
                                              {t("EVERSTAKE")}
                                            </a>
                                            <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link small"></div>
                                            <a
                                              href="https://app.citadel.one/"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link small"
                                            >
                                              {t("CIATDEL")}
                                            </a>
                                            <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link small"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="nav__container_box_second__nav_buttons__drop">
                                  <div className="nav__container_box_second__nav_buttons__drop_d">
                                    {t("CONNECT")}
                                    <img
                                      src="/images/header/down_arrow.png"
                                      alt="down arrow"
                                    />
                                  </div>
                                  <div className="nav__container_box_second__nav_buttons__drop_down">
                                    <div className="nav__container_box_second__nav_buttons__drop_down__grid one">
                                      <div className="nav__container_box_second__nav_buttons__drop_down__grid_element">
                                        <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body">
                                          <a
                                            href="https://twitter.com/AssetMantle"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                          >
                                            <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link_icon">
                                              <BsTwitter />
                                            </div>
                                            Twitter
                                          </a>
                                          <a
                                            href="https://discord.gg/BSdBQ4495d"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                          >
                                            <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link_icon">
                                              <FaDiscord />
                                            </div>
                                            Discord
                                          </a>
                                          <a
                                            href="https://www.instagram.com/assetmantle/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                          >
                                            <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link_icon">
                                              <FaInstagram />
                                            </div>
                                            Instagram
                                          </a>
                                          <a
                                            href="https://t.me/assetmantlechat"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                          >
                                            <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link_icon">
                                              <FaTelegramPlane />
                                            </div>
                                            Telegram
                                          </a>
                                          <a
                                            href="https://github.com/AssetMantle"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                          >
                                            <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link_icon">
                                              <FaGithub />
                                            </div>
                                            Github
                                          </a>
                                          <a
                                            href="https://www.reddit.com/r/AssetMantle/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                          >
                                            <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link_icon">
                                              <GrReddit />
                                            </div>
                                            Reddit
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="nav__container_box_second__nav_buttons__drop">
                                  <div className="nav__container_box_second__nav_buttons__drop_d">
                                    $MNTL
                                    <img
                                      src="/images/header/down_arrow.png"
                                      alt="down arrow"
                                    />
                                  </div>
                                  <div className="nav__container_box_second__nav_buttons__drop_down">
                                    <div className="nav__container_box_second__nav_buttons__drop_down__grid two">
                                      <div className="nav__container_box_second__nav_buttons__drop_down__grid_element">
                                        <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__title">
                                          {t("TOKEN")}
                                        </div>
                                        <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body">
                                          <a
                                            href="https://blog.assetmantle.one/2022/03/01/mntl-tokenomics-and-utility/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                          >
                                            {t("TOKENOMICS")}
                                          </a>
                                          <a
                                            href="https://airdrop.assetmantle.one/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                          >
                                            {t("MANTLEDROP")}
                                          </a>
                                        </div>
                                      </div>
                                      <div className="nav__container_box_second__nav_buttons__drop_down__grid_element">
                                        <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__title">
                                          {t("TRACKING")}
                                        </div>
                                        <div className="nav__container_box_second__nav_buttons__drop_down__grid_element__body">
                                          <a
                                            href="https://www.coingecko.com/en/coins/assetmantle/usd"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                          >
                                            {t("COINGECKO")}
                                          </a>
                                          <a
                                            href="https://coinmarketcap.com/currencies/assetmantle/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__container_box_second__nav_buttons__drop_down__grid_element__body_link"
                                          >
                                            {t("COINMARKETCAP")}
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <NavLink
                            to={data.href}
                            className={
                              location.pathname === data.href && "active"
                            }
                          >
                            {data.text}
                          </NavLink>
                        )
                      ) : data.href === undefined || data.href === null ? (
                        <NavDetails
                          onClick={() => setDetails(!details)}
                          className={
                            location.pathname === data.href && "active"
                          }
                        >
                          <div className="title">
                            {data.text}{" "}
                            {data.icon === "down-fill" && (
                              <span className={details ? "active" : undefined}>
                                <BsFillCaretDownFill />
                              </span>
                            )}
                          </div>
                          <div
                            className={`details_link ${
                              details ? "active" : undefined
                            }`}
                          >
                            {data.options.map((data) => (
                              <>
                                {data.visibility && (
                                  <NavLink
                                    to={data.href}
                                    className={
                                      location.pathname === data.href &&
                                      "active"
                                    }
                                  >
                                    {data.text}
                                  </NavLink>
                                )}
                              </>
                            ))}
                          </div>
                        </NavDetails>
                      ) : (
                        <NavLinkA
                          href={data.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.text}
                        </NavLinkA>
                      )}
                    </>
                  )}
                </>
              ))
            )}
          {DATA &&
            React.Children.toArray(
              DATA.navItems.spacial.map((data) => (
                <>
                  {data.visibility && (
                    <NavLinkExt
                      className={data.disable && "disabled"}
                      aria-disabled={data.disable}
                      onClick={(e) =>
                        data.disable
                          ? e.preventDefault()
                          : window.open(data.href, "_blank")
                      }
                    >
                      <span>
                        {data.text}
                        {data.icon === "external-link" && <CgArrowTopRight />}
                      </span>
                      {data.instruction}
                    </NavLinkExt>
                  )}
                </>
              ))
            )}
        </div>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  font-family: var(--font-primary);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(0, 0%, 6%, 0.7);
  z-index: 50;
  backdrop-filter: blur(7px);
  display: flex;
  justify-content: flex-end;
  .nav__container {
    position: relative;
    height: 100%;
    width: min(70%, 340px);
    padding: 61px 59px;
    background: #171717;
    backdrop-filter: blur(4px);
    @media (max-width: 548px) {
      padding: 61px 20px 60px 40px;
      width: min(90%, 340px);
    }
    &_box {
      height: 100%;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }

      &_second__nav {
        display: flex;
        /* align-items: center;
        justify-content: center;
        gap: 61.5px; */
        @media (min-width: 853px) {
          display: none;
        }
        &_theme__toggler {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          &_button {
            display: flex;
            align-items: center;
            background-color: var(--dark-s);
            padding: 6px;
            border-radius: 15px;
            width: 56px;
            &__dot {
              height: 21px;
              width: 21px;
              border-radius: 50%;
              background: var(--yellow-gradient-bg);
              margin-right: auto;
              margin-left: 0;
              transition: all ease-in 1s;
              &.active {
                margin-left: auto;
                margin-right: 0;
              }
            }
          }
        }
        &_buttons {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 40px;
          /* padding-left: 48px;
          padding-right: 48px; */
          &__drop {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            gap: 24px;
            font: 600 22px/120% "Lato", sans-serif;
            color: var(--header-color);
            /* padding: 25px 4px 20px; */
            padding: 0px 4px;
            border-bottom: 1px solid transparent;
            cursor: pointer;
            position: relative;
            width: 100%;
            user-select: none;
            &_d {
              display: flex;
              gap: 4px;
              align-items: center;
              img {
                width: 10px;
                height: auto;
              }
            }
            &_down {
              display: none;
              padding: 16px;
              /* position: absolute;
              top: 99.5%;
              right: 0; */
              background-color: var(--header-dropdown-bg);
              border-radius: 4px;
              filter: var(--header-dropdown-filter);
              width: max-content;
              &__grid {
                display: grid;
                gap: 24px;
                grid-template-columns: repeat(1, 1fr);
                /* &.one {
                  grid-template-columns: repeat(1, 1fr);
                }
                &.two {
                  grid-template-columns: repeat(2, 1fr);
                } */
                &_element {
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                  &__title {
                    text-transform: uppercase;
                    padding-bottom: 16px;
                    border-bottom: 2px solid var(--dark-s);
                    width: 100%;
                    color: var(--header-color);
                  }
                  &__body {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    &_line {
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      align-items: center;
                      justify-content: space-between;
                      gap: 16px;
                    }
                    &_link {
                      color: var(--header-color-s);
                      font: var(--p-s);
                      text-decoration: none;
                      max-width: 180px;
                      display: flex;
                      align-items: center;
                      gap: 16px;
                      img {
                        width: 40px;
                        height: auto;
                      }
                      &_icon {
                        width: 24px;
                        height: 24px;
                        background-color: black;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      }
                      &.hovered {
                        span {
                          &:nth-child(1) {
                            display: inline-block;
                          }
                          &:nth-child(2) {
                            display: none;
                          }
                        }
                      }
                      &:hover {
                        span {
                          &:nth-child(1) {
                            display: none;
                          }
                          &:nth-child(2) {
                            display: inline-block;
                          }
                        }
                        color: var(--yellow);
                        .header__right_second__nav_buttons__drop_down__grid_element__body_link_icon {
                          color: var(--yellow);
                        }
                      }
                      &.title {
                        padding-bottom: 6px;
                        border-bottom: 2px solid var(--dark-s);
                        color: var(--header-color-m);
                        &:hover {
                          color: var(--header-color-m);
                        }
                      }
                      &.small {
                        font-size: 12px;
                      }
                    }
                  }
                }
              }
            }

            &:hover {
              /* border-bottom: 1px solid var(--yellow); */
              color: var(--yellow);
              .nav__container_box_second__nav_buttons__drop_down {
                display: grid;
              }
            }
          }
        }
      }

      @media (max-width: 548px) {
        padding-bottom: 70px;
      }
    }
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 4px;
  font: 600 22px/120% "Lato", sans-serif;
  color: var(--gray);
  border-bottom: 3px solid transparent;
  text-decoration: none;
  gap: 10px;
  span {
    color: var(--yellow);
    margin-top: 10px;
  }
  /* @media (max-width: 548px) {
    font: 600 var(--p-l);
  } */
  &.active {
    border-bottom: 3px solid var(--yellow);
    font: 600 26px/120% "Lato", sans-serif;
    margin-bottom: 8px;
  }
  &:hover {
    color: var(--gray);
    text-decoration: none;
  }
`;
const NavLinkA = styled.a`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 4px;
  font: 600 22px/120% "Lato", sans-serif;
  color: var(--gray);
  border-bottom: 3px solid transparent;
  text-decoration: none;
  gap: 10px;
  span {
    color: var(--yellow);
    margin-top: 10px;
  }
  /* @media (max-width: 548px) {
    font: 600 var(--p-l);
  } */
  &.active {
    border-bottom: 3px solid var(--yellow);
    font: 600 26px/120% "Lato", sans-serif;
    margin-bottom: 8px;
  }
  &:hover {
    color: var(--gray);
    text-decoration: none;
  }
`;

const NavDetails = styled.div`
  .title {
    display: flex;
    align-items: center;
    width: max-content;
    padding: 4px;
    font: 600 22px/120% "Lato", sans-serif;
    color: var(--gray);
    border-bottom: 3px solid transparent;
    text-decoration: none;
    gap: 10px;
    span {
      color: var(--yellow);
      /* margin-top: 10px; */
      display: flex;
      height: 100%;
      align-items: center;
      transform: rotate(0deg);
      transition: all 0.3s ease-in-out;
      &.active {
        transform: rotate(180deg);
      }
    }
    /* @media (max-width: 548px) {
      font: 600 var(--p-l);
    } */
    &.active {
      border-bottom: 3px solid var(--yellow);
      font: 600 26px/120% "Lato", sans-serif;
      margin-bottom: 8px;
    }
    &:hover {
      color: var(--gray);
      text-decoration: none;
    }
  }
  .details_link {
    display: none;
    flex-direction: column;
    a {
      padding-left: 30px;
      padding-top: 14.5px;
      &:not(:last-child) {
        padding-bottom: 14.5px;
      }
    }
    &.active {
      display: flex;
    }
  }
`;

const NavLinkExt = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  padding: 7px 4px;
  width: max-content;
  font: 600 16px/120% "Lato", sans-serif;
  color: var(--gray);
  border-bottom: 3px solid transparent;
  text-decoration: none;
  /* @media (max-width: 548px) {
    font: 600 var(--p-xs);
  } */
  span {
    font: 600 22px/120% "Lato", sans-serif;
    color: var(--yellow);
    /* @media (max-width: 548px) {
      font: 600 var(--p-l);
    } */
  }
  &:hover {
    color: var(--gray);
    text-decoration: none;
  }
  &.disabled {
    color: var(--gray-deep);
    cursor: not-allowed;
    span {
      color: var(--yellow-disabled);
    }
  }
`;
