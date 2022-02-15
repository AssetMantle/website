import React from "react";
import { FooterContainer } from "../styles/layout/FooterStyle";
import DATA from "../data/footerData.json";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState();
  console.log(email);

  return (
    <FooterContainer>
      <h2 className="footer__title">Get in touch</h2>
      <p className="footer__details">We would love to hear from you.</p>
      <div className="footer_container">
        <div className="footer_container__element">
          <div className="footer_container__element_emails">
            <img
              src="/images/email_icon.png"
              alt="email icon"
              className="footer_container__element_emails__icon"
            />
            <h3 className="footer_container__element_emails__title">Email</h3>
          </div>

          <div className="footer_container__element_email__tile">
            <h4 className="footer_container__element_email__tile_title">
              Fro Information And Support:
            </h4>
            <a
              className="footer_container__element_email__tile_email"
              href="mailto:hello@assetmantle.one"
            >
              hello@assetmantle.one
            </a>
          </div>

          <div className="footer_container__element_email__tile">
            <h4 className="footer_container__element_email__tile_title">
              For Collaboration And Interests
            </h4>
            <a
              className="footer_container__element_email__tile_email"
              href="mailto:communication@assetmantle.one"
            >
              communication@assetmantle.one
            </a>
          </div>

          <div className="footer_container__element_social">
            <h3 className="footer_container__element_social__title">
              {DATA.social.h3}
            </h3>
            <div className="footer_container__element_social__icons">
              {React.Children.toArray(
                DATA.social.links.map((data) => (
                  <a
                    className="footer_container__element_social__icons_icon"
                    href={data.href}
                  >
                    <img src={`/images/${data.icon}.png`} alt={data.alt} />
                  </a>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="footer_container__element_2">
          <div className="footer_container__element_2__subscribe">
            <h3 className="footer_container__element_2__subscribe_title">
              Join our Whitelist
            </h3>
            <p className="footer_container__element_2__subscribe_label">
              Your Email ID
            </p>
            <form className="footer_container__element_2__subscribe_form">
              <input
                type="email"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Join</button>
            </form>
          </div>
          <div className="footer_container__element_2__links">
            <p className="footer_container__element_2__links_link">
              Spotted something wrong?&nbsp;
              <button>Bug Bounty</button>
            </p>
            <p className="footer_container__element_2__links_link">
              Have something in mind?&nbsp;
              <button>Suggest Feature</button>
            </p>
            <p className="footer_container__element_2__links_link">
              Want to know what we're upto?&nbsp;
              <a
                href="http://blog.assetmantle.one/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </p>
            <p className="footer_container__element_2__links_link">
              Want to know more?&nbsp;
              <a
                href="https://docs.assetmantle.one/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Docs
              </a>
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
