import React from "react";
import { FooterContainer } from "../styles/layout/FooterStyle";
import DATA from "../data/footerData.json";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState();
  console.log(email);

  return (
    <FooterContainer>
      <h2 className="footer__title">{DATA.h2}</h2>
      <p className="footer__details">{DATA.p_l}</p>
      <div className="footer_container">
        <div className="footer_container__element">
          <h3>{DATA.left.h3}</h3>
          <p className="footer_container__element_label">{DATA.left.p_s}</p>
          <form className="footer_container__element_form">
            <input
              type="email"
              placeholder={DATA.left.placeHolder}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Join</button>
          </form>
        </div>
        <div className="footer_container__element">
          <h3>{DATA.right.h3}</h3>
          <div className="footer_container__element_media__icons">
            {React.Children.toArray(
              DATA.right.links.map((data) => (
                <a
                  className="footer_container__element_media__icons_icon"
                  href={data.href}
                >
                  <img src={`/images/${data.icon}.png`} alt={data.alt} />
                </a>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="footer_container">
        <div className="footer_container__element">
          <p>
            {DATA.left.link_1.text}
            <a
              href={DATA.left.link_1.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {DATA.left.link_1.btnTr}
            </a>
          </p>
          <p>
            {DATA.left.link_2.text}
            <a
              href={DATA.left.link_2.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {DATA.left.link_2.btnTr}
            </a>
          </p>
        </div>
        <div className="footer_container__element">
          <p>
            <a
              href={DATA.right.link1.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {DATA.right.link1.text}
            </a>
          </p>
          <p>
            <a
              href={DATA.right.link2.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {DATA.right.link2.text}
            </a>
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
