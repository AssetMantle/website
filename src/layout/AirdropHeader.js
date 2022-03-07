import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderContainer, { NavIcon } from "../styles/layout/HeaderContainer";
import Nav from "./Nav";

export default function AirdropHeader() {
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

  return (
    <HeaderContainer className={padding}>
      <div className="header__left airdrop">
        <Link to="/airdrop">
          <img
            src="/images/icons/logo.svg"
            alt="AssetMantle"
            className="AssetMantle.one"
          />
        </Link>
        <h2 className="airdrop_text">Airdrop</h2>
      </div>
      <div className="header__right ">
        <div className="header__right_one">
          <Link to="/">assetmantle.one</Link>
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
      </div>
      {navToggler && <Nav />}
    </HeaderContainer>
  );
}
