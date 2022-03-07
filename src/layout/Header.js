import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ButtonPrimary, ButtonSecondary } from "../components/Buttons";

import HeaderContainer, { NavIcon } from "../styles/layout/HeaderContainer";
import Nav from "./Nav";

import DATA from "../data/headerData.json";

function Header({ theme = false, setTheme }) {
  const [navToggler, setNavToggler] = useState(false);

  const [padding, setPadding] = useState("padding_1");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY !== 0 ? setPadding("padding_2") : setPadding("padding_1");
    });
    window.removeEventListener("scroll", () => {
      window.scrollY !== 0 ? setPadding("padding_2") : setPadding("padding_1");
    });
  }, []);

  const location = useLocation();

  useEffect(() => {
    setNavToggler(false);
  }, [location.pathname]);

  return (
    <HeaderContainer className={padding}>
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
                text={DATA.headerButtons.primary.text}
                href={DATA.headerButtons.primary.href}
                title="coming soon"
                comingSoon={true}
              />
            )}
            {DATA.headerButtons.secondary.visibility && (
              <ButtonSecondary
                text={DATA.headerButtons.secondary.text}
                href={DATA.headerButtons.secondary.href}
                title="coming soon"
                comingSoon={true}
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
