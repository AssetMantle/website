import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ButtonPrimary,
  ButtonSecondary
} from "../components/Buttons";

import HeaderContainer, { NavIcon } from "../styles/layout/HeaderContainer";
import Nav from "./Nav";

import DATA from "../data/headerData.json";

function Header({ theme = false, setTheme }) {
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
          <div className="header__right_second__nav_buttons">
            {DATA.headerButtons.primary.visibility && (
              <ButtonPrimary
                text="MantleWallet"
                href="https://wallet.assetmantle.one/"
              />
            )}
            {DATA.headerButtons.secondary.visibility && (
              <ButtonSecondary
                text="MantleExplorer"
                href="https://explorer.assetmantle.one/"
              />
            )}
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
            <img src="/images/icons/close.png" alt="close" />
          ) : (
            <img src="/images/icons/hm_menu.png" alt="hamburger" />
          )}
        </NavIcon>
      </div>
      {navToggler && <Nav />}
    </HeaderContainer>
  );
}

export default Header;
