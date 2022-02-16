import React from "react";
import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { FooterContainer } from "../styles/layout/FooterStyle";

import DATA from "../data/footerData.json";
import BugBountyModal from "../components/BugBountyModal";
import SubscribeForm from "../components/SubscribeForm";

const mailURl = process.env.REACT_APP_MAIL_CHIMP_URL;
console.log(mailURl);

const Footer = () => {
  const [email, setEmail] = useState();
  const [bugBountyModalStat, setBugBountyModalStat] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

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
              target="_blank"
              rel="noopener noreferrer"
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
              href="mailto:communications@assetmantle.one"
              target="_blank"
              rel="noopener noreferrer"
            >
              communications@assetmantle.one
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
            {/* <div className="footer_container__element_2__subscribe_form">
              <MailchimpSubscribe
                url={`https://one.us20.list-manage.com/subscribe/post?u=37c5b698f25664907f640640b&amp;id=11dfe43af3`}
                render={({ subscribe, status, message }) => (
                  <SubscribeForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                )}
              />
            </div> */}
            <form
              className="footer_container__element_2__subscribe_form"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="example@gmail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" onSubmit={(e) => e.preventDefault}>
                Join
              </button>
            </form>
          </div>
          <div className="footer_container__element_2__links">
            <p className="footer_container__element_2__links_link">
              Spotted something wrong?&nbsp;
              <button
                className="footer_container__element_2__links_link__button coming"
                onClick={() => setBugBountyModalStat(true)}
              >
                <span>Bug Bounty</span>
                <span>Coming soon</span>
              </button>
            </p>
            <p className="footer_container__element_2__links_link">
              Have something in mind?&nbsp;
              <button className="footer_container__element_2__links_link__button coming">
                <span>Suggest Feature</span>
                <span>Coming soon</span>
              </button>
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
      {bugBountyModalStat === "" && (
        <BugBountyModal closeModal={setBugBountyModalStat} />
      )}
    </FooterContainer>
  );
};

export default Footer;
