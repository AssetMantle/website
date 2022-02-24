import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HeaderContainer, { NavIcon } from "../styles/layout/HeaderContainer";

import Nav from "./Nav";

import DATA from "../data/headerData.json";

export const HeaderSecondary = ({ theme = false, setTheme }) => {
  const [navToggler, setNavToggler] = useState(false);

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
          <Container>
            <div
              className={`header__right_second__nav_sec__button ${
                window.location.hash === "#what_is_assetMantle" ||
                window.location.hash === "#how_it_works" ||
                window.location.hash === "#getting_started" ||
                window.location.hash === "#how_does_assetMantle_help_you" ||
                window.location.hash === "#the_assetMantle_difference"
                  ? "active"
                  : undefined
              }`}
              role="button"
              tabIndex="0"
            >
              What is AssetMantle?
              <div className="header__right_second__nav_sec__button_float">
                <a
                  href="#what_is_assetMantle"
                  className={`header__right_second__nav_sec__button_float__link ${
                    window.location.hash === "#what_is_assetMantle"
                      ? "active"
                      : ""
                  }`}
                >
                  What is AssetMantle?
                </a>
                <a
                  href="#how_it_works"
                  className={`header__right_second__nav_sec__button_float__link ${
                    window.location.hash === "#how_it_works" ? "active" : ""
                  }`}
                >
                  How It Works
                </a>
                <a
                  href="#getting_started"
                  className={`header__right_second__nav_sec__button_float__link ${
                    window.location.hash === "#getting_started" ? "active" : ""
                  }`}
                >
                  Getting Started
                </a>
                <a
                  href="#how_does_assetMantle_help_you"
                  className={`header__right_second__nav_sec__button_float__link ${
                    window.location.hash === "#how_does_assetMantle_help_you"
                      ? "active"
                      : ""
                  }`}
                >
                  How Does AssetMantle Help You
                </a>
                <a
                  href="#the_assetMantle_difference"
                  className={`header__right_second__nav_sec__button_float__link ${
                    window.location.hash === "#the_assetMantle_difference"
                      ? "active"
                      : ""
                  }`}
                >
                  The AssetMantle Difference
                </a>
              </div>
            </div>
            <div
              className={`header__right_second__nav_sec__button ${
                window.location.hash === "#featured_stores" ||
                window.location.hash === "#new_stores" ||
                window.location.hash === "#popular_stores"
                  ? "active"
                  : undefined
              }`}
              role="button"
              tabIndex="0"
            >
              Our Stores
              <div className="header__right_second__nav_sec__button_float">
                <a
                  href="#featured_stores"
                  className={`header__right_second__nav_sec__button_float__link ${
                    window.location.hash === "#featured_stores" ? "active" : ""
                  }`}
                >
                  Featured Stores
                </a>
                <a
                  href="#new_stores"
                  className={`header__right_second__nav_sec__button_float__link ${
                    window.location.hash === "#new_stores" ? "active" : ""
                  }`}
                >
                  New Stores
                </a>
                <a
                  href="#popular_stores"
                  className={`header__right_second__nav_sec__button_float__link ${
                    window.location.hash === "#popular_stores" ? "active" : ""
                  }`}
                >
                  Popular Stores
                </a>
              </div>
            </div>
            <a
              href="#whats_an_NFT"
              className={`header__right_second__nav_sec__button_link ${
                window.location.hash === "#whats_an_NFT" && "active"
              }`}
            >
              What’s an NFT?
            </a>
            <a
              href="#pricing"
              className={`header__right_second__nav_sec__button_link ${
                window.location.hash === "#pricing" && "active"
              }`}
            >
              Pricing
            </a>
          </Container>
        </div>
        <NavIcon
          className="toggler"
          tabIndex="0"
          role="button"
          onClick={() => setNavToggler(!navToggler)}
          onKeyPress={(e) => e.key === "Enter" && setNavToggler(!navToggler)}
        >
          {navToggler ? (
            <img src="/images/icons/close.png" alt="close" />
          ) : (
            <img src="/images/icons/hm_menu.png" alt="hamburger" />
          )}
        </NavIcon>
      </div>
      {navToggler && <Nav />}
    </HeaderContainer>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  color: var(--gray);
  font: 600 var(--p-s);
  padding-right: 24px;
  @media (max-width: 982px) {
    display: none;
  }
  .header__right_second__nav_sec__button {
    position: relative;
    &.active {
      color: var(--yellow);
    }
    &_float {
      position: absolute;
      right: 0;
      display: none;
      flex-direction: column;
      width: 234px;
      background-color: var(--dark-xs);
      border-radius: 12px;
      padding: 16px;
      gap: 16px;
      &__link {
        color: var(--gray);
        text-decoration: none;
        &.active {
          color: var(--yellow);
        }
        &:hover,
        &:focus {
          color: var(--yellow);
        }
      }
    }
    &_link {
      color: var(--gray);
      text-decoration: none;
      &.active {
        color: var(--yellow);
      }
      &:hover {
        color: var(--yellow);
      }
    }

    &:hover,
    &:focus {
      color: var(--yellow);
      .header__right_second__nav_sec__button_float {
        display: flex;
      }
    }
  }
`;
