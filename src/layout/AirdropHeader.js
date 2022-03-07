import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../styles/layout/HeaderContainer";

export default function AirdropHeader() {
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
      <div className="header__left">
        <Link to="/airdrop">
          <img
            src="/images/icons/logo.svg"
            alt="AssetMantle"
            className="AssetMantle.one"
          />
        </Link>
        <Link to="/airdrop">Airdrop</Link>
      </div>
      <div className="header__right">
        <div className="header__right_one">
          <Link to="/">assetmantle.one</Link>
        </div>
      </div>
    </HeaderContainer>
  );
}
