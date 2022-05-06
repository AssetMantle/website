import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import HeaderContainer, { NavIcon } from "../styles/layout/HeaderContainer";
import Nav from "./Nav";

import DATA from "../data/headerData.json";
import FAQData from "../data/homeData.json";

function Header({ theme = false, setTheme }) {
  const [navToggler, setNavToggler] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setNavToggler(false);
  }, [location.pathname]);

  const FAQ = [
    {
      id: FAQData.faq.qas[0].id,
      question: FAQData.faq.qas[0].q,
    },
    {
      id: FAQData.faq.qas[1].id,
      question: FAQData.faq.qas[1].q,
    },
    {
      id: FAQData.faq.qas[2].id,
      question: FAQData.faq.qas[2].q,
    },
    {
      id: FAQData.faq.qas[3].id,
      question: FAQData.faq.qas[3].q,
    },
    {
      id: FAQData.faq.qas[4].id,
      question: FAQData.faq.qas[4].q,
    },
  ];

  return (
    <HeaderContainer>
      <div className="header__left">
        <Link to="/">
          <img
            src="/images/icons/logo.svg"
            alt=""
            className="AssetMantle.one"
          />
        </Link>
      </div>
      <div className="header__right">
        <div className="header__right_second__nav">
          {DATA.headerButtons.themeToggler.visibility && (
            <div className="header__right_second__nav_theme__toggler">
              <img
                src="/images/icons/moon.svg"
                alt="moon icon"
                className={`moon ${theme ? "" : "active"}`}
              />

              <div
                className={`header__right_second__nav_theme__toggler_button ${
                  !theme ? "" : "active"
                }`}
                onClick={() => setTheme(!theme)}
                onKeyPress={(e) => e.key === "Enter" && setTheme(!theme)}
                tabIndex="0"
                role="button"
              >
                <div
                  className={`header__right_second__nav_theme__toggler_button__dot ${
                    !theme ? "" : "active"
                  }`}
                ></div>
              </div>

              <img
                src="/images/icons/sun.svg"
                alt="sun icon"
                className={`sun ${!theme ? "" : "active"}`}
              />
            </div>
          )}
          <div className="header__right_second__nav_buttons">
            <div className="header__right_second__nav_buttons__drop">
              Learn
              <img src="/images/header/down_arrow.png" alt="down arrow" />
              <div className="header__right_second__nav_buttons__drop_down">
                <div className="header__right_second__nav_buttons__drop_down__grid two">
                  <div className="header__right_second__nav_buttons__drop_down__grid_element">
                    <div className="header__right_second__nav_buttons__drop_down__grid_element__title">
                      Docs
                    </div>
                    <div className="header__right_second__nav_buttons__drop_down__grid_element__body">
                      <a
                        href="https://docs.assetmantle.one/AssetMantle_Whitepaper/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
                      >
                        Whitepaper
                      </a>
                      <a
                        href="https://docs.assetmantle.one/About_AssetMantle#what-is-assetmantle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
                      >
                        What is AssetMantle
                      </a>
                    </div>
                  </div>
                  <div className="header__right_second__nav_buttons__drop_down__grid_element">
                    <div className="header__right_second__nav_buttons__drop_down__grid_element__title">
                      Faq
                    </div>
                    <div className="header__right_second__nav_buttons__drop_down__grid_element__body">
                      {React.Children.toArray(
                        FAQ.map((data) => (
                          <a
                            href={`#${data.id}`}
                            className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
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
            <div className="header__right_second__nav_buttons__drop">
              Network
              <img src="/images/header/down_arrow.png" alt="down arrow" />
              <div className="header__right_second__nav_buttons__drop_down">
                <div className="header__right_second__nav_buttons__drop_down__grid two">
                  <div className="header__right_second__nav_buttons__drop_down__grid_element">
                    <div className="header__right_second__nav_buttons__drop_down__grid_element__title">
                      Native
                    </div>
                    <div className="header__right_second__nav_buttons__drop_down__grid_element__body">
                      <a
                        href="https://wallet.assetmantle.one/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
                      >
                        AssetMantle Wallet
                      </a>
                      <a
                        href="https://explorer.assetmantle.one/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
                      >
                        AssetMantle Explorer
                      </a>
                    </div>
                  </div>
                  <div className="header__right_second__nav_buttons__drop_down__grid_element">
                    <div className="header__right_second__nav_buttons__drop_down__grid_element__title">
                      External Tools
                    </div>
                    <div className="header__right_second__nav_buttons__drop_down__grid_element__body">
                      <div className="header__right_second__nav_buttons__drop_down__grid_element__body_line">
                        <div className="header__right_second__nav_buttons__drop_down__grid_element__body_link">
                          Wallet
                        </div>
                        <div className="header__right_second__nav_buttons__drop_down__grid_element__body_link">
                          Explorer
                        </div>
                      </div>
                      <div className="header__right_second__nav_buttons__drop_down__grid_element__body_line">
                        <a
                          href="a"
                          onClick={(e) => e.preventDefault()}
                          className="header__right_second__nav_buttons__drop_down__grid_element__body_link hovered"
                        >
                          <span>Keplr</span>
                          <span>Coming Soon</span>
                        </a>
                        <a
                          href="https://www.mintscan.io/asset-mantle"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
                        >
                          Mintscan
                        </a>
                        <a
                          href="a"
                          onClick={(e) => e.preventDefault}
                          className="header__right_second__nav_buttons__drop_down__grid_element__body_link hovered"
                        >
                          <span>Cosmostation</span>
                          <span>Coming Soon</span>
                        </a>
                        <a
                          href="https://explorer.postcapitalist.io/AssetMantle"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
                        >
                          Postcapitalist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__right_second__nav_buttons__drop">
              Community
              <img src="/images/header/down_arrow.png" alt="down arrow" />
              <div className="header__right_second__nav_buttons__drop_down">
                <div className="header__right_second__nav_buttons__drop_down__grid one">
                  <div className="header__right_second__nav_buttons__drop_down__grid_element">
                    <div className="header__right_second__nav_buttons__drop_down__grid_element__body">
                      <a
                        href="https://twitter.com/AssetMantle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
                      >
                        <img
                          src="/images/header/twitter.png"
                          alt="Twitter icon"
                        />
                        Twitter
                      </a>
                      <a
                        href="https://discord.gg/BSdBQ4495d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
                      >
                        <img
                          src="/images/header/discord.png"
                          alt="Discord icon"
                        />
                        Discord
                      </a>
                      <a
                        href="https://www.instagram.com/assetmantle/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
                      >
                        <img
                          src="/images/header/instagram.png"
                          alt="Instagram icon"
                        />
                        Instagram
                      </a>
                      <a
                        href="https://t.me/assetmantlechat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
                      >
                        <img
                          src="/images/header/telegram.png"
                          alt="Telegram icon"
                        />
                        Telegram
                      </a>
                      <a
                        href="https://github.com/AssetMantle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
                      >
                        <img
                          src="/images/header/github.png"
                          alt="github icon"
                        />
                        Github
                      </a>
                      <a
                        href="https://www.reddit.com/r/AssetMantle/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
                      >
                        <img
                          src="/images/header/reddit.png"
                          alt="reddit icon"
                        />
                        Reddit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__right_second__nav_buttons__drop">
              $MNTL
              <img src="/images/header/down_arrow.png" alt="down arrow" />
              <div className="header__right_second__nav_buttons__drop_down">
                <div className="header__right_second__nav_buttons__drop_down__grid one">
                  <div className="header__right_second__nav_buttons__drop_down__grid_element">
                    <div className="header__right_second__nav_buttons__drop_down__grid_element__body">
                      <a
                        href="https://blog.assetmantle.one/2022/03/01/mntl-tokenomics-and-utility/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
                      >
                        Tokenomics
                      </a>
                      <a
                        href="https://airdrop.assetmantle.one/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__right_second__nav_buttons__drop_down__grid_element__body_link"
                      >
                        MantleDrop
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavIcon
          className="toggler"
          tabIndex="0"
          role="button"
          onClick={() => setNavToggler(!navToggler)}
          onKeyPress={(e) => e.key === "Enter" && setNavToggler(!navToggler)}
        >
          {navToggler ? (
            <img src="/images/header/close.png" alt="close" />
          ) : (
            <img src="/images/header/hm_menu.png" alt="hamburger" />
          )}
        </NavIcon>
      </div>
      {navToggler && <Nav />}
    </HeaderContainer>
  );
}

export default Header;
